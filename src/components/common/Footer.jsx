'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-[#0A0A0A] to-[#2B2B2B] text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo & Contact */}
          <div data-aos="fade-up">
            <div className="mb-4">
              <div className="relative h-24 w-56 flex-shrink-0">
                <Image
                  src="/gcr_logo.png"
                  alt="Global Crescent"
                  fill
                  className="object-contain"
                  sizes="224px"
                />
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="break-words">📧 Info@gcrecruitmentltd.com</p>
              <p className="break-words">📧 Support@gcrecruitmentltd.com</p>
              <p>📱 +44 7493 478440</p>
            </div>
            <div className="flex gap-3 mt-4 flex-wrap">
              <a href="#" className="hover:text-red-300 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-red-300 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="hover:text-red-300 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.834 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-red-300 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.25-.129.599-.129.948v5.421h-3.554s.047-8.733 0-9.637h3.554v1.364c.429-.658 1.196-1.593 2.905-1.593 2.12 0 3.708 1.38 3.708 4.35v5.516zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.708 0-.956.77-1.708 1.963-1.708 1.192 0 1.915.751 1.922 1.708 0 .95-.73 1.708-1.97 1.708zm1.582 11.02H3.635V9.815h3.284v10.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-red-300 transition">
                  Recruitment Process
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300 transition">
                  Mediation in Employment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300 transition">
                  Temporary Recruitment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300 transition">
                  Legal Assurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-300 transition">
                  Immigration Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-bold mb-4">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" onClick={handleNavClick} className="hover:text-red-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={handleNavClick} className="hover:text-red-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleNavClick} className="hover:text-red-300 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/employers" onClick={handleNavClick} className="hover:text-red-300 transition">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/workers" onClick={handleNavClick} className="hover:text-red-300 transition">
                  For Workers
                </Link>
              </li>
              <li>
                <Link href="/industries" onClick={handleNavClick} className="hover:text-red-300 transition">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/our-approach" onClick={handleNavClick} className="hover:text-red-300 transition">
                  Our Approach
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Pages */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-bold mb-4">Important Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-300 transition">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#D60000] pt-6 sm:pt-8 text-center text-xs sm:text-sm text-[#C0C0C0]">
          <p>© 2024-2026 Global Crescent Recruitment. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
