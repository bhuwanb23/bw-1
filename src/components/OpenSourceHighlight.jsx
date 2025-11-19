import { useState, useEffect } from 'react'
import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const codeSnippets = [
  {
    title: 'React Hook',
    language: 'JavaScript',
    code: `const useNulfinity = () => {
  const [magic, setMagic] = useState(true)
  
  useEffect(() => {
    setMagic(prev => !prev)
  }, [])
  
  return { magic, innovation: true }
}`,
    description: 'Custom hooks for seamless development'
  },
  {
    title: 'Python AI',
    language: 'Python',
    code: `def predict_future():
    model = NulfinityAI()
    data = process_insights()
    
    prediction = model.predict(data)
    return prediction.with_confidence()`,
    description: 'AI-powered prediction algorithms'
  },
  {
    title: 'Go Microservice',
    language: 'Go',
    code: `func DeployMagic() error {
    service := nulfinity.NewService()
    
    if err := service.Scale(); err != nil {
        return err
    }
    
    return service.Launch()
}`,
    description: 'Scalable microservice architecture'
  }
]

const contributions = [
  { project: 'React Ecosystem', commits: '2.4K+', impact: 'High' },
  { project: 'AI/ML Libraries', commits: '1.8K+', impact: 'Critical' },
  { project: 'DevOps Tools', commits: '3.2K+', impact: 'Essential' },
  { project: 'Cloud Platforms', commits: '1.5K+', impact: 'Vital' }
]

const OpenSourceHighlight = () => {
  const [activeSnippet, setActiveSnippet] = useState(0)
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const text = "Building the future, one commit at a time..."
    let index = 0

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSnippet((prev) => (prev + 1) % codeSnippets.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-6 md:py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/3 to-transparent" />

      <div className="relative">

        <Reveal className="text-center mb-20" amount={0.2}>
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


        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Compact Code Terminal */}
            <Reveal delay={200}>
              <div className="rounded-lg border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/40">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-white/60 text-xs font-mono">terminal</span>
                  </div>
                  <div className="flex gap-1">
                    {codeSnippets.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSnippet(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === activeSnippet ? 'bg-green-400' : 'bg-white/20 hover:bg-white/40'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400 font-mono text-xs">$</span>
                    <span className="text-white/80 font-mono text-xs">
                      cat {codeSnippets[activeSnippet].title.toLowerCase().replace(' ', '_')}.{codeSnippets[activeSnippet].language.toLowerCase() === 'javascript' ? 'js' : codeSnippets[activeSnippet].language.toLowerCase() === 'python' ? 'py' : 'go'}
                    </span>
                  </div>

                  <div className="relative">
                    <pre className="text-xs font-mono text-white/90 leading-relaxed overflow-x-auto">
                      <code>{codeSnippets[activeSnippet].code.substring(0, 200)}...</code>
                    </pre>

                    <div className="absolute top-1 right-1">
                      <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${codeSnippets[activeSnippet].language === 'JavaScript'
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : codeSnippets[activeSnippet].language === 'Python'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-cyan-500/20 text-cyan-300'
                        }`}>
                        {codeSnippets[activeSnippet].language}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 text-white/60 text-xs">
                    {codeSnippets[activeSnippet].description}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Compact Contributions */}
            <Reveal delay={300}>
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  Key Contributions
                </h3>

                {contributions.map((contribution, index) => (
                  <div
                    key={contribution.project}
                    className="relative overflow-hidden rounded-lg border border-white/8 bg-black/40 p-3 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-black/60"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate">
                          {contribution.project}
                        </h4>
                        <p className="text-xs text-white/60">
                          {contribution.commits} commits
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${contribution.impact === 'High' ? 'bg-blue-500/20 text-blue-300' :
                          contribution.impact === 'Critical' ? 'bg-red-500/20 text-red-300' :
                            contribution.impact === 'Essential' ? 'bg-green-500/20 text-green-300' :
                              'bg-purple-500/20 text-purple-300'
                          }`}>
                          {contribution.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenSourceHighlight
