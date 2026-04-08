'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function ApproachHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#2B2B2B] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop')`,
        }}
      ></div>

      <div className="relative z-10 flex items-center pt-20 md:pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-aos="fade-right" className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Our Strategic{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D60000] to-[#9B0000]">
                    Approach
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  We combine industry expertise, global networks, and personalized strategies to deliver recruitment solutions that drive your business success.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-[#D60000]/50 transition">
                  <span className="text-3xl flex-shrink-0">🎯</span>
                  <div>
                    <h3 className="text-red-950 font-bold text-lg mb-1">Strategic Planning</h3>
                    <p className="text-red-800">Customized recruitment strategies aligned with your business objectives and growth plans</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-[#D60000]/50 transition">
                  <span className="text-3xl flex-shrink-0">🌐</span>
                  <div>
                    <h3 className="text-blue-950 font-bold text-lg mb-1">Global Network</h3>
                    <p className="text-blue-800">Access to a vast pool of pre-screened candidates across multiple countries and industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-[#D60000]/50 transition">
                  <span className="text-3xl flex-shrink-0">✅</span>
                  <div>
                    <h3 className="text-green-950 font-bold text-lg mb-1">Quality Assurance</h3>
                    <p className="text-green-800">Rigorous vetting and screening processes ensuring only the best candidates reach you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div data-aos="fade-left" className="relative h-96 md:h-[600px]">
              <div
                className="w-full h-full rounded-xl shadow-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop')`,
                }}
              ></div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#0A0A0A]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
