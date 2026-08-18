import { profile } from '../data/profile'
import {  interests } from '../data/about'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <Section id="about">
      <SectionHeading label="About" />
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="  text-justify leading-7  whitespace-pre-line">
            {profile.summary}
          </p>
        </div>
        <div className="grid gap-8">
         
          <div>
            <h3 className="font-medium text-text">Interests</h3>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm">
              {interests.map((it) => (
                <li
                  key={it}
                  className="rounded border border-border px-3 py-1 text-text-muted"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
         
        </div>
      </div>
    </Section>
  )
}
