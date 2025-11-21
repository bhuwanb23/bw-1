const FooterCTA = () => {
  return (
    <section className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 backdrop-blur-xl p-8 md:p-12 text-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join our community — Write articles, ask questions, share knowledge.
        </h2>

        <p className="text-xl text-white/80 mb-8">
          Be part of a thriving tech community where knowledge is shared and innovation thrives.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            Join Now
          </button>
          <button className="px-8 py-4 rounded-lg border border-white/20 bg-black/30 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default FooterCTA