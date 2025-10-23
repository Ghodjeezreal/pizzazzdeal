"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/shop") {
      // Highlight shop for /shop pages, /product pages, /cart pages, AND /checkout pages (since these are all part of the shopping flow)
      return pathname.startsWith("/shop") || pathname.startsWith("/product") || pathname.startsWith("/cart") || pathname.startsWith("/checkout");
    }
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-[#89184E]">
              Food Market
              <div className="text-xs text-gray-500 font-normal hidden sm:block">We Serve Fresh and Delicious</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`${
                isActive("/") 
                  ? "text-[#89184E] font-medium border-b-2 border-[#89184E]" 
                  : "text-gray-700 hover:text-[#89184E]"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className={`${
                isActive("/shop") 
                  ? "text-[#89184E] font-medium border-b-2 border-[#89184E]" 
                  : "text-gray-700 hover:text-[#89184E]"
              }`}
            >
              Shop
            </Link>
            <Link 
              href="/deals" 
              className={`${
                isActive("/deals") 
                  ? "text-[#89184E] font-medium border-b-2 border-[#89184E]" 
                  : "text-gray-700 hover:text-[#89184E]"
              }`}
            >
              Deals
            </Link>
            <Link 
              href="/about" 
              className={`${
                isActive("/about") 
                  ? "text-[#89184E] font-medium border-b-2 border-[#89184E]" 
                  : "text-gray-700 hover:text-[#89184E]"
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className={`${
                isActive("/contact") 
                  ? "text-[#89184E] font-medium border-b-2 border-[#89184E]" 
                  : "text-gray-700 hover:text-[#89184E]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Search and Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent outline-none text-sm w-32 lg:w-48"
              />
              <FiSearch className="w-4 h-4 text-gray-500 ml-2" />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiHeart className="w-6 h-6 text-gray-600" />
            </button>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
              <FiShoppingCart className="w-6 h-6 text-gray-600" />
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiUser className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Icons and Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Link href="/cart" className="p-2 text-gray-600 hover:text-[#89184E]">
              <FiShoppingCart className="w-5 h-5" />
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#89184E]"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 absolute left-0 right-0 top-16 z-50 shadow-lg">
            {/* Mobile Search */}
            <div className="px-4 mb-4">
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent outline-none text-sm flex-1"
                />
                <FiSearch className="w-5 h-5 text-gray-500 ml-2" />
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-1 px-4">
              <Link 
                href="/" 
                className={`block py-3 px-3 rounded-lg ${
                  isActive("/") 
                    ? "text-[#89184E] bg-pink-50 font-medium" 
                    : "text-gray-700 hover:text-[#89184E] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className={`block py-3 px-3 rounded-lg ${
                  isActive("/shop") 
                    ? "text-[#89184E] bg-pink-50 font-medium" 
                    : "text-gray-700 hover:text-[#89184E] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/deals" 
                className={`block py-3 px-3 rounded-lg ${
                  isActive("/deals") 
                    ? "text-[#89184E] bg-pink-50 font-medium" 
                    : "text-gray-700 hover:text-[#89184E] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Deals
              </Link>
              <Link 
                href="/about" 
                className={`block py-3 px-3 rounded-lg ${
                  isActive("/about") 
                    ? "text-[#89184E] bg-pink-50 font-medium" 
                    : "text-gray-700 hover:text-[#89184E] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className={`block py-3 px-3 rounded-lg ${
                  isActive("/contact") 
                    ? "text-[#89184E] bg-pink-50 font-medium" 
                    : "text-gray-700 hover:text-[#89184E] hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Action Icons */}
            <div className="flex justify-center space-x-12 mt-6 pt-4 border-t border-gray-200">
              <button className="flex flex-col items-center text-gray-600 hover:text-[#89184E]">
                <FiHeart className="w-6 h-6" />
                <span className="text-xs mt-1">Wishlist</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-[#89184E]">
                <FiUser className="w-6 h-6" />
                <span className="text-xs mt-1">Account</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}