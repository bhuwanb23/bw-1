import { useState } from 'react'

const serviceCategories = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke applications designed for your unique business needs.',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Artificial Intelligence & ML Solutions',
    description: 'Smart systems that learn and adapt to transform your business.',
    icon: '🤖',
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Modern infrastructure for efficient software delivery.',
    icon: '☁️',
    color: 'from-sky-500 to-blue-500'
  },
  {
    title: 'API Development & Integrations',
    description: 'Seamless connectivity between your systems and services.',
    icon: '🔗',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that delight users and drive engagement.',
    icon: '🎨',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Open-Source Development',
    description: 'Contributing tools that benefit the global developer community.',
    icon: '🔧',
    color: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Automation Tools',
    description: 'Streamline operations with intelligent automation solutions.',
    icon: '⚙️',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'SaaS Product Development',
    description: 'End-to-end development of scalable software products.',
    icon: '🚀',
    color: 'from-indigo-500 to-purple-500'
  }
]

const ServiceCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])

  // Staggered entrance animation
  useState(() => {
    const timers = serviceCategories.map((_, index) => {
      return setTimeout(() => {
        setVisibleCards(prev => [...prev, index])
      }, index * 100)
    })
    
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${20 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Service Categories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-6 transition-all duration-500 hover:border-white/20 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'translateY(-15px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index ? `0 0 40px -15px rgba(192, 132, 252, 0.4)` : 'none',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease'
              }}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-20 rounded-2xl`}></div>
              
              {/* Animated decorative elements */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl transition-all duration-700 group-hover:opacity-20 group-hover:scale-150`}></div>
              <div className={`absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-15 blur-2xl transition-all duration-700 group-hover:opacity-30 group-hover:scale-125`}></div>
              
              {/* Icon container with 3D effect */}
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-black/60 to-black/40 mb-6 border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-3xl transition-all duration-300 group-hover:scale-110">{service.icon}</span>
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm transition-all duration-300 group-hover:text-white/90">
                  {service.description}
                </p>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(15px, 15px);
          }
          50% {
            transform: translate(-10px, 10px);
          }
          75% {
            transform: translate(10px, -15px);
          }
        }
      `}</style>
    </section>
  )
}

export default ServiceCategories