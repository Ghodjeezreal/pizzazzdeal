"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    deliveryAddress: "",
    busStop: "",
    deliveryType: "same-day",
    customDate: "",
    additionalNotes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDeliveryTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      deliveryType: type
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-pink-50">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-sm text-gray-600">
          <Link href="/" className="hover:text-[#89184E]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-[#89184E]">Shop</Link>
          <span className="mx-2">/</span>
          <Link href="/product/1" className="hover:text-[#89184E]">Product</Link>
          <span className="mx-2">/</span>
          <Link href="/cart" className="hover:text-[#89184E]">Shopping Cart</Link>
          <span className="mx-2">/</span>
          <span className="text-[#89184E] font-medium">Checkout</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Full Name */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Anita Ezeonwu"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors"
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="anita@email.com"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="08000000000"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Address
                </label>
                <textarea
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors resize-none"
                  required
                />
              </div>

              {/* Bus Stop */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bus stop
                </label>
                <input
                  type="text"
                  name="busStop"
                  value={formData.busStop}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors"
                />
              </div>

              {/* Delivery Options */}
              <div className="mb-6">
                <div className="flex items-center space-x-8">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryType"
                      checked={formData.deliveryType === "same-day"}
                      onChange={() => handleDeliveryTypeChange("same-day")}
                      className="w-4 h-4 text-[#89184E] border-gray-300 focus:ring-[#89184E]"
                    />
                    <span className="ml-2 text-gray-900 font-medium">Same Day Delivery</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="deliveryType"
                      checked={formData.deliveryType === "custom"}
                      onChange={() => handleDeliveryTypeChange("custom")}
                      className="w-4 h-4 text-[#89184E] border-gray-300 focus:ring-[#89184E]"
                    />
                    <span className="ml-2 text-gray-900">Custom Date</span>
                    <span className="ml-1 text-gray-500 text-sm">(Please state in additional notes)</span>
                  </label>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Make Payment Button */}
              <button
                type="submit"
                className="w-full bg-[#89184E] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#6d1240] transition-colors focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:ring-offset-2"
              >
                Make Payment
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#e6b3d6] rounded-2xl p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-900">
                  <span>Sub-total:</span>
                  <span className="font-semibold">₦21,000</span>
                </div>
                
                <div className="flex justify-between text-gray-900">
                  <span>Delivery fee:</span>
                  <span className="font-semibold">₦1,000</span>
                </div>
                
                <div className="border-t border-gray-400 pt-4">
                  <div className="flex justify-between text-gray-900 text-lg font-bold">
                    <span>Total:</span>
                    <span>₦22,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors">
            <IoLogoWhatsapp className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}