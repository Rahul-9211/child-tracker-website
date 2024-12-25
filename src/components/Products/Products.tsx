"use client";

import Image from 'next/image';
import avatar from "../../../public/avatar.png";

const products = [
  {
    icon: {avatar},
    title: "KidsGuard",
    description: "Parental control app to keep your kids safe.",
    gradient: "from-pink-100 to-blue-100",
    buttons: [
      { text: "Learn More", primary: true },
      { text: "Try It Now", primary: false, arrow: true }
    ]
  },
  {
    icon: {avatar},
    title: "KidsGuard for WhatsApp",
    description: "WhatsApp online tracker monitors 10+ data.",
    gradient: "from-purple-100 to-pink-100",
    buttons: [
      { text: "Learn More", primary: true },
      { text: "Demo", primary: false, arrow: true }
    ]
  },
  {
    icon: {avatar},
    title: "Monivisor",
    description: "Leading employee monitoring software that you can trust.",
    gradient: "from-blue-100 to-purple-100",
    buttons: [
      { text: "Learn More", primary: true },
      { text: "Demo", primary: false, arrow: true }
    ]
  },
  {
    icon: {avatar},
    title: "ClevGo",
    description: "Change GPS location on your device to anywhere globally.",
    gradient: "from-pink-100 to-purple-100",
    buttons: [
      { text: "Learn More", primary: true },
      { text: "Try It Now", primary: false, arrow: true }
    ]
  }
];

const Products = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-300/30 blur-3xl" />
        <div className="absolute top-40 right-40 w-32 h-32 rounded-full bg-blue-300/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${product.gradient} rounded-2xl py-8 px-4 
                flex flex-col items-center h-[400px] justify-between 
                backdrop-blur-xl bg-white/10 border border-white/20
                shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
                hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
                transition-all duration-300`}
            >
              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[80px] relative mb-6 
                  bg-white/20 rounded-full p-2 backdrop-blur-sm">
                  <Image
                    src={avatar}
                    alt={product.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-center tracking-[1px]">
                  {product.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <button className="w-full bg-white/30 backdrop-blur-sm text-gray-800 py-3 rounded-lg 
                  hover:bg-white/50 transition-all duration-300 font-bold
                  border border-white/50">
                  {product.buttons[0].text}
                </button>
                <button className="w-full backdrop-blur-sm py-3 
                  flex items-center justify-center gap-2 
                  text-gray-700 font-bold hover:text-gray-900 
                  transition-all duration-300">
                  {product.buttons[1].text}
                  {product.buttons[1].arrow && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;