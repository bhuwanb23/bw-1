import { useMemo, useState } from 'react'

const quadrants = [
  {
    id: 'ship',
    title: 'Ship',
    subtitle: 'Default choices we ship today',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'explore',
    title: 'Explore',
    subtitle: 'Promising options under evaluation',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'guard',
    title: 'Guard',
    subtitle: 'Use with constraints and checks',
    color: 'from-amber-500 to-orange-400',
  },
  {
    id: 'avoid',
    title: 'Avoid',
    subtitle: 'Not for new builds unless forced',
    color: 'from-pink-500 to-rose-400',
  },
]

const items = [
  { name: 'React + Vite', tag: 'Web', quadrant: 'ship', note: 'Fast DX and predictable builds.' },
  { name: 'React Router', tag: 'Web', quadrant: 'ship', note: 'Clean routing for SPAs.' },
  { name: 'Tailwind CSS', tag: 'UI', quadrant: 'ship', note: 'Scale UI with constraints.' },
  { name: 'PostgreSQL', tag: 'Data', quadrant: 'ship', note: 'Reliable default database.' },
  { name: 'Docker', tag: 'Infra', quadrant: 'ship', note: 'Portable environments.' },
  { name: 'Playwright', tag: 'QA', quadrant: 'explore', note: 'E2E tests for critical flows.' },
  { name: 'Vector search', tag: 'AI', quadrant: 'explore', note: 'Great for retrieval + search.' },
  { name: 'Serverless', tag: 'Infra', quadrant: 'guard', note: 'Good fit for spiky workloads.' },
  { name: 'Microservices', tag: 'Architecture', quadrant: 'guard', note: 'Only when boundaries are real.' },
  { name: 'Over-custom design systems', tag: 'UI', quadrant: 'avoid', note: 'Avoid rebuilding basics.' },
  { name: 'Premature event buses', tag: 'Architecture', quadrant: 'avoid', note: 'Complexity without benefit.' },
]

const tags = ['All', 'Web', 'UI', 'Data', 'Infra', 'AI', 'QA', 'Architecture']

const TechRadar = () => {
  const [activeTag, setActiveTag] = useState('All')
  const [activeItem, setActiveItem] = useState(items[0].name)

  const filtered = useMemo(() => {
    if (activeTag === 'All') return items
    return items.filter((i) => i.tag === activeTag)
  }, [activeTag])

  const selected = useMemo(() => filtered.find((i) => i.name === activeItem) ?? filtered[0], [filtered, activeItem])

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60 mb-5 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>Tech radar</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-white">A living stack with constraints.</h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            We choose tools by fit: delivery speed, long-term maintenance, and failure modes. Not hype.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => {
            const active = t === activeTag
            return (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setActiveTag(t)
                  const next = t === 'All' ? items[0] : items.find((i) => i.tag === t)
                  if (next) setActiveItem(next.name)
                }}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                  active ? 'border-white/25 bg-white/5 text-white' : 'border-white/10 bg-black/20 text-white/70 hover:border-white/20'
                }`}
              >
                {t}
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 md:grid-cols-2">
            {quadrants.map((q) => (
              <div key={q.id} className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">{q.title}</p>
                    <p className="mt-1 text-sm text-white/60">{q.subtitle}</p>
                  </div>
                  <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${q.color} opacity-90`} />
                </div>

                <div className="mt-4 space-y-2">
                  {filtered
                    .filter((i) => i.quadrant === q.id)
                    .map((i) => {
                      const active = selected?.name === i.name
                      return (
                        <button
                          key={i.name}
                          type="button"
                          onClick={() => setActiveItem(i.name)}
                          className={`w-full rounded-2xl border px-3 py-3 text-left transition-all ${
                            active ? 'border-white/25 bg-white/5' : 'border-white/10 bg-black/20 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-sm text-white/85">{i.name}</p>
                              <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">{i.tag}</p>
                            </div>
                            <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${q.color}`} />
                          </div>
                        </button>
                      )
                    })}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-2xl p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Selected</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">{selected?.name}</h3>
            <p className="mt-2 text-white/70">{selected?.note}</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Constraints</p>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-white/80 flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span>Prefer boring defaults unless there is a clear upside.</span>
                </li>
                <li className="text-sm text-white/80 flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span>Every choice needs an exit strategy.</span>
                </li>
                <li className="text-sm text-white/80 flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span>We document trade-offs and operational impact.</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">{selected?.tag}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">Blueprint-first</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">Maintainable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechRadar
