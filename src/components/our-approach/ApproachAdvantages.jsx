'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function ApproachAdvantages() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const advantages = [
    {
      icon: '⚡',
      title: 'Speed & Efficiency',
      description: 'Quick turnaround times without compromising quality. Our streamlined processes ensure rapid placements.',
    },
    {
      icon: '🎯',
      title: 'Precision Matching',
      description: 'Advanced assessment techniques ensure perfect alignment between candidate skills and job requirements.',
    },
    {
      icon: '💡',
      title: 'Industry Expertise',
      description: 'Deep knowledge across 15+ industries enabling specialized recruitment solutions for any sector.',
    },
    {
      icon: '🤝',
      title: 'Long-term Partnerships',
      description: 'We build lasting relationships with clients, not just transactional connections.',
    },
    {
      icon: '📊',
      title: 'Data-Driven Decisions',
      description: 'Analytics and insights guide our strategies for optimal recruitment outcomes.',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'International operations with local expertise in 15+ countries across Europe and Asia.',
    },
  ];

  const principles = [
    {
      number: '01',
      title: 'Integrity',
      description: 'Transparent and ethical practices in every interaction with clients and candidates.',
    },
    {
      number: '02',
      title: 'Excellence',
      description: 'Commitment to delivering the highest quality recruitment services and support.',
    },
    {
      number: '03',
      title: 'Innovation',
      description: 'Continuous improvement and adoption of cutting-edge recruitment technologies.',
    },
    {
      number: '04',
      title: 'Diversity',
      description: 'Celebrating diversity and promoting inclusive hiring practices globally.',
    },
  ];

  return (
    <>
      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                Our Approach
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our unique methodology combines global expertise with personalized service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#D60000] hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D60000] transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                Principles
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Guiding values that shape every decision and interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D60000]/20 to-[#9B0000]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D60000]/50 transition-all">
                  <div className="text-5xl font-bold text-[#D60000] mb-4 opacity-20">{principle.number}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-white/70 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Promise to You
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: '✓',
                title: 'Quality First',
                description: 'Every candidate is thoroughly vetted and assessed to ensure they meet your highest standards.',
              },
              {
                icon: '✓',
                title: 'Transparency Always',
                description: 'Clear communication throughout the process with regular updates and detailed reporting.',
              },
              {
                icon: '✓',
                title: 'Support Beyond Placement',
                description: 'Ongoing support after placement to ensure successful integration and long-term satisfaction.',
              },
              {
                icon: '✓',
                title: 'Compliance Assured',
                description: 'Full compliance with all legal and regulatory requirements in every engagement.',
              },
            ].map((promise, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                className="flex items-start gap-6 p-6 rounded-lg bg-gradient-to-r from-[#D60000]/5 to-[#9B0000]/5 border border-[#D60000]/10"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                    <span className="text-white text-xl font-bold">{promise.icon}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{promise.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{promise.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Stand{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                Apart
              </span>
            </h2>
            <p className="text-xl text-gray-600">Comparing our approach with traditional recruitment</p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Traditional Approach */}
              <div className="p-8 border-r border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">📋</span> Traditional Recruitment
                </h3>
                <ul className="space-y-4">
                  {[
                    'Time-consuming processes',
                    'Limited candidate pool',
                    'Basic screening methods',
                    'Lack of post-placement support',
                    'Higher cost variability',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="text-red-400 mt-1">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Approach */}
              <div className="p-8 bg-gradient-to-br from-[#D60000]/5 to-[#9B0000]/5">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">🚀</span> Our Approach
                </h3>
                <ul className="space-y-4">
                  {[
                    'Rapid turnaround times',
                    'Extensive global network',
                    'Advanced assessment tools',
                    'Dedicated ongoing support',
                    'Transparent, value-based pricing',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-900 font-medium">
                      <span className="text-[#D60000] mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
