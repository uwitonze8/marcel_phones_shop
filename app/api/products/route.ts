import { NextRequest, NextResponse } from 'next/server';
import { db, Product } from '@/lib/db';

// GET /api/products - Get all products
export async function GET() {
  try {
    const products = db.findAll<Product>('products');
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST /api/products - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, category, price, stock, description, images } = body;

    if (!name || !category || !price) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newProduct: Product = {
      id: `prod_${Date.now()}`,
      name,
      category,
      price: Number(price),
      stock: Number(stock) || 0,
      status: stock > 0 ? (stock > 10 ? 'In Stock' : 'Low Stock') : 'Out of Stock',
      description: description || '',
      images: images || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const product = db.create<Product>('products', newProduct);
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
