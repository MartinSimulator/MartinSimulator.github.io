import type { Experience } from '../data/experiences'
import './Timeline.css'

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

function toMonthIndex(month: number, year: number) {
  return year * 12 + (month - 1)
}

function formatDate(month: number, year: number) {
  return `${MONTHS[month - 1]} ${year}`
}

type TimelineProps = {
  experiences: Experience[]
}

export function Timeline({ experiences }: TimelineProps) {
  if (experiences.length === 0) return null

  const sorted = [...experiences].sort(
    (a, b) => toMonthIndex(a.month, a.year) - toMonthIndex(b.month, b.year),
  )

  const start = toMonthIndex(sorted[0].month, sorted[0].year)
  const end = toMonthIndex(
    sorted[sorted.length - 1].month,
    sorted[sorted.length - 1].year,
  )
  const span = end - start

  const positionOf = (experience: Experience) => {
    if (sorted.length === 1 || span === 0) return 50

    const inset = 10
    const index = toMonthIndex(experience.month, experience.year)
    return inset + ((index - start) / span) * (100 - inset * 2)
  }

  return (
    <div className="timeline" role="list" aria-label="Experience timeline">
      <div className="timeline-track" aria-hidden="true" />

      {sorted.map((experience) => {
        const position = positionOf(experience)

        return (
          <div
            key={experience.id}
            className={`timeline-item timeline-item--${experience.side}`}
            style={{ left: `${position}%` }}
            role="listitem"
          >
            <div className="timeline-stem" aria-hidden="true" />

            <button
              type="button"
              className="timeline-marker"
              aria-describedby={`timeline-bubble-${experience.id}`}
            >
              {experience.logo ? (
                <img
                  className="timeline-logo"
                  src={experience.logo}
                  alt=""
                />
              ) : (
                <span className="timeline-logo timeline-logo--text">
                  {experience.logoText}
                </span>
              )}
              <span className="timeline-date">
                {formatDate(experience.month, experience.year)}
              </span>
            </button>

            <div
              className="timeline-bubble"
              id={`timeline-bubble-${experience.id}`}
              role="tooltip"
            >
              <p className="timeline-bubble-role">{experience.role}</p>
              <p className="timeline-bubble-company">{experience.company}</p>
              <p className="timeline-bubble-description">
                {experience.description}
              </p>
              {experience.links && experience.links.length > 0 && (
                <ul className="timeline-bubble-links">
                  {experience.links.map((link) => (
                    <li key={link.href + link.label}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
