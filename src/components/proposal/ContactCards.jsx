import { useState } from 'react'

const contactInfo = [
  {
    id: 1,
    title: 'Email Us',
    description: 'For project inquiries and proposals',
    icon: '📧',
    content: 'proposals@Innovexex.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Call / WhatsApp',
    description: 'For immediate assistance',
    icon: '📱',
    content: '+1 (555) 123-4567',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Office Location',
    description: 'Visit our headquarters',
    icon: '🏢',
    content: 'San Francisco, CA',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 4,
    title: 'Project Manager',
    description: 'Direct contact for ongoing projects',
    icon: '👤',
    content: 'Jane Smith - PM',
    color: 'from-amber-500 to-orange-500'
  }
]

const ContactCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Quick Contact</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Reach out to us through any of these channels
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact) => (
            <div
              key={contact.id}
              className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 transform ${
                hoveredCard === contact.id
                  ? 'border-white/30 bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-xl scale-105 shadow-2xl'
                  : 'border-white/10 bg-black/20 hover:border-white/20'
              }`}
              style={{
                boxShadow: hoveredCard === contact.id ? `0 0 40px -15px rgba(139, 92, 246, 0.4)` : 'none'
              }}
              onMouseEnter={() => setHoveredCard(contact.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 transition-opacity duration-500 group-hover:opacity-20 rounded-2xl`}></div>
              
              {/* Animated decorative elements */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${contact.color} opacity-10 blur-2xl transition-all duration-700 group-hover:opacity-30 group-hover:scale-150`}></div>
              <div className={`absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br ${contact.color} opacity-15 blur-2xl transition-all duration-700 group-hover:opacity-30 group-hover:scale-125`}></div>
              
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-2xl`}>
                    {contact.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                <p className="text-white/70 text-sm mb-4">{contact.description}</p>
                
                <div className={`mt-auto pt-4 text-lg font-medium bg-gradient-to-r ${contact.color} bg-clip-text text-transparent`}>
                  {contact.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactCards