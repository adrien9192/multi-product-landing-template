# Multi-product Landing Template

Reusable **React + Vite** landing-page template for multiple technical products in one repo.

## What this repo gives you
- one landing-page pattern reused across many products
- one route per product
- one config file per product
- GitHub Pages deployment
- reusable dark product-marketing styling inspired by the ClawProxy pattern

## Routes
- `/` → product hub
- `/products/:slug` → product page

## Local development
```bash
npm install
npm run dev
```

## Run tests
```bash
npm test
```

## Production build
```bash
npm run build
```

## Add a new product
1. Duplicate `src/data/products/example-ai-proxy.js`
2. Rename the slug and update the copy
3. Add assets under `public/assets/products/<your-slug>/`
4. Export the new product from `src/data/products/index.js`
5. Deploy

## Repo structure
- `src/data/products/` → product configs
- `src/components/` → shared landing-page sections
- `src/pages/` → hub/product pages
- `public/assets/products/` → per-product images
- `.github/workflows/deploy.yml` → GitHub Pages deployment

## GitHub Pages notes
The workflow builds with a repo-specific base path automatically. A small `404.html` redirect is included so deep links can still load on GitHub Pages.
