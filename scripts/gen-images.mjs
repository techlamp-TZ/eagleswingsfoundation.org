// Generates responsive/optimised image variants for the homepage hero and
// banner photos, converts remaining JPGs to WebP, and builds the favicons.
//
// The homepage components reference the `-<width>w.webp` variants, so run this
// whenever the source photos change:
//
//   node scripts/gen-images.mjs        (or: bun run gen:images)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// [source (relative to project root), widths to generate]
const jobs = [
  // Homepage hero slides (mobile variant; desktop keeps the original)
  ['public/photos/team/team-waving.webp', [900]],
  ['public/photos/hero.webp', [900]],
  ['public/photos/foundation/pool-group.webp', [900]],
  ['public/photos/child.webp', [900]],
  ['public/photos/hero-wheelchair.webp', [900]],
  ['public/photos/foundation/beach-outing.webp', [900]],
  ['public/photos/gallery-extra-1.webp', [900]],
  // About section portrait and footer/stay-connected banners
  ['public/photos/team/founder-banner.webp', [800]],
  ['public/photos/team/team-outdoor.webp', [800, 1400]],
  ['public/photos/team/team-together.webp', [320]],
]

for (const [src, widths] of jobs) {
  const full = path.join(root, src)
  const dir = path.dirname(full)
  const base = path.basename(full, path.extname(full))
  for (const w of widths) {
    const out = path.join(dir, `${base}-${w}w.webp`)
    await sharp(full)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 68 })
      .toFile(out)
    console.log(`gen-images: ${src} -> ${path.relative(root, out)} (${Math.round(fs.statSync(out).size / 1024)} KB)`)
  }
}

// joy-portrait.jpg -> WebP (About page CTA)
const jp = path.join(root, 'public', 'photos', 'joy-portrait.jpg')
const jpOut = path.join(root, 'public', 'photos', 'joy-portrait.webp')
await sharp(jp).webp({ quality: 72 }).toFile(jpOut)
console.log(`gen-images: photos/joy-portrait.jpg -> photos/joy-portrait.webp (${Math.round(fs.statSync(jpOut).size / 1024)} KB)`)

// Favicons from the square logo mark (the full lockup is illegible at 48px)
const mark = path.join(root, 'public', 'eagles-wings-foundation-logo-header.webp')
await sharp(mark).resize({ width: 48, height: 48, fit: 'cover' }).png().toFile(path.join(root, 'public', 'favicon-48.png'))
await sharp(mark).resize({ width: 180, height: 180, fit: 'cover' }).png().toFile(path.join(root, 'public', 'apple-touch-icon.png'))
console.log('gen-images: favicon-48.png + apple-touch-icon.png written (from square logo mark)')
