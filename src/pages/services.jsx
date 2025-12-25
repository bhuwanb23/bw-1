import ServicesHero from '../components/services/ServicesHero.jsx'
import DetailedServices from '../components/services/DetailedServices.jsx'
import ProcessSection from '../components/services/ProcessSection.jsx'
import WhyWorkWithUs from '../components/services/WhyWorkWithUs.jsx'
import TechnologiesTools from '../components/services/TechnologiesTools.jsx'
import ServicesCTA from '../components/services/ServicesCTA.jsx'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
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
          <Reveal delay={0} amount={0.15} margin="-10% 0px">
            <DetailedServices />
          </Reveal>
          <Reveal delay={80} amount={0.15} margin="-10% 0px">
            <ProcessSection />
          </Reveal>
          <Reveal delay={120} amount={0.15} margin="-10% 0px">
            <WhyWorkWithUs />
          </Reveal>
          <Reveal delay={160} amount={0.15} margin="-10% 0px">
            <TechnologiesTools />
          </Reveal>
          <Reveal delay={200} amount={0.15} margin="-10% 0px">
            <ServicesCTA />
          </Reveal>
        </main>
      </div>
    </div>
    </>
  )
}

export default ServicesPage