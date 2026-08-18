// Vite only rewrites JS/CSS asset URLs with `base`; public-file URLs written as
// strings in data (CV, images) need to be prefixed manually so project-site
// GitHub Pages deployments (base "/<repo>/") resolve correctly.
export const base = import.meta.env.BASE_URL

export function publicAsset(path: string): string {
  const normalized = path.replace(/^\/+/, '')
  // BASE_URL always starts and ends with "/" (e.g. "/" or "/repo/")
  return `${base}${normalized}`
}
