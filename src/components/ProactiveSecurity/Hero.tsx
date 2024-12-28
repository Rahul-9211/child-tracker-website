import React from 'react';
import Image from 'next/image';
import avatar2 from '../../../public/avatar2.png';
import avatar3 from '../../../public/avatar3.svg';

const Hero = () => {
  return (
    <section className="relative bg-[#fff] overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="text-sm uppercase tracking-wider text-gray-600 mb-4">
              PROACTIVE CREDENTIAL SECURITY
            </div>
            <h1 className="text-[2.5rem] sm:text-[3.75rem] leading-[1.2] font-semibold text-[#001E2B] mb-6">
              Maximum visibility.
              <br className="hidden sm:block" />
              Complete protection.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Introducing Credential Risk Detection, the industry-first monitoring tool that detects threats across your entire organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#006D77] text-white px-6 py-3 rounded-lg hover:bg-[#004E57] transition-colors duration-150">
                Contact Sales
              </button>
              <button className="bg-[#83C5BE] bg-opacity-20 text-[#006D77] px-6 py-3 rounded-lg hover:bg-opacity-30 transition-colors duration-150">
                Watch demo
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden relative z-10">
                <Image
                  src={avatar2}
                  alt="Person working on laptop"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Graph Card */}
              <div className="absolute -top-10 right-0 bg-transparent rounded-xl shadow-lg p-4 z-20 w-64">
                {/* <div className="text-sm font-medium mb-2">Risks detected over time</div> */}
                <Image
                  src={avatar3}
                  alt="Risk detection graph"
                  width={200}
                  height={100}
                  className="w-full h-auto"
                />
              </div>

              {/* Background Decoration */}
              <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#E8F0F0] rounded-full z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 