import { useState, useRef, useEffect } from 'react'
import Reveal from './Reveal.jsx'

const services = [
  {
    title: 'Custom Software Development',
    subtitle: 'Tailored Solutions',
    description: 'End-to-end development of bespoke applications tailored to your unique business requirements and workflows.',
    features: ['Web Applications', 'Desktop Software', 'API Development', 'Database Design', 'System Integration'],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL'],
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-blue-600/20'
  },
  {
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Automation',
    description: 'Intelligent systems that learn, adapt, and provide actionable insights to transform your business processes.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation', 'Data Mining'],
    technologies: ['TensorFlow', 'PyTorch', 'Python', 'Scikit-learn'],
    icon: '🤖',
    color: 'from-purple-500 to-violet-500',
    gradient: 'from-purple-500/20 via-violet-500/10 to-purple-600/20'
  },
  {
    title: 'Open Source Tools',
    subtitle: 'Community Driven',
    description: 'Contributing to and maintaining open-source projects that benefit the global developer community.',
    features: ['React Components', 'Node.js Packages', 'Python Libraries', 'DevOps Tools', 'Documentation'],
    technologies: ['JavaScript', 'TypeScript', 'Go', 'Rust'],
    icon: '🔧',
    color: 'from-emerald-500 to-teal-500',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-emerald-600/20'
  },
  {
    title: 'Technical Consulting',
    subtitle: 'Strategic Guidance',
    description: 'Strategic guidance on technology decisions, architecture design, and comprehensive digital transformation.',
    features: ['Architecture Review', 'Technology Strategy', 'Code Audits', 'Performance Optimization', 'Team Training'],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Microservices'],
    icon: '💡',
    color: 'from-orange-500 to-amber-500',
    gradient: 'from-orange-500/20 via-amber-500/10 to-orange-600/20'
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Scalable Infrastructure',
    description: 'Scalable infrastructure and deployment pipelines for modern, efficient software delivery and operations.',
    features: ['AWS/Azure Setup', 'CI/CD Pipelines', 'Container Orchestration', 'Monitoring & Logging', 'Security'],
    technologies: ['AWS', 'Azure', 'Docker', 'Jenkins'],
    icon: '☁️',
    color: 'from-sky-500 to-blue-500',
    gradient: 'from-sky-500/20 via-blue-500/10 to-sky-600/20'
  },
  {
    title: 'Mobile Development',
    subtitle: 'Cross-Platform Apps',
    description: 'Native and cross-platform mobile applications with exceptional user experiences and performance.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'App Store Deployment'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    icon: '📱',
    color: 'from-pink-500 to-rose-500',
    gradient: 'from-pink-500/20 via-rose-500/10 to-pink-600/20'
  }
]

const ServicesOverview = () => {
  const [flippedCard, setFlippedCard] = useState(null)
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent" />
      
      <div className="relative">
        <Reveal className="text-center mb-20" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              software services
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto font-light">
            From initial concept to ongoing maintenance, we provide full-spectrum software development services to help your business thrive in the digital landscape.
          </p>
        </Reveal>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 border border-white/10 text-white/70 backdrop-blur-xl transition-all duration-300 hover:bg-black/80 hover:text-white hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 border border-white/10 text-white/70 backdrop-blur-xl transition-all duration-300 hover:bg-black/80 hover:text-white hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-8 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                as="div"
                delay={index * 100}
                className="flex-shrink-0"
              >
                <div className="relative w-80 h-96 perspective-1000">
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                      flippedCard === index ? 'rotate-y-180' : ''
                    }`}
                    onMouseEnter={() => setFlippedCard(index)}
                    onMouseLeave={() => setFlippedCard(null)}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl border border-white/8 bg-black/40 backdrop-blur-sm overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 hover:opacity-100`} />
                      
                      <div className="relative p-8 h-full flex flex-col justify-center items-center text-center">
                        <div className="text-6xl mb-6 animate-pulse">{service.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-lg text-white/60 font-light">
                          {service.subtitle}
                        </p>
                        
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                          <div className="text-xs text-white/40 uppercase tracking-wider">Hover to explore</div>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-white/20 bg-black/60 backdrop-blur-xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                      
                      <div className="relative p-6 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="text-3xl">{service.icon}</div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{service.title}</h3>
                            <p className="text-sm text-white/60">{service.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-white/80 leading-relaxed mb-4 flex-grow">
                          {service.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-xs uppercase tracking-wider text-white/60 mb-2">Key Features</h4>
                            <div className="flex flex-wrap gap-1">
                              {service.features.slice(0, 3).map((feature) => (
                                <span
                                  key={feature}
                                  className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-xs uppercase tracking-wider text-white/60 mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-1">
                              {service.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`text-xs bg-gradient-to-r ${service.color} text-white px-2 py-1 rounded-full font-medium`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default ServicesOverview
