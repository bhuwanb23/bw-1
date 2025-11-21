import { useState, useEffect } from 'react'

const ServicesCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setIsVisible(true)
    
    // Generate particles
    const newParticles = [...Array(50)].map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${20 + Math.random() * 15}s`
    }))
    
    setParticles(newParticles)
  }, [])

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-transparent">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden bg-transparent">
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30" 
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
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent"></div>
        
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-radial from-blue-500/20 via-purple-500/20 to-transparent blur-3xl animate-pulse"></div>
      </div>
      
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <div className={`relative max-w-4xl mx-auto px-4 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>Let's Work Together</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Let's Build Something{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Powerful
          </span>{' '}
          Together
        </h2>
        
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Ready to transform your ideas into cutting-edge digital solutions? Let's discuss your project and create something extraordinary.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
            <span>Start Your Project</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          <button className="px-8 py-4 rounded-full border border-white/20 bg-black/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
            <span>Schedule a Consultation</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}px, ${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}px) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default ServicesCTA