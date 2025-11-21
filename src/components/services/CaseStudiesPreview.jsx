import { useState } from 'react'

const caseStudies = [
  {
    id: 1,
    title: 'FinTech Platform Transformation',
    description: 'Modernized legacy banking system with real-time processing capabilities.',
    problem: 'Legacy infrastructure causing performance bottlenecks and scalability issues.',
    solution: 'Implemented microservices architecture with cloud-native technologies.',
    results: '500% performance improvement and 99.99% uptime.',
    image: '💼',
    color: 'from-blue-500 to-cyan-500',
    metrics: [
      { label: 'Performance', value: '+500%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Costs', value: '-30%' }
    ]
  },
  {
    id: 2,
    title: 'AI-Powered Customer Service',
    description: 'Developed intelligent chatbot solution for enterprise customer support.',
    problem: 'High volume of customer inquiries overwhelming support team.',
    solution: 'Created NLP-powered chatbot with machine learning capabilities.',
    results: 'Reduced support tickets by 70% and improved response time by 85%.',
    image: '🤖',
    color: 'from-purple-500 to-violet-500',
    metrics: [
      { label: 'Response Time', value: '-85%' },
      { label: 'Support Tickets', value: '-70%' },
      { label: 'Satisfaction', value: '+40%' }
    ]
  },
  {
    id: 3,
    title: 'E-Commerce Optimization',
    description: 'Enhanced online retail platform for improved user experience.',
    problem: 'Declining conversion rates due to poor user experience.',
    solution: 'Redesigned UI/UX with personalized recommendation engine.',
    results: '40% increase in conversions and 60% reduction in bounce rate.',
    image: '🛒',
    color: 'from-emerald-500 to-teal-500',
    metrics: [
      { label: 'Conversions', value: '+40%' },
      { label: 'Bounce Rate', value: '-60%' },
      { label: 'Revenue', value: '+25%' }
    ]
  },
  {
    id: 4,
    title: 'Healthcare Data Analytics',
    description: 'Built secure platform for medical data analysis and insights.',
    problem: 'Fragmented patient data across multiple systems.',
    solution: 'Created unified data platform with advanced analytics dashboard.',
    results: 'Improved patient outcomes and reduced administrative costs by 30%.',
    image: '🏥',
    color: 'from-amber-500 to-orange-500',
    metrics: [
      { label: 'Patient Outcomes', value: '+20%' },
      { label: 'Admin Costs', value: '-30%' },
      { label: 'Data Accuracy', value: '+95%' }
    ]
  }
]

const CaseStudiesPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [visibleStudies, setVisibleStudies] = useState([])

  useState(() => {
    const timers = caseStudies.map((_, index) => {
      return setTimeout(() => {
        setVisibleStudies(prev => [...prev, index])
      }, index * 150)
    })
    
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
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
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Case Studies</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Real-world examples of our successful technology implementations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl transition-all duration-700 ${
                visibleStudies.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'translateY(-20px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredIndex === index ? `0 0 50px -15px rgba(192, 132, 252, 0.5)` : '0 0 20px -10px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease'
              }}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-2xl`}></div>
              
              {/* Animated decorative elements */}
              <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${study.color} opacity-10 blur-3xl transition-all duration-700 group-hover:opacity-20 group-hover:scale-150`}></div>
              
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-black/60 to-black/40 mb-6 border border-white/10 text-3xl transform group-hover:scale-110 transition-transform duration-300">
                  {study.image}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                  {study.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 flex-grow">{study.description}</p>
                
                {/* Metrics display */}
                <div className="grid grid-cols-3 gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-2 rounded-lg bg-black/30 border border-white/5">
                      <div className={`text-lg font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-white/60">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Hover content */}
                <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-xs">
                    <span className="text-white/50 font-medium">Problem:</span>
                    <p className="text-white/80 mt-1">{study.problem}</p>
                  </div>
                  <div className="text-xs">
                    <span className="text-white/50 font-medium">Solution:</span>
                    <p className="text-white/80 mt-1">{study.solution}</p>
                  </div>
                  <div className="text-xs">
                    <span className="text-white/50 font-medium">Results:</span>
                    <p className={`text-white font-medium mt-1 bg-gradient-to-r ${study.color} bg-clip-text`}>{study.results}</p>
                  </div>
                </div>
                
                <div className={`mt-4 text-sm font-medium bg-gradient-to-r ${study.color} bg-clip-text text-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300`}>
                  View Case Study
                </div>
                
                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${study.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}>
                  <div className="absolute inset-0 rounded-2xl animate-border-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-full border border-white/20 bg-black/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 mx-auto group">
            View All Case Studies
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(15px, 15px);
          }
          50% {
            transform: translate(-10px, 10px);
          }
          75% {
            transform: translate(10px, -15px);
          }
        }
        
        @keyframes border-pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-border-pulse {
          animation: border-pulse 2s infinite;
        }
      `}</style>
    </section>
  )
}

export default CaseStudiesPreview