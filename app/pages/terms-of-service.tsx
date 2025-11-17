'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BsFileText, BsCart, BsCreditCard, BsArrowReturnLeft, BsExclamationTriangle } from 'react-icons/bs';

export default function TermsOfServiceContent() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-16 sm:pt-20 pb-6 sm:pb-8">
        {/* Hero Section */}
        <div className="py-6 sm:py-8 md:py-10" style={{ backgroundColor: 'rgba(8, 58, 133, 0.05)' }}>
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <BsFileText className="text-3xl sm:text-4xl mx-auto mb-2 sm:mb-3" style={{ color: '#083A85' }} />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
              Terms of Service
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
              Welcome to Marcel Electronics. These Terms of Service ("Terms") govern your use of our website and the purchase of products from us. By accessing or using our website, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              Please read these Terms carefully before using our website. If you do not agree to these Terms, you may not access or use our website.
            </p>
          </section>

          {/* Agreement to Terms */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Agreement to Terms</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              By using our website, you represent that you are at least 18 years of age and have the legal capacity to enter into these Terms. If you are using our website on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          {/* Products and Orders */}
          <section className="mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}>
                <BsCart className="text-sm sm:text-base" style={{ color: '#083A85' }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Products and Orders</h2>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 sm:mb-2">Product Information</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  We strive to display accurate product information. However, we do not warrant that product descriptions or other content on our website is accurate, complete, reliable, current, or error-free.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 sm:mb-2">Pricing</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  All prices are in Rwandan Francs (RWF) and subject to change without notice. In the event of a pricing error, we reserve the right to cancel any orders placed for products listed at the incorrect price.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 sm:mb-2">Order Acceptance</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  We reserve the right to refuse or cancel any order for any reason, including product availability, pricing errors, or suspected fraudulent activity.
                </p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}>
                <BsCreditCard className="text-sm sm:text-base" style={{ color: '#083A85' }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Payment Terms</h2>
            </div>

            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-1.5 sm:mb-2">
              Payment is required at the time of purchase. We accept Mobile Money (MTN, Airtel), Bank Transfer, Cash on Delivery (where available), and Credit/Debit Cards. All payments are processed securely through our payment partners. We do not store your complete payment information on our servers.
            </p>
          </section>

          {/* Shipping and Delivery */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Shipping and Delivery</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              We offer delivery services within Rwanda. Delivery times and costs vary depending on your location and products ordered. We will make reasonable efforts to deliver products within the estimated timeframe, but we are not liable for delays caused by circumstances beyond our control. Risk of loss and title for products pass to you upon delivery to the carrier.
            </p>
          </section>

          {/* Returns and Refunds */}
          <section className="mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}>
                <BsArrowReturnLeft className="text-sm sm:text-base" style={{ color: '#083A85' }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Returns and Refunds</h2>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                You may return eligible products within 7 days of delivery for a refund or exchange.
              </p>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">Return Conditions:</h3>
                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-gray-700 text-xs sm:text-sm ml-3 sm:ml-4">
                  <li>Products must be unused and in original packaging</li>
                  <li>All accessories, manuals, and documentation must be included</li>
                  <li>Proof of purchase is required</li>
                  <li>Products must not show signs of damage or misuse</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">Non-Returnable Items:</h3>
                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-gray-700 text-xs sm:text-sm ml-3 sm:ml-4">
                  <li>Opened software or downloadable products</li>
                  <li>Products damaged due to misuse or negligence</li>
                  <li>Products without original packaging or accessories</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Warranties */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Warranties</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              All products sold by Marcel Electronics come with manufacturer warranties. The specific warranty terms vary by product and manufacturer. We sell only authentic products from authorized distributors and guarantee the genuineness of all items. For warranty claims, please contact us with your proof of purchase and a description of the issue.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}>
                <BsExclamationTriangle className="text-sm sm:text-base" style={{ color: '#083A85' }} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Limitation of Liability</h2>
            </div>

            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              To the fullest extent permitted by law, Marcel Electronics shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability to you for any damages shall not exceed the amount you paid for the product giving rise to the claim.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Intellectual Property</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              All content on our website is the property of Marcel Electronics or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
            </p>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Prohibited Activities</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-1.5 sm:mb-2">
              You may not use our website for any unlawful purpose or in any way that:
            </p>
            <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-gray-700 text-xs sm:text-sm ml-3 sm:ml-4">
              <li>Violates any applicable laws or regulations</li>
              <li>Infringes on the rights of others</li>
              <li>Transmits harmful or malicious code</li>
              <li>Interferes with the operation of our website</li>
              <li>Attempts to gain unauthorized access to our systems</li>
              <li>Impersonates any person or entity</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Governing Law</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              These Terms shall be governed by the laws of Rwanda. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Rwanda.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Changes to These Terms</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our website after any changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Contact Us</h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-0.5 sm:space-y-1">
              <p className="text-gray-700 text-xs sm:text-sm"><strong>Email:</strong> info@marcelelectronics.com</p>
              <p className="text-gray-700 text-xs sm:text-sm"><strong>Phone:</strong> +250 781 853 236</p>
              <p className="text-gray-700 text-xs sm:text-sm"><strong>Address:</strong> Kigali, Rwanda</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-blue-50 rounded-lg p-3 sm:p-4 border-l-4" style={{ borderColor: '#083A85' }}>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              By using our website and making a purchase, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
