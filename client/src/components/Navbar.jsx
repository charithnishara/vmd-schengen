import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Visa Info', href: '#visa-info' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg' : 'bg-primary/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 flex-shrink-0">
          <img src="/logo.png" alt="VMD Group" className="h-10 w-10 rounded-full border-2 border-gold object-cover" />
          <div className="hidden sm:block">
            <div className="text-cream font-semibold text-sm leading-tight">VMD Group of Companies</div>
            <div className="text-cream/60 text-xs italic">change for the future</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/80 hover:text-cream text-sm font-medium transition-colors duration-150 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-gold hover:bg-gold-light text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary-dark border-t border-white/10">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-cream/80 hover:text-cream hover:bg-primary-light text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 py-4 border-t border-white/10 flex flex-col gap-2">
            <a href="tel:+442033939445" className="flex items-center gap-2 text-cream/70 text-sm">
              <FiPhone size={14} /> +44 2033 939445
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
