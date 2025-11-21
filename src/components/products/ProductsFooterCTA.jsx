import { useState } from 'react'

const ProductsFooterCTA = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Custom Solution</span>?
            </h2>
            
            <p className="text-white/80 mb-6">
              Contact us for tailored products that match your exact requirements.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <span className="text-white/80">Personalized Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <span className="text-white/80">Rapid Implementation</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-black/40 to-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Request a Custom Build</h3>
              
              {isSubmitted ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                    ✓
                  </div>
                  <h4 className="font-bold text-white mb-1">Request Submitted!</h4>
                  <p className="text-white/70 text-sm">
                    We'll contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="Company (optional)"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsFooterCTA