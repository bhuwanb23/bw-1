import { useState } from 'react'

const mediaItems = [
  {
    id: 1,
    title: 'Product Screenshots',
    description: 'High-resolution images showcasing our products in action.',
    type: 'images',
    count: '50+',
    icon: '🖼️',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Demo Videos',
    description: 'Interactive walkthroughs demonstrating key features.',
    type: 'videos',
    count: '12',
    icon: '🎥',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 3,
    title: 'Brand Assets',
    description: 'Logos, icons, and visual elements for marketing use.',
    type: 'branding',
    count: '25',
    icon: '🎨',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 4,
    title: 'Documentation',
    description: 'Comprehensive guides and technical specifications.',
    type: 'docs',
    count: '15',
    icon: '📚',
    color: 'from-amber-500 to-orange-500'
  }
]

const MediaAssetsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0)
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Media Resources</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Creative <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Assets</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Access our library of visual and educational resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 transform ${
                hoveredItem === item.id
                  ? 'border-white/30 bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-xl scale-105 shadow-2xl'
                  : 'border-white/10 bg-black/20 hover:border-white/20'
              }`}
              style={{
                boxShadow: hoveredItem === item.id ? `0 0 30px -10px rgba(139, 92, 246, 0.3)` : 'none'
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-2xl`}></div>
              
              <div className="p-6 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-4`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm mb-4 flex-grow">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium bg-black/50 text-white/80 px-2 py-1 rounded-md border border-white/10">
                    {item.count} items
                  </span>
                  <div className={`text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    Download
                  </div>
                </div>
                
                <div className={`mt-4 h-1 w-12 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 ${
                  hoveredItem === item.id ? 'w-full' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaAssetsSection