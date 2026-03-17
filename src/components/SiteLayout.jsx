import { Link } from 'react-router-dom'

export default function SiteLayout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-row">
          <Link to="/" className="brand-mark">LaunchKit</Link>
          <nav className="nav-links" aria-label="Primary">
            <Link to="/">Products</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
