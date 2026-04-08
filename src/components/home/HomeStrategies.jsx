'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function HomeStrategies() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const strategies = [
    {
      icon: '🎯',
      title: 'Tailored Recruitment Plans',
      description: 'Customized recruitment strategies aligned with your business objectives and workforce needs.'
    },
    {
      icon: '✅',
      title: 'Comprehensive Screening',
      description: 'Rigorous vetting processes ensuring the highest standards and best fit for your projects.'
    },
    {
      icon: '📋',
      title: 'Compliance Management',
      description: 'Full legal documentation and regulatory requirements handling across all deployment regions.'
    },
    {
      icon: '🤝',
      title: 'Long-term Partnership',
      description: 'Ongoing support and relationship building for sustained success and employee retention.'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Global Crescent?
            </span>
          </h2>
          <p className="text-lg text-gray-600">Proven strategies for recruitment success</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="bg-white p-8 rounded-xl border-l-4 border-[#D60000] hover:shadow-2xl transition"
            >
              <p className="text-4xl mb-4">{strategy.icon}</p>
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-3">{strategy.title}</h3>
              <p className="text-[#2B2B2B] leading-relaxed">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
