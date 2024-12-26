"use client";
import avatar from "../../../public/avatar.png";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle properties with Vercel theme colors
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 50;
    const connectionDistance = 150;
    const particleSpeed = 0.3;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
      });
    }

    // Animation loop with Vercel colors
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 - distance / connectionDistance})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

  return (
    <div className="relative bg-white dark:bg-black pt-12">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ opacity: 0.1 }}
      />
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8 mt-8 lg:mt-16">
        <div className="flex-1 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0 pt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6 tracking-tight h-20 sm:h-24 lg:h-28">
            <div className="inline-block min-w-full">
              <TypeAnimation
                sequence={[
                  'Advanced Mobile Monitoring',
                  1000,
                  'Real-time Device Tracking',
                  1000,
                  'Secure Data Protection',
                  1000,
                  'Advanced Mobile Monitoring',
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
                className="typewriter"
              />
            </div>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 tracking-tight max-w-2xl">
            Leverage cutting-edge technology to monitor mobile device activities in real-time. 
            Our enterprise-grade solution provides comprehensive data analytics and advanced tracking capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full 
              font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 
              flex items-center justify-center gap-2 min-w-[200px]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Live Demo
            </button>
            <button className="px-8 py-4 border border-gray-200 dark:border-gray-800 text-gray-600 
              dark:text-gray-400 rounded-full font-medium hover:border-gray-400 dark:hover:border-gray-600 
              transition-colors duration-200 flex items-center justify-center gap-2 min-w-[200px]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Deploy Now
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Enterprise Ready
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              99.9% Uptime
            </div>
          </div>
        </div>

        <div className="flex-1 w-full lg:w-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 
              dark:from-gray-800 dark:to-gray-900 rounded-lg filter blur-xl opacity-70"></div>
            <div className="relative rounded-lg overflow-hidden border border-gray-200 
              dark:border-gray-800 shadow-2xl">
              <Image
                src={avatar}
                alt="Advanced Monitoring Dashboard"
                width={600}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;