'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function EmployersServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      num: '01',
      title: 'Talent Sourcing & Recruitment',
      description: 'We identify, attract, and screen qualified candidates from our global network that match your requirements.',
      features: ['Global candidate database', 'Skills assessment', 'Background verification'],
    },
    {
      num: '02',
      title: 'Candidate Screening & Selection',
      description: 'Advanced evaluation processes ensure we present only the most suitable candidates for your consideration.',
      features: ['Interview coordination', 'Skills testing', 'Reference check'],
    },
    {
      num: '03',
      title: 'Visa & Compliance Management',
      description: 'We handle all visa applications, legal documentation, and regulatory compliance requirements.',
      features: ['Visa processing', 'Legal documentation', 'Work permits'],
    },
    {
      num: '04',
      title: 'Onboarding & Training',
      description: 'Comprehensive orientation and training programs to ensure smooth worker integration into your team.',
      features: ['Pre-deployment training', 'Language support', 'Cultural orientation'],
    },
    {
      num: '05',
      title: 'Accommodation Solutions',
      description: 'We arrange suitable housing that meets your specifications and worker comfort standards.',
      features: ['Housing arrangement', 'Furnished options', 'Utility setup'],
    },
    {
      num: '06',
      title: 'Ongoing Support & Management',
      description: 'Continuous support to ensure worker satisfaction and address any issues that may arise.',
      features: ['24/7 support', 'Performance monitoring', 'Problem resolution'],
    },
  ];

  const industries = [
    'Healthcare & Medical',
    'Construction & Engineering',
    'Manufacturing & Production',
    'Hospitality & Tourism',
    'Information Technology',
    'Logistics & Transportation',
    'Retail & Commerce',
    'Agriculture',
  ];

  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#f5f5f5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                Services for Employers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end recruitment solutions designed to streamline your hiring process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                className="group relative p-8 rounded-xl bg-white border-2 border-gray-200 hover:border-[#D60000] hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#D60000] opacity-20 mb-4">{service.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D60000] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-[#D60000] font-bold">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                Specialize In
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced in recruiting across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={50 * index}
                className="p-6 rounded-lg bg-gradient-to-br from-[#D60000]/5 to-[#9B0000]/5 border-2 border-[#D60000]/20 hover:border-[#D60000] hover:bg-[#D60000]/10 transition-all text-center font-semibold text-gray-900"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our 5-Step Hiring{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                Process
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A streamlined approach to get you the right talent quickly
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#D60000] to-[#9B0000] transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  step: '1',
                  title: 'Requirements Analysis',
                  description: 'We understand your hiring needs, company culture, and role specifications',
                },
                {
                  step: '2',
                  title: 'Candidate Sourcing',
                  description: 'We identify and invite pre-screened candidates from our global pool',
                },
                {
                  step: '3',
                  title: 'Selection & Interview',
                  description: 'Rigorous assessment and interviews to select the best candidates',
                },
                {
                  step: '4',
                  title: 'Documentation',
                  description: 'Handle visa, permits, contracts, and all legal requirements',
                },
                {
                  step: '5',
                  title: 'Onboarding',
                  description: 'Training and integration support for smooth deployment',
                },
              ].map((item, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={100 * index} className="relative">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center hover:border-[#D60000]/50 transition-all">
                    <div className="relative z-10 mx-auto w-12 h-12 bg-gradient-to-br from-[#D60000] to-[#9B0000] rounded-full flex items-center justify-center text-lg font-bold mb-4 border-4 border-[#0A0A0A]">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Measurable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                Results & Impact
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right" className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D60000] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">70%</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Faster Hiring</h3>
                  <p className="text-gray-600">Reduce recruitment time by 70% compared to traditional methods</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D60000] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">50%</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Cost Reduction</h3>
                  <p className="text-gray-600">Cut recruitment and training costs by up to 50%</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D60000] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">95%</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Retention Rate</h3>
                  <p className="text-gray-600">Our candidates have a 95% 1-year retention rate</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-[#D60000]/10 to-[#9B0000]/10 rounded-lg border-2 border-[#D60000]/20">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">100% of candidates are verified with background checks and skills assessments</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#1873CC]/10 to-[#1E90FF]/10 rounded-lg border-2 border-[#1873CC]/20">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Global Coverage</h3>
                <p className="text-gray-600">Access talent from 15+ countries ensuring competitive advantage</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#C0C0C0]/10 to-[#808080]/10 rounded-lg border-2 border-[#C0C0C0]/20">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">All legal, visa, and regulatory requirements handled by our experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
