import { useState } from 'react'

const Sidebar = ({ onCategoryChange }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')

  const categories = [
    'All',
    'AI/ML',
    'Cloud & DevOps',
    'Software Engineering',
    'Product Updates',
    'Open Source',
    'Design & UI/UX'
  ]

  const trendingTopics = [
    'React 19',
    'AI Integration',
    'Serverless Architecture',
    'DevOps Best Practices',
    'Microservices',
    'Cybersecurity'
  ]

  const popularArticles = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      views: "12.5K"
    },
    {
      id: 2,
      title: "Building Scalable Microservices with Kubernetes",
      views: "9.8K"
    },
    {
      id: 3,
      title: "Demystifying Neural Architecture Search",
      views: "8.2K"
    }
  ]

  const tags = [
    'JavaScript', 'React', 'Node.js', 'Python', 'AI', 'Machine Learning',
    'Kubernetes', 'Docker', 'Cloud', 'DevOps', 'Security', 'UI/UX'
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    // Search functionality would be implemented here
    console.log('Searching for:', searchQuery)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Subscription functionality would be implemented here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Search</h3>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Categories Widget */}
      <div className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className="block w-full text-left px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Trending Topics</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-blue-900/30 text-blue-300 hover:bg-blue-800/50 transition-colors duration-200 cursor-pointer"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Popular Articles</h3>
        <div className="space-y-4">
          {popularArticles.map((article) => (
            <div key={article.id} className="flex items-start space-x-3 group cursor-pointer">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
              <div>
                <h4 className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors duration-200">
                  {article.title}
                </h4>
                <p className="text-white/60 text-xs">{article.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full border border-white/10 bg-black/30 text-white/80 hover:border-blue-500 hover:bg-blue-900/30 hover:text-blue-300 transition-colors duration-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="relative">
          <h3 className="text-lg font-bold text-white mb-2">Subscribe to Newsletter</h3>
          <p className="text-white/80 text-sm mb-4">Get the latest tech articles and insights</p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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