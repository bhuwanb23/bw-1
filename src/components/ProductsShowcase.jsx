import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const products = [
  {
    id: 1,
    title: 'Quantum Analytics',
    subtitle: 'Financial Forecasting',
    icon: '📊',
    status: 'Live',
    color: 'from-blue-500 to-cyan-500',
    year: '2024'
  },
  {
    id: 2,
    title: 'Aura Home',
    subtitle: 'Smart Home Management',
    icon: '🏠',
    status: 'Beta',
    color: 'from-purple-500 to-violet-500',
    year: '2024'
  },
  {
    id: 3,
    title: 'DevFlow CLI',
    subtitle: 'Development Workflow',
    icon: '⚡',
    status: 'Open Source',
    color: 'from-emerald-500 to-teal-500',
    year: '2023'
  }
]

const ProductsShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-emerald-400/20 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative">
        <Reveal className="text-center mb-8" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-3 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>product gallery</span>
          </div>
          <h2 className={`${SECTION_HEADING} mb-3`}>
            Interactive{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Product Universe
            </span>
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto font-light">
            Explore our innovative solutions through an immersive experience.
          </p>
        </Reveal>

        {/* New Professional Card Design */}
        <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
          {products.map((product, index) => (
            <Reveal
              key={product.id}
              as="div"
              delay={index * 150}
              className="flex-shrink-0"
            >
              <div 
                className="group relative w-full h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container with 3D Effect */}
                <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${hoveredCard === index ? 'rotate-y-180' : ''}`}>
                  {/* Front of Card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-6 flex flex-col">
                    {/* Icon and Status */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`text-4xl transition-all duration-500 ${hoveredCard === index ? 'scale-110' : ''}`}>
                        {product.icon}
                      </div>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium transition-all duration-300 ${
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
                    </div>
                    
                    {/* Content */}
                    <div className="mt-auto">
                      <h3 className="text-xl font-bold text-white mb-1">{product.title}</h3>
                      <p className="text-white/60 text-sm">{product.subtitle}</p>
                      <div className="text-xs text-white/40 mt-2">{product.year}</div>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-4 right-4">
                      <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rotate-y-180 p-6 flex flex-col">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 rounded-2xl`}></div>
                    
                    {/* White Circular Shapes */}
                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/20 blur-xl"></div>
                    <div className="absolute bottom-8 left-6 w-12 h-12 rounded-full bg-white/30 blur-xl"></div>
                    
                    <div className="relative flex flex-col h-full">
                      {/* Icon */}
                      <div className={`text-4xl mb-4 ${product.color.includes('blue') ? 'text-blue-400' : 
                                         product.color.includes('purple') ? 'text-purple-400' : 
                                         product.color.includes('emerald') ? 'text-emerald-400' : 
                                         product.color.includes('sky') ? 'text-sky-400' : 
                                         'text-orange-400'}`}>
                        {product.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="mt-auto">
                        <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                        <p className="text-white/80 text-sm mb-4">
                          Innovative solution designed to transform your digital experience.
                        </p>
                        <button className={`w-full py-2.5 rounded-lg bg-gradient-to-r ${product.color} text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02]`}>
                          Explore Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group">
            View All Products
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}

export default ProductsShowcase