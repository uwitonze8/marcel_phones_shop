import Image from 'next/image';

export default function Navbar() {
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
            <span className="text-base font-bold text-black font-poppins">Marcel Electronics</span>
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#products" className="text-sm text-black transition hover:opacity-80 cursor-pointer" style={{'--hover-color': '#083A85'} as React.CSSProperties}>Products</a>
            <a href="#categories" className="text-sm text-black transition hover:opacity-80 cursor-pointer" style={{'--hover-color': '#083A85'} as React.CSSProperties}>Categories</a>
            <a href="#about" className="text-sm text-black transition hover:opacity-80 cursor-pointer" style={{'--hover-color': '#083A85'} as React.CSSProperties}>About</a>
            <a href="#contact" className="text-sm text-black transition hover:opacity-80 cursor-pointer" style={{'--hover-color': '#083A85'} as React.CSSProperties}>Contact</a>
          </div>
          <button className="text-white px-4 py-1.5 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm cursor-pointer" style={{backgroundColor: '#083A85'}}>
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
}
