import { useRef } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const services = [
  {
    title: 'Custom Software Development',
    subtitle: 'Tailored Solutions',
    description: 'End-to-end development of bespoke applications tailored to your unique business requirements and workflows.',
    features: ['Web Applications', 'Desktop Software', 'API Development', 'Database Design', 'System Integration'],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL'],
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-blue-600/20',
    accent: '#38bdf8'
  },
  {
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Automation',
    description: 'Intelligent systems that learn, adapt, and provide actionable insights to transform your business processes.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Process Automation', 'Data Mining'],
    technologies: ['TensorFlow', 'PyTorch', 'Python', 'Scikit-learn'],
    icon: '🤖',
    color: 'from-purple-500 to-violet-500',
    gradient: 'from-purple-500/20 via-violet-500/10 to-purple-600/20',
    accent: '#a855f7'
  },
  {
    title: 'Open Source Tools',
    subtitle: 'Community Driven',
    description: 'Contributing to and maintaining open-source projects that benefit the global developer community.',
    features: ['React Components', 'Node.js Packages', 'Python Libraries', 'DevOps Tools', 'Documentation'],
    technologies: ['JavaScript', 'TypeScript', 'Go', 'Rust'],
    icon: '🔧',
    color: 'from-emerald-500 to-teal-500',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-emerald-600/20',
    accent: '#34d399'
  },
  {
    title: 'Technical Consulting',
    subtitle: 'Strategic Guidance',
    description: 'Strategic guidance on technology decisions, architecture design, and comprehensive digital transformation.',
    features: ['Architecture Review', 'Technology Strategy', 'Code Audits', 'Performance Optimization', 'Team Training'],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Microservices'],
    icon: '💡',
    color: 'from-orange-500 to-amber-500',
    gradient: 'from-orange-500/20 via-amber-500/10 to-orange-600/20',
    accent: '#fb923c'
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Scalable Infrastructure',
    description: 'Scalable infrastructure and deployment pipelines for modern, efficient software delivery and operations.',
    features: ['AWS/Azure Setup', 'CI/CD Pipelines', 'Container Orchestration', 'Monitoring & Logging', 'Security'],
    technologies: ['AWS', 'Azure', 'Docker', 'Jenkins'],
    icon: '☁️',
    color: 'from-sky-500 to-blue-500',
    gradient: 'from-sky-500/20 via-blue-500/10 to-sky-600/20',
    accent: '#0ea5e9'
  },
  {
    title: 'Mobile Development',
    subtitle: 'Cross-Platform Apps',
    description: 'Native and cross-platform mobile applications with exceptional user experiences and performance.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'App Store Deployment'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    icon: '📱',
    color: 'from-pink-500 to-rose-500',
    gradient: 'from-pink-500/20 via-rose-500/10 to-pink-600/20',
    accent: '#ec4899'
  }
]

const ServicesOverview = () => {
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
          <h2 className={`${SECTION_HEADING} mb-6`}>
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
            className="service-rail overflow-x-auto scrollbar-hide px-8 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                as="div"
                delay={index * 100}
                className="flex-shrink-0"
              >
                <div
                  className="service-card group/service"
                  style={{ '--service-accent': service.accent }}
                  data-label={service.subtitle}
                >
                  <div className="relative flex h-full flex-col gap-4 text-left">
                    <div className="flex items-center gap-4">
                      <div className="service-card__icon text-4xl">{service.icon}</div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">{service.subtitle}</p>
                        <h3 className="text-xl font-semibold text-white tracking-tight">{service.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <p className="service-card__label">Key Focus</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="service-card__label">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80"
                            >
                              {tech}
                            </span>
                          ))}
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
        .service-rail {
          display: flex;
          gap: 1.5rem;
          transform-style: preserve-3d;
          perspective: 1600px;
        }
        .service-card {
          position: relative;
          width: 20rem;
          min-height: 24rem;
          border-radius: 1.75rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(2, 6, 23, 0.8);
          padding: 1.75rem;
          transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.1),
            border-color 400ms ease, box-shadow 400ms ease;
          cursor: pointer;
          isolation: isolate;
        }
        .service-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.75rem;
          background: radial-gradient(circle at 30% 0%, var(--service-accent, #6366f1), transparent 65%);
          opacity: 0.18;
          transition: opacity 500ms ease, filter 500ms ease;
          z-index: -1;
        }
        .service-card::before {
          content: attr(data-label);
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: #e5e7eb;
          opacity: 0;
          transition: 400ms ease;
          pointer-events: none;
        }
        .service-card:hover {
          transform: translateY(-14px) scale(1.05) rotateX(4deg) rotateY(-2deg);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.45);
        }
        .service-card:hover::after {
          opacity: 0.35;
          filter: blur(6px);
        }
        .service-card:hover::before {
          opacity: 1;
          transform: translateX(-50%) translateY(-4px);
        }
        .service-card:hover + .service-card {
          transform: translateY(-8px) scale(1.03);
          z-index: 5;
        }
        .service-card:hover + .service-card + .service-card {
          transform: translateY(-4px) scale(1.015);
          z-index: 3;
        }
        .service-card:has(+ .service-card:hover),
        .service-card:has(+ .service-card + .service-card:hover) {
          transform: translateY(-8px) scale(1.03);
          z-index: 5;
        }
        .service-card__icon {
          width: 48px;
          height: 48px;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          transition: transform 400ms ease;
        }
        .service-card:hover .service-card__icon {
          transform: scale(1.1) rotate(-6deg);
        }
        .service-card__label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          color: rgba(255, 255, 255, 0.45);
          margin-bottom: 0.5rem;
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
