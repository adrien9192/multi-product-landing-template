import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'

export default function NotFoundPage() {
  return (
    <SiteLayout>
      <section className="container not-found">
        <h1>Page not found</h1>
        <p className="muted">The route does not match any product page.</p>
        <Link className="btn-primary" to="/">
          Back to products
        </Link>
      </section>
    </SiteLayout>
  )
}
