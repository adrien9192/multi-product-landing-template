export default function ImageLightbox({ image, onClose }) {
  if (!image) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close preview">
        ×
      </button>
      <img src={image.src} alt={image.alt} className="lightbox-image" onClick={(event) => event.stopPropagation()} />
    </div>
  )
}
