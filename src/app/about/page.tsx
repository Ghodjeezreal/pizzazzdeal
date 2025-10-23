"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiSearch } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

export default function About() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Header />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div 
          className="h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded-3xl flex items-center justify-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMEY3MjJGIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RnJlc2ggVmVnZXRhYmxlcyAmIEZydWl0czwvdGV4dD4KPC9zdmc+')"
          }}
        >
          <div className="text-center text-white px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Connecting You to Freshness</h1>
            <p className="text-sm sm:text-lg md:text-xl">More Than Just Groceries - Our Story</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Our Journey Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <span className="text-[#89184E]">Our Journey</span> From Humble Beginnings
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Every great story has a beginning, and ours started in the hustle and bustle of the local market. We saw the stress, the long wait, and the 
            need for something simpler. So, we set out to create a service that connects people to the freshest foodstuff and the tastiest local meals, 
            without the hassle. Today, we&apos;re more than an online store, we&apos;re a community built on trust, freshness, and a commitment to supporting our 
            customers and communities while making your life easier.
          </p>
        </div>

        {/* Our Promise Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <span className="text-[#89184E]">Our Promise:</span> What Drives Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Our promise is to make everyday food shopping simple and stress-free, bringing fresh market produce and local meals straight to your door. 
            We are guided by our core values in every decision we make.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Quality First */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-[#89184E] rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
            <p className="text-gray-600">
              We partner directly with trusted farmers, local producers and vendors to bring you the freshest, most flavourful produce available.
            </p>
          </div>

          {/* Community Focused */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-[#89184E] rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Focused</h3>
            <p className="text-gray-600">
              We believe in building strong relationships with our customers and supporting local producers.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Taste the Difference?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join our community and experience the joy of fresh, quality groceries delivered right to your door.
          </p>
          <Link 
            href="/shop"
            className="inline-block bg-[#89184E] text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-[#6d1240] transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors">
          <IoLogoWhatsapp className="w-8 h-8 text-white" />
        </button>
      </div>

      <Footer />
    </div>
  );
}