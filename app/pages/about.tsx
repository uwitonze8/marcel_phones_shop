'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { BsFillBoxSeamFill, BsShieldCheck, BsLightning, BsPeople, BsTrophy } from 'react-icons/bs';
import { FaMotorcycle } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden w-full bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 xs:w-40 xs:h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 xs:w-40 xs:h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Content */}
        <div className="relative h-full flex items-center py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 md:gap-12 lg:gap-16 items-center w-full">
            {/* Left Side - Logo */}
            <div className="flex items-center justify-center order-2 md:order-1 animate-fade-in-left">
              <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Outer decorative rings */}
                <div className="absolute inset-0 rounded-full border border-blue-100 sm:border-2 md:border-4 animate-ping-slow opacity-20"></div>
                <div className="absolute inset-3 xs:inset-4 sm:inset-8 rounded-full border border-blue-200 sm:border-2 animate-pulse-ring opacity-30"></div>

                {/* Main logo container */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 rounded-full animate-float shadow-lg sm:shadow-xl"></div>
                <div className="absolute inset-2 xs:inset-3 sm:inset-6 bg-white rounded-full shadow-xl sm:shadow-2xl flex items-center justify-center overflow-hidden border border-gray-100 sm:border-2 md:border-4">
                  <img
                    src="/flyer.png"
                    alt="Marcel Electronics Logo"
                    className="w-full h-full object-contain p-3 xs:p-4 sm:p-6 md:p-8 transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-7 order-1 md:order-2 animate-fade-in-right text-center md:text-left">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg sm:shadow-xl backdrop-blur-sm hover:scale-105 transition-transform duration-300" style={{backgroundColor: '#083A85'}}>
                 Dominated Since 2020
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight">
                <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Empowering Rwanda
                </span>
                <span className="block mt-1 xs:mt-1.5 sm:mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Through Technology
                </span>
              </h1>

              {/* Description */}
              <p className="text-xs xs:text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                For over a decade, Marcel Electronics has been Rwanda's destination for authentic smartphones, laptops, and accessories. We combine competitive pricing with genuine warranties and expert guidance.
              </p>

              {/* Mission Statement */}
              <div className="p-2.5 xs:p-3 sm:p-5 bg-blue-50 border-l-3 sm:border-l-4 rounded-r-lg" style={{borderColor: '#083A85'}}>
                <p className="text-xs xs:text-sm sm:text-lg md:text-xl font-bold" style={{color: '#083A85'}}>
                  Our mission: Making cutting-edge technology accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Animated gradient and bounce styles */}
        <style jsx>{`
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse-slow {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }

          @keyframes slide-line {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .animate-slide-line {
            animation: slide-line 2s ease-in-out infinite;
          }

          @keyframes fade-in-left {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fade-in-right {
            0% {
              opacity: 0;
              transform: translateX(30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-fade-in-left {
            animation: fade-in-left 1s ease-out forwards;
          }

          .animate-fade-in-right {
            animation: fade-in-right 1s ease-out forwards;
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @keyframes blob {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            25% {
              transform: translate(20px, -20px) scale(1.1);
            }
            50% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            75% {
              transform: translate(20px, 20px) scale(1.05);
            }
          }

          @keyframes ping-slow {
            0% {
              transform: scale(1);
              opacity: 0.2;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.1;
            }
            100% {
              transform: scale(1);
              opacity: 0.2;
            }
          }

          @keyframes pulse-ring {
            0%, 100% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.15;
            }
          }

          .animate-blob {
            animation: blob 8s ease-in-out infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animate-ping-slow {
            animation: ping-slow 3s ease-in-out infinite;
          }

          .animate-pulse-ring {
            animation: pulse-ring 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Core Values Section */}
      <section className="relative py-6 xs:py-7 sm:py-8 md:py-12 lg:py-14 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 xs:w-40 xs:h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 xs:w-40 xs:h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-7 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Decorative Visual */}
            <div className="flex items-center justify-center order-2 md:order-1 animate-fade-in-left">
              <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md px-2 xs:px-0">
                {/* Decorative circles with icons */}
                <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
                  <div className="bg-white p-3 xs:p-4 sm:p-6 md:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 mx-auto" style={{backgroundColor: '#083A85'}}>
                      <BsShieldCheck className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h4 className="text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-gray-900 text-center">Integrity</h4>
                  </div>

                  <div className="bg-white p-3 xs:p-4 sm:p-6 md:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 mx-auto" style={{backgroundColor: '#083A85'}}>
                      <BsLightning className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h4 className="text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-gray-900 text-center">Innovation</h4>
                  </div>

                  <div className="bg-white p-3 xs:p-4 sm:p-6 md:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 mx-auto" style={{backgroundColor: '#083A85'}}>
                      <BsPeople className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h4 className="text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-gray-900 text-center">Customer First</h4>
                  </div>

                  <div className="bg-white p-3 xs:p-4 sm:p-6 md:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 mx-auto" style={{backgroundColor: '#083A85'}}>
                      <BsTrophy className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h4 className="text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-gray-900 text-center">Excellence</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 order-1 md:order-2 animate-fade-in-right">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 text-center md:text-left">
                <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>

              <div className="space-y-2.5 xs:space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#083A85'}}>
                    <BsShieldCheck className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-0.5 xs:mb-1">Integrity</h3>
                    <p className="text-gray-600 text-[11px] xs:text-xs sm:text-sm leading-relaxed">
                      100% authentic products with genuine warranties. We never compromise on quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#083A85'}}>
                    <BsLightning className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-0.5 xs:mb-1">Innovation</h3>
                    <p className="text-gray-600 text-[11px] xs:text-xs sm:text-sm leading-relaxed">
                      Latest technology and innovative solutions to keep you ahead of the curve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#083A85'}}>
                    <BsPeople className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-0.5 xs:mb-1">Customer First</h3>
                    <p className="text-gray-600 text-[11px] xs:text-xs sm:text-sm leading-relaxed">
                      Your satisfaction is our top priority. We're here to serve you better.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 xs:gap-3 sm:gap-4">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#083A85'}}>
                    <BsTrophy className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-900 mb-0.5 xs:mb-1">Excellence</h3>
                    <p className="text-gray-600 text-[11px] xs:text-xs sm:text-sm leading-relaxed">
                      Committed to delivering quality in everything we do, every single day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-6 xs:py-7 sm:py-8 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-4 xs:mb-5 sm:mb-7 md:mb-10 text-center">
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-gray-900">
              Services
            </h2>
          </div>

          {/* Services List - Centered Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4">
              {/* Service 1 */}
              <div className="group relative bg-gray-50 hover:bg-gray-100 rounded-lg p-2 xs:p-2.5 sm:p-3 md:p-4 transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 font-bold text-[10px] xs:text-xs sm:text-sm shadow-sm">
                      01
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold text-gray-900">
                      Social Media Management
                    </h3>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group relative bg-gray-50 hover:bg-gray-100 rounded-lg p-2 xs:p-2.5 sm:p-3 md:p-4 transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 font-bold text-[10px] xs:text-xs sm:text-sm shadow-sm">
                      02
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold text-gray-900">
                      Content Creation
                    </h3>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group relative bg-gray-50 hover:bg-gray-100 rounded-lg p-2 xs:p-2.5 sm:p-3 md:p-4 transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 font-bold text-[10px] xs:text-xs sm:text-sm shadow-sm">
                      03
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold text-gray-900">
                      Search Engine Optimization
                    </h3>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group relative bg-gray-50 hover:bg-gray-100 rounded-lg p-2 xs:p-2.5 sm:p-3 md:p-4 transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 font-bold text-[10px] xs:text-xs sm:text-sm shadow-sm">
                      04
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold text-gray-900">
                      Email Marketing Campaigns
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 xs:py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4 text-gray-900">
            Looking for the right device
            </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
         Visit us in store or shop online we are ready to assist
          </p>
          <div className="flex flex-col xs:flex-row gap-2.5 xs:gap-3 sm:gap-4 justify-center items-center max-w-md xs:max-w-none mx-auto">
            <a
              href="/user/product"
              className="w-full xs:w-auto inline-block text-white px-5 py-2 xs:px-6 xs:py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3 rounded-lg text-sm xs:text-base sm:text-lg font-semibold hover:opacity-90 transition-all shadow-lg"
              style={{backgroundColor: '#083A85'}}
            >
              Shop Now
            </a>
            <a
              href="/"
              className="w-full xs:w-auto inline-block border-2 px-5 py-2 xs:px-6 xs:py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3 rounded-lg text-sm xs:text-base sm:text-lg font-semibold transition-all text-gray-900 hover:bg-gray-100"
              style={{borderColor: '#083A85'}}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
