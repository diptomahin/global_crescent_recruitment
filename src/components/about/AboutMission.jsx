'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';

export default function AboutMission() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const solutions = [
    {
      icon: '👥',
      title: 'Worker Acquisition',
      description: 'Strategic recruitment and sourcing of skilled workers from our global talent pool',
    },
    {
      icon: '🔍',
      title: 'Workforce Solutions',
      description: 'Comprehensive staffing services tailored to your industry and business needs',
    },
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Legal expertise ensuring all requirements and documentation are properly handled',
    },
    {
      icon: '🎓',
      title: 'Skills Training',
      description: 'Professional development and continuous training for workforce enhancement',
    },
    {
      icon: '🤝',
      title: 'Integration Support',
      description: 'Seamless onboarding and integration programs for smooth team transitions',
    },
    {
      icon: '🔍',
      title: 'Background Checks',
      description: 'Comprehensive verification ensuring the highest quality and security standards',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <div data-aos="fade-up" className="bg-gradient-to-br from-[#D60000]/10 to-[#9B0000]/10 p-8 rounded-xl border-l-4 border-[#D60000]">
            <h3 className="text-2xl font-bold text-[#D60000] mb-4">🎯 Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses and workers by providing innovative, reliable, and ethical recruitment solutions that create meaningful employment opportunities across borders and industries globally.
            </p>
          </div>

          {/* Vision */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-br from-[#1873CC]/10 to-[#1E90FF]/10 p-8 rounded-xl border-l-4 border-[#1873CC]">
            <h3 className="text-2xl font-bold text-[#1873CC] mb-4">🌟 Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and innovative global recruitment partner, known for transforming careers and driving organizational success through strategic and ethical workforce solutions.
            </p>
          </div>

          {/* Values */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-gradient-to-br from-[#C0C0C0]/10 to-[#808080]/10 p-8 rounded-xl border-l-4 border-[#C0C0C0]">
            <h3 className="text-2xl font-bold text-[#2B2B2B] mb-4">💎 Our Values</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-[#D60000] font-bold">●</span> Integrity & Transparency
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D60000] font-bold">●</span> Excellence & Quality
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D60000] font-bold">●</span> Diversity & Inclusion
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D60000] font-bold">●</span> Innovation & Adaptability
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D60000] font-bold">●</span> Client Partnership
              </li>
            </ul>
          </div>
        </div>

        {/* HR Experts Section */}
        <div className="mb-20" data-aos="fade-up">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2B2B2B] text-white rounded-xl p-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                HR Experts Committed to Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                  Success
                </span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-[#D60000] text-2xl ml-2">📍</span>
                  <div>
                    <h3 className="font-bold mb-1">Tailored Recruitment Solutions</h3>
                    <p className="text-white/80">Custom recruitment strategies aligned with your specific business objectives and culture.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D60000] text-2xl ml-2">📍</span>
                  <div>
                    <h3 className="font-bold mb-1">Global Talent Acquisition</h3>
                    <p className="text-white/80">Access to thousands of pre-vetted professionals across multiple industries and skill levels.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D60000] text-2xl ml-2">📍</span>
                  <div>
                    <h3 className="font-bold mb-1">Comprehensive Support</h3>
                    <p className="text-white/80">Full support from sourcing through onboarding, ensuring compliance with local regulations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#D60000] text-2xl ml-2">📍</span>
                  <div>
                    <h3 className="font-bold mb-1">Ongoing Partnership</h3>
                    <p className="text-white/80">Continuous support and relationship management to ensure long-term success and satisfaction.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-8 border border-[#D60000]/20">
              <div className="text-center space-y-6">
                <div className="text-5xl">👨‍💼</div>
                <h3 className="text-2xl font-bold">Dedicated HR Professionals</h3>
                <p className="text-white/90">With decades of combined experience in international recruitment and workforce management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                Workforce Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600">Complete recruitment and staffing services tailored to your business needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={100 * index}>
                <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#D60000] hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D60000] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" className="text-center bg-gradient-to-r from-[#D60000] to-[#9B0000] text-white rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how Global Crescent Recruitment can support your hiring needs and workforce goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#D60000] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition transform hover:scale-105"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </section>
  );
}
