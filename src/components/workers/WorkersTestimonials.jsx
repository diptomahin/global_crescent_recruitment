'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function WorkersTestimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      name: 'Muhammad Ali',
      role: 'Construction Supervisor',
      country: 'UAE',
      image: '👨‍💼',
      text: 'Global Crescent helped me secure a great job in Dubai. The entire process was smooth and they supported me every step of the way. Excellent service!',
      rating: 5,
    },
    {
      name: 'Fatima Hassan',
      role: 'Healthcare Professional',
      country: 'UK',
      image: '👩‍⚕️',
      text: 'I never thought I could work abroad, but GCR made it possible. Their support team is amazing and they truly care about their workers.',
      rating: 5,
    },
    {
      name: 'Ahmed Khan',
      role: 'IT Specialist',
      country: 'Canada',
      image: '👨‍💻',
      text: 'Best decision ever! Got placed in a top tech company with great salary. The flexibility and support system is outstanding.',
      rating: 5,
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Hospitality Manager',
      country: 'Germany',
      image: '👩‍💼',
      text: 'Professional, reliable, and trustworthy. They handled all the paperwork and made the immigration process hassle-free.',
      rating: 5,
    },
    {
      name: 'Rajesh Patel',
      role: 'Manufacturing Technician',
      country: 'Netherlands',
      image: '👨‍🔧',
      text: 'GCR provided excellent training before my placement. I felt confident and well-prepared for my new role. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Amina Ahmed',
      role: 'Nurse',
      country: 'Australia',
      image: '👩‍⚕️',
      text: 'The entire team is supportive and responsive. They continue to check on my well-being even after placement. Truly exceptional service.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories from Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
              Workers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who've transformed their careers with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3)}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#D60000] hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-[#D60000] font-semibold">{testimonial.country}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
