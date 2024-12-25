"use client";
import avatar from "../../../public/avatar.png";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex-1 pr-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          The World&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 font-semibold">#1</span> Spy Phone App
        </h1>
        <p className="text-xl text-gray-500 mb-8 tracking-[.5px]">
          Child-Tracker is used by countless parents globally to track their child&apos;s cell phones. Even employers use Child-Tracker to make sure that their staff are actually working on the job at hand
        </p>
        
        <div className="flex items-center gap-4 mb-8">
          <span className="text-gray-600 font-semibold">Available for:</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" fill="#3DDC84"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" fill="#000000"/>
          </svg>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-black border-2 border-gradient-to-b from-pink-100 via-purple-100 to-blue-100 opacity-50 rounded-md font-semibold hover:bg-gray-50 transition-colors">View Demo</button>
          <button className="bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 opacity-50 text-black px-4 py-2 rounded-md font-semibold border border-gray-200">Sign Up</button>
        </div>
      </div>

      <div className="flex-1">
        <Image
          src={avatar}
          alt="Hero Illustration"
          width={600}
          height={600}
          priority
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;