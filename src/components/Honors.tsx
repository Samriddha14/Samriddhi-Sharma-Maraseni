import { honors } from '../data/honors'
import type { TimelineItem } from '../data/types'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { Timeline } from './Timeline'

export function Honors() {
  const items: TimelineItem[] = honors.map((h) => ({
    title: h.title,
    organization: h.organizer,
    period: h.period,
    description: h.description,
    bullets: h.bullets,
  }))

  return (
    <Section id="honors">
      <SectionHeading label="Honors &amp; Awards" sub="Recognition" />
      <Timeline items={items} />
    </Section>
  )
}
