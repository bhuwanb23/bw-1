import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO at TechInnovate',
    company: 'TechInnovate',
    content: 'The proposal process was incredibly thorough and professional. They understood our requirements perfectly and delivered a solution that exceeded our expectations.',
    rating: 5,
    logo: 'TI'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Director at Global Solutions',
    company: 'Global Solutions',
    content: 'Working with their team was a game-changer for our project. The detailed proposal gave us complete confidence in their approach and capabilities.',
    rating: 5,
    logo: 'GS'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'CEO at StartupX',
    company: 'StartupX',
    content: 'Their proposal was not just a document - it was a strategic roadmap. The level of detail and thought put into every aspect was impressive.',
    rating: 5,
    logo: 'SX'
  }
]

const trustBadges = [
  { id: 1, name: 'NDA Protected', icon: '🔒' },
  { id: 2, name: 'ISO Certified', icon: '📜' },
  { id: 3, name: '24/7 Support', icon: '🎧' },
  { id: 4, name: '100% Satisfaction', icon: '💯' }
]

const clientLogos = ['Client A', 'Client B', 'Client C', 'Client D', 'Client E', 'Client F']

const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our solutions
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="mb-12 sm:mb-20">
          <div className="relative min-h-[320px] sm:min-h-[280px] md:h-56">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === activeTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : index < activeTestimonial 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 h-full">
                  <div className="flex items-center gap-1 text-yellow-400 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm sm:text-base font-bold flex-shrink-0">
                      {testimonial.logo}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-white text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-white/70 text-xs sm:text-sm">{testimonial.role}</div>
                      <div className="text-white/50 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mt-8">
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
        
        {/* Trust Badges */}
        <div className="mb-12 sm:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {trustBadges.map((badge) => (
              <div 
                key={badge.id} 
                className="flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{badge.icon}</div>
                <div className="font-bold text-white text-sm sm:text-base text-center">{badge.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Client Logos */}
        <div className="text-center">
          <p className="text-white/70 mb-8">Trusted by startups and enterprises worldwide</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-black/20 rounded-xl border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white/80 font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof