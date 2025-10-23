'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import { BsPhone, BsLaptop, BsTablet, BsSmartwatch, BsHeadphones, BsController, BsTruck, BsChatDots, BsCashCoin, BsShieldCheck, BsApple, BsPhoneFill, BsDisplay, BsPrinter, BsMusicNoteBeamed, BsKeyboard } from 'react-icons/bs';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  badge: string;
  specs: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Product data
  const products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 'RWF 1,549,000',
      description: 'Experience the latest flagship smartphone from Apple with cutting-edge technology, stunning display, and powerful performance.',
      image: 'https://images.unsplash.com/photo-1592286927505-38c77b8ebaa1?w=400&q=80',
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
      image: 'https://images.unsplash.com/photo-1585790050230-5dd28404f27a?w=400&q=80',
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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden w-full">
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
          <div className="max-w-3xl mx-auto text-center space-y-5">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-white px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{backgroundColor: '#083A85'}}>
                🎧 Learn about Marcel Electronics
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              The leading electronics platform for global shoppers
            </h1>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for smartphones, laptops, accessories..."
                  className="flex-1 px-5 py-2.5 text-xs text-black outline-none cursor-text"
                />
                <button className="flex items-center gap-1.5 px-4 py-1.5 m-1 rounded-full text-white text-xs font-semibold hover:opacity-90 transition-all cursor-pointer" style={{backgroundColor: '#083A85'}}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>

            {/* Frequently Searched */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="text-white text-xs">Frequently searched:</span>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                iPhone 15 Pro Max
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                Samsung Galaxy
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                AirPods Pro
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                MacBook
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                Gaming Laptops
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                4K Monitors
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                Smart Watches
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                Bluetooth Speakers
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer"  >
                DSLR Cameras
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                Wireless Headphones
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">     
                Gaming Consoles
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                Smart Home Devices
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">   
                External Hard Drives
              </button>
              <button className="px-3 py-1 rounded-full border border-white/30 text-white text-xs hover:bg-white/10 transition-all cursor-pointer">
                Computer Monitors
              </button>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg className="w-full h-16 md:h-20 text-white animate-wave block" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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

      {/* Featured Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Shop by Category</h2>
            <p className="text-sm text-black">Find exactly what you're looking for</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Smartphones */}
            <div className="group cursor-pointer bg-white border border-black/10 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#083A85'}}>
              <div className="text-center">
                <BsPhone className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <h3 className="text-sm font-semibold text-black">Smartphones</h3>
                <p className="text-xs text-black/60 mt-1">500+ items</p>
              </div>
            </div>

            {/* Laptops */}
            <div className="group cursor-pointer bg-white border border-black/10 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#083A85'}}>
              <div className="text-center">
                <BsLaptop className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <h3 className="text-sm font-semibold text-black">Laptops</h3>
                <p className="text-xs text-black/60 mt-1">350+ items</p>
              </div>
            </div>

            {/* Tablets */}
            <div className="group cursor-pointer bg-white border border-black/10 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#083A85'}}>
              <div className="text-center">
                <BsTablet className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <h3 className="text-sm font-semibold text-black">Tablets</h3>
                <p className="text-xs text-black/60 mt-1">200+ items</p>
              </div>
            </div>

            {/* Smart Watches */}
            <div className="group cursor-pointer bg-white border border-black/10 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#083A85'}}>
              <div className="text-center">
                <BsSmartwatch className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <h3 className="text-sm font-semibold text-black">Smart Watches</h3>
                <p className="text-xs text-black/60 mt-1">180+ items</p>
              </div>
            </div>

            {/* Accessories */}
            <div className="group cursor-pointer bg-white border border-black/10 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#083A85'}}>
              <div className="text-center">
                <BsHeadphones className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <h3 className="text-sm font-semibold text-black">Accessories</h3>
                <p className="text-xs text-black/60 mt-1">600+ items</p>
              </div>
            </div>

            {/* Gaming */}
            <div className="group cursor-pointer bg-white border border-black/10 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#083A85'}}>
              <div className="text-center">
                <BsController className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <h3 className="text-sm font-semibold text-black">Gaming</h3>
                <p className="text-xs text-black/60 mt-1">250+ items</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Featured Products</h2>
            <p className="text-sm text-black">Best deals on top electronics</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer bg-white border border-black/10 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-semibold" style={{backgroundColor: '#083A85'}}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-black mb-1">{product.name}</h3>
                  <p className="text-xs text-black/60 mb-2">{product.specs[0]}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-black">{product.price}</span>
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="text-white px-3 py-1 rounded text-xs font-semibold hover:opacity-90 transition-all cursor-pointer"
                      style={{backgroundColor: '#083A85'}}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-white px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all cursor-pointer" style={{backgroundColor: '#083A85'}}>
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Why Choose Us</h2>
            <p className="text-sm text-black">Your trusted electronics partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Shipping */}
            <div className="text-center p-6 bg-white rounded-lg border border-black/10">
              <BsTruck className="w-16 h-16 mx-auto mb-4" style={{color: '#083A85'}} />
              <h3 className="text-sm font-semibold text-black mb-2">Free Shipping</h3>
              <p className="text-xs text-black/60">On orders over $100</p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center p-6 bg-white rounded-lg border border-black/10">
              <BsChatDots className="w-16 h-16 mx-auto mb-4" style={{color: '#083A85'}} />
              <h3 className="text-sm font-semibold text-black mb-2">24/7 Support</h3>
              <p className="text-xs text-black/60">Always here to help you</p>
            </div>

            {/* Money-Back Guarantee */}
            <div className="text-center p-6 bg-white rounded-lg border border-black/10">
              <BsCashCoin className="w-16 h-16 mx-auto mb-4" style={{color: '#083A85'}} />
              <h3 className="text-sm font-semibold text-black mb-2">Money-Back Guarantee</h3>
              <p className="text-xs text-black/60">30-day return policy</p>
            </div>

            {/* Secure Payment */}
            <div className="text-center p-6 bg-white rounded-lg border border-black/10">
              <BsShieldCheck className="w-16 h-16 mx-auto mb-4" style={{color: '#083A85'}} />
              <h3 className="text-sm font-semibold text-black mb-2">Secure Payment</h3>
              <p className="text-xs text-black/60">100% secure transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Carry Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Brands We Carry</h2>
            <p className="text-sm text-black">Top electronics brands worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Apple */}
            <div className="flex items-center justify-center p-6 bg-white border border-black/10 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="text-center">
                <BsApple className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <p className="text-xs font-semibold text-black">Apple</p>
              </div>
            </div>

            {/* Samsung */}
            <div className="flex items-center justify-center p-6 bg-white border border-black/10 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="text-center">
                <BsPhoneFill className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <p className="text-xs font-semibold text-black">Samsung</p>
              </div>
            </div>

            {/* Dell */}
            <div className="flex items-center justify-center p-6 bg-white border border-black/10 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="text-center">
                <BsLaptop className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <p className="text-xs font-semibold text-black">Dell</p>
              </div>
            </div>

            {/* HP */}
            <div className="flex items-center justify-center p-6 bg-white border border-black/10 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="text-center">
                <BsDisplay className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <p className="text-xs font-semibold text-black">HP</p>
              </div>
            </div>

            {/* Sony */}
            <div className="flex items-center justify-center p-6 bg-white border border-black/10 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="text-center">
                <BsMusicNoteBeamed className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <p className="text-xs font-semibold text-black">Sony</p>
              </div>
            </div>

            {/* Lenovo */}
            <div className="flex items-center justify-center p-6 bg-white border border-black/10 rounded-lg hover:shadow-lg transition-all cursor-pointer">
              <div className="text-center">
                <BsKeyboard className="w-12 h-12 mx-auto mb-3" style={{color: '#083A85'}} />
                <p className="text-xs font-semibold text-black">Lenovo</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-black/60">And many more trusted brands...</p>
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
    </div>
  );
}
