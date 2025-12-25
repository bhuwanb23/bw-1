import ProductsHero from '../components/products/ProductsHero.jsx'
import ProductGrid from '../components/products/ProductGrid.jsx'
import ProductsFooterCTA from '../components/products/ProductsFooterCTA.jsx'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { pageSEO } from '../data/seoData.js'

const ProductsPage = () => {
  return (
    <>
      <SEO
        title={pageSEO.products.title}
        description={pageSEO.products.description}
        keywords={pageSEO.products.keywords}
        url={pageSEO.products.path}
      />
      <div className="relative overflow-hidden bg-transparent">
      <div className="relative z-20">
        <main className="relative w-full px-4 sm:px-8 lg:px-12">
          <ProductsHero />
          <Reveal delay={0} amount={0.15} margin="-10% 0px">
            <ProductGrid />
          </Reveal>
          {/* <DeveloperDocsCTA /> */}
          <Reveal delay={120} amount={0.15} margin="-10% 0px">
            <ProductsFooterCTA />
          </Reveal>
        </main>
      </div>
    </div>
    </>
  )
}

export default ProductsPage