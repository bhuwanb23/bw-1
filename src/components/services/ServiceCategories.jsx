import { useState } from 'react'

const serviceCategories = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke applications designed for your unique business needs.',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Artificial Intelligence & ML Solutions',
    description: 'Smart systems that learn and adapt to transform your business.',
    icon: '🤖',
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Modern infrastructure for efficient software delivery.',
    icon: '☁️',
    color: 'from-sky-500 to-blue-500'
  },
  {
    title: 'API Development & Integrations',
    description: 'Seamless connectivity between your systems and services.',
    icon: '🔗',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that delight users and drive engagement.',
    icon: '🎨',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Open-Source Development',
    description: 'Transparent, community-driven software solutions.',
    icon: '🔓',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Automation Tools',
    description: 'Streamline operations with intelligent automation solutions.',
    icon: '⚙️',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'SaaS Product Development',
    description: 'Scalable cloud-based software for modern businesses.',
    icon: '🚀',
    color: 'from-cyan-500 to-blue-500'
  }
]

const ServiceCategories = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Service Categories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive technology services designed to drive your business forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl transition-all duration-500"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredCard === index 
                  ? `0 0 40px -15px rgba(56, 189, 248, 0.4)` 
                  : '0 0 20px -10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease'
              }}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-2xl`}></div>
              
              {/* Animated decorative elements */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl transition-all duration-700 group-hover:opacity-20 group-hover:scale-150`}></div>
              
              <div className="p-6 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm flex-grow">{service.description}</p>
                <div className={`mt-4 h-1 w-12 bg-gradient-to-r ${service.color} rounded-full transition-all duration-500 ${
                  hoveredCard === index ? 'w-full' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories