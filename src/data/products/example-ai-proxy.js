import { withBase } from '../../lib/assetPath.js'

export const exampleAiProxyProduct = {
  slug: 'example-ai-proxy',
  name: 'Example AI Proxy',
  tagline: 'Self-hosted AI routing proxy',
  headline: 'Route every AI request through one clean control layer',
  highlightText: 'AI Routing Proxy',
  description:
    'A reusable demo product showing how to market a technical product with one hero, feature grid, screenshots, and a strong conversion path.',
  priceBadge: '$29 one-time template example',
  primaryCta: {
    label: 'Get lifetime access',
    href: 'https://example.com/buy'
  },
  secondaryLinks: [
    { label: 'Email', href: 'mailto:hello@example.com' },
    { label: 'GitHub', href: 'https://github.com/example/example-ai-proxy' }
  ],
  heroImage: {
    src: withBase('/assets/products/example-ai-proxy/dashboard.svg'),
    alt: 'Example AI Proxy dashboard'
  },
  features: [
    {
      title: 'Multi-provider routing',
      description: 'Route requests across providers from one endpoint with clean operational control.'
    },
    {
      title: 'Key rotation',
      description: 'Spread traffic across keys and recover gracefully from provider-level errors.'
    },
    {
      title: 'Fallback logic',
      description: 'Fail over to another provider to keep your product available during incidents.'
    }
  ],
  showcaseSections: [
    {
      title: 'Provider management',
      body: 'Showcase product screenshots, explain the workflow, and give technical buyers confidence fast.',
      image: { src: withBase('/assets/products/example-ai-proxy/providers.svg'), alt: 'Provider management screenshot' },
      reverse: false
    },
    {
      title: 'Live observability',
      body: 'Use a second section to reinforce value with logs, analytics, or operational visibility.',
      image: { src: withBase('/assets/products/example-ai-proxy/logs.svg'), alt: 'Request logs screenshot' },
      reverse: true
    }
  ],
  finalCta: {
    title: 'Ready to launch your next product page?',
    body: 'Duplicate this product config, replace the assets, and publish a new landing page quickly.',
    label: 'Reuse this template',
    href: 'https://example.com/template'
  },
  footer: {
    blurb: 'Reusable dark landing-page template for technical products.',
    links: [
      { label: 'Template repo', href: 'https://github.com/example/multi-product-landing-template' }
    ],
    legal: 'Replace this text with your refund policy, license terms, or delivery notes.'
  },
  seo: {
    title: 'Example AI Proxy — Product Landing Page Template',
    description: 'A reusable product landing page template built with React and Vite.'
  }
}
