import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import useAos from '../../hooks/useAos'

const navItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Employers', href: '/employers' },
  { label: 'Workers & Agencies', href: '/workers' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact Us', href: '/contact' },
]

export default function SiteNavbar() {
  useAos({ duration: 650 })

  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-[#1a4d2e] to-[#2d7a4a] py-2 shadow-2xl'
          : 'bg-gradient-to-r from-[#2d7a4a] to-[#3d8f5a] py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition hover:opacity-80" data-aos="fade-down">
            <img
              src="/Global-Crescent-recruitment-Ltd-PNG.png"
              alt="Global Crescent Recruitment"
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-3 text-[#D60000]">Global Crescent</p>
              <p className="text-xs text-[#C0C0C0]">Recruitment</p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex" data-aos="fade-down" data-aos-delay="80">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `group relative text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-gray-100 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-md p-2 text-white transition hover:text-red-500 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            data-aos="fade-down"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 border-t border-green-400 pb-4 lg:hidden">
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `rounded px-4 py-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-red-600 font-bold text-white'
                        : 'text-gray-100 hover:bg-green-500 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
