import { useState } from 'react'

const faqs = [
  {
    question: "How long does it take to receive a proposal?",
    answer: "We typically send out detailed proposals within 24-48 hours after receiving your request. For complex projects, it may take up to 3 business days."
  },
  {
    question: "What information should I include in my project requirements?",
    answer: "Please provide details about your project goals, target audience, preferred technologies, timeline, and budget range. The more specific you are, the more accurate our proposal will be."
  },
  {
    question: "Do you sign NDAs for proposal discussions?",
    answer: "Yes, we're happy to sign an NDA before discussing your project details. You can request this in the proposal form, and we'll send you our standard NDA for your review."
  },
  {
    question: "What's included in your proposals?",
    answer: "Our proposals include project scope, timeline, deliverables, team structure, technology stack, pricing breakdown, and milestone plan. We also provide case studies of similar projects."
  },
  {
    question: "Can I request revisions to the proposal?",
    answer: "Absolutely. We offer one round of revisions included in our proposal process. After that, additional revisions may incur a small fee depending on the scope of changes."
  },
  {
    question: "What payment terms do you offer?",
    answer: "We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can structure payments around milestones."
  }
]

const ProposalFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to know about our proposal process
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 text-white/70 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-white/80 border-t border-white/10 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProposalFAQ