import { useState } from 'react'

const services = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    tagline: 'From MVP to mature platform',
    description: 'Design, build, and iterate on products with clean architecture and measurable delivery.',
    icon: '🧩',
    color: 'from-blue-500 to-cyan-400',
    bestFor: ['New products', 'MVP builds', 'Scaling an existing platform'],
    deliverables: ['Architecture + roadmap', 'Design system foundations', 'Core features + analytics', 'Release pipeline + runbooks'],
    timeline: '4–12 weeks (MVP), then continuous',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    tagline: 'Fast, accessible, resilient',
    description: 'High-performance web apps with strong UX, SEO hygiene, and maintainable front-end systems.',
    icon: '🖥',
    color: 'from-purple-500 to-violet-400',
    bestFor: ['Dashboards', 'Customer portals', 'B2B workflows'],
    deliverables: ['Component architecture', 'Performance budget', 'Accessibility baseline', 'Observability basics'],
    timeline: '3–10 weeks',
    stack: ['React', 'Vite', 'Tailwind', 'Playwright'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    tagline: 'Native-feeling apps',
    description: 'Mobile apps that feel snappy and reliable, with thoughtful offline-first and release workflows.',
    icon: '📱',
    color: 'from-sky-500 to-blue-400',
    bestFor: ['Companion apps', 'Field ops', 'Consumer experiences'],
    deliverables: ['UI flows + navigation', 'Offline cache strategy', 'Push notifications', 'Store release setup'],
    timeline: '6–14 weeks',
    stack: ['React Native', 'Expo', 'Firebase', 'Sentry'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    tagline: 'Infra you can trust',
    description: 'Deploy faster with secure cloud foundations, automated pipelines, and monitoring that catches issues early.',
    icon: '☁️',
    color: 'from-amber-500 to-orange-400',
    bestFor: ['New infra setup', 'Cloud migration', 'CI/CD + observability'],
    deliverables: ['CI/CD pipelines', 'IaC foundations', 'Monitoring + alerting', 'Backup + incident playbooks'],
    timeline: '2–8 weeks',
    stack: ['AWS/Azure', 'Docker', 'Terraform', 'GitHub Actions'],
  },
  {
    id: 'integrations',
    title: 'APIs & Integrations',
    tagline: 'Systems that connect',
    description: 'API-first systems and integrations that keep data consistent across tools and teams.',
    icon: '🔗',
    color: 'from-emerald-500 to-teal-400',
    bestFor: ['3rd-party integrations', 'Microservices', 'Event-driven workflows'],
    deliverables: ['API design + versioning', 'Auth strategy', 'Rate limits + audit logs', 'Integration tests'],
    timeline: '2–6 weeks',
    stack: ['REST/GraphQL', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    tagline: 'Practical ML, not hype',
    description: 'AI features and data pipelines with clear evaluation metrics, privacy boundaries, and safe rollouts.',
    icon: '🧠',
    color: 'from-pink-500 to-rose-400',
    bestFor: ['Search & recommendations', 'Automation', 'Analytics + forecasting'],
    deliverables: ['Data audit + feasibility', 'Model evaluation', 'Human-in-the-loop flows', 'Monitoring + retraining plan'],
    timeline: '4–10 weeks',
    stack: ['Python', 'PyTorch', 'Vector DB', 'MLflow'],
  },
]

const engagementModels = [
  {
    title: 'Fixed scope (MVP)',
    description: 'Best when scope is clear and you want a defined deliverable with a delivery date.',
    bullets: ['Milestone plan', 'Weekly demos', 'Handover checklist'],
  },
  {
    title: 'Dedicated team',
    description: 'A small, focused team embedded into your roadmap for continuous delivery.',
    bullets: ['Sprint cadence', 'Shared backlog', 'Velocity + quality reporting'],
  },
  {
    title: 'Consulting / audit',
    description: 'Short engagement to de-risk decisions and improve systems you already have.',
    bullets: ['Architecture review', 'Performance + security audit', 'Actionable plan'],
  },
]

const faqs = [
  {
    q: 'How fast can we start?',
    a: 'Typically within a few business days once we align on scope and success criteria. For urgent work, we can prioritize an accelerated kickoff.',
  },
  {
    q: 'Do you work with existing teams?',
    a: 'Yes. We can integrate with your team, take ownership of a module, or lead delivery end-to-end depending on what you need.',
  },
  {
    q: 'What do you need from us to begin?',
    a: 'A short goals call, key stakeholders, and access to any existing product/infra context. If nothing exists yet, we start from discovery.',
  },
  {
    q: 'Do you provide maintenance after launch?',
    a: 'Yes. We support post-launch with monitoring, upgrades, bugfix SLAs (if needed), and ongoing improvements.',
  },
]

const DetailedServices = () => {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id)
  const [openFaq, setOpenFaq] = useState(0)

  const activeService = services.find((s) => s.id === activeServiceId) ?? services[0]

  return (
    <section id="service-specs" className="py-16 md:py-20 relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/6 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60 mb-5 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>Service Specs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            A clear menu of what we deliver.
          </h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Pick a track, see deliverables, and understand what “done” means. No filler.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-3">
            <p className="px-3 pt-2 pb-3 text-[10px] uppercase tracking-[0.25em] text-white/50">Tracks</p>
            <div className="space-y-2">
              {services.map((service) => {
                const active = service.id === activeServiceId
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveServiceId(service.id)}
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                      active ? 'border-white/25 bg-white/5' : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-10 w-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-lg`}>
                        {service.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{service.title}</p>
                        <p className="text-xs text-white/60 truncate">{service.tagline}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${activeService.color} flex items-center justify-center text-2xl`}>
                {activeService.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">{activeService.title}</h3>
                <p className="mt-2 text-white/75">{activeService.description}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Best for</p>
                    <ul className="mt-3 space-y-2">
                      {activeService.bestFor.map((item) => (
                        <li key={item} className="text-sm text-white/80 flex items-start gap-2">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${activeService.color}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Deliverables</p>
                    <ul className="mt-3 space-y-2">
                      {activeService.deliverables.map((item) => (
                        <li key={item} className="text-sm text-white/80 flex items-start gap-2">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${activeService.color}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Typical timeline</p>
                    <p className="mt-3 text-sm text-white/80">{activeService.timeline}</p>
                    <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-white/50">Stack (example)</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeService.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Hand-off standard</p>
                  <p className="mt-2 text-sm text-white/80">
                    You get production-ready code, documentation, and operational basics so your team can run it with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Engagement models</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Choose how we work together.</h3>
            <div className="mt-5 space-y-4">
              {engagementModels.map((m) => (
                <div key={m.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm font-semibold text-white">{m.title}</p>
                  <p className="mt-1 text-sm text-white/70">{m.description}</p>
                  <ul className="mt-3 space-y-2">
                    {m.bullets.map((b) => (
                      <li key={b} className="text-sm text-white/80 flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">FAQ</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Details you’ll ask anyway.</h3>
            <div className="mt-5 space-y-3">
              {faqs.map((f, idx) => {
                const open = openFaq === idx
                return (
                  <button
                    key={f.q}
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : idx)}
                    className="w-full text-left rounded-2xl border border-white/10 bg-black/30 px-4 py-4 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-semibold text-white">{f.q}</p>
                      <span className={`mt-1 text-white/70 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
                    </div>
                    {open && <p className="mt-3 text-sm text-white/70">{f.a}</p>}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailedServices