import { useEffect, useMemo, useState } from 'react'

const words = [
  { id: 'hyper', text: 'hyper-real interfaces' },
  { id: 'intelligent', text: 'intelligent copilots' },
  { id: 'modular', text: 'modular platforms' },
  { id: 'immersive', text: 'immersive worlds' },
]

const TaglineTicker = ({ interval = 2600 }) => {
  const entries = useMemo(() => words, [])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % entries.length)
    }, interval)
    return () => clearInterval(timer)
  }, [entries.length, interval])

  const active = entries[index]

  return (
    <div className="tagline-ticker text-left text-lg font-medium uppercase tracking-[0.3em] text-slate-300">
      <span className="tagline-label">We build</span>
      <span key={active.id} className="tagline-phrase neon-text">
        {active.text}
      </span>
    </div>
  )
}

export default TaglineTicker

