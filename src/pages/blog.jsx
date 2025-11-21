import { useState } from 'react'
import BlogHero from '../components/blogs/BlogHero'
import FeaturedArticle from '../components/blogs/FeaturedArticle'
import BlogGrid from '../components/blogs/BlogGrid'
import Sidebar from '../components/blogs/Sidebar'
import CommunityQnA from '../components/blogs/CommunityQnA'
import WriteButtons from '../components/blogs/WriteButtons'
import NewsletterCTA from '../components/blogs/NewsletterCTA'
import FooterCTA from '../components/blogs/FooterCTA'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  return (
    <div className="relative min-h-screen bg-transparent">
      <BlogHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <FeaturedArticle />
            <BlogGrid selectedCategory={selectedCategory} />
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar onCategoryChange={setSelectedCategory} />
          </div>
        </div>
        
        <CommunityQnA />
        <NewsletterCTA />
        <FooterCTA />
      </div>
      
      <WriteButtons />
    </div>
  )
}

export default BlogPage