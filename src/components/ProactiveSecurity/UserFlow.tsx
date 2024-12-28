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
    <section className="py-28 bg-[#EDF6F9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with KidSafe in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-[#83C5BE] opacity-20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
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