"use client"
import React from 'react';
import Navbar from '@/components/ProactiveSecurity/Navbar';
import Footer from '@/components/ProactiveSecurity/Footer';
import { FaBook, FaHeadset, FaVideo, FaBlog, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';

const ResourcesPage = () => {
  const resources = [
    {
      title: 'Documentation',
      description: 'Detailed guides and API documentation',
      icon: <FaBook className="text-4xl mb-4 text-teal-600" />,
      link: '/docs'
    },
    {
      title: 'Help Center',
      description: 'Frequently asked questions and troubleshooting',
      icon: <FaHeadset className="text-4xl mb-4 text-teal-600" />,
      link: '/help'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <FaVideo className="text-4xl mb-4 text-teal-600" />,
      link: '/tutorials'
    },
    {
      title: 'Blog',
      description: 'Latest updates and digital safety tips',
      icon: <FaBlog className="text-4xl mb-4 text-teal-600" />,
      link: '/blog'
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories',
      icon: <FaFileAlt className="text-4xl mb-4 text-teal-600" />,
      link: '/case-studies'
    },
    {
      title: 'FAQ',
      description: 'Common questions answered',
      icon: <FaQuestionCircle className="text-4xl mb-4 text-teal-600" />,
      link: '/faq'
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Resources & Support
              </h1>
              <p className="text-xl text-gray-600">
                Everything you need to get the most out of KidSafe
              </p>
            </div>

            {/* Resource Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    {resource.icon}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {resource.description}
                    </p>
                    <a
                      href={resource.link}
                      className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-rebond text-3xl font-bold text-gray-900 mb-4">
                Need Additional Help?
              </h2>
              <p className="text-gray-600 mb-8">
                Our support team is available 24/7 to assist you with any questions
              </p>
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResourcesPage; 