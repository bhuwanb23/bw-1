import { useState } from 'react'

const CommunityQnA = ({ questions = [], onAskQuestion }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionBody, setQuestionBody] = useState('')
  const [questionTags, setQuestionTags] = useState('')

  const handleAskQuestion = (e) => {
    e.preventDefault()
    onAskQuestion?.({
      title: questionTitle,
      body: questionBody,
      tags: questionTags.split(',').map((tag) => tag.trim())
    })
    setIsModalOpen(false)
    setQuestionTitle('')
    setQuestionBody('')
    setQuestionTags('')
  }

  return (
    <section className="mb-16">
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">Community</p>
          <h2 className="text-2xl font-semibold text-white">Ask Questions. Share Knowledge.</h2>
          <p className="text-white/60 text-sm">Community discussions and technical Q&A</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white font-medium transition-all duration-300 hover:scale-105"
        >
          Ask a question
        </button>
      </div>

      <div className="space-y-6">
        {questions.map((question) => (
          <article
            key={question.id}
            className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex items-center justify-center rounded-2xl bg-white/5 px-6 py-4 text-center">
                <div>
                  <p className="text-3xl font-semibold text-white">{question.votes}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">votes</p>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{question.title}</h3>
                  <p className="text-sm text-white/70">{question.excerpt}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {question.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-blue-900/30 px-3 py-1 text-xs text-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/70">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-bold text-white flex items-center justify-center">
                      {question.author.avatar}
                    </div>
                    <div>
                      <p className="text-white font-medium">{question.author.name}</p>
                      <p className="text-white/50 text-xs">{question.timestamp}</p>
                    </div>
                  </div>
                  <span>{question.answers} answers</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-black/80">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Ask a Question</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-white/60 hover:text-white">
                ✕
              </button>
            </div>
            <form onSubmit={handleAskQuestion} className="space-y-6 p-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Question title</label>
                <input
                  type="text"
                  required
                  value={questionTitle}
                  onChange={(e) => setQuestionTitle(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Be specific and concise"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Details</label>
                <textarea
                  rows={6}
                  required
                  value={questionBody}
                  onChange={(e) => setQuestionBody(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Include code snippets, context, and constraints"
                ></textarea>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Tags</label>
                <input
                  type="text"
                  value={questionTags}
                  onChange={(e) => setQuestionTags(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="react, performance, security"
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full border border-white/10 px-6 py-2 text-white hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 font-semibold text-white hover:shadow-[0_10px_35px_rgba(59,130,246,0.35)]"
                >
                  Post question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default CommunityQnA