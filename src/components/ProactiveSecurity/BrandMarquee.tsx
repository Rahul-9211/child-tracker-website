import React from 'react';
import Image from 'next/image';

const BrandMarquee = () => {
  const brands = [
    {
      name: 'Government',
      description: 'Federal & State Agencies',
      icon: (
        <svg className="w-10 h-10 text-[#166cf7]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'Enterprise',
      description: 'Fortune 500 Companies',
      icon: (
        <svg className="w-10 h-10 text-[#166cf7]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Law Enforcement',
      description: 'Police & Security',
      icon: (
        <svg className="w-10 h-10 text-[#166cf7]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      name: 'Intelligence',
      description: 'Defense & Security',
      icon: (
        <svg className="w-10 h-10 text-[#166cf7]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background Elements - More subtle grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(22,108,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(22,108,247,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-display text-sm font-medium tracking-[0.2em] text-[#166cf7] mb-3 uppercase">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white/50 backdrop-blur-sm rounded-xl p-5 hover:shadow-lg transition-all duration-300 
                border border-gray-100 hover:border-[#166cf7]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#166cf7]/5 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative">
                <div className="mb-3">{brand.icon}</div>
                <h3 className="font-display text-base font-semibold text-gray-900 mb-1">
                  {brand.name}
                </h3>
                <p className="font-display text-sm text-gray-500">
                  {brand.description}
                </p>
              </div>

              {/* Subtle bottom border effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#166cf7] to-blue-400 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl opacity-50" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-display text-sm text-gray-500">
            Trusted by over <span className="font-semibold text-gray-900">1,000,000+</span> users worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee; 