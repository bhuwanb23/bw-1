import { useState, useEffect } from 'react'
import Reveal from './Reveal.jsx'

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
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/3 to-transparent" />
      
      {/* Animated code particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-green-400/20 text-xs font-mono animate-pulse">{'<>'}</div>
        <div className="absolute top-1/3 right-1/3 text-blue-400/20 text-xs font-mono animate-ping" style={{ animationDelay: '1s' }}>{'{ }'}</div>
        <div className="absolute bottom-1/4 left-1/3 text-purple-400/20 text-xs font-mono animate-pulse" style={{ animationDelay: '2s' }}>{'[ ]'}</div>
        <div className="absolute bottom-1/3 right-1/4 text-orange-400/20 text-xs font-mono animate-ping" style={{ animationDelay: '0.5s' }}>{'( )'}</div>
      </div>
      
      <div className="relative">
        <Reveal className="text-center mb-20" amount={0.2}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            Code that{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              powers innovation
            </span>
          </h2>
          <div className="text-lg text-white/60 max-w-3xl mx-auto font-light mb-4">
            {typingText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        </Reveal>

        {/* Live Code Terminal */}
        <Reveal className="mb-16" delay={200}>
          <div className="relative max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-white/60 text-sm font-mono">nulfinity-terminal</span>
                </div>
                <div className="flex gap-2">
                  {codeSnippets.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSnippet(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeSnippet ? 'bg-green-400' : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-green-400 font-mono text-sm">$</span>
                  <span className="text-white/80 font-mono text-sm">
                    cat {codeSnippets[activeSnippet].title.toLowerCase().replace(' ', '_')}.{codeSnippets[activeSnippet].language.toLowerCase() === 'javascript' ? 'js' : codeSnippets[activeSnippet].language.toLowerCase() === 'python' ? 'py' : 'go'}
                  </span>
                </div>
                
                <div className="relative">
                  <pre className="text-sm font-mono text-white/90 leading-relaxed overflow-x-auto">
                    <code>{codeSnippets[activeSnippet].code}</code>
                  </pre>
                  
                  <div className="absolute top-2 right-2">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      codeSnippets[activeSnippet].language === 'JavaScript' 
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        : codeSnippets[activeSnippet].language === 'Python'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {codeSnippets[activeSnippet].language}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 text-white/60 text-sm">
                  {codeSnippets[activeSnippet].description}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Contribution Impact Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {contributions.map((contribution, index) => (
            <Reveal
              key={contribution.project}
              as="div"
              delay={300 + index * 100}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-black/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-black/60 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-20 ${
                  contribution.impact === 'High' ? 'from-blue-500/30 to-cyan-500/30' :
                  contribution.impact === 'Critical' ? 'from-red-500/30 to-pink-500/30' :
                  contribution.impact === 'Essential' ? 'from-green-500/30 to-emerald-500/30' :
                  'from-purple-500/30 to-violet-500/30'
                }`} />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {contribution.project}
                    </h3>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      contribution.impact === 'High' ? 'bg-blue-500/20 text-blue-300' :
                      contribution.impact === 'Critical' ? 'bg-red-500/20 text-red-300' :
                      contribution.impact === 'Essential' ? 'bg-green-500/20 text-green-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {contribution.impact}
                    </span>
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-2">
                    {contribution.commits}
                  </div>
                  <div className="text-sm text-white/60">
                    Commits contributed
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action */}
        <Reveal className="text-center" delay={500}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-8 md:p-12 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-green-500/10" />
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Join the Revolution
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Contribute to projects that matter. Shape the future of development with code that impacts millions.
              </p>
              
              <a
                href="https://github.com/nulfinity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Start Contributing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default OpenSourceHighlight
