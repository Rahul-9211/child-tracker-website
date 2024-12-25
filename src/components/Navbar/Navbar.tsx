"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <svg
              width="120"
              height="32"
              viewBox="0 0 120 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 8C20 12.4183 16.4183 16 12 16C7.58172 16 4 12.4183 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z"
                fill="#4A90E2"
              />
              <path
                d="M24 24C24 28.4183 20.4183 32 16 32H8C3.58172 32 0 28.4183 0 24V20C0 17.7909 1.79086 16 4 16H20C22.2091 16 24 17.7909 24 20V24Z"
                fill="#4A90E2"
              />
              <text
                x="32"
                y="22"
                fontFamily="Arial"
                fontSize="18"
                fill="#4A5568"
                fontWeight="bold"
              >
                KidSafe
              </text>
            </svg>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="inline-flex items-center text-gray-700 hover:text-gray-900">
                Features <span className="ml-1">▾</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 -ml-4  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link href="/feature1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 1</Link>
                    <Link href="/feature2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 2</Link>
                    <Link href="/feature3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 3</Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
            <Link href="/support" className="text-gray-700 hover:text-gray-900">Support</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-gray-900">Testimonials</Link>
            <Link href="/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
            <Link href="/trial" className="bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 opacity-50 text-black px-4 py-2 rounded-md font-semibold">
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;