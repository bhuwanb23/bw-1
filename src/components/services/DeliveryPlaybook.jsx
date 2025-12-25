import { useMemo, useState } from 'react'

const weeks = [
  {
    id: 'week-0',
    label: 'Week 0',
    title: 'Blueprint + alignment',
    points: [
      'Define success metrics and constraints',
      'Map the system boundary and risks',
      'Decide tech choices + non-goals',
      'Create milestone plan and demo cadence',
    ],
    artifacts: ['Project brief', 'Risk register', 'Milestone plan'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'week-1',
    label: 'Week 1',
    title: 'Skeleton + core flows',
    points: [
      'Repo + CI setup, environments wired',
      'Core navigation, auth boundary (if needed)',
      'First end-to-end happy path',
      'Baseline monitoring + logging',
    ],
    artifacts: ['CI pipeline', 'First demo', 'Observability baseline'],
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'week-2',
    label: 'Week 2',
    title: 'Iteration + hardening',
    points: [
      'Expand features based on feedback',
      'Performance budget + critical tests',
      'Security checklist + access control audit',
      'Docs for hand-off and ops',
    ],
    artifacts: ['Test suite', 'Perf budget', 'Runbook'],
    color: 'from-purple-500 to-violet-400',
  },
]

const rituals = [
  { title: 'Weekly demo', desc: 'Show what shipped, not slides.' },
  { title: 'Decision log', desc: 'Record trade-offs and future options.' },
  { title: 'Quality gates', desc: 'Checks that keep velocity safe.' },
  { title: 'Release notes', desc: 'Short and readable for stakeholders.' },
]

const DeliveryPlaybook = () => {
  const [activeId, setActiveId] = useState(weeks[0].id)

  const active = useMemo(() => weeks.find((w) => w.id === activeId) ?? weeks[0], [activeId])

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60 mb-5 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>Delivery playbook</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-white">How work moves week to week.</h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            Not a generic “process”. A practical cadence that keeps scope honest, quality high, and stakeholders informed.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-4 md:p-6">
            <div className="flex flex-wrap gap-2">
              {weeks.map((w) => {
                const isActive = w.id === activeId
                return (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setActiveId(w.id)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                      isActive ? 'border-white/25 bg-white/5 text-white' : 'border-white/10 bg-black/20 text-white/70 hover:border-white/20'
                    }`}
                  >
                    {w.label}
                  </button>
                )
              })}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Focus</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{active.title}</h3>
                  </div>
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${active.color} opacity-90`} />
                </div>

                <ul className="mt-4 space-y-2">
                  {active.points.map((p) => (
                    <li key={p} className="text-sm text-white/80 flex items-start gap-2">
                      <span className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${active.color}`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Artifacts you receive</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.artifacts.map((a) => (
                    <span key={a} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Default rules</p>
                  <ul className="mt-3 space-y-2">
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      <span>Small PRs, fast reviews.</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      <span>Feature flags for risky changes.</span>
                    </li>
                    <li className="text-sm text-white/80 flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      <span>Demo is the source of truth.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-2xl p-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Rituals</p>
            <h3 className="mt-3 text-xl font-semibold text-white">What keeps delivery clean.</h3>
            <div className="mt-5 space-y-3">
              {rituals.map((r) => (
                <div key={r.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm font-semibold text-white">{r.title}</p>
                  <p className="mt-1 text-sm text-white/70">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryPlaybook
