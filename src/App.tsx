import { useLayoutEffect, useRef } from 'react'
import profilePhoto from '../assets/profile-photo.png'
import { ProjectGrid } from './components/ProjectGrid'
import { Timeline } from './components/Timeline'
import { experiences } from './data/experiences'
import { projects } from './data/projects'

// sections of the page
const sections = [
  { id: 'work-experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'cats', label: 'Cats' },
  { id: 'keyboards', label: 'Keyboards' },
  { id: 'contact', label: 'Contact' },
] as const // as const to make the array immutable

function App() {
  const pageRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    const page = pageRef.current
    const name = nameRef.current
    if (!page || !name) return

    const fitNameToWidth = () => {
      if (window.matchMedia('(max-width: 40rem)').matches) {
        name.style.fontSize = ''
        return
      }

      const targetWidth = page.clientWidth
      let low = 12
      let high = 200
      let best = low

      while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        name.style.fontSize = `${mid}px`

        if (name.scrollWidth <= targetWidth) {
          best = mid
          low = mid + 1
        } else {
          high = mid - 1
        }
      }

      name.style.fontSize = `${best}px`
    }

    fitNameToWidth()

    const observer = new ResizeObserver(fitNameToWidth)
    observer.observe(page)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <header className="site-header">
        <h1 className="name" ref={nameRef}>
          Martin Apollo Sim
        </h1>
        <nav className="nav" aria-label="Page sections">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <img
        className="profile-photo"
        src={profilePhoto}
        alt="Martin Apollo Sim"
      />

      <section className="about" aria-label="About me">
        <p>
          Hi, thanks for stopping by! I'm Martin, an undergraduate student at UC
          Berkeley studying Electrical Engineering and Computer Science. I'm
          focused on full-stack software development and I'm interested in
          working with data, signal processing, and machine learning. Currently,
          I'm building a backend state-machine for a startup called Optima. I'm
          looking for internship opportunities where I can work on impactful
          software projects.
        </p>
      </section>

      <main>
        {sections.map(({ id, label }) => (
          <section key={id} id={id} className="content-section">
            <h2>{label}</h2>
            {id === 'work-experience' && (
              <Timeline experiences={experiences} />
            )}
            {id === 'projects' && <ProjectGrid projects={projects} />}
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
