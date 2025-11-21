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
          {articles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-black/50"
            >
              <div className="flex items-center justify-between text-xs text-white/60">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-white/70">
                  {article.category}
                </span>
                <span>{article.readTime}</span>
              </div>

              <div className="mt-4 space-y-3">
                <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-blue-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/70 text-sm">{article.excerpt}</p>

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
                  <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-[11px] font-bold text-white flex items-center justify-center">
                    {article.author.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{article.author.name}</p>
                    <p className="text-xs text-white/50">{article.date}</p>
                  </div>
                </div>
                <button className="text-sm font-semibold text-blue-400 hover:text-blue-300">Read →</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default BlogGrid