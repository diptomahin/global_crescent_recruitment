'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';

export default function HomeHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#2B2B2B] text-white flex items-center pt-20 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center py-10 md:py-20">
          {/* Left Content */}
          <div data-aos="fade-right" className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Global Workforce,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                Local Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 leading-relaxed">
              Connecting businesses with top talent across multiple countries and industries. We provide comprehensive recruitment solutions, worker sourcing, and staffing services that transform your hiring challenges into opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/employers"
                className="bg-[#D60000] hover:bg-[#9B0000] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition transform hover:scale-105 text-center text-sm sm:text-base"
              >
                For Employers
              </Link>
              <Link
                href="/workers"
                className="bg-[#1E90FF] hover:bg-[#1873CC] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition transform hover:scale-105 text-center text-sm sm:text-base border-2 border-[#C0C0C0]"
              >
                For Workers
              </Link>
            </div>
          </div>

          {/* Right Stats */}
          <div data-aos="fade-left" className="grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
            <div className="bg-inherit bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D60000] mb-2">1300+</p>
              <p className="text-xs sm:text-sm md:text-base text-white">Workers Placed in Last 5 Years</p>
            </div>
            <div className="bg-inherit bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D60000] mb-2">200+</p>
              <p className="text-xs sm:text-sm md:text-base text-white">Happy Employers Who Trusted Us</p>
            </div>
            <div className="bg-inherit bg-opacity-10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition col-span-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C0C0C0] mb-2">15+</p>
              <p className="text-xs sm:text-sm md:text-base text-white">Countries Across Europe & Asia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
