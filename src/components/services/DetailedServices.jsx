import { useState } from 'react'

const services = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    tagline: 'MVP to platform',
    description: 'Build fast, scale safely.',
    icon: '🧩',
    color: 'from-blue-500 to-cyan-400',
    bestFor: ['New products', 'MVP builds', 'Scaling an existing platform'],
    deliverables: ['Architecture', 'Core features', 'Release pipeline'],
    timeline: '4–12 weeks (MVP), then continuous',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    tagline: 'Fast + accessible',
    description: 'Performance-first web apps.',
    icon: '🖥',
    color: 'from-purple-500 to-violet-400',
    bestFor: ['Dashboards', 'Customer portals', 'B2B workflows'],
    deliverables: ['UI system', 'Core flows', 'Performance baseline'],
    timeline: '3–10 weeks',
    stack: ['React', 'Vite', 'Tailwind', 'Playwright'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    tagline: 'Native-feel',
    description: 'Reliable mobile apps.',
    icon: '📱',
    color: 'from-sky-500 to-blue-400',
    bestFor: ['Companion apps', 'Field ops', 'Consumer experiences'],
    deliverables: ['Navigation', 'Offline-ready', 'Store releases'],
    timeline: '6–14 weeks',
    stack: ['React Native', 'Expo', 'Firebase', 'Sentry'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    tagline: 'Secure + automated',
    description: 'Deploy fast with guardrails.',
    icon: '☁️',
    color: 'from-amber-500 to-orange-400',
    bestFor: ['New infra setup', 'Cloud migration', 'CI/CD + observability'],
    deliverables: ['CI/CD', 'Infra as code', 'Monitoring'],
    timeline: '2–8 weeks',
    stack: ['AWS/Azure', 'Docker', 'Terraform', 'GitHub Actions'],
  },
  {
    id: 'integrations',
    title: 'APIs & Integrations',
    tagline: 'Connect systems',
    description: 'APIs that don’t break.',
    icon: '🔗',
    color: 'from-emerald-500 to-teal-400',
    bestFor: ['3rd-party integrations', 'Microservices', 'Event-driven workflows'],
    deliverables: ['API design', 'Auth', 'Integration tests'],
    timeline: '2–6 weeks',
    stack: ['REST/GraphQL', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    tagline: 'Practical AI',
    description: 'AI with measurable wins.',
    icon: '🧠',
    color: 'from-pink-500 to-rose-400',
    bestFor: ['Search & recommendations', 'Automation', 'Analytics + forecasting'],
    deliverables: ['Feasibility', 'Evaluation', 'Monitoring'],
    timeline: '4–10 weeks',
    stack: ['Python', 'PyTorch', 'Vector DB', 'MLflow'],
  },
]

const DetailedServices = () => {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id)

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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">track</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Direct deliverables. Clear timelines.
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
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)] ${
                      active ? 'border-white/25 bg-white/5' : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-10 w-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-lg`}>
                        {service.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">{service.title}</p>
                        <p className="text-xs text-white/60">{service.tagline}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-2xl p-6 md:p-8 transition-all duration-300 hover:border-white/15 hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${activeService.color} flex items-center justify-center text-2xl`}>
                {activeService.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">{activeService.title}</h3>
                <p className="mt-2 text-white/75">{activeService.description}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Best for</p>
                    <ul className="mt-3 space-y-2">
                      {activeService.bestFor.slice(0, 2).map((item) => (
                        <li key={item} className="text-sm text-white/80 flex items-start gap-2">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${activeService.color}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Deliverables</p>
                    <ul className="mt-3 space-y-2">
                      {activeService.deliverables.slice(0, 3).map((item) => (
                        <li key={item} className="text-sm text-white/80 flex items-start gap-2">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${activeService.color}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Typical timeline</p>
                    <p className="mt-3 text-sm text-white/80">{activeService.timeline}</p>
                    <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-white/50">Stack (example)</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeService.stack.slice(0, 3).map((tech) => (
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

      </div>
    </section>
  )
}

export default DetailedServices