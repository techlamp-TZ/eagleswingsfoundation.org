import { Link } from 'react-router-dom'
import Icon from '../../../components/ui/Icon.jsx'
import { programDetails } from '../../../data/programDetails.js'

// Small editorial building blocks shared by the three program-detail variants.

export function DetailHero({ kicker, title, crumbs }) {
  return (
    <section className="surface-light border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">
        <nav aria-label="Breadcrumb" className="mono-label text-subtle">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {crumbs.map(([label, to], i) => (
              <li key={label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {to ? (
                  <Link to={to} className="underline-offset-4 hover:text-brand-navy hover:underline">
                    {label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-brand-deep">
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {kicker && <p className="eyebrow mt-8 text-brand-orange">{kicker}</p>}
        <h1 className="display-xl mt-3 max-w-4xl text-brand-deep">{title}</h1>
      </div>
    </section>
  )
}

export function Block({ title, children, className = '' }) {
  return (
    <div className={`border-t border-line py-6 first:border-t-0 first:pt-0 ${className}`}>
      {title && <div className="mono-label mb-4 text-brand-orange">{title}</div>}
      {children}
    </div>
  )
}

export function ProgramList({ ids, activeId }) {
  return (
    <ul className="border-t border-line">
      {ids.map((id) => (
        <li key={id} className="border-b border-line">
          <Link
            to={`/programs/${id}`}
            aria-current={id === activeId ? 'page' : undefined}
            className={`flex items-center justify-between gap-3 py-3 text-sm font-medium ${id === activeId ? 'text-brand-orange' : 'text-brand-deep hover:text-brand-orange'}`}
          >
            {programDetails[id].title}
            <Icon name="arrow-up-right" className="h-4 w-4 shrink-0" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function SearchBox({ value, onChange }) {
  return (
    <div className="relative">
      <input name="q" autoComplete="off" spellCheck={false} value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search programs…" aria-label="Search programs" className="field pr-10" />
      <Icon name="search" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
    </div>
  )
}

export function Checks({ items }) {
  return (
    <ul className="grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 border-b border-line py-5 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0">
          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
          <span className="text-sm font-medium leading-6 text-brand-deep">{t}</span>
        </li>
      ))}
    </ul>
  )
}

export function Steps({ items, dark = false }) {
  const line = dark ? 'border-navy-line' : 'border-line'
  return (
    <ol className={`border-t ${line}`}>
      {items.map((t, i) => (
        <li key={t} className={`grid grid-cols-[3rem_1fr] gap-2 border-b py-5 ${line}`}>
          <span className="mono-label pt-1 text-brand-orange">{String(i + 1).padStart(2, '0')}</span>
          <p className={`leading-7 ${dark ? 'text-on-navy' : 'text-muted'}`}>{t}</p>
        </li>
      ))}
    </ol>
  )
}

export function RelatedGrid({ ids }) {
  return (
    <div className="grid border-t border-line md:grid-cols-3 md:divide-x md:divide-line">
      {ids.map((rid) => {
        const r = programDetails[rid]
        return (
          <Link key={rid} to={`/programs/${rid}`} className="group block border-b border-line py-6 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
            <Icon name={r.icon} className="h-5 w-5 text-brand-orange" />
            <div className="mono-label mt-4 text-subtle">{r.tag}</div>
            <h4 className="display-sm mt-2 text-brand-deep group-hover:text-brand-orange">{r.title}</h4>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep">
              View program <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-brand-orange" />
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export function Flat({ src, alt, className = 'h-64' }) {
  return <img src={src} alt={alt} className={`w-full object-cover ${className}`} />
}
