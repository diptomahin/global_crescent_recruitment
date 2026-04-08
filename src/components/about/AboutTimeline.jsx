'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AboutTimeline() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const milestones = [
    {
      year: '2010',
      title: 'Foundation & Launch',
      description: 'Global Crescent Recruitment was established with a vision to revolutionize international staffing and provide world-class recruitment services.',
      position: 'left',
    },
    {
      year: '2014',
      title: 'Regional Expansion',
      description: 'Expanded operations across Eastern Europe and Asia, establishing offices in key markets to better serve our clients.',
      position: 'right',
    },
    {
      year: '2018',
      title: 'Industry Recognition',
      description: 'Recognized as a leading recruitment partner with over 1000+ successful placements and 150+ satisfied corporate clients.',
      position: 'left',
    },
    {
      year: '2022',
      title: 'Global Growth',
      description: 'Achieved milestone of 1300+ workers placed globally and expanded services to 15+ countries across Europe and Asia.',
      position: 'right',
    },
    {
      year: '2024',
      title: 'Digital Innovation',
      description: 'Launched advanced AI-powered recruitment platform and mobile application for enhanced candidate matching and client experience.',
      position: 'left',
    },
    {
      year: '2026',
      title: 'Future Vision',
      description: 'Committed to becoming the leading global recruitment partner with sustainable practices and innovative workforce solutions.',
      position: 'right',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f5f5f5] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Company{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-600">A journey of growth, innovation, and excellence</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D60000] to-[#9B0000]"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} data-aos={milestone.position === 'left' ? 'fade-right' : 'fade-left'}>
                <div className={`flex ${milestone.position === 'left' ? 'flex-row-reverse' : 'flex-row'} items-center gap-8`}>
                  {/* Content */}
                  <div className="w-5/12">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#D60000] hover:shadow-2xl transition-shadow">
                      <div className="text-sm font-bold text-[#D60000] mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-[#D60000] rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statement at bottom */}
        <div data-aos="fade-up" className="mt-16 text-center bg-gradient-to-r from-[#D60000]/10 to-[#9B0000]/10 p-8 rounded-xl border border-[#D60000]/20">
          <p className="text-xl text-gray-700 leading-relaxed">
            Today, Global Crescent Recruitment continues to innovate and expand, maintaining our commitment to excellence,
            <span className="font-bold text-[#D60000]"> integrity, and client success </span>
            in every engagement. Join us in shaping the future of global recruitment.
          </p>
        </div>
      </div>
    </section>
  );
}
