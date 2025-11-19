import { useEffect, useState, useRef } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const technologies = [
  { name: 'React', category: 'Frontend', logo: '⚛️', color: 'from-blue-400 to-cyan-400' },
  { name: 'Next.js', category: 'Frontend', logo: '▲', color: 'from-gray-400 to-white' },
  { name: 'TypeScript', category: 'Language', logo: 'TS', color: 'from-blue-500 to-blue-600' },
  { name: 'Node.js', category: 'Backend', logo: '🟢', color: 'from-green-400 to-green-500' },
  { name: 'Python', category: 'Language', logo: '🐍', color: 'from-yellow-400 to-blue-500' },
  { name: 'PostgreSQL', category: 'Database', logo: '🐘', color: 'from-blue-600 to-indigo-600' },
  { name: 'MongoDB', category: 'Database', logo: '🍃', color: 'from-green-500 to-green-600' },
  { name: 'AWS', category: 'Cloud', logo: '☁️', color: 'from-orange-400 to-yellow-400' },
  { name: 'Docker', category: 'DevOps', logo: '🐳', color: 'from-blue-500 to-cyan-500' },
  { name: 'Kubernetes', category: 'DevOps', logo: '⚙️', color: 'from-blue-600 to-purple-600' },
  { name: 'GraphQL', category: 'API', logo: '◉', color: 'from-pink-500 to-purple-500' },
  { name: 'TensorFlow', category: 'AI/ML', logo: '🧠', color: 'from-orange-500 to-red-500' },
  { name: 'PyTorch', category: 'AI/ML', logo: '🔥', color: 'from-red-500 to-orange-500' },
  { name: 'Redis', category: 'Cache', logo: '💎', color: 'from-red-500 to-red-600' },
  { name: 'Vue.js', category: 'Frontend', logo: '💚', color: 'from-green-400 to-emerald-500' },
  { name: 'Flutter', category: 'Mobile', logo: '🦋', color: 'from-blue-400 to-cyan-400' },
  { name: 'Go', category: 'Language', logo: '🐹', color: 'from-cyan-400 to-blue-500' },
  { name: 'Rust', category: 'Language', logo: '🦀', color: 'from-orange-600 to-red-600' },
  { name: 'Tailwind', category: 'Frontend', logo: '🎨', color: 'from-cyan-400 to-blue-500' },
  { name: 'Figma', category: 'Design', logo: '🎯', color: 'from-purple-500 to-pink-500' }
]

const TechStackSlider = () => {
  const [hoveredTech, setHoveredTech] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scroll = () => {
      scrollAmount += 1
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
    }

    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/3 to-transparent" />
      
      <div className="relative">
        <Reveal className="text-center mb-8" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-3 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-pulse" />
            <span>Technology Stack</span>
          </div>
          <h2 className={`${SECTION_HEADING} mb-3`}>
            Powered by{' '}
            <span className="bg-gradient-to-r from-gray-400 via-white to-gray-500 bg-clip-text text-transparent">
              modern technology
            </span>
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto font-light">
            We leverage cutting-edge tools and frameworks to build scalable solutions.
          </p>
        </Reveal>

        {/* Infinite Scrolling Tech Logos */}
        <Reveal className="mb-6" delay={200}>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10 pointer-events-none" />
            
            <div
              ref={scrollRef}
              className="flex gap-4 py-4 px-3 overflow-hidden"
              style={{ width: '100%' }}
            >
              {/* Duplicate technologies for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className={`relative w-12 h-12 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-white/30 hover:bg-black/60 ${hoveredTech === tech.name ? 'scale-110 border-white/30' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 transition-opacity duration-500 rounded-lg ${hoveredTech === tech.name ? 'opacity-20' : 'group-hover:opacity-10'}`} />
                    
                    <div className="relative text-center">
                      <div className="text-base mb-0.5 transition-transform duration-300 group-hover:scale-125">
                        {tech.logo}
                      </div>
                      <div className="text-xs text-white/60 font-medium">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Compact Stats */}
        <Reveal className="text-center" delay={300}>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-white/5 to-gray-500/10" />
            
            <div className="relative">
              <div className="grid gap-4 md:grid-cols-4 text-center">
                <div>
                  <div className="text-xl font-bold text-white mb-1">20+</div>
                  <div className="text-white/60 text-xs">Technologies</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white mb-1">5+</div>
                  <div className="text-white/60 text-xs">Years Experience</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white mb-1">100%</div>
                  <div className="text-white/60 text-xs">Up-to-Date</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/60 text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default TechStackSlider