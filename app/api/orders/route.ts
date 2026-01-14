import { NextRequest, NextResponse } from 'next/server';
import { db, Order, Customer } from '@/lib/db';

// GET /api/orders - Get all orders
export async function GET() {
  try {
    const orders = db.findAll<Order>('orders');
    return NextResponse.json({ success: true, data: orders });
  } catch (error) {
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

    const newOrder: Order = {
      id: `ord_${Date.now()}`,
      customerName,
      customerEmail,
      customerPhone: customerPhone || '',
      product,
      productId: productId || '',
      quantity: Number(quantity) || 1,
      totalAmount: Number(totalAmount),
      deliveryAddress: deliveryAddress || '',
      deliveryOption: deliveryOption || 'Standard',
      status: 'Pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const order = db.create<Order>('orders', newOrder);

    // Update or create customer
    const customers = db.findWhere<Customer>(
      'customers',
      (c) => c.email === customerEmail
    );

    if (customers.length > 0) {
      const customer = customers[0];
      db.update<Customer>('customers', customer.id, {
        totalOrders: customer.totalOrders + 1,
        totalSpent: customer.totalSpent + totalAmount,
        lastOrderDate: new Date().toISOString(),
      });
    } else {
      const newCustomer: Customer = {
        id: `cust_${Date.now()}`,
        name: customerName,
        email: customerEmail,
        phone: customerPhone || '',
        totalOrders: 1,
        totalSpent: totalAmount,
        createdAt: new Date().toISOString(),
        lastOrderDate: new Date().toISOString(),
      };
      db.create<Customer>('customers', newCustomer);
    }

    return NextResponse.json({ success: true, data: order }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
