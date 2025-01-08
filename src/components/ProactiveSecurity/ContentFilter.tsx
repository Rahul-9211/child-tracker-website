"use client";

import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: "🎮",
    title: "Apps & Games Blocker",
    description: "Block unwanted apps and games"
  },
  {
    icon: "🌐",
    title: "Websites Blocker",
    description: "Control access to specific websites"
  },
  {
    icon: "🔍",
    title: "Web Filters & SafeSearch",
    description: "Enable safe browsing features"
  },
  {
    icon: "✅",
    title: "Approve Apps & Games",
    description: "Pre-approve apps before installation"
  }
];

const ContentFilter = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Filter Content & Apps</h3>
              <p className="text-gray-600 mb-8">
                Keep the age-inappropriate content, apps & games out of your child's access. Block apps & games, filter websites, and enable safe searches with content safety tools.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{feature.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                View All Features
              </button>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right side - App Screenshot */}
          <div className="relative">
            <Image
              src="https://familytime.io/assets/img/home_web_blocker.webp" // Add your screenshot
              alt="Content Filter Interface"
              width={400}
              height={800}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentFilter; 