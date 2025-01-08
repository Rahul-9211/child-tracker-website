"use client";

import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Data Security",
    description: "Our online dashboard is protected with military-grade SSL encryption, and data is secured in encrypted databases."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 World-Class Customer Support",
    description: "Connect with our customer support agents any time of the day to troubleshoot issues, get help with installation, or ask any questions you have."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Affordable Pricing",
    description: "We believe security should be available to everyone, so we've made XNSPY one of the most affordable monitoring applications available."
  }
];

const WhyChooseLookSense = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Millions <span className="text-green-500">Choose XNSPY</span>,
            <br />
            And Here's Why You Should Too
          </h2>
          <p className="text-gray-600 text-lg">
            Your loved ones' safety comes first, and our app is designed with that priority in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-green-50 rounded-full opacity-20"></div>
            <Image
              src="https://xnspy.com/img/millions-img.png" // You'll need to add this image to your public folder
              alt="Mother and daughter using phone"
              width={600}
              height={600}
              className="relative rounded-lg"
            />
          </div>

          {/* Right side - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-green-50 rounded-lg text-green-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLookSense; 