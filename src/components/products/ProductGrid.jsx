import { useState } from 'react'

const products = [
  {
    id: 1,
    title: 'NexusFlow',
    description: 'Enterprise workflow automation with AI capabilities.',
    image: '🚀',
    color: 'from-blue-500 to-cyan-500',
    platform: 'Web',
    category: 'Productivity',
    rating: 4.9,
    downloads: '10K+'
  },
  {
    id: 2,
    title: 'DataSphere',
    description: 'Advanced analytics and business intelligence platform.',
    image: '📊',
    color: 'from-purple-500 to-violet-500',
    platform: 'Cloud',
    category: 'Analytics',
    rating: 4.8,
    downloads: '5K+'
  },
  {
    id: 3,
    title: 'SecureVault',
    description: 'End-to-end encryption for enterprise data protection.',
    image: '🔒',
    color: 'from-emerald-500 to-teal-500',
    platform: 'Desktop',
    category: 'Security',
    rating: 4.9,
    downloads: '15K+'
  },
  {
    id: 4,
    title: 'CodePilot',
    description: 'AI-powered code assistant for developers.',
    image: '👨‍💻',
    color: 'from-amber-500 to-orange-500',
    platform: 'Desktop',
    category: 'Development',
    rating: 4.7,
    downloads: '8K+'
  },
  {
    id: 5,
    title: 'InsightAI',
    description: 'Machine learning platform for predictive analytics.',
    image: '🤖',
    color: 'from-pink-500 to-rose-500',
    platform: 'Cloud',
    category: 'AI',
    rating: 4.8,
    downloads: '12K+'
  },
  {
    id: 6,
    title: 'Streamline',
    description: 'Project management and team collaboration tool.',
    image: '👥',
    color: 'from-indigo-500 to-blue-500',
    platform: 'Web',
    category: 'Productivity',
    rating: 4.6,
    downloads: '20K+'
  }
]

const ProductGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span>Products</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          View Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Products</span>
        </h2>
        <p className="text-lg text-white/70 mb-12">
          Explore our innovative solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative rounded-xl overflow-hidden border cursor-pointer transition-all duration-300 ${hoveredProduct === product.id
                  ? 'border-white/30 bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-xl'
                  : 'border-white/10 bg-black/20 hover:border-white/20'
                }`}
              style={{
                boxShadow: hoveredProduct === product.id ? `0 0 20px -8px rgba(56, 189, 248, 0.3)` : 'none'
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-xl`}>
                    {product.image}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="text-white font-bold text-sm">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{product.title}</h3>
                <p className="text-white/70 text-xs mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-black/50 text-white/80 border border-white/10">
                      {product.platform}
                    </span>
                  </div>
                  <div className="text-xs text-white/60">{product.downloads}</div>
                </div>
              </div>

              {/* Animated border on hover */}
              <div className={`absolute inset-0 rounded-xl border-2 ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-5 py-2.5 rounded-full border border-white/20 bg-black/30 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 mx-auto group">
            View All Products
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid