const Sidebar = ({
  categories = [],
  selectedCategory = 'All',
  onCategoryChange = () => {},
  trendingTopics = [],
  popularArticles = [],
  tags = [],
  onSearch,
  searchQuery,
  onSubscribe
}) => {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Search</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSearch?.(searchQuery || '')
          }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Find articles..."
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => onSearch?.(e.target.value)}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
              </svg>
            </span>
          </div>
        </form>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 ${
                  active ? 'bg-white text-black' : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Trending Topics</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic) => (
            <span
              key={topic}
              className="cursor-pointer rounded-full bg-blue-900/30 px-3 py-1 text-sm text-blue-300 hover:bg-blue-800/50 transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Popular Reads</h3>
        <div className="space-y-4">
          {popularArticles.map((article) => (
            <div key={article.id} className="flex items-start space-x-3 group cursor-pointer">
              <div className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
              <div>
                <p className="text-sm font-medium text-white group-hover:text-blue-300">{article.title}</p>
                <p className="text-xs text-white/50">{article.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="cursor-pointer rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 hover:border-blue-500 hover:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="relative space-y-4">
          <h3 className="text-lg font-bold text-white">Newsletter</h3>
          <p className="text-sm text-white/70">Get curated stories from Nulfinity every Friday.</p>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault()
              onSubscribe?.()
            }}
          >
            <input
              type="email"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Email address"
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sidebar