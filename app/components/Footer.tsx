import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 md:py-8 text-white" style={{backgroundColor: '#083A85'}}>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-6 mb-8 sm:mb-6">
          {/* Logo and Description */}
          <div className="space-y-2 sm:space-y-3 text-left sm:col-span-2 md:col-span-1">
            <a href="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition">
              <Image
                src="/logo2.png"
                alt="Marcel Electronics Logo"
                width={40}
                height={40}
                className="object-contain sm:w-12 sm:h-12"
              />
              <span className="text-base sm:text-lg md:text-xl font-bold text-white font-poppins">Marcel Electronics</span>
            </a>
            <p className="text-xs sm:text-sm md:text-l text-white/90 leading-relaxed pr-0 sm:pr-4">Your trusted source for premium electronics and gadgets.</p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg md:text-xl text-white">QUICK LINKS</h4>
            <ul className="space-y-1.5 sm:space-y-1.5 text-xs sm:text-sm md:text-l text-white/90">
              <li><a href="/user/product" className="hover:opacity-80 hover:text-white transition cursor-pointer inline-block">Product</a></li>
              <li><a href="/user/about" className="hover:opacity-80 hover:text-white transition cursor-pointer inline-block">About</a></li>
              <li><a href="/user/contact_us" className="hover:opacity-80 hover:text-white transition cursor-pointer inline-block">Contact Us</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="text-left">
            <h4 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg md:text-xl text-white">SHOP</h4>
            <ul className="space-y-1.5 sm:space-y-1.5 text-xs sm:text-sm md:text-l text-white/90">
              <li><a href="" className="hover:opacity-80 hover:text-white transition cursor-pointer inline-block">Support</a></li>
              <li><a href="" className="hover:opacity-80 hover:text-white transition cursor-pointer inline-block">Privacy Policy</a></li>
              <li><a href="" className="hover:opacity-80 hover:text-white transition cursor-pointer inline-block">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-left">
            <h4 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg md:text-xl text-white">CONTACT US</h4>
            <ul className="space-y-1.5 sm:space-y-1.5 text-xs sm:text-sm md:text-l text-white/90">
              <li className="flex items-start gap-2">
                <i className="bi bi-envelope-fill mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                <a href="mailto:info@marcelelectronic.com" className="hover:opacity-80 hover:text-white transition break-words">info@marcelelectronic.com</a>
              </li>
              <li className="flex items-start gap-2">
                <i className="bi bi-telephone-fill mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                <a href="tel:+250781853236" className="hover:opacity-80 hover:text-white transition">+250 781 853 236</a>
              </li>
              <li className="flex items-start gap-2">
                <i className="bi bi-geo-alt-fill mt-0.5 flex-shrink-0" aria-hidden="true"></i>
                <span>kigali city, tajyire electronics, first floor</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-left">
            <h4 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg md:text-xl text-white">FOLLOW US ON</h4>
            <ul className="space-y-1.5 sm:space-y-1.5 text-xs sm:text-sm md:text-l text-white/90">
              <li className="flex items-center gap-2">
                <i className="bi bi-facebook" aria-hidden="true"></i>
                <a href="#" className="hover:opacity-80 hover:text-white transition cursor-pointer">Facebook</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-instagram" aria-hidden="true"></i>
                <a href="#" className="hover:opacity-80 hover:text-white transition cursor-pointer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-4 sm:pt-6 text-center text-xs sm:text-sm md:text-base lg:text-xl text-white/90">
          <p>&copy; 2025 Marcel Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
