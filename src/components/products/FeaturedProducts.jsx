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
    <section className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-4 sm:mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Featured Products</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Flagship</span> Solutions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-2">
            Premium products designed to transform your business operations
          </p>
        </div>
        
        {/* Mobile: Vertical Card Stack */}
        <div className="lg:hidden space-y-4">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl p-5"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}></div>
              
              <div className="relative flex items-center gap-4">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-3xl sm:text-4xl shadow-lg flex-shrink-0`}>
                  {product.image}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {product.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-white/20 bg-black/30 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-1">{product.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 line-clamp-2 mb-3">{product.description}</p>
                  
                  <div className="flex gap-2">
                    <button className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${product.color} text-white text-xs font-semibold hover:opacity-90 transition-all duration-300 shadow-md`}>
                      View
                    </button>
                    <button className="px-3 py-1.5 rounded-lg border border-white/20 bg-black/30 text-white text-xs font-semibold hover:bg-white/10 transition-all duration-300">
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Carousel */}
        <div 
          className="hidden lg:block relative h-96 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
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
              
              <div className="relative w-full max-w-7xl mx-auto px-8 grid grid-cols-2 gap-12 items-center">
                <div>
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
                
                <div className="flex justify-center">
                  <div className={`w-64 h-64 rounded-3xl bg-gradient-to-br ${product.color} flex items-center justify-center text-8xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)]`}>
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