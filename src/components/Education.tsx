import { education } from '../data/education'
import type { TimelineItem } from '../data/types'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { Timeline } from './Timeline'

export function Education() {
  const items: TimelineItem[] = education.map((e) => ({
    title: e.degree,
    organization: e.institution,
    location: e.location,
    period: e.period,
    meta: [e.fieldOfStudy, e.finalGrade, ...(e.honors ?? [])].filter(Boolean).join(' · '),
    link: e.website,
    linkLabel: 'Visit website',
    description: '',
  }))

  return (
    <Section id="education">
      <SectionHeading label="Education" sub="Formal training" />
      <Timeline items={items} />
    </Section>
  )
}
