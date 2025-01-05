"use client";

import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: "ABOUT US",
      links: [
        { name: "Company", href: "/company" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Contact us", href: "/contact" }
      ]
    },
    {
      title: "PRODUCT",
      links: [
        { name: "Why LookSense", href: "/why-looksense" },
        { name: "Features", href: "/features" },
        { name: "Get started", href: "/get-started" },
        { name: "Downloads", href: "/downloads" },
        { name: "Pricing", href: "/pricing" },
        { name: "Schools", href: "/schools" }
      ]
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Help", href: "/help" },
        { name: "Learn", href: "/learn" },
        { name: "Press & media", href: "/press" }
      ]
    },
    {
      title: "LEGAL",
      links: [
        { name: "Product privacy policy", href: "/privacy-policy" },
        { name: "Website privacy policy", href: "/website-privacy" },
        { name: "Cookie policy", href: "/cookie-policy" },
        { name: "Legal notice", href: "/legal-notice" }
      ]
    }
  ];

  const locations = [
    {
      region: "Europe",
      address: "Roger de Flor 193, bajos\n08013 Barcelona, Spain"
    },
    {
      region: "North America",
      address: "227 W Trade St #1100\nCarillon Tower, Charlotte,\nNC 28202 USA"
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-md font-medium text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#166cf7] text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Find Us Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-md font-medium text-gray-900 mb-4">
              FIND US
            </h3>
            <div className="space-y-6">
              {locations.map((location) => (
                <div key={location.region} className="space-y-2">
                  <h4 className="text-[#166cf7] text-sm font-medium">
                    {location.region}
                  </h4>
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {location.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Language Selector */}
            <div className="flex items-center">
              <div className="relative">
                <select 
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#166cf7] focus:border-transparent"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Follow @looksense</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#166cf7]"><FaFacebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-[#166cf7]"><FaLinkedin size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-[#166cf7]"><FaTwitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-[#166cf7]"><FaInstagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-[#166cf7]"><FaYoutube size={20} /></a>
              </div>
            </div>
          </div>

          {/* Copyright and Certifications */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
            <p className="text-sm text-gray-600">
              © 2025 LookSense is a registered trademark of LookSense LLC. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 