"use client";

import Link from 'next/link';

const footerSections = {
  topFeatures: {
    title: "Top features",
    links: [
      "WhatsApp Tracking",
      "SMS Monitoring",
      "Facebook Tracking",
      "Instagram Tracking",
      "Snapchat Monitoring",
      "Kik Monitoring",
      "Screenrecorder",
      "Android Keylogger",
      "iPhone Keylogger",
      "Porn Blocker",
      "Social Media Monitoring",
      "Discord Monitoring"
    ]
  },
  popular: {
    title: "Popular",
    links: [
      "Android Monitoring",
      "iPhone Monitoring",
      "iPhone Tracker",
      "Parental Control",
      "Best Kid Tracker Apps",
      "Mobile Phone Monitoring",
      "Free Phone Monitoring",
      "Family Kit",
      "mSpy Extreme",
      "mAssistance",
      "How mSpy Works",
      "mSpy Reviews"
    ]
  },
  info: {
    title: "Info",
    links: [
      "About",
      "Affiliate Program",
      "Contact Us",
      "Blog"
    ]
  },
  legal: {
    title: "Legal",
    links: [
      "Terms of Use",
      "EULA",
      "Privacy Policy",
      "Refund Policy",
      "Cookie Policy",
      "Compatibility Policy"
    ]
  }
};

const contactInfo = [
  { country: "USA", label: "(toll-free)", phone: "+1 855 896 00 41" },
  { country: "Brasil", label: "(ligação gratuita)", phone: "+55 800 591 51 00" },
  { country: "France", label: "(national)", phone: "+3 397 073 81 15" },
  { country: "Türkiye", label: "(ulusal)", phone: "+90 212 922 34 86" },
  { country: "México", label: "(llamada gratuita)", phone: "+52 800 461 04 54" },
  { country: "Italia", label: "(nazionale)", phone: "+39 064 521 73 43" }
];

const Footer = () => {
  return (
    <footer className="gradient-bg pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 mb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Social Links */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-6">
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
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-primary">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                {/* Add more social icons as needed */}
              </div>
            </div>

            {/* Footer Sections */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-gray-800 font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-600 hover:text-primary text-sm">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-gray-800 font-semibold mb-6">Contact us:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactInfo.map((info) => (
                <div key={info.country} className="flex items-center space-x-2">
                  <span className="text-gray-800 font-medium">{info.country}</span>
                  <span className="text-gray-500 text-sm">{info.label}:</span>
                  <span className="text-primary">{info.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods and Certifications */}
        {/* <div className="flex flex-wrap justify-between items-center pt-8">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <span className="text-gray-600">Secure online payment:</span>
            <div className="flex space-x-2">
              {['visa', 'mastercard', 'amex', 'discover', 'jcb'].map((card) => (
                <Image
                  key={card}
                  src={`/${card}.svg`}
                  alt={card}
                  width={40}
                  height={24}
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Approved by:</span>
            <div className="flex space-x-2">
              <Image
                src="/security-badge.svg"
                alt="Security Certificate"
                width={80}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer; 