import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'

export function ProjectGrid() {
  return (
    <Section id="projects">
      <SectionHeading label="Projects"  />
      <p className="mb-8 max-w-3xl text-sm text-text-muted">
        Academic and applied civil-engineering projects spanning materials
        sustainability, structural analysis, hydrology, and geotechnical
        investigation.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={`${p.title}-${i}`} project={p} />
        ))}
      </div>
    </Section>
  )
}
