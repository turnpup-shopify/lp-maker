import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Relative base so the built site works when served from a GitHub Pages
// project subpath (e.g. /lp-maker/) as well as at a domain root.
export default defineConfig({
  base: './',
  plugins: [react()],
})
