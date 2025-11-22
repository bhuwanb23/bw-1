import { useState, useEffect } from 'react'

const ServicesHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles with enhanced animation */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${25 + Math.random() * 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 15px 15px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-16 sm:-mt-20 md:-mt-24">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-8 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Our Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block mb-2">Our</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
            Cutting-edge technology solutions designed to transform your business and drive innovation forward
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Explore Services
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 bg-black/30 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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

export default ServicesHero