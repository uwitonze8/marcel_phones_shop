import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="py-8 text-white" style={{backgroundColor: '#083A85'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          <div className="space-y-3">
            <a href="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition">
              <Image
                src="/logo2.png"
                alt="Marcel Electronics Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="text-xl font-bold text-white font-poppins">Marcel Electronics</span>
            </a>
            <p className="text-l text-white">Your trusted source for premium electronics and gadgets.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-xl text-white">QUICK LINKS</h4>
            <ul className="space-y-1.5 text-l text-white">
              <li><a href="/user/product" className="hover:opacity-80 transition cursor-pointer">Product</a></li>
              <li><a href="" className="hover:opacity-80 transition cursor-pointer">About</a></li>
              <li><a href="" className="hover:opacity-80 transition cursor-pointer">Contact Us</a></li>
              
            
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-xl text-white">SHOP</h4>
            <ul className="space-y-1.5 text-l text-white">
              <li><a href="" className="hover:opacity-80 transition cursor-pointer">Support</a></li>
              <li><a href="" className="hover:opacity-80 transition cursor-pointer">Privacy Policy</a></li>
              <li><a href="" className="hover:opacity-80 transition cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>

            <div>
            <h4 className="font-bold mb-3 text-xl text-white">CONTACT US </h4>
            <ul className="space-y-1.5 text-l text-white">
              <li className="flex items-center">
              <i className="bi bi-envelope-fill mr-2" aria-hidden="true"></i>
              <a href="mailto:info@marcelelectronic.com" className="hover:opacity-80 transition">info@marcelelectronic.com</a>
              </li>
              <li className="flex items-center">
              <i className="bi bi-telephone-fill mr-2" aria-hidden="true"></i>
              <a href="tel:+250781853236" className="hover:opacity-80 transition">+250 781 853 236</a>
              </li>
              <li className="flex items-center">
              <i className="bi bi-geo-alt-fill mr-2" aria-hidden="true"></i>
              <span>kigali city, tajyire electronics, first floor</span>
              </li>
            </ul>
            </div>

          <div>
            <h4 className="font-bold mb-3 text-xl text-white">FOLLOW US ON : </h4>
            <ul className="space-y-1.5 text-l text-white">
              <li className="flex items-center">
                <i className="bi bi-facebook mr-2" aria-hidden="true"></i>
                <a href="#" className="hover:opacity-80 transition cursor-pointer">Facebook</a>
              </li>
              <li className="flex items-center">
                <i className="bi bi-instagram mr-2" aria-hidden="true"></i>
                <a href="#" className="hover:opacity-80 transition cursor-pointer">Instagram</a>
              </li>
            </ul>
            <div className="mt-6"></div>
          </div>
        </div>
        <div className="border-t border-white pt-6 text-center text-xl text-white">
          <p>&copy; 2025 Marcel Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
