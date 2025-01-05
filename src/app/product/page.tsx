"use client"
import React from 'react';
import Navbar from '@/components/ProactiveSecurity/Navbar';
import Features from '@/components/ProactiveSecurity/Features';
import UserFlow from '@/components/ProactiveSecurity/UserFlow';
import { FaShieldAlt, FaRocket, FaLock } from 'react-icons/fa';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Product Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                  New Features Available
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Complete Child Safety Solution
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Advanced monitoring tools to keep your children safe in the digital world
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-all duration-200 flex items-center">
                  <FaRocket className="mr-2" />
                  Get Started
                </button>
                <button className="bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-teal-700 mb-2">1M+</div>
                <div className="text-gray-600">Protected Devices</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-teal-700 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-teal-700 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />

        {/* Additional Product Details */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="heading-rebond text-3xl font-bold text-gray-900 mb-4">Why Choose KidSafe?</h2>
              <p className="text-xl text-gray-600">Industry-leading features for complete peace of mind</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                <div className="text-teal-600 text-4xl mb-4">
                  <FaShieldAlt />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Monitoring</h3>
                <p className="text-gray-600">
                  Track device usage, location, and communications in real-time to ensure your child's safety
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Live Location Updates
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Activity Monitoring
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                <div className="text-teal-600 text-4xl mb-4">
                  <FaRocket />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Setup</h3>
                <p className="text-gray-600">
                  Simple installation process and user-friendly interface for seamless monitoring
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Quick Installation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Intuitive Dashboard
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                <div className="text-teal-600 text-4xl mb-4">
                  <FaLock />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy First</h3>
                <p className="text-gray-600">
                  Secure and private monitoring with advanced encryption to protect sensitive data
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    End-to-End Encryption
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Secure Data Storage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <UserFlow />
      </main>
    </>
  );
};

export default ProductPage; 