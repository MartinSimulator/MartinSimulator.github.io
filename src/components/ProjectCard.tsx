import { useId, useState } from 'react'
import type { Project } from '../data/projects'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
}

function isDirectVideo(url: string) {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false)
  const detailId = useId()

  const {
    title,
    label,
    image,
    description,
    githubUrl,
    websiteUrl,
    demoVideoUrl,
    links,
    tools,
  } = project

  const hasDetail =
    Boolean(title) ||
    Boolean(description) ||
    Boolean(githubUrl) ||
    Boolean(websiteUrl) ||
    Boolean(demoVideoUrl) ||
    Boolean(links && links.length > 0) ||
    Boolean(tools && tools.length > 0)

  return (
    <article
      className={`project-card${open ? ' is-open' : ''}`}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="project-card-face"
        aria-expanded={hasDetail ? open : undefined}
        aria-controls={hasDetail ? detailId : undefined}
        onClick={() => {
          if (hasDetail) setOpen((current) => !current)
        }}
      >
        {image ? (
          <img
            className="project-card-image"
            src={image}
            alt={label ?? title ?? ''}
          />
        ) : (
          <div className="project-card-image project-card-image--empty" />
        )}
        {label && <span className="project-card-label">{label}</span>}
      </button>

      {hasDetail && <div className="project-card-bridge" aria-hidden="true" />}

      {hasDetail && (
        <div
          className="project-card-detail"
          id={detailId}
          role="tooltip"
        >
          {title && <h3 className="project-card-title">{title}</h3>}
          {description && (
            <p className="project-card-description">{description}</p>
          )}

          {demoVideoUrl && (
            <div className="project-card-demo">
              {isDirectVideo(demoVideoUrl) ? (
                <video
                  className="project-card-video"
                  src={demoVideoUrl}
                  controls
                  playsInline
                />
              ) : (
                <a href={demoVideoUrl} target="_blank" rel="noreferrer">
                  Demo video
                </a>
              )}
            </div>
          )}

          {(githubUrl || websiteUrl || (links && links.length > 0)) && (
            <ul className="project-card-links">
              {githubUrl && (
                <li>
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
              )}
              {websiteUrl && (
                <li>
                  <a href={websiteUrl} target="_blank" rel="noreferrer">
                    Website
                  </a>
                </li>
              )}
              {links?.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {tools && tools.length > 0 && (
            <div className="project-card-tools">
              <p className="project-card-tools-label">Tools</p>
              <ul className="project-card-tools-list">
                {tools.map((tool) => (
                  <li key={tool.id}>
                    <a
                      className="project-tool"
                      href={tool.href}
                      target="_blank"
                      rel="noreferrer"
                      title={tool.name}
                      aria-label={tool.name}
                    >
                      {tool.logo ? (
                        <img
                          className="project-tool-logo"
                          src={tool.logo}
                          alt=""
                        />
                      ) : (
                        <span className="project-tool-fallback">
                          {tool.name}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  )
}
