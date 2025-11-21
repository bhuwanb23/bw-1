import { useState } from 'react'

const BlogGrid = ({ selectedCategory }) => {
  // Mock data for blog articles
  const articles = [
    {
      id: 1,
      title: "Building Scalable Microservices with Kubernetes",
      excerpt: "A comprehensive guide to designing and deploying microservices architecture using Kubernetes orchestration.",
      category: "Cloud & DevOps",
      author: {
        name: "Sarah Johnson",
        avatar: "SJ"
      },
      readTime: "12 min read",
      date: "May 10, 2025"
    },
    {
      id: 2,
      title: "The Rise of Low-Code Development Platforms",
      excerpt: "How low-code platforms are democratizing software development and accelerating digital transformation.",
      category: "Software Engineering",
      author: {
        name: "Michael Chen",
        avatar: "MC"
      },
      readTime: "6 min read",
      date: "May 5, 2025"
    },
    {
      id: 3,
      title: "Demystifying Neural Architecture Search",
      excerpt: "Understanding automated machine learning techniques for optimizing deep learning models.",
      category: "AI/ML",
      author: {
        name: "David Rodriguez",
        avatar: "DR"
      },
      readTime: "15 min read",
      date: "April 28, 2025"
    },
    {
      id: 4,
      title: "Design Systems for Enterprise Applications",
      excerpt: "Creating consistent and scalable design systems for large-scale software products.",
      category: "Design & UI/UX",
      author: {
        name: "Emma Wilson",
        avatar: "EW"
      },
      readTime: "9 min read",
      date: "April 22, 2025"
    },
    {
      id: 5,
      title: "Open Source Security Best Practices",
      excerpt: "Essential security measures every developer should implement when working with open source components.",
      category: "Open Source",
      author: {
        name: "James Park",
        avatar: "JP"
      },
      readTime: "7 min read",
      date: "April 18, 2025"
    },
    {
      id: 6,
      title: "Serverless Computing: Beyond the Hype",
      excerpt: "Real-world applications and performance considerations for serverless architectures.",
      category: "Cloud & DevOps",
      author: {
        name: "Lisa Thompson",
        avatar: "LT"
      },
      readTime: "11 min read",
      date: "April 12, 2025"
    }
  ]

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div 
            key={article.id}
            className="rounded-xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="inline-block px-2 py-1 text-xs font-semibold text-purple-300 bg-purple-900/30 rounded">
                  {article.category}
                </div>
                <span className="text-xs text-white/60">{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
              
              <p className="text-white/80 text-sm mb-4">{article.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    {article.author.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{article.author.name}</p>
                    <p className="text-white/60 text-xs">{article.date}</p>
                  </div>
                </div>
                
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Read →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium">1</button>
          <button className="px-4 py-2 rounded-lg border border-white/10 bg-black/20 text-white font-medium hover:bg-white/10">2</button>
          <button className="px-4 py-2 rounded-lg border border-white/10 bg-black/20 text-white font-medium hover:bg-white/10">3</button>
          <button className="px-4 py-2 rounded-lg border border-white/10 bg-black/20 text-white font-medium hover:bg-white/10">Next →</button>
        </div>
      </div>
    </div>
  )
}

export default BlogGrid