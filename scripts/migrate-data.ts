import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// You'll need to replace these with your actual Supabase credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials!');
  console.error('Make sure .env.local contains:');
  console.error('NEXT_PUBLIC_SUPABASE_URL=your_url');
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const DATA_DIR = path.join(process.cwd(), 'data');

async function migrateData() {
  console.log('Starting data migration...');

  try {
    // Migrate Products
    if (fs.existsSync(path.join(DATA_DIR, 'products.json'))) {
      const products = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'products.json'), 'utf-8'));
      console.log(`Migrating ${products.length} products...`);
      
      for (const product of products) {
        const { createdAt, updatedAt, ...productData } = product;
        const { error } = await supabase
          .from('products')
          .insert([{
            ...productData,
            created_at: createdAt,
            updated_at: updatedAt
          }]);
        
        if (error) {
          console.error('Error inserting product:', error);
        }
      }
      console.log('Products migrated successfully!');
    }

    // Migrate Orders
    if (fs.existsSync(path.join(DATA_DIR, 'orders.json'))) {
      const orders = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'orders.json'), 'utf-8'));
      console.log(`Migrating ${orders.length} orders...`);
      
      for (const order of orders) {
        const { createdAt, updatedAt, customerName, customerEmail, customerPhone, productId, totalAmount, deliveryAddress, deliveryOption, ...orderData } = order;
        const { error } = await supabase
          .from('orders')
          .insert([{
            ...orderData,
            customer_name: customerName,
            customer_email: customerEmail,
            customer_phone: customerPhone,
            product_id: productId,
            total_amount: totalAmount,
            delivery_address: deliveryAddress,
            delivery_option: deliveryOption,
            created_at: createdAt,
            updated_at: updatedAt
          }]);
        
        if (error) {
          console.error('Error inserting order:', error);
        }
      }
      console.log('Orders migrated successfully!');
    }

    // Migrate Customers
    if (fs.existsSync(path.join(DATA_DIR, 'customers.json'))) {
      const customers = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'customers.json'), 'utf-8'));
      console.log(`Migrating ${customers.length} customers...`);
      
      for (const customer of customers) {
        const { createdAt, totalOrders, totalSpent, lastOrderDate, ...customerData } = customer;
        const { error } = await supabase
          .from('customers')
          .insert([{
            ...customerData,
            total_orders: totalOrders,
            total_spent: totalSpent,
            last_order_date: lastOrderDate,
            created_at: createdAt
          }]);
        
        if (error) {
          console.error('Error inserting customer:', error);
        }
      }
      console.log('Customers migrated successfully!');
    }

    // Migrate Messages
    if (fs.existsSync(path.join(DATA_DIR, 'messages.json'))) {
      const messages = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'messages.json'), 'utf-8'));
      console.log(`Migrating ${messages.length} messages...`);
      
      for (const message of messages) {
        const { createdAt, updatedAt, ...messageData } = message;
        const { error } = await supabase
          .from('messages')
          .insert([{
            ...messageData,
            created_at: createdAt,
            updated_at: updatedAt
          }]);
        
        if (error) {
          console.error('Error inserting message:', error);
        }
      }
      console.log('Messages migrated successfully!');
    }

    // Migrate Settings
    if (fs.existsSync(path.join(DATA_DIR, 'settings.json'))) {
      const settings = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'settings.json'), 'utf-8'));
      console.log('Migrating settings...');
      
      if (settings.length > 0) {
        const setting = settings[0];
        const { updatedAt, storeName, storeEmail, storePhone, streetAddress, adminCredentials, profileImage, ...settingData } = setting;
        
        // First, delete existing settings
        await supabase.from('settings').delete().eq('id', 'settings_default');
        
        const { error } = await supabase
          .from('settings')
          .insert([{
            ...settingData,
            store_name: storeName,
            store_email: storeEmail,
            store_phone: storePhone,
            street_address: streetAddress,
            admin_credentials: adminCredentials,
            profile_image: profileImage,
            updated_at: updatedAt
          }]);
        
        if (error) {
          console.error('Error inserting settings:', error);
        } else {
          console.log('Settings migrated successfully!');
        }
      }
    }

    console.log('Data migration completed!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

// Run migration
migrateData();