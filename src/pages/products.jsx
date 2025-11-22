import ProductsHero from '../components/products/ProductsHero.jsx'
import FeaturedProducts from '../components/products/FeaturedProducts.jsx'
import ProductFilterBar from '../components/products/ProductFilterBar.jsx'
import ProductGrid from '../components/products/ProductGrid.jsx'
import SocialProof from '../components/products/SocialProof.jsx'
import DeveloperDocsCTA from '../components/products/DeveloperDocsCTA.jsx'
import ProductsFooterCTA from '../components/products/ProductsFooterCTA.jsx'

const ProductsPage = () => {
  return (
    <div className="relative overflow-hidden bg-transparent">
      <div className="relative z-20">
        <main className="relative w-full px-4 sm:px-8 lg:px-12">
          <ProductsHero />
          <FeaturedProducts />
          {/* <ProductFilterBar /> */}
          <ProductGrid />
          <SocialProof />
          <DeveloperDocsCTA />
          <ProductsFooterCTA />
        </main>
      </div>
    </div>
  )
}

export default ProductsPage