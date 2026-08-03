import type { ContactLink } from '../data/contact'
import './ContactList.css'

type ContactListProps = {
  links: ContactLink[]
}

export function ContactList({ links }: ContactListProps) {
  if (links.length === 0) return null

  return (
    <ul className="contact-list">
      {links.map((link) => (
        <li key={link.id} className="contact-list-item">
          <a
            className={`contact-link contact-link--${link.id}`}
            href={link.href}
            {...(link.sameTab
              ? {}
              : { target: '_blank', rel: 'noreferrer' })}
          >
            <span className="contact-logo-slot" aria-hidden="true">
              {link.logo && (
                <img
                  className="contact-logo"
                  src={link.logo}
                  alt=""
                />
              )}
            </span>
            <span className="contact-label">{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
