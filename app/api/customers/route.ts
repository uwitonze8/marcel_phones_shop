import { NextRequest, NextResponse } from 'next/server';
import { db, Customer } from '@/lib/db';

// GET /api/customers - Get all customers
export async function GET() {
  try {
    const customers = db.findAll<Customer>('customers');
    return NextResponse.json({ success: true, data: customers });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}
