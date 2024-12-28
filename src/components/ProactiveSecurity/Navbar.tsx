"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DropdownProps {
  items: {
    title: string;
    description?: string;
    href: string;
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
          <div>
            <div className="text-[15px] font-medium text-gray-900 group-hover:text-teal-700 mb-0.5">
              {item.title}
            </div>
            {item.description && (
              <div className="text-sm text-gray-500 leading-snug">
                {item.description}
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const dropdownData = {
    product: [
      {
        title: 'Device Management',
        description: 'Track and monitor device usage',
        href: '/product#device-management'
      },
      {
        title: 'Communication Monitor',
        description: 'Monitor calls, SMS, and notifications',
        href: '/product#communication'
      },
      {
        title: 'Location Tracking',
        description: 'Real-time GPS location monitoring',
        href: '/product#location'
      },
      {
        title: 'App Control',
        description: 'Monitor and control app usage',
        href: '/product#apps'
      },
      {
        title: 'All Features',
        description: 'View complete feature list',
        href: '/product'
      }
    ],
    whyDashlane: [
      {
        title: 'For Business',
        description: 'Enterprise-grade password security',
        href: '#'
      },
      {
        title: 'For Teams',
        description: 'Password management for small teams',
        href: '#'
      },
      {
        title: 'Security',
        description: 'Our security architecture',
        href: '#'
      }
    ],
    resources: [
      {
        title: 'Blog',
        description: 'Latest updates and guides',
        href: '#'
      },
      {
        title: 'Help Center',
        description: 'Support and documentation',
        href: '#'
      },
      {
        title: 'Security Blog',
        description: 'Security insights and news',
        href: '#'
      }
    ],
    partners: [
      {
        title: 'Partner Program',
        description: 'Join our partner network',
        href: '#'
      },
      {
        title: 'Find a Partner',
        description: 'Connect with Dashlane partners',
        href: '#'
      },
      {
        title: 'Partner Portal',
        description: 'Access partner resources',
        href: '#'
      }
    ]
  };

  const handleDropdownToggle = (dropdown: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
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

  return (
    <nav className="border-b relative bg-white shadow-sm" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
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
                fill="#000"
              />
              <path
                d="M24 24C24 28.4183 20.4183 32 16 32H8C3.58172 32 0 28.4183 0 24V20C0 17.7909 1.79086 16 4 16H20C22.2091 16 24 17.7909 24 20V24Z"
                fill="#000"
              />
              <text
                x="32"
                y="22"
                fontFamily="Arial"
                fontSize="18"
                fill="currentColor"
                className="text-gray-800 dark:text-white-200"
                fontWeight="bold"
              >
                KidSafe
              </text>
            </svg>
          </Link>
          </div>

          {/* Main Navigation */}
         <div className='hidden md:flex items-center justify-center'>
         <div className="hidden md:flex items-end space-x-8 pr-8">
            <div className="relative group">
              <Link 
                href="/product"
                className={`flex items-center hover:text-teal-700 transition-colors duration-150 text-[15px]
                  ${openDropdown === 'product' ? 'text-teal-700' : 'text-gray-700'}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('product', e);
                }}
              >
                Product
                <svg className={`ml-1 w-4 h-4 transform transition-transform duration-200 
                  ${openDropdown === 'product' ? 'rotate-180 text-teal-700' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Dropdown items={dropdownData.product} isOpen={openDropdown === 'product'} />
            </div>

          

           <div> <Link href="/pricing" className="text-[15px] text-gray-700 hover:text-teal-700 transition-colors duration-150">
              Pricing
            </Link></div>

            <div className="relative group">
              <button 
                className={`flex items-center hover:text-teal-700 transition-colors duration-150 text-[15px]
                  ${openDropdown === 'resources' ? 'text-teal-700' : 'text-gray-700'}`}
                onClick={(e) => handleDropdownToggle('resources', e)}
              >
                Resources
                <svg className={`ml-1 w-4 h-4 transform transition-transform duration-200
                  ${openDropdown === 'resources' ? 'rotate-180 text-teal-700' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Dropdown items={dropdownData.resources} isOpen={openDropdown === 'resources'} />
            </div>

          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-[15px] text-gray-700 hover:text-teal-700 transition-colors duration-150">
              Log in
            </Link>
            <Link href="#" className="text-[15px] text-gray-700 hover:text-teal-700 transition-colors duration-150">
              Download
            </Link>
            <Link href="#" className="text-[15px] bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-150">
              Request a demo
            </Link>
            <Link href="#" className="text-[15px] bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition-colors duration-150">
              Contact Sales
            </Link>
          </div>
         </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 