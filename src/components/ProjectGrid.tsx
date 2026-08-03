import type { Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import './ProjectGrid.css'

type ProjectGridProps = {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) return null

  return (
    <div className="project-grid" role="list" aria-label="Projects">
      {projects.map((project, index) => (
        <div
          key={project.id ?? `project-${index}`}
          className="project-grid-item"
          role="listitem"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}
