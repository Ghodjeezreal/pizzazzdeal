"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiTrash2 } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

interface CartItem {
  id: number;
  name: string;
  price: string;
  priceNumeric: number;
  quantity: number;
  unit: string;
  image: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { 
      id: 1, 
      name: "Fresh Eggs", 
      price: "₦6,000", 
      priceNumeric: 6000,
      quantity: 1, 
      unit: "Crate (30 pcs)",
      image: "🥚" 
    },
    { 
      id: 2, 
      name: "Chicken Thighs", 
      price: "₦5,000", 
      priceNumeric: 5000,
      quantity: 3, 
      unit: "Kilo",
      image: "🍗" 
    },
  ]);

  const [discountCode, setDiscountCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.priceNumeric * item.quantity), 0);
  const deliveryFee = 1000; // VGC - ₦1000
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-[#89184E]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-[#89184E]">Shop</Link>
          <span className="mx-2">/</span>
          <Link href="/product/1" className="hover:text-[#89184E]">Product</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Shopping Cart</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some delicious items to get started!</p>
            <Link href="/shop" className="bg-[#89184E] text-white px-6 py-3 rounded-lg hover:bg-[#6d1340]">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Product Image and Info */}
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-2xl sm:text-3xl">{item.image}</div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{item.unit}</p>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">{item.price}</p>
                      </div>
                    </div>
                    
                    {/* Mobile-friendly controls */}
                    <div className="flex items-center justify-between sm:flex-col sm:items-end sm:space-y-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="text-lg font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Total Price and Remove */}
                      <div className="flex items-center space-x-3">
                        <div className="text-lg sm:text-xl font-bold text-gray-900">
                          ₦{(item.priceNumeric * item.quantity).toLocaleString()}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <FiTrash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Order Summary</h2>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base text-gray-600">Sub-total:</span>
                    <span className="text-sm sm:text-base font-medium">₦{subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                    <span className="text-sm sm:text-base text-gray-600">Delivery fee:</span>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm w-full sm:w-auto">
                      <option value="VGC">VGC - ₦1,000</option>
                      <option value="Lagos">Lagos Island - ₦1,500</option>
                      <option value="Mainland">Mainland - ₦2,000</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm sm:text-base text-gray-600">Discount Code:</label>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <input
                        type="text"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#89184E] text-sm"
                        placeholder="Enter code"
                      />
                    </div>
                    <button className="text-[#89184E] hover:text-[#6d1340] font-medium text-sm">
                      Apply
                    </button>
                  </div>
                  
                  <div className="border-t pt-3 sm:pt-4">
                    <div className="flex justify-between text-lg sm:text-xl font-bold">
                      <span className="text-gray-900">Total: ₦{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Link href="/checkout" className="w-full mt-4 sm:mt-6 bg-[#89184E] text-white py-3 rounded-lg font-semibold hover:bg-[#6d1340] transition-colors block text-center text-sm sm:text-base">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <IoLogoWhatsapp className="w-8 h-8 text-white" />
        </a>
      </div>

      <Footer />
    </div>
  );
}