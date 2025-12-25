import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const codeSnippets = [
  {
    title: 'React Hook',
    language: 'JavaScript',
    code: `const useInnovexex = () => {
  const [magic, setMagic] = useState(true)
  
  useEffect(() => {
    setMagic(prev => !prev)
  }, [])
  
  return { magic, innovation: true }
}`,
    description: 'Custom hooks for seamless development',
    color: 'from-yellow-500 to-amber-500',
    icon: '⚛️'
  },
  {
    title: 'Python AI',
    language: 'Python',
    code: `def predict_future():
    model = InnovexexAI()
    data = process_insights()
    
    prediction = model.predict(data)
    return prediction.with_confidence()`,
    description: 'AI-powered prediction algorithms',
    color: 'from-blue-500 to-cyan-500',
    icon: '🤖'
  },
  {
    title: 'Go Microservice',
    language: 'Go',
    code: `func DeployMagic() error {
    service := Innovexex.NewService()
    
    if err := service.Scale(); err != nil {
        return err
    }
    
    return service.Launch()
}`,
    description: 'Scalable microservice architecture',
    color: 'from-cyan-500 to-teal-500',
    icon: '⚙️'
  },
  {
    title: 'Node.js API',
    language: 'JavaScript',
    code: `app.post('/api/magic', (req, res) => {
  const result = performMagic(req.body)
  res.json({ success: true, data: result })
})`,
    description: 'RESTful API endpoints',
    color: 'from-green-500 to-emerald-500',
    icon: '🔌'
  },
  {
    title: 'CSS Framework',
    language: 'CSS',
    code: `.Innovexex-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}`,
    description: 'Modern CSS utilities',
    color: 'from-purple-500 to-pink-500',
    icon: '🎨'
  }
]

const OpenSourceHighlight = () => {
  const [animatedSnippets] = useState([...codeSnippets, ...codeSnippets])

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />

      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-green-500/20 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rotate-45 animate-pulse"></div>

      <div className="relative">
        <Reveal className="text-center mb-16" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>Open Source</span>
          </div>
          <h2 className={`${SECTION_HEADING} mb-6`}>
            Code that{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
              powers innovation
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto font-light">
            Building the future, one commit at a time.
          </p>
        </Reveal>

        <div className="max-w-6xl mx-auto px-4">
          {/* Infinite Scrolling Code Cards */}
          <div className="mb-16">
            <div className="relative h-48 overflow-hidden rounded-2xl">
              {/* Gradient overlays for fade effect */}
              <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black z-10"></div>
              <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black z-10"></div>

              {/* Scrolling container */}
              <div className="flex animate-scroll-left whitespace-nowrap h-full">
                {animatedSnippets.map((snippet, index) => (
                  <div
                    key={index}
                    className="inline-flex flex-shrink-0 w-80 h-full mx-3 rounded-xl border border-white/10 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-5"
                  >
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between items-start mb-3">
                        <div className="text-2xl">{snippet.icon}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${snippet.color} text-white`}>
                          {snippet.language}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2">{snippet.title}</h4>
                      <p className="text-white/70 text-sm flex-grow">{snippet.description}</p>

                      <div className="flex items-center gap-2 mt-3">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-white/50">Live Preview</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contribution Stats */}
          <Reveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10">
                <div className="text-4xl font-bold text-green-400 mb-3">8.9K+</div>
                <div className="text-white/80 font-medium">Total Commits</div>
                <div className="text-white/50 text-sm mt-2">Across all projects</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-3">12+</div>
                <div className="text-white/80 font-medium">Active Projects</div>
                <div className="text-white/50 text-sm mt-2">Open source libraries</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
                <div className="text-4xl font-bold text-purple-400 mb-3">4.2K+</div>
                <div className="text-white/80 font-medium">GitHub Stars</div>
                <div className="text-white/50 text-sm mt-2">Community appreciation</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-left {
          display: inline-block;
          animation: scroll-left 30s linear infinite;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

export default OpenSourceHighlight