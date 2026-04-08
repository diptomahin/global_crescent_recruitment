'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function WorkersGrowth() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salaries',
      description: 'Earn competitive wages with transparent pay structures and regular salary reviews',
    },
    {
      icon: '🏆',
      title: 'Career Growth',
      description: 'Develop your skills with training programs and advancement opportunities',
    },
    {
      icon: '🛡️',
      title: 'Worker Protection',
      description: 'Legal protection, workplace safety compliance, and contract enforcement',
    },
    {
      icon: '🏥',
      title: 'Health & Insurance',
      description: 'Access to healthcare benefits and comprehensive insurance coverage',
    },
    {
      icon: '🎓',
      title: 'Skill Development',
      description: 'Professional certifications and continuous learning opportunities',
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Dedicated support team available throughout your employment journey',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f5f5f5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Work With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Global Crescent
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond employment, we invest in your growth and well-being
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="p-8 rounded-xl bg-white border-2 border-gray-200 hover:border-[#D60000] hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D60000] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
