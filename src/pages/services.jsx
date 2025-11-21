import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import SplineBackground from '../components/SplineBackground.jsx'
import ServicesHero from '../components/services/ServicesHero.jsx'
import ServiceCategories from '../components/services/ServiceCategories.jsx'
import DetailedServices from '../components/services/DetailedServices.jsx'
import ProcessSection from '../components/services/ProcessSection.jsx'
import CaseStudiesPreview from '../components/services/CaseStudiesPreview.jsx'
import ServicesCTA from '../components/services/ServicesCTA.jsx'

const ServicesPage = () => {
  return (
    <div className="relative overflow-hidden bg-black min-h-screen">
      <SplineBackground />
      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent opacity-20" />
        <div className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/8 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-60 w-60 translate-x-1/3 rounded-full bg-purple-500/8 blur-[180px]" />
      </div>

      <Header />
      <div className="relative z-20">
        <main className="relative w-full px-4 pt-20 sm:px-8 lg:px-12">
          <ServicesHero />
          <ServiceCategories />
          <DetailedServices />
          <ProcessSection />
          <CaseStudiesPreview />
          <ServicesCTA />
          <div className="mt-24">
            <Footer />
          </div>
        </main>
      </div>

      <div className="pointer-events-none fixed inset-x-0 top-40 mx-auto h-[600px] max-w-5xl rounded-full bg-gradient-to-b from-transparent via-blue-500/5 via-purple-500/5 to-transparent blur-[220px] z-10" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.08),_transparent)] z-10" />
    </div>
  )
}

export default ServicesPage