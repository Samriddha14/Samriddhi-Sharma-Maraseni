import { Section } from './Section'
import { SectionHeading, Subheading } from './SectionHeading'
import { Timeline } from './Timeline'
import { professional, affiliations, leadership } from '../data/experience'
import { conferences, volunteering } from '../data/conferences'

export function Experience() {
  return (
    <Section id="experience" revealed={false}>
      <SectionHeading label="Experience &amp; Leadership" />

      <Subheading label="Professional Work Experience" />
      <Timeline items={professional} />

      <Subheading label="Professional Affiliations &amp; Fellowships" />
      <Timeline items={affiliations} />

      <Subheading label="Leadership Roles" />
      <Timeline items={leadership} />

      <Subheading label="Conferences &amp; Seminars" />
      <Timeline items={conferences} />

      <Subheading label="Community Volunteering" />
      <Timeline items={volunteering} />
    </Section>
  )
}
