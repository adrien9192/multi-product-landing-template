export default function ShowcaseSection({ section, onPreview }) {
  return (
    <section className={`showcase ${section.reverse ? 'reverse' : ''}`}>
      <div>
        <h2>{section.title}</h2>
        <p className="muted">{section.body}</p>
      </div>
      <button type="button" className="showcase-image" onClick={() => onPreview(section.image)}>
        <img src={section.image.src} alt={section.image.alt} />
      </button>
    </section>
  )
}
