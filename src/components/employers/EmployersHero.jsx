'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';

export default function EmployersHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#2B2B2B] text-white overflow-hidden pt-20 md:pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center py-10 md:py-20">
            {/* Content */}
            <div data-aos="fade-right" className=''>
              <div className="mb-4 md:mb-6">
                <span className="inline-block bg-[#D60000]/20 text-[#D60000] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                  FOR EMPLOYERS
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Global Recruitment{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                  Solutions for Growth
                </span>
              </h1>
              
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                <div className="flex items-start gap-3 md:gap-4 bg-white bg-opacity-10 backdrop-blur-md p-3 md:p-5 rounded-lg border border-white/10">
                  <span className="text-xl md:text-2xl flex-shrink-0">🎯</span>
                  <div>
                    <h3 className="text-red-950 font-bold text-sm md:text-base">Pre-Screened Talent</h3>
                    <p className="text-red-900 text-xs md:text-sm">Access to our global pool of verified, qualified workers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 bg-white bg-opacity-10 backdrop-blur-md p-3 md:p-5 rounded-lg border border-white/10">
                  <span className="text-xl md:text-2xl flex-shrink-0">✅</span>
                  <div>
                    <h3 className="text-green-950 font-bold text-sm md:text-base">Quality Guaranteed</h3>
                    <p className="text-green-900 text-xs md:text-sm">Rigorous vetting and background checks for every candidate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 bg-white bg-opacity-10 backdrop-blur-md p-3 md:p-5 rounded-lg border border-white/10">
                  <span className="text-xl md:text-2xl flex-shrink-0">🤝</span>
                  <div>
                    <h3 className="text-yellow-950 font-bold text-sm md:text-base">Full Support</h3>
                    <p className="text-yellow-900 text-xs md:text-sm">Continuous support from hiring through employee lifecycle</p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#D60000] to-[#9B0000] hover:from-[#9B0000] hover:to-[#6B0000] text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-lg transition transform hover:scale-105 text-sm md:text-base"
              >
                Start Hiring Today →
              </Link>
            </div>

            {/* Right Image */}
            <div data-aos="fade-left" className="relative hidden lg:block">
              <div
                className="h-96 md:h-[600px] rounded-xl shadow-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
              ></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#0A0A0A]/50 to-transparent"></div>

              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 text-center">
                  <div className="text-2xl font-bold text-[#D60000]">1300+</div>
                  <div className="text-xs text-gray-300 mt-1">Workers Placed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 text-center">
                  <div className="text-2xl font-bold text-[#D60000]">200+</div>
                  <div className="text-xs text-gray-300 mt-1">Employers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 text-center">
                  <div className="text-2xl font-bold text-[#D60000]">15+</div>
                  <div className="text-xs text-gray-300 mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
