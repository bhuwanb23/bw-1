import Reveal from './Reveal.jsx'
import { SECTION_HEADING } from '../constants/typography.js'

const services = [
  {
    name: 'Custom Websites',
    description: 'Building fast, visually stunning websites that captivate and convert.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
  },
  {
    name: 'Mobile Apps',
    description: 'Intuitive and powerful iOS & Android applications for any use case.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    name: 'Enterprise Software',
    description: 'Custom, secure solutions to streamline your business operations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    name: 'AI Solutions',
    description: 'Leverage machine learning to unlock data-driven insights and automation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
]

const Services = () => {
  const gradientColors = [
    'from-blue-500/10 via-purple-500/10 to-blue-600/10',
    'from-purple-500/10 via-blue-500/10 to-purple-600/10',
    'from-blue-500/10 via-purple-500/10 to-blue-600/10',
    'from-purple-500/10 via-blue-500/10 to-purple-600/10',
  ]

  return (
    <section id="services" className="py-32 min-h-screen flex items-center">
      <div className="flex flex-col gap-20 w-full">
        <Reveal className="reveal-up text-center" amount={0.15}>
          <h2 className={`${SECTION_HEADING} mb-6`}>Our Core Expertise</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            We transform complex challenges into elegant, high-performance digital solutions.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.name}
              as="div"
              delay={index * 100}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10"
            >
              <div className="relative">
                <div className="text-white/40 mb-6 group-hover:text-white/60 transition-colors duration-300">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{service.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

