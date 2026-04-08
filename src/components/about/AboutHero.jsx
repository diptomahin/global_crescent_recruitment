'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

export default function AboutHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#2B2B2B] text-white pt-20 md:pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo & Tagline */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center mb-8">
            <div className="relative h-20 w-64">
              <Image
                src="/Global-Crescent-recruitment-Ltd-PNG.png"
                alt="Global Crescent Recruitment"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Global Workforce,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Local Excellence
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Connecting businesses with top talent across multiple countries and industries through innovative recruitment solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div data-aos="fade-up" className="bg-gradient-to-br from-[#D60000] to-[#9B0000] p-8 rounded-xl">
            <div className="text-5xl font-bold mb-4">1300+</div>
            <h3 className="text-xl font-semibold mb-2">Workers Placed</h3>
            <p className="text-white/90">Successfully placed in the last 5 years across multiple industries</p>
          </div>

          {/* Stat 2 */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-br from-[#1873CC] to-[#1E90FF] p-8 rounded-xl">
            <div className="text-5xl font-bold mb-4">200+</div>
            <h3 className="text-xl font-semibold mb-2">Happy Employers</h3>
            <p className="text-white/90">Trusted businesses who rely on our recruitment expertise</p>
          </div>

          {/* Stat 3 */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-gradient-to-br from-[#C0C0C0] via-[#808080] to-[#606060] p-8 rounded-xl">
            <div className="text-5xl font-bold mb-4">15+</div>
            <h3 className="text-xl font-semibold mb-2">Countries Served</h3>
            <p className="text-white/90">Operating across Europe, Asia, and expanding globally</p>
          </div>
        </div>
      </div>
    </section>
  );
}
