'use client';

import { BsShieldCheck, BsExclamationTriangle, BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { FaCertificate, FaStore, FaUserShield, FaPhone } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AuthenticityContent() {
  const redFlags = [
    {
      title: 'Unrealistically Low Prices',
      description: 'If the price seems too good to be true, it probably is. Counterfeit products are often sold at significantly discounted prices.'
    },
    {
      title: 'Unofficial Sellers',
      description: 'Be cautious of unverified online sellers or street vendors claiming to sell brand new flagship devices at huge discounts.'
    },
    {
      title: 'No Warranty Documentation',
      description: 'Authentic products always come with official warranty cards and proper documentation from the manufacturer.'
    },
    {
      title: 'Poor Build Quality',
      description: 'Look for signs like misaligned logos, cheap materials, poor screen quality, or buttons that feel loose or sticky.'
    },
    {
      title: 'Missing Serial Numbers',
      description: 'All genuine electronics have serial numbers that can be verified with the manufacturer.'
    },
    {
      title: 'Suspicious Packaging',
      description: 'Counterfeit products often come in poorly printed boxes with spelling errors or low-quality materials.'
    }
  ];

  const authenticFeatures = [
    {
      icon: FaCertificate,
      title: 'Official Warranty',
      description: 'All our products include manufacturer warranties that can be verified and claimed worldwide.'
    },
    {
      icon: BsShieldCheck,
      title: 'Authorized Distributor',
      description: 'We are authorized distributors for all major brands including Apple, Samsung, Dell, and more.'
    },
    {
      icon: FaStore,
      title: 'Physical Store Location',
      description: 'Visit our physical store in Kigali to verify products and meet our team face-to-face.'
    },
    {
      icon: FaUserShield,
      title: 'Verified Serial Numbers',
      description: 'Every product comes with verifiable serial numbers registered with the manufacturer.'
    }
  ];

  const verificationSteps = [
    {
      step: '1',
      title: 'Check the Packaging',
      description: 'Authentic products have high-quality packaging with clear printing, proper seals, and no spelling errors.'
    },
    {
      step: '2',
      title: 'Verify Serial Number',
      description: 'Use the manufacturer\'s website to verify the serial number matches the product and is not duplicated.'
    },
    {
      step: '3',
      title: 'Inspect Build Quality',
      description: 'Check for proper branding, weight, materials, and overall finish. Compare with official product images.'
    },
    {
      step: '4',
      title: 'Test All Features',
      description: 'Ensure all features work correctly including cameras, sensors, connectivity, and software.'
    },
    {
      step: '5',
      title: 'Validate Documentation',
      description: 'Confirm warranty cards, user manuals, and certificates of authenticity are present and legitimate.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-16 sm:pt-20 pb-8 sm:pb-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-50 to-white py-8 sm:py-12 md:py-16 border-b border-red-100">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <BsExclamationTriangle className="text-4xl sm:text-5xl mx-auto mb-3 sm:mb-4 text-red-500" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Beware of Counterfeit Electronics
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Protect yourself from fake products. Learn how to identify counterfeit electronics and why purchasing from authorized dealers like Marcel Electronics matters.
            </p>
          </div>
        </div>

        {/* Why It Matters Section */}
        <div className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Why Authenticity Matters</h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Counterfeit products pose serious risks to your safety, privacy, and wallet
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              <div className="text-center p-4 sm:p-5 md:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <BsXCircleFill className="text-xl sm:text-xl md:text-2xl text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2 text-sm sm:text-base">Safety Risks</h3>
                <p className="text-xs sm:text-sm text-gray-600">Fake batteries can overheat, catch fire, or explode</p>
              </div>

              <div className="text-center p-4 sm:p-5 md:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <BsXCircleFill className="text-xl sm:text-xl md:text-2xl text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2 text-sm sm:text-base">No Warranty</h3>
                <p className="text-xs sm:text-sm text-gray-600">Counterfeit products have no manufacturer support</p>
              </div>

              <div className="text-center p-4 sm:p-5 md:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <BsXCircleFill className="text-xl sm:text-xl md:text-2xl text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2 text-sm sm:text-base">Poor Performance</h3>
                <p className="text-xs sm:text-sm text-gray-600">Lower quality components result in subpar performance</p>
              </div>

              <div className="text-center p-4 sm:p-5 md:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <BsXCircleFill className="text-xl sm:text-xl md:text-2xl text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2 text-sm sm:text-base">Security Threats</h3>
                <p className="text-xs sm:text-sm text-gray-600">Fake devices may contain malware or spyware</p>
              </div>
            </div>
          </div>
        </div>

        {/* Red Flags Section */}
        <div className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Warning Signs of Counterfeit Products</h2>
              <p className="text-sm sm:text-base text-gray-600">Watch out for these red flags when purchasing electronics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {redFlags.map((flag, index) => (
                <div key={index} className="bg-white rounded-lg p-4 sm:p-5 md:p-6 border-l-4 border-red-500 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                    <BsExclamationTriangle className="text-red-500 flex-shrink-0" />
                    {flag.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">{flag.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Verify Section */}
        <div className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">How to Verify Authenticity</h2>
              <p className="text-sm sm:text-base text-gray-600">Follow these steps to ensure you're buying genuine products</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
              {verificationSteps.map((item, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 md:gap-6 items-start bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg sm:text-lg md:text-xl"
                    style={{ backgroundColor: '#083A85' }}
                  >
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marcel Electronics Guarantee Section */}
        <div className="py-8 sm:py-12 md:py-16" style={{ backgroundColor: 'rgba(8, 58, 133, 0.05)' }}>
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Marcel Electronics Authenticity Guarantee</h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                When you purchase from Marcel Electronics, you can shop with confidence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {authenticFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-4 sm:p-5 md:p-6 text-center shadow-sm hover:shadow-md transition-all">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4"
                      style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}
                    >
                      <Icon className="text-xl sm:text-xl md:text-2xl" style={{ color: '#083A85' }} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white" style={{ backgroundColor: '#083A85' }}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Shop Authentic Electronics with Confidence</h2>
              <p className="text-gray-100 mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
                Visit Marcel Electronics for 100% authentic products, genuine warranties, and expert support. Your safety and satisfaction are our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/user/product"
                  className="inline-block bg-white text-gray-900 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm sm:text-base"
                >
                  Browse Products
                </a>
                <a
                  href="/user/contact_us"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white/10 transition-all text-sm sm:text-base"
                >
                  <FaPhone />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
