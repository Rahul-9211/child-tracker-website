"use client";

import Link from 'next/link';
import { FaAndroid, FaApple } from 'react-icons/fa';

const DeviceCompatibility = () => {
  const devices = [
    {
      icon: <FaAndroid className="w-16 h-16 text-[#3DDC84]" />,
      name: "Android",
      isAvailable: true,
      features: [
        {
          icon: "👤",
          text: "Physical access required"
        },
        {
          icon: "📱",
          text: "Installs directly on the phone"
        },
        {
          icon: "💬",
          text: "Social media monitoring available without rooting"
        },
        {
          icon: "⚙️",
          text: "Works in the background"
        }
      ],
      bgColor: "bg-[#3DDC84]/10"
    },
    {
      icon: <FaApple className="w-16 h-16 text-[#555555]" />,
      name: "iPhone",
      isAvailable: false,
      comingSoon: true,
      features: [
        {
          icon: "🚀",
          text: "Coming Soon"
        },
        {
          icon: "✨",
          text: "Advanced monitoring features"
        },
        {
          icon: "🔒",
          text: "Enhanced security protocols"
        },
        {
          icon: "📱",
          text: "Native iOS support"
        }
      ],
      bgColor: "bg-[#555555]/10"
    }
  ];

  return (
    <section className="py-20 bg-[#1B2B3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-4xl font-medium mb-4">
          Dozens of Features. One App.
          </h2>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
          LookSense is more than an app. It’s the key to the Internet. 
          And it’s yours to help you unlock their digital world, find out the truth, and rest a little easier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {devices.map((device, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${device.bgColor} backdrop-blur-sm
                border border-white/10 hover:border-white/20 transition-all duration-300
                relative overflow-hidden`}
            >
              {device.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                    Coming Soon
                  </span>
                </div>
              )}
              
              <div className="flex flex-col items-center mb-8">
                {device.icon}
                <h3 className="text-2xl font-medium mt-4">
                  {device.name}
                </h3>
              </div>

              <div className="space-y-6">
                {device.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className={`flex items-start gap-4 
                      ${!device.isAvailable ? 'opacity-70' : ''}`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* {device.isAvailable ? (
                <div className="mt-8 text-center">
                  <button className="bg-[#95C901] hover:bg-[#84B301] text-white px-6 py-2 
                    rounded-lg transition-colors duration-200 w-full">
                    Get Started
                  </button>
                </div>
              ) : (
                <div className="mt-8 text-center">
                  <button className="bg-gray-600/50 text-gray-300 px-6 py-2 
                    rounded-lg cursor-not-allowed w-full">
                    Notify Me
                  </button>
                </div>
              )} */}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
        {/* <Link
              href="/signup" 
              className="text-[17px] bg-[#006D77] text-white px-4 py-2 rounded-lg hover:bg-[#005a63] transition-colors duration-150 flex items-center gap-2"
            >
              TRY NOW
            </Link> */}
          {/* <button className="bg-[#016d77] hover:bg-[#1d747c] text-white px-8 py-3 
            rounded-lg transition-colors duration-200">
            TRY NOW
          </button> */}
          <button className="border border-white/20 hover:border-white/40 text-white 
            px-8 py-3 rounded-lg transition-colors duration-200">
            CHECK COMPATIBILITY
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeviceCompatibility; 