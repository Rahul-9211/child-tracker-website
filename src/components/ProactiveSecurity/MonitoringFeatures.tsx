"use client";

import { 
  FaMobile, 
  FaComments, 
  FaPhone, 
  FaAddressBook, 
  FaList, 
  FaMapMarkerAlt, 
  FaMicrochip,
  FaBell 
} from 'react-icons/fa';

const MonitoringFeatures = () => {
  const features = [
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Device Info",
      description: "Monitor device details including model, OS version, battery status, and system information."
    },
    {
      icon: <FaComments className="w-8 h-8" />,
      title: "SMS Manager",
      description: "Track and monitor all incoming and outgoing text messages with timestamps."
    },
    {
      icon: <FaPhone className="w-8 h-8" />,
      title: "Call Manager",
      description: "Record call history, duration, and frequency of communications with specific numbers."
    },
    {
      icon: <FaAddressBook className="w-8 h-8" />,
      title: "Contact Manager",
      description: "Access and monitor the complete contact list with detailed contact information."
    },
    {
      icon: <FaList className="w-8 h-8" />,
      title: "Application Manager",
      description: "Track installed apps, usage patterns, and control application access."
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "GPS Manager",
      description: "Real-time location tracking with historical movement data and geofencing capabilities."
    },
    {
      icon: <FaMicrochip className="w-8 h-8" />,
      title: "Process Activity",
      description: "Monitor running processes and system resource usage in real-time."
    },
    {
      icon: <FaBell className="w-8 h-8" />,
      title: "Notification Monitoring",
      description: "Track all system and application notifications for comprehensive oversight."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-rebond text-xl uppercase tracking-[5px] text-[#166cf7] mb-6">
            FEATURES
          </h2>
          <h3 className="text-3xl sm:text-4xl font-medium text-gray-900">
            Advanced Device Monitoring Features
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive monitoring tools for complete device oversight and management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300
                hover:transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-[#166cf7] mb-4 bg-[#EDF6F9] p-4 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-[#166cf7] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#166cf7] text-white px-8 py-3 rounded-lg hover:bg-[#005a63] 
            transition-colors duration-200 flex items-center gap-2 mx-auto">
            <span>Explore All Features</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MonitoringFeatures; 