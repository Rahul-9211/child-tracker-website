"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import avatar2 from "../../../public/avatar2.png";
const testimonials = [
  {
    content: "The monitoring capabilities are incredible. It's like having a complete view of all activities in real-time. The dashboard provides everything we need to keep track of our operations effectively.",
    author: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Inc.",
    image: "/testimonials/avatar1.jpg"
  },
  {
    content: "The stealth features and security measures are top-notch. Exactly what we needed for our organization. The encryption and data protection give us complete peace of mind.",
    author: "Michael Chen",
    role: "Security Manager",
    company: "SecureNet Solutions",
    image: "/testimonials/avatar2.jpg"
  },
  {
    content: "Customer support is exceptional. They're always available and quick to resolve any issues. The team goes above and beyond to ensure everything runs smoothly.",
    author: "Emily Rodriguez",
    role: "Operations Head",
    company: "Global Systems",
    image: "/testimonials/avatar3.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-gray-100/[0.2] dark:bg-grid-white/[0.05]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff,rgba(255,255,255,0))] dark:bg-[linear-gradient(to_right,#000000,rgba(0,0,0,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-rebond text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about their experience with our monitoring solution.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full 
              bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
              text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white
              transition-all z-10 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full 
              bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
              text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white
              transition-all z-10 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 
            p-8 shadow-lg transition-all duration-500">
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 mb-6 text-gray-400 dark:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>

              {/* Content */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={avatar2}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-medium text-black dark:text-white">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${index === currentIndex 
                    ? 'w-8 bg-black dark:bg-white' 
                    : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="h-12 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg" />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
            Trusted by leading companies worldwide
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials; 