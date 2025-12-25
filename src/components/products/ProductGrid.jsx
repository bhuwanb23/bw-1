import { useState, useEffect } from 'react'
import Reveal from '../Reveal.jsx'

const products = [
  {
    id: 1,
    title: 'NexusFlow',
    description: 'Workflow automation for modern teams.',
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
    description: 'Real-time analytics and dashboards.',
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
    description: 'Encryption + access control.',
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
    description: 'AI coding assistant.',
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
    description: 'Prediction and forecasting.',
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
    description: 'Projects and collaboration.',
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
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate floating particles
    const newParticles = [...Array(12)].map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 3,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${18 + Math.random() * 10}s`
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="py-14 md:py-16 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-70"
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Products</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pick a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">product</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Clean UI. Quick setup. Clear value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 60} amount={0.15} margin="-10% 0px">
              <div
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-xl cursor-pointer transition-all duration-300 transform-gpu hover:-translate-y-1 hover:border-white/20 hover:bg-white/5 hover:shadow-[0_26px_80px_rgba(0,0,0,0.35)]"
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-20 bg-gradient-to-br ${product.color} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-[0.10]`}
                />

                <div className="p-5 h-full flex flex-col relative z-10">
                  {/* Product header with icon and rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-xl transform transition-all duration-300 group-hover:scale-110`}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent"></div>
                      <span className="relative z-10">{product.image}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-yellow-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span className="text-white/90 text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1.5">{product.title}</h3>
                  <p className="text-sm text-white/70 mb-4 line-clamp-2">{product.description}</p>

                  {/* Interactive video preview */}
                  <div className="relative mb-4 rounded-2xl overflow-hidden bg-black/30 border border-white/10 aspect-[16/9]">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl opacity-25">{product.image}</div>
                    </div>
                  </div>

                  {/* Key features */}
                  <div className="mb-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2">HIGHLIGHTS</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, idx) => (
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
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(product.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="rounded-xl border border-white/10 bg-black/30 p-2 text-center backdrop-blur-sm">
                        <p className="text-base font-semibold text-white">{value}</p>
                        <p className="text-[10px] text-white/55 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-black/50 text-white/80 border border-white/10">
                        {product.platform}
                      </span>
                      <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-black/50 text-white/80 border border-white/10">
                        {product.category}
                      </span>
                    </div>
                    <div className="text-xs text-white/60">{product.downloads}</div>
                  </div>
                </div>

                {/* 3D Depth Effect */}
                <div className={`absolute inset-0 rounded-3xl border border-white/10 opacity-20 transform translate-x-1 translate-y-1 -z-10`}></div>
                <div className={`absolute inset-0 rounded-3xl border border-white/5 opacity-10 transform translate-x-2 translate-y-2 -z-20`}></div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-16">
          <button className="px-6 py-3 rounded-2xl border border-white/20 bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-white font-semibold hover:from-blue-500/25 hover:to-purple-500/25 transition-all duration-300 backdrop-blur-xl flex items-center gap-3 mx-auto group shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            View all products
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