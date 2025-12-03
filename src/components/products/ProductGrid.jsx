import { useState, useEffect } from 'react'

const products = [
  {
    id: 1,
    title: 'NexusFlow',
    description: 'Enterprise workflow automation with AI capabilities.',
    image: '🚀',
    video: '/videos/nexusflow-demo.mp4',
    color: 'from-blue-500 to-cyan-500',
    platform: 'Web',
    category: 'Productivity',
    rating: 4.9,
    downloads: '10K+',
    features: ['AI Automation', 'Team Collaboration', 'Real-time Analytics'],
    metrics: { efficiency: '+40%', timeSaved: '15 hrs/week' }
  },
  {
    id: 2,
    title: 'DataSphere',
    description: 'Advanced analytics and business intelligence platform.',
    image: '📊',
    video: '/videos/datasphere-demo.mp4',
    color: 'from-purple-500 to-violet-500',
    platform: 'Cloud',
    category: 'Analytics',
    rating: 4.8,
    downloads: '5K+',
    features: ['Predictive Analytics', 'Data Visualization', 'Custom Dashboards'],
    metrics: { insights: '+75%', accuracy: '98%' }
  },
  {
    id: 3,
    title: 'SecureVault',
    description: 'End-to-end encryption for enterprise data protection.',
    image: '🔒',
    video: '/videos/securevault-demo.mp4',
    color: 'from-emerald-500 to-teal-500',
    platform: 'Desktop',
    category: 'Security',
    rating: 4.9,
    downloads: '15K+',
    features: ['Zero-Knowledge Encryption', 'Multi-Factor Auth', 'Compliance Ready'],
    metrics: { breaches: '0', compliance: '100%' }
  },
  {
    id: 4,
    title: 'CodePilot',
    description: 'AI-powered code assistant for developers.',
    image: '👨‍💻',
    video: '/videos/codepilot-demo.mp4',
    color: 'from-amber-500 to-orange-500',
    platform: 'Desktop',
    category: 'Development',
    rating: 4.7,
    downloads: '8K+',
    features: ['Smart Autocomplete', 'Bug Detection', 'Code Refactoring'],
    metrics: { productivity: '+60%', bugs: '-45%' }
  },
  {
    id: 5,
    title: 'InsightAI',
    description: 'Machine learning platform for predictive analytics.',
    image: '🤖',
    video: '/videos/insightai-demo.mp4',
    color: 'from-pink-500 to-rose-500',
    platform: 'Cloud',
    category: 'AI',
    rating: 4.8,
    downloads: '12K+',
    features: ['Neural Networks', 'Pattern Recognition', 'Forecasting'],
    metrics: { predictions: '92%', speed: '10x faster' }
  },
  {
    id: 6,
    title: 'Streamline',
    description: 'Project management and team collaboration tool.',
    image: '👥',
    video: '/videos/streamline-demo.mp4',
    color: 'from-indigo-500 to-blue-500',
    platform: 'Web',
    category: 'Productivity',
    rating: 4.6,
    downloads: '20K+',
    features: ['Task Management', 'Resource Planning', 'Progress Tracking'],
    metrics: { projects: '+35%', collaboration: '+50%' }
  }
]

const ProductGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [playingVideo, setPlayingVideo] = useState(null)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate floating particles
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${15 + Math.random() * 10}s`
    }))
    setParticles(newParticles)
  }, [])

  const handleVideoPlay = (productId) => {
    setPlayingVideo(productId)
  }

  const handleVideoStop = () => {
    setPlayingVideo(null)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left,
              animation: `float ${particle.animationDuration} infinite ease-in-out`,
              animationDelay: particle.animationDelay
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-sm font-medium uppercase tracking-[0.3em] text-white/70 mb-6 backdrop-blur-2xl">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse" />
            <span>PRODUCT UNIVERSE</span>
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="block">DISCOVER OUR</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              INNOVATIVE SUITE
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Cutting-edge solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative rounded-3xl overflow-hidden border cursor-pointer transition-all duration-700 transform-gpu ${
                hoveredProduct === product.id
                  ? 'border-white/40 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-3xl scale-105 shadow-2xl z-10'
                  : 'border-white/10 bg-black/20 hover:border-white/20'
              }`}
              style={{
                boxShadow: hoveredProduct === product.id 
                  ? `0 0 40px -10px rgba(56, 189, 248, 0.4)` 
                  : 'none'
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => {
                setHoveredProduct(null)
                handleVideoStop()
              }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${
                hoveredProduct === product.id ? 'opacity-20' : 'group-hover:opacity-10'
              } border-${product.color.split(' ')[0].split('-')[1]}`}></div>

              <div className="p-7 h-full flex flex-col relative z-10">
                {/* Product header with icon and rating */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-2xl transform transition-all duration-500 ${
                    hoveredProduct === product.id ? 'scale-110 rotate-6' : 'group-hover:scale-105'
                  }`}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent"></div>
                    <span className="relative z-10">{product.image}</span>
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-white/10 to-transparent blur-xl opacity-30"></div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-yellow-400">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="text-white font-bold">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-white/70 mb-5">{product.description}</p>

                {/* Interactive video preview */}
                <div className="relative mb-5 rounded-2xl overflow-hidden bg-black/30 border border-white/10 aspect-video">
                  {hoveredProduct === product.id ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/50 to-black/30">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-3 cursor-pointer" onClick={() => handleVideoPlay(product.id)}>
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-white/70 text-sm">Click to play demo</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl opacity-30">{product.image}</div>
                    </div>
                  )}
                </div>

                {/* Key features */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">KEY FEATURES</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics display */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(product.metrics).map(([key, value]) => (
                    <div key={key} className="rounded-xl border border-white/10 bg-black/30 p-2.5 text-center backdrop-blur-sm">
                      <p className="text-lg font-bold text-white">{value}</p>
                      <p className="text-xs text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-black/50 text-white/80 border border-white/10">
                      {product.platform}
                    </span>
                    <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-black/50 text-white/80 border border-white/10">
                      {product.category}
                    </span>
                  </div>
                  <div className="text-sm text-white/60">{product.downloads} downloads</div>
                </div>
              </div>

              {/* 3D Depth Effect */}
              <div className={`absolute inset-0 rounded-3xl border border-white/10 opacity-20 transform translate-x-1 translate-y-1 -z-10`}></div>
              <div className={`absolute inset-0 rounded-3xl border border-white/5 opacity-10 transform translate-x-2 translate-y-2 -z-20`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 rounded-2xl border border-white/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white font-bold hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 backdrop-blur-xl flex items-center gap-3 mx-auto group text-lg shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            Explore Full Product Catalog
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(15px, 15px) scale(1.1);
          }
          50% {
            transform: translate(-15px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, -15px) scale(1.2);
          }
        }
      `}</style>
    </section>
  )
}

export default ProductGrid