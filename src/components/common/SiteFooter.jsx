import { Link } from 'react-router-dom'
import useAos from '../../hooks/useAos'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Employers', href: '/employers' },
  { label: 'Workers & Agencies', href: '/workers' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact Us', href: '/contact' },
]

export default function SiteFooter() {
  useAos({ duration: 700 })

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-[#0A0A0A] to-[#2B2B2B] pb-8 pt-12 text-white sm:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div data-aos="fade-up">
          <div className="mb-4">
            <img
              src="/gcr_logo.png"
              alt="Global Crescent Recruitment"
              className="h-20 w-56 object-contain"
            />
          </div>
          <div className="space-y-2 text-sm text-white/80">
            <p>Info@gcrecruitmentltd.com</p>
            <p>Support@gcrecruitmentltd.com</p>
            <p>+44 7493 478440</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="80">
          <h3 className="mb-4 text-lg font-bold">Services</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Talent sourcing and screening</li>
            <li>Cross-border hiring support</li>
            <li>Visa and compliance coordination</li>
            <li>Worker onboarding and integration</li>
            <li>Long-term staffing partnerships</li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="160">
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href} onClick={handleNavClick} className="text-white/80 transition hover:text-red-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="240">
          <h3 className="mb-4 text-lg font-bold">Offices</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Shenzhen, China</li>
            <li>Pan-European Coverage</li>
            <li>Serving EU & China Markets</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-[#D60000] px-4 pt-6 text-center text-xs text-[#C0C0C0] sm:px-6 sm:text-sm lg:px-8" data-aos="fade-up">
        Copyright 2024-2026 Global Crescent Recruitment. All rights reserved.
      </div>
    </footer>
  )
}
