import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const projects = [
  {
    name: 'Quantum Analytics',
    description: 'An advanced financial forecasting platform.',
    image: (
      <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">📊</div>
          <div className="text-sm text-white/60">Dashboard Preview</div>
        </div>
      </div>
    ),
  },
  {
    name: 'Aura Home',
    description: 'An intelligent smart home management app.',
    image: (
      <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">🏠</div>
          <div className="text-sm text-white/60">Mobile App Preview</div>
        </div>
      </div>
    ),
  },
]

const Portfolio = () => {
  const projectGradients = [
    'from-blue-500/15 via-purple-500/10 to-blue-600/15',
    'from-purple-500/15 via-blue-500/10 to-purple-600/15',
  ]

  return (
    <section id="portfolio" className="py-32 min-h-screen flex items-center">
      <div className="flex flex-col gap-20 w-full">
        <Reveal className="reveal-up text-center" amount={0.2}>
          <h2 className={`${SECTION_HEADING} mb-6`}>Innovations We've Built</h2>
          <p className="text-lg text-white/60 font-light">A glimpse into our portfolio of success stories.</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              as="article"
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10"
              delay={index * 120}
            >
              <div className="relative">
                <div className="w-full h-64 bg-black/40 rounded-lg flex items-center justify-center mb-6 border border-white/5">
                  <div className="text-center">
                    <div className="text-5xl mb-2 opacity-50">{index === 0 ? '📊' : '🏠'}</div>
                    <div className="text-sm text-white/30">Preview</div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{project.name}</h3>
                  <p className="text-white/50 font-light">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

