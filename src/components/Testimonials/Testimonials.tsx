"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import avatar from "../../../public/avatar.png";

const testimonials = [
  {
    text: "Very good software and easy to set up and use. Excellent service and fast response to emails. Will keep using this software.",
    author: "Tom Gackell",
    avatar: avatar
  },
  {
    text: "Amazing monitoring solution. Works perfectly for keeping track of activities.",
    author: "Sarah Miller",
    avatar: avatar
  },
  {
    text: "Best tracking software I've used. Simple and effective.",
    author: "James Wilson",
    avatar: avatar
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 gradient-bg">
      <div className="glass-card rounded-3xl p-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-4xl font-bold text-[#4A5568] text-center mb-12">
            Testimonials
          </h2>

          <div className="flex justify-between items-start max-w-6xl mx-auto">
            <div className="flex-1 pr-8">
              <p className="text-[#718096] text-2xl mb-6">
                &ldquo;{testimonials[currentSlide].text}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <Image
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].author}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <span className="text-[#4A5568] text-xl">- {testimonials[currentSlide].author}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex gap-1 justify-end mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-8 h-8 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#718096] text-lg mb-2">
                Rated 4.65/5 based on<br />
                7955 reviews
              </p>
              <button className="text-[#6366F1] text-lg hover:underline border border-[#6366F1] rounded-full px-6 py-2">
                Rate this
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  currentSlide === index ? 'bg-[#2a2a2a]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 