'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function IndustriesGrid() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const industries = [
    { name: 'Construction', emoji: '🏗️', color: 'from-blue-500 to-blue-700' },
    { name: 'Healthcare', emoji: '⚕️', color: 'from-pink-500 to-red-500' },
    { name: 'Hospitality', emoji: '🏨', color: 'from-orange-500 to-red-500' },
    { name: 'Retail', emoji: '🛍️', color: 'from-yellow-500 to-orange-500' },
    { name: 'Manufacturing', emoji: '🏭', color: 'from-gray-500 to-gray-700' },
    { name: 'Agriculture', emoji: '🌾', color: 'from-green-500 to-emerald-600' },
    { name: 'Transportation', emoji: '🚚', color: 'from-purple-500 to-indigo-600' },
    { name: 'Domestic Care', emoji: '🏠', color: 'from-pink-400 to-rose-500' },
    { name: 'Beauty & Wellness', emoji: '💄', color: 'from-red-400 to-pink-500' },
    { name: 'Education', emoji: '📚', color: 'from-blue-400 to-cyan-500' },
    { name: 'IT & Technology', emoji: '💻', color: 'from-cyan-500 to-blue-600' },
    { name: 'Finance & Banking', emoji: '🏦', color: 'from-amber-500 to-orange-600' },
    { name: 'Mining & Minerals', emoji: '⛏️', color: 'from-slate-500 to-slate-700' },
    { name: 'Textile & Garments', emoji: '👕', color: 'from-indigo-500 to-purple-600' },
    { name: 'Food Processing', emoji: '🍱', color: 'from-orange-400 to-yellow-500' },
    { name: 'Marine & Shipping', emoji: '⚓', color: 'from-cyan-600 to-blue-700' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized Staffing Solutions
          </h2>
          <p className="text-lg text-gray-600">Across 16+ major industry sectors</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={50 * (index % 4)}
              className={`relative h-32 md:h-40 rounded-lg overflow-hidden group cursor-pointer bg-gradient-to-br ${industry.color}`}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-white">
                <p className="text-4xl md:text-5xl mb-2">{industry.emoji}</p>
                <p className="text-center font-bold text-sm md:text-base px-2">
                  {industry.name}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D60000]/0 to-[#D60000]/0 group-hover:from-[#D60000]/40 group-hover:to-[#D60000]/20 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
