'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function WorkersOpportunities() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = [
    { name: 'Construction', emoji: '🏗️' },
    { name: 'Healthcare', emoji: '⚕️' },
    { name: 'Hospitality', emoji: '🏨' },
    { name: 'Manufacturing', emoji: '🏭' },
    { name: 'Agriculture', emoji: '🌾' },
    { name: 'Retail', emoji: '🛍️' },
    { name: 'Transportation', emoji: '🚚' },
    { name: 'Domestic Care', emoji: '🏠' },
    { name: 'Beauty & Wellness', emoji: '💄' },
    { name: 'Education', emoji: '📚' },
    { name: 'IT & Tech', emoji: '💻' },
    { name: 'Finance & Banking', emoji: '🏦' },
  ];

  return (
    <section id="opportunities" className="py-20 bg-gradient-to-br from-[#f5f5f5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Opportunities in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Multiple Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600">Find your perfect role across diverse sectors</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={50 * (index % 6)}
              className="group p-8 rounded-xl bg-white border-2 border-gray-200 hover:border-[#D60000] hover:shadow-2xl transition-all duration-300 text-center cursor-pointer"
            >
              <p className="text-5xl mb-4 group-hover:scale-125 transition-transform">{category.emoji}</p>
              <p className="text-gray-900 font-bold text-lg group-hover:text-[#D60000] transition-colors">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
