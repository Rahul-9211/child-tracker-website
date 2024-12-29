import React from 'react';

const UserFlow = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up for a KidSafe account and set up your parent profile'
    },
    {
      number: '02',
      title: 'Install App',
      description: 'Install the KidSafe app on your child\'s device'
    },
    {
      number: '03',
      title: 'Connect Devices',
      description: 'Link your child\'s device to your parent account'
    },
    {
      number: '04',
      title: 'Monitor Activity',
      description: 'Start monitoring device usage and location in real-time'
    }
  ];

  return (
    <section className="py-16 sm:py-28 bg-[#EDF6F9] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with KidSafe in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl font-bold text-[#83C5BE] opacity-20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-[#006D77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserFlow; 