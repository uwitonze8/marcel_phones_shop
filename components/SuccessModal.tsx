'use client';

import { useEffect, useState } from 'react';
import { BsX, BsBellFill, BsCheckCircleFill, BsTruck, BsShop, BsEnvelopeFill, BsChatDotsFill } from 'react-icons/bs';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerName: string;
  deliveryOption: 'delivery' | 'pickup';
}

export default function SuccessModal({ isOpen, onClose, customerName, deliveryOption }: SuccessModalProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay content appearance for animation
      setTimeout(() => setShowContent(true), 200);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl max-w-lg w-full animate-scaleIn overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 blur-3xl -z-10" style={{ backgroundColor: '#083A85' }}></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all cursor-pointer hover:scale-110"
        >
          <BsX className="w-6 h-6 text-gray-700" />
        </button>

        {/* Content */}
        <div className="p-4 text-center relative">
          {/* Animated Bell Icon */}
          <div className="mb-1.5 flex justify-center">
            <div className="animate-bellSwing relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-40"></div>
              <BsBellFill className="w-8 h-8 text-green-500 relative drop-shadow-lg" />
            </div>
          </div>

          {/* Success Check Icon with Ring */}
          <div className="mb-2 flex justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-green-100 rounded-full animate-ping-slow opacity-75"></div>
            </div>
            <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-1 shadow-lg">
              <BsCheckCircleFill className="w-10 h-10 text-white animate-scaleIn drop-shadow-lg" />
            </div>
          </div>

          {/* Thank You Message with Customer Name */}
          <div className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-lg font-bold mb-1.5 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Order Confirmed!
            </h2>

            <div className="mb-2.5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2.5 shadow-inner">
              <p className="text-base font-bold text-green-600 mb-1 animate-fadeInUp leading-tight">
                Thank You, {customerName}! 🎉
              </p>
              <p className="text-xs text-gray-700 leading-snug">
                Your order has been successfully placed and confirmed.
              </p>
            </div>

            {/* Order Details - Ultra Compact */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-2.5 mb-2 shadow-md">
              {deliveryOption === 'delivery' ? (
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <div className="bg-green-500 p-1 rounded-full shadow-sm">
                      <BsTruck className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p className="text-xs font-bold text-green-800">
                    Your order will be delivered to your address
                  </p>
                  <div className="bg-white/70 rounded-lg p-1.5 space-y-0.5">
                    <p className="text-xs text-gray-800 font-semibold">
                      📦 Expected delivery: <span className="text-green-700">3-5 business days</span>
                    </p>
                    <p className="text-xs text-gray-700">
                      🔍 We'll send tracking information to your email
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <div className="bg-green-500 p-1 rounded-full shadow-sm">
                      <BsShop className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <p className="text-xs font-bold text-green-800">
                    Your order will be ready for pickup
                  </p>
                  <div className="bg-white/70 rounded-lg p-1.5 space-y-0.5">
                    <p className="text-xs text-gray-800 font-semibold">
                      ⏱️ Ready in: <span className="text-green-700">2-4 business days</span>
                    </p>
                    <p className="text-xs text-gray-700">
                      📍 We'll notify you when it's ready at our store
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Notification Info - Ultra Compact */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-2 mb-3 shadow-sm">
              <h4 className="text-xs font-bold text-gray-800 mb-1 flex items-center justify-center gap-1">
                <span className="text-sm">📬</span> You'll Receive Notifications
              </h4>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 bg-white/70 rounded p-1">
                  <BsEnvelopeFill className="w-3 h-3 text-blue-600 flex-shrink-0" />
                  <p className="text-xs text-gray-700 text-left">
                    <span className="font-semibold">Email:</span> Confirmation sent to inbox
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-white/70 rounded p-1">
                  <BsChatDotsFill className="w-3 h-3 text-blue-600 flex-shrink-0" />
                  <p className="text-xs text-gray-700 text-left">
                    <span className="font-semibold">SMS:</span> Order status updates
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button - Ultra Compact */}
            <button
              onClick={onClose}
              className="w-full text-white px-6 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-all cursor-pointer shadow-lg bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.5) rotate(-10deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bellSwing {
          0% {
            transform: translateX(-150px) rotate(-25deg) scale(0.5);
            opacity: 0;
          }
          15% {
            transform: translateX(-100px) rotate(-15deg) scale(0.7);
            opacity: 0.3;
          }
          30% {
            transform: translateX(-50px) rotate(-8deg) scale(0.85);
            opacity: 0.6;
          }
          45% {
            transform: translateX(-10px) rotate(-3deg) scale(0.95);
            opacity: 0.9;
          }
          55% {
            transform: translateX(0px) rotate(0deg) scale(1);
            opacity: 1;
          }
          65% {
            transform: translateX(15px) rotate(8deg) scale(1);
          }
          75% {
            transform: translateX(-8px) rotate(-5deg) scale(1);
          }
          85% {
            transform: translateX(4px) rotate(3deg) scale(1);
          }
          92% {
            transform: translateX(-2px) rotate(-1deg) scale(1);
          }
          100% {
            transform: translateX(0px) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .animate-bellSwing {
          animation: bellSwing 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
