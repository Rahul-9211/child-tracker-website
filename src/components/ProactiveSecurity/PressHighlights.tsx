"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const PressHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => (current >= pressReviews.length - cardsToShow ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? pressReviews.length - cardsToShow : current - 1));
  };

  const pressReviews = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/2560px-TechCrunch_logo.svg.png",
      name: "TechCrunch",
      quote: "If you need a little additional assistance with keeping track of your kids and their technology use, LookSense is a robust app with additional monitoring options,...",
      link: "#"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/The_Guardian.svg/2560px-The_Guardian.svg.png",
      name: "The Guardian",
      quote: "For seriously hard-core tracking, the software app will \"run in an invisible mode providing you with across-the-board logging features so that you can remotel...",
      link: "#"
    },
    {
      logo: "https://1000logos.net/wp-content/uploads/2020/08/Forbes-Logo-2000x1200.png",
      name: "Forbes",
      quote: "Besides parental control, features are flexible enough to be used for other purposes, such as catching a cheating spouse red-handed or keeping an eye on yo...",
      link: "#"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/CNET_logo.svg/2560px-CNET_logo.svg.png",
      name: "CNET",
      quote: "A comprehensive monitoring solution that offers advanced features for complete digital oversight...",
      link: "#"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Wired_logo.svg/2560px-Wired_logo.svg.png",
      name: "Wired",
      quote: "One of the most complete monitoring solutions available, with an impressive array of features...",
      link: "#"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-lg sm:text-xl uppercase tracking-[5px] text-[#006D77] mb-4 sm:mb-6">
            TESTIMONIALS
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
            What the Press Is Saying
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We've made it really easy to see what they're up to online. And we're making 
            headlines too. Check out some of the most recent stories from leading publications.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / cardsToShow)}%)` }}
            >
              {pressReviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-2 sm:px-3 lg:px-4"
                >
                  <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 h-full">
                    <div className="h-12 sm:h-14 lg:h-16 mb-4 sm:mb-6 lg:mb-8 relative">
                      <Image
                        src={review.logo}
                        alt={review.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-4">
                      {review.quote}
                    </p>

                    <a 
                      href={review.link}
                      className="text-sm sm:text-base text-[#006D77] hover:text-[#005a63] inline-flex items-center gap-2 
                        font-medium transition-colors duration-200"
                    >
                      Read full article
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5" 
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
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls Container */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            {/* Dots Navigation */}
            <div className="flex items-center gap-2 sm:gap-3 order-2 sm:order-1">
              {[...Array(Math.ceil(pressReviews.length / cardsToShow))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index * cardsToShow)}
                  className={`transition-all duration-300 rounded-full
                    ${Math.floor(activeIndex / cardsToShow) === index 
                      ? 'w-6 sm:w-8 h-2 bg-[#006D77]' 
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex items-center gap-2 order-1 sm:order-2">
              <button
                onClick={prevSlide}
                className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-50 
                  transition-colors duration-200 border border-gray-200"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-50 
                  transition-colors duration-200 border border-gray-200"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressHighlights; 