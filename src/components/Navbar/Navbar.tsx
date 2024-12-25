"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' 
        : 'bg-white dark:bg-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16 py-4">
          {/* Logo - Responsive sizing */}
          <Link href="/" className="flex-shrink-0">
            <svg
              width="120"
              height="32"
              viewBox="0 0 120 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 sm:w-32 h-auto"
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
                fill="currentColor"
                className="text-gray-800 dark:text-gray-200"
                fontWeight="bold"
              >
                KidSafe
              </text>
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsDropdownOpen(false);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 
                dark:text-gray-300 hover:text-gray-900 dark:hover:text-white 
                hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 
                focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="inline-flex items-center px-2 py-1 text-gray-700 dark:text-gray-300 
                hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                rounded-md group-hover:bg-gray-50 dark:group-hover:bg-gray-800 transition-colors">
                Features <span className="ml-1 transition-transform duration-200 group-hover:rotate-180">▾</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 -ml-4 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 
                  ring-1 ring-black ring-opacity-5 transform opacity-0 scale-95 
                  animate-[fadeIn_0.2s_ease-out_forwards]">
                  <div className="py-1">
                    {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, index) => (
                      <Link
                        key={index}
                        href={`/feature${index + 1}`}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 
                          hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        {feature}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {['Pricing', 'Support', 'Testimonials'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 
                  dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                  rounded-md transition-colors"
              >
                {item}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/login"
                className="px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 
                  dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                  rounded-md transition-colors"
              >
                Login
              </Link>
              <Link
                href="/trial"
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black 
                  font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 
                  transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } fixed inset-0 z-40 transform md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="relative flex flex-col w-full max-w-xs h-full bg-white dark:bg-gray-900 shadow-xl">
          <div className="flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="px-2 space-y-1">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 
                  dark:text-gray-300 hover:text-gray-900 dark:hover:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Features
                <span className={`ml-2 transition-transform duration-200 inline-block
                  ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              
              <div className={`${isDropdownOpen ? 'max-h-48' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
                <div className="pl-4 space-y-1">
                  {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, index) => (
                    <Link
                      key={index}
                      href={`/feature${index + 1}`}
                      className="block px-3 py-2 text-base text-gray-700 dark:text-gray-300 
                        hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 
                        dark:hover:bg-gray-800 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {feature}
                    </Link>
                  ))}
                </div>
              </div>

              {['Pricing', 'Support', 'Testimonials', 'Login'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block px-3 py-2 text-base font-medium text-gray-700 
                    dark:text-gray-300 hover:text-gray-900 dark:hover:text-white 
                    hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}

              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
              <Link
                href="/trial"
                className="block px-3 py-2 text-base font-medium text-white dark:text-black 
                  bg-black dark:bg-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 
                  transition-colors shadow-sm hover:shadow-md mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
        
        {/* Backdrop */}
        <div 
          className="flex-1 bg-gray-600 bg-opacity-75 dark:bg-opacity-90"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;