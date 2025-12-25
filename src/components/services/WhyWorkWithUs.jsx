import { useState, useEffect } from 'react'

const advantages = [
  {
    title: 'Quality',
    description: 'We deliver pixel-perfect solutions with rigorous testing and quality assurance.',
    icon: '✅',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Speed',
    description: 'Rapid development cycles without compromising on quality or functionality.',
    icon: '⚡',
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Scalability',
    description: 'Solutions designed to grow with your business and adapt to changing needs.',
    icon: '📈',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Expertise',
    description: 'Deep technical knowledge across multiple domains and cutting-edge technologies.',
    icon: '🧠',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Support',
    description: 'Comprehensive post-launch support and maintenance for long-term success.',
    icon: '🛠️',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of trends to deliver forward-thinking solutions.',
    icon: '🚀',
    color: 'from-indigo-500 to-purple-500'
  }
]

const WhyWorkWithUs = () => {
  const [visibleAdvantages, setVisibleAdvantages] = useState([])

  useEffect(() => {
    const timers = advantages.map((_, index) => {
      return setTimeout(() => {
        setVisibleAdvantages(prev => [...prev, index])
      }, index * 200)
    })
    
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
            backgroundSize: '84px 84px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60 mb-5 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>Why us</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold text-white">Operating principles, not buzzwords.</h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            What you can expect during delivery—and what we optimize for when trade-offs show up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-xl p-6 transition-all duration-500 ${
                visibleAdvantages.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Principle</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{advantage.title}</h3>
                  </div>
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center text-xl opacity-90`}>
                    {advantage.icon}
                  </div>
                </div>
                
                <p className="mt-3 text-white/70">{advantage.description}</p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <p className="mt-4 text-xs text-white/60">
                  Standard: documented decisions, measurable checkpoints, and hand-off readiness.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs