import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <p className="eyebrow">{product.tagline}</p>
      <h2>{product.name}</h2>
      <p className="muted">{product.description}</p>
      <div className="card-actions">
        <Link className="btn-primary" to={`/products/${product.slug}`}>
          View landing page
        </Link>
      </div>
    </article>
  )
}
