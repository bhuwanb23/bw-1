import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const techStack = ['React', 'Node.js', 'AWS', 'Docker', 'GitHub', 'Python', 'TypeScript', 'MongoDB']

const About = () => {
  return (
    <section id="about" className="relative py-32 min-h-screen flex items-center">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center w-full">
        <Reveal className="space-y-6" amount={0.15}>
          <h2 className={`${SECTION_HEADING} mb-6`}>Why Nulfinity?</h2>
          <p className="text-lg text-white/60 leading-relaxed font-light mb-8">
            We're not just developers, we're your dedicated technology partners. Our philosophy is built on three pillars: radical innovation, unwavering quality, and transparent collaboration. We dive deep into your vision to craft solutions that are not only functional but truly transformative.
          </p>
          <ul className="space-y-5 text-white/70">
            <li className="flex items-center gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
              <span className="font-medium">Elite Engineering Talent</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
              <span className="font-medium">Agile & Transparent Process</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
              <span className="font-medium">Future-Proof Architecture</span>
            </li>
          </ul>
        </Reveal>

        <Reveal as="div" className="relative" margin="-15% 0px" amount={0.2}>
          <div className="rounded-xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10">
            <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">
              Our Technology Stack
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={tech}
                  className="flex items-center justify-center p-3 rounded-lg border border-white/5 bg-black/40 text-white text-xs font-medium transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About

