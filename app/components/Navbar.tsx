'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-black bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <a href="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition">
            <Image
              src="/logo2.png"
              alt="Marcel Electronics Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-xl font-bold text-black font-poppins">Marcel Electronics</span>
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/user/product" className="text-xl text-black transition hover:opacity-80 cursor-pointer" style={{'--hover-color': '#083A85'} as React.CSSProperties}>Products</a>
            <a href="/user/about" className="text-xl text-black transition hover:opacity-80 cursor-pointer" style={{'--hover-color': '#083A85'} as React.CSSProperties}>About</a>
            <a href="/user/contact_us" className="text-xl text-black transition hover:opacity-80 cursor-pointer" style={{'--hover-color': '#083A85'} as React.CSSProperties}>Contact</a>
          </div>

          <a href="/user/product" className="hidden md:inline-block text-white px-4 py-1.5 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-xl cursor-pointer" style={{backgroundColor: '#083A85'}}>
            Shop Now
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-3">
            <a href="/user/product" className="block text-lg text-black hover:opacity-80 transition py-2" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="/user/about" className="block text-lg text-black hover:opacity-80 transition py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="" className="block text-lg text-black hover:opacity-80 transition py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="/user/product" className="block text-white px-4 py-2 rounded-lg text-center text-lg transition-all duration-300" style={{backgroundColor: '#083A85'}} onClick={() => setIsMenuOpen(false)}>
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
