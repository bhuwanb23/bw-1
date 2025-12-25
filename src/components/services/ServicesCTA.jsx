import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ServicesCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setIsVisible(true)
    
    // Generate particles
    const newParticles = [...Array(18)].map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${20 + Math.random() * 15}s`
    }))
    
    setParticles(newParticles)
  }, [])

  return (
    <section className="py-14 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />

        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/18 to-purple-500/14"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left,
              animation: `float ${particle.animationDuration} infinite ease-in-out`,
              animationDelay: particle.animationDelay,
            }}
          />
        ))}

        <div className="absolute -bottom-28 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/14 via-purple-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl border border-white/10 bg-black/30 backdrop-blur-2xl p-7 md:p-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>Next step</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Tell us what you’re building. We’ll respond with a plan.
              </h2>
              <p className="mt-3 text-white/70 max-w-2xl">
                Share goals, constraints, and timelines. We’ll suggest the right service track and an execution roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/proposal"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
              >
                Request a proposal
              </Link>
              <Link
                to="/proposal"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 transition-all duration-300 hover:bg-white/10"
              >
                Book a consult
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, 10px) scale(1.1);
          }
          50% {
            transform: translate(-10px, 15px) scale(0.9);
          }
          75% {
            transform: translate(15px, -10px) scale(1.2);
          }
        }
      `}</style>
    </section>
  )
}

export default ServicesCTA