import { useState, useEffect } from 'react'

const featuredProducts = [
  {
    id: 1,
    title: 'NexusFlow Platform',
    description: 'Enterprise-grade workflow automation solution with AI capabilities.',
    image: '🚀',
    color: 'from-blue-500 to-cyan-500',
    tags: ['SaaS', 'AI', 'Automation']
  },
  {
    id: 2,
    title: 'DataSphere Analytics',
    description: 'Advanced business intelligence platform with real-time insights.',
    image: '📊',
    color: 'from-purple-500 to-violet-500',
    tags: ['Analytics', 'Big Data', 'Cloud']
  },
  {
    id: 3,
    title: 'SecureVault',
    description: 'End-to-end encryption solution for enterprise data protection.',
    image: '🔒',
    color: 'from-emerald-500 to-teal-500',
    tags: ['Security', 'Encryption', 'Compliance']
  }
]

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Featured Products</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Flagship</span> Solutions
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Premium products designed to transform your business operations
          </p>
        </div>
        
        <div 
          className="relative h-96 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-all duration-1000 flex items-center ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}></div>
              
              {/* Decorative elements */}
              <div className={`absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br ${product.color} opacity-20 blur-3xl`}></div>
              <div className={`absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-br ${product.color} opacity-15 blur-3xl`}></div>
              
              <div className="relative w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 bg-black/30 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-xl text-white/80 mb-8 max-w-lg">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className={`px-6 py-3 rounded-full bg-gradient-to-r ${product.color} text-white font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                      View Details
                    </button>
                    <button className="px-6 py-3 rounded-full border border-white/20 bg-black/30 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      Request Demo
                    </button>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center">
                  <div className={`w-64 h-64 rounded-3xl bg-gradient-to-br ${product.color} flex items-center justify-center text-8xl shadow-2xl`}>
                    {product.image}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts