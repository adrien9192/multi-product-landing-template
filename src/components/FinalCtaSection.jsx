export default function FinalCtaSection({ finalCta }) {
  return (
    <section className="final-cta">
      <h2>{finalCta.title}</h2>
      <p className="muted">{finalCta.body}</p>
      <a className="btn-primary" href={finalCta.href} target="_blank" rel="noreferrer">
        {finalCta.label}
      </a>
    </section>
  )
}
