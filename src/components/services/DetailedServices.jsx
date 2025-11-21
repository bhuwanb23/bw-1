import { useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Bespoke applications designed for your unique business needs.',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that learn and adapt to transform your business.',
    icon: '🤖',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    description: 'Modern infrastructure for efficient software delivery.',
    icon: '☁️',
    color: 'from-sky-500 to-blue-500'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that delight users and drive engagement.',
    icon: '🎨',
    color: 'from-emerald-500 to-teal-500'
  }
]

const DetailedServices = () => {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Expert <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive technology services designed to drive your business forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl border cursor-pointer transition-all duration-500 transform ${
                hoveredService === service.id
                  ? 'border-white/30 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl scale-105 shadow-2xl'
                  : 'border-white/10 bg-black/20 hover:border-white/20'
              }`}
              style={{
                boxShadow: hoveredService === service.id ? `0 0 30px -10px rgba(56, 189, 248, 0.3)` : 'none'
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="p-6 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm flex-grow">{service.description}</p>
                <div className={`mt-4 h-1 w-12 bg-gradient-to-r ${service.color} rounded-full transition-all duration-500 ${
                  hoveredService === service.id ? 'w-full' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DetailedServices