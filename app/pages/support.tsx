'use client';

import { useState } from 'react';
import { FaLock, FaTruck, FaReceipt, FaSearch, FaPhoneAlt, FaHeadset } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SupportContent() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-16 sm:pt-20 pb-8 sm:pb-12">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center mb-8 sm:mb-12 md:mb-16 mt-4 sm:mt-6 md:mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12">
            Marcel Electronics Support
          </h1>

          {/* Top Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            {/* Product Warranty & Returns */}
            <div className="bg-white rounded-lg p-5 sm:p-6 md:p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto" style={{backgroundColor: 'rgba(8, 58, 133, 0.1)'}}>
                <BsShieldCheck className="text-xl sm:text-xl md:text-2xl" style={{color: '#083A85'}} />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-gray-700">Product Warranty & Returns</h3>
            </div>

            {/* Order and Delivery */}
            <div className="bg-white rounded-lg p-5 sm:p-6 md:p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto" style={{backgroundColor: 'rgba(8, 58, 133, 0.1)'}}>
                <FaTruck className="text-xl sm:text-xl md:text-2xl" style={{color: '#083A85'}} />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-gray-700">Order and Delivery</h3>
            </div>

            {/* Payment & Pricing */}
            <div className="bg-white rounded-lg p-5 sm:p-6 md:p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 mx-auto" style={{backgroundColor: 'rgba(8, 58, 133, 0.1)'}}>
                <FaReceipt className="text-xl sm:text-xl md:text-2xl" style={{color: '#083A85'}} />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-gray-700">Payment & Pricing</h3>
            </div>
          </div>

          {/* Search Section */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Search for Help Topics</h2>
            <div className="max-w-2xl mx-auto relative">
              <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
              <input
                type="text"
                placeholder="Search for warranty info, delivery status, payment options..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* YouTube and Contact Section */}
        <div className="bg-gray-50 py-8 sm:py-10 md:py-12 mb-8 sm:mb-10 md:mb-12">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
              {/* Marcel Electronics Tutorial Videos */}
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Product Setup & Tutorials</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4">
                  Learn how to set up your new device, transfer data, and make the most
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">of your smartphone, laptop, or accessories.</p>
                <a
                  href="/user/setup-guides"
                  className="hover:underline inline-flex items-center gap-2 font-medium text-sm sm:text-base"
                  style={{color: '#083A85'}}
                >
                  View Setup Guides →
                </a>
              </div>

              {/* Get Support */}
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Need Help?</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4">
                  Our support team is ready to assist you with product inquiries,
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">technical support, orders, and more.</p>
                <a href="/user/contact_us">
                  <button
                    className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full text-white font-medium hover:opacity-90 transition-all text-sm sm:text-base"
                    style={{ backgroundColor: '#083A85' }}
                  >
                    Contact Us Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Store & Support */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Left Image - Store Location */}
            <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1601524909162-ae8725290836?w=600&q=80"
                alt="Marcel Electronics Store"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-4 sm:p-5 md:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Visit Our Store</h3>
                  <p className="text-xs sm:text-sm">Kigali, Rwanda</p>
                </div>
              </div>
            </div>

            {/* Right Image - Customer Support */}
            <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                alt="Customer Support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-4 sm:p-5 md:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Expert Support</h3>
                  <p className="text-xs sm:text-sm">Available to help you 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Support Section */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12">
          <div className="text-center mb-5 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Customer Support</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-1.5 sm:mb-2">
              Get personalized assistance with your orders, product inquiries, or technical support.
            </p>
            <a href="/user/contact_us" className="hover:underline font-medium text-sm sm:text-base" style={{color: '#083A85'}}>
              Contact our support team →
            </a>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Beware of counterfeit products */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Beware of Counterfeit Products</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Always purchase from Marcel Electronics official stores and verified channels. Counterfeit electronics may look similar but lack authenticity, quality warranties, and can be unsafe.
              </p>
              <a href="/user/authenticity" className="hover:underline inline-flex items-center gap-1 font-medium text-sm sm:text-base" style={{color: '#083A85'}}>
                Learn more →
              </a>
            </div>

            {/* Warranty and genuine products */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">100% Authentic Products</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                All our products come with genuine manufacturer warranties. We are committed to selling only authentic smartphones, laptops, and accessories from authorized distributors.
              </p>
              <a href="/user/about" className="hover:underline inline-flex items-center gap-1 font-medium text-sm sm:text-base" style={{color: '#083A85'}}>
                Learn more →
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12">
          <div className="rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 text-center text-white" style={{backgroundColor: '#083A85'}}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Still Need Help?</h2>
            <p className="text-sm sm:text-base text-gray-100 mb-5 sm:mb-6 max-w-2xl mx-auto">
              Our team is here to help you with any questions about products, orders, warranties, or technical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a href="tel:+250781853236" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm sm:text-base">
                <FaPhoneAlt className="text-sm sm:text-base" />
                +250 781 853 236
              </a>
              <a href="mailto:info@marcelelectronics.com" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm sm:text-base">
                <FaHeadset className="text-sm sm:text-base" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
