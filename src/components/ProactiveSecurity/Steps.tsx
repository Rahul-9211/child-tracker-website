"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaUserPlus, FaMobileAlt, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

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
      title: 'Create Account',
      description: 'Sign up for a LookSense account and set up your parent profile',
      icon: <FaUserPlus className="w-6 h-6 text-[#166cf7]" />
    },
    {
      step: 'Step 2',
      title: 'Install App',
      description: 'Install the LookSense app on your child\'s device',
      icon: <FaMobileAlt className="w-6 h-6 text-[#166cf7]" />
    },
    {
      step: 'Step 3',
      title: 'Start Monitoring',
      description: 'Connect devices and start monitoring activities in real-time',
      icon: <FaShieldAlt className="w-6 h-6 text-[#166cf7]" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(22,108,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(22,108,247,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-jakarta text-sm font-medium tracking-[0.2em] text-[#166cf7] mb-3 uppercase">
            GET STARTED IN MINUTES
          </h2>
          <p className="font-jakarta-bold text-[2.75rem] sm:text-[3.75rem] leading-[1.1] text-[09090B] max-w-[600px] mx-auto">
            Three simple steps to <span className="text-[#166cf7]">secure</span> your family
          </p>
          {/* <div className="mt-20 flex justify-center">
          <Link 
            href="/blog"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow"
          >
            <span className="font-jakarta-bold text-[15px] text-[09090B]">
              Check our blog
            </span>
            <FaArrowRight className="w-4 h-4 text-[09090B] group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8 cursor-pointer">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl transition-all duration-300 group cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                    transition-colors duration-300
                    ${activeStep === index ? 'bg-blue-50' : 'bg-gray-50 group-hover:bg-blue-50/50'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className="font-jakarta-bold text-sm text-[#166cf7] mb-1">
                      {step.step}
                    </div>
                    <h3 className="font-jakarta-bold text-lg text-[09090B] mb-2">
                      {step.title}
                    </h3>
                    <p className="font-jakarta text-[15px] text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Background and border effect on hover */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-300
                  ${activeStep === index 
                    ? 'bg-white shadow-lg border border-blue-100' 
                    : 'group-hover:bg-white/50'}`} 
                  style={{ zIndex: -1 }}
                />

                {/* Active indicator */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#166cf7] rounded-r-full
                  transition-opacity duration-300
                  ${activeStep === index ? 'opacity-100' : 'opacity-0'}`} 
                />
              </div>
            ))}
          </div>

          {/* Right side - Laptop Preview */}
          <div className="relative w-full h-[400px] cursor-pointer">
            <div className="relative w-full h-full">
              {/* Screen content - Behind laptop frame */}
              <div className="absolute inset-[12%] top-[8%] bottom-[15%] z-0 overflow-hidden rounded-[4%]">
                {laptopScreens.map((screen, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 transform
                      ${activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
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

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-tr from-blue-100/20 to-purple-100/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default Steps; 