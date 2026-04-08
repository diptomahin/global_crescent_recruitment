'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function IndustriesHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#2B2B2B] text-white pt-20 md:pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Industries We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Serve
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We provide specialized recruitment solutions across multiple sectors, bringing industry expertise and global workforce to your organization. Our diverse talent pool spans construction, healthcare, manufacturing, technology, hospitality, and logistics industries.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D60000] to-[#9B0000] mx-auto mt-6"></div>
        </div>
      </div>
    </section>
  );
}
