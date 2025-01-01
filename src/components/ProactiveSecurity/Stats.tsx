import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '3B+',
      label: 'Threats averted',
    },
    {
      number: '7M+',
      label: 'Families protected',
    },
    {
      number: '4.3 ★',
      label: 'Top-rated app',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-xl uppercase tracking-[5px] text-[#006D77] mb-4">
            LOOKSENSE IN NUMBERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-4xl font-semibold text-[#006D77] mb-4 heading-rebond group-hover:text-[#83C5BE] transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg sm:text-xl tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 