import { useState, useEffect } from 'react'

const BlogHero = ({
  title = 'Blog & Insights',
  subtitle = 'Tech articles, community discussions, answers, and insights.',
  stats = [
    { label: 'Active Readers', value: '72K+' },
    { label: 'Published Posts', value: '640+' },
    { label: 'Community Answers', value: '4.2K' }
  ],
  tabs,
  activeTab,
  onTabChange
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center mb-24">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />
          <div className="absolute top-1/5 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl md:h-96 md:w-96" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl md:h-96 md:w-96" />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
            style={{
              width: `${Math.random() * 10 + 6}px`,
              height: `${Math.random() * 10 + 6}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${24 + Math.random() * 16}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 text-center -mt-10 sm:px-6 md:px-8">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              <span className="h-1 w-1 rounded-full bg-blue-400 animate-ping" />
              Blog Hub
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white tracking-tight">
              {title.split('&')[0]}&nbsp;
              <span className="gradient-text-animated">
                {title.split('&')[1] || ''}
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/70 leading-relaxed font-light">{subtitle}</p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary-spline btn-primary-spline-rounded">
                Subscribe
              </button>
              <button className="btn-ghost-spline btn-ghost-spline-rounded">
                Submit story
              </button>
            </div>

            {tabs?.length ? (
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange?.(tab.id)}
                    className={`rounded-2xl px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.2)]'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 text-left">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/70 backdrop-blur-md"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.35em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
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
            transform: translate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}px, ${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100}px)
              scale(1.2);
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

export default BlogHero