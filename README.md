# Eagle's Wings Foundation Tanzania — Website

Next.js 16 rebuild of the Eagle's Wings Foundation Tanzania website
(eagleswingsfoundation.org), replacing the earlier Vite SPA build.

## Stack

- **Next.js 16** (App Router, static export `output: "export"`) + React 19 + TypeScript 5
- Tailwind CSS v4 with the Foundation's navy/orange brand tokens (`src/app/globals.css`)
- A "legacy" client-side React app (`src/legacy/`, react-router) hosts every page
  except the homepage and `/about`, rendered under the catch-all route
  `src/app/[...slug]`
- Blog: 61 Markdown articles in `src/legacy/content/blog/*.md`, bundled at build
  time by `scripts/gen-blog.mjs`
- Forms post to `public/contact.php` (deploy target supports PHP)

## Development

```bash
bun install          # or npm install

# on Windows, the bun shim can fail to launch Next; use node directly:
node scripts/gen-blog.mjs        # runs automatically via predev/prebuild
node scripts/gen-images.mjs      # or: bun run gen:images
node node_modules/next/dist/bin/next dev -p 3000
```

Open http://localhost:3000

## Build & deploy

```bash
node scripts/gen-blog.mjs
node node_modules/next/dist/bin/next build     # static export into ./out
```

Upload the contents of `out/` to the host's web root (the production site also
needs `public/contact.php` and a `contact-config.php` — see the file header in
`public/contact.php`). `next.config.ts` keeps type checking on
(`ignoreBuildErrors` was removed); run `npx tsc --noEmit` before deploying.

### Deploying to Hostinger over SSH

The production site lives at `domains/eagleswingsfoundation.org/public_html`
on the Hostinger SSH host (`u378355462@145.14.152.26`, port 65002).

```bash
python scripts/deploy-inspect.py "<ssh-password>"   # optional: see account layout
python scripts/deploy.py "<ssh-password>"           # deploy ./out to the web root
```

`scripts/deploy.py` (paramiko) does a full deploy: removes stale leftovers
(`_meta`, old Vite `assets`, stale feeds, `donate-page.html`, `_next`), uploads
a tarball of `out/`, extracts it, and installs the site's `.htaccess`
(extensionless-URL rewrite, immutably-cached `_next/static` assets, no-cache
HTML/RSC payloads, `ErrorDocument 404 /404.html`).

After a deploy, the Hostinger CDN edge can hold stale redirects for up to an
hour; purge them in hPanel → Performance → CDN → Purge cache if needed.

## Image pipeline

`scripts/gen-images.mjs` (sharp) generates the responsive `-<width>w.webp`
variants the homepage hero/banners reference via `srcSet`, converts remaining
JPGs to WebP, and builds `favicon-48.png` / `apple-touch-icon.png` from the
full-colour logo. Re-run it whenever a source photo changes.

## Key directories

- `src/app/` — root layout (SEO/JSON-LD/favicons), homepage, `/about`, catch-all
  `[...slug]` that mounts the legacy app with per-URL server-side metadata
- `src/components/ew/` — homepage/header/footer components; `data.ts` is the
  content model (hero slides, programs, stats, news cards derived from the blog)
- `src/legacy/` — inner-page SPA: `routes.jsx`, `data/` content engine,
  `pages/` per-page families with a design-variant system
  (`config/variants.js` picks the live variant)
- `scripts/` — `gen-blog.mjs` (blog bundle + homepage news module),
  `gen-images.mjs` (responsive images/favicons)
- `prisma/` — SQLite schema; currently unused by the site
