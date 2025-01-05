"use client";

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What is a cell phone tracker?",
      answer: "A cell phone tracker is a specialized software solution that allows you to monitor various activities on a mobile device, including location tracking, call logs, messages, and app usage. It's designed to provide comprehensive oversight of digital activities."
    },
    {
      question: "How does a cell phone tracker work?",
      answer: "Cell phone trackers work by installing a monitoring app on the target device. Once installed, it collects data about device usage, location, and communications, then securely transmits this information to a web-based dashboard for remote viewing."
    },
    {
      question: "Is LookSense the best hidden tracker app?",
      answer: "LookSense offers industry-leading stealth monitoring capabilities combined with comprehensive features. Our solution provides reliable tracking, user-friendly interface, and advanced security measures, making it a top choice for mobile monitoring."
    },
    {
      question: "Does LookSense cell phone tracker work in real time?",
      answer: "Yes, LookSense provides real-time monitoring capabilities. You can track location, messages, and other activities as they happen, with minimal delay in data transmission to your dashboard."
    },
    {
      question: "Can you track someone's phone without them knowing?",
      answer: "While LookSense operates discreetly, it's important to note that you should only use the app in accordance with local laws and with proper authorization. We recommend informing the device user about monitoring for legal compliance."
    },
    {
      question: "Is it legal to use LookSense mobile tracker?",
      answer: "The legality depends on your jurisdiction and intended use. Generally, it's legal to monitor devices you own or have explicit permission to monitor. We recommend consulting local laws and obtaining necessary consent before using tracking software."
    },
    {
      question: "Is the tracking software detectable?",
      answer: "LookSense is designed to operate discreetly while maintaining device performance. While no solution is completely undetectable, we implement advanced stealth technologies to minimize visibility while running."
    },
    {
      question: "How do I choose the best cell phone monitoring app?",
      answer: "Consider factors like feature set, reliability, customer support, and security measures. Look for solutions that offer comprehensive monitoring capabilities, regular updates, and strong user reviews."
    },
    {
      question: "Can you monitor a cell phone without installing software?",
      answer: "While some basic tracking is possible without software installation, comprehensive monitoring typically requires a monitoring app to be installed on the target device for full functionality."
    },
    {
      question: "Is there a free way to track a cell phone?",
      answer: "While some basic tracking features are available through free services, comprehensive and reliable monitoring typically requires a paid solution that can provide advanced features and security."
    },
    {
      question: "Can you track your phone with the IMEI number?",
      answer: "IMEI tracking has limitations and typically requires cooperation from service providers or law enforcement. LookSense provides more comprehensive tracking capabilities through our specialized monitoring solution."
    }
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
          <h2 className="heading-rebond text-xl uppercase tracking-[5px] text-[#166cf7] mb-6">
            FAQ
          </h2>
          <h3 className="text-3xl sm:text-4xl font-medium text-gray-900">
          Before You Get Started With LookSense
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          If any questions left
          </p>
        </div>
       

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="text-gray-900 font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#166cf7] transform transition-transform duration-200 
                      ${openIndex === index ? 'rotate-45' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default FAQ;