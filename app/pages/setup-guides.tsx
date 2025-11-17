'use client';

import { useState } from 'react';
import { FaMobileAlt, FaLaptop, FaHeadphones, FaDownload, FaVideo, FaBook } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SetupGuidesContent() {
  const [activeCategory, setActiveCategory] = useState('all');

  const guides = [
    {
      id: 1,
      category: 'smartphone',
      title: 'iPhone Setup Guide',
      description: 'Complete guide to setting up your new iPhone, transferring data, and configuring essential features.',
      icon: FaMobileAlt,
      steps: [
        'Turn on your iPhone and follow the on-screen setup',
        'Connect to Wi-Fi and activate your device',
        'Transfer data from your old device using Quick Start',
        'Set up Face ID or Touch ID',
        'Configure iCloud and Apple ID',
        'Download your favorite apps from the App Store'
      ]
    },
    {
      id: 2,
      category: 'smartphone',
      title: 'Samsung Galaxy Setup Guide',
      description: 'Step-by-step instructions for setting up your Samsung Galaxy device and Samsung account.',
      icon: FaMobileAlt,
      steps: [
        'Power on your Samsung Galaxy device',
        'Select your language and region',
        'Connect to Wi-Fi network',
        'Sign in or create a Samsung account',
        'Transfer data using Smart Switch',
        'Set up biometric security (fingerprint/face)',
        'Customize your home screen and settings'
      ]
    },
    {
      id: 3,
      category: 'laptop',
      title: 'MacBook Setup Guide',
      description: 'Get started with your new MacBook - from unboxing to essential software installation.',
      icon: FaLaptop,
      steps: [
        'Unbox and connect your MacBook to power',
        'Press the power button to start',
        'Select your country and keyboard layout',
        'Connect to your Wi-Fi network',
        'Sign in with your Apple ID',
        'Transfer files from another Mac or PC',
        'Set up Touch ID and enable FileVault encryption',
        'Install essential apps and updates'
      ]
    },
    {
      id: 4,
      category: 'laptop',
      title: 'Windows Laptop Setup',
      description: 'Complete setup guide for your new Windows laptop including account creation and security.',
      icon: FaLaptop,
      steps: [
        'Connect to power and turn on your laptop',
        'Select region, language, and keyboard',
        'Connect to Wi-Fi',
        'Sign in with Microsoft account or create one',
        'Set up Windows Hello (facial recognition/fingerprint)',
        'Configure privacy settings',
        'Install Windows updates',
        'Download essential software'
      ]
    },
    {
      id: 5,
      category: 'accessories',
      title: 'AirPods Setup Guide',
      description: 'Pair your AirPods with iPhone, iPad, Mac, and customize audio settings.',
      icon: FaHeadphones,
      steps: [
        'Open the AirPods case near your iPhone',
        'Tap "Connect" on the popup notification',
        'AirPods automatically sync with all your Apple devices',
        'Customize settings in Bluetooth settings',
        'Enable spatial audio and noise cancellation',
        'Test microphone and audio quality'
      ]
    },
    {
      id: 6,
      category: 'accessories',
      title: 'Bluetooth Headphones Setup',
      description: 'Connect your Bluetooth headphones to any device and optimize audio settings.',
      icon: FaHeadphones,
      steps: [
        'Charge your headphones fully',
        'Turn on pairing mode (hold power button)',
        'Open Bluetooth settings on your device',
        'Select your headphones from available devices',
        'Complete pairing process',
        'Adjust audio settings and EQ',
        'Download companion app if available'
      ]
    }
  ];

  const filteredGuides = activeCategory === 'all'
    ? guides
    : guides.filter(guide => guide.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-20 pb-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Product Setup Guides
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Easy-to-follow guides to help you set up your new device and get started quickly
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'all'
                  ? 'text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={activeCategory === 'all' ? { backgroundColor: '#083A85' } : {}}
            >
              All Guides
            </button>
            <button
              onClick={() => setActiveCategory('smartphone')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'smartphone'
                  ? 'text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={activeCategory === 'smartphone' ? { backgroundColor: '#083A85' } : {}}
            >
              Smartphones
            </button>
            <button
              onClick={() => setActiveCategory('laptop')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'laptop'
                  ? 'text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={activeCategory === 'laptop' ? { backgroundColor: '#083A85' } : {}}
            >
              Laptops
            </button>
            <button
              onClick={() => setActiveCategory('accessories')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'accessories'
                  ? 'text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={activeCategory === 'accessories' ? { backgroundColor: '#083A85' } : {}}
            >
              Accessories
            </button>
          </div>
        </div>

        {/* Setup Guides Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGuides.map((guide) => {
              const Icon = guide.icon;
              return (
                <div
                  key={guide.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all p-6"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(8, 58, 133, 0.1)' }}
                    >
                      <Icon className="text-xl" style={{ color: '#083A85' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{guide.title}</h3>
                      <p className="text-sm text-gray-600">{guide.description}</p>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-2 mb-4">
                    {guide.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <BsCheckCircleFill
                          className="text-sm mt-1 flex-shrink-0"
                          style={{ color: '#083A85' }}
                        />
                        <p className="text-sm text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <button
                      className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-all"
                      style={{ backgroundColor: '#083A85' }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <FaVideo />
                        Watch Video
                      </span>
                    </button>
                    <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium border-2 hover:bg-gray-50 transition-all" style={{ borderColor: '#083A85', color: '#083A85' }}>
                      <span className="flex items-center justify-center gap-2">
                        <FaDownload />
                        PDF Guide
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Need More Help?</h2>
              <p className="text-gray-600">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/user/support" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all text-center">
                <FaBook className="text-3xl mx-auto mb-3" style={{ color: '#083A85' }} />
                <h3 className="font-bold text-gray-900 mb-2">Support Center</h3>
                <p className="text-sm text-gray-600">Visit our comprehensive support center</p>
              </a>

              <a href="/user/contact_us" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all text-center">
                <FaVideo className="text-3xl mx-auto mb-3" style={{ color: '#083A85' }} />
                <h3 className="font-bold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-sm text-gray-600">Watch detailed setup tutorials</p>
              </a>

              <a href="/user/contact_us" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all text-center">
                <FaHeadphones className="text-3xl mx-auto mb-3" style={{ color: '#083A85' }} />
                <h3 className="font-bold text-gray-900 mb-2">Contact Support</h3>
                <p className="text-sm text-gray-600">Get help from our expert team</p>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
