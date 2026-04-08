'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

export default function HomeCountries() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const countries = [
    { name: 'Albania', code: 'al' },
    { name: 'Belarus', code: 'by' },
    { name: 'Bosnia', code: 'ba' },
    { name: 'Bulgaria', code: 'bg' },
    { name: 'Estonia', code: 'ee' },
    { name: 'Germany', code: 'de' },
    { name: 'Greece', code: 'gr' },
    { name: 'Hungary', code: 'hu' },
    { name: 'Latvia', code: 'lv' },
    { name: 'Lithuania', code: 'lt' },
    { name: 'Macedonia', code: 'mk' },
    { name: 'Montenegro', code: 'me' },
    { name: 'Malta', code: 'mt' },
    { name: 'Moldova', code: 'md' },
    { name: 'Serbia', code: 'rs' },
    { name: 'Cyprus', code: 'cy' },
    { name: 'Romania', code: 'ro' },
    { name: 'Croatia', code: 'hr' },
    { name: 'UAE', code: 'ae' },
    { name: 'Qatar', code: 'qa' },
    { name: 'Oman', code: 'om' },
    { name: 'India', code: 'in' },
    { name: 'Bangladesh', code: 'bd' },
    { name: 'Nepal', code: 'np' },
    { name: 'Sri Lanka', code: 'lk' },
    { name: 'Malaysia', code: 'my' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#2B2B2B] to-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global Reach, {' '}
            <span className="text-[#D60000]">Local Expertise</span>
          </h2>
          <p className="text-lg text-white">We operate in 25+ countries providing seamless recruitment solutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {countries.map((country, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={50 * (index % 6)}
              className="bg-inherit bg-opacity-10 backdrop-blur-md p-3 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition text-center min-h-[100px] flex flex-col items-center justify-center"
            >
              <div className="relative w-14 h-10 mb-2">
                <Image
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={country.name}
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
              <p className="text-xs font-semibold text-white leading-tight">{country.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
