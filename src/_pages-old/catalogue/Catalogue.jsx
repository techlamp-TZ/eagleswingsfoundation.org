import { Fragment } from 'react'
import { useSearchParams } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import { SITE, absoluteUrl } from '../../config/site.js'
import { catalogueCategories, catalogueItems, supplier } from '../../data/catalogue.js'
import { useSeo } from '../../utils/useSeo.js'

// Equipment catalogue: category, search, sort and page live in the URL
// (?category=, ?q=, ?sort=, ?page=) so any view can be shared. There is no
// checkout; each product opens a pre-filled WhatsApp message to the supplier,
// who sells and delivers the equipment.

const categoryIcons = { cognitive: 'puzzle', sensory: 'sparkles', speech: 'messages-square', motor: 'activity' }
const categoryName = Object.fromEntries(catalogueCategories.map((c) => [c.id, c.name]))
// One line per category, naming items that are in the catalogue.
const categoryText = {
  cognitive: 'Puzzles, peg boards, memory games and pencil grips.',
  sensory: 'Gym balls, weighted blankets, sensory mats, swings and lights.',
  speech: 'Flashcards, spelling games and magnetic word sets.',
  motor: 'Standing frames, parallel bars, resistance bands and treatment tables.',
}
const categoryCards = catalogueCategories.map((c) => {
  const items = catalogueItems.filter((it) => it.category === c.id)
  return { ...c, count: items.length, image: items.find((it) => it.image && !it.photoNote)?.image }
})

const PAGE_SIZE = 12
const GUIDE_AFTER = 8

const DESCRIPTION =
  'Therapy and sensory equipment catalogue (July 2026): cognitive and fine-motor tools, sensory equipment, speech therapy and motor-function equipment, with delivery across Tanzania.'

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${absoluteUrl('/catalogue')}#page`,
      url: absoluteUrl('/catalogue'),
      name: `Equipment Catalogue | ${SITE.name}`,
      description: DESCRIPTION,
      inLanguage: 'en',
      isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    },
    {
      '@type': 'ItemList',
      numberOfItems: catalogueItems.length,
      itemListElement: catalogueItems.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.detail ? `${it.name} (${it.detail})` : it.name,
      })),
    },
  ],
}

const money = (n) => `TZS ${n.toLocaleString('en-US')}`
const priceLabel = (it) => {
  const prices = it.variants.map((v) => v.price)
  return it.variants.length > 1 ? `From ${money(Math.min(...prices))}` : money(prices[0])
}
const minPrice = (it) => Math.min(...it.variants.map((v) => v.price))
const orderLink = (message) => `${supplier.whatsapp}?text=${encodeURIComponent(message)}`

const sorters = {
  catalogue: null,
  'price-asc': (a, b) => minPrice(a) - minPrice(b),
  'price-desc': (a, b) => minPrice(b) - minPrice(a),
  name: (a, b) => a.name.localeCompare(b.name),
}

const strip = [
  ['users-round', 'Ask before', 'you order'],
  ['package', 'Availability confirmed', 'on enquiry'],
  ['school', 'For home, school', 'and clinic'],
  ['map-pin', 'Delivery all over', 'Tanzania'],
]

const steps = [
  ['search', 'Explore and shortlist', 'Browse the catalogue and choose items that may be helpful.'],
  ['file-text', 'Tell the supplier what you need', `Each item opens a ready-made WhatsApp message to ${supplier.name}.`],
  ['message-circle', 'Confirm suitability, availability and price', `${supplier.name} confirms what is in stock and the current price.`],
  ['truck', 'Delivery is arranged', `${supplier.name} sells and delivers the equipment, all over Tanzania.`],
]

const care = [
  ['user-round', 'Person-centred choice', 'Respect individual strengths, needs and preferences.'],
  ['shield-check', 'Safe and age-appropriate use', 'Consider age, size, ability and the environment.'],
  ['book-open', 'Clear instructions and supervision', 'Use equipment as intended, with appropriate support.'],
  ['heart', 'Privacy and consent', 'Protect the dignity and privacy of each learner.'],
]

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
const eyebrow = 'text-xs font-bold uppercase tracking-[0.14em] text-brand-orange-ink'
const pageBtn = 'tabular grid h-11 min-w-11 place-items-center rounded border px-3 text-[0.9375rem] font-medium'

function ProductCard({ item }) {
  const title = item.detail ? `${item.name} (${item.detail})` : item.name
  return (
    <article className="flex h-full flex-col overflow-hidden rounded border border-line bg-surface">
      <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-white">
        {item.image ? (
          <img src={item.image} alt={title} className={item.photoNote ? 'absolute inset-0 h-full w-full object-cover' : 'absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] object-contain'} loading="lazy" decoding="async" />
        ) : (
          <div aria-hidden="true" className="grid h-20 w-20 place-items-center rounded bg-sand">
            <Icon name={categoryIcons[item.category] || 'package'} className="h-9 w-9 text-brand-orange-ink" />
          </div>
        )}
      </div>
      {item.photoNote && (
        <p className="border-t border-line bg-sand px-4 py-2 text-xs leading-5 text-muted">
          Photo for illustration. The exact model and colour may differ; confirm with the supplier when ordering.
        </p>
      )}
      <div className="flex flex-1 flex-col border-t border-line p-4">
        <p className={`${eyebrow} text-[0.6875rem]`}>{categoryName[item.category]}</p>
        <h3 className="mt-1.5 font-display text-[1.0625rem] leading-snug text-brand-deep">{item.name}</h3>
        {item.detail && <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>}
        <p className="tabular mt-3 font-semibold text-brand-deep">{priceLabel(item)}</p>
        {item.variants.length === 1 ? (
          item.variants[0].qty !== 'Each' && <p className="mt-1 text-sm text-muted">{item.variants[0].qty}</p>
        ) : (
          <details className="group mt-2 border-y border-line text-sm">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between font-semibold text-brand-navy">
              View {item.variants.length} options
              <Icon name="chevron-down" className="h-4 w-4 text-brand-orange-ink transition-transform group-open:rotate-180" />
            </summary>
            <ul className="divide-y divide-line border-t border-line">
              {item.variants.map((v) => (
                <li key={v.qty} className="flex items-baseline justify-between gap-4 py-2">
                  <span className="text-muted">{v.qty}</span>
                  <span className="tabular font-semibold text-brand-deep">{money(v.price)}</span>
                </li>
              ))}
            </ul>
          </details>
        )}
        <div className="flex-1" />
        <p className="mt-4 flex items-center gap-2 rounded bg-[#fdebd3] px-3 py-2 text-[0.8125rem] font-medium text-brand-deep">
          <Icon name="info" className="h-4 w-4 shrink-0 text-brand-orange-ink" /> Availability on enquiry
        </p>
        <a
          href={orderLink(`Hello ${supplier.name}, I would like to order: ${title}. Listed price: ${priceLabel(item)}. Please confirm availability.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ask about ${title} on WhatsApp`}
          className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded border-2 border-brand-orange bg-surface px-4 text-[0.9375rem] font-semibold text-brand-deep transition-colors hover:bg-brand-orange"
        >
          <Icon name="whatsapp" className="h-4 w-4" /> Ask about this item
        </a>
        <p className="mt-2 text-center text-xs text-subtle">Sold and fulfilled by {supplier.name}</p>
      </div>
    </article>
  )
}

export default function Catalogue() {
  const [params, setParams] = useSearchParams()
  const category = categoryName[params.get('category')] ? params.get('category') : 'all'
  const query = params.get('q') || ''
  const sort = sorters[params.get('sort')] !== undefined ? params.get('sort') : 'catalogue'
  const page = Math.max(1, Number(params.get('page')) || 1)

  useSeo({ title: 'Equipment Catalogue', description: DESCRIPTION, path: '/catalogue', jsonLd: JSON_LD })

  // Changing a filter returns to page 1.
  const update = (changes) => {
    const next = new URLSearchParams(params)
    Object.entries(changes).forEach(([k, v]) => (v && v !== 'all' && v !== 'catalogue' ? next.set(k, v) : next.delete(k)))
    if (!('page' in changes)) next.delete('page')
    setParams(next, { replace: true })
  }

  const q = query.trim().toLowerCase()
  let rows = catalogueItems.filter(
    (it) => (category === 'all' || it.category === category) && (!q || `${it.name} ${it.detail || ''} ${categoryName[it.category]}`.toLowerCase().includes(q)),
  )
  if (sorters[sort]) rows = [...rows].sort(sorters[sort])
  const filtered = category !== 'all' || q || sort !== 'catalogue'
  const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE))
  const currentPage = Math.min(page, pages)
  const list = rows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const goToPage = (p) => {
    update({ page: p > 1 ? String(p) : '' })
    document.getElementById('catalogue-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const showCategory = (id) => {
    update({ category: id })
    document.getElementById('catalogue-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-sand-warm">
        <div className="mx-auto grid max-w-[96rem] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-16 lg:pl-8 lg:pr-12 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <p className={eyebrow}>Equipment catalogue · {supplier.edition}</p>
            <h1 className="display-xl mt-3 max-w-[20ch] text-brand-deep">Therapy and sensory equipment for home, school and clinic.</h1>
            <p className="mt-5 max-w-[34rem] text-lg leading-8 text-muted">
              Learning tools, sensory equipment, speech therapy and motor-function equipment from {supplier.name}, with delivery available all over
              Tanzania.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button label="Browse equipment" href="#catalogue-grid" />
              <Button label="Ask for guidance" href="/contact" variant="outline" icon={null} />
            </div>
          </div>
          <div className="relative min-h-[260px] lg:min-h-[400px]">
            <img
              src="/catalogue-img/sensory-room-active.webp"
              alt="A sensory room with a swing, balance equipment and a trampoline (illustration)"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute bottom-3 right-3 rounded bg-brand-deep px-2.5 py-1 text-xs text-white">Illustrative concept image</span>
          </div>
        </div>
      </section>

      {/* Strip */}
      <section className="bg-[#e6f1fb]">
        <ul className={`${wrap} grid grid-cols-2 gap-y-4 py-5 lg:grid-cols-4 lg:divide-x lg:divide-[#c9dcee]`}>
          {strip.map(([icon, a, b]) => (
            <li key={a} className="flex items-center gap-3 lg:justify-center lg:px-4">
              <Icon name={icon} className="h-8 w-8 shrink-0 text-brand-navy" />
              <span className="text-[0.9375rem] font-medium leading-snug text-brand-deep">
                {a} <span className="sm:block">{b}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section className="bg-paper pt-12 md:pt-14">
        <div className={wrap}>
          <h2 className="display-lg text-brand-deep">Shop by support need</h2>
          <p className="mt-2 text-[1.0625rem] leading-8 text-muted">Find equipment by the area you want to support. The catalogue has four categories.</p>
          <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {categoryCards.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => showCategory(c.id)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded border border-line bg-surface text-left transition-colors hover:border-brand-navy"
                >
                  <span className="relative block aspect-[16/10] w-full overflow-hidden bg-white">
                    <img src={c.image} alt="" loading="lazy" decoding="async" className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-contain" />
                  </span>
                  <span className="flex flex-1 flex-col border-t border-line p-4">
                    <Icon name={categoryIcons[c.id]} className="h-7 w-7 text-brand-orange-ink" />
                    <span className="mt-3 font-display text-[1.0625rem] leading-snug text-brand-deep">{c.name}</span>
                    <span className="mt-1 flex-1 text-sm leading-6 text-muted">{categoryText[c.id]}</span>
                    <span className="mt-3 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-orange-ink">
                      Explore {c.count} items <Icon name="arrow-right" className="h-4 w-4" />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Catalogue */}
      <section id="catalogue-grid" className="scroll-mt-24 bg-paper py-12 md:py-14">
        <div className={wrap}>
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <h2 className="display-lg text-brand-deep">{filtered ? 'Equipment' : 'Featured equipment'}</h2>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9375rem] text-muted" aria-live="polite">
              <span>
                {rows.length} {rows.length === 1 ? 'item' : 'items'}
                {category !== 'all' ? ` in ${categoryName[category]}` : ''}
                {q ? ` matching “${query}”` : ''} · prices in TZS
              </span>
              {filtered && (
                <button type="button" onClick={() => setParams({}, { replace: true })} className="inline-flex min-h-11 items-center gap-1 font-semibold text-brand-navy underline underline-offset-4">
                  <Icon name="x" className="h-4 w-4" /> Clear filters
                </button>
              )}
            </p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-[minmax(0,1fr)_15rem_15rem]">
            <div className="relative">
              <label htmlFor="cat-search" className="sr-only">
                Search the catalogue
              </label>
              <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-subtle" />
              <input
                id="cat-search"
                type="search"
                value={query}
                onChange={(e) => update({ q: e.target.value })}
                className="field h-12 text-base"
                style={{ paddingLeft: '3rem' }}
                placeholder="Search equipment, e.g. trampoline, puzzle"
              />
            </div>
            <div>
              <label htmlFor="cat-category" className="sr-only">
                Category
              </label>
              <select id="cat-category" value={category} onChange={(e) => update({ category: e.target.value })} className="field h-12">
                <option value="all">All categories</option>
                {categoryCards.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.count})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="cat-sort" className="sr-only">
                Sort by
              </label>
              <select id="cat-sort" value={sort} onChange={(e) => update({ sort: e.target.value })} className="field h-12">
                <option value="catalogue">Sort by: catalogue order</option>
                <option value="price-asc">Price (low to high)</option>
                <option value="price-desc">Price (high to low)</option>
                <option value="name">Alphabetical (A to Z)</option>
              </select>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted">
            Catalogue prepared by {supplier.name}. Orders are placed directly with {supplier.name}. Prices are those listed in the {supplier.edition}{' '}
            catalogue.
          </p>

          {list.length ? (
            <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((it, i) => (
                <Fragment key={it.id}>
                  {i === GUIDE_AFTER && (
                    <aside className="col-span-full flex flex-col gap-5 rounded bg-[#d9e9f8] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-center gap-4">
                        <Icon name="users-round" className="hidden h-10 w-10 shrink-0 text-brand-navy sm:block" />
                        <div>
                          <h3 className="font-display text-xl text-brand-deep">Not sure what will help?</h3>
                          <p className="mt-1 max-w-[62ch] text-[0.9375rem] leading-6 text-brand-deep">
                            Tell us about the learner, environment and goal. Our team can help you prepare the right questions for a qualified professional
                            or supplier.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button label="Request guidance" href="/contact" icon={null} />
                        <Button label="How ordering works" href="#how" variant="outline" icon={null} />
                      </div>
                    </aside>
                  )}
                  <ProductCard item={it} />
                </Fragment>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded border border-dashed border-line-strong bg-sand p-10 text-center">
              <Icon name="search-x" className="mx-auto h-6 w-6 text-brand-orange-ink" />
              <h3 className="display-sm mt-4 text-brand-deep">No matching items</h3>
              <p className="mt-2 text-sm text-muted">Try another word or category, or ask us on WhatsApp if you need something specific.</p>
            </div>
          )}

          {pages > 1 && (
            <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className={`${pageBtn} border-line bg-surface text-brand-deep hover:border-brand-navy disabled:cursor-not-allowed disabled:text-subtle disabled:hover:border-line`}
              >
                <Icon name="chevron-left" className="h-4 w-4" />
              </button>
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToPage(i + 1)}
                  aria-current={currentPage === i + 1 ? 'page' : undefined}
                  aria-label={`Page ${i + 1}`}
                  className={`${pageBtn} ${currentPage === i + 1 ? 'border-brand-orange bg-brand-orange text-brand-deep' : 'border-line bg-surface text-brand-deep hover:border-brand-navy'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pages}
                aria-label="Next page"
                className={`${pageBtn} border-line bg-surface text-brand-deep hover:border-brand-navy disabled:cursor-not-allowed disabled:text-subtle disabled:hover:border-line`}
              >
                <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* How ordering works */}
      <section id="how" className="scroll-mt-28 bg-paper pb-12 md:pb-14">
        <div className={wrap}>
          <h2 className="display-md text-brand-deep">How equipment enquiries work</h2>
          <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(([icon, title, text], i) => (
              <li key={title} className="relative flex gap-4">
                <span className="tabular grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-orange text-sm font-bold text-brand-deep" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="lg:pr-6">
                  <Icon name={icon} className="h-8 w-8 text-brand-navy" />
                  <h3 className="mt-3 font-display text-[1.0625rem] leading-snug text-brand-deep">{title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-6 text-muted">{text}</p>
                </div>
                {i < steps.length - 1 && <Icon name="arrow-right" className="absolute right-0 top-2.5 hidden h-5 w-5 text-subtle lg:block" />}
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-4 rounded border border-line bg-surface p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[60ch] text-[0.9375rem] leading-7 text-muted">
              <strong className="font-semibold text-brand-deep">Order through {supplier.name}.</strong> Please confirm availability and the current price when
              you order. Karibu sana. Instagram:{' '}
              <a href={supplier.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy underline underline-offset-2">
                {supplier.instagramHandle}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <Button label="Order on WhatsApp" href={supplier.whatsapp} icon="whatsapp" />
              <Button label={`Call ${supplier.phoneDisplay}`} href={`tel:${supplier.phone}`} variant="outline" icon="phone" />
            </div>
          </div>

          <p className="mt-5 flex gap-4 rounded bg-[#fdebd3] p-5 text-[0.9375rem] leading-7 text-brand-deep">
            <Icon name="shield-check" className="mt-0.5 h-6 w-6 shrink-0 text-brand-orange-ink" />
            <span>
              <strong className="font-semibold">Important:</strong> this catalogue is for information and does not replace assessment or advice from a
              qualified therapist, healthcare professional or specialist. We recommend seeking professional guidance to make sure equipment is suitable,
              safe and appropriate for each individual.
            </span>
          </p>
        </div>
      </section>

      {/* Care */}
      <section className="bg-sand-warm py-12 md:py-14">
        <div className={wrap}>
          <h2 className="display-md text-brand-deep">Choose equipment with dignity and care.</h2>
          <p className="mt-2 text-[1.0625rem] leading-8 text-muted">The right tools can open up learning, independence and participation. Four things to keep in mind:</p>
          <ul className="mt-6 grid gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line-strong">
            {care.map(([icon, title, text]) => (
              <li key={title} className="flex gap-4 sm:pr-6 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <Icon name={icon} className="h-8 w-8 shrink-0 text-brand-orange-ink" />
                <div>
                  <h3 className="font-display text-base text-brand-deep">{title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-6 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Room design */}
      <section className="bg-paper py-12 md:py-14">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16`}>
          <div>
            <p className={eyebrow}>Designs &amp; setups</p>
            <h2 className="display-lg mt-2 text-brand-deep">Sensory rooms and therapy rooms, designed for you.</h2>
            <div className="mt-5 space-y-4 text-[1.0625rem] leading-8 text-muted">
              <p>
                {supplier.name} designs sensory rooms tailored to your needs, from simple setups to more sophisticated environments depending on your
                preference and budget.
              </p>
              <p>
                They also design functional and calming therapy rooms that support effective treatment and a welcoming experience. Each space is
                customized based on your professional needs, client base and available space.
              </p>
            </div>
            <div className="mt-7">
              <Button
                label="Ask about a room design"
                href={orderLink(`Hello ${supplier.name}, I would like to ask about a sensory room or therapy room design.`)}
                icon="whatsapp"
              />
            </div>
          </div>
          <div>
            <img
              src="/catalogue-img/sensory-room-play.webp"
              alt="Children playing in a sensory room with a swing, trampoline and balance discs (illustration)"
              className="aspect-[4/3] w-full rounded object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                ['sensory-room-calm', 'A calm sensory room with soft lighting, a gym ball and floor mats'],
                ['therapy-room', 'A therapy room with a table, a trampoline and balance boards'],
                ['sensory-room-active', 'A sensory room with a swing, trampoline and balance equipment'],
              ].map(([name, alt]) => (
                <img key={name} src={`/catalogue-img/${name}.webp`} alt={alt} className="aspect-square w-full rounded object-cover" loading="lazy" decoding="async" />
              ))}
            </div>
            <p className="mt-3 text-sm text-muted">Illustrative concept images</p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="-mb-20 bg-[#e6f1fb]">
        <div className={`${wrap} flex flex-col gap-5 py-9 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="flex items-center gap-4">
            <Icon name="message-circle" className="hidden h-10 w-10 shrink-0 text-brand-navy sm:block" />
            <div>
              <h2 className="display-md text-brand-deep">Need help finding the right starting point?</h2>
              <p className="mt-1 text-[0.9375rem] leading-7 text-muted">Talk to our team about your learner’s needs, or explore our support programs.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button label="Talk to our team" href="/contact" icon={null} />
            <Button label="Browse support programs" href="/programs" variant="outline" icon={null} />
          </div>
        </div>
      </section>
    </>
  )
}
