import { useMemo, useState } from 'react'
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

const duplicateTestimonials = [...testimonialsData, ...testimonialsData]

const Testimonials = () => {
  const [pausedRow, setPausedRow] = useState(null)
  const marqueeRows = useMemo(() => {
    const rowCount = 2
    return Array.from({ length: rowCount }, (_, rowIndex) =>
      duplicateTestimonials.filter((_, idx) => idx % rowCount === rowIndex)
    )
  }, [])

  const animationDurations = [38, 44]

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
            Dual-row marquee keeps testimonials within view longer—hover to pause and read without scrolling.
          </p>
        </Reveal>

        <div className="space-y-5">
          {marqueeRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="group/marquee relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-2xl"
              onMouseEnter={() => setPausedRow(rowIndex)}
              onMouseLeave={() => setPausedRow(null)}
            >
              <div
                className="flex gap-5 py-3.5 px-4"
                style={{
                  animation: `testimonial-marquee ${animationDurations[rowIndex % animationDurations.length]}s linear infinite`,
                  animationDirection: rowIndex % 2 === 0 ? 'normal' : 'reverse',
                  animationPlayState: pausedRow === rowIndex ? 'paused' : 'running'
                }}
              >
                {[...row, ...row].map((testimonial, index) => (
                  <article
                    key={`${testimonial.name}-${index}`}
                    className="flex min-w-[300px] max-w-[340px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 text-left shadow-[0_0_30px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-[11px] font-bold">
                        {testimonial.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-white leading-tight">{testimonial.name}</p>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                          {testimonial.role.split('&')[0]} • {testimonial.industry}
                        </p>
                      </div>
                      <span className="text-base">{testimonial.logo}</span>
                    </div>
                    <p className="text-[11px] text-white/70 mb-2.5 leading-relaxed line-clamp-3">
                      “{testimonial.quote}”
                    </p>
                    <div className="mt-auto text-[10px] text-white/60 flex flex-col gap-1.5 border-t border-white/10 pt-2.5">
                      <span className="font-semibold text-white text-[11px]">{testimonial.result}</span>
                      <span className="truncate">{testimonial.project}</span>
                      <span>{testimonial.duration}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonial-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default Testimonials