import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { ProjectGrid } from './components/ProjectGrid'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Certifications } from './components/Certifications'
import { Honors } from './components/Honors'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[60] -translate-y-8 bg-accent px-4 py-2 text-xs font-medium text-white opacity-0 focus:translate-y-0 focus:opacity-100"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <ProjectGrid />
        <Education />
        <Skills />
        <Certifications />
        <Honors />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
