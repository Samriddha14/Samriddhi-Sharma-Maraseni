import { skills, skillCategories } from '../data/skills'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading label="Technical Skills" sub="Tools and expertise" />
      <p className="mb-8 max-w-3xl text-sm text-text-muted">
        Skills are grouped to reflect the engineering tools, domains, and
        technical capabilities applied throughout the projects and experience
        described above. Proficiency is demonstrated by use, not ratings.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <div key={cat.label}>
            <h3 className="font-medium text-text">{cat.label}</h3>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {skills[cat.key].map((s) => (
                <li
                  key={s}
                  className="rounded border border-border px-3 py-1 text-sm text-text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
