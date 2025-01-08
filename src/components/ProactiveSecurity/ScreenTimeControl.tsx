"use client";

import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: "⏰",
    title: "Schedule Screen Time",
    description: "Set specific times when your child can use their device"
  },
  {
    icon: "📊",
    title: "Daily Usage Limits",
    description: "Control how long your child can use their device each day"
  },
  {
    icon: "📱",
    title: "Individual app limit",
    description: "Set time limits for specific apps and games"
  },
  {
    icon: "🌐",
    title: "Schedule Internet",
    description: "Control when your child can access the internet"
  }
];

const ScreenTimeControl = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            FamilyTime Parental Control App - Assisting Your
            <br />
            Digital Parenting Journey
          </h2>
          <p className="text-gray-600 text-lg">
            Digital parenting is complex when you are doing it alone. FamilyTime parental monitoring app assists you on this journey, making it simple.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - App Screenshot */}
          <div className="relative">
            <div className="relative w-[300px] mx-auto">
              <Image
                src="https://familytime.io/assets/img/home_screen_time.webp" // Add your app screenshot
                alt="Screen Time Control Interface"
                width={300}
                height={600}
                className="rounded-3xl shadow-xl"
              />
              {/* <div className="absolute -right-20 -bottom-10">
                <Image
                  src="/child-using-phone.png" // Add child image
                  alt="Child using phone"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div> */}
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Smart Screen Time Controls</h3>
              <p className="text-gray-600 mb-8">
                Foster balanced and responsible device usage among kids by using ultimate screen time controls to limit screen time, set daily app limits, and schedule the internet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg">
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
        </div>
      </div>
    </section>
  );
};

export default ScreenTimeControl; 