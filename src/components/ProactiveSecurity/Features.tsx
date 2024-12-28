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
    <section className="py-20 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
             Monitoring Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Keep your children safe with our advanced monitoring and tracking capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((category, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
               {idx === 1 && (
                 <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#83C5BE] rounded-full z-0" />
               )}
              <div className="absolute inset-0 bg-[#006D77] opacity-10 rounded-2xl pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 20%, transparent 20%)', backgroundSize: '20px 20px' }}></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
                {category.title}
              </h3>
              <div className="space-y-6 relative">
                {category.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-teal-600 text-xl">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
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