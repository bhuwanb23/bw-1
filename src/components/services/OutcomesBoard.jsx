import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const tracks = [
  {
    id: 'speed-to-market',
    title: 'Speed to market',
    summary: 'Ship usable slices weekly without burning quality.',
    outcomes: [
      { label: 'Kickoff', value: '48–72h', note: 'From alignment to first sprint' },
      { label: 'Demo cadence', value: 'Weekly', note: 'Stakeholder feedback loop' },
      { label: 'Release', value: 'Continuous', note: 'Small, safe deployments' },
    ],
    signals: ['Scope is fuzzy', 'Stakeholders are busy', 'Need early traction'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'stability',
    title: 'Stability & reliability',
    summary: 'Reduce incidents and make systems observable.',
    outcomes: [
      { label: 'Uptime target', value: '99.9%', note: 'SLO-driven ops' },
      { label: 'MTTR', value: '< 60m', note: 'Faster incident recovery' },
      { label: 'Coverage', value: 'Critical paths', note: 'Test what matters first' },
    ],
    signals: ['Frequent regressions', 'No monitoring', 'Production fear'],
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'scale',
    title: 'Scale & performance',
    summary: 'Keep latency low and costs predictable as usage grows.',
    outcomes: [
      { label: 'Perf budget', value: 'Defined', note: 'Core flows measured' },
      { label: 'Infra cost', value: 'Guardrails', note: 'Budgets + alerts' },
      { label: 'Load tests', value: 'Baseline', note: 'Repeatable scenarios' },
    ],
    signals: ['Slow dashboards', 'Spiky traffic', 'Cloud bills rising'],
    color: 'from-purple-500 to-violet-400',
  },
]

const OutcomesBoard = () => {
  const [activeId, setActiveId] = useState(tracks[0].id)

  const active = useMemo(() => tracks.find((t) => t.id === activeId) ?? tracks[0], [activeId])

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60 mb-5 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Outcomes board</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
              What you get isn’t “features”.
              <span className="block text-white/70">It’s outcomes you can track.</span>
            </h2>

            <p className="mt-4 text-white/70 max-w-xl">
              Choose what matters most right now. We align delivery to measurable wins and document the trade-offs.
            </p>

            <div className="mt-6 space-y-2">
              {tracks.map((t) => {
                const activeTab = t.id === activeId
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveId(t.id)}
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition-all ${
                      activeTab
                        ? 'border-white/25 bg-white/5'
                        : 'border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">{t.title}</p>
                        <p className="mt-1 text-sm text-white/65">{t.summary}</p>
                      </div>
                      <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${t.color} opacity-80`} />
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/proposal"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-600"
              >
                Align on outcomes
              </Link>
              <a
                href="#service-specs"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 transition-all duration-300 hover:bg-white/10"
              >
                View service specs
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Active outcome</p>
                <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">{active.title}</h3>
                <p className="mt-2 text-white/70">{active.summary}</p>
              </div>
              <div className={`hidden md:block h-14 w-14 rounded-2xl bg-gradient-to-br ${active.color}`} />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {active.outcomes.map((o) => (
                <div key={o.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">{o.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{o.value}</p>
                  <p className="mt-1 text-sm text-white/65">{o.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Signals this is your track</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.signals.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OutcomesBoard
