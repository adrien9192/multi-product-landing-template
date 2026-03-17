export default function FeatureGrid({ features }) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Core value</p>
        <h2>Built for modern technical products</h2>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p className="muted">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
