import { withBase } from '../../lib/assetPath.js'

export const exampleAiProxyProduct = {
  slug: 'example-ai-proxy',
  name: 'Example AI Proxy',
  tagline: 'Self-hosted AI routing proxy',
  headline: 'Route every AI request through one clean control layer',
  highlightText: 'AI Routing Proxy',
  description:
    'A full demo landing page showing the strongest parts of this template: hero, stats, proof, feature depth, alternating showcases, comparison, FAQ, and strong conversion blocks.',
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
  stats: [
    { value: '3 min', label: 'to adapt for a new product', note: 'swap copy, links, and fake screenshots' },
    { value: '7+ blocks', label: 'ready to combine', note: 'hero, proof, showcases, comparison, FAQ, CTA' },
    { value: '1 repo', label: 'for multiple product pages', note: 'single codebase, multiple slugs' }
  ],
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
    },
    {
      title: 'Opinionated layout rhythm',
      description: 'The page alternates dense proof moments with lighter visual sections so the story feels paced, not templated.'
    },
    {
      title: 'Visual flexibility',
      description: 'Fake screenshots, diagrams, SVGs, or real product captures all work in the same slots.'
    },
    {
      title: 'Fast duplication',
      description: 'You can launch a new version by editing one product config and one assets folder.'
    }
  ],
  socialProof: {
    title: 'Trusted by ambitious solo teams',
    body: 'This demo block shows how to inject authority without relying on real client logos during template exploration.',
    logos: ['Northstar Lab', 'Studio Rayon', 'Patchline', 'Signal Foundry', 'Routine Cloud'],
    testimonials: [
      {
        quote: 'We went from a blank page to a convincing product narrative in one afternoon.',
        name: 'Lina Moreau',
        role: 'Founder, Northstar Lab'
      },
      {
        quote: 'The alternating sections make the product feel tangible even before shipping real screenshots.',
        name: 'Marius Klein',
        role: 'Operator, Patchline'
      }
    ]
  },
  showcaseSections: [
    {
      title: 'Provider management',
      body: 'Showcase product screenshots, explain the workflow, and give technical buyers confidence fast. This block is ideal for a settings view, a dashboard, or a core workflow canvas.',
      image: { src: withBase('/assets/products/example-ai-proxy/providers.svg'), alt: 'Provider management screenshot' },
      reverse: false
    },
    {
      title: 'Live observability',
      body: 'Use another section for logs, reporting, usage analytics, or system health. The goal is to prove operational maturity, not just features.',
      image: { src: withBase('/assets/products/example-ai-proxy/logs.svg'), alt: 'Request logs screenshot' },
      reverse: true
    },
    {
      title: 'Prompt assistant and launch workflow',
      body: 'A third showcase block demonstrates that the same template can support richer narratives: guided setup, AI helpers, or high-level orchestration views.',
      image: { src: withBase('/assets/products/example-ai-proxy/assistant.svg'), alt: 'Prompt assistant screenshot' },
      reverse: false
    }
  ],
  comparison: {
    title: 'Compared with stitching custom marketing pages together each time',
    intro: 'Use this section when you need to explain why your product, workflow, or offer deserves a sharper presentation than a one-off landing page made from scratch.',
    left: {
      title: 'This template',
      points: [
        'Keeps a consistent high-end structure across products',
        'Lets you ship a rich page with reusable blocks fast',
        'Makes screenshots, proof, and FAQs easy to plug in',
        'Feels custom once copy, palette, and assets are replaced'
      ]
    },
    right: {
      title: 'Ad hoc pages',
      points: [
        'Often repeat the same weak structure and generic pacing',
        'Take longer because each layout decision restarts from zero',
        'Lose coherence when you scale to more than one product',
        'Encourage copy-first pages with little visual proof'
      ]
    }
  },
  faqs: [
    {
      question: 'How do I turn this into a real product page?',
      answer: 'Duplicate the product config, change the slug, replace links and text, then swap the placeholder SVGs with screenshots or custom illustrations.'
    },
    {
      question: 'Can I use this for non-SaaS products?',
      answer: 'Yes. The structure works for software, services, toolkits, internal tools, education offers, or operator-style products.'
    },
    {
      question: 'Do I need real screenshots immediately?',
      answer: 'No. The template is designed so polished placeholders can still help you validate hierarchy, rhythm, and conversion flow before real assets exist.'
    }
  ],
  finalCta: {
    title: 'Ready to launch your next product page?',
    body: 'Duplicate this product config, replace the assets, tighten the copy, and publish a new landing page without rebuilding the whole frontend.',
    label: 'Reuse this template',
    href: 'https://example.com/template'
  },
  footer: {
    blurb: 'Reusable dark landing-page template for technical products.',
    links: [
      { label: 'Template repo', href: 'https://github.com/adrien9192/multi-product-landing-template' }
    ],
    legal: 'Replace this text with your refund policy, delivery details, licensing notes, or support commitments.'
  },
  seo: {
    title: 'Example AI Proxy — Full Product Landing Page Template',
    description: 'A reusable product landing page template built with React and Vite.'
  }
}
