import { useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ComparisonSection from '../components/ComparisonSection.jsx'
import FaqSection from '../components/FaqSection.jsx'
import FeatureGrid from '../components/FeatureGrid.jsx'
import FinalCtaSection from '../components/FinalCtaSection.jsx'
import ImageLightbox from '../components/ImageLightbox.jsx'
import ProductFooter from '../components/ProductFooter.jsx'
import ProductHero from '../components/ProductHero.jsx'
import ShowcaseSection from '../components/ShowcaseSection.jsx'
import SiteLayout from '../components/SiteLayout.jsx'
import SocialProofSection from '../components/SocialProofSection.jsx'
import StatsBand from '../components/StatsBand.jsx'
import { getProductBySlug } from '../data/products/index.js'

export default function ProductPage() {
  const { slug } = useParams()
  const product = useMemo(() => getProductBySlug(slug), [slug])
  const [previewImage, setPreviewImage] = useState(null)

  if (!product) {
    return <Navigate to="/" replace />
  }

  return (
    <SiteLayout>
      <div className="container product-page">
        <ProductHero product={product} onPreview={setPreviewImage} />
        <StatsBand stats={product.stats} />
        <SocialProofSection socialProof={product.socialProof} />
        <FeatureGrid features={product.features} />
        {product.showcaseSections.map((section) => (
          <ShowcaseSection key={section.title} section={section} onPreview={setPreviewImage} />
        ))}
        <ComparisonSection comparison={product.comparison} />
        <FaqSection faqs={product.faqs} />
        <FinalCtaSection finalCta={product.finalCta} />
        <ProductFooter footer={product.footer} />
      </div>
      <ImageLightbox image={previewImage} onClose={() => setPreviewImage(null)} />
    </SiteLayout>
  )
}
