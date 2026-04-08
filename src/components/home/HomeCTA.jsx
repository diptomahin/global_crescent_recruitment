'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';

export default function HomeCTA() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-[#D60000] to-[#9B0000] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Recruitment?
          </h2>
          <p className="text-lg md:text-xl text-[#E5E5E5] mb-10 leading-relaxed">
            Join hundreds of successful companies that have partnered with Global Crescent Recruitment for their staffing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#D60000] hover:bg-[#F5F5F5] font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 text-lg"
            >
              Let's Talk 💬
            </Link>
            <Link
              href="/our-approach"
              className="bg-[#9B0000] hover:bg-[#6B0000] text-white font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 text-lg border-2 border-white"
            >
              Learn Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
