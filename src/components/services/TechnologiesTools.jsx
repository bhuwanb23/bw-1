import { useState, useEffect, useRef } from 'react'

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'TensorFlow', icon: '🤖' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'GraphQL', icon: '📊' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Redis', icon: 'キャッシング' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'TypeScript', icon: '📝' },
  { name: 'Go', icon: '🐹' },
  { name: 'Rust', icon: '🦀' }
]

const TechnologiesTools = () => {
  const carouselRef = useRef(null)
  
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    
    const slide = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollTo({ left: 0, behavior: 'auto' })
      } else {
        carousel.scrollBy({ left: 200, behavior: 'smooth' })
      }
    }
    
    const interval = setInterval(slide, 3000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We work with the latest and most powerful technologies to deliver exceptional results
          </p>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex gap-8 overflow-hidden py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate technologies for seamless looping */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-48 h-32 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl flex flex-col items-center justify-center p-6 transition-all duration-300 hover:border-white/20 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
              <h3 className="text-lg font-bold text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
        
        <style jsx>{`
          .overflow-hidden::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  )
}

export default TechnologiesTools