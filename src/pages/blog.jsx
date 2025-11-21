import { useMemo, useState } from 'react'
import { blogArticles as initialArticles, blogCategories, communityQuestions as initialQuestions } from '../data/blogData.js'
import BlogHero from '../components/blogs/BlogHero'

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState('blogs')
  const [articles, setArticles] = useState(initialArticles)
  const [selectedBlogId, setSelectedBlogId] = useState(initialArticles[0]?.id ?? null)
  const [blogSearch, setBlogSearch] = useState('')
  const [blogForm, setBlogForm] = useState({
    title: '',
    category: blogCategories[1] ?? 'AI/ML',
    content: ''
  })

  const [questions, setQuestions] = useState(initialQuestions)
  const [selectedQuestionId, setSelectedQuestionId] = useState(initialQuestions[0]?.id ?? null)
  const [answerText, setAnswerText] = useState('')

  const filteredArticles = useMemo(() => {
    if (!blogSearch) return articles
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(blogSearch.toLowerCase())
    )
  }, [articles, blogSearch])

  const selectedBlog = filteredArticles.find((article) => article.id === selectedBlogId) ?? filteredArticles[0]
  const selectedQuestion = questions.find((q) => q.id === selectedQuestionId) ?? questions[0]

  const handlePublishBlog = (e) => {
    e.preventDefault()
    if (!blogForm.title.trim() || !blogForm.content.trim()) return

    const newArticle = {
      id: `user-blog-${Date.now()}`,
      title: blogForm.title.trim(),
      excerpt: blogForm.content.trim().slice(0, 180) + '…',
      content: blogForm.content.trim(),
      category: blogForm.category,
      author: { name: 'You', avatar: 'YY' },
      readTime: '5 min read',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      tags: ['Community']
    }

    setArticles([newArticle, ...articles])
    setSelectedBlogId(newArticle.id)
    setBlogForm({ ...blogForm, title: '', content: '' })
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault()
    if (!answerText.trim() || !selectedQuestion) return

    setQuestions((prev) =>
      prev.map((question) =>
        question.id === selectedQuestion.id
          ? {
              ...question,
              responses: [
                ...(question.responses || []),
                {
                  id: `resp-${Date.now()}`,
                  body: answerText.trim(),
                  author: { name: 'You', avatar: 'YY' },
                  timestamp: 'just now'
                }
              ]
            }
          : question
      )
    )
    setAnswerText('')
  }

  return (
    <div className="min-h-screen bg-transparent text-white">
      <BlogHero
        stats={[
          { label: 'Active Readers', value: '72K+' },
          { label: 'Published Posts', value: `${articles.length}` },
          { label: 'Community Answers', value: '4.2K' }
        ]}
        tabs={[
          { id: 'blogs', label: 'Blogs' },
          { id: 'questions', label: 'Questions' }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-8 -mt-4 md:-mt-6">
        {activeTab === 'blogs' ? (
          <BlogSplitView
            articles={filteredArticles}
            selectedBlog={selectedBlog}
            selectedBlogId={selectedBlog?.id}
            onSelectBlog={setSelectedBlogId}
            searchValue={blogSearch}
            onSearchChange={setBlogSearch}
            blogForm={blogForm}
            onBlogFormChange={setBlogForm}
            onPublishBlog={handlePublishBlog}
            categories={blogCategories}
          />
        ) : (
          <QuestionSplitView
            questions={questions}
            selectedQuestion={selectedQuestion}
            onSelectQuestion={setSelectedQuestionId}
            answerText={answerText}
            onAnswerChange={setAnswerText}
            onSubmitAnswer={handleSubmitAnswer}
          />
        )}
      </div>
    </div>
  )
}

const BlogSplitView = ({
  articles,
  selectedBlog,
  selectedBlogId,
  onSelectBlog,
  searchValue,
  onSearchChange,
  blogForm,
  onBlogFormChange,
  onPublishBlog,
  categories
}) => {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div className="space-y-4 rounded-3xl border border-white/10 bg-transparent p-4 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />
        <div className="relative rounded-2xl border border-white/10 bg-transparent p-3 backdrop-blur-lg">
          <input
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles…"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-transparent max-h-[70vh] overflow-y-auto backdrop-blur-lg">
          {articles.map((article) => {
            const active = article.id === selectedBlogId
            return (
              <button
                key={article.id}
                onClick={() => onSelectBlog(article.id)}
                className={`w-full text-left border-b border-white/5 px-4 py-4 transition-colors last:border-none ${
                  active ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">{article.category}</p>
                <h3 className="text-base font-semibold text-white">{article.title}</h3>
                <p className="text-sm text-white/60 line-clamp-2">{article.excerpt}</p>
                <p className="mt-1 text-[11px] text-white/40">
                  {article.date} • {article.readTime}
                </p>
              </button>
            )
          })}
          {articles.length === 0 && <p className="p-6 text-center text-white/60">No posts yet.</p>}
        </div>
      </div>

      <div className="space-y-6">
        {selectedBlog ? (
          <article className="rounded-3xl border border-white/10 bg-transparent p-6 space-y-4 backdrop-blur-xl shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">{selectedBlog.category}</p>
                <h2 className="text-2xl font-semibold text-white">{selectedBlog.title}</h2>
              </div>
              <p className="text-sm text-white/60 text-right">
                {selectedBlog.date}
                <br />
                {selectedBlog.readTime}
              </p>
            </div>
            <div className="space-y-3 text-white/80 leading-relaxed">
              {selectedBlog.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph.trim()}</p>
              ))}
            </div>
          </article>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/60">Select a blog</div>
        )}

        <div className="rounded-3xl border border-white/10 bg-transparent p-6 space-y-4 backdrop-blur-xl">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">Write</p>
            <h3 className="text-xl font-semibold text-white">Publish a new blog</h3>
          </div>
          <form className="space-y-4" onSubmit={onPublishBlog}>
            <input
              type="text"
              value={blogForm.title}
              onChange={(e) => onBlogFormChange({ ...blogForm, title: e.target.value })}
              placeholder="Blog title"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <select
              value={blogForm.category}
              onChange={(e) => onBlogFormChange({ ...blogForm, category: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <textarea
              rows={6}
              value={blogForm.content}
              onChange={(e) => onBlogFormChange({ ...blogForm, content: e.target.value })}
              placeholder="Write your story..."
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Publish blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const QuestionSplitView = ({ questions, selectedQuestion, onSelectQuestion, answerText, onAnswerChange, onSubmitAnswer }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div className="rounded-3xl border border-white/10 bg-transparent backdrop-blur-xl max-h-[80vh] overflow-y-auto">
        {questions.map((question) => {
          const active = selectedQuestion?.id === question.id
          return (
            <button
              key={question.id}
              onClick={() => onSelectQuestion(question.id)}
              className={`w-full border-b border-white/5 px-4 py-4 text-left transition-colors last:border-none ${
                active ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>{question.votes} votes</span>
                <span>{question.answers} answers</span>
              </div>
              <h3 className="text-base font-semibold text-white">{question.title}</h3>
              <p className="text-sm text-white/60 line-clamp-2">{question.excerpt}</p>
            </button>
          )
        })}
      </div>

      <div className="space-y-6">
        {selectedQuestion ? (
          <article className="rounded-3xl border border-white/10 bg-transparent backdrop-blur-xl p-6 space-y-4">
            <div className="border-b border-white/10 pb-4 space-y-2">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">Question</p>
              <h2 className="text-2xl font-semibold text-white">{selectedQuestion.title}</h2>
              <p className="text-white/70">{selectedQuestion.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {selectedQuestion.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-blue-900/30 px-3 py-1 text-xs text-blue-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                {selectedQuestion.responses?.length || 0} Answers
              </p>
              {selectedQuestion.responses?.length ? (
                selectedQuestion.responses.map((response) => (
                  <div key={response.id} className="rounded-xl border border-white/10 bg-transparent p-4 space-y-2 backdrop-blur-lg">
                    <p className="text-sm text-white/80 leading-relaxed">{response.body}</p>
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>{response.author.name}</span>
                      <span>{response.timestamp}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-white/60">No answers yet.</p>
              )}
            </div>

            <form className="space-y-3" onSubmit={onSubmitAnswer}>
              <textarea
                rows={4}
                value={answerText}
                onChange={(e) => onAnswerChange(e.target.value)}
                placeholder="Share an answer..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Post answer
                </button>
              </div>
            </form>
          </article>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-transparent p-6 text-center text-white/60 backdrop-blur-xl">
            Select a question
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPage