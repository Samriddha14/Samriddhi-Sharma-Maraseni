export interface Contact {
  email: string
  phone: string
  linkedin: string
  whatsapp: string
}

export interface Profile {
  name: string
  title: string
  intro: string
  position: string
  location: string
  summary: string
  contact: Contact
  photo: string
  photoAlt: string
  cvFile: string
  nationality?: string
  placeOfBirth?: string
  passport?: string
}

export interface TimelineItem {
  title: string
  organization?: string
  location?: string
  period: string
  role?: string
  description?: string
  bullets?: string[]
  meta?: string
  link?: string
  linkLabel?: string
}

export interface ProjectItem {
  title: string
  role?: string
  year?: string
  categories?: string[]
  description: string
  responsibilities?: string[]
  software?: string[]
  publication?: string
  image?: string
  imageAlt?: string
  link?: string
  external?: boolean
}

export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  website?: string
  fieldOfStudy?: string
  finalGrade?: string
  honors?: string[]
}

export interface CertificationItem {
  title: string
  provider?: string
  period: string
  description?: string
}

export interface AwardItem {
  title: string
  organizer?: string
  period: string
  description: string
  bullets?: string[]
}

export interface NavItem {
  label: string
  href: string
}

export interface SiteMeta {
  title: string
  description: string
  author: string
  ogImage: string
  nav: NavItem[]
}
