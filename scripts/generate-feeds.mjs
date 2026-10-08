// Generates public/rss.xml, public/sitemap.xml and public/robots.txt from the
// Markdown articles and route data. Runs automatically before every build
// (see "prebuild" in package.json), so new articles appear in the feed and
// sitemap without any extra step.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import YAML from 'yaml'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://eagleswingsfoundation.org'
const NAME = "Eagle's Wings Foundation Tanzania"
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const asDate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d))

const dir = path.join(root, 'src/content/blog')
const posts = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const m = fs.readFileSync(path.join(dir, f), 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)
    return m ? YAML.parse(m[1]) : null
  })
  .filter((d) => d && d.slug && d.title)
  .sort((a, b) => asDate(b.date).localeCompare(asDate(a.date)) || a.title.localeCompare(b.title))

const articleUrl = (p) => `${SITE}/blog/article-${p.slug}`

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(NAME)}: News and Stories</title>
    <link>${SITE}/blog</link>
    <description>Practical, plain-language guidance for families, caregivers and communities.</description>
    <language>en</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${posts
  .map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${articleUrl(p)}</link>
      <guid isPermaLink="true">${articleUrl(p)}</guid>
      <pubDate>${new Date(`${asDate(p.date)}T08:00:00Z`).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.excerpt || '')}</description>
    </item>`,
  )
  .join('\n')}
  </channel>
</rss>
`

async function ids(file, exportName) {
  const mod = await import(pathToFileURL(path.join(root, 'src/data', file)).href)
  return Object.keys(mod[exportName])
}

const staticPaths = [
  '/', '/about', '/programs', '/impact', '/get-involved', '/events', '/blog', '/contact', '/donate',
  '/gallery', '/catalogue', '/faq', '/volunteers', '/mission-vision-values', '/testimonials', '/reports', '/partners',
  '/careers', '/privacy', '/resources', '/causes', '/get-started',
]
const programs = (await ids('programDetails.js', 'programDetails')).map((i) => `/programs/${i}`)
const events = (await ids('eventDetails.js', 'eventDetails')).map((i) => `/events/${i}`)
const volunteers = (await ids('volunteerRoles.js', 'volunteerRoles')).map((i) => `/volunteers/${i}`)

const today = new Date().toISOString().slice(0, 10)
const urls = [
  ...[...staticPaths, ...programs, ...events, ...volunteers].map((p) => ({ loc: `${SITE}${p}`, lastmod: today })),
  ...posts.map((p) => ({ loc: articleUrl(p), lastmod: asDate(p.updated || p.date) })),
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${esc(u.loc)}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`

fs.writeFileSync(path.join(root, 'public/rss.xml'), rss)
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), sitemap)
fs.writeFileSync(path.join(root, 'public/robots.txt'), robots)
console.log(`feeds: ${posts.length} articles, ${urls.length} sitemap URLs`)

// Small summary for the home page, so it can show the latest guidance and real
// counts without bundling every article or the whole catalogue.
{
  const { photos } = await import(pathToFileURL(path.join(root, 'src/data/photos.js')).href)
  const { catalogueItems } = await import(pathToFileURL(path.join(root, 'src/data/catalogue.js')).href)
  const { programDetails } = await import(pathToFileURL(path.join(root, 'src/data/programDetails.js')).href)
  const img = (v) => (typeof v === 'string' && v.startsWith('/') ? v : photos[v]) || photos.child
  const pick = [...posts].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))).slice(0, 3)
  const summary = {
    articleCount: posts.length,
    catalogueCount: catalogueItems.length,
    programCount: Object.keys(programDetails).length,
    latest: pick.map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      excerpt: p.excerpt || '',
      thumb: img(p.thumb || p.image),
    })),
  }
  fs.mkdirSync(path.join(root, 'src/data/generated'), { recursive: true })
  fs.writeFileSync(path.join(root, 'src/data/generated/home-summary.json'), JSON.stringify(summary, null, 2) + '\n')
  console.log(`home-summary: ${summary.articleCount} articles, ${summary.catalogueCount} catalogue items`)
}
