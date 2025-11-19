import Reveal from './Reveal.jsx'

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)]"></div>
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/8 blur-3xl md:h-96 md:w-96"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/8 blur-3xl md:h-96 md:w-96"></div>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 text-center -mt-16 sm:px-6 sm:-mt-20 md:px-8 md:-mt-24">
        <Reveal className="space-y-8 sm:space-y-10" margin="-20% 0px" amount={0.1}>
          <div className="space-y-5 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-white tracking-tight">
              Engineering the{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                Infinite.
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
              We build bespoke software that transcends boundaries. From intelligent web platforms to innovative mobile apps, we are the architects of your digital future.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 sm:gap-4 md:pt-6">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Our Work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero