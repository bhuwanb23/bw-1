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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
        
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-8 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Let's Work Together</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Business?</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Let's discuss how our technology solutions can drive your business forward
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Start Your Project
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 bg-black/30 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, 10px) scale(1.1);
          }
          50% {
            transform: translate(-10px, 15px) scale(0.9);
          }
          75% {
            transform: translate(15px, -10px) scale(1.2);
          }
        }
      `}</style>
    </section>
  )
}

export default ServicesCTA