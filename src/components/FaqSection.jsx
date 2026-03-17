export default function FaqSection({ faqs = [] }) {
  if (!faqs.length) return null

  return (
    <section className="faq-section">
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2>Frequently asked questions</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item">
            <summary>{faq.question}</summary>
            <p className="muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
