import { cn } from '../lib/utils'

interface SectionHeadingProps {
  label: string
  sub?: string
  className?: string
}

/** Section title with a subtle technical-drawing rule (dimension-line motif). */
export function SectionHeading({ label, sub, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-9 flex items-baseline justify-between gap-4', className)}>
      <div className="flex items-baseline gap-3">
        <span className="block h-5 w-1 rounded-sm bg-accent" aria-hidden="true" />
        <h2 className="font-heading text-2xl/tight tracking-tight text-text sm:text-3xl">{label}</h2>
      </div>
      {sub && <span className="text-xs uppercase tracking-wider text-text-muted">{sub}</span>}
    </div>
  )
}

export function Subheading({ label, className }: { label: string; className?: string }) {
  return (
    <h3 className={cn('mt-10 mb-5 inline-flex items-center gap-2.5 rounded-md bg-accent/5 px-3 py-1.5 font-heading text-xl/tight font-semibold tracking-tight text-text first:mt-0', className)}>
      <span className="block h-5 w-0.5 rounded-sm bg-accent" aria-hidden="true" />
      {label}
    </h3>
  )
}
