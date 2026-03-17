import { describe, expect, it } from 'vitest'
import { withBase } from './assetPath.js'

describe('withBase', () => {
  it('prefixes root-relative asset paths with the Vite base URL', () => {
    expect(withBase('/assets/products/example-ai-proxy/dashboard.svg', '/multi-product-landing-template/'))
      .toBe('/multi-product-landing-template/assets/products/example-ai-proxy/dashboard.svg')
  })
})
