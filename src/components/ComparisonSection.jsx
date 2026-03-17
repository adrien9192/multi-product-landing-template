export default function ComparisonSection({ comparison }) {
  if (!comparison) return null

  return (
    <section className="comparison-section">
      <div className="section-heading">
        <p className="eyebrow">Why this template</p>
        <h2>{comparison.title}</h2>
        <p className="muted">{comparison.intro}</p>
      </div>
      <div className="comparison-grid">
        <article className="comparison-card comparison-card--positive">
          <h3>{comparison.left.title}</h3>
          <ul>
            {comparison.left.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
        <article className="comparison-card">
          <h3>{comparison.right.title}</h3>
          <ul>
            {comparison.right.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
      </div>
    </section>
  )
}
