'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';

export default function WorkersHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#2B2B2B] text-white overflow-hidden pt-20 md:pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center py-10 md:py-20">
            {/* Content */}
            <div data-aos="fade-right">
              <div className="mb-4 md:mb-6">
                <span className="inline-block bg-[#D60000]/20 text-[#D60000] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                  FOR WORKERS & AGENCIES
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Your Global Career{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                  Starts Here
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Connect with international employment opportunities across 25+ countries and 50+ industries. We handle visa, training, and placement support so you can focus on your career growth.
              </p>
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                <div className="flex items-start gap-3 md:gap-4 bg-white bg-opacity-10 backdrop-blur-md p-3 md:p-5 rounded-lg border border-white/10">
                  <span className="text-xl md:text-2xl flex-shrink-0">🌍</span>
                  <div>
                    <h3 className="text-green-950 font-bold text-sm md:text-base">Global Opportunities</h3>
                    <p className="text-green-900 text-xs md:text-sm">Work in 25+ countries across continents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 bg-white bg-opacity-10 backdrop-blur-md p-3 md:p-5 rounded-lg border border-white/10">
                  <span className="text-xl md:text-2xl flex-shrink-0">💼</span>
                  <div>
                    <h3 className="text-amber-950 font-bold text-sm md:text-base">Diverse Industries</h3>
                    <p className="text-amber-900 text-xs md:text-sm">50+ industries from healthcare to tech</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 bg-white bg-opacity-10 backdrop-blur-md p-3 md:p-5 rounded-lg border border-white/10">
                  <span className="text-xl md:text-2xl flex-shrink-0">🤝</span>
                  <div>
                    <h3 className="text-yellow-950 font-bold text-sm md:text-base">Full Support</h3>
                    <p className="text-yellow-900 text-xs md:text-sm">From application to successful placement</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#D60000] to-[#9B0000] hover:from-[#9B0000] hover:to-[#6B0000] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all transform hover:scale-105 text-center text-sm md:text-base"
                >
                  Apply Now
                </Link>
                <Link
                  href="#opportunities"
                  className="border-2 border-white text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-white/10 transition-all text-center text-sm md:text-base"
                >
                  Explore Jobs
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div data-aos="fade-left" className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-8 rounded-xl text-center hover:border-[#D60000]/50 transition-all">
                <div className="text-3xl md:text-5xl font-bold text-[#D60000] mb-2">1300+</div>
                <p className="text-xs md:text-base text-white/80">Workers Placed</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-8 rounded-xl text-center hover:border-[#D60000]/50 transition-all">
                <div className="text-3xl md:text-5xl font-bold text-[#D60000] mb-2">200+</div>
                <p className="text-xs md:text-base text-white/80">Employers Trust Us</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-8 rounded-xl text-center hover:border-[#D60000]/50 transition-all">
                <div className="text-3xl md:text-5xl font-bold text-[#D60000] mb-2">15+</div>
                <p className="text-xs md:text-base text-white/80">Countries Covered</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-8 rounded-xl text-center hover:border-[#D60000]/50 transition-all">
                <div className="text-3xl md:text-5xl font-bold text-[#D60000] mb-2">95%</div>
                <p className="text-xs md:text-base text-white/80">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
