'use client';

import { useState } from 'react';
import { BsX, BsCheck, BsStar, BsStarFill } from 'react-icons/bs';
import OrderForm from './OrderForm';
import SuccessModal from './SuccessModal';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  badge: string;
  specs: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);

  if (!isOpen || !product) return null;

  const handleOrderNow = () => {
    setShowOrderForm(true);
  };

  const handleOrderFormClose = () => {
    setShowOrderForm(false);
  };

  const handleOrderSubmit = (formData: any) => {
    // Handle order submission logic here
    console.log('Order submitted:', formData);

    // Store order data for success modal
    setOrderData(formData);

    // Close order form and show success modal
    setShowOrderForm(false);
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setOrderData(null);
    onClose();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      index < rating ? (
        <BsStarFill key={index} className="w-4 h-4" style={{ color: '#FFB800' }} />
      ) : (
        <BsStar key={index} className="w-4 h-4 text-gray-300" />
      )
    ));
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition-all shadow-lg cursor-pointer"
        >
          <BsX className="w-6 h-6 text-black" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Side - Product Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain max-h-96"
              />
            </div>
            {product.badge && (
              <span
                className="absolute top-4 left-4 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg"
                style={{ backgroundColor: '#083A85' }}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Right Side - Product Details */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">{product.name}</h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">{renderStars(product.rating)}</div>
                <span className="text-xs text-gray-600">
                  {product.rating}.0 ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-bold" style={{ color: '#083A85' }}>
                  {product.price}
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {product.inStock ? (
                  <>
                    <BsCheck className="w-5 h-5 text-green-600" />
                    <span className="text-xs font-semibold text-green-600">In Stock</span>
                  </>
                ) : (
                  <span className="text-xs font-semibold text-red-600">Out of Stock</span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-black mb-3">Key Specifications</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6 border-t border-gray-200">
              <button
                onClick={handleOrderNow}
                disabled={!product.inStock}
                className="flex-1 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg"
                style={{ backgroundColor: '#083A85' }}
              >
                Order Now
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg text-sm font-semibold border-2 transition-all hover:bg-gray-50 cursor-pointer"
                style={{ borderColor: '#083A85', color: '#083A85' }}
              >
                Continue browsing
              </button>
            </div>
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

          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }

          .animate-slideUp {
            animation: slideUp 0.3s ease-out;
          }
        `}</style>
      </div>

      {/* Order Form Modal */}
      <OrderForm
        isOpen={showOrderForm}
        onClose={handleOrderFormClose}
        productName={product.name}
        productPrice={product.price}
        onSubmit={handleOrderSubmit}
      />

      {/* Success Modal */}
      {orderData && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={handleSuccessModalClose}
          customerName={`${orderData.firstName} ${orderData.lastName}`}
          deliveryOption={orderData.deliveryOption}
        />
      )}
    </>
  );
}
