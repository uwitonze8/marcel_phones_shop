'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ProductModal from '@/app/components/ProductModal';
import OrderForm from '@/app/components/OrderForm';
import { BsChevronLeft, BsChevronRight, BsSearch, BsFunnel } from 'react-icons/bs';

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  images: string[];
  specs?: string[];
  inStock: boolean;
  category: string;
  stock: number;
  status: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export default function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [productToOrder, setProductToOrder] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<'All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M'>('All');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high'>('default');
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const productsPerPage = 12;

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('http://localhost:3000/api/products');
        const data: ApiResponse<Product[]> = await response.json();

        if (data.success && data.data) {
          // Transform API data to match component structure
          const transformedProducts = data.data.map((product) => ({
            ...product,
            image: product.images[0] || 'https://via.placeholder.com/400',
            inStock: product.stock > 0,
            specs: [],
          }));
          setAllProducts(transformedProducts);
        } else {
          setError('Failed to load products');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to connect to server');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get unique categories from products
  const categories = ['All', ...Array.from(new Set(allProducts.map(p => p.category)))];

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

      const price = product.price;

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
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
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

  const handleSortChange = (sort: 'default' | 'price-low' | 'price-high') => {
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

  const formatPrice = (price: number) => {
    return `RWF ${price.toLocaleString()}`;
  };

  const priceRanges: ('All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M')[] = ['All', 'Under 500k', '500k-1M', '1M-2M', 'Above 2M'];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Matching Landing Page Style */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] lg:h-[65vh] overflow-hidden w-full py-8 sm:py-0">
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
          <div className="w-full max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 lg:space-y-5">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-white px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold" style={{backgroundColor: '#F97316'}}>
                🛍️ Explore Our Products Collection
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-4 sm:px-0">
              Find Your Perfect Tech Device
            </h1>

            {/* Search Bar */}
            <div className="w-full px-2 sm:px-0">
              <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-black outline-none cursor-text"
                />
                <button
                  onClick={handleSearch}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition-all cursor-pointer"
                  style={{backgroundColor: '#F97316'}}
                >
                  <BsSearch className="w-4 h-4 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>

            {/* Filter Section - Transparent Design */}
            <div className="w-full mt-3 sm:mt-4 lg:mt-6">
              <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/30 shadow-lg p-4 sm:p-5 lg:p-6">
                {/* Filter Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="p-2 sm:p-2 bg-white/30 backdrop-blur-sm rounded-lg">
                      <BsFunnel className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">Filters</h3>
                  </div>
                  <button
                    onClick={handleClearFilters}
                    className="px-3 sm:px-4 py-2 sm:py-2 bg-white/30 hover:bg-white/40 text-white rounded-lg text-xs sm:text-xs font-semibold transition-all backdrop-blur-sm border border-white/40"
                  >
                    Clear All
                  </button>
                </div>

                {/* Filter Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-xs sm:text-xs font-semibold text-white mb-2 sm:mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-xs font-medium focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all cursor-pointer hover:border-white/50"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-[#F97316] text-white py-2">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-xs sm:text-xs font-semibold text-white mb-2 sm:mb-2">
                      Price Range
                    </label>
                    <select
                      value={priceRange}
                      onChange={(e) => handlePriceRangeChange(e.target.value as 'All' | 'Under 500k' | '500k-1M' | '1M-2M' | 'Above 2M')}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-xs font-medium focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all cursor-pointer hover:border-white/50"
                    >
                      {priceRanges.map((range) => (
                        <option key={range} value={range} className="bg-[#F97316] text-white py-2">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By Filter */}
                  <div>
                    <label className="block text-xs sm:text-xs font-semibold text-white mb-2 sm:mb-2">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value as 'default' | 'price-low' | 'price-high')}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-xs font-medium focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all cursor-pointer hover:border-white/50"
                    >
                      <option value="default" className="bg-[#F97316] text-white py-2">Default Order</option>
                      <option value="price-low" className="bg-[#F97316] text-white py-2">Price: Low to High</option>
                      <option value="price-high" className="bg-[#F97316] text-white py-2">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Error Message */}
          {error && (
            <div className="text-center py-12 sm:py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-red-100 mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">Error Loading Products</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 mb-4 sm:mb-6 px-4">
                {error}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-5 sm:px-6 py-2 bg-[#F97316] text-white rounded-lg text-[10px] sm:text-xs font-semibold hover:opacity-90 transition-all"
              >
                Reload Page
              </button>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12 sm:py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-orange-100 mb-4 sm:mb-6">
                <svg className="animate-spin w-8 h-8 sm:w-12 sm:h-12 text-[#F97316]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">Loading Products...</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 px-4">
                Please wait while we fetch the latest products
              </p>
            </div>
          )}

          {/* No Products Found */}
          {!loading && !error && currentProducts.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gray-100 mb-4 sm:mb-6">
                <BsSearch className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">No Products Found</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 mb-4 sm:mb-6 px-4">
                We couldn't find any products matching your search criteria.
              </p>
              <button
                onClick={handleClearFilters}
                className="px-5 sm:px-6 py-2 bg-[#F97316] text-white rounded-lg text-[10px] sm:text-xs font-semibold hover:opacity-90 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 lg:gap-6">
              {currentProducts.map((product) => (
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

          {/* Pagination */}
          {currentProducts.length > 0 && totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
                  currentPage === 1
                    ? 'border-black/10 text-black/30 cursor-not-allowed'
                    : 'border-black/20 text-black hover:border-black/40 hover:bg-black/5'
                }`}
              >
                <BsChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
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
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-semibold text-[10px] sm:text-xs transition-all ${
                        currentPage === pageNumber
                          ? 'text-white shadow-lg'
                          : 'bg-white text-black border border-black/20 hover:border-black/40 hover:bg-black/5'
                      }`}
                      style={
                        currentPage === pageNumber
                          ? { backgroundColor: '#F97316' }
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
                    <span key={pageNumber} className="text-[10px] sm:text-xs text-black/40 px-1 sm:px-2">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
                  currentPage === totalPages
                    ? 'border-black/10 text-black/30 cursor-not-allowed'
                    : 'border-black/20 text-black hover:border-black/40 hover:bg-black/5'
                }`}
              >
                <BsChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
