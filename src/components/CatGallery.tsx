import { useEffect, useId, useState } from 'react'
import type { Cat, CatPhoto } from '../data/cats'
import './CatGallery.css'

type CatGalleryProps = {
  cats: Cat[]
  intro?: string
}

type CatCarouselProps = {
  cat: Cat
  onOpenPhoto: (photo: CatPhoto) => void
}

function CatCarousel({ cat, onOpenPhoto }: CatCarouselProps) {
  const [index, setIndex] = useState(0)
  const photo = cat.photos[index]
  const count = cat.photos.length

  if (!photo || count === 0) return null

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + count) % count)
  }

  return (
    <figure className="cat-carousel">
      <div className="cat-carousel-frame">
        <button
          type="button"
          className="cat-carousel-image-button"
          onClick={() => onOpenPhoto(photo)}
          aria-label={`View larger photo of ${cat.name}`}
        >
          <img src={photo.src} alt={photo.alt} loading="lazy" />
        </button>

        {count > 1 && (
          <>
            <button
              type="button"
              className="cat-carousel-nav cat-carousel-nav--prev"
              onClick={() => goTo(index - 1)}
              aria-label={`Previous photo of ${cat.name}`}
            >
              ‹
            </button>
            <button
              type="button"
              className="cat-carousel-nav cat-carousel-nav--next"
              onClick={() => goTo(index + 1)}
              aria-label={`Next photo of ${cat.name}`}
            >
              ›
            </button>
          </>
        )}
      </div>

      <figcaption className="cat-carousel-caption">
        <span className="cat-carousel-name">{cat.name}</span>
        {count > 1 && (
          <div className="cat-carousel-dots" role="tablist" aria-label={`${cat.name} photos`}>
            {cat.photos.map((item, photoIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                className={`cat-carousel-dot${photoIndex === index ? ' is-active' : ''}`}
                aria-selected={photoIndex === index}
                aria-label={`Show photo ${photoIndex + 1} of ${count}`}
                onClick={() => setIndex(photoIndex)}
              />
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  )
}

export function CatGallery({ cats, intro }: CatGalleryProps) {
  const [activePhoto, setActivePhoto] = useState<CatPhoto | null>(null)
  const titleId = useId()

  useEffect(() => {
    if (!activePhoto) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActivePhoto(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activePhoto])

  if (cats.length === 0) return null

  return (
    <div className="cat-gallery">
      {intro && <p className="cat-gallery-intro">{intro}</p>}

      <div className="cat-gallery-columns">
        {cats.map((cat) => (
          <CatCarousel
            key={cat.id}
            cat={cat}
            onOpenPhoto={setActivePhoto}
          />
        ))}
      </div>

      {activePhoto && (
        <div
          className="cat-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActivePhoto(null)}
        >
          <p id={titleId} className="visually-hidden">
            {activePhoto.alt}
          </p>
          <img
            className="cat-lightbox-image"
            src={activePhoto.src}
            alt={activePhoto.alt}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="cat-lightbox-close"
            onClick={() => setActivePhoto(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}
