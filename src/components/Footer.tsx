import { profile } from '../data/profile'
import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-text-muted sm:flex-row">
          <p>
            © {year} {profile.name}.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {site.nav.slice(1, -1).map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-text-muted hover:text-accent"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
