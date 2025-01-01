"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaUserPlus, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const laptopScreens = [
    {
      step: 'Step 1',
      image: 'https://assets.justinmind.com/wp-content/uploads/2024/06/dashboard-examples-horizontal-navigation.png'
    },
    {
      step: 'Step 2',
      image: 'https://images.klipfolio.com/website/public/bf9c6fbb-06bf-4f1d-88a7-d02b70902bd1/data-dashboard.png'
    },
    {
      step: 'Step 3',
      image: 'https://www.finereport.com/en/wp-content/uploads/2021/07/Financial-Performance-Dashboard.jpg'
    }
  ];

  const steps = [
    {
      step: 'Step 1',
      title: 'Quick Sign Up',
      description: 'Create your account in seconds',
      icon: <FaUserPlus className="w-5 h-5" />
    },
    {
      step: 'Step 2',
      title: 'Connect Device',
      description: 'Easy 2-minute setup process',
      icon: <FaMobileAlt className="w-5 h-5" />
    },
    {
      step: 'Step 3',
      title: 'Start Monitoring',
      description: 'Real-time protection begins instantly',
      icon: <FaShieldAlt className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-xl uppercase tracking-[5px] text-[#006D77] mb-6 ">
            QUICK SETUP
          </h2>
          <h3 className="text-3xl sm:text-4xl font-medium text-gray-900">
            Start Protecting in Minutes
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer
                  ${activeStep === index ? 
                    'bg-gradient-to-r from-[#EDF6F9] to-[#e5f4f7] shadow-lg scale-105' : 
                    'hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-50'
                  }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-white shadow-lg
                      ${activeStep === index ? 
                        'bg-gradient-to-r from-[#006D77] to-[#83C5BE] scale-110 transition-transform duration-300' : 
                        'bg-gradient-to-r from-[#83C5BE] to-[#006D77] opacity-75 hover:opacity-100'
                      }`}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`text-xl font-medium transition-colors duration-300
                        ${activeStep === index ? 
                          'bg-gradient-to-r from-[#006D77] to-[#83C5BE] bg-clip-text text-transparent' : 
                          'text-[#006D77]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className={`text-sm font-semibold transition-colors duration-300
                        ${activeStep === index ? 'text-[#006D77]' : 'text-[#83C5BE]'}`}
                      >
                        {step.step}
                      </span>
                    </div>
                    <p className={`transition-colors duration-300
                      ${activeStep === index ? 'text-gray-700' : 'text-gray-500'}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Device Preview */}
          <div className="relative w-full h-[400px]">
            {/* Laptop Preview */}
            <div className="relative w-full h-full">
              {/* Screen content - Behind laptop frame */}
              <div className="absolute inset-[12%] top-[8%] bottom-[15%] z-0 overflow-hidden rounded-[4%]">
                {laptopScreens.map((screen, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-300
                      ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image
                      src={screen.image}
                      alt={`Step ${index + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ))}
              </div>

              {/* Laptop frame */}
              <Image
                src="https://png.pngtree.com/png-clipart/20230222/ourmid/pngtree-macbook-pro-16-png-image_6614408.png"
                alt="Device Frame"
                fill
                className="object-contain z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps; 