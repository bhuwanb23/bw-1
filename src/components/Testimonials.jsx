import { useState, useRef, useEffect } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const testimonialsData = [
  {
    name: 'Lena Ortiz',
    role: 'Chief Technology Officer',
    company: 'OrbitTech Solutions',
    industry: 'FinTech',
    quote:
      "Innovexex transformed our legacy system into a modern, scalable platform. They outpaced our scale projections by 5x while maintaining elegant design and bulletproof infrastructure. The team's expertise in both frontend and backend development is unmatched.",
    project: 'Financial Trading Platform',
    result: '500% performance improvement',
    logo: '🏢',
    rating: 5,
    duration: '6 months'
  },
  {
    name: 'Dr. Isaac Mura',
    role: 'Founder & CEO',
    company: 'Quantum Dynamics',
    industry: 'AI Research',
    quote:
      'Working with Innovexex was a game-changer for our AI research platform. They delivered complex machine learning workflows faster than we imagined, saving us hundreds of hours each quarter. Their deep understanding of AI technologies is remarkable.',
    project: 'AI Research Platform',
    result: 'Reduced processing time by 70%',
    logo: '🧠',
    rating: 5,
    duration: '4 months'
  },
  {
    name: 'Sofia Nguyen',
    role: 'VP of Product',
    company: 'Aether Innovations',
    industry: 'SaaS',
    quote:
      "The craftsmanship and attention to detail from Innovexex is absolutely unmatched. Our enterprise clients consistently rave about the user experience and performance. They didn't just build software; they built a competitive advantage.",
    project: 'Enterprise SaaS Platform',
    result: '40% increase in user engagement',
    logo: '⚡',
    rating: 5,
    duration: '8 months'
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Engineering',
    company: 'CloudVault Systems',
    industry: 'Cloud Infrastructure',
    quote:
      "Innovexex's expertise in cloud architecture and DevOps practices helped us build a robust, auto-scaling infrastructure. Their proactive approach to security and performance optimization exceeded all our expectations.",
    project: 'Cloud Infrastructure Platform',
    result: '99.9% uptime achieved',
    logo: '☁️',
    rating: 5,
    duration: '5 months'
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -left-32 top-10 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        <Reveal className="text-center mb-16" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60 mb-4 backdrop-blur-2xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
            <span>Client Signals</span>
          </div>
          <h2 className={`${SECTION_HEADING} mb-4`}>
            Testimonials you can{' '}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              skim in one glance
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/65 max-w-2xl mx-auto">
            See what our clients say about working with us.
          </p>
        </Reveal>

        {/* Two-row infinite scrolling testimonials */}
        <div className="relative overflow-hidden py-8">
          {/* First row - left to right */}
          <div 
            className="mb-6 overflow-hidden"
            onMouseEnter={(e) => e.currentTarget.querySelector('.animate-marquee-left').style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.querySelector('.animate-marquee-left').style.animationPlayState = 'running'}
          >
            <div className="flex animate-marquee-left whitespace-nowrap">
              {/* Duplicate testimonials for seamless looping */}
              {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="mx-3 inline-block w-96 flex-shrink-0"
                >
                  <article className="flex items-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left shadow-[0_0_30px_rgba(15,23,42,0.3)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(15,23,42,0.5)] group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{testimonial.name}</p>
                      <p className="text-xs text-white/50 truncate">{testimonial.company}</p>
                      <p className="text-xs text-white/70 mt-1 truncate">"{testimonial.quote}"</p>
                    </div>
                    <span className="text-xl ml-3 flex-shrink-0">{testimonial.logo}</span>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - right to left */}
          <div 
            className="overflow-hidden"
            onMouseEnter={(e) => e.currentTarget.querySelector('.animate-marquee-right').style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.querySelector('.animate-marquee-right').style.animationPlayState = 'running'}
          >
            <div className="flex animate-marquee-right whitespace-nowrap">
              {/* Duplicate testimonials for seamless looping */}
              {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="mx-3 inline-block w-96 flex-shrink-0"
                >
                  <article className="flex items-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left shadow-[0_0_30px_rgba(15,23,42,0.3)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(15,23,42,0.5)] group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{testimonial.name}</p>
                      <p className="text-xs text-white/50 truncate">{testimonial.company}</p>
                      <p className="text-xs text-white/70 mt-1 truncate">"{testimonial.quote}"</p>
                    </div>
                    <span className="text-xl ml-3 flex-shrink-0">{testimonial.logo}</span>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Testimonials