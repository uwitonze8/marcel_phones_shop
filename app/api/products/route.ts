import { NextRequest, NextResponse } from 'next/server';
import { db, Product } from '@/lib/supabase';
import { normalizeProduct } from '@/lib/normalize';

// GET /api/products - Get all products
export async function GET() {
  try {
    const products = await db.findAll<Product>('products');
    return NextResponse.json({ success: true, data: products.map(normalizeProduct) });
  } catch (error) {
    console.error('Error fetching products:', error);
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

    const newProduct = {
      id: `prod_${Date.now()}`,
      name,
      category,
      price: Number(price),
      stock: Number(stock) || 0,
      status: stock > 0 ? (stock > 10 ? 'In Stock' : 'Low Stock') : 'Out of Stock',
      description: description || '',
      images: images || [],
    };

    const product = await db.create<Product>('products', newProduct);
    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Failed to create product' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true, data: normalizeProduct(product) }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
