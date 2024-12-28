"use client"
import React from 'react';
import Navbar from '@/components/ProactiveSecurity/Navbar';
import Pricing from '@/components/ProactiveSecurity/Pricing';

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Choose Your Protection Plan
              </h1>
              <p className="text-xl text-gray-600">
                Flexible plans designed to keep your family safe in the digital world
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <Pricing />

        {/* Additional Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">No Long-term Contracts</h3>
                <p className="text-gray-600">Cancel or change your plan anytime</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">30-Day Money Back</h3>
                <p className="text-gray-600">Try risk-free with our money-back guarantee</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">Get help whenever you need it</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PricingPage; 