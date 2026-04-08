'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function WorkersProcess() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Journey to Global{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Employment
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A simple 6-step process from application to successful placement
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#D60000] to-[#9B0000] transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[
              {
                step: '1',
                title: 'Register & Profile',
                description: 'Create your profile with qualifications and experience',
              },
              {
                step: '2',
                title: 'Skills Assessment',
                description: 'Take our comprehensive skills and language tests',
              },
              {
                step: '3',
                title: 'Job Matching',
                description: 'Browse opportunities matching your skills and preferences',
              },
              {
                step: '4',
                title: 'Interview & Selection',
                description: 'Meet potential employers and showcase your abilities',
              },
              {
                step: '5',
                title: 'Documentation',
                description: 'We handle visas, work permits, and legal requirements',
              },
              {
                step: '6',
                title: 'Deployment',
                description: 'Pre-boarding training and seamless relocation support',
              },
            ].map((item, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={100 * index} className="relative">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center hover:border-[#D60000]/50 transition-all">
                  <div className="relative z-10 mx-auto w-12 h-12 bg-gradient-to-br from-[#D60000] to-[#9B0000] rounded-full flex items-center justify-center text-lg font-bold mb-4 border-4 border-[#0A0A0A]">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
