import { useState } from 'react'

const DeveloperDocsCTA = () => {
  const [copied, setCopied] = useState(false)

  const codeSnippet = `import { NexusFlow } from '@nulfinity/nexusflow';

const client = new NexusFlow({
  apiKey: 'your-api-key',
  projectId: 'your-project-id'
});

// Create a new task
const task = await client.tasks.create({
  title: 'Implement new feature',
  assignee: 'user@example.com',
  dueDate: '2023-12-31'
});`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-5 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>For Developers</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Developer</span> Resources
              </h2>
              
              <p className="text-lg text-white/80 mb-6">
                Comprehensive documentation, SDKs, and tools to integrate our products into your applications.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm sm:text-base font-medium hover:scale-[1.02] transition-transform duration-300">
                  View Documentation
                </button>
                <button className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-white/20 bg-black/30 text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  API Reference
                </button>
                <button className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-white/20 bg-black/30 text-white text-sm sm:text-base font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  SDK Downloads
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-black/50 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-black/30">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-white/60 ml-2">integration-example.js</div>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-black/60 to-black/40">
                  <pre className="text-xs sm:text-sm text-white/90 overflow-x-auto">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              </div>
              
              <button 
                onClick={copyToClipboard}
                className="absolute top-4 right-4 px-3 py-1.5 text-xs rounded-lg border border-white/20 bg-black/50 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-1"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Contribute to Our Open Source Projects</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex-1 min-w-0 sm:min-w-[200px] p-4 rounded-xl border border-white/10 bg-black/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">SDK Libraries</h4>
                    <p className="text-xs text-white/60">For all major platforms</p>
                  </div>
                </div>
                <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  View on GitHub
                </button>
              </div>
              
              <div className="flex-1 min-w-[200px] p-4 rounded-xl border border-white/10 bg-black/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Community Forum</h4>
                    <p className="text-xs text-white/60">Get help from experts</p>
                  </div>
                </div>
                <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  Join Discussion
                </button>
              </div>
              
              <div className="flex-1 min-w-[200px] p-4 rounded-xl border border-white/10 bg-black/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Bug Reports</h4>
                    <p className="text-xs text-white/60">Help us improve</p>
                  </div>
                </div>
                <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                  Submit Issue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeveloperDocsCTA