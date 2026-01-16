'use client';

import { useState, useEffect } from 'react';
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
  productPrice: number;
  onSubmit: (formData: OrderFormData) => void;
}

interface Settings {
  storeName: string;
  storeEmail: string;
  storePhone: string;
  streetAddress: string;
  city: string;
  district: string;
}

export default function OrderForm({ isOpen, onClose, productName, productPrice, onSubmit }: OrderFormProps) {
  // Format price to RWF currency
  const formatPrice = (price: number) => {
    return `RWF ${price.toLocaleString('en-US')}`;
  };
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
  const [settings, setSettings] = useState<Settings | null>(null);

  // Fetch settings from API
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/settings');
        const data = await response.json();
        if (data.success && data.data) {
          setSettings(data.data);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    if (isOpen) {
      fetchSettings();
    }
  }, [isOpen]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full bg-white hover:bg-gray-100 transition-all shadow-lg cursor-pointer"
        >
          <BsX className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </button>

        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-black mb-2 pr-8">Complete Your Order</h2>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-xs sm:text-sm text-gray-600">{productName}</p>
            <p className="text-xs sm:text-sm font-bold" style={{ color: '#F97316' }}>{formatPrice(productPrice)}</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Delivery Option */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-black mb-2 sm:mb-3">Delivery Option</label>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, deliveryOption: 'delivery' }))}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-3 sm:p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  formData.deliveryOption === 'delivery'
                    ? 'border-[#F97316] bg-orange-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <BsTruck className={`w-4 h-4 sm:w-5 sm:h-5 ${formData.deliveryOption === 'delivery' ? 'text-[#F97316]' : 'text-gray-600'}`} />
                <span className={`text-xs sm:text-sm font-semibold ${formData.deliveryOption === 'delivery' ? 'text-[#F97316]' : 'text-gray-700'}`}>
                  Home Delivery
                </span>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, deliveryOption: 'pickup' }))}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-3 sm:p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  formData.deliveryOption === 'pickup'
                    ? 'border-[#F97316] bg-orange-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <BsShop className={`w-4 h-4 sm:w-5 sm:h-5 ${formData.deliveryOption === 'pickup' ? 'text-[#F97316]' : 'text-gray-600'}`} />
                <span className={`text-xs sm:text-sm font-semibold ${formData.deliveryOption === 'pickup' ? 'text-[#F97316]' : 'text-gray-700'}`}>
                  Store Pickup
                </span>
              </button>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-2 sm:mb-3 flex items-center gap-2">
              <BsPersonFill className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#F97316' }} />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
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
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
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
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
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
            <h3 className="text-xs sm:text-sm font-semibold text-black mb-2 sm:mb-3 flex items-center gap-2">
              <BsEnvelopeFill className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#F97316' }} />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
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
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
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
              <h3 className="text-xs sm:text-sm font-semibold text-black mb-2 sm:mb-3 flex items-center gap-2">
                <BsGeoAltFill className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#F97316' }} />
                Delivery Address
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
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
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Apt 4B, Building 2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
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
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
                        errors.state ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Gasabo"
                    />
                    {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Postal/ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
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
                      className={`w-full px-3 py-2 text-xs border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
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
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="e.g., Leave at front door, Ring bell twice"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Pickup Information */}
          {formData.deliveryOption === 'pickup' && (
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-3 sm:p-5 space-y-3">
              <h3 className="text-xs sm:text-sm font-bold text-black mb-2 sm:mb-3 flex items-center gap-2">
                <BsShop className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#F97316' }} />
                Store Pickup Information
              </h3>

              <div className="bg-white rounded-lg p-3 sm:p-4 space-y-3 border border-orange-200">
                <div>
                  <p className="text-xs font-semibold text-gray-800 mb-1">Pickup Location:</p>
                  <p className="text-xs font-bold" style={{ color: '#F97316' }}>{settings?.storeName || 'Marcel Phones Shop'}</p>
                  <p className="text-xs text-gray-700">{settings?.city || 'Kigali'}</p>
                  <p className="text-xs text-gray-700">{settings?.streetAddress || '1st Floor, Makuza Peace Plaza'}</p>
                  <p className="text-xs text-gray-700">{settings?.district || ''}</p>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <p className="text-xs font-semibold text-gray-800 mb-1">📞 Contact Information:</p>
                  <p className="text-xs text-gray-700">Phone: {settings?.storePhone || '+250 781 853 236'}</p>
                  <p className="text-xs text-gray-700">Email: {settings?.storeEmail || 'info@marcelphoneshop.com'}</p>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <p className="text-xs font-semibold text-gray-800 mb-1">🕒 Store Hours:</p>
                  <p className="text-xs text-gray-700">Monday - Saturday: 9:00 AM - 10:00 PM</p>
                  <p className="text-xs text-gray-700">Sunday: 1:00 PM - 10:00 PM</p>
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
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="flex-1 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold hover:opacity-90 transition-all cursor-pointer shadow-lg"
              style={{ backgroundColor: '#F97316' }}
            >
              Confirm Order
            </button>
            <button
              type="button"
              onClick={onClose}
              className="sm:flex-initial px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold border-2 transition-all hover:bg-gray-50 cursor-pointer"
              style={{ borderColor: '#F97316', color: '#F97316' }}
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
