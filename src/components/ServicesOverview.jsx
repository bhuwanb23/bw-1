import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const services = [
  {
    title: 'Custom Software Development',
    subtitle: 'Tailored Solutions',
    description: 'Bespoke applications designed for your unique business needs.',
    features: ['Web Apps', 'API Development', 'System Integration'],
    technologies: ['React', 'Node.js', 'Python'],
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    accent: '#38bdf8'
  },
  {
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Automation',
    description: 'Smart systems that learn and adapt to transform your business.',
    features: ['Predictive Analytics', 'NLP', 'Computer Vision'],
    technologies: ['TensorFlow', 'Python', 'PyTorch'],
    icon: '🤖',
    color: 'from-purple-500 to-violet-500',
    accent: '#a855f7'
  },
  {
    title: 'Open Source Tools',
    subtitle: 'Community Driven',
    description: 'Contributing tools that benefit the global developer community.',
    features: ['React Components', 'Node.js Packages', 'DevOps Tools'],
    technologies: ['JavaScript', 'TypeScript', 'Go'],
    icon: '🔧',
    color: 'from-emerald-500 to-teal-500',
    accent: '#34d399'
  },
  {
    title: 'Technical Consulting',
    subtitle: 'Strategic Guidance',
    description: 'Expert guidance for your technology decisions and architecture.',
    features: ['Architecture Review', 'Tech Strategy', 'Team Training'],
    technologies: ['AWS', 'Docker', 'Microservices'],
    icon: '💡',
    color: 'from-orange-500 to-amber-500',
    accent: '#fb923c'
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Scalable Infrastructure',
    description: 'Modern infrastructure for efficient software delivery.',
    features: ['Cloud Setup', 'CI/CD Pipelines', 'Monitoring'],
    technologies: ['AWS', 'Docker', 'Kubernetes'],
    icon: '☁️',
    color: 'from-sky-500 to-blue-500',
    accent: '#0ea5e9'
  },
  {
    title: 'Mobile Development',
    subtitle: 'Cross-Platform Apps',
    description: 'Exceptional mobile experiences for iOS and Android.',
    features: ['iOS Development', 'Android Apps', 'Cross-Platform'],
    technologies: ['React Native', 'Flutter', 'Swift'],
    icon: '📱',
    color: 'from-pink-500 to-rose-500',
    accent: '#ec4899'
  }
]

const ServicesOverview = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [showAll, setShowAll] = useState(false)

  // Determine which services to display
  const displayedServices = showAll ? services : services.slice(0, 4)

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
            From concept to deployment, we provide full-spectrum software development services to help your business thrive.
          </p>
        </Reveal>

        {/* Centered Cards Container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedServices.map((service, index) => (
              <Reveal
                key={service.title}
                as="div"
                delay={index * 100}
                className="flex-shrink-0"
              >
                {/* Enhanced Card UI with Hover Flip Animation */}
                <div
                  className={`group relative w-72 h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    hoveredCard !== null && hoveredCard !== index ? 'blur-sm opacity-70' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Container with 3D Flip Effect */}
                  <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${hoveredCard === index ? 'rotate-y-180' : ''}`}>
                    {/* Front of Card */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl">
                      {/* Full gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} ${
                        hoveredCard === index ? 'opacity-100' : 'opacity-20'
                      } blur-2xl transition-opacity duration-300`}></div>

                      {/* Moving glass morphism shapes */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white/10 blur-xl animate-move-1"></div>
                        <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-white/15 blur-xl animate-move-2"></div>
                        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white/10 blur-xl animate-move-3"></div>
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col p-6 z-10">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          {service.icon}
                        </div>

                        {/* Title and subtitle */}
                        <div className="mb-4">
                          <span className="text-xs uppercase tracking-widest text-white/50">{service.subtitle}</span>
                          <h3 className="text-xl font-bold text-white mt-1">{service.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-white/70 text-sm mb-5 flex-grow">{service.description}</p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature) => (
                              <span key={feature} className="text-xs bg-white/10 px-2 py-1 rounded-lg text-white/80">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex gap-2">
                          {service.technologies.map((tech) => (
                            <span key={tech} className="text-xs text-white/60">{tech}</span>
                          ))}
                        </div>
                      </div>

                      {/* Hover animation elements */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>

                    {/* Back of Card */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rotate-y-180">
                      {/* Full gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} ${
                        hoveredCard === index ? 'opacity-100' : 'opacity-30'
                      } blur-3xl transition-opacity duration-300`}></div>

                      {/* Moving glass morphism shapes */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/15 blur-2xl animate-move-1"></div>
                        <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full bg-white/20 blur-2xl animate-move-2"></div>
                        <div className="absolute top-1/3 left-1/3 w-16 h-16 rounded-full bg-white/15 blur-2xl animate-move-3"></div>
                      </div>

                      <div className="relative h-full flex flex-col p-6 z-10">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-4`}>
                          {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                        {/* Detailed Description */}
                        <p className="text-white/80 text-sm mb-5 flex-grow">
                          {service.description} Our approach ensures quality, scalability, and performance tailored to your specific requirements.
                        </p>

                        {/* Full Features List */}
                        <div className="space-y-3 mb-5">
                          <h4 className="text-xs uppercase tracking-widest text-white/50">Key Features</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-1.5 flex-shrink-0`}></div>
                                <span className="text-sm text-white/80">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group"
          >
            {showAll ? 'Show Less' : 'View All Services'}
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        @keyframes move-1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, 15px); }
          50% { transform: translate(-15px, 10px); }
          75% { transform: translate(10px, -15px); }
        }
        
        @keyframes move-2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-10px, -15px); }
          50% { transform: translate(15px, -10px); }
          75% { transform: translate(-10px, 15px); }
        }
        
        @keyframes move-3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(15px, -10px); }
          50% { transform: translate(-10px, 15px); }
          75% { transform: translate(15px, 10px); }
        }
        
        .animate-move-1 {
          animation: move-1 8s infinite ease-in-out;
        }
        
        .animate-move-2 {
          animation: move-2 10s infinite ease-in-out;
        }
        
        .animate-move-3 {
          animation: move-3 12s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}

export default ServicesOverview