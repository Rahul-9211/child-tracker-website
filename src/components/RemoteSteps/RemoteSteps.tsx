"use client";

import Image from 'next/image';
import avatar2 from "../../../public/avatar2.png";

const RemoteSteps = () => {
  return (
    <section className="relative py-20 overflow-hidden gradient-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 opacity-20" />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-pink-200/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-200/20 blur-3xl animate-float" />
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-blue-200/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-pink-200/20 blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#312f36]">
            Remote Monitoring in 3 Easy Steps
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left image */}
            <div className="relative rounded-2xl overflow-hidden 
              bg-white/5 backdrop-blur-sm p-4 border border-white/10
              hover:bg-white/10 transition-all duration-300">
              <Image
                src={avatar2}
                alt="Remote Monitoring Left"
                width={500}
                height={500}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>

            {/* Center steps */}
            <div className="space-y-8 tracking-[1px]">
              {[
                { title: "Sign Up", desc: "Create a free Spyzie account with your email." },
                { title: "Configure Spyzie", desc: "Spyzie's setup wizard will guide you through the configuration process." },
                { title: "Start Monitoring", desc: "Access Spyzie's dashboard and view all their data." }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl 
                    shadow-lg border border-white/20 
                    group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <Image
                      src={avatar2}
                      alt={step.title}
                      width={40}
                      height={40}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-black mb-2">{step.title}</h3>
                    <p className="text-black/90">{step.desc}</p>
                  </div>
                </div>
              ))}

              <button className="w-full mt-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full
                hover:bg-white/20 hover:scale-105 transition-all duration-300 
                border border-white/20 shadow-lg
                text-black font-medium tracking-[1px]">
                View Our Pricing Here →
              </button>
            </div>

            {/* Right image */}
            <div className="relative rounded-2xl overflow-hidden 
              bg-white/5 backdrop-blur-sm p-4 border border-white/10
              hover:bg-white/10 transition-all duration-300">
              <Image
                src={avatar2}
                alt="Remote Monitoring Right"
                width={500}
                height={500}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteSteps;