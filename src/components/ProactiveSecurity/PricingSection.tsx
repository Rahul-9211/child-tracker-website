"use client";

import React, { useState } from 'react';

const plans = [
  {
    name: "Personal",
    price: "29.95",
    devices: "1 Device",
    features: ["All monitoring functions are available"],
    buttonText: "Buy now",
    buttonColor: "purple",
    priceOptions: ["$29.95 1 month", "$59.95 3 months", "$99.95 12 months"]
  },
  {
    name: "Professional",
    price: "9.99",
    devices: "5 Devices",
    features: ["All monitoring functions are available", "Mobile Viewer"],
    buttonText: "Buy now",
    buttonColor: "green",
    priceOptions: ["$49.95 1 month", "$99.95 3 months", "$199.95 12 months"]
  },
  {
    name: "Business",
    price: "6.00",
    devices: "25 Devices",
    features: ["All monitoring functions are available", "Mobile Viewer"],
    buttonText: "Buy now",
    buttonColor: "yellow",
    priceOptions: ["$149.95 1 month", "$299.95 3 months", "$499.95 12 months"]
  }
];

const PricingSection = () => {
  const [selectedOption, setSelectedOption] = useState<number[]>([0, 0, 0]);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Choose your plan</h2>
        <p className="text-gray-600 mb-12">Our software has been installed on 12 Million devices</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-6 shadow-md ${
                index === 1 ? 'transform scale-105' : ''
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-2">${plan.price}</p>
              <p className="text-gray-600 mb-4">per month / device</p>
              <p className="text-blue-500 mb-4">Track {plan.devices}</p>
              {plan.features.map((feature, i) => (
                <p key={i} className="text-gray-600">{feature}</p>
              ))}
              <div className="flex justify-center mt-6">
                {plan.priceOptions.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedOption((prev) => {
                      const newSelection = [...prev];
                      newSelection[index] = i;
                      return newSelection;
                    })}
                    className={`px-6 py-4 border rounded-sm ${
                      selectedOption[index] === i ? `bg-${plan.buttonColor}-100 border-${plan.buttonColor}-500 transform scale-100` : ''
                    }`}
                  >
                    {option.split(' ')[0]}<br/>
                    {option.split(' ')[1]+" "} <span className='text-xs'>{option.split(' ')[2]}</span>
                  </button>
                ))}
              </div>
              <button className={`mt-6 px-6 py-2 text-white rounded-full bg-${plan.buttonColor}-500`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;