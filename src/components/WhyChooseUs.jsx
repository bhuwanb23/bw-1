import { useState, useEffect } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const reasons = [
  {
    id: 1,
    title: 'Elite Talent',
    description: '10+ Years Experience',
    impact: 95
  },
  {
    id: 2,
    title: 'Lightning Fast',
    description: '50% Faster Delivery',
    impact: 85
  },
  {
    id: 3,
    title: 'Future Proof',
    description: 'Scalable Architecture',
    impact: 90
  },
  {
    id: 4,
    title: 'Full Support',
    description: '24/7 Maintenance',
    impact: 100
  }
]

const stats = [
  { id: 1, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { id: 2, value: 50, suffix: '+', label: 'Projects Delivered' },
  { id: 3, value: 24, suffix: '/7', label: 'Support Available' },
  { id: 4, value: 10, suffix: '+', label: 'Years Experience' }
]

// Simple animated counter component
const AnimatedCounter = ({ target, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = target / (duration / 50)
      let current = 0
      const counter = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, 50)
      return () => clearInterval(counter)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [target, duration, delay])
  
  return <span>{count}</span>
}

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [animatedStats, setAnimatedStats] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
      
      <div className="relative">
        <Reveal className="text-center mb-8" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-3 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>The Nulfinity Advantage</span>
          </div>
          <h2 className={`${SECTION_HEADING} mb-3`}>
            Why choose{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Nulfinity?
            </span>
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto font-light">
            We craft digital experiences that drive real business results.
          </p>
        </Reveal>

        {/* Compact Reason Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.id}
              as="div"
              delay={index * 100}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border border-white/8 bg-black/40 p-3 backdrop-blur-sm text-center transition-all duration-500 hover:border-white/20 hover:bg-black/60 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs font-bold text-purple-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {reason.description}
                  </p>
                  
                  {/* Compact Progress Bar */}
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-white/60">Impact</span>
                      <span className="text-xs font-semibold text-purple-300">{reason.impact}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${reason.impact}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats Only */}
        <Reveal className="text-center" delay={400}>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 p-4 md:p-6 backdrop-blur-xl max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10" />
            
            <div className="relative">
              <div className="grid gap-4 md:grid-cols-4 text-center">
                {stats.map((stat, index) => (
                  <div key={stat.id} className="group cursor-pointer">
                    <div className="text-xl font-bold text-white mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-400">
                      <AnimatedCounter target={stat.value} duration={2000} delay={index * 200} />
                      {stat.suffix}
                    </div>
                    <div className="text-white/60 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default WhyChooseUs