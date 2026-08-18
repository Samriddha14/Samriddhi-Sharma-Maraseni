import type { TimelineItem } from '../data/types'
import { cn } from '../lib/utils'

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

/** Clean left-ruled timeline used across experience, education, certifications, etc. */
export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn('relative mb-8 border-s border-grid', className)}>
      {items.map((it, i) => (
        <li key={`${it.title}-${i}`} className="relative mb-9 last:mb-0 ps-5">
          <span
            className="absolute -start-1 top-0.5 z-10 -translate-x-1/2 rounded-full border border-accent bg-surface"
            style={{ width: '0.625rem', height: '0.625rem' }}
            aria-hidden="true"
          />
          <div>
            <header className="mb-0.5">
              <h3 className="font-medium text-text leading-snug">{it.title}</h3>
              <time className="text-xs font-medium uppercase tracking-wider text-accent">{it.period}</time>
            </header>
            {(it.organization || it.location) && (
              <p className="text-sm text-text-muted">
                {[it.organization, it.location].filter(Boolean).join(', ')}
              </p>
            )}
            {it.meta && <p className="text-xs text-text-muted">{it.meta}</p>}
            {it.link && it.linkLabel && (
              <a
                href={it.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-xs text-accent"
              >
                {it.linkLabel}
              </a>
            )}
            {it.description && (
              <p className="mt-1 text-sm leading-relaxed">{it.description}</p>
            )}
            {it.bullets && (
              <ul className="mt-2 space-y-1 text-sm marker:text-accent list-disc ps-5">
                {it.bullets.map((b, j) => (
                  <li key={j} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
