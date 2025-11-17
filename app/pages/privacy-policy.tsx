'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BsShieldCheck, BsLock, BsEye, BsCookie, BsEnvelope } from 'react-icons/bs';

export default function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-16 sm:pt-20 pb-6 sm:pb-8">
        {/* Hero Section */}
        <div className="py-6 sm:py-8 md:py-10" style={{ backgroundColor: 'rgba(8, 58, 133, 0.05)' }}>
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <BsShieldCheck className="text-3xl sm:text-4xl mx-auto mb-2 sm:mb-3" style={{ color: '#083A85' }} />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              Last Updated: January 17, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
          {/* Introduction */}
          <section className="mb-4 sm:mb-6">
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
              At Marcel Electronics, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}>
                <BsEye className="text-sm sm:text-base" style={{ color: '#083A85' }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Information We Collect</h2>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 sm:mb-2">Personal Information</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-1.5 sm:mb-2">
                  We collect personal information when you make a purchase, register for an account, subscribe to our newsletter, contact us for support, or fill out a form. This may include: name, email address, phone number, billing address, shipping address, and payment information.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 sm:mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  We may automatically collect information about your device, including web browser, IP address, time zone, and cookies installed on your device.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}>
                <BsLock className="text-sm sm:text-base" style={{ color: '#083A85' }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>

            <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-gray-700 text-xs sm:text-sm ml-3 sm:ml-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about orders and account</li>
              <li>Send promotional emails and newsletters (with consent)</li>
              <li>Improve our website and customer service</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
              <li>Personalize your experience</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}>
                <BsCookie className="text-sm sm:text-base" style={{ color: '#083A85' }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Cookies and Tracking</h2>
            </div>

            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies, but if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Data Security</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              We implement appropriate security measures to protect your personal information. All payment transactions are processed through secure payment gateways and we do not store your complete credit card information on our servers.
            </p>
          </section>

          {/* Third-Party Disclosure */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Third-Party Disclosure</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-1.5 sm:mb-2">
              We do not sell, trade, or transfer your personal information to third parties without your consent, except:
            </p>
            <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-gray-700 text-xs sm:text-sm ml-3 sm:ml-4">
              <li>To service providers who assist us (payment processors, shipping companies)</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or sale</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Your Rights</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-1.5 sm:mb-2">
              You have the right to access, correct, or delete your personal information, opt-out of marketing communications, and object to processing. To exercise these rights, please contact us using the information below.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Children's Privacy</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Changes to This Policy</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}>
                <BsEnvelope className="text-sm sm:text-base" style={{ color: '#083A85' }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-0.5 sm:space-y-1">
              <p className="text-gray-700 text-xs sm:text-sm"><strong>Email:</strong> info@marcelelectronics.com</p>
              <p className="text-gray-700 text-xs sm:text-sm"><strong>Phone:</strong> +250 781 853 236</p>
              <p className="text-gray-700 text-xs sm:text-sm"><strong>Address:</strong> Kigali, Rwanda</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
