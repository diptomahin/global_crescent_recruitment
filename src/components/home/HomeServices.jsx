'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function HomeServices() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      icon: '👥',
      title: 'Worker Acquisition',
      description: 'Strategic recruitment of skilled workers from diverse regions, ensuring quality and reliability for your staffing needs.'
    },
    {
      icon: '🤝',
      title: 'Workforce Solutions',
      description: 'End-to-end staffing solutions including screening, placement, and ongoing support for sustained success.'
    },
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Complete legal compliance and documentation services to ensure smooth international deployment.'
    },
    {
      icon: '🎓',
      title: 'Skills Training & Development',
      description: 'Professional development programs to upskill your workforce and enhance productivity.'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]"> Services</span>
          </h2>
          <p className="text-lg text-gray-600">Everything you need for successful recruitment and staffing</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="bg-white p-6 rounded-xl border-2 border-[#2B2B2B] hover:shadow-2xl transition transform hover:scale-105"
            >
              <p className="text-4xl mb-4">{service.icon}</p>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{service.title}</h3>
              <p className="text-[#2B2B2B] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
