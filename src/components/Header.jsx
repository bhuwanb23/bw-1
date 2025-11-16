const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#portfolio' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  return (
    <div className="fixed inset-x-0 top-5 z-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      <header className="header-fade relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#hero"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-white/90 transition-colors duration-200 hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-sky-400 text-xs font-bold text-white shadow-[0_0_18px_rgba(59,130,246,0.7)]">
            NF
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">Nulfinity</span>
            <span className="text-xs text-white/80">Custom Software Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1 transition-all duration-200 hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_0_24px_rgba(56,189,248,0.7)] transition-transform duration-200 hover:scale-[1.02]"
        >
          <span>Request a Proposal</span>
        </a>

        <a
          href="#contact"
          className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-xl"
        >
          <span>Contact</span>
        </a>
      </header>
      <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

export default Header

