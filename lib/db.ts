import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  description?: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  product: string;
  productId: string;
  quantity: number;
  totalAmount: number;
  deliveryAddress: string;
  deliveryOption: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Completed' | 'Cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  createdAt: string;
  lastOrderDate?: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface Settings {
  id: string;
  storeName: string;
  storeEmail: string;
  storePhone: string;
  currency: string;
  streetAddress: string;
  city: string;
  district: string;
  notifications: {
    newOrders: boolean;
    newCustomers: boolean;
    lowInventory: boolean;
  };
  adminCredentials: {
    email: string;
    password: string;
  };
  updatedAt: string;
}

function getFilePath(collection: string): string {
  return path.join(DATA_DIR, `${collection}.json`);
}

function readData<T>(collection: string): T[] {
  const filePath = getFilePath(collection);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function writeData<T>(collection: string, data: T[]): void {
  const filePath = getFilePath(collection);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export const db = {
  // Generic CRUD operations
  findAll<T>(collection: string): T[] {
    return readData<T>(collection);
  },

  findById<T>(collection: string, id: string): T | undefined {
    const data = readData<T>(collection);
    return data.find((item: any) => item.id === id);
  },

  create<T extends { id: string }>(collection: string, item: T): T {
    const data = readData<T>(collection);
    data.push(item);
    writeData(collection, data);
    return item;
  },

  update<T extends { id: string }>(collection: string, id: string, updates: Partial<T>): T | null {
    const data = readData<T>(collection);
    const index = data.findIndex((item: any) => item.id === id);
    if (index === -1) return null;

    data[index] = { ...data[index], ...updates, updatedAt: new Date().toISOString() };
    writeData(collection, data);
    return data[index];
  },

  delete(collection: string, id: string): boolean {
    const data = readData(collection);
    const filteredData = data.filter((item: any) => item.id !== id);
    if (data.length === filteredData.length) return false;

    writeData(collection, filteredData);
    return true;
  },

  // Query operations
  findWhere<T>(collection: string, predicate: (item: T) => boolean): T[] {
    const data = readData<T>(collection);
    return data.filter(predicate);
  },
};
