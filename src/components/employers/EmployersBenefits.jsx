'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function EmployersBenefits() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const benefits = [
    {
      icon: '⚡',
      title: 'Faster Hiring',
      description: 'Reduce recruitment time from months to weeks with our streamlined processes'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Minimize recruitment overhead and training costs significantly'
    },
    {
      icon: '🌍',
      title: 'Global Talent Pool',
      description: 'Access to skilled workers across 15+ countries in Europe and Asia'
    },
    {
      icon: '✅',
      title: 'Quality Assured',
      description: 'Pre-screened and verified candidates ready to perform immediately'
    },
    {
      icon: '🛡️',
      title: 'Legal Compliance',
      description: 'All regulatory requirements handled - visa, contracts, documentation'
    },
    {
      icon: '📞',
      title: 'Dedicated Support',
      description: '24/7 support team available for any employment concerns or issues'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Partner With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Global Crescent
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the advantages of working with a trusted global recruitment partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#D60000] hover:shadow-2xl transition-all duration-300"
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
