import fs from 'fs';
import path from 'path';
import { Product, Order, Customer, Message } from './db';

const DATA_DIR = path.join(process.cwd(), 'data');

const sampleProducts: Product[] = [
  {
    id: 'prod_1',
    name: 'iPhone 15 Pro Max',
    category: 'Smartphones',
    price: 1850000,
    stock: 12,
    status: 'In Stock',
    description: 'Latest iPhone with A17 Pro chip, Titanium design',
    images: ['/logo.png'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod_2',
    name: 'MacBook Pro 14"',
    category: 'Laptops',
    price: 2450000,
    stock: 8,
    status: 'In Stock',
    description: 'M3 Pro chip, 18GB RAM, 512GB SSD',
    images: ['/logo.png'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod_3',
    name: 'Apple Watch Series 9',
    category: 'Wearables',
    price: 650000,
    stock: 15,
    status: 'In Stock',
    description: 'GPS + Cellular, 45mm, Health tracking',
    images: ['/logo.png'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod_4',
    name: 'AirPods Pro (2nd Gen)',
    category: 'Audio',
    price: 350000,
    stock: 25,
    status: 'In Stock',
    description: 'Active Noise Cancellation, Transparency mode',
    images: ['/logo.png'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod_5',
    name: 'iPad Pro 12.9"',
    category: 'Tablets',
    price: 1650000,
    stock: 0,
    status: 'Out of Stock',
    description: 'M2 chip, Liquid Retina XDR display',
    images: ['/logo.png'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod_6',
    name: 'iPhone 14',
    category: 'Smartphones',
    price: 1250000,
    stock: 5,
    status: 'Low Stock',
    description: 'A15 Bionic chip, Dual camera system',
    images: ['/logo.png'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const sampleOrders: Order[] = [
  {
    id: 'ord_1',
    customerName: 'Jean Baptiste',
    customerEmail: 'jean@example.com',
    customerPhone: '+250788123456',
    product: 'iPhone 15 Pro Max',
    productId: 'prod_1',
    quantity: 1,
    totalAmount: 1850000,
    deliveryAddress: 'KN 5 Ave, Kigali',
    deliveryOption: 'Express',
    status: 'Completed',
    createdAt: '2024-12-24T10:00:00.000Z',
    updatedAt: '2024-12-24T15:00:00.000Z',
  },
  {
    id: 'ord_2',
    customerName: 'Marie Claire',
    customerEmail: 'marie@example.com',
    customerPhone: '+250788234567',
    product: 'MacBook Pro 14"',
    productId: 'prod_2',
    quantity: 1,
    totalAmount: 2450000,
    deliveryAddress: 'KG 10 Ave, Kigali',
    deliveryOption: 'Standard',
    status: 'Processing',
    createdAt: '2024-12-24T11:00:00.000Z',
    updatedAt: '2024-12-24T11:00:00.000Z',
  },
  {
    id: 'ord_3',
    customerName: 'Patrick Mugabo',
    customerEmail: 'patrick@example.com',
    customerPhone: '+250788345678',
    product: 'Apple Watch Series 9',
    productId: 'prod_3',
    quantity: 1,
    totalAmount: 650000,
    deliveryAddress: 'KK 20 St, Kigali',
    deliveryOption: 'Standard',
    status: 'Pending',
    createdAt: '2024-12-23T09:00:00.000Z',
    updatedAt: '2024-12-23T09:00:00.000Z',
  },
];

const sampleCustomers: Customer[] = [
  {
    id: 'cust_1',
    name: 'Jean Baptiste',
    email: 'jean@example.com',
    phone: '+250788123456',
    totalOrders: 1,
    totalSpent: 1850000,
    createdAt: '2024-12-24T10:00:00.000Z',
    lastOrderDate: '2024-12-24T10:00:00.000Z',
  },
  {
    id: 'cust_2',
    name: 'Marie Claire',
    email: 'marie@example.com',
    phone: '+250788234567',
    totalOrders: 1,
    totalSpent: 2450000,
    createdAt: '2024-12-24T11:00:00.000Z',
    lastOrderDate: '2024-12-24T11:00:00.000Z',
  },
  {
    id: 'cust_3',
    name: 'Patrick Mugabo',
    email: 'patrick@example.com',
    phone: '+250788345678',
    totalOrders: 1,
    totalSpent: 650000,
    createdAt: '2024-12-23T09:00:00.000Z',
    lastOrderDate: '2024-12-23T09:00:00.000Z',
  },
];

const sampleMessages: Message[] = [
  {
    id: 'msg_1',
    name: 'Alice Uwimana',
    email: 'alice@example.com',
    phone: '+250788456789',
    subject: 'Product Inquiry',
    message: 'Do you have iPhone 15 Pro Max in blue color?',
    status: 'Unread',
    createdAt: '2024-12-24T14:00:00.000Z',
    updatedAt: '2024-12-24T14:00:00.000Z',
  },
  {
    id: 'msg_2',
    name: 'Eric Habimana',
    email: 'eric@example.com',
    phone: '+250788567890',
    subject: 'Delivery Question',
    message: 'What are your delivery options for outside Kigali?',
    status: 'Read',
    createdAt: '2024-12-23T16:00:00.000Z',
    updatedAt: '2024-12-23T17:00:00.000Z',
  },
  {
    id: 'msg_3',
    name: 'Grace Mutesi',
    email: 'grace@example.com',
    subject: 'Warranty Information',
    message: 'What is the warranty period for MacBook Pro?',
    status: 'Replied',
    reply: 'All MacBooks come with 1-year Apple warranty. Extended warranty available.',
    createdAt: '2024-12-22T10:00:00.000Z',
    updatedAt: '2024-12-22T15:00:00.000Z',
  },
  {
    id: 'msg_4',
    name: 'David Nkusi',
    email: 'david@example.com',
    phone: '+250788678901',
    subject: 'Trade-in Program',
    message: 'Do you accept old phones as trade-in for new purchases?',
    status: 'Unread',
    createdAt: '2024-12-24T12:00:00.000Z',
    updatedAt: '2024-12-24T12:00:00.000Z',
  },
  {
    id: 'msg_5',
    name: 'Sarah Umubyeyi',
    email: 'sarah@example.com',
    phone: '+250788789012',
    subject: 'Payment Options',
    message: 'What payment methods do you accept?',
    status: 'Unread',
    createdAt: '2024-12-24T15:00:00.000Z',
    updatedAt: '2024-12-24T15:00:00.000Z',
  },
];

export function seedDatabase() {
  // Ensure data directory exists
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  // Write sample data to file
  fs.writeFileSync(
    path.join(DATA_DIR, 'products.json'),
    JSON.stringify(sampleProducts, null, 2)
  );
  fs.writeFileSync(
    path.join(DATA_DIR, 'orders.json'),
    JSON.stringify(sampleOrders, null, 2)
  );
  fs.writeFileSync(
    path.join(DATA_DIR, 'customers.json'),
    JSON.stringify(sampleCustomers, null, 2)
  );
  fs.writeFileSync(
    path.join(DATA_DIR, 'messages.json'),
    JSON.stringify(sampleMessages, null, 2)
  );

  console.log('✅ Database seeded successfully!');
  console.log(`📁 Data files created in: ${DATA_DIR}`);
}

// Run seed if executed directly
if (require.main === module) {
  seedDatabase();
}
