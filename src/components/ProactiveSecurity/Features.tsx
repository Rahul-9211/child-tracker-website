import React from 'react';
import { FaMobile, FaMapMarkerAlt, FaList, FaRunning, FaBatteryThreeQuarters, FaPhone, FaSms, FaBell, FaChartBar } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      title: 'Device Management',
      items: [
        { icon: <FaMobile />, text: 'Device Information Tracking' },
        { icon: <FaMapMarkerAlt />, text: 'Real-time GPS Location Monitoring' },
        { icon: <FaList />, text: 'Installed Applications List' },
        { icon: <FaRunning />, text: 'Running Applications Tracker' },
        { icon: <FaBatteryThreeQuarters />, text: 'Battery Status Monitoring' },
      ]
    },
    {
      title: 'Communication Monitoring',
      items: [
        { icon: <FaPhone />, text: 'Call Logs Tracking' },
        { icon: <FaSms />, text: 'SMS Reader' },
        { icon: <FaBell />, text: 'Notification Monitor' },
        { icon: <FaChartBar />, text: 'App Usage Statistics' },
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#fff] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-4">
            Monitoring Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Keep your children safe with our advanced monitoring and tracking capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          {features.map((category, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 overflow-hidden">
              {idx === 1 && (
                <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#83C5BE] rounded-full z-0" />
              )}
              <div className="absolute inset-0 bg-[#006D77] opacity-10 rounded-2xl pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 20%, transparent 20%)', backgroundSize: '20px 20px' }}></div>
              <h3 className="text-3xl font-medium text-gray-900 mb-6 relative">
                {category.title}
              </h3>
              <div className="space-y-4 sm:space-y-6 relative">
                {category.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="text-[#006D77] text-lg sm:text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 