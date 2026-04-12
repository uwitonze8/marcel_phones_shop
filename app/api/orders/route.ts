import { NextRequest, NextResponse } from 'next/server';
import { db, Order, Customer } from '@/lib/supabase';
import { normalizeOrder, normalizeCustomer } from '@/lib/normalize';

// GET /api/orders - Get all orders
export async function GET() {
  try {
    const orders = await db.findAll<Order>('orders');
    return NextResponse.json({ success: true, data: orders.map(normalizeOrder) });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST /api/orders - Create a new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerEmail,
      customerPhone,
      product,
      productId,
      quantity,
      totalAmount,
      deliveryAddress,
      deliveryOption,
    } = body;

    if (!customerName || !customerEmail || !product || !totalAmount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newOrder = {
      id: `ord_${Date.now()}`,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone || '',
      product,
      product_id: productId || '',
      quantity: Number(quantity) || 1,
      total_amount: Number(totalAmount),
      delivery_address: deliveryAddress || '',
      delivery_option: deliveryOption || 'Standard',
      status: 'Pending' as const,
    };

    const order = await db.create<Order>('orders', newOrder);

    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Failed to create order' },
        { status: 500 }
      );
    }

    // Update or create customer
    const existingCustomers = await db.findWhere<Customer>('customers', 'email', customerEmail);

    if (existingCustomers.length > 0) {
      const customer = existingCustomers[0];
      await db.update<Customer>('customers', customer.id, {
        total_orders: customer.total_orders + 1,
        total_spent: customer.total_spent + totalAmount,
        last_order_date: new Date().toISOString(),
      });
    } else {
      const newCustomer = {
        id: `cust_${Date.now()}`,
        name: customerName,
        email: customerEmail,
        phone: customerPhone || '',
        total_orders: 1,
        total_spent: totalAmount,
        last_order_date: new Date().toISOString(),
      };
      await db.create<Customer>('customers', newCustomer);
    }

    return NextResponse.json({ success: true, data: normalizeOrder(order) }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
