import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '4.99',
      description: 'Essential monitoring features for one device',
      features: [
        'Single Device Monitoring',
        'Location Tracking',
        'App Usage Statistics',
        'Basic Reports',
        'Email Support'
      ],
      isPopular: false,
      ctaText: 'Get Started',
      ctaLink: '/signup'
    },
    {
      name: 'Premium',
      price: '9.99',
      description: 'Advanced protection for up to 3 devices',
      features: [
        'Up to 3 Devices',
        'Real-time Location Alerts',
        'Call & SMS Monitoring',
        'Advanced Reports',
        'Priority Support',
        'Geo-fencing',
        'Screen Time Control'
      ],
      isPopular: true,
      ctaText: 'Try Premium',
      ctaLink: '/signup'
    },
    {
      name: 'Family',
      price: '14.99',
      description: 'Complete protection for the whole family',
      features: [
        'Up to 5 Devices',
        'All Premium Features',
        'Web Filtering',
        'Custom Alert Rules',
        '24/7 Priority Support',
        'Family Dashboard',
        'Advanced Analytics'
      ],
      isPopular: false,
      ctaText: 'Get Family Plan',
      ctaLink: '/signup'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#EDF6F9] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-rebond text-3xl sm:text-5xl font-medium text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your family's safety needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.isPopular ? 'ring-2 ring-[#166cf7]' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-[#166cf7] text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FaCheck className="text-teal-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaLink}
                  className={`block w-full py-3 px-6 rounded-lg text-center font-medium transition-colors duration-200 ${
                    plan.isPopular
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-medium text-gray-900 mb-4">Have questions?</h3>
          <p className="text-gray-600 mb-6">
            Check out our FAQ or contact our support team
          </p>
          <Link
            href="/faq"
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            View FAQ →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 