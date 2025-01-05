"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // API integration will go here
    console.log('Signup attempt with:', formData);
  };

  return (
    <div className="min-h-screen bg-[#F5F7F7] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl flex overflow-hidden">
        {/* Left Section */}
        <div className="w-[45%] bg-gradient-to-br from-teal-700 to-teal-900 p-12 text-white relative hidden md:block">
          <div className="absolute top-8 left-8">
            <Link href="/">
              <Image
                src="/dashlane-logo-white.svg"
                alt="Dashlane"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-[2.75rem] leading-[1.2] font-medium mb-6">
              Create your
              <br />
              Dashlane account
            </h1>
            <p className="text-lg text-teal-100">
              Join millions of people who protect their online accounts with Dashlane.
            </p>
          </div>
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-600/20 rounded-full -mb-32 -mr-32" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600/20 rounded-full -mt-16 -mr-16" />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[55%] p-8 md:p-12">
          <div className="md:hidden mb-8">
            <Link href="/">
              <Image
                src="/dashlane-logo.svg"
                alt="Dashlane"
                width={120}
                height={32}
                className="h-6 w-auto"
              />
            </Link>
          </div>

          <div className="max-w-md mx-auto">
            <h2 className="heading-rebond text-2xl font-medium text-[#001E2B] mb-8">
              Sign up for Dashlane
            </h2>

            <form onSubmit={handleSignup}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Create master password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                    placeholder="Create a strong password"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm master password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition-colors duration-150"
                >
                  Create account
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-teal-700 hover:text-teal-800">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 