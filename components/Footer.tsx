import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-8 text-white" style={{backgroundColor: '#083A85'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="space-y-3">
            <a href="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition">
              <Image
                src="/logo2.png"
                alt="Marcel Electronics Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="text-base font-bold text-white font-poppins">Marcel Electronics</span>
            </a>
            <p className="text-xs text-white">Your trusted source for premium electronics and gadgets.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Shop</h4>
            <ul className="space-y-1.5 text-xs text-white">
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">Smartphones</a></li>
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">Laptops</a></li>
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">Accessories</a></li>
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Support</h4>
            <ul className="space-y-1.5 text-xs text-white">
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">Shipping Info</a></li>
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">Returns</a></li>
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Connect</h4>
            <ul className="space-y-1.5 text-xs text-white">
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">Facebook</a></li>
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">Instagram</a></li>
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">Twitter</a></li>
              <li><a href="#" className="hover:opacity-80 transition cursor-pointer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white pt-6 text-center text-xs text-white">
          <p>&copy; 2025 Marcel Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
