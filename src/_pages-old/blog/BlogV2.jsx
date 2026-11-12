import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import { SITE, absoluteUrl } from '../../config/site.js'
import { blogListItems, categories } from '../../data/blog.js'
import { useSeo } from '../../utils/useSeo.js'

// News index: search, topic and tag filters and pagination, all stored in the
// URL (?category=, ?tag=, ?q=, ?page=) so any filtered view can be shared.

const PAGE_SIZE = 9
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

const standards = [
  ['file-check', 'Sources checked', 'Facts are checked against trusted sources.'],
  ['users-round', 'Consent aware', 'People’s privacy, consent and dignity are protected.'],
  ['book-open', 'Plain language', 'Written clearly, without jargon.'],
  ['shield-check', 'Clear boundaries', 'Education and guidance, not diagnosis or treatment.'],
  ['refresh-cw', 'Updated when needed', 'Reviewed again when guidance changes.'],
]

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'

const formatDate = (iso) =>
  iso ? new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : ''

// The title link is stretched over the whole card (after:inset-0), so the
// image, text and "Read article" label are all one click target.
const stretched = "after:absolute after:inset-0 after:content-['']"

function Meta({ item, stacked = false }) {
  return (
    <div className={`text-[0.8125rem] text-subtle ${stacked ? 'space-y-1' : 'flex flex-wrap items-center gap-x-3 gap-y-1'}`}>
      <span className="inline-flex items-center gap-1.5 font-medium text-brand-orange-ink">
        <Icon name={item.icon || 'newspaper'} className="h-3.5 w-3.5" />
        {item.cat}
      </span>
      <span className="block">
        {formatDate(item.date)} · {item.readingMinutes} min read
      </span>
    </div>
  )
}

function Card({ item }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded border border-line bg-surface transition-colors hover:border-brand-navy">
      <div className="relative aspect-[16/9] overflow-hidden bg-sand">
        <img src={item.thumb} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_25%]" loading="lazy" decoding="async" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Meta item={item} stacked />
        <h3 className="mt-2 font-display text-[1.125rem] leading-snug text-brand-deep">
          <Link to={`/blog/article-${item.slug}`} className={`${stretched} group-hover:text-brand-navy`}>
            {item.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-4 flex-1 text-[0.9375rem] leading-7 text-muted">{item.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-deep">
          Read article <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink" />
        </span>
      </div>
    </article>
  )
}

function Featured({ item, more }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
      <article className="group relative grid overflow-hidden rounded border border-line bg-surface md:grid-cols-[1.4fr_1fr]">
        <div className="relative min-h-[240px] bg-sand md:min-h-[340px]">
          <img src={item.img} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_30%]" decoding="async" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="font-semibold text-brand-orange-ink">Featured</p>
          <div className="mt-2">
            <Meta item={item} stacked />
          </div>
          <h2 className="display-md mt-3 text-brand-deep">
            <Link to={`/blog/article-${item.slug}`} className={`${stretched} group-hover:text-brand-navy`}>
              {item.title}
            </Link>
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-7 text-muted">{item.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-deep">
            Read story <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink" />
          </span>
        </div>
      </article>
      <aside aria-labelledby="blog-more" className="overflow-hidden rounded border border-line bg-surface">
        <h2 id="blog-more" className="bg-[#eef3f9] px-5 py-3 font-display text-lg text-brand-deep">
          Also worth reading
        </h2>
        <ul className="divide-y divide-line px-5">
          {more.map((a) => (
            <li key={a.slug} className="group relative grid grid-cols-[6.5rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded bg-sand">
                <img src={a.thumb} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div>
                <Meta item={a} stacked />
                <h3 className="mt-1 text-[0.9375rem] font-semibold leading-snug text-brand-deep">
                  <Link to={`/blog/article-${a.slug}`} className={`${stretched} group-hover:text-brand-navy`}>
                    {a.title}
                  </Link>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

const pageBtn = 'tabular grid h-11 min-w-11 place-items-center rounded border px-3 text-[0.9375rem] font-medium'

export default function BlogV2() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category') || 'All'
  const tag = params.get('tag') || ''
  const query = params.get('q') || ''
  const page = Math.max(1, Number(params.get('page')) || 1)
  const [draft, setDraft] = useState(query)

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
  const filtered = category !== 'All' || tag || q
  const featured = !filtered ? blogListItems.find((x) => x.featured) || blogListItems[0] : null
  const more = featured ? blogListItems.filter((x) => x.slug !== featured.slug).slice(0, 2) : []
  const shown = featured ? [featured, ...more].map((x) => x.slug) : []
  const pool = rows.filter((x) => !shown.includes(x.slug))
  const pages = Math.max(1, Math.ceil(pool.length / PAGE_SIZE))
  const currentPage = Math.min(page, pages)
  const list = pool.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const topics = [{ name: 'All', count: blogListItems.length }, ...categories]

  const goToPage = (p) => {
    update({ page: p > 1 ? String(p) : '' })
    document.getElementById('blog-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const clear = () => {
    setDraft('')
    setParams({}, { replace: true })
  }

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-sand-warm">
        <div className="mx-auto grid max-w-[96rem] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-16 lg:pl-8 lg:pr-12 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <p className="font-semibold text-brand-orange-ink">News & stories</p>
            <h1 className="display-xl mt-3 max-w-[16ch] text-brand-deep">Practical guidance for families, caregivers and communities.</h1>
            <p className="mt-5 max-w-[34rem] text-lg leading-8 text-muted">Useful stories, checklists and guidance, written in plain language.</p>
            <p className="mt-4 text-[0.9375rem] font-medium text-brand-deep">
              {blogListItems.length} articles <span aria-hidden="true">·</span> {categories.length} topics
            </p>
          </div>
          <div className="relative min-h-[240px] lg:min-h-[340px]">
            <img
              src="/photos/blog/news-hero.webp"
              alt="Two girls reading a picture book together outdoors"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Search and topics */}
      <section className="border-b border-line bg-surface py-6">
        <div className={wrap}>
          <form
            role="search"
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              update({ q: draft.trim() })
            }}
          >
            <label htmlFor="blog-search" className="sr-only">
              Search guidance and stories
            </label>
            <div className="relative flex-1">
              <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-subtle" />
              <input
                id="blog-search"
                type="search"
                value={draft}
                onChange={(e) => {
                  setDraft(e.target.value)
                  update({ q: e.target.value })
                }}
                className="field h-12 text-base"
                style={{ paddingLeft: '3rem' }}
                placeholder="Search guidance and stories"
              />
            </div>
            <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded bg-brand-orange px-7 text-[0.9375rem] font-semibold text-brand-deep hover:bg-brand-orange-dark">
              Search
            </button>
          </form>
          <div role="group" aria-label="Filter by topic" className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {topics.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => update({ category: c.name === 'All' ? '' : c.name })}
                aria-pressed={category === c.name}
                className={`min-h-11 shrink-0 rounded px-4 text-[0.9375rem] font-medium transition-colors ${
                  category === c.name ? 'bg-brand-orange text-brand-deep' : 'bg-[#eef3f9] text-brand-deep hover:bg-[#dde7f3]'
                }`}
              >
                {c.name === 'All' ? 'All topics' : c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="pt-10">
          <div className={wrap}>
            <Featured item={featured} more={more} />
          </div>
        </section>
      )}

      {/* Articles */}
      <section id="blog-list" className="scroll-mt-28 py-12 md:py-14">
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <h2 className="display-lg text-brand-deep">{filtered ? 'Results' : 'Latest guidance'}</h2>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9375rem] text-muted" aria-live="polite">
              <span>
                {rows.length} {rows.length === 1 ? 'article' : 'articles'}
                {category !== 'All' ? ` in ${category}` : ''}
                {tag ? ` tagged “${tag}”` : ''}
                {q ? ` matching “${query}”` : ''}
              </span>
              {filtered && (
                <button type="button" onClick={clear} className="inline-flex min-h-11 items-center gap-1 font-semibold text-brand-navy underline underline-offset-4">
                  <Icon name="x" className="h-4 w-4" /> Clear filters
                </button>
              )}
            </p>
          </div>

          {list.length ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((item) => (
                <Card key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded border border-dashed border-line-strong bg-sand p-10 text-center">
              <Icon name="search-x" className="mx-auto h-6 w-6 text-brand-orange-ink" />
              <h3 className="display-sm mt-4 text-brand-deep">No matching articles</h3>
              <p className="mt-2 text-[0.9375rem] text-muted">Try another search term or topic.</p>
              <button type="button" onClick={clear} className="mt-4 inline-flex min-h-11 items-center font-semibold text-brand-navy underline underline-offset-4">
                Clear filters
              </button>
            </div>
          )}

          {pages > 1 && (
            <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`${pageBtn} border-line bg-surface text-brand-deep hover:border-brand-navy disabled:cursor-not-allowed disabled:text-subtle disabled:hover:border-line`}
              >
                <span className="inline-flex items-center gap-2">
                  <Icon name="arrow-left" className="h-4 w-4" /> Previous
                </span>
              </button>
              <span className="px-3 text-[0.9375rem] text-muted sm:hidden">
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
                    className={`${pageBtn} ${currentPage === i + 1 ? 'border-brand-deep bg-brand-deep text-white' : 'border-line bg-surface text-brand-deep hover:border-brand-navy'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pages}
                className={`${pageBtn} border-line bg-surface text-brand-deep hover:border-brand-navy disabled:cursor-not-allowed disabled:text-subtle disabled:hover:border-line`}
              >
                <span className="inline-flex items-center gap-2">
                  Next <Icon name="arrow-right" className="h-4 w-4" />
                </span>
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Follow: there is no email newsletter, so this offers the two real ways to get new articles */}
      <section className="bg-brand-orange">
        <div className={`${wrap} flex flex-col gap-6 py-9 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="flex items-center gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-brand-orange-ink" aria-hidden="true">
              <Icon name="bell" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="display-md text-brand-deep">Practical guidance, shared with care.</h2>
              <p className="mt-1 text-[0.9375rem] text-brand-deep">Follow new resources, stories and updates from Eagle’s Wings.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button label="Follow on Instagram" href={SITE.instagram} variant="dark" icon="instagram" />
            <Button label="RSS feed" href={absoluteUrl('/rss.xml')} variant="outline" icon="rss" />
          </div>
        </div>
      </section>

      {/* Editorial standards */}
      <section className="-mb-20 bg-paper py-14 md:py-16">
        <div className={wrap}>
          <p className="font-semibold text-brand-orange-ink">How we write</p>
          <h2 className="display-lg mt-2 text-brand-deep">What every article should pass before publication.</h2>
          <p className="mt-3 text-[1.0625rem] leading-8 text-muted">These are the standards that guide the Foundation’s editorial process.</p>
          <ul className="mt-9 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-line">
            {standards.map(([icon, title, text]) => (
              <li key={title} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <Icon name={icon} className="h-9 w-9 text-brand-orange-ink" />
                <h3 className="mt-4 font-display text-[1.0625rem] text-brand-deep">{title}</h3>
                <p className="mt-1 text-[0.9375rem] leading-6 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
