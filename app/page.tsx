'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ProductModal from '@/app/components/ProductModal';
import OrderForm from '@/app/components/OrderForm';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  images: string[];
  badge: string;
  specs: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [productToOrder, setProductToOrder] = useState<Product | null>(null);

  // Product data
  const products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 'RWF 1,549,000',
      description: 'Experience the latest flagship smartphone from Apple with cutting-edge technology, stunning display, and powerful performance.',
      image: 'https://i.pinimg.com/1200x/14/e1/24/14e124c7161f9e82cc27178d088fdaf1.jpg',
      images: [
        'https://i.pinimg.com/1200x/14/e1/24/14e124c7161f9e82cc27178d088fdaf1.jpg',
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80',
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80'
      ],
      badge: 'New',
      specs: [
        'A17 Pro chip with 6-core GPU',
        '6.7-inch Super Retina XDR display',
        'Pro camera system with 48MP main',
        'Titanium design with Action button',
        'Up to 29 hours video playback'
      ],
      rating: 5,
      reviews: 1247,
      inStock: true
    },
    {
      id: 2,
      name: 'MacBook Pro 14"',
      price: 'RWF 2,585,000',
      description: 'Supercharged by M3 Pro chip for incredible performance. Perfect for professionals and creators.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80',
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
        'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&q=80'
      ],
      badge: 'Hot',
      specs: [
        'Apple M3 Pro chip',
        '18GB Unified Memory',
        '512GB SSD Storage',
        '14.2-inch Liquid Retina XDR display',
        'Up to 18 hours battery life'
      ],
      rating: 5,
      reviews: 892,
      inStock: true
    },
    {
      id: 3,
      name: 'Apple Watch Series 9',
      price: 'RWF 555,000',
      description: 'Your essential companion for a healthy life. Now with new features and advanced health tracking.',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80',
        'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800&q=80',
        'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=800&q=80'
      ],
      badge: 'Sale',
      specs: [
        'GPS + Cellular connectivity',
        '45mm Always-On Retina display',
        'Blood Oxygen & ECG apps',
        'Water resistant to 50 meters',
        'Up to 18 hours battery life'
      ],
      rating: 4,
      reviews: 634,
      inStock: true
    },
    {
      id: 4,
      name: 'AirPods Pro 2',
      price: 'RWF 257,000',
      description: 'Immersive sound with Active Noise Cancellation. Adaptive Audio for the perfect listening experience.',
      image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&q=80',
        'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80',
        'https://images.unsplash.com/photo-1588423771073-b8903fba77ac?w=800&q=80',
        'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=800&q=80'
      ],
      badge: '-20%',
      specs: [
        'Active Noise Cancellation',
        'Adaptive Audio',
        'Personalized Spatial Audio',
        'Up to 6 hours listening time',
        'MagSafe charging case'
      ],
      rating: 5,
      reviews: 2341,
      inStock: true
    },
    {
      id: 5,
      name: 'Samsung Galaxy S24 Ultra',
      price: 'RWF 1,680,000',
      description: 'AI-powered flagship phone with the most advanced camera system and S Pen for ultimate productivity.',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
        'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80',
        'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=80'
      ],
      badge: 'New',
      specs: [
        'Snapdragon 8 Gen 3 processor',
        '6.8-inch Dynamic AMOLED 2X display',
        '200MP main camera with AI zoom',
        'Built-in S Pen',
        '5000mAh battery with fast charging'
      ],
      rating: 5,
      reviews: 1089,
      inStock: true
    },
    {
      id: 6,
      name: 'Dell XPS 13',
      price: 'RWF 1,680,000',
      description: 'Premium ultraportable laptop with stunning InfinityEdge display and exceptional performance.',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
        'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&q=80',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80'
      ],
      badge: 'Popular',
      specs: [
        'Intel Core i7 13th Gen',
        '16GB LPDDR5 RAM',
        '512GB PCIe NVMe SSD',
        '13.4-inch FHD+ display',
        'Up to 12 hours battery life'
      ],
      rating: 4,
      reviews: 756,
      inStock: true
    },
    {
      id: 7,
      name: 'iPad Pro 12.9"',
      price: 'RWF 1,420,000',
      description: 'The ultimate iPad experience with M2 chip. Perfect for creativity and productivity on the go.',
      image: 'https://i.pinimg.com/1200x/07/84/f0/0784f06ce144f22d9b688aac8b9ccc70.jpg',
      images: [
        'https://i.pinimg.com/1200x/07/84/f0/0784f06ce144f22d9b688aac8b9ccc70.jpg',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
        'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&q=80',
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80'
      ],
      badge: 'Hot',
      specs: [
        'Apple M2 chip',
        '12.9-inch Liquid Retina XDR display',
        '256GB storage',
        'ProMotion 120Hz refresh rate',
        'Support for Apple Pencil & Magic Keyboard'
      ],
      rating: 5,
      reviews: 923,
      inStock: true
    },
    {
      id: 8,
      name: 'Sony WH-1000XM5',
      price: 'RWF 438,000',
      description: 'Industry-leading noise cancellation with exceptional sound quality and all-day comfort.',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&q=80',
      images: [
        'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80'
      ],
      badge: '-15%',
      specs: [
        'Industry-leading noise cancellation',
        '30-hour battery life',
        'Multi-point connection',
        'Touch sensor controls',
        'Speak-to-Chat technology'
      ],
      rating: 5,
      reviews: 1567,
      inStock: true
    }
  ];

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

  const handleOrderSubmit = (formData: any) => {
    console.log('Order submitted:', formData);
    alert('Order placed successfully! We will contact you shortly.');
    handleCloseOrderForm();
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
                      {product.price}
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

          <div className="text-center mt-6 sm:mt-8">
            <a href="/user/product">
            <button className="text-white px-5 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:opacity-90 transition-all cursor-pointer" style={{backgroundColor: '#F97316'}}>
              View All Products
            </button>
            </a>
          </div>
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
    </div>
  );
}
