# Eagle's Wings Foundation Tanzania

Frontend for Eagle's Wings Foundation Tanzania — React + React Router + Tailwind CSS, built with Vite.

## Local development

```bash
npm install
npm run dev
```

Open the printed `http://localhost:5173` URL.

## Build & deploy (Hostinger)

The site is hosted on Hostinger at the custom domain `eagleswingsfoundation.org`, not GitHub Pages. There is no deploy automation yet — build locally and upload the result:

```bash
npm run build
```

Upload the entire contents of the generated `dist/` folder to Hostinger's `public_html` (via File Manager or FTP). `dist/.htaccess` is required for client-side routing to work on refresh/direct links — make sure it's uploaded along with everything else.

`npm run preview` serves the production build locally if you want to sanity-check it before uploading.

## Design variants

Most pages went through several rounds of visual design exploration, and every version that was ever built is kept in the app as a real, working page rather than deleted — nothing from that process was thrown away.

- **Nav dropdowns**: hovering Donate in the header shows every version of that page — the only top-level page left with more than one design. Home, About, the Programs list, Get Involved, the Events list and the Blog list were one of these too, but the Foundation picked final designs (v9, v2, v0, v2, v1 and v2) for those, so they're now plain single-variant pages. Program/Event *detail* pages (the individual program/event pages under `/programs/:id` and `/events/:id`) are still multi-variant.
- **In-page switcher**: every multi-variant page (including ones without a nav entry, like Gallery, FAQ, Contact, Support Areas, and program/event detail pages) shows a "Viewing design N of M" bar with direct links to each version.
- **URLs**: a page's default version lives at its plain path (e.g. `/home`); every version is also directly linkable at `/home/v/1`, `/home/v/2`, etc.
- **Changing the default**: edit `src/config/variants.js` — each page family has a `default` variant number and an `order` list. That one file controls what the site's real, canonical pages look like; no other code changes needed.

## Project structure

- `src/pages/<family>/` — one folder per page family. Multi-variant families have `<Name>V1.jsx`, `<Name>V2.jsx`, etc., an `index.js` registry, and a canonical `<Name>.jsx` wrapper. Single-variant pages are just one component.
- `src/data/` — content: nav structure, program/event/volunteer/blog data, photo URLs.
- `src/components/ui/` — shared building blocks (Icon, Button, PageHero, SectionHead, EmptyState, the variant switcher).
- `src/components/layout/` — Header, Footer, WhatsApp button, and the page Layout shell.
- `src/config/variants.js` — which design variant is the default per page family.

## Current state

- Tailwind CSS v4 with the Foundation's navy/orange brand theme (`src/styles/index.css`).
- Donation, contact, and volunteer forms are frontend prototypes — no backend is connected yet, so submitting shows a placeholder message instead of sending anything.
- Photography is real Foundation media in `public/photos/`, mapped by key in `src/data/photos.js`.

## Main brand colors

- Navy: `#003360`
- Deep navy: `#001F3D`
- Orange: `#F6931E`

## Blog

Articles are Markdown files with YAML frontmatter in `src/content/blog/`. To publish one, add a `.md` file (copy an existing article for the frontmatter keys) and rebuild. Reading time, table of contents, related posts, JSON-LD and category/tag filters are derived automatically by `src/data/blog.js`.

`npm run build` also regenerates `public/rss.xml`, `public/sitemap.xml` and `public/robots.txt` (`npm run feeds` runs just that step). These are generated files and are git-ignored.
