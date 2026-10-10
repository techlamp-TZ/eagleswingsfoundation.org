// Blog content engine. Articles are Markdown files with YAML frontmatter in
// src/content/blog/*.md — to publish a new article, just add a file there.
// This module parses them at build time and derives everything the blog UI
// needs: reading time, table of contents, related posts, categories, tags.
//
// Frontmatter: title, slug, category, excerpt (meta description), date,
// updated, author, tags[], template, image (photos.js key, high-res),
// thumb (photos.js key), icon (lucide name), featured, keyTakeaways[],
// faq[{q,a}], sources[{title,publisher,url}].
import { Marked } from 'marked'
import YAML from 'yaml'
import { photos } from './photos.js'

const files = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

// Display order of categories (matches the blog sidebar).
// `image` / `thumb` in front matter: a photos.js key, or a path under /photos/.
const photoFor = (v) => (typeof v === 'string' && v.startsWith('/') ? v : photos[v])

export const categoryOrder = [
  'Neuro-diversity',
  'Caregiving',
  'Healthy ageing',
  'Life skills',
  'Family guidance',
  'Foundation',
  'Volunteering',
  'Inclusion',
  'Safeguarding',
  'Partnerships',
  'Events',
  'Transparency',
]

// Where each category's "take the next step" call to action points.
export const categoryCta = {
  'Neuro-diversity': { to: '/programs/program-neurodiversity', label: 'Explore the Neuro-diversity program' },
  Caregiving: { to: '/programs/program-caregiver-training', label: 'See caregiver training' },
  'Healthy ageing': { to: '/programs/program-elderly-care', label: 'See elderly care support' },
  'Life skills': { to: '/programs/program-life-skills', label: 'See the Life Skills program' },
  'Family guidance': { to: '/programs/program-education-therapy', label: 'See education & therapy guidance' },
  Foundation: { to: '/about#mission', label: 'Read our mission and vision' },
  Volunteering: { to: '/volunteers', label: 'Explore volunteer roles' },
  Inclusion: { to: '/get-involved', label: 'Get involved' },
  Safeguarding: { to: '/privacy', label: 'Read our privacy information' },
  Partnerships: { to: '/contact', label: 'Talk to us about partnering' },
  Events: { to: '/contact', label: 'Ask about upcoming activities' },
  Transparency: { to: '/impact', label: 'See what we can show' },
}

const WORDS_PER_MINUTE = 200

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function parseFile(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return null
  return { data: YAML.parse(match[1]) || {}, body: match[2] }
}

// Renders the article body to HTML. Content is authored by the Foundation's
// own editors and committed to the repo (trusted), so raw HTML is not sanitised.
function renderBody(body) {
  const headings = []
  const used = new Map()
  const md = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens)
        const text = inner.replace(/<[^>]+>/g, '')
        let id = slugify(text) || 'section'
        const n = used.get(id) || 0
        used.set(id, n + 1)
        if (n) id = `${id}-${n + 1}`
        if (depth === 2 || depth === 3) headings.push({ id, text, level: depth })
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens)
        const external = /^https?:\/\//i.test(href)
        const t = title ? ` title="${title}"` : ''
        return external
          ? `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`
          : `<a href="${href}"${t}>${text}</a>`
      },
      table(token) {
        const header = token.header.map((cell) => `<th>${this.parser.parseInline(cell.tokens)}</th>`).join('')
        const rows = token.rows
          .map((row) => `<tr>${row.map((cell) => `<td>${this.parser.parseInline(cell.tokens)}</td>`).join('')}</tr>`)
          .join('')
        return `<div class="prose-table"><table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table></div>\n`
      },
    },
  })
  const html = md.parse(body)
  return { html, headings }
}

const asDate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d || ''))

const parsed = Object.entries(files)
  .map(([path, raw]) => {
    const file = parseFile(raw)
    if (!file || !file.data.slug || !file.data.title) {
      console.warn(`Blog: skipping ${path} (missing frontmatter, slug or title)`)
      return null
    }
    const { data, body } = file
    const { html, headings } = renderBody(body)
    const words = body.replace(/[#>*_`|\-[\]()]/g, ' ').split(/\s+/).filter(Boolean).length
    return {
      slug: data.slug,
      cat: data.category,
      title: data.title,
      excerpt: data.excerpt || '',
      date: asDate(data.date),
      updated: asDate(data.updated || data.date),
      author: data.author || "Eagle's Wings Editorial Team",
      tags: Array.isArray(data.tags) ? data.tags : [],
      template: data.template || 'explainer',
      img: photoFor(data.image) || photos.child,
      thumb: photoFor(data.thumb) || photoFor(data.image) || photos.child,
      icon: data.icon || 'newspaper',
      featured: Boolean(data.featured),
      keyTakeaways: Array.isArray(data.keyTakeaways) ? data.keyTakeaways : [],
      faq: Array.isArray(data.faq) ? data.faq : [],
      sources: Array.isArray(data.sources) ? data.sources : [],
      imageCredit: data.imageCredit || '',
      html,
      headings,
      wordCount: words,
      readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    }
  })
  .filter(Boolean)

// Interleave categories so the "All topics" list shows variety instead of
// twelve posts from one category in a row. Featured posts lead.
function interleave(list) {
  const groups = categoryOrder.map((c) =>
    list.filter((a) => a.cat === c).sort((a, b) => a.title.localeCompare(b.title)),
  )
  const rest = list.filter((a) => !categoryOrder.includes(a.cat))
  const out = []
  const max = Math.max(0, ...groups.map((g) => g.length))
  for (let i = 0; i < max; i += 1) groups.forEach((g) => g[i] && out.push(g[i]))
  return [...out, ...rest]
}

const ordered = interleave(parsed)
const featuredFirst = [...ordered.filter((a) => a.featured), ...ordered.filter((a) => !a.featured)]

export const blogListItems = featuredFirst.map((a, index) => ({ ...a, index }))
export const articles = Object.fromEntries(blogListItems.map((a) => [a.slug, a]))

export const categories = categoryOrder
  .map((name) => ({ name, count: blogListItems.filter((a) => a.cat === name).length }))
  .filter((c) => c.count > 0)

export const allTags = Object.entries(
  blogListItems.flatMap((a) => a.tags).reduce((acc, t) => ({ ...acc, [t]: (acc[t] || 0) + 1 }), {}),
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([tag, count]) => ({ tag, count }))

export function getRelated(slug, limit = 3) {
  const a = articles[slug]
  if (!a) return []
  const sameCat = blogListItems.filter((x) => x.slug !== slug && x.cat === a.cat)
  const scored = blogListItems
    .filter((x) => x.slug !== slug && x.cat !== a.cat)
    .map((x) => ({ x, score: x.tags.filter((t) => a.tags.includes(t)).length }))
    .filter((s) => s.score > 0)
    .sort((p, q) => q.score - p.score)
    .map((s) => s.x)
  return [...sameCat.slice(0, 2), ...scored, ...sameCat.slice(2)].slice(0, limit)
}

export function getNeighbours(slug) {
  const a = articles[slug]
  if (!a) return { prev: null, next: null }
  const inCat = blogListItems.filter((x) => x.cat === a.cat)
  const i = inCat.findIndex((x) => x.slug === slug)
  return { prev: inCat[i - 1] || null, next: inCat[i + 1] || null }
}
