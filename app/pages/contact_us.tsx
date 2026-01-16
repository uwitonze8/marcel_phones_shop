'use client';

import React, { useState } from 'react';
import { BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FiMapPin, FiMail, FiUser, FiPhone } from 'react-icons/fi';
import Navbar from '../components/Navbar';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccessModal(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setErrorMessage(result.error || 'Failed to send message. Please try again.');
        setShowErrorModal(true);
      }
    } catch (error) {
      setErrorMessage('An error occurred while sending your message. Please try again.');
      setShowErrorModal(true);
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen md:h-screen md:fixed md:inset-0 bg-white flex items-center justify-center md:pt-20 pt-16 pb-6 px-4 md:overflow-hidden overflow-y-auto">
        {/* Main contact card */}
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-visible relative z-10 md:h-[500px] my-6 md:my-0">
          <div className="grid md:grid-cols-5 gap-0 relative md:h-full">
            {/* Left side - Contact Information (Dark Blue) - Overlapping */}
            <div className="md:col-span-2 md:absolute md:left-0 md:top-6 md:bottom-6 md:w-[280px] md:z-20 p-6 md:p-8 text-white rounded-2xl shadow-2xl relative bg-black">
              <h1 className="text-2xl font-bold mb-8">Contact Us</h1>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <FiMapPin className="text-orange-200 text-xs" />
                    </div>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-gray-300 text-xs leading-relaxed">
                      kigali,Rwanda
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <FiMail className="text-orange-200 text-xs" />
                    </div>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-gray-300 text-xs">
                      info@marcelelectronics.com
                    </p>
                  </div>
                </div>

                {/* Username */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <FiUser className="text-orange-200 text-xs" />
                    </div>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-gray-300 text-xs">
                      marcelelectronics
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <FiPhone className="text-xs text-orange-200" />
                    </div>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-gray-300 text-xs">
                     +250 781 853 236
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="md:absolute md:bottom-8 md:left-8 flex gap-4 mt-8 md:mt-0">
                <a href="#" className="text-orange-200 hover:text-orange-100 transition-colors opacity-70 hover:opacity-100">
                  <BsInstagram className="text-base" />
                </a>
                <a href="#" className="text-orange-200 hover:text-orange-100 transition-colors opacity-70 hover:opacity-100">
                  <BsFacebook  className="text-base" />
                </a>

              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="md:col-span-5 p-6 md:pl-[320px] md:pr-10 md:py-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl mt-6 md:mt-0">
              <h2 className="text-xl font-bold text-gray-800 mb-1">Get in Touch</h2>
              <p className="text-gray-500 text-xs mb-4">Need help using our platform? Send us a message.</p>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-gray-800 font-semibold text-xs mb-1 uppercase">
                    FULL NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-gray-700 placeholder-gray-400 text-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-800 font-semibold text-xs mb-1 uppercase">
                    EMAIL ADDRESS <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-gray-700 placeholder-gray-400 text-sm"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-gray-800 font-semibold text-xs mb-1 uppercase">
                    PHONE NUMBER <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-gray-700 placeholder-gray-400 text-sm"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-800 font-semibold text-xs mb-1 uppercase">
                    SUBJECT <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-gray-700 placeholder-gray-400 text-sm"
                    placeholder="What is this about?"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-800 font-semibold text-xs mb-1 uppercase">
                    MESSAGE <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 py-2 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none text-gray-700 placeholder-gray-400 text-sm"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="text-white font-semibold py-2 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    style={{backgroundColor: '#F97316'}}
                  >
                    {submitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md animate-slideIn">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full px-4 py-2 rounded-lg font-medium transition-colors"
                  style={{backgroundColor: '#F97316', color: 'white'}}
                >
                  Great!
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {showErrorModal && (
          <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md animate-slideIn">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Error
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {errorMessage}
                </p>
                <button
                  onClick={() => setShowErrorModal(false)}
                  className="w-full px-4 py-2 rounded-lg font-medium transition-colors"
                  style={{backgroundColor: '#F97316', color: 'white'}}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
