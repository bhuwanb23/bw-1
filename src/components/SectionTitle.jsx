const SectionTitle = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-widest text-white/40 mb-2">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-5xl md:text-6xl font-semibold leading-tight text-white tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-lg text-white/60 font-light">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionTitle

