"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

interface Product {
  id: number;
  name: string;
  price: string;
  unit: string;
  description: string;
  category: string;
  inStock: boolean;
  image: string;
}

const productData: Record<string, Product> = {
  "1": { 
    id: 1, 
    name: "Fresh Eggs", 
    price: "₦6,000", 
    unit: "Crate (30 pcs)",
    description: "Our eggs come from well fed chickens ensuring high quality. They are very rich in protein and a good source for muscle building goals. Great for baking, frying, boiling and poaching.",
    category: "dairy",
    inStock: true,
    image: "🥚"
  },
  "2": { 
    id: 2, 
    name: "Organic Bananas", 
    price: "₦999", 
    unit: "2 lbs",
    description: "Perfectly ripe organic bananas. Great source of potassium and natural energy.",
    category: "produce",
    inStock: true,
    image: "🍌"
  },
};

const relatedProducts = [
  { id: 2, name: "Chicken Thighs", price: "₦5,000", unit: "Kilo", image: "🍗" },
  { id: 3, name: "Chicken Thighs", price: "₦5,000", unit: "Kilo", image: "🍗" },
  { id: 4, name: "Chicken Thighs", price: "₦5,000", unit: "Kilo", image: "🍗" },
];

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const [quantity, setQuantity] = useState(1);
  
  const product = productData[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-[#89184E] hover:text-[#6d1340]">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const numericPrice = 6000; // Base price for calculation
  const total = quantity * numericPrice;

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

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
          <span className="text-gray-900">Product</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
              <div className="text-6xl sm:text-7xl lg:text-8xl">{product.image}</div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{product.name}</h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              {product.price} / {product.unit}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity:
                </label>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 font-bold text-lg"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="text-lg sm:text-xl font-bold text-gray-900">
                Total: ₦{total.toLocaleString()}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors font-semibold">
                Add to Cart
              </button>
              <button className="flex-1 bg-[#89184E] text-white py-3 px-6 rounded-lg hover:bg-[#6d1340] transition-colors font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* You Might Also Like */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">You Might Also Like</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {relatedProducts.map((relatedProduct) => (
            <Link href={`/product/${relatedProduct.id}`} key={relatedProduct.id} className="block">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                    <div className="text-6xl">{relatedProduct.image}</div>
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
                  <h3 className="font-semibold text-gray-900 mb-1">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{relatedProduct.price} / {relatedProduct.unit}</p>
                  
                  {/* Add to Cart Button */}
                  <button 
                    onClick={(e) => e.preventDefault()}
                    className="w-full bg-[#89184E] text-white py-2 px-4 rounded-md hover:bg-[#6d1340] transition-colors flex items-center justify-center gap-2"
                  >
                    <FiShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
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