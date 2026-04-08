'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function ApproachProcess() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      title: 'Initial Consultation',
      desc: 'Our initial consultation enables us to gain a comprehensive understanding of your specific requirements, allowing us to customize our recruitment approach and identify the most suitable global workers for your business. We thoroughly assess your needs to ensure an efficient, effective, and personalized sourcing strategy.',
      icon: '💼'
    },
    {
      title: 'Worker Sourcing',
      desc: 'We connect you with top-tier global workers through an extensive network, ensuring access to high-quality candidates. Our meticulous background checks and customized solutions are designed to meet your business\'s specific demands.',
      icon: '🌍'
    },
    {
      title: 'Screening and Selection',
      desc: 'Our screening and selection process guarantees that you receive only the highest quality workers. We perform detailed background checks, skills assessments, and interviews to identify the most qualified candidates.',
      icon: '✅'
    },
    {
      title: 'Onboarding and Integration',
      desc: 'We offer comprehensive orientation, training, and support to ensure that workers quickly adapt and contribute meaningfully to your team.',
      icon: '🤝'
    },
    {
      title: 'Accommodation (if employers need)',
      desc: 'We provide reliable accommodation solutions for workers. Our services include sourcing and arranging suitable housing that meets the specific requirements of employers.',
      icon: '🏠'
    },
    {
      title: 'Continuous Support',
      desc: 'We offer ongoing support to ensure the success and satisfaction of both employers and workers.',
      icon: '💬'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Find the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Ideal Match
            </span>
            {' '}for Your Business
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D60000] to-[#9B0000] mx-auto mt-4"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-8 hover:border-[#D60000]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D60000]/20"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D60000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#D60000]/20 to-[#D60000]/5 group-hover:from-[#D60000]/40 group-hover:to-[#D60000]/20 transition-all duration-300 mb-6">
                  <span className="text-3xl">{step.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D60000] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed text-sm md:text-base group-hover:text-white/90 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>

              {/* Border Animation on Hover */}
              <div className="absolute inset-0 rounded-xl border border-[#D60000]/0 group-hover:border-[#D60000]/50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
