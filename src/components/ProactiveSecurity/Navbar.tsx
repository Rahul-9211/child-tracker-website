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
  FaBlog
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
              <div className="mt-0.5 text-[#006D77] group-hover:text-[#83C5BE] transition-colors">
                {item.icon}
              </div>
            )}
            <div>
              <div className="text-[17px] font-medium text-gray-900 group-hover:text-[#006D77] mb-0.5">
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

            <div className="relative group">
              <Link 
                href="/Feature"
                className={`flex items-center hover:text-teal-700 transition-colors duration-150 text-[17px]
                  ${openDropdown === 'feature' ? 'text-teal-700' : 'text-gray-700'}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('feature', e);
                }}
              >
                Feature
                <svg className={`ml-1 w-4 h-4 transform transition-transform duration-200 
                  ${openDropdown === 'feature' ? 'rotate-180 text-teal-700' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Dropdown items={dropdownData.feature} isOpen={openDropdown === 'feature'} />
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
          
            <Link 
              href="/login" 
              className="text-[17px] bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-150 flex items-center gap-2"
            >
              <FaSignInAlt className="w-4 h-4" />
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="text-[17px] bg-[#006D77] text-white px-4 py-2 rounded-lg hover:bg-[#005a63] transition-colors duration-150 flex items-center gap-2"
            >
              <FaUserPlus className="w-4 h-4" />
              Sign up
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
                  className="flex items-center gap-2 w-full px-4 py-2 text-center text-[#006D77] hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaSignInAlt className="w-4 h-4" />
                  Log in
                </Link>
                <Link 
                  href="/signup" 
                  className="flex items-center gap-2 justify-center w-full px-4 py-2 text-center text-white bg-[#006D77] hover:bg-[#005a63] rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaUserPlus className="w-4 h-4" />
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