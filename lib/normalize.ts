// Converts Supabase snake_case rows back to camelCase for API responses

export function normalizeOrder(o: any) {
  if (!o) return null;
  return {
    id: o.id,
    customerName: o.customer_name,
    customerEmail: o.customer_email,
    customerPhone: o.customer_phone,
    product: o.product,
    productId: o.product_id,
    quantity: o.quantity,
    totalAmount: Number(o.total_amount),
    deliveryAddress: o.delivery_address,
    deliveryOption: o.delivery_option,
    status: o.status,
    createdAt: o.created_at,
    updatedAt: o.updated_at,
  };
}

export function normalizeCustomer(c: any) {
  if (!c) return null;
  return {
    id: c.id,
    name: c.name,
    email: c.email,
    phone: c.phone,
    totalOrders: c.total_orders,
    totalSpent: Number(c.total_spent),
    createdAt: c.created_at,
    lastOrderDate: c.last_order_date,
  };
}

export function normalizeMessage(m: any) {
  if (!m) return null;
  return {
    id: m.id,
    name: m.name,
    email: m.email,
    phone: m.phone,
    subject: m.subject,
    message: m.message,
    status: m.status,
    reply: m.reply,
    createdAt: m.created_at,
    updatedAt: m.updated_at,
  };
}

export function normalizeProduct(p: any) {
  if (!p) return null;
  return {
    id: p.id,
    name: p.name,
    category: p.category,
    price: Number(p.price),
    stock: p.stock,
    status: p.status,
    description: p.description,
    images: p.images,
    createdAt: p.created_at,
    updatedAt: p.updated_at,
  };
}

export function normalizeSettings(s: any) {
  if (!s) return null;
  return {
    id: s.id,
    storeName: s.store_name,
    storeEmail: s.store_email,
    storePhone: s.store_phone,
    currency: s.currency,
    streetAddress: s.street_address,
    city: s.city,
    district: s.district,
    notifications: s.notifications,
    adminCredentials: s.admin_credentials,
    profileImage: s.profile_image,
    updatedAt: s.updated_at,
  };
}