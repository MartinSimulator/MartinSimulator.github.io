import asucLogo from '../../assets/ASUC-Logo.png'
import berkeleyLabLogo from '../../assets/Berkeley-Lab-Logo.png'
import optimaLogo from '../../assets/Optima-Logo.png'
import ucBerkeleySeal from '../../assets/UC-Berkeley-Seal.webp'

export type ExperienceLink = {
  label: string
  href: string
}

export type Experience = {
  id: string
  company: string
  role: string
  /** Month is 1-12 */
  month: number
  year: number
  side: 'above' | 'below'
  /** Optional image path; falls back to initials */
  logo?: string
  logoText: string
  description: string
  links?: ExperienceLink[]
}

export const experiences: Experience[] = [
  {
    id: 'berkeley',
    company: 'UC Berkeley',
    role: 'B.S. EECS',
    month: 8,
    year: 2025,
    side: 'above',
    logo: ucBerkeleySeal,
    logoText: 'Cal',
    description:
      'Undergraduate student in Electrical Engineering and Computer Science.',
    links: [{ label: 'EECS', href: 'https://eecs.berkeley.edu/' }],
  },
  {
    id: 'asuc',
    company: 'ASUC',
    role: 'Software Engineer',
    month: 3,
    year: 2026,
    side: 'above',
    logo: asucLogo,
    logoText: 'ASUC',
    description: 'Joined the ASUC OCTO Web Development Team as a Software Engineer.',
    links: [{ label: 'ASUC', href: 'https://octo.asuc.org/' }],
  },
  {
    id: 'berkeley-lab',
    company: 'Berkeley Lab',
    role: 'Undergraduate Research Software Developer',
    month: 1,
    year: 2026,
    side: 'below',
    logo: berkeleyLabLogo,
    logoText: 'LBNL',
    description: 'Joined the ENIGMA group at LBNL to develop a data visualization tool for biology researchers.',
    links: [{ label: 'Berkeley Lab', href: 'https://www.lbl.gov/' }],
  },
  {
    id: 'optima',
    company: 'Optima',
    role: 'Software Engineer Intern',
    month: 6,
    year: 2026,
    side: 'below',
    logo: optimaLogo,
    logoText: 'Optima',
    description:
      'Building backend services for Optima, a SkyDeck startup focused on healthcare.',
    links: [{ label: 'Company', href: '#' }],
  },
]
