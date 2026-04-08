'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Approach', href: '/our-approach' },
    { label: 'Employers', href: '/employers' },
    { label: 'Workers & Agencies', href: '/workers' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4a] shadow-2xl py-2'
          : 'bg-gradient-to-r from-[#2d7a4a] to-[#3d8f5a] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="relative h-10 w-10">
              <Image
                src="/Global-Crescent-recruitment-Ltd-PNG.png"
                alt="Global Crescent Logo"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-[#D60000] font-bold text-sm leading-3">Global Crescent</p>
              <p className="text-[#C0C0C0] text-xs">Recruitment</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-all duration-300 relative group ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-gray-100 hover:text-white'
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-red-500 transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-green-400">
            <div className="flex flex-col gap-3 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-red-600 text-white font-bold'
                      : 'text-gray-100 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
