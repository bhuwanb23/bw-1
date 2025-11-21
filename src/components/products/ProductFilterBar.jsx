import { useState, useEffect } from 'react'

const platforms = ['All Platforms', 'Web', 'Mobile', 'Desktop', 'Cloud']
const categories = ['All Categories', 'Productivity', 'Analytics', 'Security', 'AI', 'Development']

const ProductFilterBar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`py-6 transition-all duration-300 ${isSticky ? 'sticky top-20 z-30 bg-black/50 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Product <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Library</span>
            </h2>
            <p className="text-white/70 mt-1">Browse our collection of innovative solutions</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <select 
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="appearance-none bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl py-3 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              >
                {platforms.map((platform) => (
                  <option key={platform} value={platform} className="bg-black/90">{platform}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl py-3 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-black/90">{category}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFilterBar