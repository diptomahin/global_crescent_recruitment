import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import useAos from '../../hooks/useAos'

const navItems = [
  { label: 'Home', href: '/' },
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
          ? 'bg-white py-2 shadow-2xl'
          : 'bg-white py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="transition hover:opacity-80" data-aos="fade-down">
            <img
              src="/GCR-3.png"
              alt="Global Crescent Recruitment"
              className="h-20 w-48 sm:h-20 sm:w-56 object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex" data-aos="fade-down" data-aos-delay="80">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `group relative text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-gray-800' : 'text-gray-600 hover:text-gray-800'
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
            className="rounded-md p-2 text-gray-800 transition hover:text-red-500 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            data-aos="fade-down"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 mt-4 border-t border-gray-300 bg-white pb-4 shadow-lg lg:hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mt-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 transition-all duration-300 font-medium ${
                        isActive
                          ? 'bg-gradient-to-r from-[#D60000] to-[#9B0000] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
