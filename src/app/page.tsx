"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlideshow from "@/components/HeroSlideshow";
import { FiHeart, FiShoppingCart, FiTruck, FiShield, FiHeadphones, FiRefreshCw, FiChevronLeft, FiChevronRight, FiCheckCircle, FiClock } from "react-icons/fi";
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <Header />

      {/* Hero Section with Slideshow */}
      <HeroSlideshow />

      {/* Popular Categories */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-1 h-6 sm:h-8 bg-[#89184E] mr-3 sm:mr-4"></div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Popular Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { 
                name: "Protein", 
                description: "Meat, Fish, Eggs, Shrimps etc.", 
                color: "bg-orange-100",
                emoji: "🥩",
                imageUrl: "/api/placeholder/100/80"
              },
              { 
                name: "Fruits", 
                description: "Pineapples, Apples, Pear etc", 
                color: "bg-yellow-100",
                emoji: "🍎",
                imageUrl: "/api/placeholder/100/80"
              },
              { 
                name: "Vegetables", 
                description: "Tomatoes, Ugu, Carrots, Onions etc.", 
                color: "bg-green-100",
                emoji: "🥕",
                imageUrl: "/api/placeholder/100/80"
              },
              { 
                name: "Tubers & Grains", 
                description: "Yam, Rice, Beans, Garri etc.", 
                color: "bg-[#89184E]/10",
                emoji: "🌾",
                imageUrl: "/api/placeholder/100/80"
              },
            ].map((category) => (
              <div key={category.name} className={`${category.color} rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer`}>
                <div className="flex sm:block items-center space-x-3 sm:space-x-0 sm:text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-16 sm:mx-auto mb-0 sm:mb-4 bg-white rounded-xl overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-orange-200 to-brown-300 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl">{category.emoji}</span>
                    </div>
                  </div>
                  <div className="flex-1 sm:flex-none">
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{category.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-relaxed">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 sm:py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-1 h-6 sm:h-8 bg-[#89184E] mr-3 sm:mr-4"></div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Featured Products</h2>
          </div>
          
          {/* WhatsApp Button */}
          <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            <button className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors">
              <IoLogoWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { 
                id: 1,
                name: "Fresh Eggs", 
                price: "₦6,000", 
                unit: "/ crate (30 pcs)", 
                imageUrl: "/api/placeholder/300/200",
                bgColor: "bg-orange-50"
              },
              { 
                id: 2,
                name: "Tomatoes", 
                price: "₦7,000", 
                unit: "/ bucket", 
                imageUrl: "/api/placeholder/300/200",
                bgColor: "bg-red-50"
              },
              { 
                id: 3,
                name: "Chicken Thighs", 
                price: "₦5,000", 
                unit: "/ kilo", 
                imageUrl: "/api/placeholder/300/200",
                bgColor: "bg-orange-50"
              },
              { 
                id: 4,
                name: "Irish Potato", 
                price: "₦8,000", 
                unit: "/ bucket", 
                imageUrl: "/api/placeholder/300/200",
                bgColor: "bg-yellow-50"
              },
            ].map((product) => (
              <Link href={`/product/${product.id}`} key={product.name} className="block">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
                  {/* Heart/Wishlist Icon */}
                  <button 
                    onClick={(e) => e.preventDefault()}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50"
                  >
                    <FiHeart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                  </button>
                  
                  {/* Product Image */}
                  <div className={`h-32 sm:h-40 lg:h-48 ${product.bgColor} flex items-center justify-center relative overflow-hidden`}>
                    <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
                      {product.name === "Fresh Eggs" && (
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-1 p-2 sm:p-4">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-4 h-5 sm:w-6 sm:h-8 bg-orange-200 rounded-full"></div>
                          ))}
                        </div>
                      )}
                      {product.name === "Tomatoes" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full"></div>
                          ))}
                        </div>
                      )}
                      {product.name === "Chicken Thighs" && (
                        <div className="w-12 h-8 sm:w-16 sm:h-12 bg-pink-300 rounded-lg"></div>
                      )}
                      {product.name === "Irish Potato" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-4 h-6 sm:w-6 sm:h-8 bg-yellow-600 rounded-full"></div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base truncate">{product.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{product.unit}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-lg font-bold text-gray-900">{product.price}</span>
                      <button 
                        onClick={(e) => e.preventDefault()}
                        className="bg-[#89184E] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm hover:bg-[#6d1340] transition-colors"
                      >
                        <FiShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-50 to-white rounded-3xl p-8 relative overflow-hidden border border-pink-100">
            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <FiChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <FiChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Water bottles arrangement */}
                  <div className="grid grid-cols-3 gap-2 max-w-sm">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="relative">
                        <div className="w-16 h-24 bg-gradient-to-b from-red-500 to-red-600 rounded-lg relative overflow-hidden">
                          {/* Bottle cap */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-red-600 rounded-b-lg"></div>
                          {/* Label */}
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-white rounded text-xs flex items-center justify-center">
                            <span className="text-red-600 font-bold text-xs">EVA</span>
                          </div>
                          {/* Water content */}
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-blue-100 opacity-30 rounded-b-lg"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6 text-center md:text-left">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    <span className="text-pink-500">Pure Premium Water</span>
                    <span className="text-[#89184E]">.</span>
                  </h2>
                  <h3 className="text-2xl font-bold text-[#89184E] mb-4">Just a Click Away!</h3>
                  <p className="text-gray-600 text-lg mb-2">Stay fresh, stay hydrated.</p>
                  <p className="text-gray-800 font-semibold text-xl">@₦2,200 per pack (75cl)</p>
                </div>
                
                <button className="bg-[#89184E] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-[#6d1340] transition-colors shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiCheckCircle className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">With every order, we are committed to providing fresh and high quality products.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiShoppingCart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenience</h3>
                  <p className="text-gray-600">Shop conveniently from your home or workplace, save time and stress of visiting physical stores or markets.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Time Efficiency</h3>
                  <p className="text-gray-600">We make shopping effortless and convenient. Browse fresh products, add them to your cart and schedule deliveries in just a few clicks.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiHeadphones className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Support</h3>
                  <p className="text-gray-600">We&apos;re always here to make your shopping experience as easy as possible.</p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  {/* Building/Background */}
                  <div className="w-full h-64 bg-gradient-to-b from-orange-200 to-orange-300 rounded-2xl mb-4 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-200 rounded-tl-full"></div>
                    <div className="absolute top-4 left-4 w-16 h-20 bg-white rounded-lg shadow-md"></div>
                    <div className="absolute top-4 right-4 w-16 h-20 bg-white rounded-lg shadow-md"></div>
                  </div>
                  
                  {/* Delivery person */}
                  <div className="absolute bottom-8 right-8 w-20 h-24 bg-white rounded-xl shadow-lg p-2">
                    <div className="w-full h-12 bg-orange-100 rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-2xl">👨🏾</span>
                    </div>
                    <div className="w-full h-8 bg-orange-200 rounded text-xs flex items-center justify-center">
                      <span className="text-orange-800 font-semibold">Food Market</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation arrows */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-10">
              <FiChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow z-10">
              <FiChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            <div className="bg-gray-50 rounded-3xl p-8 mx-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-8 italic leading-relaxed">
                  &ldquo;It honestly feels like shopping at my local market.&rdquo;
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-800 font-semibold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adenike Adebayo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}