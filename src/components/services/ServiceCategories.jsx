import { useState, useEffect } from 'react'

const serviceCategories = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Bespoke applications designed for your unique business needs and challenges.',
    icon: '💻',
    emoji: '🔧',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    features: ['Enterprise Architecture', 'Microservices', 'API-First', 'CI/CD'],
    metrics: { projects: 200, satisfaction: 98 },
    pattern: 'M10 10 L30 30 M20 10 L40 30 M30 10 L50 30'
  },
  {
    id: 2,
    title: 'Web Application Development',
    description: 'Modern, responsive web solutions built with cutting-edge technologies.',
    icon: '🌐',
    emoji: '🖥️',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    features: ['Progressive Web Apps', 'SPA', 'SSR', 'Cross-Browser'],
    metrics: { apps: 150, performance: 95 },
    pattern: 'M10 20 Q20 5 30 20 T50 20 M10 30 Q20 15 30 30 T50 30'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    emoji: '📲',
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    features: ['Native Apps', 'Cross-Platform', 'Offline Mode', 'ASO'],
    metrics: { apps: 85, downloads: '2M+' },
    pattern: 'M10 10 C20 5 30 15 40 10 C50 5 60 15 70 10 M10 30 C20 25 30 35 40 30 C50 25 60 35 70 30'
  },
  {
    id: 4,
    title: 'API Development & Integrations',
    description: 'Seamless connectivity between your systems and third-party services.',
    icon: '🔗',
    emoji: '🔌',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    features: ['REST/GraphQL', '3rd-Party', 'Microservices', 'Real-Time Sync'],
    metrics: { apis: 300, uptime: '99.9%' },
    pattern: 'M10 20 L30 10 L50 20 L70 10 M10 30 L30 20 L50 30 L70 20'
  },
  {
    id: 5,
    title: 'Cloud Solutions & DevOps',
    description: 'Scalable cloud infrastructure and automated deployment pipelines.',
    icon: '☁️',
    emoji: '🌩️',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    features: ['Cloud Migration', 'IaC', 'Container Orchestration', 'Monitoring'],
    metrics: { systems: 120, efficiency: '+70%' },
    pattern: 'M20 10 Q30 5 40 10 Q50 15 60 10 M20 25 Q30 20 40 25 Q50 30 60 25 M20 40 Q30 35 40 40 Q50 45 60 40'
  },
  {
    id: 6,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that delight users and drive engagement.',
    icon: '🎨',
    emoji: '🖌️',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    features: ['User Research', 'Prototypes', 'Design Systems', 'Accessibility'],
    metrics: { designs: 250, usability: '+40%' },
    pattern: 'M10 20 Q20 10 30 20 Q40 30 50 20 Q60 10 70 20 M10 40 Q20 30 30 40 Q40 50 50 40 Q60 30 70 40'
  },
  {
    id: 7,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that learn and adapt to transform your business.',
    icon: '🤖',
    emoji: '🧠',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    features: ['Predictive Analytics', 'NLP', 'Computer Vision', 'Recommendations'],
    metrics: { models: 45, accuracy: '92%' },
    pattern: 'M20 10 C30 5 40 15 50 10 C60 5 70 15 80 10 M20 30 C30 25 40 35 50 30 C60 25 70 35 80 30 M20 50 C30 45 40 55 50 50 C60 45 70 55 80 50'
  },
  {
    id: 8,
    title: 'E-Commerce Solutions',
    description: 'Complete online retail platforms with payment integration and analytics.',
    icon: '🛒',
    emoji: '💳',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    features: ['Custom Platforms', 'Payment Gateways', 'Inventory Mgmt', 'Analytics'],
    metrics: { stores: 65, revenue: '+180%' },
    pattern: 'M10 10 L30 30 M30 10 L10 30 M50 10 L70 30 M70 10 L50 30'
  }
]

const ServiceCategories = () => {
  const [activeCard, setActiveCard] = useState(null)
  const [particles, setParticles] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [glitchEffect, setGlitchEffect] = useState(null)

  useEffect(() => {
    // Generate floating particles
    const newParticles = [...Array(50)].map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${25 + Math.random() * 15}s`,
      shape: Math.random() > 0.5 ? 'circle' : 'square'
    }))
    setParticles(newParticles)
    
    // Random glitch effect
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * serviceCategories.length)
      setGlitchEffect(randomIndex)
      setTimeout(() => setGlitchEffect(null), 300)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          particle.shape === 'circle' ? (
            <div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: particle.top,
                left: particle.left,
                animation: `float ${particle.animationDuration} infinite ease-in-out`,
                animationDelay: particle.animationDelay
              }}
            />
          ) : (
            <div
              key={particle.id}
              className="absolute bg-gradient-to-r from-blue-500/20 to-purple-500/20"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: particle.top,
                left: particle.left,
                animation: `float ${particle.animationDuration} infinite ease-in-out`,
                animationDelay: particle.animationDelay,
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
              }}
            />
          )
        ))}
        
        {/* Dynamic gradient based on mouse position */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent blur-3xl transition-all duration-1000"
          style={{
            top: mousePosition.y - 250,
            left: mousePosition.x - 250
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Quantum Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Innovation Dimensions
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Navigate through our multidimensional approach to digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((service, index) => (
            <div
              key={service.id}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-700 cursor-pointer transform-gpu ${
                activeCard === index
                  ? 'border-white/40 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-3xl scale-105 shadow-2xl z-10'
                  : 'border-white/10 bg-black/30 hover:border-white/20'
              } ${service.bgColor}`}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Glitch effect */}
              {glitchEffect === index && (
                <>
                  <div className="absolute inset-0 bg-red-500/10 transform translate-x-1 translate-y-1"></div>
                  <div className="absolute inset-0 bg-blue-500/10 transform -translate-x-1 -translate-y-1"></div>
                </>
              )}
              
              {/* SVG Pattern Background */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" className="absolute inset-0">
                  <pattern id={`pattern-${service.id}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d={service.pattern} stroke={`url(#gradient-${service.id})`} strokeWidth="1" fill="none" />
                  </pattern>
                  <linearGradient id={`gradient-${service.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.5)" />
                  </linearGradient>
                  <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${service.id})`} />
                </svg>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${
                activeCard === index ? 'opacity-30' : 'group-hover:opacity-20'
              } ${service.borderColor}`}></div>
              
              {/* Interactive light effect */}
              <div 
                className="absolute w-80 h-80 rounded-full bg-gradient-radial from-white/20 to-transparent blur-3xl transition-all duration-700"
                style={{
                  top: mousePosition.y - 160,
                  left: mousePosition.x - 160,
                  opacity: activeCard === index ? 0.4 : 0
                }}
              ></div>
              
              <div className="p-7 h-full flex flex-col relative z-10">
                {/* Icon container with 3D effect and hologram effect */}
                <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl mb-5 transform transition-all duration-500 ${
                  activeCard === index ? 'scale-110 rotate-6' : 'group-hover:scale-105'
                }`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent"></div>
                  <span className="relative z-10">{service.emoji}</span>
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-white/10 to-transparent blur-xl opacity-40"></div>
                  
                  {/* Hologram effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-30" style={{
                    background: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 2px,
                      rgba(255,255,255,0.1) 2px,
                      rgba(255,255,255,0.1) 4px
                    )`
                  }}></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 text-sm mb-5">{service.description}</p>
                
                {/* Metrics display with animated counters */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {Object.entries(service.metrics).map(([key, value]) => (
                    <div key={key} className="rounded-xl border border-white/10 bg-black/40 p-3 text-center backdrop-blur-sm">
                      <p className="text-xl font-bold text-white">{value}</p>
                      <p className="text-xs text-white/60 capitalize">{key}</p>
                    </div>
                  ))}
                </div>
                
                {/* Feature tags with hover effect */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition-all duration-300 transform ${
                        activeCard === index 
                          ? `bg-white/25 text-white scale-105` 
                          : `bg-black/40 text-white/80 group-hover:bg-white/15 group-hover:scale-105`
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Interactive progress bar with pulse effect */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                    <span>Innovation Index</span>
                    <span className="font-bold">{activeCard === index ? '100%' : '75%'}</span>
                  </div>
                  <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${service.color} transition-all duration-1000 ease-out relative`}
                      style={{ 
                        width: activeCard === index ? '100%' : '75%',
                      }}
                    >
                      {/* Animated shine effect */}
                      {activeCard === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 3D Depth Effect with neon edges */}
              <div className={`absolute inset-0 rounded-3xl border ${service.borderColor} opacity-30 transform translate-x-1 translate-y-1 -z-10`}></div>
              <div className={`absolute inset-0 rounded-3xl border ${service.borderColor} opacity-20 transform translate-x-2 translate-y-2 -z-20`}></div>
              <div className={`absolute inset-0 rounded-3xl border ${service.borderColor} opacity-10 transform translate-x-3 translate-y-3 -z-30`}></div>
            </div>
          ))}
        </div>
        
        {/* Interactive CTA with animated elements */}
        <div className="mt-20 text-center relative">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 rounded-3xl border border-white/20 bg-gradient-to-r from-black/50 to-black/30 p-8 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                  style={{
                    width: `${Math.random() * 50 + 30}px`,
                    height: `${Math.random() * 50 + 30}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `pulse ${20 + Math.random() * 10}s infinite ease-in-out`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 text-left">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
                <span className="animate-pulse">🌀</span> Ready to Transcend Digital Boundaries?
              </h3>
              <p className="text-white/80 text-lg">Let's architect your next breakthrough innovation</p>
            </div>
            <button className="relative z-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] whitespace-nowrap group text-lg">
              <span className="flex items-center gap-3">
                Initiate Quantum Leap
                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, 20px) scale(1.15);
          }
          50% {
            transform: translate(-20px, 25px) scale(0.85);
          }
          75% {
            transform: translate(25px, -20px) scale(1.25);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.5;
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shine {
          animation: shine 1.5s infinite;
        }
      `}</style>
    </section>
  )
}

export default ServiceCategories