"use client";

import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Fresh Groceries",
    subtitle: "Delivered Fast",
    description: "Bringing the neighborhood market straight to your door. Fresh produce, local favorites, and fast delivery.",
    buttonText: "Start Now",
    bgGradient: "from-orange-400 to-red-500",
    image: "/chef.png",
    imageText: "Fresh Market Vendor"
  },
  {
    id: 2,
    title: "Premium Quality",
    subtitle: "Guaranteed Fresh",
    description: "Hand-picked products from local farms and trusted suppliers. Quality you can taste, freshness you can trust.",
    buttonText: "Shop Now",
    bgGradient: "from-green-400 to-blue-500",
    image: "/market.png",
    imageText: "Farm Fresh Quality"
  },
  {
    id: 3,
    title: "Fast Delivery",
    subtitle: "Within 2 Hours",
    description: "Same-day delivery to your doorstep. Never run out of essentials with our quick and reliable service.",
    buttonText: "Order Now",
    bgGradient: "from-[#89184E] to-pink-500",
    image: "/chef.png",
    imageText: "Quick Delivery"
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-gradient-to-r from-pink-100 to-pink-200 overflow-hidden">
      {/* Navigation arrows - positioned at extreme edges */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
      >
        <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
      >
        <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
      </button>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Slideshow Container */}
        <div className="relative">

          {/* Slide Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Image Section - First on mobile, second on desktop */}
            <div className="relative order-1 lg:order-2">
              <div className={`bg-gradient-to-br ${slide.bgGradient} rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl transform rotate-1 sm:rotate-3 transition-all duration-500`}>
                <div className="bg-white rounded-2xl p-4 sm:p-6 transform -rotate-1 sm:-rotate-3">
                  <div className="w-full h-48 sm:h-56 lg:h-64 rounded-xl mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.imageText}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover rounded-xl"
                      priority={currentSlide === 0}
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-center text-gray-600 font-medium">{slide.imageText}</p>
                </div>
              </div>
            </div>
            
            {/* Text Section - Second on mobile, first on desktop */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {slide.title}
                <br />
                <span className="text-[#89184E]">{slide.subtitle}</span>
              </h1>
              <p className="text-sm sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                {slide.description}
              </p>
              <button className="bg-[#89184E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg hover:bg-[#6d1340] transition-colors shadow-lg">
                {slide.buttonText}
              </button>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#89184E]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}