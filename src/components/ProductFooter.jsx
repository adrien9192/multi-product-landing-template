export default function ProductFooter({ footer }) {
  return (
    <footer className="page-footer">
      <p>{footer.blurb}</p>
      <div className="footer-links">
        {footer.links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <p className="muted footer-legal">{footer.legal}</p>
    </footer>
  )
}
