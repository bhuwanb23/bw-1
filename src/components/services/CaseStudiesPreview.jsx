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
              className={`case-card group relative transition-all duration-500 ${
                visibleStudies.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`card ${hoveredIndex === index ? 'active' : ''}`}>
                <div className="card-glow" />
                <div className="card-inner">
                  <div className="card-front">
                    <div className="front-head">
                      <div className="emoji">{study.image}</div>
                      <div>
                        <p className="eyebrow">Case Study</p>
                        <p className="front-title">{study.title}</p>
                      </div>
                    </div>
                    <p className="front-summary">{study.problem}</p>
                    <div className="front-metrics">
                      {study.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <p className="value">{metric.value}</p>
                          <p className="label">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="front-hint">Hover to view solution</p>
                  </div>

                  <div className="card-back">
                    <div className="back-head">
                      <h3>{study.title}</h3>
                      <p>{study.description}</p>
                    </div>
                    <div className="back-metrics">
                      {study.metrics.map((metric, idx) => (
                        <div key={metric.label} className={`metric gradient-${idx % 4}`}>
                          <span>{metric.value}</span>
                          <p>{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="detail-block">
                      <p className="detail-label">Solution</p>
                      <p>{study.solution}</p>
                    </div>
                    <div className="detail-block">
                      <p className="detail-label">Results</p>
                      <p>{study.results}</p>
                    </div>
                  </div>
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

         .case-card {
           perspective: 1400px;
         }

         .card {
           position: relative;
           width: 100%;
           height: 320px;
           border-radius: 28px;
           overflow: hidden;
           border: 1px solid rgba(255, 255, 255, 0.08);
           background: rgba(10, 12, 26, 0.65);
           transition: transform 400ms ease, box-shadow 400ms ease;
         }

         .card.active {
           box-shadow: 0 30px 80px rgba(15, 23, 42, 0.6);
         }

         .content {
           position: relative;
           width: 100%;
           height: 100%;
         }

         .card-inner {
           position: relative;
           width: 100%;
           height: 100%;
           padding: 18px;
           color: #fff;
         }

         .card-front {
           display: flex;
           flex-direction: column;
           gap: 16px;
           height: 100%;
           transition: opacity 300ms ease;
         }

         .card.active .card-front {
           opacity: 0;
         }

         .front-head {
           display: flex;
           gap: 12px;
           align-items: center;
         }

         .emoji {
           font-size: 2rem;
         }

         .eyebrow {
           font-size: 0.65rem;
           letter-spacing: 0.35em;
           text-transform: uppercase;
           color: rgba(255, 255, 255, 0.45);
         }

         .front-title {
           font-size: 1.1rem;
           font-weight: 600;
         }

         .front-summary {
           background: rgba(255, 255, 255, 0.05);
           padding: 12px;
           border-radius: 18px;
           font-size: 0.9rem;
           color: rgba(255, 255, 255, 0.75);
         }

         .front-metrics {
           display: flex;
           justify-content: space-between;
           font-size: 0.8rem;
           color: rgba(255, 255, 255, 0.6);
         }

         .front-metrics .value {
           font-size: 1.2rem;
           font-weight: 600;
           color: #fff;
         }

         .front-hint {
           font-size: 0.75rem;
           color: rgba(255, 255, 255, 0.45);
         }

         .card-back {
           position: absolute;
           inset: 18px;
           padding: 18px;
           border-radius: 22px;
           border: 1px solid rgba(255, 255, 255, 0.2);
           background: rgba(0, 0, 0, 0.85);
           opacity: 0;
           transform: translateY(10px);
           transition: opacity 400ms ease, transform 400ms ease;
           display: flex;
           flex-direction: column;
           gap: 12px;
         }

         .card.active .card-back {
           opacity: 1;
           transform: translateY(0);
         }

         .back-head h3 {
           font-size: 1.2rem;
           margin-bottom: 4px;
         }

         .back-head p {
           font-size: 0.9rem;
           color: rgba(255, 255, 255, 0.75);
         }

         .back-metrics {
           display: grid;
           grid-template-columns: repeat(3, minmax(0, 1fr));
           gap: 8px;
         }

         .metric {
           border-radius: 16px;
           padding: 10px;
           text-align: center;
           background: rgba(255, 255, 255, 0.08);
         }

         .metric span {
           font-weight: 600;
           font-size: 1rem;
         }

         .detail-block {
           background: rgba(255, 255, 255, 0.04);
           border-radius: 16px;
           padding: 12px;
           font-size: 0.85rem;
           color: rgba(255, 255, 255, 0.8);
         }

         .detail-label {
           text-transform: uppercase;
           letter-spacing: 0.3em;
           font-size: 0.65rem;
           color: rgba(255, 255, 255, 0.5);
           margin-bottom: 4px;
         }

         .gradient-0 {
           background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(168, 85, 247, 0.25));
         }
         .gradient-1 {
           background: linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(236, 72, 153, 0.25));
         }
         .gradient-2 {
           background: linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(6, 182, 212, 0.25));
         }
         .gradient-3 {
           background: linear-gradient(135deg, rgba(249, 115, 22, 0.25), rgba(250, 204, 21, 0.25));
         }
      `}</style>
    </section>
  )
}

export default CaseStudiesPreview