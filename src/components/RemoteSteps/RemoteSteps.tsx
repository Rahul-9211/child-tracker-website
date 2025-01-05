"use client";

import Image from 'next/image';
import avatar2 from "../../../public/avatar2.png";

const RemoteSteps = () => {
  const steps = [
    {
      title: "Install",
      description: "Quick and seamless installation process with zero configuration required.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      title: "Configure",
      description: "Simple setup with intuitive dashboard controls for all monitoring features.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Monitor",
      description: "Real-time tracking and comprehensive activity monitoring across all devices.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-100/[0.2] dark:bg-grid-white/[0.05]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff,rgba(255,255,255,0))] dark:bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-rebond text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Remote Monitoring in 3 Easy Steps
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with our advanced monitoring solution in minutes. No technical expertise required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 
                dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full 
                bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
              Enterprise-Grade Monitoring Solution
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our platform provides comprehensive monitoring capabilities with enterprise-level security 
              and reliability. Perfect for businesses and organizations of all sizes.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time activity tracking",
                "Secure data encryption",
                "24/7 technical support",
                "Custom alert configurations"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium
              bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 
              dark:hover:bg-gray-200 transition-colors duration-200">
              Start Monitoring
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="relative">
            {/* Image Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 
              dark:from-gray-800 dark:to-gray-900 rounded-lg blur-xl opacity-70" />
            
            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden border border-gray-200 
              dark:border-gray-800 shadow-2xl">
              <Image
                src={avatar2}
                alt="Remote Monitoring Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteSteps;