"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/LookSense 2.png';
import { 
  FaUserPlus, 
  FaSignInAlt, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaChartBar,
  FaCogs,
  FaLock,
  FaHeadset,
  FaBook,
  FaQuestionCircle,
  FaBlog,
  FaArrowRight
} from 'react-icons/fa';

interface DropdownProps {
  items: {
    title: string;
    description?: string;
    href: string;
    icon?: React.ReactNode;
  }[];
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items, isOpen }) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 w-72 mt-1 bg-white rounded-lg shadow-lg py-4 z-50 border border-gray-100">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="flex items-start px-6 py-3 hover:bg-gray-50 group transition-colors duration-150"
        >
          <div className="flex items-start gap-3">
            {item.icon && (
              <div className="mt-0.5 text-[#166cf7] group-hover:text-[#3d58cd] transition-colors">
                {item.icon}
              </div>
            )}
            <div>
              <div className="text-[17px] font-medium text-[09090B] group-hover:text-[#166cf7] mb-0.5">
                {item.title}
              </div>
              {item.description && (
                <div className="text-sm text-gray-500 leading-snug">
                  {item.description}
                </div>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dropdownData = {
    product: [
      {
        title: 'Parental Control',
        description: 'Track and monitor device usage',
        href: '/product#device-management',
        icon: <FaShieldAlt className="w-5 h-5" />
      },
    ],
    feature: [
      {
        title: 'Device Management',
        description: 'Track and monitor device usage',
        href: '/product#device-management',
        icon: <FaMobileAlt className="w-5 h-5" />
      },
      {
        title: 'Location Tracking',
        description: 'Real-time GPS location monitoring',
        href: '/product#location',
        icon: <FaMapMarkerAlt className="w-5 h-5" />
      },
      {
        title: 'App Control',
        description: 'Monitor and control app usage',
        href: '/product#apps',
        icon: <FaCogs className="w-5 h-5" />
      },
      {
        title: 'Security Features',
        description: 'Advanced protection tools',
        href: '/product#security',
        icon: <FaLock className="w-5 h-5" />
      },
    ],
    resources: [
      {
        title: 'Help Center',
        description: 'Get support and guidance',
        href: '/help',
        icon: <FaHeadset className="w-5 h-5" />
      },
      {
        title: 'Documentation',
        description: 'Detailed guides and tutorials',
        href: '/docs',
        icon: <FaBook className="w-5 h-5" />
      },
      {
        title: 'FAQ',
        description: 'Frequently asked questions',
        href: '/faq',
        icon: <FaQuestionCircle className="w-5 h-5" />
      },
      {
        title: 'Blog',
        description: 'Latest updates and insights',
        href: '/blog',
        icon: <FaBlog className="w-5 h-5" />
      },
    ],
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update the outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both the menu and the button
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Update the button click handler
  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image 
                src={logo} 
                alt="LookSense" 
                width={110} 
                height={28} 
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link 
                href="/product"
                className="flex items-center text-[14px] font-medium text-[09090B] hover:text-[#166cf7] transition-colors duration-150 group"
              >
                Product
                <svg className="ml-1 w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="bg-white rounded-lg shadow-lg py-3 border border-gray-100">
                  {dropdownData.product.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start px-4 py-2 hover:bg-blue-50/40 group/item transition-colors duration-150"
                    >
                      <div className="flex items-start gap-3">
                        {item.icon && (
                          <div className="mt-0.5 text-gray-500 group-hover/item:text-[#166cf7] transition-colors">
                            {item.icon}
                          </div>
                        )}
                        <div>
                          <div className="text-[12px] font-medium text-[09090B] group-hover/item:text-[#166cf7] mb-0.5">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="text-[11px] text-gray-500 leading-tight">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link 
                href="/industries"
                className="flex items-center text-[14px] font-medium text-[09090B] hover:text-[#166cf7] transition-colors duration-150 group"
              >
                Industries
                <svg className="ml-1 w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="bg-white rounded-lg shadow-lg py-3 border border-gray-100">
                  {dropdownData.feature.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start px-4 py-2 hover:bg-blue-50/40 group/item transition-colors duration-150"
                    >
                      <div className="flex items-start gap-3">
                        {item.icon && (
                          <div className="mt-0.5 text-gray-500 group-hover/item:text-[#166cf7] transition-colors">
                            {item.icon}
                          </div>
                        )}
                        <div>
                          <div className="text-[12px] font-medium text-[09090B] group-hover/item:text-[#166cf7] mb-0.5">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="text-[11px] text-gray-500 leading-tight">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/pricing" className="text-[14px] font-medium text-[09090B] hover:text-[#166cf7] transition-colors duration-150">
              Pricing
            </Link>

            <div className="relative group">
              <button 
                className="flex items-center text-[14px] font-medium text-[09090B] hover:text-[#166cf7] transition-colors duration-150 group"
              >
                Resources
                <svg className="ml-1 w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="bg-white rounded-lg shadow-lg py-3 border border-gray-100">
                  {dropdownData.resources.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start px-4 py-2 hover:bg-blue-50/40 group/item transition-colors duration-150"
                    >
                      <div className="flex items-start gap-3">
                        {item.icon && (
                          <div className="mt-0.5 text-gray-500 group-hover/item:text-[#166cf7] transition-colors">
                            {item.icon}
                          </div>
                        )}
                        <div>
                          <div className="text-[12px] font-medium text-[09090B] group-hover/item:text-[#166cf7] mb-0.5">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="text-[11px] text-gray-500 leading-tight">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="flex items-center gap-2 text-[14px] font-medium text-gray-600 hover:text-[#166cf7] transition-colors duration-150 group"
            >
              <FaSignInAlt className="w-4 h-4 transition-colors duration-150" />
              Sign in
            </Link>
            <Link 
              href="/signup" 
              className="flex items-center gap-2 text-[14px] font-medium px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-blue-600 transition-colors duration-150 group"
            >
              Try LookSense
              {/* <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" /> */}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[09090B]"
            onClick={handleMenuToggle}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - styling updated to match theme */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 top-[64px] bg-white/95 backdrop-blur-md z-40"
        >
          <div className="h-full overflow-y-auto pb-20 px-4 pt-2">
            <div className="space-y-1">
              <Link 
                href="/product" 
                className="block px-3 py-2 text-[14px] font-medium text-gray-600 hover:text-[#166cf7] hover:bg-blue-50/50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product
              </Link>
              <Link 
                href="/industries" 
                className="block px-3 py-2 text-[14px] font-medium text-gray-600 hover:text-[#166cf7] hover:bg-blue-50/50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link 
                href="/resources" 
                className="block px-3 py-2 text-[12px] font-medium text-gray-600 hover:text-[#166cf7] hover:bg-blue-50/50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="space-y-4">
                <Link 
                  href="/login" 
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 text-[14px] font-medium text-gray-600 hover:text-[#166cf7] hover:bg-blue-50/50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaSignInAlt className="w-4 h-4" />
                  Sign in
                </Link>
                <Link 
                  href="/signup" 
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 text-[14px] font-medium text-white bg-gray-900 hover:bg-blue-600 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Try LookSense
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 