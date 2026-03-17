export default function StatsBand({ stats = [] }) {
  if (!stats.length) return null

  return (
    <section className="stats-band">
      {stats.map((stat) => (
        <article key={stat.label} className="stat-item">
          <p className="stat-value">{stat.value}</p>
          <p className="stat-label">{stat.label}</p>
          <p className="muted stat-note">{stat.note}</p>
        </article>
      ))}
    </section>
  )
}
