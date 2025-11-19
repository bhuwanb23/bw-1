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
      "Nulfinity transformed our legacy system into a modern, scalable platform. They outpaced our scale projections by 5x while maintaining elegant design and bulletproof infrastructure. The team's expertise in both frontend and backend development is unmatched.",
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
      'Working with Nulfinity was a game-changer for our AI research platform. They delivered complex machine learning workflows faster than we imagined, saving us hundreds of hours each quarter. Their deep understanding of AI technologies is remarkable.',
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
      "The craftsmanship and attention to detail from Nulfinity is absolutely unmatched. Our enterprise clients consistently rave about the user experience and performance. They didn't just build software; they built a competitive advantage.",
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
      "Nulfinity's expertise in cloud architecture and DevOps practices helped us build a robust, auto-scaling infrastructure. Their proactive approach to security and performance optimization exceeded all our expectations.",
    project: 'Cloud Infrastructure Platform',
    result: '99.9% uptime achieved',
    logo: '☁️',
    rating: 5,
    duration: '5 months'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)
  const intervalRef = useRef(null)

  // Auto-scroll to next testimonial every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonialsData.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Scroll to the current testimonial
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollPosition = currentIndex * scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft
      const cardWidth = scrollContainerRef.current.offsetWidth
      const newIndex = Math.round(scrollPosition / cardWidth)
      
      // Only update if index actually changed
      if (newIndex !== currentIndex && newIndex < testimonialsData.length) {
        setCurrentIndex(newIndex)
        
        // Reset auto-scroll timer
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonialsData.length)
          }, 5000)
        }
      }
    }
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    
    // Reset auto-scroll timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonialsData.length)
      }, 5000)
    }
  }

  const goToPrev = () => {
    goToTestimonial((currentIndex - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const goToNext = () => {
    goToTestimonial((currentIndex + 1) % testimonialsData.length)
  }

  return (
    <section className="py-10 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -left-32 top-10 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        <Reveal className="text-center mb-10" amount={0.2}>
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

        {/* Single row horizontal scrolling testimonials */}
        <div className="relative">
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-hidden snap-x snap-mandatory w-full"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex" style={{ width: `${testimonialsData.length * 100}%` }}>
              {testimonialsData.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="w-full flex-shrink-0 snap-center px-1"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <Reveal as="div" delay={index * 100}>
                    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 text-left shadow-[0_0_30px_rgba(15,23,42,0.3)] transition duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08] mx-2 md:mx-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-lg font-bold">
                          {testimonial.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-semibold text-white leading-tight">{testimonial.name}</p>
                          <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                            {testimonial.role.split('&')[0]} • {testimonial.industry}
                          </p>
                        </div>
                        <span className="text-2xl">{testimonial.logo}</span>
                      </div>
                      <p className="text-base text-white/80 mb-5 leading-relaxed">
                        “{testimonial.quote}”
                      </p>
                      <div className="mt-auto text-sm text-white/70 flex justify-between border-t border-white/10 pt-4">
                        <span className="font-semibold text-white">{testimonial.result}</span>
                        <span>{testimonial.duration}</span>
                      </div>
                    </article>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-blue-400 w-8' 
                    : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white/70 items-center justify-center hover:bg-black/70 hover:text-white transition-all duration-300 flex md:flex"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white/70 items-center justify-center hover:bg-black/70 hover:text-white transition-all duration-300 flex md:flex"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        /* Hide scrollbar but keep functionality */
        .overflow-x-hidden::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default Testimonials