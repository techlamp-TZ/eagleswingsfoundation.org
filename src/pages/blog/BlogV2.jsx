import { Link, useSearchParams } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import { SITE, absoluteUrl } from '../../config/site.js'
import { allTags, blogListItems, categories } from '../../data/blog.js'
import { useSeo } from '../../utils/useSeo.js'

// News index: search, category + tag filters and pagination, all stored in the
// URL (?category=, ?tag=, ?q=, ?page=) so any filtered view can be shared.

const PAGE_SIZE = 8
const DESCRIPTION = "Practical, plain-language guidance for families, caregivers and communities from Eagle's Wings Foundation Tanzania."

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${absoluteUrl('/blog')}#blog`,
  url: absoluteUrl('/blog'),
  name: `News & Stories | ${SITE.name}`,
  description: DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  blogPost: blogListItems.map((a) => ({
    '@type': 'BlogPosting',
    headline: a.title,
    url: absoluteUrl(`/blog/article-${a.slug}`),
    datePublished: a.date,
    dateModified: a.updated || a.date,
  })),
}

const trustSignals = [
  ['search-check', 'Sources checked'],
  ['shield-check', 'Consent aware'],
  ['book-open-check', 'Plain language'],
  ['scale', 'Clear boundaries'],
  ['refresh-cw', 'Updated when needed'],
]

const formatDate = (iso) =>
  iso ? new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : ''

// The title link is stretched over the whole card (after:inset-0), so the
// image, text and "Read article" label are all one click target.
const stretched = "after:absolute after:inset-0 after:content-['']"

function Meta({ item }) {
  return (
    <div className="mono-label flex flex-wrap items-center gap-x-3 gap-y-1 text-subtle">
      <span className="inline-flex items-center gap-1.5 text-brand-orange">
        <Icon name={item.icon || 'newspaper'} className="h-3.5 w-3.5" />
        {item.cat}
      </span>
      <span>{formatDate(item.date)}</span>
      <span>{item.readingMinutes} min read</span>
    </div>
  )
}

function ListRow({ item }) {
  const to = `/blog/article-${item.slug}`
  return (
    <article className="group relative grid gap-6 border-b border-line py-8 first:pt-0 md:grid-cols-[240px_1fr] md:gap-8">
      <div className="img-zoom relative aspect-[4/3] self-start overflow-hidden">
        <img src={item.thumb} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_25%]" loading="lazy" decoding="async" />
      </div>
      <div>
        <Meta item={item} />
        <h2 className="display-sm mt-3 max-w-3xl text-brand-deep">
          <Link to={to} className={`${stretched} group-hover:text-brand-navy`}>
            {item.title}
          </Link>
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{item.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep group-hover:text-brand-orange">
          Read article <Icon name="arrow-up-right" className="h-4 w-4 text-brand-orange" />
        </span>
      </div>
    </article>
  )
}

function Featured({ item }) {
  const to = `/blog/article-${item.slug}`
  return (
    <article className="group relative mb-12 grid overflow-hidden border border-line bg-white md:grid-cols-[1.5fr_1fr]">
      <div className="img-zoom overflow-hidden">
        <img src={item.img} alt="" className="h-64 w-full object-cover md:h-full md:min-h-[380px]" decoding="async" />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <div className="eyebrow text-brand-orange">Featured</div>
        <div className="mt-3">
          <Meta item={item} />
        </div>
        <h2 className="display-md mt-4 text-brand-deep">
          <Link to={to} className={`${stretched} group-hover:text-brand-navy`}>
            {item.title}
          </Link>
        </h2>
        <p className="mt-4 leading-7 text-muted">{item.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep group-hover:text-brand-orange">
          Read the article <Icon name="arrow-right" className="h-4 w-4 text-brand-orange" />
        </span>
      </div>
    </article>
  )
}

const pageBtn = 'mono-label grid h-11 min-w-11 place-items-center border px-3'

export default function BlogV2() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category') || 'All'
  const tag = params.get('tag') || ''
  const query = params.get('q') || ''
  const page = Math.max(1, Number(params.get('page')) || 1)

  useSeo({ title: 'News & Stories', description: DESCRIPTION, path: '/blog', image: '/photos/blog/news-hero.webp', jsonLd: JSON_LD })

  const update = (changes) => {
    const next = new URLSearchParams(params)
    Object.entries(changes).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)))
    if (!('page' in changes)) next.delete('page')
    setParams(next, { replace: true })
  }

  const q = query.trim().toLowerCase()
  const rows = blogListItems.filter((x) => {
    const catOk = category === 'All' || x.cat === category
    const tagOk = !tag || x.tags.includes(tag)
    const qOk = !q || `${x.title} ${x.excerpt} ${x.cat} ${x.tags.join(' ')}`.toLowerCase().includes(q)
    return catOk && tagOk && qOk
  })
  const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE))
  const currentPage = Math.min(page, pages)
  const slice = rows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const filtered = category !== 'All' || tag || q
  const featured = !filtered && currentPage === 1 ? blogListItems.find((x) => x.featured) || blogListItems[0] : null
  const list = featured ? slice.filter((x) => x.slug !== featured.slug) : slice
  const topics = [{ name: 'All', count: blogListItems.length }, ...categories]

  const goToPage = (p) => {
    update({ page: p > 1 ? String(p) : '' })
    document.getElementById('blog2List')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <PageHero
        kicker="News & stories"
        title="Practical guidance for families, caregivers and communities."
        text={`${blogListItems.length} articles across ${categories.length} topics, written in plain language.`}
        img="/photos/blog/news-hero.webp"
        alt="Two girls reading a picture book together outdoors"
        alt="Children playing together on a swing"
      />

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
            <main className="min-w-0">
              {featured && <Featured item={featured} />}

              <div id="blog2List" className="border-t border-line pt-8">
                <label htmlFor="blog2-search" className="mono-label mono-label-lg text-brand-deep">
                  Search articles
                </label>
                <div className="relative mt-2">
                  <input
                    id="blog2-search"
                    value={query}
                    onChange={(e) => update({ q: e.target.value })}
                    className="field h-12 pr-12 text-base"
                    placeholder="e.g. autism, caregiving, safeguarding"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-subtle">
                    <Icon name="search" className="h-5 w-5" />
                  </span>
                </div>

                <div role="group" aria-label="Filter by topic" className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden">
                  {topics.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => update({ category: c.name === 'All' ? '' : c.name })}
                      aria-pressed={category === c.name}
                      className={`mono-label shrink-0 border px-4 py-2.5 ${
                        category === c.name ? 'border-brand-navy bg-brand-navy text-white' : 'border-line bg-white text-brand-ink'
                      }`}
                    >
                      {c.name === 'All' ? 'All topics' : c.name} · {c.count}
                    </button>
                  ))}
                </div>

                <div className="mono-label my-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted" aria-live="polite">
                  <span>
                    {rows.length} {rows.length === 1 ? 'article' : 'articles'}
                    {category !== 'All' ? ` in ${category}` : ''}
                    {tag ? ` tagged “${tag}”` : ''}
                    {q ? ` matching “${query}”` : ''}
                  </span>
                  {filtered && (
                    <button type="button" onClick={() => setParams({}, { replace: true })} className="inline-flex items-center gap-1 text-brand-orange hover:text-brand-navy">
                      <Icon name="x" className="h-3.5 w-3.5" /> Clear filters
                    </button>
                  )}
                </div>

                {list.length ? (
                  list.map((item) => <ListRow key={item.slug} item={item} />)
                ) : (
                  <div className="border border-dashed border-line bg-sand p-10 text-center">
                    <Icon name="search-x" className="mx-auto h-6 w-6 text-brand-orange" />
                    <h3 className="display-sm mt-4 text-brand-deep">No matching articles</h3>
                    <p className="mt-2 text-sm text-muted">Try another search term, topic or tag.</p>
                  </div>
                )}
              </div>

              {pages > 1 && (
                <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`${pageBtn} gap-2 border-line bg-paper text-brand-deep hover:border-brand-navy disabled:cursor-not-allowed disabled:text-subtle disabled:hover:border-line`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon name="arrow-left" className="h-4 w-4" /> Previous
                    </span>
                  </button>
                  <span className="mono-label px-3 text-muted sm:hidden">
                    Page {currentPage} of {pages}
                  </span>
                  <div className="hidden gap-2 sm:flex">
                    {Array.from({ length: pages }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goToPage(i + 1)}
                        aria-current={currentPage === i + 1 ? 'page' : undefined}
                        aria-label={`Page ${i + 1}`}
                        className={`${pageBtn} ${currentPage === i + 1 ? 'border-brand-navy bg-brand-navy text-white' : 'border-line bg-paper text-brand-deep hover:border-brand-navy'}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === pages}
                    className={`${pageBtn} gap-2 border-line bg-paper text-brand-deep hover:border-brand-navy disabled:cursor-not-allowed disabled:text-subtle disabled:hover:border-line`}
                  >
                    <span className="inline-flex items-center gap-2">
                      Next <Icon name="arrow-right" className="h-4 w-4" />
                    </span>
                  </button>
                </nav>
              )}
            </main>

            <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
              <div className="hidden lg:block">
                <h3 className="mono-label border-b border-brand-deep pb-3 text-brand-deep">Topics</h3>
                {topics.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => update({ category: c.name === 'All' ? '' : c.name })}
                    aria-pressed={category === c.name}
                    className={`flex w-full items-center justify-between gap-4 border-b border-line py-3 text-left text-sm ${category === c.name ? 'font-semibold text-brand-deep' : 'text-muted hover:text-brand-deep'}`}
                  >
                    <span className={category === c.name ? 'border-b-2 border-brand-orange' : ''}>{c.name === 'All' ? 'All topics' : c.name}</span>
                    <span className="mono-label text-subtle">{c.count}</span>
                  </button>
                ))}
              </div>

              <div>
                <h3 className="mono-label border-b border-brand-deep pb-3 text-brand-deep">Popular tags</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {allTags.slice(0, 14).map(({ tag: t }) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update({ tag: tag === t ? '' : t })}
                      aria-pressed={tag === t}
                      className={`mono-label border px-3 py-2 ${tag === t ? 'border-brand-navy bg-brand-navy text-white' : 'border-line text-muted hover:border-brand-navy hover:text-brand-navy'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mono-label border-b border-brand-deep pb-3 text-brand-deep">Follow along</h3>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:text-brand-orange"
                >
                  <Icon name="instagram" className="h-4 w-4 text-brand-orange" /> Follow us on Instagram
                </a>
                <a href="/rss.xml" className="mt-3 block text-sm text-muted underline underline-offset-4 hover:text-brand-deep">
                  RSS feed for news readers
                </a>
              </div>

              <div className="border border-line bg-brand-navy p-6 text-white">
                <span className="grid h-12 w-12 place-items-center rounded border border-navy-line">
                  <Icon name="heart" className="h-6 w-6 text-brand-orange" />
                </span>
                <h3 className="display-sm mt-5 text-white">Your donation supports our programs and resources.</h3>
                <div className="mt-5">
                  <Button label="Donate" href="/donate" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="How we write" title="What every article should pass before publication." text="These are the standards that guide the Foundation's editorial process." />
          <div className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {trustSignals.map(([ic, t]) => (
              <div key={t} className="border-b border-line p-5 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <span className="grid h-12 w-12 place-items-center rounded border border-line bg-white">
                  <Icon name={ic} className="h-6 w-6 text-brand-orange" />
                </span>
                <h3 className="display-sm mt-4 text-brand-deep">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
