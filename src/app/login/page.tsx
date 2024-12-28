"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // 1 for email, 2 for password

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // API integration will go here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#F5F7F7] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl flex overflow-hidden">
        {/* Left Section */}
        <div className="w-[45%] bg-gradient-to-br from-teal-700 to-teal-900 p-12 text-white relative hidden md:block">
          <div className="absolute top-8 left-8">
            <Link href="/">
              <Image
                src={logo}
                alt="Dashlane"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-[2.75rem] leading-[1.2] font-medium mb-6">
              Welcome to
              <br />
              Dashlane on the web
            </h1>
            <p className="text-lg text-teal-100">
              Access your logins and personal data in the web app — quickly and securely.
            </p>
          </div>
          {/* Decorative circle */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-600/20 rounded-full -mb-32 -mr-32" />
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
            <h2 className="text-2xl font-medium text-[#001E2B] mb-8">
              Log in to Dashlane
            </h2>

            {step === 1 ? (
              <form onSubmit={handleEmailSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your email to log in
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                    placeholder="Email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition-colors duration-150"
                >
                  Next
                </button>
              </form>
            ) : (
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Enter your master password
                    </label>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sm text-teal-700 hover:text-teal-800"
                    >
                      Change email
                    </button>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-black"
                    placeholder="Master password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition-colors duration-150"
                >
                  Log in
                </button>
              </form>
            )}

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                New to Dashlane?{' '}
                <Link href="/signup" className="text-teal-700 hover:text-teal-800">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 