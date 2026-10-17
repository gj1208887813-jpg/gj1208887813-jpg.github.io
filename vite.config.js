import { copyFileSync, existsSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Hosted from the user site repo <user>.github.io, so the site is served from
// the domain root and asset URLs need no repository prefix.
const BASE = '/'

// GitHub Pages serves 404.html for unknown paths and runs Jekyll unless a
// .nojekyll marker exists. Together they let BrowserRouter deep links resolve.
const githubPages = () => {
  let outDir = 'docs'
  return {
    name: 'github-pages',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      if (!existsSync(outDir)) return
      const index = resolve(outDir, 'index.html')
      if (existsSync(index)) copyFileSync(index, resolve(outDir, '404.html'))
      writeFileSync(resolve(outDir, '.nojekyll'), '')
    }
  }
}

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss(), githubPages()],
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})