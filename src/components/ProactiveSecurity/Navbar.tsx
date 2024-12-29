"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/LookSense.png';
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
            <div className="text-[17px] font-medium text-gray-900 group-hover:text-teal-700 mb-0.5">
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
             <Image src={logo} alt="KidSafe" width={150} height={72} />
            </Link>
          </div>

         <div className='hidden md:flex'> {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 pr-12">
            <div className="relative group">
              <Link 
                href="/product"
                className={`flex items-center hover:text-teal-700 transition-colors duration-150 text-[17px]
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

            <div> <Link href="/pricing" className="text-[17px] text-gray-700 hover:text-teal-700 transition-colors duration-150">
              Pricing
            </Link></div>

            <div className="relative group">
              <button 
                className={`flex items-center hover:text-teal-700 transition-colors duration-150 text-[17px]
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
            <Link href="/login" className="text-[17px] text-gray-700 hover:text-teal-700 transition-colors duration-150">
              Log in
            </Link>
            <Link href="#" className="text-[17px] text-gray-700 hover:text-teal-700 transition-colors duration-150">
              Download
            </Link>
            <Link href="#" className="text-[17px] bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-150">
              Request a demo
            </Link>
            <Link href="#" className="text-[17px] bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition-colors duration-150">
              Contact Sales
            </Link>
          </div></div>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMobileMenuOpen ? (
              // Close (X) icon
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 top-[64px] bg-white z-40"
          onClick={e => e.stopPropagation()}
        >
          <div className="h-full overflow-y-auto pb-20">
            <div className="px-4 pt-2 pb-3 space-y-3">
              <Link 
                href="/product" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#006D77] hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product
              </Link>
              <Link 
                href="/pricing" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#006D77] hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/resources" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#006D77] hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
            </div>

            <div className="px-4 py-3 border-t border-gray-200">
              <div className="space-y-3">
                <Link 
                  href="/login" 
                  className="block w-full px-4 py-2 text-center text-[#006D77] hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  href="/signup" 
                  className="block w-full px-4 py-2 text-center text-white bg-[#006D77] hover:bg-[#004E57] rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign up
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