import { useState } from 'react'

const CommunityQnA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionBody, setQuestionBody] = useState('')
  const [questionTags, setQuestionTags] = useState('')

  // Mock data for questions
  const questions = [
    {
      id: 1,
      title: "How to optimize React performance with useMemo and useCallback?",
      excerpt: "I'm working on a large React application and experiencing performance issues. What are the best practices for using useMemo and useCallback effectively?",
      author: {
        name: "Alex Johnson",
        avatar: "AJ"
      },
      tags: ["React", "Performance", "JavaScript"],
      votes: 24,
      answers: 8,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      title: "Best practices for securing REST APIs?",
      excerpt: "What are the essential security measures I should implement for a REST API serving a web application?",
      author: {
        name: "Sarah Miller",
        avatar: "SM"
      },
      tags: ["Security", "API", "Backend"],
      votes: 18,
      answers: 5,
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      title: "Implementing CI/CD pipeline with GitHub Actions",
      excerpt: "How can I set up a complete CI/CD pipeline for a Node.js application using GitHub Actions?",
      author: {
        name: "Mike Chen",
        avatar: "MC"
      },
      tags: ["CI/CD", "GitHub", "DevOps"],
      votes: 15,
      answers: 3,
      timestamp: "1 day ago"
    }
  ]

  const handleAskQuestion = (e) => {
    e.preventDefault()
    // Question submission logic would go here
    console.log({
      title: questionTitle,
      body: questionBody,
      tags: questionTags
    })
    setIsModalOpen(false)
    setQuestionTitle('')
    setQuestionBody('')
    setQuestionTags('')
  }

  return (
    <div className="mb-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Ask Questions. Share Knowledge.</h2>
          <p className="text-white/70">Community discussions and technical Q&A</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Ask a Question
        </button>
      </div>

      <div className="space-y-6">
        {questions.map((question) => (
          <div 
            key={question.id}
            className="rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex flex-col items-center bg-black/30 rounded-lg p-3 min-w-[80px]">
                <span className="text-2xl font-bold text-white">{question.votes}</span>
                <span className="text-white/60 text-sm">votes</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 cursor-pointer">
                  {question.title}
                </h3>
                <p className="text-white/80 mb-4">{question.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {question.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                      {question.author.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{question.author.name}</p>
                      <p className="text-white/60 text-xs">{question.timestamp}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-white/70 text-sm">
                    <span>{question.answers} answers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ask Question Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black/80 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Ask a Question</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleAskQuestion} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Question Title</label>
                  <input
                    type="text"
                    placeholder="Be specific and imagine you're asking a friend"
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={questionTitle}
                    onChange={(e) => setQuestionTitle(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Question Details</label>
                  <textarea
                    placeholder="Include all the information someone would need to answer your question"
                    rows={6}
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={questionBody}
                    onChange={(e) => setQuestionBody(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Tags</label>
                  <input
                    type="text"
                    placeholder="Enter tags separated by commas"
                    className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={questionTags}
                    onChange={(e) => setQuestionTags(e.target.value)}
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 rounded-lg border border-white/10 bg-black/30 text-white font-medium hover:bg-white/10 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Post Question
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommunityQnA