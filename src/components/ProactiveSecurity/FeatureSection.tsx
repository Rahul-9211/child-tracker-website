"use client";

import React from 'react';

const features = [
  {
    icon: "🕒",
    title: "Limit",
    description: "Decide how and when your child can access videos, games & social media"
  },
  {
    icon: "🛡️",
    title: "Protect",
    description: "Block harmful content on the web and in apps"
  },
  {
    icon: "🔍",
    title: "Monitor",
    description: "Monitor online activity and track location to prevent risky behaviors"
  },
  {
    icon: "🤝",
    title: "Collaborate",
    description: "Motivate your child with achievable goals to improve self-esteem"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Protect Your Family from Big Tech’s Influence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 