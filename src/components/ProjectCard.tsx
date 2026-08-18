import type { ProjectItem } from '../data/types'
import { publicAsset } from '../lib/assets'

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="card group h-full flex flex-col">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-grid">
        {project.image ? (
          <img
            src={publicAsset(project.image)}
            alt={project.imageAlt || project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-center text-xs text-text-muted"
            aria-label="Project image placeholder"
          >
            Image placeholder
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-2 flex flex-wrap items-baseline gap-1.5">
          {project.categories?.map((c) => (
            <span
              key={c}
              className="inline-block rounded border border-border px-2 py-0.5 text-xs uppercase tracking-wider text-text-muted"
            >
              {c}
            </span>
          ))}
          {project.year && (
            <time className="ms-auto text-xs font-medium text-accent">{project.year}</time>
          )}
        </div>

        <h3 className="font-heading text-lg text-text">{project.title}</h3>
        {project.role && <p className="mt-1 text-sm text-accent">{project.role}</p>}

        <p className="mt-2 text-sm text-text-muted flex-1">{project.description}</p>

        {project.responsibilities && (
          <ul className="mt-3 space-y-1 text-xs text-text-muted marker:text-accent list-disc ps-4">
            {project.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        )}

        {project.publication && (
          <p className="mt-2 text-xs italic text-text-muted">
            Published: {project.publication}
          </p>
        )}

        {project.software && project.software.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5 text-xs text-text-muted">
            {project.software.map((s) => (
              <li key={s} className="rounded bg-grid px-2 py-0.5">
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
