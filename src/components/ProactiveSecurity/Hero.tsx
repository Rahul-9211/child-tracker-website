import React from 'react';
import Image from 'next/image';
import { FaApple, FaAndroid, FaWindows, FaChrome, FaAmazon, FaShieldAlt, FaMobileAlt, FaUserPlus, FaChartBar, FaSignInAlt, FaPlay, FaLocationArrow, FaUser, FaBell, FaChartLine } from 'react-icons/fa';
import { SiMacos } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#f8faff] to-white overflow-hidden px-4 sm:px-6 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(22,108,247,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(22,108,247,0.07)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float opacity-70" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float opacity-60" 
          style={{ animationDelay: '-2s' }} />

        {/* Tech Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>

        {/* Animated Dots */}
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-blue-500/30 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 backdrop-blur-sm border border-blue-100 mb-6">
              <FaShieldAlt className="w-4 h-4 text-[#166cf7]" />
              <span className="text-sm font-medium text-[#166cf7]">PROACTIVE SECURITY</span>
            </div>

            <h1 className="font-display text-[2.75rem] sm:text-[3.75rem] leading-[1.1] font-semibold text-gray-900 mb-6">
              Turn pixels into
              <br className="hidden sm:block" />
              <span className="text-[#166cf7] relative">
                intelligence
                <div className="absolute -right-4 top-0 w-3 h-3 bg-blue-500/30 rounded-full animate-ping" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Convert pixels into actionable intelligence using generative AI. Track and monitor effortlessly—now fully compatible with most devices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#166cf7] text-white font-medium hover:bg-blue-600 transition-all duration-200 hover:scale-105">
                <FaPlay className="w-4 h-4 group-hover:animate-pulse" />
                Try Demo
              </button>
              <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105 relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>
            </div>

            {/* Supported Platforms */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4 font-medium">
                TRUSTED BY LEADING ORGANIZATIONS
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <FaApple className="w-6 h-6 text-black" />
                <FaAndroid className="w-6 h-6 text-green-500" />
                <SiMacos className="w-6 h-6 text-gray-800" />
                <FaWindows className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Dashboard Header */}
              <div className="absolute top-0 left-0 right-0 h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6 backdrop-blur-sm bg-white/90">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                  <div className="w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <div className="flex items-center gap-4">
                  <FaBell className="w-5 h-5 text-gray-400" />
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <FaUser className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="pt-14 p-4 bg-gray-50">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Active Devices</div>
                    <div className="text-xl font-semibold text-gray-900">2,547</div>
                    <div className="flex items-center gap-1 text-green-500 text-xs mt-1">
                      <FaChartLine className="w-2.5 h-2.5" />
                      <span>+12.5%</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Threats Blocked</div>
                    <div className="text-xl font-semibold text-gray-900">14.2M</div>
                    <div className="flex items-center gap-1 text-green-500 text-xs mt-1">
                      <FaChartLine className="w-2.5 h-2.5" />
                      <span>+23.1%</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Security Score</div>
                    <div className="text-xl font-semibold text-gray-900">94%</div>
                    <div className="flex items-center gap-1 text-green-500 text-xs mt-1">
                      <FaChartLine className="w-2.5 h-2.5" />
                      <span>+5.2%</span>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-lg shadow-sm p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">Active Locations</h3>
                    <button className="text-blue-600 text-xs">View All</button>
                  </div>
                  <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 opacity-50">
                      {/* Grid pattern for map */}
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle, #166cf7 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}/>
                    </div>
                    {/* Active location markers */}
                    <div className="absolute top-1/4 left-1/4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping"/>
                      </div>
                    </div>
                    <div className="absolute bottom-1/3 right-1/3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping"/>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">Recent Activity</h3>
                    <button className="text-blue-600 text-xs">View All</button>
                  </div>
                  <div className="space-y-3">
                    {[1, 2].map((_, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaShieldAlt className="w-3 h-3 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Threat Blocked</div>
                          <div className="text-gray-500 text-xs">Malicious activity detected</div>
                        </div>
                        <div className="ml-auto text-gray-400">2m ago</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {/* <div className="absolute z-10 top-4 left-52 px-3 py-1.5 bg-green-50 backdrop-blur-sm rounded-lg shadow-lg border border-green-100">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-green-700">System Protected</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 