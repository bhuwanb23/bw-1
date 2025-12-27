const ProposalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30"
            style={{
              width: `${Math.random() * 10 + 4}px`,
              height: `${Math.random() * 10 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${20 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent"></div>
        
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-radial from-blue-500/20 via-purple-500/20 to-transparent blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's build something <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">powerful</span> together
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Ready to transform your ideas into cutting-edge digital solutions? Let's discuss your project and create something extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => document.getElementById('proposal-form').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 text-white font-bold text-base hover:from-purple-700 hover:via-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/40 flex items-center gap-2 group"
            >
              <span>Request Proposal</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <button className="px-8 py-4 rounded-full border border-white/20 bg-black/20 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
              <span>Schedule a Consultation</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
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

export default ProposalCTA