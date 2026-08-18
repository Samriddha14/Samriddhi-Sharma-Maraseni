import { useLayoutEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'
import { site } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  // close the mobile menu on route/scroll change is handled by anchor clicks
  const stopBodyScroll = (on: boolean) => {
    if (on) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }
  useLayoutEffect(() => stopBodyScroll(open), [open])

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-border">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="font-heading text-lg font-medium text-text whitespace-nowrap"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-text-muted hover:text-text transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden p-1.5 text-text-dim"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-surface"
          onClick={() => setOpen(false)}
        >
          <nav>
            <ul className="flex flex-col py-1">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="block px-4 py-2.5 text-sm text-text-muted hover:text-text hover:bg-grid"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
