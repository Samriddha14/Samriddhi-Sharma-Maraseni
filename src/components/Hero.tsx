import { profile } from '../data/profile'
import { publicAsset } from '../lib/assets'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section
      id="home"
      className="bg-blueprint pt-20 md:pt-24 pb-16 md:pb-20"
      aria-label="Introduction"
    >
      <div className="container-x grid gap-10 items-center md:grid-cols-2 py-4">
        <Reveal delayMs={60}>
          <div>
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-accent">
              {profile.title}
            </span>
            <h1 className="font-heading mt-3 text-4xl/tight tracking-tight text-text sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-text-muted">
              {profile.intro}
            </p>
            <p className="mt-2 max-w-xl text-sm text-text-muted">
              {profile.position}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-ghost">
                View Projects
              </a>
              <a href="#contact" className="btn btn-text">
                Contact Me
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <div className="justify-self-start md:justify-self-end">
            <img
              src={publicAsset(profile.photo)}
              alt={profile.photoAlt}
              className="h-auto w-56 rounded border border-border md:w-64"
              loading="eager"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
