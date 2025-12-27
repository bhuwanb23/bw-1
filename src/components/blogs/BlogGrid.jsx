const viewLayouts = {
  grid: 'grid grid-cols-1 gap-6 md:grid-cols-2',
  list: 'space-y-4',
  compact: 'grid grid-cols-1 gap-4 lg:grid-cols-3'
}

const BlogGrid = ({ articles = [], view = 'grid', emptyMessage = 'No articles match your filters.' }) => {
  const layout = viewLayouts[view] || viewLayouts.grid

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Latest</p>
          <h2 className="text-2xl font-semibold text-white">Articles & Deep Dives</h2>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/70">
          {emptyMessage}
        </div>
      ) : (
        <div className={layout}>
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-white/30 hover:bg-black/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] animate-card-enter"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    {article.category}
                  </span>
                  <span className="transition-all duration-300 group-hover:text-white/80">{article.readTime}</span>
                </div>

              <div className="mt-4 space-y-3">
                <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  {article.title}
                </h3>
                <p className="text-white/70 text-sm transition-all duration-300 group-hover:text-white/90">{article.excerpt}</p>

                {article.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-[11px] font-bold text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      {article.author.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white transition-all duration-300 group-hover:text-white/90">{article.author.name}</p>
                      <p className="text-xs text-white/50 transition-all duration-300 group-hover:text-white/70">{article.date}</p>
                    </div>
                  </div>
                  <button className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-all duration-300 group-hover:translate-x-2 flex items-center gap-1">
                    Read 
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default BlogGrid