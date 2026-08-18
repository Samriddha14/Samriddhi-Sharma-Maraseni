import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: for a user/organisation site (username.github.io) use base "/".
// For a project site (username.github.io/<repo>) set base: "/<repo-name>/"
// and set VITE_BASE_HREF in the environment or here.
const base = process.env.VITE_BASE_HREF || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
