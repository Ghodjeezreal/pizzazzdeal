import React from "react";
import Link from "next/link";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Left side - Logo and tagline */}
          <div className="text-center lg:text-left">
            <div className="text-xl sm:text-2xl font-bold text-[#89184E] mb-2">
              Food Market
              <div className="text-xs text-gray-600 font-normal">We Serve Fresh and Delicious</div>
            </div>
            <p className="text-gray-600 text-sm">
              Your daily dose of<br />
              freshness delivered.
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-gray-700">
            <Link href="/faq" className="hover:text-[#89184E]">FAQs</Link>
            <Link href="/terms" className="hover:text-[#89184E]">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-[#89184E]">Privacy Policy</Link>
            <Link href="/refund" className="hover:text-[#89184E]">Refund Policy</Link>
            <Link href="/delivery" className="hover:text-[#89184E]">Delivery Policy</Link>
          </div>

          {/* Right side - Social media icons */}
          <div className="flex space-x-3">
            <a href="#" className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-sm">
              <IoLogoInstagram className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 shadow-sm">
              <IoLogoLinkedin className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 shadow-sm">
              <IoLogoFacebook className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">&copy; 2025 Food Market. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}