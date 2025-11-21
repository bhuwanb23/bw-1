import { useState } from 'react'

const NewsletterCTA = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Newsletter subscription logic would go here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <section className="relative rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl p-8 md:p-12 mb-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${25 + Math.random() * 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span>Stay Updated</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Our Tech Community
        </h2>

        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Get the latest articles, insights, and community discussions delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-white/60 text-sm mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}px, ${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}px) scale(1.2);
            opacity: 0;
          }
        }
        
        .absolute > div {
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  )
}

export default NewsletterCTA