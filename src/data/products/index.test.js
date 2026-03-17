import { describe, expect, it } from 'vitest'
import { getProductBySlug, products } from './index.js'

describe('product registry', () => {
  it('returns the product matching a known slug', () => {
    expect(products.length).toBeGreaterThan(0)
    expect(getProductBySlug('example-ai-proxy')).toMatchObject({
      slug: 'example-ai-proxy',
      name: 'Example AI Proxy'
    })
  })

  it('returns undefined for an unknown slug', () => {
    expect(getProductBySlug('missing-product')).toBeUndefined()
  })
})
