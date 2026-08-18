import { certifications } from '../data/certifications'
import type { TimelineItem } from '../data/types'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { Timeline } from './Timeline'

export function Certifications() {
  const items: TimelineItem[] = certifications.map((c) => ({
    title: c.title,
    organization: c.provider,
    period: c.period,
    description: c.description,
  }))

  return (
    <Section id="certifications">
      <SectionHeading label="Certifications &amp; Training" sub="Continuing education" />
      <Timeline items={items} />
    </Section>
  )
}
