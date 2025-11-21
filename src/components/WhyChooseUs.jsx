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
                className={`group relative h-44 rounded-xl overflow-hidden border border-white/10 bg-transparent backdrop-blur-none p-5 transition-all duration-500 flex flex-col ${
                  hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm opacity-70' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: hoveredIndex === index ? 'translateY(-5px)' : 'none',
                  transition: 'transform 0.3s ease, filter 0.3s ease'
                }}
              >
                {/* Enhanced gradient background that shows prominently on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 transition-all duration-500 group-hover:opacity-20 rounded-xl`}></div>
                
                {/* Additional gradient overlay for more depth */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${reason.color} opacity-0 transition-all duration-700 group-hover:opacity-10 rounded-xl`}></div>
                
                {/* White circular background shape on hover */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-10`}></div>
                
                <div className="relative flex flex-col h-full">
                  {/* Icon and Number Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <div className={`text-2xl`}>{reason.icon}</div>
                    <div className={`inline-flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-br ${reason.color} text-white font-bold text-xs`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-base font-bold text-white mb-1">{reason.title}</h3>
                    <p className="text-white/70 text-xs mb-3">{reason.description}</p>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-white/60">Impact</span>
                        <span className={`text-xs font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>{reason.impact}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${reason.color} h-1.5 rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ 
                            width: `${reason.impact}%`,
                            transitionDelay: `${index * 200}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
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