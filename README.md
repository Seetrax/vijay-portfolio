# Vijay Ramakrishnan: Portfolio

Vite + React portfolio. All content lives in `src/data/`; edit those files to update the site.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Add your assets
Drop files into `public/assets/` using the names in `src/data/*.js` (profile photo, project thumbnails, logos, resume PDF, videos). Missing images are hidden automatically.

## Deploy
Push to `main`. In the repo settings, set Pages source to "GitHub Actions". Adjust `base` in `vite.config.js` to match your repo name.
