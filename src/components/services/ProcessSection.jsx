import { useState, useEffect } from 'react'

const processSteps = [
  {
    title: 'Discovery & Analysis',
    description: 'We analyze your requirements and define project scope with precision.',
    icon: '🔍',
    color: 'from-blue-500 to-cyan-500',
    details: [
      'Requirement gathering sessions',
      'Stakeholder interviews',
      'Technical feasibility assessment',
      'Solution architecture planning'
    ]
  },
  {
    title: 'Solution Design',
    description: 'Create intuitive interfaces and robust system architecture.',
    icon: '🎨',
    color: 'from-purple-500 to-violet-500',
    details: [
      'User experience mapping',
      'Wireframing & prototyping',
      'Visual design creation',
      'Technical architecture design'
    ]
  },
  {
    title: 'Development',
    description: 'Build robust solutions with clean, efficient code and best practices.',
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
    title: 'Quality Assurance',
    description: 'Rigorous testing to ensure quality, performance, and security.',
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
    title: 'Deployment',
    description: 'Seamless deployment to production environments with zero downtime.',
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
    title: 'Support & Optimization',
    description: 'Ongoing maintenance, monitoring, and performance optimization.',
    icon: '🛠️',
    color: 'from-indigo-500 to-blue-500',
    details: [
      '24/7 monitoring',
      'Regular updates & patches',
      'Performance optimization',
      'Technical support & maintenance'
    ]
  }
]

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Solution Process</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every project follows our proven six-stage methodology for predictable results
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5/40 backdrop-blur-2xl p-6 space-y-8">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="flex flex-wrap justify-between gap-4">
              {processSteps.map((step, index) => {
                const active = activeStep === index
                return (
                  <button
                    key={step.title}
                    className={`flex-1 min-w-[120px] rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                      active ? `border-white/40 bg-white/10 shadow-[0_15px_40px_rgba(15,23,42,0.4)]` : 'border-white/10 bg-transparent'
                    }`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl`}>
                        {step.icon}
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">Step {index + 1}</p>
                        <p className="text-sm font-semibold text-white">{step.title}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/50 p-6 md:p-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">{processSteps[activeStep].title}</h3>
              <p className="text-white/75">{processSteps[activeStep].description}</p>
              <ul className="space-y-2">
                {processSteps[activeStep].details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-sm text-white/80">
                    <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${processSteps[activeStep].color}`}></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Why it matters</p>
              <p className="text-white/80">
                Each phase includes measurable checkpoints, dedicated owners, and automation to keep delivery on track. The result:
                predictable launches and transparent communication.
              </p>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold text-white">48h</p>
                  <p className="text-xs text-white/60">Avg. kickoff</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold text-white">95%</p>
                  <p className="text-xs text-white/60">On-time delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection