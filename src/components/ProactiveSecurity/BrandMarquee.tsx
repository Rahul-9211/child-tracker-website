import React from 'react';
import Image from 'next/image';
const logo1 = 'https://www.freepnglogos.com/uploads/google-logo-png-hd-11.png';
const logo2 = 'https://cdnlogo.com/logos/m/6/microsoft.svg';
const logo3 = 'https://1000logos.net/wp-content/uploads/2017/03/Nokia-Logo.png';
const logo4 = 'https://logos-world.net/wp-content/uploads/2022/07/Lenovo-Symbol.png';
const logo5 = 'https://cdn-icons-png.flaticon.com/512/0/747.png';
const logo6 = 'https://www.logo.wine/a/logo/Android_(operating_system)/Android_(operating_system)-Logo.wine.svg';
const BrandMarquee = () => {
  const brands = [
    {
      name: 'Washington Post',
      src: logo1
    },
    {
      name: 'Fox News',
      src: logo2
    },
    {
      name: 'Wired',
      src: logo3
    },
    {
      name: 'CNBC',
      src: logo4
    },
    {
      name: 'PC Mag',
      src: logo5
    },
    {
      name: 'CBS News',
      src: logo6
    }
  ];

  return (
    <section className="py-12 bg-[#EDF6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-xl uppercase tracking-[5px] text-[#006D77]">
            FEATURED IN
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden">
          {/* First Scroll */}
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {brands.map((brand, index) => (
              <div 
                key={`brand-1-${index}`} 
                className="mx-14 flex items-center justify-center  hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={60}
                  className="h-10 w-auto object-contain opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Second Scroll (Clone) */}
          <div className="animate-marquee2 whitespace-nowrap flex items-center absolute top-0">
            {brands.map((brand, index) => (
              <div 
                key={`brand-2-${index}`} 
                className="mx-14 flex items-center justify-center  hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={60}
                  className="h-10 w-auto object-contain opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee; 