import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ServicesHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.35) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/18 via-purple-500/14 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60 mb-7 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>Services</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-[1.05]">
            Engineering systems that
            <span className="gradient-text-animated"> ship </span>
            and scale.
          </h1>

          <p className="mt-5 max-w-3xl text-base md:text-lg text-white/70">
            A blueprint-first approach to building web platforms, mobile apps, cloud infrastructure, and AI products—with predictable delivery and measurable outcomes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#service-specs"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
            >
              View service specs
            </a>
            <Link
              to="/proposal"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-pink-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:from-purple-600 hover:via-pink-600 hover:to-pink-700 hover:shadow-[0_8px_25px_rgba(236,72,153,0.3)]"
            >
              Request a proposal
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Delivery</p>
              <p className="mt-1 text-sm text-white/80">Weekly demos + clear checkpoints</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Quality</p>
              <p className="mt-1 text-sm text-white/80">Testing, reviews, and observability</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Ownership</p>
              <p className="mt-1 text-sm text-white/80">Docs + handover you can maintain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero