import { useState } from 'react'

const FeaturedArticle = () => {
  const [isHovered, setIsHovered] = useState(false)

  // Mock data for featured article
  const featuredArticle = {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and deploy applications in 2025.",
    category: "AI/ML",
    author: {
      name: "Alex Morgan",
      avatar: "AM"
    },
    readTime: "8 min read",
    date: "May 15, 2025",
    image: "/placeholder-image.jpg"
  }

  return (
    <div 
      className="relative rounded-2xl overflow-hidden mb-12 border border-white/10 bg-black/30 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center">
          <div className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/30 rounded-full mb-4">
            {featuredArticle.category}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {featuredArticle.title}
          </h2>
          
          <p className="text-white/80 mb-6">
            {featuredArticle.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {featuredArticle.author.avatar}
              </div>
              <div>
                <p className="text-white font-medium">{featuredArticle.author.name}</p>
                <p className="text-white/60 text-sm">{featuredArticle.date} · {featuredArticle.readTime}</p>
              </div>
            </div>
            
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Read Now
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className={`relative w-full h-64 rounded-xl overflow-hidden transition-transform duration-500 ${isHovered ? 'transform translate-y-[-10px]' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/30 text-6xl">📰</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedArticle