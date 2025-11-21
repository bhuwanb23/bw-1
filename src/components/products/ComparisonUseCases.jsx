import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'NexusFlow',
    description: 'Enterprise workflow automation',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'DataSphere',
    description: 'Advanced analytics platform',
    icon: '📊',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 3,
    name: 'SecureVault',
    description: 'Enterprise data protection',
    icon: '🔒',
    color: 'from-emerald-500 to-teal-500'
  }
]

const useCases = [
  {
    title: 'Workflow Automation',
    description: 'Streamline business processes with intelligent automation',
    products: [1, 2]
  },
  {
    title: 'Data Analytics',
    description: 'Gain insights from your business data',
    products: [2, 3]
  },
  {
    title: 'Security Compliance',
    description: 'Ensure data protection and regulatory compliance',
    products: [3, 1]
  },
  {
    title: 'Enterprise Integration',
    description: 'Connect systems and unify operations',
    products: [1, 2, 3]
  }
]

const ComparisonUseCases = () => {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [activeUseCase, setActiveUseCase] = useState(0)

  const toggleProduct = (productId) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    )
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Comparison & Use Cases</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find Your <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Perfect Solution</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Compare our products and discover which combinations work best for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Selection */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Select Products</h3>
            <p className="text-white/70 mb-8">Choose products to compare features and capabilities</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`rounded-2xl border cursor-pointer transition-all duration-300 p-4 flex flex-col items-center ${
                    selectedProducts.includes(product.id)
                      ? 'border-white/30 bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-xl'
                      : 'border-white/10 bg-black/20 hover:border-white/20'
                  }`}
                  onClick={() => toggleProduct(product.id)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-xl mb-3`}>
                    {product.icon}
                  </div>
                  <h4 className="font-bold text-white text-center">{product.name}</h4>
                  <p className="text-white/70 text-xs text-center mt-1">{product.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-4">Selected Products</h4>
              {selectedProducts.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedProducts.map(productId => {
                    const product = products.find(p => p.id === productId)
                    return (
                      <span 
                        key={productId} 
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${product.color.replace('from-', 'bg-').replace('to-', 'to-')} text-white`}
                      >
                        {product.name}
                      </span>
                    )
                  })}
                </div>
              ) : (
                <p className="text-white/50">No products selected</p>
              )}
            </div>
          </div>
          
          {/* Use Cases */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Common Use Cases</h3>
            <p className="text-white/70 mb-8">Explore how our products solve real business challenges</p>
            
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border cursor-pointer transition-all duration-300 p-6 ${
                    activeUseCase === index
                      ? 'border-white/30 bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-xl'
                      : 'border-white/10 bg-black/20 hover:border-white/20'
                  }`}
                  onClick={() => setActiveUseCase(index)}
                >
                  <h4 className="font-bold text-white mb-2">{useCase.title}</h4>
                  <p className="text-white/70 text-sm mb-4">{useCase.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {useCase.products.map(productId => {
                      const product = products.find(p => p.id === productId)
                      return (
                        <span 
                          key={productId} 
                          className={`px-2 py-1 rounded-md text-xs font-medium border ${product.color.replace('from-', 'bg-').replace('to-', 'to-')} text-white/80`}
                        >
                          {product.name}
                        </span>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-xl border border-white/10 rounded-2xl">
              <h4 className="font-bold text-white mb-2">{useCases[activeUseCase].title}</h4>
              <p className="text-white/70 text-sm mb-4">{useCases[activeUseCase].description}</p>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                View Solution Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonUseCases