import { useState, useEffect } from 'react'

const ProposalHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-radial from-blue-500/10 via-purple-500/10 to-transparent blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Proposal Request</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Request a Proposal
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light mb-8">
            Tell us your requirements — we'll craft a custom solution
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button 
              onClick={() => document.getElementById('proposal-form').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
            >
              Get Started
            </button>
            
            <button className="px-8 py-4 rounded-full border border-white/20 bg-black/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View Sample Proposals
            </button>
          </div>
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
        
        .absolute > div {
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  )
}

export default ProposalHero