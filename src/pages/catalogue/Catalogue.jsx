import { useSearchParams } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import { SITE, absoluteUrl } from '../../config/site.js'
import { catalogueCategories, catalogueItems, supplier } from '../../data/catalogue.js'
import { useSeo } from '../../utils/useSeo.js'

// Equipment catalogue: category + search + sort filters live in the URL
// (?category=, ?q=, ?sort=) so any view can be shared. There is no checkout;
// each product opens a pre-filled WhatsApp message to the supplier.

const categoryIcons = { cognitive: 'puzzle', sensory: 'sparkles', speech: 'messages-square', motor: 'activity' }
const categoryName = Object.fromEntries(catalogueCategories.map((c) => [c.id, c.name]))

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

function ProductCard({ item }) {
  const title = item.detail ? `${item.name} (${item.detail})` : item.name
  return (
    <article className="flex flex-col border border-line bg-white [contain-intrinsic-size:auto_560px] [content-visibility:auto]">
      <div className={`grid aspect-square place-items-center border-b border-line bg-white ${item.photoNote ? '' : 'p-4'}`}>
        {item.image ? (
          <img src={item.image} alt={title} className={`h-full w-full ${item.photoNote ? 'object-cover' : 'object-contain'}`} loading="lazy" decoding="async" />
        ) : (
          <div aria-hidden="true" className="grid h-24 w-24 place-items-center border border-line bg-sand">
            <Icon name={categoryIcons[item.category] || 'package'} className="h-10 w-10 text-brand-orange" />
          </div>
        )}
      </div>
      {item.photoNote && (
        <p className="border-b border-line bg-sand px-5 py-2 text-xs leading-5 text-muted">
          Photo for illustration. The exact model and colour may differ; confirm with the supplier when ordering.
        </p>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="eyebrow text-brand-orange">{categoryName[item.category]}</div>
        <h3 className="mt-2 font-display text-xl leading-tight text-brand-deep">{item.name}</h3>
        {item.detail && <p className="mt-1 text-sm text-muted">{item.detail}</p>}
        <div className="mt-4 font-semibold tabular-nums text-brand-deep">{priceLabel(item)}</div>
        {item.variants.length === 1 ? (
          item.variants[0].qty !== 'Each' && <p className="mt-1 text-sm text-muted">{item.variants[0].qty}</p>
        ) : (
          <details className="group mt-3 border-y border-line text-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 font-semibold text-brand-navy">
              View {item.variants.length} options
              <Icon name="chevron-down" className="h-4 w-4 text-brand-orange transition-transform group-open:rotate-180" />
            </summary>
            <ul className="divide-y divide-line border-t border-line">
              {item.variants.map((v) => (
                <li key={v.qty} className="flex items-baseline justify-between gap-4 py-2">
                  <span className="text-muted">{v.qty}</span>
                  <span className="font-semibold tabular-nums text-brand-deep">{money(v.price)}</span>
                </li>
              ))}
            </ul>
          </details>
        )}
        <div className="flex-1" />
        <a
          href={orderLink(`Hello ${supplier.name}, I would like to order: ${title}. Listed price: ${priceLabel(item)}. Please confirm availability.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded bg-brand-orange px-4 py-2.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark"
        >
          <Icon name="whatsapp" className="h-4 w-4" /> Order on WhatsApp
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

  useSeo({ title: 'Equipment Catalogue', description: DESCRIPTION, path: '/catalogue', jsonLd: JSON_LD })

  const update = (changes) => {
    const next = new URLSearchParams(params)
    Object.entries(changes).forEach(([k, v]) => (v && v !== 'all' && v !== 'catalogue' ? next.set(k, v) : next.delete(k)))
    setParams(next, { replace: true })
  }

  const q = query.trim().toLowerCase()
  let rows = catalogueItems.filter(
    (it) => (category === 'all' || it.category === category) && (!q || `${it.name} ${it.detail || ''} ${categoryName[it.category]}`.toLowerCase().includes(q)),
  )
  if (sorters[sort]) rows = [...rows].sort(sorters[sort])
  const filtered = category !== 'all' || q || sort !== 'catalogue'

  return (
    <>
      <PageHero
        kicker={`Equipment catalogue · ${supplier.edition}`}
        title="Therapy and sensory equipment for home, school and clinic."
        text={`Learning tools, sensory equipment, speech therapy and motor-function equipment from ${supplier.name}, with delivery available all over Tanzania.`}
        img="/catalogue-img/sensory-room-active.webp"
        alt="A sensory room with a swing, balance equipment and a trampoline (illustration)"
        actions={
          <>
            <Button label="Browse the catalogue" href="#catalogue-grid" icon="arrow-down" />
            <Button label="Order on WhatsApp" href={supplier.whatsapp} variant="light" icon="whatsapp" />
          </>
        }
      />

      <section className="section">
        <div id="catalogue-grid" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="eyebrow text-brand-orange">The catalogue</div>
              <h2 className="display-lg mt-3 text-brand-deep">{catalogueItems.length} items across four categories.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Catalogue prepared by {supplier.name}. Orders are placed directly with {supplier.name}. All prices are in Tanzanian shillings (TZS).
            </p>
          </div>

          <div className="z-30 -mx-4 mt-6 border-b border-line bg-paper px-4 py-4 sm:-mx-6 sm:px-6 lg:sticky lg:top-[5.7rem] lg:-mx-8 lg:px-8">
            <div className="grid gap-3 sm:grid-cols-[1fr_14rem]">
              <div>
                <label htmlFor="cat-search" className="mono-label text-brand-deep">
                  Search the catalogue
                </label>
                <div className="relative mt-2">
                  <input
                    id="cat-search"
                    value={query}
                    onChange={(e) => update({ q: e.target.value })}
                    className="field h-12 pr-12 text-base"
                    placeholder="e.g. trampoline, weighted blanket, puzzle"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-subtle">
                    <Icon name="search" className="h-5 w-5" />
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="cat-sort" className="mono-label text-brand-deep">
                  Sort by
                </label>
                <select id="cat-sort" value={sort} onChange={(e) => update({ sort: e.target.value })} className="field mt-2 h-12">
                  <option value="catalogue">Featured</option>
                  <option value="price-asc">Price (low to high)</option>
                  <option value="price-desc">Price (high to low)</option>
                  <option value="name">Alphabetical (A to Z)</option>
                </select>
              </div>
            </div>
            <div role="group" aria-label="Filter by category" className="mt-4 flex flex-wrap gap-2">
              {[{ id: 'all', name: 'All items' }, ...catalogueCategories].map((c) => {
                const count = c.id === 'all' ? catalogueItems.length : catalogueItems.filter((it) => it.category === c.id).length
                const on = category === c.id
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => update({ category: c.id })}
                    aria-pressed={on}
                    className={`mono-label border px-4 py-2.5 ${on ? 'border-brand-navy bg-brand-navy text-white' : 'border-line bg-white text-brand-ink hover:border-brand-navy'}`}
                  >
                    {c.name} · {count}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mono-label mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted" aria-live="polite">
            <span>
              {rows.length} {rows.length === 1 ? 'item' : 'items'}
              {category !== 'all' ? ` in ${categoryName[category]}` : ''}
              {q ? ` matching “${query}”` : ''} · prices in TZS
            </span>
            {filtered && (
              <button type="button" onClick={() => setParams({}, { replace: true })} className="inline-flex items-center gap-1 text-brand-orange hover:text-brand-navy">
                <Icon name="x" className="h-3.5 w-3.5" /> Clear filters
              </button>
            )}
          </div>

          {rows.length ? (
            <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rows.map((it) => (
                <ProductCard key={it.id} item={it} />
              ))}
            </div>
          ) : (
            <div className="mt-6 border border-dashed border-line bg-sand p-10 text-center">
              <Icon name="search-x" className="mx-auto h-6 w-6 text-brand-orange" />
              <h3 className="display-sm mt-4 text-brand-deep">No matching items</h3>
              <p className="mt-2 text-sm text-muted">Try another word or category, or ask us on WhatsApp if you need something specific.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-sand">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <div className="eyebrow text-brand-orange">Designs &amp; setups</div>
            <h2 className="display-lg mt-3 text-brand-deep">Sensory rooms and therapy rooms, designed for you.</h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>
                {supplier.name} designs sensory rooms tailored to your needs, from simple setups to more sophisticated environments depending on your
                preference and budget.
              </p>
              <p>
                They also design functional and calming therapy rooms that support effective treatment and a welcoming experience. Each space is
                customized based on your professional needs, client base and available space.
              </p>
            </div>
            <div className="mt-8">
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
              className="aspect-[4/3] w-full border border-line object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                ['sensory-room-calm', 'A calm sensory room with soft lighting, a gym ball and floor mats'],
                ['therapy-room', 'A therapy room with a table, a trampoline and balance boards'],
                ['sensory-room-active', 'A sensory room with a swing, trampoline and balance equipment'],
              ].map(([name, alt]) => (
                <img key={name} src={`/catalogue-img/${name}.webp`} alt={alt} className="aspect-square w-full border border-line object-cover" loading="lazy" decoding="async" />
              ))}
            </div>
            <p className="mono-label mt-3 text-muted">Illustrative concept images</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line section bg-sand text-brand-deep">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <div className="eyebrow text-brand-orange">How to order</div>
            <h2 className="display-lg mt-3 text-brand-deep">Order through {supplier.name}.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              Delivery is available all over Tanzania. Karibu sana. Please confirm availability and the current price when you order, as the prices shown
              are those listed in the {supplier.edition} catalogue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Order on WhatsApp" href={supplier.whatsapp} icon="whatsapp" />
              <Button label={`Call ${supplier.phoneDisplay}`} href={`tel:${supplier.phone}`} variant="light" icon="phone" />
            </div>
          </div>
          <ul className="divide-y divide-navy-line border-y border-line">
            <li className="flex items-center justify-between gap-4 py-4">
              <span className="mono-label text-muted">Phone</span>
              <a href={`tel:${supplier.phone}`} className="font-semibold text-brand-deep hover:text-brand-orange">
                {supplier.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center justify-between gap-4 py-4">
              <span className="mono-label text-muted">Instagram</span>
              <a href={supplier.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-deep hover:text-brand-orange">
                {supplier.instagramHandle}
              </a>
            </li>
            <li className="flex items-center justify-between gap-4 py-4">
              <span className="mono-label text-muted">Delivery</span>
              <span className="font-semibold text-brand-deep">All over Tanzania</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
