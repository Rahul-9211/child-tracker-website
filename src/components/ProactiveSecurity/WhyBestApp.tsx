"use client";

import React, { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaGift, FaShieldAlt, FaDesktop, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaCalendarAlt className="w-6 h-6" />,
    title: "30-Day Reporting History",
    description: "Access detailed activity reports and monitoring data for the past 30 days",
    isOpen: false
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Co-Parenting Made Easy",
    description: "Share monitoring responsibilities with other family members or guardians",
    isOpen: false
  },
  {
    icon: <FaGift className="w-6 h-6" />,
    title: "FREE Access to New Features",
    description: "Get automatic access to all new features as they're released",
    isOpen: false
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "GDPR Compliance",
    description: "Your data is protected in accordance with global privacy standards",
    isOpen: false
  },
  {
    icon: <FaDesktop className="w-6 h-6" />,
    title: "One Account Multiple Devices",
    description: "Monitor all your family's devices from a single dashboard",
    isOpen: false
  },
  {
    icon: <FaHeadset className="w-6 h-6" />,
    title: "Priority Live Support",
    description: "Get instant help from our dedicated support team whenever you need it",
    isOpen: false
  }
];

const WhyBestApp = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why FamilyTime is the Best Parental Control App
          </h2>
          <p className="text-xl text-white/80">
            Take Back Control of Your Family Time with Effortless and Effective Digital Parenting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setOpenFeature(openFeature === index ? null : index)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openFeature === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {openFeature === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {feature.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-blue-700 transition-colors">
            Live Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyBestApp; 