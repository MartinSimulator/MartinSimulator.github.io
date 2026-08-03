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
      "I was accepted into UC Berkeley as an undergraduate EECS major starting in Fall 2025. Go Bears!",
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
    description: 'I joined the ASUC OCTO (Office of the CTO) Web Dev Team as a Software Engineer.',
    links: [{ label: 'ASUC OCTO', href: 'https://octo.asuc.org/' }],
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
    description: 'I joined the ENIGMA Science Focus Area at LBNL to develop a data visualization tool for biology researchers.',
    links: [{ label: 'ENIGMA', href: 'https://www.genomicscience.energy.gov/lbnl/' }],
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
      'I interned at Optima, a SkyDeck backed startup. I built backend services for an insurance claims processing system.',
    links: [{ label: 'Optima Website', href: 'https://optimacorp.org/' }],
  },
]
