import { useState, useEffect } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const reasons = [
  {
    id: 1,
    title: 'Elite Talent',
    description: '10+ Years Experience',
    impact: 95,
    color: 'from-purple-500 to-pink-500',
    icon: '🌟'
  },
  {
    id: 2,
    title: 'Lightning Fast',
    description: '50% Faster Delivery',
    impact: 85,
    color: 'from-blue-500 to-cyan-500',
    icon: '⚡'
  },
  {
    id: 3,
    title: 'Future Proof',
    description: 'Scalable Architecture',
    impact: 90,
    color: 'from-emerald-500 to-teal-500',
    icon: '🚀'
  },
  {
    id: 4,
    title: 'Full Support',
    description: '24/7 Maintenance',
    impact: 100,
    color: 'from-amber-500 to-orange-500',
    icon: '🛠️'
  }
]

const stats = [
  { id: 1, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { id: 2, value: 50, suffix: '+', label: 'Projects Delivered' },
  { id: 3, value: 24, suffix: '/7', label: 'Support Available' },
  { id: 4, value: 10, suffix: '+', label: 'Years Experience' }
]

// Enhanced animated counter component with smoother animation
const AnimatedCounter = ({ target, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0
      const increment = target / (duration / 16)
      
      const counter = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
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
    <section className="py-16 md:py-24 relative">
      <div className="relative container mx-auto px-6">
        <Reveal className="text-center mb-16" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>The Innovexex Advantage</span>
          </div>
          
          <h2 className={`${SECTION_HEADING} mb-6`}>
            Why choose{' '}
            <span className="gradient-text-animated">
              Innovexex?
            </span>
          </h2>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            We craft digital experiences that drive real business results.
          </p>
        </Reveal>

        {/* Cards with enhanced gradient backgrounds on hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.id}
              as="div"
              delay={index * 100}
              className="flex-shrink-0"
            >
              <div 
                className={`group relative h-44 rounded-xl overflow-hidden border transition-all duration-500 flex flex-col cursor-pointer ${
                  hoveredIndex === index 
                    ? 'border-white/30 bg-gradient-to-br from-white/10 via-black/40 to-black/30 backdrop-blur-xl scale-105 shadow-2xl z-10' 
                    : 'border-white/10 bg-black/20 backdrop-blur-sm'
                } ${
                  hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm opacity-50 scale-95' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect that intensifies on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${reason.color} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-40 rounded-xl`}></div>
                
                {/* Enhanced gradient background that shows prominently on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 transition-all duration-500 group-hover:opacity-25 rounded-xl`}></div>
                
                {/* Additional gradient overlay for more depth */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${reason.color} opacity-0 transition-all duration-700 group-hover:opacity-15 rounded-xl`}></div>
                
                {/* Animated radial gradient on hover */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r ${reason.color} opacity-0 transition-all duration-700 group-hover:opacity-20 group-hover:scale-150 blur-2xl`}></div>
                
                {/* Shimmer effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:animate-shimmer`} style={{
                  backgroundSize: '200% 100%'
                }}></div>
                
                {/* Inner glow border */}
                <div className={`absolute inset-[1px] rounded-xl border border-white/0 transition-all duration-500 group-hover:border-white/20`}></div>
                
                <div className="relative flex flex-col h-full z-10">
                  {/* Icon and Number Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <div className={`text-2xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>{reason.icon}</div>
                    <div className={`inline-flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-br ${reason.color} text-white font-bold text-xs transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-current`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-base font-bold text-white mb-1 transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:via-white group-hover:to-white/80">{reason.title}</h3>
                    <p className="text-white/70 text-xs mb-3 transition-all duration-500 group-hover:text-white/90">{reason.description}</p>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-white/60 transition-all duration-500 group-hover:text-white/80">Impact</span>
                        <span className={`text-xs font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110`}>{reason.impact}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden transition-all duration-500 group-hover:bg-white/20">
                        <div 
                          className={`bg-gradient-to-r ${reason.color} h-1.5 rounded-full transition-all duration-1000 ease-out relative group-hover:h-2`}
                          style={{ 
                            width: `${reason.impact}%`,
                            transitionDelay: `${index * 200}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse group-hover:bg-white/50"></div>
                          {/* Glow effect on progress bar */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats Section */}
        <Reveal className="text-center" delay={400}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8 backdrop-blur-xl max-w-3xl mx-auto">
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
    </section>
  )
}

export default WhyChooseUs