import { useEffect, useRef } from 'react'

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
  { name: 'Redis', icon: '⚡' },
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
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
            backgroundSize: '88px 88px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Toolchain</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech we <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">use</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Modern stack. Proven defaults.
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
              className="flex-shrink-0 w-48 h-32 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl flex flex-col items-center justify-center p-6 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 hover:shadow-[0_22px_70px_rgba(0,0,0,0.35)] group"
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