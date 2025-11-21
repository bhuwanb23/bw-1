import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 top-5 z-40 transition-all duration-500 ${isScrolled ? 'top-2' : 'top-5'}`}>
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-xl transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-2xl' : 'bg-black/80 backdrop-blur-xl'}`} />
      <header className={`header-fade relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 transition-all duration-500 ${isScrolled ? 'py-2 backdrop-blur-2xl' : 'py-3'} sm:px-6 md:px-8`}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-white/90 transition-all duration-300 hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-sky-400 text-xs font-bold text-white shadow-[0_0_18px_rgba(59,130,246,0.7)] transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.9)]">
            NF
          </span>
          <span className="hidden flex-col leading-tight sm:flex transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 sm:text-[11px] sm:tracking-[0.22em]">Nulfinity</span>
            <span className="text-xs text-white/80">Custom Software Studio</span>
          </span>
        </Link>

        {/* Hamburger Menu Button - Visible on mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} group-hover:w-7`}></span>
          <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'} group-hover:w-7`}></span>
          <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} group-hover:w-7`}></span>
        </button>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden items-center gap-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60 sm:gap-2 sm:text-[11px] sm:tracking-[0.18em] md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              className="relative rounded-full px-3 py-2 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-300">
                {link.label}
              </span>
              {/* Animated background glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
              {/* Animated border */}
              <span className="absolute inset-0 border border-white/0 group-hover:border-white/30 rounded-full transition-all duration-300"></span>
              {/* Animated shine effect */}
              <span className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden">
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full"></span>
              </span>
            </Link>
          ))}
        </nav>

        <Link
          to="#contact"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_20px_rgba(56,189,248,0.7)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(56,189,248,0.9)] sm:text-[11px] sm:tracking-[0.22em] sm:px-5 md:inline-flex group"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-1">Request a Proposal</span>
          <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/90 backdrop-blur-2xl z-30 transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full w-full px-6">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative text-2xl font-medium uppercase tracking-widest text-white/80 hover:text-white transition-all duration-300 overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Animated background */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                {/* Animated shine effect */}
                <span className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full"></span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link
            to="#contact"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 px-6 py-3 text-base font-semibold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(56,189,248,0.9)] group"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="transition-transform duration-300 group-hover:translate-x-1">Contact Us</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <div className={`mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 ${isScrolled ? 'opacity-50' : 'opacity-100'}`} />
    </div>
  )
}

export default Header