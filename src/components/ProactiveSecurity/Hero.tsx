import React from 'react';
import Image from 'next/image';
import { FaApple, FaAndroid, FaWindows, FaChrome, FaAmazon, FaShieldAlt, FaMobileAlt, FaUserPlus, FaChartBar, FaSignInAlt ,FaPlay } from 'react-icons/fa';
import { SiMacos } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative bg-[#fff] overflow-hidden px-4 sm:px-6 py-20">
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="max-w-7xl mx-auto py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="text-sm uppercase tracking-wider text-gray-600 mb-4 flex items-center gap-2">
              <FaShieldAlt className="w-5 h-5 text-[#166cf7] mr-3" />
              PROACTIVE CREDENTIAL SECURITY
            </div>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] leading-[1.2] font-medium text-[#001E2B] mb-6 heading-rebond flex items-center gap-2">
              The Ultimate Phone
              <br className="hidden sm:block" />
              Monitoring Solution
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 flex items-center gap-2">
              Stay connected and informed with our powerful, user-friendly app designed for Android. Track and monitor effortlessly—now fully compatible with most Android Devices. Perfect for keeping your loved ones safe and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-[#166cf7] text-white px-6 py-3 rounded-lg hover:bg-[#004E57] transition-colors duration-150 flex items-center gap-2">
                {/* <FaPlay className="w-5 h-5" /> */}
                View Demo
              </button>
              <button className=" border-black bg-gray-100 text-gray-70   text-black px-6 py-3 rounded-lg hover:bg-opacity-30 transition-colors duration-150 flex items-center gap-2">
                <FaPlay className="w-5 h-5" />
                Try Now
              </button>
            </div>

            {/* Supported Platforms */}
            <div className="mt-8">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <FaApple className="w-6 h-6 text-black" />
                <FaAndroid className="w-6 h-6 text-green-500" />
                <SiMacos className="w-6 h-6 text-gray-800" />
                <FaWindows className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-gray-500 pt-4">
                Protects iOS, Android, macOS, Windows, Chromebook & Kindle
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden relative z-10">
                <Image
                  src="https://parental-control.flashget.com/wp-content/uploads/sites/3/2023/03/home_banner_one.png"
                  alt="Person working on laptop"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 