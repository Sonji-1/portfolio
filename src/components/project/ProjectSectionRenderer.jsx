import { useState } from 'react'
import ButtonLink from '../common/ButtonLink'
import SectionTitle from '../common/SectionTitle'

function GalleryItem({ media }) {
  const [broken, setBroken] = useState(false)
  const isVideo = media.type === 'video' || /\.mp4($|\?)/i.test(media.src ?? '')
  const isEmbed = media.type === 'embed'

  return (
    <figure className="gallery-item">
      {!broken ? (
        isVideo ? (
          <video
            className="gallery-media"
            controls
            preload="metadata"
            poster={media.poster}
            onError={() => setBroken(true)}
          >
            <source src={media.src} type={media.mimeType ?? 'video/mp4'} />
          </video>
        ) : isEmbed ? (
          <iframe
            className="gallery-media gallery-media-embed"
            src={media.src}
            title={media.alt ?? media.caption ?? 'project gallery video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img
            className="gallery-media"
            src={media.src}
            alt={media.alt ?? 'project gallery'}
            onError={() => setBroken(true)}
          />
        )
      ) : (
        <div className="image-placeholder">Image Not Found</div>
      )}
      {media.caption ? <figcaption>{media.caption}</figcaption> : null}
    </figure>
  )
}

function renderBulletContent(item) {
  if (typeof item === 'string') {
    return item
  }

  if (item && typeof item === 'object' && item.url) {
    return (
      <>
        {item.text ? <span>{`${item.text}: `}</span> : null}
        <a className="bullet-inline-link" href={item.url} target="_blank" rel="noreferrer">
          {item.linkText ?? item.url}
        </a>
      </>
    )
  }

  return null
}

function ProjectSectionRenderer({ section }) {
  switch (section.type) {
    case 'statement':
      return (
        <section className="detail-section">
          <SectionTitle title={section.title ?? 'Summary'} />
          <p className="statement-text">{section.content}</p>
        </section>
      )
    case 'tldr':
      return (
        <section className="detail-section section-tldr">
          <SectionTitle title={section.title ?? 'TL;DR'} />
          <ul className="bullet-list">
            {section.items?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )
    case 'bullets':
      return (
        <section className="detail-section">
          <SectionTitle title={section.title ?? 'Details'} />
          <ul className="bullet-list">
            {section.bullets?.map((item, index) => (
              <li key={typeof item === 'string' ? item : item?.url ?? item?.text ?? index}>
                {renderBulletContent(item)}
              </li>
            ))}
          </ul>
        </section>
      )
    case 'metrics':
      return (
        <section className="detail-section">
          <SectionTitle title={section.title ?? 'Results'} />
          <div className="metrics-grid">
            {section.metrics?.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <p className="metric-label">{metric.label}</p>
                <p className="metric-value">
                  <span>{metric.before}</span>
                  <span className="metric-arrow">{'->'}</span>
                  <strong>{metric.after}</strong>
                </p>
                {metric.note ? <p className="metric-note">{metric.note}</p> : null}
              </article>
            ))}
          </div>
        </section>
      )
    case 'gallery':
      const galleryItems = section.media ?? section.images ?? []

      return (
        <section className="detail-section">
          <SectionTitle title={section.title ?? 'Gallery'} />
          {galleryItems.length > 0 ? (
            <div className="gallery-grid">
              {galleryItems.map((media) => (
                <GalleryItem key={media.src} media={media} />
              ))}
            </div>
          ) : (
            <div className="gallery-empty">
              <p>추가 가능한 구현 증거 영역입니다. 이미지를 등록하면 자동으로 노출됩니다.</p>
            </div>
          )}
        </section>
      )
    case 'links':
      return (
        <section className="detail-section">
          <SectionTitle title={section.title ?? 'Links'} />
          <div className="link-row">
            {section.links?.map((link) => (
              <ButtonLink key={link.label} href={link.url}>
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </section>
      )
    case 'tags':
      return (
        <section className="detail-section">
          <SectionTitle title={section.title ?? 'Tags'} />
          <div className="tag-list">
            {section.tags?.map((tag) => (
              <span className="tag-pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </section>
      )
    default:
      return null
  }
}

export default ProjectSectionRenderer
