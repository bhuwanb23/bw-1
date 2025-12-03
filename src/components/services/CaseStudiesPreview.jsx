import { useState, useEffect } from 'react'

const caseStudies = [
  {
    id: 1,
    title: 'Enterprise SaaS Platform',
    description: 'Custom SaaS solution for enterprise resource planning and workflow automation.',
    problem: 'Fragmented systems causing inefficiencies and data silos across departments.',
    solution: 'Unified cloud-based platform with real-time analytics and mobile accessibility.',
    results: '40% increase in productivity and 60% reduction in operational costs.',
    image: '💼',
    color: 'from-blue-500 to-cyan-500',
    metrics: [
      { label: 'Productivity', value: '+40%' },
      { label: 'Costs', value: '-60%' },
      { label: 'Uptime', value: '99.95%' }
    ],
    category: 'SaaS',
    timeline: '6 months',
    tech: ['React', 'Node.js', 'AWS', 'MongoDB']
  },
  {
    id: 2,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Intelligent analytics platform for real-time business insights and predictions.',
    problem: 'Data overload without actionable insights for decision-making.',
    solution: 'Created ML-powered dashboard with predictive analytics and automated reporting.',
    results: 'Reduced decision-making time by 75% and improved forecast accuracy by 85%.',
    image: '🤖',
    color: 'from-purple-500 to-violet-500',
    metrics: [
      { label: 'Decision Time', value: '-75%' },
      { label: 'Forecast Accuracy', value: '+85%' },
      { label: 'ROI', value: '+120%' }
    ],
    category: 'AI/ML',
    timeline: '8 months',
    tech: ['Python', 'TensorFlow', 'React', 'D3.js']
  },
  {
    id: 3,
    title: 'E-Commerce & Mobile Solution',
    description: 'Omnichannel retail platform with mobile app and payment integration.',
    problem: 'Declining sales due to outdated e-commerce platform and poor mobile experience.',
    solution: 'Redesigned responsive web platform with native mobile app and personalized recommendations.',
    results: '65% increase in conversions and 50% growth in mobile engagement.',
    image: '🛒',
    color: 'from-emerald-500 to-teal-500',
    metrics: [
      { label: 'Conversions', value: '+65%' },
      { label: 'Mobile Engagement', value: '+50%' },
      { label: 'Revenue', value: '+45%' }
    ],
    category: 'E-Commerce',
    timeline: '5 months',
    tech: ['React Native', 'Next.js', 'Stripe', 'Firebase']
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    description: 'Secure platform for patient data management and telemedicine services.',
    problem: 'Inefficient patient management and lack of remote healthcare capabilities.',
    solution: 'Created HIPAA-compliant system with telemedicine integration and AI diagnostics.',
    results: 'Improved patient outcomes by 30% and reduced administrative workload by 50%.',
    image: '🏥',
    color: 'from-amber-500 to-orange-500',
    metrics: [
      { label: 'Patient Outcomes', value: '+30%' },
      { label: 'Admin Workload', value: '-50%' },
      { label: 'Data Security', value: '100%' }
    ],
    category: 'Healthcare',
    timeline: '9 months',
    tech: ['Angular', '.NET Core', 'Azure', 'HIPAA Compliant']
  }
]

const CaseStudiesPreview = () => {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0])
  const [animationClass, setAnimationClass] = useState('')
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate floating particles
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${15 + Math.random() * 10}s`
    }))
    setParticles(newParticles)
  }, [])

  const handleStudyChange = (study) => {
    setAnimationClass('opacity-0 scale-95')
    setTimeout(() => {
      setActiveStudy(study)
      setAnimationClass('opacity-100 scale-100')
    }, 150)
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
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
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Case Studies</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Innovation <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real-world transformations powered by cutting-edge technology and strategic thinking
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Study Selector */}
          <div className="lg:col-span-1 space-y-4">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => handleStudyChange(study)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeStudy.id === study.id
                    ? `border-white/30 bg-gradient-to-br ${study.color}/10 backdrop-blur-xl scale-[1.02] shadow-lg`
                    : 'border-white/10 bg-black/20 hover:border-white/20 hover:bg-black/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center text-xl`}>
                    {study.image}
                  </div>
                  <div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-white/80">
                      {study.category}
                    </span>
                    <h3 className="font-bold text-white mt-2">{study.title}</h3>
                    <p className="text-sm text-white/70 mt-1 line-clamp-2">{study.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Active Case Study Detail */}
          <div className="lg:col-span-2">
            <div className={`rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-2xl p-8 transition-all duration-300 ${animationClass}`}>
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl">
                  {activeStudy.image}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-3xl font-bold text-white">{activeStudy.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                      {activeStudy.timeline}
                    </span>
                  </div>
                  
                  <p className="text-white/80 mb-8">{activeStudy.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        The Challenge
                      </h4>
                      <p className="text-white/70 bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                        {activeStudy.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Our Solution
                      </h4>
                      <p className="text-white/70 bg-green-500/5 p-4 rounded-xl border border-green-500/10">
                        {activeStudy.solution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-white mb-4">Key Results</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {activeStudy.metrics.map((metric, index) => (
                        <div key={index} className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                          <p className="text-2xl font-bold text-white">{metric.value}</p>
                          <p className="text-sm text-white/70 mt-1">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-white/60 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeStudy.tech.map((tech, index) => (
                          <span key={index} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-2">
                      View Full Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold text-white">200+</p>
            <p className="text-white/70 mt-1">Projects Completed</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold text-white">98%</p>
            <p className="text-white/70 mt-1">Client Satisfaction</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold text-white">50%</p>
            <p className="text-white/70 mt-1">Average Cost Savings</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="text-white/70 mt-1">Support Coverage</p>
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

export default CaseStudiesPreview