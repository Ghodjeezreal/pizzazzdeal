import React from "react";
import Link from "next/link";

const deals = [
  {
    id: 1,
    title: "Fresh Fruit Bundle",
    description: "Mix of seasonal fresh fruits",
    originalPrice: 9999,
    salePrice: 7599,
    discount: 24,
    image: "/api/placeholder/300/200",
    validUntil: "Limited Time"
  },
  {
    id: 2,
    title: "Organic Vegetables Pack",
    description: "Farm-fresh organic vegetables",
    originalPrice: 7999,
    salePrice: 5999,
    discount: 25,
    image: "/api/placeholder/300/200",
    validUntil: "This Week Only"
  },
  {
    id: 3,
    title: "Premium Meat Selection",
    description: "High-quality meat cuts",
    originalPrice: 18399,
    salePrice: 14399,
    discount: 22,
    image: "/api/placeholder/300/200",
    validUntil: "Weekend Special"
  },
  {
    id: 4,
    title: "Bakery Favorites",
    description: "Fresh baked goods selection",
    originalPrice: 6799,
    salePrice: 5199,
    discount: 24,
    image: "/api/placeholder/300/200",
    validUntil: "Daily Deal"
  },
];

export default function Deals() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">FoodMarket</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-500">Home</Link>
              <Link href="/shop" className="text-gray-700 hover:text-primary-500">Shop</Link>
              <Link href="/deals" className="text-primary-500 font-medium">Deals</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-500">About</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-primary-500">Login</Link>
              <Link href="/cart" className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600">
                Cart (0)
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-100 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🔥 Hot Deals & Offers</h1>
          <p className="text-xl text-gray-600 mb-8">Save big on your favorite fresh foods!</p>
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <span className="text-red-500 font-semibold">⏰ Limited Time Offers</span>
          </div>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Deal Badge */}
              <div className="relative">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {deal.discount}% OFF
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-medium">
                  {deal.validUntil}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{deal.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{deal.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-500">₦{deal.salePrice.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through">₦{deal.originalPrice.toLocaleString()}</span>
                  </div>
                  <span className="text-green-600 font-medium text-sm">
                    Save ₦{(deal.originalPrice - deal.salePrice).toLocaleString()}
                  </span>
                </div>

                <button className="w-full bg-primary-500 text-white py-2 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Delivery</h3>
              <p className="text-gray-700 mb-4">On orders over ₦20,000. No delivery fees, no minimum order requirements after ₦20,000.</p>
              <Link href="/shop" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Shop Now
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Weekly Specials</h3>
              <p className="text-gray-700 mb-4">New deals every week on fresh produce, meat, and pantry essentials.</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Never Miss a Deal!</h2>
          <p className="text-gray-300 mb-6">Subscribe to our newsletter and get exclusive deals delivered to your inbox.</p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}