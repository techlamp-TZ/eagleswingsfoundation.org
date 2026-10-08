import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { photos } from '../../data/photos.js'

// Editorial building blocks shared by the four Support Areas variants.

export function CausesHero() {
  return (
    <section className="border-y border-line relative isolate overflow-hidden bg-sand text-brand-deep">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="eyebrow text-brand-orange">Programs you can support</div>
        <h1 className="display-xl mt-5 text-brand-deep">Support Areas</h1>
        <nav aria-label="Breadcrumb" className="mono-label mt-8 text-subtle">
          <Link to="/" className="hover:text-brand-deep">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-muted">Support Areas</span>
        </nav>
      </div>
    </section>
  )
}

export function FilterTabs({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 overflow-x-auto" role="group" aria-label="Filter support areas">
      {options.map((x) => {
        const key = x.toLowerCase()
        const active = value === key
        return (
          <button
            key={x}
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={active}
            className={`mono-label whitespace-nowrap rounded border px-4 py-2.5 transition-colors ${active ? 'border-brand-navy bg-brand-navy text-white' : 'border-line bg-white text-muted hover:border-brand-navy'}`}
          >
            {x}
          </button>
        )
      })}
    </div>
  )
}

export function SearchField({ id, value, onChange, placeholder = 'Search support areas' }) {
  return (
    <div>
      <label htmlFor={id} className="mono-label text-subtle">Search support areas</label>
      <div className="relative mt-2">
        <input id={id} name="q" autoComplete="off" spellCheck={false} className="field pr-10" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        <Icon name="search" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
      </div>
    </div>
  )
}

export function CauseCard({ c, detail = false }) {
  return (
    <article className="flex flex-col">
      <img src={c.img} alt={c.title} className="h-56 w-full object-cover" />
      <div className="flex flex-1 flex-col border-b border-line pb-6 pt-5">
        <div className="mono-label flex flex-wrap items-center gap-x-3 gap-y-1 text-brand-orange">
          <span className="inline-flex items-center gap-1.5">
            <Icon name={c.icon} className="h-3.5 w-3.5" />
            {c.tag}
          </span>
          <span className="text-subtle">{c.focus}</span>
        </div>
        <h2 className="display-sm mt-3 text-brand-deep">{c.title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{c.text}</p>
        {detail && c.support && (
          <p className="mt-4 border-t border-line pt-3 text-sm text-brand-deep">
            <span className="mono-label mr-2 text-subtle">Support can help with</span>
            {c.support}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-sm font-semibold">
          <Link to={`/programs/${c.route}`} className="inline-flex items-center gap-1 text-brand-deep hover:text-brand-orange">
            View details <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-brand-orange" />
          </Link>
          <Link to="/donate" aria-label={`Support ${c.title}`} className="inline-flex items-center gap-1 text-brand-orange hover:text-brand-deep">
            Support <Icon name="heart" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function CauseGrid({ items, detail, id, cols = 'md:grid-cols-2 xl:grid-cols-3' }) {
  return (
    <div id={id} className={`grid gap-x-8 gap-y-10 ${cols}`}>
      {items.map((c) => (
        <CauseCard key={c.title} c={c} detail={detail} />
      ))}
    </div>
  )
}

export function NoMatch({ hint }) {
  return (
    <div className="mt-10 border-y border-line py-12">
      <Icon name="search-x" className="h-5 w-5 text-brand-orange" />
      <h3 className="display-sm mt-4 text-brand-deep">No matching support area</h3>
      <p className="mt-2 text-sm text-muted">{hint}</p>
    </div>
  )
}

export function Pager({ page, pageCount, onGo }) {
  const sq = 'mono-label grid h-10 w-10 place-items-center border border-line bg-white text-muted transition-colors hover:border-brand-navy disabled:cursor-not-allowed disabled:opacity-40'
  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center gap-2">
      <button type="button" className={sq} onClick={() => onGo(page - 1)} disabled={page === 1} aria-label="Previous page">
        <Icon name="chevron-left" className="h-4 w-4" />
      </button>
      {Array.from({ length: pageCount }, (_, k) => k + 1).map((p) => (
        <button
          key={p}
          type="button"
          className={`${sq} ${p === page ? '!border-brand-navy !bg-brand-navy !text-white' : ''}`}
          onClick={() => onGo(p)}
          aria-current={p === page ? 'page' : undefined}
        >
          {p}
        </button>
      ))}
      <button type="button" className={sq} onClick={() => onGo(page + 1)} disabled={page === pageCount} aria-label="Next page">
        <Icon name="chevron-right" className="h-4 w-4" />
      </button>
    </nav>
  )
}

export function ImpactBand() {
  return (
    <section className="section bg-sand">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHead
            eyebrow="Impact & accountability"
            title="Stories of impact and hope, shared only when verified."
            text="Eagle's Wings will publish only consent-based stories and validated results once its monitoring and approval processes are ready."
          />
          <div className="mt-8 border-t border-line pt-6">
            <div className="flex items-start gap-4">
              <Icon name="quote" className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
              <div>
                <h3 className="display-sm text-brand-deep">Verified story library in preparation</h3>
                <p className="mt-3 text-sm leading-7 text-muted">Future stories will explain what changed, why it mattered, and how consent and evidence were handled.</p>
                <Link to="/impact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep">
                  View the impact framework <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-brand-orange" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src={photos.people} alt="Community and caregiver support" className="h-[360px] w-full object-cover lg:h-[440px]" />
      </div>
    </section>
  )
}

export function PlannedTopics({ planned }) {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Knowledge & updates" title="Read useful guidance on these topics." text="Practical, plain-language articles on these themes are in our News section." />
        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {planned.map(([tag, title, img]) => (
            <article key={title}>
              <img src={img} alt={title} className="h-44 w-full object-cover" />
              <div className="border-b border-line pb-5 pt-4">
                <div className="mono-label text-brand-orange">{tag}</div>
                <h3 className="display-sm mt-2 text-brand-deep">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Planned educational content will be published after Foundation review and approval.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="mono-label text-subtle">Planned topic</span>
                  <Link to="/resources" className="text-sm font-semibold text-brand-deep hover:text-brand-orange">Explore</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Button label="Browse the library" href="/resources" variant="dark" />
        </div>
      </div>
    </section>
  )
}

export function Partners({ items, to = '/partners', cols = 'lg:grid-cols-4' }) {
  return (
    <div className={`grid border-t border-line sm:grid-cols-2 ${cols}`}>
      {items.map(([i, t, d]) => (
        <Link key={t} to={to} className="group block border-b border-line py-6 sm:px-6 sm:first:pl-0 lg:border-l lg:first:border-l-0">
          <Icon name={i} className="h-5 w-5 text-brand-orange" />
          <h3 className="display-sm mt-4 text-brand-deep group-hover:text-brand-orange">{t}</h3>
          {d && <p className="mt-3 text-sm leading-6 text-muted">{d}</p>}
        </Link>
      ))}
    </div>
  )
}
