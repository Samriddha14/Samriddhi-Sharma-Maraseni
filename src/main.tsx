import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { site } from './data/site'
import { publicAsset } from './lib/assets'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Generate SEO/OpenGraph metadata from centralized site data
const setMeta = (name: string, content: string, isProperty = false) => {
  const attr = isProperty ? 'property' : 'name'
  const existing = document.querySelector(`meta[${attr}="${name}"]`)
  if (existing) {
    existing.setAttribute('content', content)
  } else {
    const m = document.createElement('meta')
    m.setAttribute(attr, name)
    m.setAttribute('content', content)
    document.head.appendChild(m)
  }
}

document.title = site.title
setMeta('description', site.description)
setMeta('author', site.author)
setMeta('og:title', site.title, true)
setMeta('og:description', site.description, true)
setMeta('og:image', `${window.location.origin}${publicAsset(site.ogImage)}`, true)
setMeta('og:type', 'website', true)
setMeta('twitter:card', 'summary_large_image')

