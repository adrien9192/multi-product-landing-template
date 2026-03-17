export default function ProductHero({ product, onPreview }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="pill">{product.priceBadge}</p>
        <p className="eyebrow">{product.tagline}</p>
        <h1>{product.headline}</h1>
        <p className="muted hero-body">{product.description}</p>
        <div className="action-row">
          <a className="btn-primary" href={product.primaryCta.href} target="_blank" rel="noreferrer">
            {product.primaryCta.label}
          </a>
          {product.secondaryLinks.map((link) => (
            <a key={link.label} className="btn-secondary" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <button className="hero-image-card" type="button" onClick={() => onPreview(product.heroImage)}>
        <img src={product.heroImage.src} alt={product.heroImage.alt} />
      </button>
    </section>
  )
}
