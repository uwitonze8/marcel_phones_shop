'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ProductModal from '@/app/components/ProductModal';
import OrderForm from '@/app/components/OrderForm';

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  images: string[];
  badge?: string;
  specs?: string[];
  rating?: number;
  reviews?: number;
  inStock: boolean;
  stock: number;
  category: string;
  createdAt: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [productToOrder, setProductToOrder] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Format price to RWF currency
  const formatPrice = (price: number) => {
    return `RWF ${price.toLocaleString('en-US')}`;
  };

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/products');
        const data: ApiResponse<Product[]> = await response.json();

        if (data.success && data.data) {
          // Sort by createdAt (newest first) and take first 8
          const sortedProducts = data.data
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 8)
            .map((product) => ({
              ...product,
              image: product.images[0] || 'https://via.placeholder.com/400',
              inStock: product.stock > 0,
              badge: 'New',
              specs: [],
              rating: 5,
              reviews: 0,
            }));
          setProducts(sortedProducts);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleBuyNow = (product: Product) => {
    setProductToOrder(product);
    setIsOrderFormOpen(true);
  };

  const handleCloseOrderForm = () => {
    setIsOrderFormOpen(false);
    setProductToOrder(null);
  };

  const handleOrderSubmit = async (formData: any) => {
    if (!productToOrder) return;

    try {
      const orderData = {
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        product: productToOrder.name,
        productId: productToOrder.id,
        quantity: 1,
        totalAmount: productToOrder.price,
        deliveryAddress: formData.deliveryOption === 'delivery'
          ? `${formData.streetAddress}, ${formData.city}, ${formData.state}`
          : 'Store Pickup',
        deliveryOption: formData.deliveryOption === 'delivery' ? 'Home Delivery' : 'Store Pickup',
      };

      const response = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (data.success) {
        setModalMessage('Order placed successfully! We will contact you shortly.');
        setShowSuccessModal(true);
        handleCloseOrderForm();
      } else {
        setModalMessage('Failed to place order. Please try again.');
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setModalMessage('An error occurred while placing your order. Please try again.');
      setShowErrorModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden w-full">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 top-0">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&q=80"
            alt="Electronics background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-black/40 via-transparent to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 lg:space-y-5">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-white px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold" style={{backgroundColor: '#F97316'}}>
                🎧 Learn about Marcel Electronics
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-4 sm:px-0">
              The leading electronics platform for global shoppers
            </h1>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto px-2 sm:px-0">
              <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for smartphones, laptops, accessories..."
                  className="flex-1 px-3 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs text-black outline-none cursor-text"
                />
                <button className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 m-1 rounded-full text-white text-[10px] sm:text-xs font-semibold hover:opacity-90 transition-all cursor-pointer" style={{backgroundColor: '#F97316'}}>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>

            {/* Frequently Searched */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2 px-4 sm:px-0">
              <span className="text-white text-[10px] sm:text-xs hidden sm:inline">Quick search:</span>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                iPhone 15 Pro Max
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                Samsung Galaxy
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                AirPods Pro
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                MacBook
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                Gaming Laptops
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                4K Monitors
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                Smart Watches
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                Bluetooth Speakers
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                DSLR Cameras
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                Wireless Headphones
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                Gaming Consoles
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                Smart Home Devices
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                External Hard Drives
              </button>
              <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 text-white text-[10px] sm:text-xs hover:bg-white/10 transition-all cursor-pointer">
                Computer Monitors
              </button>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg className="w-full h-12 sm:h-16 md:h-20 text-white animate-wave block" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Wave animation styles */}
        <style jsx>{`
          @keyframes wave {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .animate-wave {
            animation: wave 2s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Featured Products Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 sm:mb-2">Featured Products</h2>
            <p className="text-[10px] sm:text-xs text-black">Best deals on top electronics</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{borderColor: '#F97316'}}></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-sm">No products available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-6">
              {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-56 sm:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-3 lg:p-4">
                  {/* Product Name */}
                  <h3 className="text-sm sm:text-xs lg:text-sm font-bold text-gray-900 mb-2 sm:mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-3 sm:mb-3">
                    <p className="text-xl sm:text-lg lg:text-xl font-bold" style={{color: '#F97316'}}>
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-2">
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="flex-1 py-2 sm:py-2 rounded-lg sm:rounded-lg text-xs sm:text-xs font-semibold border-2 transition-all duration-300 hover:bg-gray-50 cursor-pointer"
                      style={{borderColor: '#F97316', color: '#F97316'}}
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="flex-1 py-2 sm:py-2 rounded-lg sm:rounded-lg text-white text-xs sm:text-xs font-semibold transition-all duration-300 hover:opacity-90 cursor-pointer"
                      style={{backgroundColor: '#F97316'}}
                    >
                      <span className="flex items-center justify-center gap-1 sm:gap-1">
                        Buy Now
                        <svg className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}

          {!loading && products.length > 0 && (
            <div className="text-center mt-6 sm:mt-8">
              <a href="/user/product">
                <button className="text-white px-5 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:opacity-90 transition-all cursor-pointer" style={{backgroundColor: '#F97316'}}>
                  View All Products
                </button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />

      {/* Order Form */}
      {productToOrder && (
        <OrderForm
          isOpen={isOrderFormOpen}
          onClose={handleCloseOrderForm}
          productName={productToOrder.name}
          productPrice={productToOrder.price}
          onSubmit={handleOrderSubmit}
        />
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl transition-all duration-300 ease-out opacity-100 scale-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 mb-6">{modalMessage}</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-2 px-4 rounded-lg text-white font-semibold hover:opacity-90 transition-all"
                style={{backgroundColor: '#F97316'}}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl transition-all duration-300 ease-out opacity-100 scale-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Error</h3>
              <p className="text-gray-600 mb-6">{modalMessage}</p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="w-full py-2 px-4 rounded-lg text-white font-semibold hover:opacity-90 transition-all"
                style={{backgroundColor: '#F97316'}}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
