import { useState, useEffect } from 'react'

const processSteps = [
  {
    title: 'Discover',
    description: 'We analyze your requirements and define project scope.',
    icon: '🔍',
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Requirement gathering sessions',
      'Stakeholder interviews',
      'Market analysis',
      'Competitive research'
    ]
  },
  {
    title: 'Design',
    description: 'Create intuitive interfaces and system architecture.',
    icon: '🎨',
    color: 'from-purple-500 to-violet-500',
    details: [
      'User experience mapping',
      'Wireframing & prototyping',
      'Visual design creation',
      'Technical architecture'
    ]
  },
  {
    title: 'Develop',
    description: 'Build robust solutions with clean, efficient code.',
    icon: '💻',
    color: 'from-emerald-500 to-teal-500',
    details: [
      'Agile development process',
      'Code reviews & testing',
      'Continuous integration',
      'Version control management'
    ]
  },
  {
    title: 'Test',
    description: 'Rigorous testing to ensure quality and performance.',
    icon: '✅',
    color: 'from-amber-500 to-orange-500',
    details: [
      'Automated testing suites',
      'Manual quality assurance',
      'Performance benchmarking',
      'Security vulnerability scans'
    ]
  },
  {
    title: 'Deploy',
    description: 'Seamless deployment to production environments.',
    icon: '🚀',
    color: 'from-pink-500 to-rose-500',
    details: [
      'Infrastructure setup',
      'Deployment automation',
      'Monitoring implementation',
      'Backup & recovery plans'
    ]
  },
  {
    title: 'Support',
    description: 'Ongoing maintenance and optimization.',
    icon: '🛠️',
    color: 'from-indigo-500 to-blue-500',
    details: [
      '24/7 monitoring',
      'Regular updates',
      'Performance optimization',
      'Technical support'
    ]
  }
]

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-advance steps for demo purposes
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % processSteps.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Streamlined <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Workflow</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our proven methodology ensures seamless project delivery from conception to completion
          </p>
        </div>
        
        {/* Enhanced Timeline with more content */}
        <div className="relative">
          {/* Central timeline line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
          
          {/* Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex items-center transition-all duration-700 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeStep === index 
                      ? `bg-gradient-to-r ${step.color} scale-125 shadow-2xl animate-pulse` 
                      : 'bg-black border-2 border-white/20'
                  }`}>
                    <span className={`text-2xl ${activeStep === index ? 'text-white' : 'text-white/50'}`}>
                      {step.icon}
                    </span>
                  </div>
                  
                  {/* Glowing ring when active */}
                  {activeStep === index && (
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30 animate-ping`}></div>
                  )}
                </div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-16 md:pr-24 text-right' : 'pl-16 md:pl-24'}`}>
                  <div className={`p-8 rounded-3xl border transition-all duration-500 transform hover:scale-105 ${
                    activeStep === index
                      ? 'border-white/30 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl shadow-2xl'
                      : 'border-white/10 bg-black/20 hover:border-white/20'
                  }`}
                  style={{
                    boxShadow: activeStep === index ? `0 0 50px -15px rgba(139, 92, 246, 0.4)` : 'none'
                  }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-white/60">STEP {String(index + 1).padStart(2, '0')}</span>
                      <div className={`h-px flex-grow ${index % 2 === 0 ? 'mr-4' : 'ml-4'} bg-gradient-to-r ${index % 2 === 0 ? 'from-white/20 to-transparent' : 'from-transparent to-white/20'}`}></div>
                    </div>
                    
                    <h3 className={`text-3xl font-bold mb-4 ${
                      activeStep === index 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90' 
                        : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-white/90 text-lg mb-6">{step.description}</p>
                    
                    {/* Detailed points */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3 text-white/80">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for alignment */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-6 py-3 text-sm font-medium text-white/60 mb-8 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse" />
            <span>Ready to start your project?</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Amazing</span> Together
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Start Your Project
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 bg-black/30 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection