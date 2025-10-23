"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const products = [
  { id: 1, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 2, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 3, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 4, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 5, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 6, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 7, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 8, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 9, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 10, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 11, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 12, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 13, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 14, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
  { id: 15, name: "Fresh Eggs", price: "₦6,000/create (30 pcs)", category: "dairy", image: "🥚" },
];

const categories = [
  { id: "all", name: "Category" },
  { id: "dairy", name: "Dairy & Eggs" },
  { id: "produce", name: "Fresh Produce" },
  { id: "meat", name: "Meat & Seafood" },
  { id: "bakery", name: "Bakery" },
];

const priceRanges = [
  { id: "all", name: "Price Range" },
  { id: "under-5000", name: "Under ₦5,000" },
  { id: "5000-10000", name: "₦5,000 - ₦10,000" },
  { id: "above-10000", name: "Above ₦10,000" },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Shop Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:border-transparent"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Results and Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <p className="text-sm sm:text-base text-gray-600">
            Showing 1 - 15 of 30 results
          </p>
          
          {/* Filter Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#89184E] bg-white text-sm sm:text-base"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#89184E] bg-white text-sm sm:text-base"
            >
              {priceRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="block">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                    <div className="text-6xl">{product.image}</div>
                  </div>
                  {/* Heart Icon */}
                  <button 
                    onClick={(e) => e.preventDefault()}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <FiHeart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.price}</p>
                  
                  {/* Add to Cart Button */}
                  <button 
                    onClick={(e) => e.preventDefault()}
                    className="w-full bg-[#89184E] text-white py-2 px-4 rounded-md hover:bg-[#6d1340] transition-colors flex items-center justify-center gap-2"
                  >
                    <FiShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <span className="text-gray-600">Previous</span>
          <span className="mx-2">1</span>
          <span className="mx-2">2</span>
          <span className="mx-2">...</span>
          <Link href="#" className="text-[#89184E] hover:underline">Next</Link>
        </div>
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