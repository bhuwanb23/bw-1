import { useState } from 'react'

const FeaturedArticle = ({ article }) => {
  const [isHovered, setIsHovered] = useState(false)

  if (!article) return null

  return (
    <article
      className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />

      <div className="relative grid gap-8 p-8 md:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
            {article.category} • {article.highlight || 'Featured'}
          </div>

          <h2 className="text-3xl font-semibold text-white leading-tight">{article.title}</h2>
          <p className="text-white/80 text-base leading-relaxed">{article.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4">
            {article.tags?.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-base font-bold text-white flex items-center justify-center">
                {article.author.avatar}
              </div>
              <div>
                <p className="text-white font-medium">{article.author.name}</p>
                <p className="text-white/60 text-sm">
                  {article.date} • {article.readTime}
                </p>
              </div>
            </div>

            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold transition-all duration-300 hover:scale-105">
              Read now
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div
            className={`relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-transform duration-500 ${
              isHovered ? '-translate-y-2' : ''
            }`}
          >
            {article.image ? (
              <img src={article.image} alt={article.title} className="h-full w-full object-cover opacity-80" loading="lazy" />
            ) : (
              <div className="flex h-full items-center justify-center text-6xl text-white/30">📰</div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default FeaturedArticle