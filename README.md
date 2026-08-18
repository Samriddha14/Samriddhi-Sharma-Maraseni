# Samriddhi Sharma Maraseni — Civil Engineer (portfolio)

A professional, static portfolio website for a Civil Engineer, built with
**React · TypeScript · Vite · Tailwind CSS** and deployed to GitHub Pages.

The design follows a restrained engineering editorial aesthetic: warm
off-white background, charcoal typography, a deep navy accent, and subtle
technical-drawing details (ruled timelines, a fine grid, dimension-line
section markers). No gradients, glassmorphism, neon, or excessive motion.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build        # typecheck + production build -> dist/
npm run preview      # preview the production build locally
npm run typecheck    # TypeScript type-check
npm run lint         # oxlint
```

## Content

All editable content lives in [`src/data/`](src/data/). No React knowledge is
required to update text — see **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** for a
plain-language walkthrough (name, experience, projects, education, skills,
certifications, honors, contact, CV, and images).

## Deploy to GitHub Pages

Push to the default branch (`main`/`master`). The
`.github/workflows/deploy.yml` workflow builds and publishes automatically and
auto-detects user-site vs. project-site base paths.

---

*Not a React component library showcase — the markup is intentionally custom and
minimal, kept dependency-free beyond React, Tailwind, and Lucide icons.*
