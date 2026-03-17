import { exampleAiProxyProduct } from './example-ai-proxy.js'

export const products = [exampleAiProxyProduct]

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}
