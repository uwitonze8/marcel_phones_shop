import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Type definitions (keep existing interfaces)
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  description?: string;
  images: string[];
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  product: string;
  product_id: string;
  quantity: number;
  total_amount: number;
  delivery_address: string;
  delivery_option: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Completed' | 'Cancelled';
  created_at: string;
  updated_at: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  total_orders: number;
  total_spent: number;
  created_at: string;
  last_order_date?: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'Unread' | 'Read' | 'Replied';
  reply?: string;
  created_at: string;
  updated_at: string;
}

export interface Settings {
  id: string;
  store_name: string;
  store_email: string;
  store_phone: string;
  currency: string;
  street_address: string;
  city: string;
  district: string;
  notifications: {
    newOrders: boolean;
    newCustomers: boolean;
    lowInventory: boolean;
  };
  admin_credentials: {
    email: string;
    password: string;
  };
  profile_image?: string;
  updated_at: string;
}

// Database operations class
export class Database {
  // Generic CRUD operations
  async findAll<T>(table: string): Promise<T[]> {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error(`Error fetching ${table}:`, error);
      return [];
    }
    
    return data || [];
  }

  async findById<T>(table: string, id: string): Promise<T | null> {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error(`Error fetching ${table} by id:`, error);
      return null;
    }
    
    return data;
  }

  async create<T extends { id: string }>(table: string, item: Omit<T, 'created_at' | 'updated_at'>): Promise<T | null> {
    const { data, error } = await supabase
      .from(table)
      .insert([item])
      .select()
      .single();
    
    if (error) {
      console.error(`Error creating ${table}:`, error);
      return null;
    }
    
    return data;
  }

  async update<T>(table: string, id: string, updates: Partial<T>): Promise<T | null> {
    const { data, error } = await supabase
      .from(table)
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error(`Error updating ${table}:`, error);
      return null;
    }
    
    return data;
  }

  async delete(table: string, id: string): Promise<boolean> {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error(`Error deleting from ${table}:`, error);
      return false;
    }
    
    return true;
  }

  // Query operations
  async findWhere<T>(table: string, column: string, value: any): Promise<T[]> {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq(column, value);
    
    if (error) {
      console.error(`Error querying ${table}:`, error);
      return [];
    }
    
    return data || [];
  }

  // Custom method for settings (single row table)
  async getSettings(): Promise<Settings | null> {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .eq('id', 'settings_default')
      .single();
    
    if (error) {
      console.error('Error fetching settings:', error);
      return null;
    }
    
    return data;
  }

  async updateSettings(updates: Partial<Settings>): Promise<Settings | null> {
    const { data, error } = await supabase
      .from('settings')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', 'settings_default')
      .select()
      .single();
    
    if (error) {
      console.error('Error updating settings:', error);
      return null;
    }
    
    return data;
  }
}

// Export database instance
export const db = new Database();