import { useState, useRef, useEffect } from 'react'
import Reveal from './Reveal.jsx'

const products = [
  {
    id: 1,
    title: 'Quantum Analytics',
    subtitle: 'Financial Forecasting Platform',
    description: 'Advanced financial forecasting platform with real-time market analysis, predictive modeling, and comprehensive reporting dashboard.',
    icon: '📊',
    tech: ['React', 'Node.js', 'Python', 'TensorFlow'],
    status: 'Live',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/20 to-cyan-500/20',
    metrics: { users: '10K+', accuracy: '99.2%', speed: '2.5s' },
    year: '2024'
  },
  {
    id: 2,
    title: 'Aura Home',
    subtitle: 'Smart Home Management',
    description: 'Next-generation smart home management application with AI-powered automation and energy optimization.',
    icon: '🏠',
    tech: ['React Native', 'Firebase', 'IoT', 'ML'],
    status: 'Beta',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'from-purple-500/20 to-violet-500/20',
    metrics: { devices: '500+', savings: '35%', response: '0.8s' },
    year: '2024'
  },
  {
    id: 3,
    title: 'DevFlow CLI',
    subtitle: 'Development Workflow Tool',
    description: 'Powerful command-line tool for streamlining development workflows and automated deployments.',
    icon: '⚡',
    tech: ['Node.js', 'TypeScript', 'Docker', 'AWS'],
    status: 'Open Source',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-500/20 to-teal-500/20',
    metrics: { downloads: '50K+', stars: '2.4K', time: '70%' },
    year: '2023'
  },
  {
    id: 4,
    title: 'CloudSync Pro',
    subtitle: 'Multi-Cloud Management',
    description: 'Enterprise-grade multi-cloud management platform with automated backup and disaster recovery.',
    icon: '☁️',
    tech: ['Go', 'Kubernetes', 'AWS', 'Azure'],
    status: 'Enterprise',
    color: 'from-sky-500 to-blue-500',
    bgColor: 'from-sky-500/20 to-blue-500/20',
    metrics: { uptime: '99.9%', data: '10TB+', clients: '150+' },
    year: '2024'
  },
  {
    id: 5,
    title: 'Neural Search',
    subtitle: 'AI-Powered Search Engine',
    description: 'Advanced search engine powered by neural networks with semantic search capabilities.',
    icon: '🔍',
    tech: ['Python', 'TensorFlow', 'Elasticsearch', 'FastAPI'],
    status: 'Research',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'from-orange-500/20 to-amber-500/20',
    metrics: { queries: '1M+', relevance: '94%', latency: '120ms' },
    year: '2024'
  }
]

const ProductsShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const getCardTransform = (index, cardRef) => {
    if (!cardRef || hoveredCard !== index) return 'translate3d(0, 0, 0) rotateX(0) rotateY(0)'
    
    const rect = cardRef.getBoundingClientRect()
    const cardCenterX = rect.left + rect.width / 2
    const cardCenterY = rect.top + rect.height / 2
    
    const deltaX = mousePosition.x - (cardCenterX - containerRef.current?.getBoundingClientRect().left || 0)
    const deltaY = mousePosition.y - (cardCenterY - containerRef.current?.getBoundingClientRect().top || 0)
    
    const rotateX = (deltaY / rect.height) * -10
    const rotateY = (deltaX / rect.width) * 10
    const translateZ = 20
    
    return `translate3d(0, 0, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-emerald-400/20 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative perspective-1000">
        <Reveal className="text-center mb-20" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Product Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Interactive{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Product Universe
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto font-light">
            Explore our innovative solutions through an immersive 3D experience. Hover and interact with each product card.
          </p>
        </Reveal>

        {/* Morphing 3D Cards Grid */}
        <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
          {products.map((product, index) => {
            let cardRef = null
            
            return (
              <Reveal
                key={product.id}
                as="div"
                delay={index * 150}
                className="group perspective-1000"
              >
                <div
                  ref={(el) => { cardRef = el }}
                  className="relative preserve-3d transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: getCardTransform(index, cardRef),
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Main Card */}
                  <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-700 ${
                    hoveredCard === index 
                      ? 'border-white/30 bg-black/60 shadow-2xl shadow-purple-500/20' 
                      : 'hover:border-white/20'
                  }`}>
                    
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.bgColor} opacity-0 transition-opacity duration-700 ${
                      hoveredCard === index ? 'opacity-100' : ''
                    }`} />
                    
                    {/* Magnetic Glow Effect */}
                    {hoveredCard === index && (
                      <div className={`absolute -inset-2 bg-gradient-to-r ${product.color} opacity-20 blur-xl rounded-3xl animate-pulse`} />
                    )}
                    
                    <div className="relative p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`text-5xl transition-transform duration-500 ${
                          hoveredCard === index ? 'scale-110 rotate-12' : ''
                        }`}>
                          {product.icon}
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                            product.status === 'Live' 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : product.status === 'Beta'
                              ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                              : product.status === 'Enterprise'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              : product.status === 'Research'
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                              : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                          }`}>
                            {product.status}
                          </span>
                          <div className="text-xs text-white/40 mt-1">{product.year}</div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                          {product.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-4 font-light">
                          {product.subtitle}
                        </p>
                        <p className="text-white/80 leading-relaxed mb-6">
                          {product.description}
                        </p>
                        
                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(product.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className={`text-lg font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                                {value}
                              </div>
                              <div className="text-xs text-white/50 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {product.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`text-xs bg-gradient-to-r ${product.color} text-white px-3 py-1 rounded-full font-medium transition-transform duration-300 hover:scale-110`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <button className={`flex-1 py-3 px-4 rounded-xl bg-gradient-to-r ${product.color} text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                            View Project
                          </button>
                          <button className="p-3 rounded-xl border border-white/20 bg-white/10 text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    {hoveredCard === index && (
                      <>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping" />
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce" />
                      </>
                    )}
                  </div>
                  
                  {/* 3D Shadow */}
                  <div 
                    className="absolute inset-0 bg-black/20 rounded-3xl blur-xl -z-10 transition-all duration-700"
                    style={{
                      transform: hoveredCard === index 
                        ? 'translate3d(0, 20px, -50px) scale(0.95)' 
                        : 'translate3d(0, 10px, -20px) scale(0.9)',
                      opacity: hoveredCard === index ? 0.6 : 0.3
                    }}
                  />
                </div>
              </Reveal>
            )
          })}
        </div>
        
        {/* Interactive Stats */}
        <Reveal className="text-center mt-20" delay={600}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-8 md:p-12 backdrop-blur-xl max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">
                Innovation Metrics
              </h3>
              
              <div className="grid gap-8 md:grid-cols-4 text-center">
                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-400">
                    5
                  </div>
                  <div className="text-white/60 text-sm">Products Built</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400">
                    100K+
                  </div>
                  <div className="text-white/60 text-sm">Users Impacted</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-400">
                    99.5%
                  </div>
                  <div className="text-white/60 text-sm">Uptime Average</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-pink-400">
                    15+
                  </div>
                  <div className="text-white/60 text-sm">Technologies Used</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  )
}

export default ProductsShowcase
