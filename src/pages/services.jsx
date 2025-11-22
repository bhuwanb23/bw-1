import ServicesHero from '../components/services/ServicesHero.jsx'
import ServiceCategories from '../components/services/ServiceCategories.jsx'
import DetailedServices from '../components/services/DetailedServices.jsx'
import ProcessSection from '../components/services/ProcessSection.jsx'
import CaseStudiesPreview from '../components/services/CaseStudiesPreview.jsx'
import ServicesCTA from '../components/services/ServicesCTA.jsx'

const ServicesPage = () => {
  return (
    <div className="relative overflow-hidden bg-transparent min-h-screen">
      <div className="relative z-20">
        <main className="relative w-full px-4 sm:px-8 lg:px-12">
          <ServicesHero />
          <ServiceCategories />
          <DetailedServices />
          <ProcessSection />
          <ServicesCTA />
        </main>
      </div>
    </div>
  )
}

export default ServicesPage