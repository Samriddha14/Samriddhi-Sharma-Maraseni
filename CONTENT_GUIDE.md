# CONTENT GUIDE — Samriddhi Sharma Maraseni · Civil Engineer

This portfolio is a **static site built with React + Vite + Tailwind CSS**.
All of the text, dates, links, and other personal information live in plain
TypeScript data files inside `src/data/`. The page components read from these
files, so you almost never need to touch React code to update the site.

> No React knowledge is required to follow the steps below. Each file uses a
> simple list/object structure — edit the values between the quotes and save.

---

## 1. Where everything lives

```
src/
├── data/            ← all editable text / content (edit HERE)
│   ├── profile.ts   ← name, title, summary, contact, photo, CV
│   ├── about.ts     ← languages and interests
│   ├── experience.ts← fellowships, memberships, leadership roles
│   ├── conferences.ts← conferences, seminars, volunteering
│   ├── projects.ts  ← projects
│   ├── education.ts ← education
│   ├── skills.ts    ← skills (grouped)
│   ├── certifications.ts← courses & training
│   ├── honors.ts    ← awards & recognition
│   └── site.ts      ← page title, SEO description, navigation labels
components/         ← the UI (normally leave untouched)
public/
├── cv/             ← the downloadable CV (PDF)
└── images/
    ├── profile/   ← photo, favicon, og-image
    └── projects/  ← project pictures / drawings
```

---

## 2. Editing each piece

### Name • Title • About • Contact
File: **`src/data/profile.ts`**

```ts
export const profile = {
  name: 'Samriddhi Sharma Maraseni',
  title: 'Civil Engineer',
  intro: 'Civil Engineer (GPA 3.86) focused on sustainable development …',
  location: 'Bharatpur 10, Chitwan, Nepal',
  summary: `…`,                       // longer bio shown in the About section
  contact: {
    email: 'sharmamarasenisamriddhi@gmail.com',
    phone: '+977 9742555955',
    linkedin: 'https://www.linkedin.com/in/samriddhi-maraseni',
    whatsapp: 'https://wa.me/97797425559555',
  },
  photo: 'images/profile/photo.svg',
  cvFile: 'cv/Samriddhi_Sharma_Maraseni_CV.pdf',
  // optional background fields (kept for records, not all shown on the page):
  nationality: 'Nepalese',
  placeOfBirth: 'Bharatpur, Nepal',
  passport: '11513192',
}
```

- Change anything between the quotes and save. The page reloads automatically in
  development (`npm run dev`).
- `intro` = the one-line subtitle under the name on the hero.
- `summary` = the longer biographical paragraph in **About**.
- `nationality` / `placeOfBirth` / `passport` are stored for completeness but are
  **not** displayed publicly on the site.

### Languages & Interests
File: **`src/data/about.ts`**

```ts
export const languages = {
  native: ['Nepali'],
  foreign: [
    { name: 'English', listening: 'C1', reading: 'C1', writing: 'B2',
      spokenProduction: 'B2', spokenInteraction: 'B2' },
  ],
}

export const interests = ['Leadership and global networking', …]
```

### Professional Experience (affiliations, fellowships, leadership)
File: **`src/data/experience.ts`**

Two lists: `affiliations` (ongoing memberships/fellowships) and `leadership`
(roles). Each entry:

```ts
{
  title: 'Campus Director',
  organization: 'Hult Prize Foundation',
  location: 'International',
  period: '2021 – 2024',
  description: 'Led the campus-level Hult Prize programme …',
  bullets: [             // optional — keep short, one line each
    'Mentored 15 student teams per cohort …',
    'Coordinated with …',
  ],
}
```

### Conferences, Seminars & Volunteering
File: **`src/data/conferences.ts`**

- `conferences` = conferences, training, and engagement events.
- `volunteering` = community-service and volunteer leadership.

Same shape as above. To move an item between the two lists, cut/paste the whole
entry (including the trailing comma) from one list into the other.

### Projects
File: **`src/data/projects.ts`**

Each project:

```ts
{
  title: 'Waste to Walkways: Circular-Economy-Based Paver Block …',
  categories: ['Sustainable Materials', 'Circular Economy'],   // tags shown on the card
  role: 'Researcher & Lead, Mix Design',
  year: '2024',                 // omit if unknown — don't invent a date
  description: '…',
  responsibilities: ['…', '…'], // shown as a bulleted list on the card
  software: ['Concrete mix design', 'Compressive-strength testing'],
  publication: 'The OCEM Journal …', // omit unless actually published
  image: 'images/projects/paver-block.svg',
  imageAlt: 'Paver blocks arranged in a herringbone pattern',
}
```

- `image` is the filename of a picture placed in `public/images/projects/`
  (see §4). Remove the `image` line entirely to use a text placeholder.

### Education
File: **`src/data/education.ts`**

```ts
{
  degree: 'Bachelor of Civil Engineering',
  institution: 'Oxford College of Engineering and Management',
  location: 'Gaindakot, Nepal',
  period: '2021 – 2025',
  website: 'https://www.oxfordcollege.edu.np',
  fieldOfStudy: 'Engineering, manufacturing and construction',
  finalGrade: '3.86 / 4.00 (GPA)',
  honors: ["Dean's List Award 2026"],   // optional
}
```

### Skills
File: **`src/data/skills.ts`**

Skills are grouped. Add/remove items inside a group, or add a new group:

```ts
export const skills = {
  engineeringSoftware: ['AutoCAD (2D & 3D)', 'ETABS', …],
  surveying: ['GPS', 'Level', 'Theodolite', 'Total Station'],
  …
}

export const skillCategories = [
  { label: 'Engineering Software', key: 'engineeringSoftware' },
  { label: 'Surveying Equipment', key: 'surveying' },
  { label: 'Materials Testing',  key: 'materialsTesting' },
  { label: 'Programming',         key: 'programming' },
  { label: 'Technical & Analysis Tools', key: 'technical' },
  { label: 'Engineering Domains', key: 'engineeringDomains' },
]
```

To add a new category, add a list inside `skills` and a matching entry in
`skillCategories` (the `key` must equal the list name). Skills are displayed as
a simple list — **no fake proficiency percentages** are used.

### Certifications & Training
File: **`src/data/certifications.ts`**

```ts
{ title: 'Diploma in Structural Engineering and Construction Site Safety',
  provider: 'Alison', period: '2026', description: '…' }
```

### Honors & Awards
File: **`src/data/honors.ts`**

```ts
{ title: "Dean's List Award", organizer: 'Pokhara University',
  period: '2026', description: '…', bullets: ['…'] }
```
Listed newest-first.

### Navigation & SEO (title, description, links)
File: **`src/data/site.ts`**

```ts
export const site = {
  title: 'Samriddhi Sharma Maraseni — Civil Engineer',
  description: 'Civil Engineer (B.Sc., GPA 3.86) …',
  author: 'Samriddhi Sharma Maraseni',
  ogImage: 'images/profile/og-image.svg',
  nav: [
    { label: 'Home',          href: '#home' },
    { label: 'About',         href: '#about' },
    { label: 'Experience',    href: '#experience' },
    // …add or reorder links here. href values are the section ids.
  ],
}
```

---

## 3. Adding a new project (step by step)

1. Prepare an image and save it as `public/images/projects/your-project.svg`
   (or `.jpg`/`.png`).
2. Open **`src/data/projects.ts`**.
3. Copy one existing project block (including the trailing comma).
4. Paste it after the last entry and fill in the fields.
5. Set `image: 'images/projects/your-project.svg'` and a descriptive
   `imageAlt`.
6. Save. The new card appears automatically.

Example block to copy:

```ts
{
  title: 'My New Project',
  categories: ['Structural Engineering'],
  role: 'Structural Analyst',
  year: '2025',
  description: 'One clear sentence about the project.',
  responsibilities: ['Measured x', 'Designed y'],
  software: ['ETABS', 'AutoCAD'],
  image: 'images/projects/your-project.svg',
  imageAlt: 'Description of the image for screen readers',
},
```

---

## 4. Adding a new experience (or conference / volunteering) entry

Use **`src/data/experience.ts`** for fellowships & leadership, and
**`src/data/conferences.ts`** for conferences / volunteering.

1. Open the file.
2. Copy any existing entry.
3. Paste it into the list (keeping the trailing comma).
4. Fill in `title`, `organization`, `location`, `period`, `description`,
   optional `bullets`.
5. Save.

```ts
{
  title: 'New Role',
  organization: 'Organisation Name',
  location: 'City, Country',
  period: '2024 – 2025',
  description: 'One-sentence summary of the role.',
  bullets: ['Achievement one.', 'Achievement two.'],
},
```

> Do **not** invent dates, grades, organisations, or achievements. If a date or
> organisation is unknown, leave the field out or write "Ongoing" only when it
> genuinely is.

---

## 5. Replacing images

### Profile photo
- Save your photo as `public/images/profile/photo.jpg` (or `.png`).
- In **`src/data/profile.ts`** set `photo: 'images/profile/photo.jpg'`
  (match the filename and extension exactly).
- Keep `photoAlt` as a short description, e.g. `'Samriddhi Sharma Maraseni'`.

### Project images
- Save each picture in `public/images/projects/`.
- In **`src/data/projects.ts`** set that project's `image` to
  `'images/projects/your-file.jpg'` and update `imageAlt`.

### Open-Graph image (the preview shown when you share the link)
- Edit/replace `public/images/profile/og-image.svg`.
- A PNG works best for social platforms; if you add a new file, update
  `ogImage` in **`src/data/site.ts`** (keep the `images/profile/…` path).

### Favicon
- Replace `public/favicon.svg` with your own SVG (or `.png`).

---

## 6. Replacing the CV

1. Delete `public/cv/Samriddhi_Sharma_Maraseni_CV.pdf`.
2. Save your updated PDF at `public/cv/Samriddhi_Sharma_Maraseni_CV.pdf`
   (same path/filename).
3. The **Download CV** buttons update automatically.

---

## 7. Local preview

```bash
npm install      # one time only
npm run dev      # starts a local server, usually at http://localhost:5173
```

The page reloads automatically as you edit files in `src/data/`.

---

## 8. Deploying to GitHub Pages

- Push to the default branch (`main`); the
  `.github/workflows/deploy.yml` workflow builds and publishes automatically.
- The workflow detects whether the repository is a **user site**
  (`https://<owner>.github.io`) or a **project site**
  (`https://<owner>.github.io/<repo>/`) and sets the Vite `base` path
  accordingly — no manual change is usually required.
- If you deploy to a project site manually, set the base path in `vite.config.ts`:

```ts
const base = process.env.VITE_BASE_HREF || '/'
```

or pass it at build time:

```bash
VITE_BASE_HREF=/your-repo-name/ npm run build
```
