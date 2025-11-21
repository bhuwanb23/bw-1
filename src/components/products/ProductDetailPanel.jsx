import { useState } from 'react'

const ProductDetailPanel = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data
  const product = {
    id: 1,
    name: 'NexusFlow',
    description: 'Next-gen productivity suite for modern teams',
    platform: 'Web',
    rating: 4.8,
    tags: ['AI', 'Collaboration', 'Cloud'],
    image: 'https://placehold.co/800x600/1e293b/64748b?text=NexusFlow',
    color: 'from-blue-500 to-cyan-500',
    downloads: '10K+',
    price: 'Free',
    badges: ['Open Source', 'Enterprise Ready', 'Offline Capable'],
    features: [
      { icon: '🤖', text: 'AI-powered task automation' },
      { icon: '🔄', text: 'Real-time collaboration' },
      { icon: '🔒', text: 'End-to-end encryption' },
      { icon: '📱', text: 'Cross-platform sync' },
      { icon: '📊', text: 'Advanced analytics dashboard' },
      { icon: '🔌', text: 'Third-party integrations' }
    ],
    screenshots: [
      'https://placehold.co/800x600/1e293b/64748b?text=Screenshot+1',
      'https://placehold.co/800x600/1e293b/64748b?text=Screenshot+2',
      'https://placehold.co/800x600/1e293b/64748b?text=Screenshot+3',
      'https://placehold.co/800x600/1e293b/64748b?text=Screenshot+4'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Docker'],
    plans: [
      { name: 'Free', price: '$0', features: ['Up to 5 users', '1GB storage', 'Basic features'] },
      { name: 'Pro', price: '$9.99', features: ['Up to 50 users', '10GB storage', 'Advanced features', 'Priority support'] },
      { name: 'Enterprise', price: 'Custom', features: ['Unlimited users', 'Custom storage', 'All features', '24/7 support', 'Custom integrations'] }
    ]
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true"></div>
        
        {/* Panel */}
        <div className="relative w-full max-w-6xl rounded-3xl bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl border border-white/10 overflow-hidden transform transition-all duration-300 scale-95 animate-in fade-in-90 zoom-in-95">
          <div className="flex flex-col md:flex-row h-[90vh]">
            {/* Left Column - Media */}
            <div className="w-full md:w-1/2 p-6 border-r border-white/10">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color}`}></div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white/60">{product.platform}</span>
                        <span className="text-sm text-white/40">•</span>
                        <span className="text-sm text-white/60">{product.price}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg border border-white/10 bg-black/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex-grow mb-6">
                  <img 
                    src={product.screenshots[selectedImage]} 
                    alt={`${product.name} screenshot`} 
                    className="w-full h-full object-contain rounded-2xl border border-white/10"
                  />
                </div>
                
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg border transition-all duration-300 ${
                        selectedImage === index 
                          ? 'border-white/50 ring-2 ring-white/20' 
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <img 
                        src={screenshot} 
                        alt={`Screenshot ${index + 1}`} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div className="w-full md:w-1/2 p-6 overflow-y-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {product.badges.map((badge, index) => (
                  <span key={index} className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300">
                    {badge}
                  </span>
                ))}
              </div>
              
              <p className="text-white/80 mb-6">{product.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-xs rounded-full bg-black/30 border border-white/5 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Tabs */}
              <div className="flex border-b border-white/10 mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeTab === 'overview' 
                      ? 'text-white border-b-2 border-blue-500' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeTab === 'features' 
                      ? 'text-white border-b-2 border-blue-500' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeTab === 'pricing' 
                      ? 'text-white border-b-2 border-blue-500' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Pricing
                </button>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-white/5">
                          <span className="text-lg">{feature.icon}</span>
                          <span className="text-white/90 text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech, index) => (
                        <span key={index} className="px-3 py-1 text-xs rounded-full bg-black/30 border border-white/5 text-white/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">All Features</h3>
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-sm`}>
                          {feature.icon}
                        </div>
                        <span className="text-white/90">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'pricing' && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Pricing Plans</h3>
                  <div className="space-y-4">
                    {product.plans.map((plan, index) => (
                      <div key={index} className="p-4 rounded-xl border border-white/10 bg-black/30">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-white">{plan.name}</h4>
                          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {plan.price}
                          </span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-white/80">
                              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className={`w-full py-2 rounded-lg bg-gradient-to-r ${product.color} text-white font-medium hover:scale-[1.02] transition-transform duration-300`}>
                          Get Started
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-white/10">
                <button className={`px-6 py-3 rounded-lg bg-gradient-to-r ${product.color} text-white font-medium hover:scale-[1.02] transition-transform duration-300 flex-1`}>
                  Open Demo
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/20 bg-black/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex-1">
                  Download
                </button>
                <button className="px-6 py-3 rounded-lg border border-white/20 bg-black/30 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex-1">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPanel