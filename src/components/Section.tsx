import { type ReactNode } from 'react'
import { cn } from '../lib/utils'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  /** When false, children are rendered without the scroll-reveal wrapper. */
  revealed?: boolean
}

export function Section({ id, children, className, revealed = true }: SectionProps) {
  return (
    <section id={id} className={cn('container-x py-14 md:py-20', className)}>
      {revealed ? <Reveal>{children}</Reveal> : children}
    </section>
  )
}
