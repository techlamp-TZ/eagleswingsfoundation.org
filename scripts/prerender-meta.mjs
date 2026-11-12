// Post-build: write a copy of the page shell for every public route with that
// route's own <title>, description, canonical URL and sharing tags, so search
// engines and link previews see them before any JavaScript runs.
//
// Copies go to dist/_meta/<route>.html (not dist/<route>/index.html: a folder
// named like a route makes Apache redirect /route to /route/). public/.htaccess
// serves the copy when one exists and falls back to index.html otherwise.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import YAML from 'yaml'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const dist = path.join(root, 'dist')
const SITE = 'https://eagleswingsfoundation.org'
const NAME = "Eagle's Wings Foundation Tanzania"
const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const pages = {
  '/': ['Home', 'Inclusion begins with understanding. Practical education, life-skills learning, healthy-ageing guidance and community awareness for children, families, caregivers and older people in Tegeta, Dar es Salaam.', '/photos/hero-wheelchair.jpg'],
  '/about': ['About Us', 'Eagle’s Wings Foundation Tanzania was founded in 2025 in Tegeta, Dar es Salaam, to improve the lives of people with disabilities and challenges, particularly children and older people.'],
  '/get-started': ['Find Support', 'Not sure where to begin? Choose the situation closest to yours and see which Eagle’s Wings program can help, and how to get in touch.', '/photos/hero-wheelchair.jpg'],
  '/programs': ['Programs', 'Five program areas: neuro-diversity awareness, elderly care support, education and therapy guidance, life skills and caregiver training.'],
  '/impact': ['Our Impact', 'How Eagle’s Wings measures and reports its work, and what has been verified so far.'],
  '/get-involved': ['Get Involved', 'Volunteer, partner or support Eagle’s Wings Foundation Tanzania.'],
  '/blog': ['News & Stories', 'Plain-language articles for families, caregivers and communities on neuro-diversity, caregiving, healthy ageing and life skills.', '/photos/blog/news-hero.jpg'],
  '/contact': ['Contact', 'Contact Eagle’s Wings Foundation Tanzania in Tegeta, Dar es Salaam by phone, WhatsApp, email or the contact form.'],
  '/donate': ['Donate', 'Send a donation request to Eagle’s Wings Foundation Tanzania. No payment is taken online; the team confirms the details with you.'],
  '/gallery': ['Gallery', 'Photos from Eagle’s Wings Foundation Tanzania activities, shared with consent.'],
  '/catalogue': ['Equipment Catalogue', 'Therapy, sensory, speech and motor-function equipment from OneStop Therapeutics, with prices in TZS and ordering on WhatsApp.'],
  '/faq': ['FAQ', 'Answers to common questions about Eagle’s Wings programs, volunteering, donations, autism and life skills.'],
  '/volunteers': ['Volunteers', 'Volunteer roles at Eagle’s Wings Foundation Tanzania.'],
  '/careers': ['Careers', 'Roles and opportunities at Eagle’s Wings Foundation Tanzania.'],
  '/privacy': ['Privacy Policy', 'How Eagle’s Wings Foundation Tanzania collects, uses and protects personal information.'],
  '/resources': ['Resources', 'Reports, media, answers, partnership information and opportunities in one place.'],
  '/causes': ['Support Areas', 'The support areas you can help fund at Eagle’s Wings Foundation Tanzania.'],
}

const load = async (file) => import(pathToFileURL(path.join(root, 'src/data', file)).href)
const { programDetails } = await load('programDetails.js')
for (const [id, p] of Object.entries(programDetails)) pages[`/programs/${id}`] = [p.title, p.intro]

const blogDir = path.join(root, 'src/content/blog')
for (const f of fs.readdirSync(blogDir).filter((x) => x.endsWith('.md'))) {
  const m = fs.readFileSync(path.join(blogDir, f), 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) continue
  const d = YAML.parse(m[1])
  const img = typeof d.image === 'string' && d.image.startsWith('/') ? d.image.replace(/\.webp$/, '.jpg') : undefined
  pages[`/blog/article-${d.slug || f.slice(0, -3)}`] = [d.title, d.description || d.excerpt || '', img, 'article']
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function render(route, [title, description, image = '/eagles-wings-foundation-logo.png', type = 'website']) {
  const full = route === '/' ? NAME : `${title} | ${NAME}`
  const url = SITE + route
  const tags = [
    `<title>${esc(full)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${esc(NAME)}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:title" content="${esc(full)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE}${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join('\n  ')
  return shell
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', `  ${tags}\n</head>`)
}

let n = 0
for (const [route, meta] of Object.entries(pages)) {
  const html = render(route, meta)
  if (route === '/') {
    fs.writeFileSync(path.join(dist, 'index.html'), html)
  } else {
    const out = path.join(dist, '_meta', `${route.slice(1)}.html`)
    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.writeFileSync(out, html)
  }
  n++
}
console.log(`prerender-meta: wrote route metadata for ${n} pages`)
