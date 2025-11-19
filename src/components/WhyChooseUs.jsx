import { useState, useEffect } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const reasons = [
  {
    id: 1,
    title: 'Elite Talent',
    description: '10+ Years Experience',
    impact: 95,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Lightning Fast',
    description: '50% Faster Delivery',
    impact: 85,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Future Proof',
    description: 'Scalable Architecture',
    impact: 90,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 4,
    title: 'Full Support',
    description: '24/7 Maintenance',
    impact: 100,
    color: 'from-amber-500 to-orange-500'
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
      
      <div className="relative">
        <Reveal className="text-center mb-16" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>The Nulfinity Advantage</span>
          </div>
          <h2 className={`${SECTION_HEADING} mb-6`}>
            Why choose{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Nulfinity?
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            We craft digital experiences that drive real business results.
          </p>
        </Reveal>

        {/* Fixed Width Smaller Gradient Cards with proper horizontal scrolling */}
        <div className="relative">
          <div className="overflow-x-auto pb-6 scrollbar-hide px-6 md:px-8">
            <div className="flex gap-5" style={{ minWidth: 'max-content', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
              {reasons.map((reason, index) => (
                <Reveal
                  key={reason.id}
                  as="div"
                  delay={index * 150}
                  className="flex-shrink-0"
                >
                  <div 
                    className="group relative w-64 h-48 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-4 transition-all duration-500 hover:border-white/20"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Gradient Background Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 transition-opacity duration-500 group-hover:opacity-20 rounded-xl`}></div>
                    
                    {/* Decorative Circles */}
                    <div className={`absolute top-3 right-3 w-12 h-12 rounded-full bg-gradient-to-br ${reason.color} opacity-10 blur-xl`}></div>
                    <div className={`absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br ${reason.color} opacity-15 blur-xl`}></div>
                    
                    <div className="relative h-full flex flex-col">
                      {/* Number Badge */}
                      <div className="flex justify-between items-start mb-3">
                        <div className={`inline-flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-br ${reason.color} text-white font-bold text-xs`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${reason.color} ${hoveredIndex === index ? 'animate-pulse' : ''}`}></div>
                      </div>
                      
                      <div className="mt-auto">
                        <h3 className="text-base font-bold text-white mb-1">{reason.title}</h3>
                        <p className="text-white/70 text-xs">{reason.description}</p>
                        
                        {/* Progress Bar */}
                        <div className="mt-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[10px] text-white/60">Impact</span>
                            <span className={`text-xs font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>{reason.impact}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div 
                              className={`bg-gradient-to-r ${reason.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: `${reason.impact}%`,
                                transitionDelay: `${index * 200}ms`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Smaller Stats Section */}
        <Reveal className="text-center" delay={600}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-6 md:p-8 backdrop-blur-xl max-w-3xl mx-auto mt-12">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10" />
            
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                By The Numbers
              </h3>
              
              <div className="grid gap-6 md:grid-cols-4 text-center">
                {stats.map((stat, index) => (
                  <div key={stat.id} className="group cursor-pointer">
                    <div className="text-3xl font-bold text-white mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-400">
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
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default WhyChooseUs