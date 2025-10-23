"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
    alert("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <main className="min-h-screen bg-pink-50">
      <Header />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div 
          className="h-64 bg-cover bg-center relative rounded-3xl"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 400\"><rect fill=\"%23059669\" width=\"1200\" height=\"400\"/><rect fill=\"%23065f46\" x=\"0\" y=\"200\" width=\"1200\" height=\"200\"/></svg>')"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg md:text-xl opacity-90">
                We are here to help. Reach out to us with any question or feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#89184E] rounded-full flex items-center justify-center">
                    <FiPhone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Customer Service</p>
                    <p className="text-gray-600">+234-7037484410</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#89184E] rounded-full flex items-center justify-center">
                    <FiMail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">hello@foodmarket@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Mondays - Fridays</span>
                  <span className="text-gray-600">9:00am - 6:00pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Saturdays</span>
                  <span className="text-gray-600">9:00am - 5:00pm</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Socials</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <IoLogoInstagram className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">@foodmarketing</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <IoLogoLinkedin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Food Market by FoodZoom</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <IoLogoFacebook className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Food Market by FoodZoom</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <IoLogoWhatsapp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">+234-7037484410</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:bg-white transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#89184E] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#6d1240] transition-colors focus:outline-none focus:ring-2 focus:ring-[#89184E] focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}