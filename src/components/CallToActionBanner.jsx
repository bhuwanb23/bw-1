import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const CallToActionBanner = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative">
        <Reveal className="text-center" amount={0.2}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-8 md:p-10 backdrop-blur-xl max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/20 blur-2xl" />
            
            <div className="relative">
              <h2 className={`${SECTION_HEADING} mb-4`}>
                Ready to build something{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  amazing?
                </span>
              </h2>
              
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Let's transform your ideas into powerful software solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
                >
                  Start Your Project
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:text-white"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CallToActionBanner
