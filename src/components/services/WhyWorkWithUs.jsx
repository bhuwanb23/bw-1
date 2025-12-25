import { useState, useEffect } from 'react'

const advantages = [
  {
    title: 'Quality',
    description: 'We deliver pixel-perfect solutions with rigorous testing and quality assurance.',
    icon: '✅',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Speed',
    description: 'Rapid development cycles without compromising on quality or functionality.',
    icon: '⚡',
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Scalability',
    description: 'Solutions designed to grow with your business and adapt to changing needs.',
    icon: '📈',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Expertise',
    description: 'Deep technical knowledge across multiple domains and cutting-edge technologies.',
    icon: '🧠',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Support',
    description: 'Comprehensive post-launch support and maintenance for long-term success.',
    icon: '🛠️',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of trends to deliver forward-thinking solutions.',
    icon: '🚀',
    color: 'from-indigo-500 to-purple-500'
  }
]

const WhyWorkWithUs = () => {
  const [visibleAdvantages, setVisibleAdvantages] = useState([])

  useEffect(() => {
    const timers = advantages.map((_, index) => {
      return setTimeout(() => {
        setVisibleAdvantages(prev => [...prev, index])
      }, index * 200)
    })
    
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Work With <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The Innovexex advantage that sets us apart from the competition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-6 transition-all duration-500 ${
                visibleAdvantages.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-2xl`}></div>
              
              {/* Decorative elements */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${advantage.color} opacity-5 blur-2xl`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center text-2xl mb-6`}>
                  {advantage.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-white/70">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs