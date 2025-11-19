import Reveal from './Reveal.jsx'
import Footer from './Footer.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const Contact = () => {
  return (
    <section id="contact" className="py-32 min-h-screen flex items-center relative">
      <div className="w-full">
        <Reveal className="text-center space-y-6" amount={0.2}>
          <div className="rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm p-12 max-w-3xl mx-auto">
            <h2 className={`${SECTION_HEADING} mb-6`}>Ready to Build the Future?</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 font-light">
              Let's discuss how Nulfinity can elevate your business with cutting-edge software solutions. Your vision, our expertise.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-10 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10"
            >
              Let's Talk
            </a>
          </div>
        </Reveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 mt-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <Footer />
        </div>
      </div>
    </section>
  )
}

export default Contact

