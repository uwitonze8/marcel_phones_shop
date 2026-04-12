import { NextRequest, NextResponse } from 'next/server';
import { db, Customer } from '@/lib/supabase';
import { normalizeCustomer } from '@/lib/normalize';

// GET /api/customers - Get all customers
export async function GET() {
  try {
    const customers = await db.findAll<Customer>('customers');
    return NextResponse.json({ success: true, data: customers.map(normalizeCustomer) });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}
