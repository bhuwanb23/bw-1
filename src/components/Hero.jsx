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
              <span className="gradient-text-animated">
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
              className="btn-primary-spline sm:btn-primary-spline-lg"
            >
              Start Your Project
            </a>
            <a
              href="#portfolio"
              className="btn-ghost-spline sm:btn-ghost-spline-lg"
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