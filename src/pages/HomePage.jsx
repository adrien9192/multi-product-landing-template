import ProductCard from '../components/ProductCard.jsx'
import SiteLayout from '../components/SiteLayout.jsx'

export default function HomePage({ products }) {
  return (
    <SiteLayout>
      <section className="hub-hero container">
        <p className="eyebrow">Multi-product landing template</p>
        <h1>Launch product landing pages faster</h1>
        <p className="muted hub-copy">
          Reuse one React + Vite codebase for multiple product pages, each driven by a simple config file.
        </p>
      </section>
      <section className="container product-grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
    </SiteLayout>
  )
}
