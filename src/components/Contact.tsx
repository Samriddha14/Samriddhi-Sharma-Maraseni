import { type ComponentType } from 'react'
import { Mail, MapPin, MessageCircle, Phone, ExternalLink, Download } from 'lucide-react'
import { profile } from '../data/profile'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'
import { publicAsset } from '../lib/assets'

interface ContactRow {
  label: string
  value: string
  href?: string
  icon: ComponentType<{ size?: number }>
}

const contacts: ContactRow[] = [
  {
    label: 'Email',
    value: profile.contact.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.contact.email)}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.contact.phone,
    href: `tel:${profile.contact.phone.replace(/\s+/g, '')}`,
    icon: Phone,
  },
  {
    label: 'Location',
    value: profile.location,
    icon: MapPin,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/samriddhi-maraseni',
    href: profile.contact.linkedin,
    icon: ExternalLink,
  },
  {
    label: 'WhatsApp',
    value: 'WhatsApp',
    href: profile.contact.whatsapp,
    icon: MessageCircle,
  },
]

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading label="Contact" />
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="max-w-md text-sm text-text-muted">
            Open to roles in sustainable infrastructure, structural and
            geotechnical projects, and climate-resilient design.
          </p>
          <ul className="mt-6 space-y-4" role="list">
            {contacts.map((c) => {
              const Icon = c.icon
              const content = (
                <span className="flex items-center gap-3 text-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border text-text-muted">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-text-muted">
                      {c.label}
                    </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-text no-underline hover:text-accent"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-text">{c.value}</span>
                    )}
                  </span>
                </span>
              )
              return (
                <li key={c.label}>
                  {content}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col justify-start gap-5">
          <div>
            <h3 className="font-heading text-lg text-text">Let's connect</h3>
            <p className="mt-1 text-sm text-text-muted">
              Send an email or download the full CV.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.contact.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Send an email
            </a>
            <a href={publicAsset(profile.cvFile)} download className="btn btn-ghost">
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
