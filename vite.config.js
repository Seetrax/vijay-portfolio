import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages at https://<user>.github.io/vijay-portfolio/ keep base as the repo name.
// If you deploy to <user>.github.io or a custom domain, change base to '/'.
export default defineConfig({ plugins: [react()], base: '/vijay-portfolio/' })
