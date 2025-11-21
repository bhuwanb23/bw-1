import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO at TechInnovate',
    content: 'The NexusFlow platform transformed our workflow automation. Implementation was seamless and the results exceeded our expectations.',
    avatar: 'SJ',
    rating: 5,
    company: 'TechInnovate'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Director at Global Solutions',
    content: 'DataSphere Analytics provided insights we never thought possible. The predictive capabilities are game-changing for our business.',
    avatar: 'MC',
    rating: 5,
    company: 'Global Solutions'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Security Lead at FinSecure',
    content: 'SecureVault gave us the confidence we needed for enterprise data protection. The encryption standards are unmatched in the industry.',
    avatar: 'ER',
    rating: 5,
    company: 'FinSecure'
  }
]

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '250+', label: 'Enterprise Clients' },
  { value: '4.9/5', label: 'Average Rating' }
]

const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Testimonials */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Testimonials</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-lg text-white/70 mb-12">
              Hear from businesses that have transformed with our solutions
            </p>
            
            <div className="relative h-64">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === activeTestimonial 
                      ? 'opacity-100 translate-x-0' 
                      : index < activeTestimonial 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                    <div className="flex items-center gap-1 text-yellow-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-xl text-white/90 mb-6 italic">"{testimonial.content}"</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-white/70 text-sm">{testimonial.role}</div>
                        <div className="text-white/50 text-xs">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex space-x-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-white w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>By The Numbers</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-lg text-white/70 mb-12">
              Metrics that demonstrate our impact on businesses worldwide
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof