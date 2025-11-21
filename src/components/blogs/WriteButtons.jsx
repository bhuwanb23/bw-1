import { useState } from 'react'

const WriteButtons = () => {
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false)
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false)

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-40">
        <button
          onClick={() => setIsQuestionModalOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(192,132,252,0.5)] transition-all duration-300 group"
        >
          <span className="text-2xl">❓</span>
          <span className="absolute right-16 bg-black/80 border border-white/10 rounded-lg px-3 py-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Ask Question
          </span>
        </button>
        
        <button
          onClick={() => setIsArticleModalOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 group"
        >
          <span className="text-2xl">✍️</span>
          <span className="absolute right-16 bg-black/80 border border-white/10 rounded-lg px-3 py-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Write Article
          </span>
        </button>
      </div>

      {/* Write Article Modal */}
      {isArticleModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black/80 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Write an Article</h3>
                <button 
                  onClick={() => setIsArticleModalOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Article Title</label>
                  <input
                    type="text"
                    placeholder="Enter a descriptive title"
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Category</label>
                  <select className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Select a category</option>
                    <option>AI/ML</option>
                    <option>Cloud & DevOps</option>
                    <option>Software Engineering</option>
                    <option>Product Updates</option>
                    <option>Open Source</option>
                    <option>Design & UI/UX</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Article Content</label>
                  <textarea
                    placeholder="Write your article content here..."
                    rows={10}
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsArticleModalOpen(false)}
                    className="px-6 py-2 rounded-lg border border-white/10 bg-black/30 text-white font-medium hover:bg-white/10 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Publish Article
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Ask Question Modal */}
      {isQuestionModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black/80 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Ask a Question</h3>
                <button 
                  onClick={() => setIsQuestionModalOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Question Title</label>
                  <input
                    type="text"
                    placeholder="Be specific and imagine you're asking a friend"
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Question Details</label>
                  <textarea
                    placeholder="Include all the information someone would need to answer your question"
                    rows={6}
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Tags</label>
                  <input
                    type="text"
                    placeholder="Enter tags separated by commas"
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsQuestionModalOpen(false)}
                    className="px-6 py-2 rounded-lg border border-white/10 bg-black/30 text-white font-medium hover:bg-white/10 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Post Question
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WriteButtons