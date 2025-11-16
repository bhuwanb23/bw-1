import { useState } from 'react'
import Reveal from './Reveal.jsx'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to match your exact business requirements.',
    gradient: 'from-blue-500/30 via-cyan-500/20 to-blue-600/30',
    glowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    particles: '🔧⚡💻'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Mobile Applications',
    description: 'Native iOS & Android apps with seamless user experiences and robust performance.',
    gradient: 'from-purple-500/30 via-violet-500/20 to-purple-600/30',
    glowColor: 'shadow-[0_0_30px_rgba(147,51,234,0.3)]',
    particles: '📱✨🚀'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: 'Enterprise Solutions',
    description: 'Scalable systems and platforms designed to handle complex business operations.',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-emerald-600/30',
    glowColor: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    particles: '🏢⚙️📊'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and data-driven insights to transform your business processes.',
    gradient: 'from-orange-500/30 via-amber-500/20 to-orange-600/30',
    glowColor: 'shadow-[0_0_30px_rgba(249,115,22,0.3)]',
    particles: '🤖🧠⭐'
  }
]

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-emerald-400/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="relative">
        <Reveal className="text-center mb-16" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>Our Core Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            We transform complex challenges into{' '}
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-sky-500 bg-clip-text text-transparent animate-pulse">
              elegant solutions.
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            From concept to deployment, we deliver high-performance digital solutions that drive real business results.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              as="div"
              delay={index * 150}
              className="group relative"
            >
              <div 
                className={`relative overflow-hidden rounded-2xl border border-white/8 bg-black/40 p-8 backdrop-blur-sm transition-all duration-700 hover:border-white/30 hover:bg-black/70 hover:scale-105 hover:-translate-y-2 ${hoveredIndex === index ? feature.glowColor : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-all duration-700 group-hover:opacity-100`} />
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-4 right-4 text-lg animate-bounce" style={{ animationDelay: '0s' }}>
                    {feature.particles[0]}
                  </div>
                  <div className="absolute top-8 left-6 text-sm animate-bounce" style={{ animationDelay: '0.3s' }}>
                    {feature.particles[1]}
                  </div>
                  <div className="absolute bottom-6 right-8 text-base animate-bounce" style={{ animationDelay: '0.6s' }}>
                    {feature.particles[2]}
                  </div>
                </div>
                
                {/* Glowing orb effect */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-150 blur-xl" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-white/70 transition-all duration-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/20">
                    <div className="transition-transform duration-500 group-hover:scale-125">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-tight transition-all duration-300 group-hover:text-white group-hover:scale-105">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-white/60 leading-relaxed font-light transition-all duration-300 group-hover:text-white/80">
                    {feature.description}
                  </p>
                  
                  {/* Progress bar animation on hover */}
                  <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${feature.gradient.replace('/30', '').replace('/20', '')} transform transition-transform duration-1000 ${hoveredIndex === index ? 'translate-x-0' : '-translate-x-full'}`} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default FeaturesSection
