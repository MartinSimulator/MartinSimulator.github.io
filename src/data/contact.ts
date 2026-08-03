import githubLogo from '../../assets/github-logo.webp'
import linkedinLogo from '../../assets/linkedin-logo.webp'
import mailLogo from '../../assets/mail-logo.webp'
import resumeLogo from '../../assets/resume-logo.webp'
import resumePdf from '../../assets/MartinSim.pdf'

export type ContactLink = {
  id: string
  label: string
  href: string
  logo?: string
  /** Opens in the same tab when true (useful for mailto/resume) */
  sameTab?: boolean
}

export const contactLinks: ContactLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/martinsim/',
    logo: linkedinLogo,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/MartinSimulator',
    logo: githubLogo,
  },
  {
    id: 'resume',
    label: 'Resume',
    href: resumePdf,
    logo: resumeLogo,
  },
  {
    id: 'email',
    label: 'martinsim@berkeley.edu',
    href: 'mailto:martinsim@berkeley.edu',
    logo: mailLogo,
    sameTab: true,
  },
]
