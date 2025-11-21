import { useState, useEffect } from 'react'

const BlogHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)]"></div>
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/8 blur-3xl md:h-96 md:w-96"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/8 blur-3xl md:h-96 md:w-96"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 text-center -mt-16 sm:px-6 sm:-mt-20 md:px-8 md:-mt-24">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-5 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-white tracking-tight">
                Blog &{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
                Tech articles, community discussions, answers, and insights.
              </p>
            </div>
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

export default BlogHero