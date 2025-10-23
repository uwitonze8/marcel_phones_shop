'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ProductModal from '@/app/components/ProductModal';
import { BsChevronLeft, BsChevronRight, BsSearch, BsFunnel } from 'react-icons/bs';

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
  category: string;
}

export default function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<'All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M'>('All');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');
  const productsPerPage = 12;

  // Product data
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 'RWF 1,549,000',
      description: 'Experience the latest flagship smartphone from Apple with cutting-edge technology, stunning display, and powerful performance.',
      image: 'https://i.pinimg.com/1200x/14/e1/24/14e124c7161f9e82cc27178d088fdaf1.jpg',
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
      inStock: true,
      category: 'Smartphones'
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
      inStock: true,
      category: 'Laptops'
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
      inStock: true,
      category: 'Smartwatches'
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
      inStock: true,
      category: 'Accessories'
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
      inStock: true,
      category: 'Smartphones'
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
      inStock: true,
      category: 'Laptops'
    },
    {
      id: 7,
      name: 'iPad Pro 12.9"',
      price: 'RWF 1,420,000',
      description: 'The ultimate iPad experience with M2 chip. Perfect for creativity and productivity on the go.',
      image: 'https://i.pinimg.com/1200x/07/84/f0/0784f06ce144f22d9b688aac8b9ccc70.jpg',
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
      inStock: true,
      category: 'Tablets'
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
      inStock: true,
      category: 'Accessories'
    },
    {
      id: 9,
      name: 'Google Pixel 8 Pro',
      price: 'RWF 1,320,000',
      description: 'Google AI at its best. Incredible photography and seamless Android experience.',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80',
      badge: 'New',
      specs: [
        'Google Tensor G3 chip',
        '6.7-inch LTPO OLED display',
        'Triple camera system with AI',
        '12GB RAM, 256GB storage',
        'All-day battery with fast charging'
      ],
      rating: 5,
      reviews: 834,
      inStock: true,
      category: 'Smartphones'
    },
    {
      id: 10,
      name: 'HP Spectre x360',
      price: 'RWF 1,890,000',
      description: 'Convertible 2-in-1 laptop with stunning design and powerful performance for work and play.',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
      badge: 'Premium',
      specs: [
        'Intel Core i7 13th Gen',
        '16GB LPDDR4x RAM',
        '1TB PCIe NVMe SSD',
        '13.5-inch 3K2K OLED touchscreen',
        '360-degree convertible hinge'
      ],
      rating: 4,
      reviews: 623,
      inStock: true,
      category: 'Laptops'
    },
    {
      id: 11,
      name: 'Samsung Galaxy Watch 6',
      price: 'RWF 485,000',
      description: 'Advanced health tracking meets sleek design. Your perfect fitness companion.',
      image: 'https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=400&q=80',
      badge: 'Hot',
      specs: [
        'Wear OS powered by Samsung',
        '44mm Super AMOLED display',
        'Advanced sleep tracking',
        'Body composition analysis',
        'Up to 40 hours battery life'
      ],
      rating: 4,
      reviews: 891,
      inStock: true,
      category: 'Smartwatches'
    },
    {
      id: 12,
      name: 'Samsung Galaxy Tab S9',
      price: 'RWF 890,000',
      description: 'Premium Android tablet with S Pen included. Perfect for productivity and entertainment.',
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80',
      badge: 'Popular',
      specs: [
        'Snapdragon 8 Gen 2 processor',
        '11-inch Dynamic AMOLED 2X display',
        '8GB RAM, 256GB storage',
        'S Pen included',
        'IP68 water resistance'
      ],
      rating: 5,
      reviews: 712,
      inStock: true,
      category: 'Tablets'
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra',
      price: 'RWF 520,000',
      description: 'Premium wireless headphones with world-class noise cancellation and immersive audio.',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80',
      badge: 'New',
      specs: [
        'CustomTune technology',
        'Immersive Audio mode',
        '24-hour battery life',
        'Premium materials & comfort',
        'Bluetooth 5.3 multipoint'
      ],
      rating: 5,
      reviews: 1023,
      inStock: true,
      category: 'Accessories'
    },
    {
      id: 14,
      name: 'ASUS ROG Zephyrus G14',
      price: 'RWF 2,180,000',
      description: 'Compact gaming powerhouse with AMD Ryzen and NVIDIA RTX graphics.',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80',
      badge: 'Gaming',
      specs: [
        'AMD Ryzen 9 7940HS',
        'NVIDIA RTX 4060 8GB',
        '16GB DDR5 RAM',
        '14-inch QHD 165Hz display',
        'Compact & portable design'
      ],
      rating: 5,
      reviews: 567,
      inStock: true,
      category: 'Laptops'
    },
    {
      id: 15,
      name: 'OnePlus 12',
      price: 'RWF 1,120,000',
      description: 'Flagship killer with blazing fast performance and stunning camera system.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80',
      badge: 'Sale',
      specs: [
        'Snapdragon 8 Gen 3',
        '6.82-inch AMOLED 120Hz',
        'Hasselblad camera system',
        '16GB RAM, 512GB storage',
        '100W SuperVOOC charging'
      ],
      rating: 5,
      reviews: 945,
      inStock: true,
      category: 'Smartphones'
    },
    {
      id: 16,
      name: 'Garmin Fenix 7',
      price: 'RWF 780,000',
      description: 'Premium multisport GPS watch for serious athletes and outdoor enthusiasts.',
      image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=400&q=80',
      badge: 'Premium',
      specs: [
        'Multi-GNSS satellite support',
        'Advanced training metrics',
        'Up to 18 days battery life',
        'Topographic maps',
        'Military-grade durability'
      ],
      rating: 5,
      reviews: 428,
      inStock: true,
      category: 'Smartwatches'
    },
    {
      id: 17,
      name: 'Microsoft Surface Pro 9',
      price: 'RWF 1,550,000',
      description: 'Versatile 2-in-1 device combining tablet portability with laptop power.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80',
      badge: 'Hot',
      specs: [
        'Intel Core i7 12th Gen',
        '13-inch PixelSense touchscreen',
        '16GB RAM, 256GB SSD',
        'All-day battery life',
        'Thunderbolt 4 support'
      ],
      rating: 4,
      reviews: 691,
      inStock: true,
      category: 'Tablets'
    },
    {
      id: 18,
      name: 'JBL Charge 5',
      price: 'RWF 185,000',
      description: 'Portable Bluetooth speaker with powerful sound and built-in power bank.',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80',
      badge: '-25%',
      specs: [
        'JBL Pro Sound',
        '20 hours of playtime',
        'IP67 waterproof & dustproof',
        'Built-in power bank',
        'PartyBoost pairing'
      ],
      rating: 4,
      reviews: 2156,
      inStock: true,
      category: 'Accessories'
    }
  ];

  // Filter products by category, search query, and price range
  const filteredProducts = allProducts
    .filter(product => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      }

      return true;
    })
    .filter(product => {
      // Price range filter
      if (priceRange === 'All') return true;

      const price = parseInt(product.price.replace(/[^0-9]/g, ''));

      switch (priceRange) {
        case 'Under 500k':
          return price < 500000;
        case '500k-1M':
          return price >= 500000 && price < 1000000;
        case '1M-2M':
          return price >= 1000000 && price < 2000000;
        case 'Above 2M':
          return price >= 2000000;
        default:
          return true;
      }
    })
    .sort((a, b) => {
      // Sorting
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePriceRangeChange = (range: 'All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M') => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: 'default' | 'price-low' | 'price-high' | 'rating') => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setPriceRange('All');
    setSortBy('default');
    setCurrentPage(1);
  };

  const categories = ['All', 'Smartphones', 'Laptops', 'Tablets', 'Smartwatches', 'Accessories'];
  const priceRanges: ('All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M')[] = ['All', 'Under 500k', '500k-1M', '1M-2M', 'Above 2M'];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Matching Landing Page Style */}
      <section className="relative h-screen overflow-hidden w-full">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 top-0">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
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
                🛍️ Explore Our Products Collection
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Find Your Perfect Tech Device
            </h1>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for smartphones, laptops, accessories..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 px-5 py-2.5 text-xs text-black outline-none cursor-text"
                />
                <button
                  onClick={handleSearch}
                  className="flex items-center gap-1.5 px-4 py-1.5 m-1 rounded-full text-white text-xs font-semibold hover:opacity-90 transition-all cursor-pointer"
                  style={{backgroundColor: '#083A85'}}
                >
                  <BsSearch className="w-4 h-4" />
                  Search
                </button>
              </div>
            </div>

            {/* Filter Section - Transparent Design */}
            <div className="max-w-4xl mx-auto mt-6">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg p-6">
                {/* Filter Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/30 backdrop-blur-sm rounded-lg">
                      <BsFunnel className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xs font-bold text-white">Refine Your Search</h3>
                  </div>
                  <button
                    onClick={handleClearFilters}
                    className="px-4 py-2 bg-white/30 hover:bg-white/40 text-white rounded-lg text-xs font-semibold transition-all backdrop-blur-sm border border-white/40"
                  >
                    Clear All
                  </button>
                </div>

                {/* Filter Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white text-xs font-medium focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all cursor-pointer hover:border-white/50"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-[#083A85] text-white py-2">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Price Range
                    </label>
                    <select
                      value={priceRange}
                      onChange={(e) => handlePriceRangeChange(e.target.value as 'All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M')}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white text-xs font-medium focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all cursor-pointer hover:border-white/50"
                    >
                      {priceRanges.map((range) => (
                        <option key={range} value={range} className="bg-[#083A85] text-white py-2">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By Filter */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value as 'default' | 'price-low' | 'price-high' | 'rating')}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white text-xs font-medium focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all cursor-pointer hover:border-white/50"
                    >
                      <option value="default" className="bg-[#083A85] text-white py-2">Default Order</option>
                      <option value="price-low" className="bg-[#083A85] text-white py-2">Price: Low to High</option>
                      <option value="price-high" className="bg-[#083A85] text-white py-2">Price: High to Low</option>
                      <option value="rating" className="bg-[#083A85] text-white py-2">Highest Rated</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Filter & Results Info */}
      <section className="py-6 bg-gray-50 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-xs font-semibold text-black">Quick Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'text-white shadow-md'
                      : 'bg-white text-black border border-black/20 hover:border-black/40'
                  }`}
                  style={
                    selectedCategory === category
                      ? { backgroundColor: '#083A85' }
                      : {}
                  }
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="text-xs text-black/60">
              Showing {filteredProducts.length === 0 ? 0 : indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-6">
                <BsSearch className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">No Products Found</h3>
              <p className="text-xs text-gray-600 mb-6">
                We couldn't find any products matching your search criteria.
              </p>
              <button
                onClick={handleClearFilters}
                className="px-6 py-2 bg-[#083A85] text-white rounded-lg text-xs font-semibold hover:opacity-90 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer bg-white border border-black/10 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative bg-gray-100 h-56 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span
                      className="absolute top-3 right-3 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                      style={{ backgroundColor: '#083A85' }}
                    >
                      {product.badge}
                    </span>
                  )}
                  {product.inStock ? (
                    <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      In Stock
                    </span>
                  ) : (
                    <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Out of Stock
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-black/60 uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-black mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-black/60 mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-black/60 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-black">
                      {product.price}
                    </span>
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="text-white px-3 py-1 rounded text-xs font-semibold hover:opacity-90 transition-all cursor-pointer"
                      style={{ backgroundColor: '#083A85' }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}

          {/* Pagination */}
          {currentProducts.length > 0 && totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all ${
                  currentPage === 1
                    ? 'border-black/10 text-black/30 cursor-not-allowed'
                    : 'border-black/20 text-black hover:border-black/40 hover:bg-black/5'
                }`}
              >
                <BsChevronLeft className="w-5 h-5" />
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around current
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-10 h-10 rounded-lg font-semibold text-xs transition-all ${
                        currentPage === pageNumber
                          ? 'text-white shadow-lg'
                          : 'bg-white text-black border border-black/20 hover:border-black/40 hover:bg-black/5'
                      }`}
                      style={
                        currentPage === pageNumber
                          ? { backgroundColor: '#083A85' }
                          : {}
                      }
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return (
                    <span key={pageNumber} className="text-xs text-black/40 px-2">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all ${
                  currentPage === totalPages
                    ? 'border-black/10 text-black/30 cursor-not-allowed'
                    : 'border-black/20 text-black hover:border-black/40 hover:bg-black/5'
                }`}
              >
                <BsChevronRight className="w-5 h-5" />
              </button>
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
    </div>
  );
}
