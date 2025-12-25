import ServicesHero from '../components/services/ServicesHero.jsx'
import OutcomesBoard from '../components/services/OutcomesBoard.jsx'
import DeliveryPlaybook from '../components/services/DeliveryPlaybook.jsx'
import DetailedServices from '../components/services/DetailedServices.jsx'
import ProcessSection from '../components/services/ProcessSection.jsx'
import WhyWorkWithUs from '../components/services/WhyWorkWithUs.jsx'
import TechnologiesTools from '../components/services/TechnologiesTools.jsx'
import TechRadar from '../components/services/TechRadar.jsx'
import ServicesCTA from '../components/services/ServicesCTA.jsx'
import SEO from '../components/SEO.jsx'
import { pageSEO, softwareApplicationSchema } from '../data/seoData.js'

const ServicesPage = () => {
  return (
    <>
      <SEO
        title={pageSEO.services.title}
        description={pageSEO.services.description}
        keywords={pageSEO.services.keywords}
        url={pageSEO.services.path}
        structuredData={softwareApplicationSchema}
      />
      <div className="relative overflow-hidden bg-transparent min-h-screen">
      <div className="relative z-20">
        <main className="relative w-full px-4 sm:px-8 lg:px-12">
          <ServicesHero />
          <OutcomesBoard />
          <DetailedServices />
          <DeliveryPlaybook />
          <ProcessSection />
          <WhyWorkWithUs />
          <TechnologiesTools />
          <ServicesCTA />
        </main>
      </div>
    </div>
    </>
  )
}

export default ServicesPage