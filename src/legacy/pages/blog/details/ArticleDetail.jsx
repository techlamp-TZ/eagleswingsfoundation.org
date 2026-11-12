import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Icon from '../../../components/ui/Icon.jsx'
import Button from '../../../components/ui/Button.jsx'
import { articles, categoryCta, getNeighbours, getRelated } from '../../../data/blog.js'
import { SITE, absoluteUrl } from '../../../config/site.js'
import { usePageTitle } from '../../../utils/usePageTitle.js'
import { useSeo } from '../../../utils/useSeo.js'
import { useActiveHeading } from '../../../utils/useActiveHeading.js'
import NotFound from '../../not-found/NotFound.jsx'
import './article-prose.css'

const formatDate = (iso) =>
  iso ? new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''

function buildJsonLd(article, path) {
  const url = absoluteUrl(path)
  const publisher = { '@type': 'Organization', name: SITE.name, url: SITE.url, logo: { '@type': 'ImageObject', url: absoluteUrl(SITE.logo) } }
  const graph = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      headline: article.title,
      description: article.excerpt,
      image: absoluteUrl(article.img),
      datePublished: article.date,
      dateModified: article.updated || article.date,
      author: { '@type': 'Organization', name: article.author, url: SITE.url },
      publisher,
      articleSection: article.cat,
      keywords: article.tags.join(', '),
      wordCount: article.wordCount,
      inLanguage: 'en',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'News', item: absoluteUrl('/blog') },
        { '@type': 'ListItem', position: 3, name: article.cat, item: absoluteUrl(`/blog?category=${encodeURIComponent(article.cat)}`) },
        { '@type': 'ListItem', position: 4, name: article.title, item: url },
      ],
    },
  ]
  if (article.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: article.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

function ReadingProgress({ targetRef }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = targetRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight * 0.6
      const done = Math.min(Math.max(-rect.top + window.innerHeight * 0.1, 0), total)
      setProgress(total > 0 ? done / total : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [targetRef])
  return (
    <div className="no-print fixed left-0 top-0 z-[70] h-[3px] w-full" aria-hidden="true">
      <div className="h-full origin-left bg-brand-orange" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}

function TableOfContents({ headings, active, onNavigate }) {
  if (headings.length < 3) return null
  return (
    <nav aria-label="On this page">
      <h2 className="mono-label border-b border-brand-deep pb-3 text-brand-deep">On this page</h2>
      <ol className="mt-3 space-y-1">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${h.id}`}
              onClick={(e) => onNavigate(e, h.id)}
              className={`block border-l-2 py-1.5 pl-3 text-sm leading-5 ${
                active === h.id ? 'border-brand-orange font-semibold text-brand-deep' : 'border-line text-muted hover:text-brand-deep'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function ShareBar({ article, path }) {
  const [copied, setCopied] = useState(false)
  const url = absoluteUrl(path)
  const text = encodeURIComponent(article.title)
  const u = encodeURIComponent(url)
  const links = [
    ['WhatsApp', `https://wa.me/?text=${text}%20${u}`],
    ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${u}`],
    ['X', `https://twitter.com/intent/tweet?text=${text}&url=${u}`],
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${u}`],
    ['Email', `mailto:?subject=${text}&body=${u}`],
  ]
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this link', url)
    }
  }
  const chip = 'mono-label inline-flex items-center gap-1.5 border border-line bg-white px-3 py-2 text-muted transition-colors hover:border-brand-navy hover:text-brand-navy'
  return (
    <div className="no-print flex flex-wrap items-center gap-2">
      <span className="mono-label mr-1 text-subtle">Share</span>
      {links.map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={chip}>
          {label}
        </a>
      ))}
      <button type="button" onClick={copy} className={chip}>
        <Icon name={copied ? 'check' : 'link'} className="h-3.5 w-3.5" />
        {copied ? 'Copied' : 'Copy link'}
      </button>
      <button type="button" onClick={() => window.print()} className={chip}>
        <Icon name="printer" className="h-3.5 w-3.5" />
        Print
      </button>
    </div>
  )
}

function RelatedCard({ item }) {
  return (
    <Link to={`/blog/article-${item.slug}`} className="group block">
      <div className="img-zoom overflow-hidden">
        <img src={item.thumb} alt={item.title} className="aspect-[4/3] w-full object-cover" />
      </div>
      <div className="mono-label mt-4 flex items-center gap-3 text-subtle">
        <span className="text-brand-orange">{item.cat}</span>
        <span>{item.readingMinutes} min read</span>
      </div>
      <h3 className="display-sm mt-2 text-brand-deep group-hover:text-brand-navy">{item.title}</h3>
    </Link>
  )
}

export default function ArticleDetail() {
  // Route is "blog/:slug" where the URL segment is "article-<realSlug>"
  // (react-router can't mix a literal prefix with a param within one path
  // segment), so strip it before looking the article up by its plain slug.
  const { slug: rawSlug } = useParams()
  const slug = rawSlug?.replace(/^article-/, '')
  const article = articles[slug]
  const path = `/blog/article-${slug}`
  const navigate = useNavigate()
  const articleRef = useRef(null)

  usePageTitle(article?.title)
  const jsonLd = useMemo(() => (article ? buildJsonLd(article, path) : null), [article, path])
  useSeo({ title: article?.title, description: article?.excerpt, path, image: article?.img, type: 'article', jsonLd, enabled: Boolean(article) })

  const headingIds = useMemo(() => (article ? article.headings.map((h) => h.id) : []), [article])
  const activeHeading = useActiveHeading(headingIds)

  if (!article) return <NotFound />

  const related = getRelated(article.slug, 3)
  const { prev, next } = getNeighbours(article.slug)
  const cta = categoryCta[article.cat]

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }
  // Markdown links to other pages are plain <a href="/...">; route them client-side.
  const onBodyClick = (e) => {
    const a = e.target.closest('a')
    const href = a?.getAttribute('href')
    if (href && href.startsWith('/') && !href.startsWith('//') && !a.target) {
      e.preventDefault()
      navigate(href)
    }
  }

  return (
    <>
      <ReadingProgress targetRef={articleRef} />

      <header className="border-b border-line bg-sand-warm">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <nav aria-label="Breadcrumb" className="mono-label flex flex-wrap items-center gap-2 text-subtle">
            <Link to="/" className="hover:text-brand-navy">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog" className="hover:text-brand-navy">News</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/blog?category=${encodeURIComponent(article.cat)}`} className="text-brand-orange hover:text-brand-navy">{article.cat}</Link>
          </nav>
          <h1 className="display-xl mt-6 max-w-4xl text-brand-deep">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">{article.excerpt}</p>
          <div className="mono-label mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted">
            <span className="inline-flex items-center gap-2"><Icon name="feather" className="h-3.5 w-3.5 text-brand-orange" />{article.author}</span>
            <span className="inline-flex items-center gap-2"><Icon name="calendar-days" className="h-3.5 w-3.5 text-brand-orange" />{formatDate(article.date)}</span>
            {article.updated && article.updated !== article.date && <span>Updated {formatDate(article.updated)}</span>}
            <span className="inline-flex items-center gap-2"><Icon name="clock" className="h-3.5 w-3.5 text-brand-orange" />{article.readingMinutes} min read</span>
          </div>
          <div className="mt-6"><ShareBar article={article} path={path} /></div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <img src={article.img} alt={article.title} className="aspect-[16/8] w-full object-cover" />
        {article.imageCredit && (
          <p className="mt-2 text-xs text-subtle">
            <a href={article.imageCredit.split('|')[1]} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brand-deep">
              {article.imageCredit.split('|')[0]}
            </a>
          </p>
        )}
      </div>

      <section className="section pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,44rem)_300px] lg:justify-between">
            <article ref={articleRef} className="min-w-0">
              {article.headings.length >= 3 && (
                <details className="no-print mb-8 border border-line bg-white lg:hidden">
                  <summary className="mono-label cursor-pointer px-4 py-3 text-brand-deep">On this page</summary>
                  <ol className="border-t border-line px-4 py-2">
                    {article.headings.filter((h) => h.level === 2).map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} onClick={(e) => scrollTo(e, h.id)} className="block py-2 text-sm text-muted hover:text-brand-deep">{h.text}</a>
                      </li>
                    ))}
                  </ol>
                </details>
              )}

              {article.keyTakeaways.length > 0 && (
                <aside className="mb-10 border-l-[3px] border-brand-orange bg-sand p-6 sm:p-8" aria-label="Key takeaways">
                  <h2 className="eyebrow text-brand-orange">Key takeaways</h2>
                  <ul className="mt-4 space-y-3">
                    {article.keyTakeaways.map((k) => (
                      <li key={k} className="flex gap-3 text-[15px] leading-7 text-brand-deep">
                        <Icon name="check" className="mt-1.5 h-4 w-4 shrink-0 text-brand-orange" />
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}

              {/* Article HTML is rendered from Markdown committed by the Foundation's editors (trusted content). */}
              <div className="article-prose" onClick={onBodyClick} dangerouslySetInnerHTML={{ __html: article.html }} />

              {article.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-line pt-6">
                  <span className="mono-label mr-1 text-subtle">Tagged</span>
                  {article.tags.map((t) => (
                    <Link key={t} to={`/blog?tag=${encodeURIComponent(t)}`} className="mono-label border border-line px-3 py-1.5 text-muted hover:border-brand-navy hover:text-brand-navy">
                      {t}
                    </Link>
                  ))}
                </div>
              )}

              <p className="mt-8 border border-line bg-white p-5 text-sm leading-6 text-muted">
                <strong className="text-brand-deep">Please note:</strong> this article is general educational information. It is not medical, legal or
                clinical advice. For diagnosis, treatment or decisions about a specific person, speak to a qualified professional.
              </p>

              {article.faq.length > 0 && (
                <section className="mt-14" aria-labelledby="faq-heading">
                  <div className="eyebrow text-brand-orange">Common questions</div>
                  <h2 id="faq-heading" className="display-md mt-2 text-brand-deep">Frequently asked questions</h2>
                  <div className="mt-6 border-t border-line">
                    {article.faq.map((f, i) => (
                      <details key={f.q} className="group border-b border-line py-5" open={i === 0}>
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-brand-deep">
                          <span>{f.q}</span>
                          <Icon name="plus" className="mt-1 h-4 w-4 shrink-0 text-brand-orange transition group-open:rotate-45" />
                        </summary>
                        <p className="mt-3 max-w-2xl leading-7 text-muted">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {article.sources.length > 0 && (
                <section className="mt-14" aria-labelledby="sources-heading">
                  <h2 id="sources-heading" className="mono-label border-b border-brand-deep pb-3 text-brand-deep">Sources and further reading</h2>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-muted marker:text-brand-orange">
                    {article.sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-2 hover:text-brand-deep">
                          {s.title}
                        </a>
                        {s.publisher && <span>, {s.publisher}</span>}
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              <section className="mt-14 grid gap-6 border border-line bg-white p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-8">
                <span className="grid h-14 w-14 place-items-center bg-brand-navy text-white"><Icon name="feather" className="h-6 w-6" /></span>
                <div>
                  <div className="mono-label text-subtle">Written by</div>
                  <div className="display-sm mt-1 text-brand-deep">{article.author}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Practical, plain-language guidance from Eagle's Wings Foundation Tanzania, a non-profit in Tegeta, Dar es Salaam supporting people
                    with disabilities, older people and their families. <Link to="/about" className="font-medium text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-2">About the Foundation</Link>
                  </p>
                </div>
              </section>

              {cta && (
                <section className="mt-6 bg-brand-navy p-8 text-white sm:p-10">
                  <div className="eyebrow text-brand-orange">Take the next step</div>
                  <h2 className="display-md mt-3 max-w-xl text-white">Turn understanding into everyday support.</h2>
                  <p className="mt-3 max-w-xl leading-7 text-on-navy">Learn how Eagle's Wings works in this area, ask a question, or get involved.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button label={cta.label} href={cta.to} />
                    <Button label="Ask a question" href="/contact" variant="light" />
                  </div>
                </section>
              )}

              {(prev || next) && (
                <nav aria-label="More in this topic" className="no-print mt-10 grid gap-4 sm:grid-cols-2">
                  {prev ? (
                    <Link to={`/blog/article-${prev.slug}`} className="border border-line bg-white p-5 hover:border-brand-navy">
                      <span className="mono-label text-subtle">← Previous in {article.cat}</span>
                      <span className="display-sm mt-2 block text-brand-deep">{prev.title}</span>
                    </Link>
                  ) : <span />}
                  {next ? (
                    <Link to={`/blog/article-${next.slug}`} className="border border-line bg-white p-5 text-right hover:border-brand-navy">
                      <span className="mono-label text-subtle">Next in {article.cat} →</span>
                      <span className="display-sm mt-2 block text-brand-deep">{next.title}</span>
                    </Link>
                  ) : <span />}
                </nav>
              )}
            </article>

            <aside className="no-print hidden lg:block">
              <div className="sticky top-28 space-y-10">
                <TableOfContents headings={article.headings} active={activeHeading} onNavigate={scrollTo} />
                <div>
                  <h2 className="mono-label border-b border-brand-deep pb-3 text-brand-deep">More in {article.cat}</h2>
                  <Link to={`/blog?category=${encodeURIComponent(article.cat)}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:text-brand-orange">
                    See all {article.cat} articles <Icon name="arrow-right" className="h-4 w-4 text-brand-orange" />
                  </Link>
                </div>
                <div>
                  <h2 className="mono-label border-b border-brand-deep pb-3 text-brand-deep">Questions?</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">Message the Foundation on WhatsApp or use the contact form.</p>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:text-brand-orange">
                    Chat on WhatsApp <Icon name="arrow-up-right" className="h-4 w-4 text-brand-orange" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section no-print border-t border-line bg-sand">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="eyebrow text-brand-orange">Keep reading</div>
            <h2 className="display-lg mt-3 text-brand-deep">Related articles</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((item) => <RelatedCard key={item.slug} item={item} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
