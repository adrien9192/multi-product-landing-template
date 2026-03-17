import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

describe('App routing', () => {
  it('renders the product hub on the home route', () => {
    window.history.pushState({}, '', '/')
    render(<App />)
    expect(screen.getByRole('heading', { name: /launch product landing pages faster/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view landing page/i })).toBeInTheDocument()
  })

  it('renders a product page for a known slug', () => {
    window.history.pushState({}, '', '/products/example-ai-proxy')
    render(<App />)
    expect(screen.getByRole('heading', { name: /route every ai request through one clean control layer/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get lifetime access/i })).toBeInTheDocument()
  })
})
