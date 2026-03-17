export default function SocialProofSection({ socialProof }) {
  if (!socialProof) return null

  return (
    <section className="proof-section">
      <div className="section-heading proof-heading">
        <p className="eyebrow">Social proof</p>
        <h2>{socialProof.title}</h2>
        <p className="muted">{socialProof.body}</p>
      </div>
      <div className="logo-cloud" aria-label="Demo logos">
        {socialProof.logos.map((logo) => (
          <span key={logo} className="logo-pill">{logo}</span>
        ))}
      </div>
      <div className="testimonial-grid">
        {socialProof.testimonials.map((quote) => (
          <article key={quote.name} className="testimonial-card">
            <p>“{quote.quote}”</p>
            <div>
              <strong>{quote.name}</strong>
              <p className="muted testimonial-role">{quote.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
