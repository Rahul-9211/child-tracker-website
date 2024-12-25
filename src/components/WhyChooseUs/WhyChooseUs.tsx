"use client";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Priority to Security",
      description: "Enterprise-grade encryption ensures your data remains completely secure and private.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "100% Hidden",
      description: "Completely stealth operation ensures undetectable monitoring capabilities.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Real-time Monitoring",
      description: "Track activities instantly with our advanced real-time monitoring system.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-100/[0.2] dark:bg-grid-white/[0.05]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff,rgba(255,255,255,0))] dark:bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Why Choose Our Solution?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience unparalleled monitoring capabilities with our enterprise-grade solution.
            Built for reliability, security, and ease of use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white dark:bg-gray-900 rounded-lg border 
                border-gray-200 dark:border-gray-800 transition-all duration-300
                hover:shadow-xl group"
            >
              {/* Feature Icon */}
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg 
                bg-gray-100 dark:bg-gray-800 text-black dark:text-white
                group-hover:bg-black group-hover:text-white 
                dark:group-hover:bg-white dark:group-hover:text-black
                transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg 
                group-hover:border-black dark:group-hover:border-white 
                transition-colors duration-300" 
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Active Users", value: "100K+" },
            { label: "Countries", value: "150+" },
            { label: "Data Protected", value: "500TB+" },
            { label: "Uptime", value: "99.99%" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 