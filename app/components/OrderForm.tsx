'use client';

import { useState } from 'react';
import { BsX, BsPersonFill, BsEnvelopeFill, BsPhoneFill, BsGeoAltFill, BsTruck, BsShop } from 'react-icons/bs';

interface OrderFormData {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phone: string;
  deliveryOption: 'delivery' | 'pickup';
  streetAddress: string;
  apartment: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  deliveryInstructions: string;
}

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: string;
  onSubmit: (formData: OrderFormData) => void;
}

export default function OrderForm({ isOpen, onClose, productName, productPrice, onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    deliveryOption: 'delivery',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    deliveryInstructions: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof OrderFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof OrderFormData, string>> = {};

    // Personal Information
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.gender) newErrors.gender = 'Please select your gender';

    // Contact Information
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Delivery Address (only if delivery option is selected)
    if (formData.deliveryOption === 'delivery') {
      if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State/Province is required';
      if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
      if (!formData.country.trim()) newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-gray-100 transition-all shadow-lg cursor-pointer"
        >
          <BsX className="w-6 h-6 text-black" />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-black mb-2">Complete Your Order</h2>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-600">{productName}</p>
            <p className="text-xs font-bold" style={{ color: '#083A85' }}>{productPrice}</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Delivery Option */}
          <div>
            <label className="block text-xs font-semibold text-black mb-3">Delivery Option</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, deliveryOption: 'delivery' }))}
                className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  formData.deliveryOption === 'delivery'
                    ? 'border-[#083A85] bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <BsTruck className={`w-5 h-5 ${formData.deliveryOption === 'delivery' ? 'text-[#083A85]' : 'text-gray-600'}`} />
                <span className={`text-xs font-semibold ${formData.deliveryOption === 'delivery' ? 'text-[#083A85]' : 'text-gray-700'}`}>
                  Home Delivery
                </span>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, deliveryOption: 'pickup' }))}
                className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  formData.deliveryOption === 'pickup'
                    ? 'border-[#083A85] bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <BsShop className={`w-5 h-5 ${formData.deliveryOption === 'pickup' ? 'text-[#083A85]' : 'text-gray-600'}`} />
                <span className={`text-xs font-semibold ${formData.deliveryOption === 'pickup' ? 'text-[#083A85]' : 'text-gray-700'}`}>
                  Store Pickup
                </span>
              </button>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h3 className="text-xs font-semibold text-black mb-3 flex items-center gap-2">
              <BsPersonFill className="w-4 h-4" style={{ color: '#083A85' }} />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Marcel"
                />
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="phoneshop"
                />
                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.gender ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && <p className="text-xs text-red-500 mt-1">{errors.gender}</p>}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xs font-semibold text-black mb-3 flex items-center gap-2">
              <BsEnvelopeFill className="w-4 h-4" style={{ color: '#083A85' }} />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="info@marcelelectronics.com"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+250 7XX XXX XXX"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Delivery Address (only show if delivery option is selected) */}
          {formData.deliveryOption === 'delivery' && (
            <div>
              <h3 className="text-xs font-semibold text-black mb-3 flex items-center gap-2">
                <BsGeoAltFill className="w-4 h-4" style={{ color: '#083A85' }} />
                Delivery Address
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                      errors.streetAddress ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="kk 123 St 456"
                  />
                  {errors.streetAddress && <p className="text-xs text-red-500 mt-1">{errors.streetAddress}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Oasis Apartment Unit (Optional)
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Apt 4B, Building 2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="kigali"
                    />
                    {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      State/Province <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                        errors.state ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Gasabo"
                    />
                    {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Postal/ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                        errors.postalCode ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="00000"
                    />
                    {errors.postalCode && <p className="text-xs text-red-500 mt-1">{errors.postalCode}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                        errors.country ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Rwanda"
                    />
                    {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Delivery Instructions (Optional)
                  </label>
                  <textarea
                    name="deliveryInstructions"
                    value={formData.deliveryInstructions}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="e.g., Leave at front door, Ring bell twice"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Pickup Information */}
          {formData.deliveryOption === 'pickup' && (
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-bold text-black mb-3 flex items-center gap-2">
                <BsShop className="w-5 h-5" style={{ color: '#083A85' }} />
                Store Pickup Information
              </h3>

              <div className="bg-white rounded-lg p-4 space-y-3 border border-blue-200">
                <div>
                  <p className="text-xs font-semibold text-gray-800 mb-1">Pickup Location:</p>
                  <p className="text-xs font-bold" style={{ color: '#083A85' }}>Marcel Phones Shop</p>
                  <p className="text-xs text-gray-700">kigal city</p>
                  <p className="text-xs text-gray-700">1st floor,Makuza peace plaza</p>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <p className="text-xs font-semibold text-gray-800 mb-1">📞 Contact Information:</p>
                  <p className="text-xs text-gray-700">Phone: +250 781 853 236</p>
                  <p className="text-xs text-gray-700">Email: info@marcelphoneshop.com</p>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <p className="text-xs font-semibold text-gray-800 mb-1">🕒 Store Hours:</p>
                  <p className="text-xs text-gray-700">Monday - saturday: 9:00 AM - 10:00 PM</p>
                  <p className="text-xs text-gray-700">Sunday: 1:00 pM - 10:00 PM</p>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <p className="text-xs font-semibold text-gray-800 mb-1">⏱️ Pickup Timeline:</p>
                  <p className="text-xs text-gray-700">Your order will be ready for pickup within <span className="font-semibold">2 - 3 hours</span>.</p>
                  <p className="text-xs text-gray-700 mt-1">We'll send you an <span className="font-semibold">email and SMS notification</span> when it's ready.</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mt-2">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">📝 Note:</span> Please bring a valid ID or Passport and your order confirmation when picking up.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="flex-1 text-white px-6 py-3 rounded-lg text-xs font-semibold hover:opacity-90 transition-all cursor-pointer shadow-lg"
              style={{ backgroundColor: '#083A85' }}
            >
              Confirm Order
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-lg text-xs font-semibold border-2 transition-all hover:bg-gray-50 cursor-pointer"
              style={{ borderColor: '#083A85', color: '#083A85' }}
            >
              Cancel
            </button>
          </div>
        </form>
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
  );
}
