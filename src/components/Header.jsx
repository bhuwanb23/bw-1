import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '#portfolio' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-5 z-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      <header className="header-fade relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-white/90 transition-colors duration-200 hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-sky-400 text-xs font-bold text-white shadow-[0_0_18px_rgba(59,130,246,0.7)]">
            NF
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 sm:text-[11px] sm:tracking-[0.22em]">Nulfinity</span>
            <span className="text-xs text-white/80">Custom Software Studio</span>
          </span>
        </Link>

        {/* Hamburger Menu Button - Visible on mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden items-center gap-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 sm:gap-5 sm:text-[11px] sm:tracking-[0.18em] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-full px-2 py-1 transition-all duration-200 hover:bg-white/8 hover:text-white sm:px-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="#contact"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_20px_rgba(56,189,248,0.7)] transition-transform duration-200 hover:scale-[1.02] sm:text-[11px] sm:tracking-[0.22em] sm:px-5 md:inline-flex"
        >
          <span>Request a Proposal</span>
        </Link>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/90 backdrop-blur-xl z-30 transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full w-full px-6">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-2xl font-medium uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link
            to="#contact"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 px-6 py-3 text-base font-semibold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-transform duration-300 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

export default Header