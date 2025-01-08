"use client";

import React from 'react';
import { FaGooglePlay, FaApple, FaDesktop } from 'react-icons/fa';
import Phone1 from './icons/Phone1';
import Phone2 from './icons/Phone2';
import QRCode from './icons/QRCode';

const steps = [
  {
    number: "1",
    title: "Download the FamilyTime Dashboard app on parent's device.",
    Icon: Phone1,
    bgColor: "bg-blue-50"
  },
  {
    number: "2",
    title: "Download the 'FamilyTime Jr' app on your child's device.",
    Icon: Phone2,
    bgColor: "bg-orange-50"
  },
  {
    number: "3",
    title: "Scan your QR Code to connect both your device and your child's device within the app to access.",
    Icon: QRCode,
    bgColor: "bg-blue-50"
  }
];

const SetupSteps = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Setup FamilyTime App and be Sure Your Kid's Are Safe
          </h2>
          <p className="text-gray-600 text-lg">
            Follow three simple steps to download, connect and manage apps on parent and kid's devices.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              {/* Step Circle with Number */}
              <div className={`relative ${step.bgColor} rounded-full p-12 mb-6`}>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                <div className="w-24 h-24 relative">
                  <step.Icon />
                </div>
              </div>
              
              {/* Step Description */}
              <p className="text-gray-700 font-medium">
                {step.title}
              </p>

              {/* Arrow for connection (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Download Platforms */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FaGooglePlay className="w-8 h-8 text-gray-600" />
          <FaApple className="w-8 h-8 text-gray-600" />
          <FaDesktop className="w-8 h-8 text-gray-600" />
          {/* <FaHuawei className="w-8 h-8 text-gray-600" /> */}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Live Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default SetupSteps; 