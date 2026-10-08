import { Link } from 'react-router-dom'
import Icon from '../../../components/ui/Icon.jsx'
import SectionHead from '../../../components/ui/SectionHead.jsx'
import PageHero from '../../../components/ui/PageHero.jsx'
import { photos } from '../../../data/photos.js'
import { eventDetails, eventRouteIds, programLinkFor } from '../../../data/eventDetails.js'
import { usePageTitle } from '../../../utils/usePageTitle.js'

const WHY_THIS_MATTERS = [
  ['book-open-check', 'Learning should be practical and understandable.'],
  ['shield-check', 'Safeguarding, dignity and privacy guide participation.'],
  ['users-round', 'Families, caregivers and communities are part of the learning process.'],
  ['arrow-up-right', 'Clinical or individualized needs should be referred to qualified professionals.'],
]

export default function EventDetailV2({ item: e }) {
  usePageTitle(e.title)
  const related = eventRouteIds.filter((id) => id !== e.id).slice(0, 3)

  return (
    <>
      <PageHero kicker="Planned event format" title={e.title} text="Home · Events · Event Details" img={photos.people} />

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <img src={e.img} className="h-[320px] w-full object-cover sm:h-[500px]" alt={e.title} />

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <article className="min-w-0">
              <div className="mono-label flex flex-wrap items-center gap-3">
                <span className="text-brand-orange">{e.tag}</span>
                <span className="bg-brand-navy px-3 py-1.5 text-white">Planned</span>
              </div>
              <h2 className="display-lg mt-5 text-brand-deep">{e.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted">{e.intro}</p>

              <section className="mt-12">
                <h3 className="display-md text-brand-deep">Event mission</h3>
                <p className="mt-4 text-base leading-8 text-muted">{e.summary}</p>
                <p className="mt-4 text-base leading-8 text-muted">We will announce the date, venue and how to take part as soon as they are confirmed. Until then, this page describes the planned format.</p>
              </section>

              <section className="mt-10 grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
                <img src={photos.family} className="h-64 w-full object-cover" alt="Community learning" />
                <div>
                  <div className="eyebrow text-brand-orange">What participants can expect</div>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {e.highlights.map((t) => (
                      <li key={t} className="flex items-start gap-3 py-3 text-sm font-semibold text-brand-deep">
                        <Icon name="circle-check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mt-12">
                <h3 className="display-md text-brand-deep">Planned session flow</h3>
                <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
                  {e.agenda.map((x, i) => (
                    <div key={x} className="bg-paper p-5">
                      <div className="mono-label text-brand-orange">Step {String(i + 1).padStart(2, '0')}</div>
                      <div className="display-sm mt-2 text-brand-deep">{x}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12">
                <h3 className="display-md text-brand-deep">Why this event matters</h3>
                <p className="mt-4 text-base leading-8 text-muted">Eagle's Wings uses events as a practical bridge between awareness and action. Depending on the format, events can help families understand support options, strengthen caregiver knowledge, encourage inclusion, introduce volunteer roles and connect prospective partners to the Foundation's work.</p>
                <ul className="mt-6 divide-y divide-line border-y border-line bg-sand">
                  {WHY_THIS_MATTERS.map(([ic, t]) => (
                    <li key={t} className="flex items-start gap-3 px-4 py-4 text-sm font-semibold text-brand-deep">
                      <Icon name={ic} className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-12 bg-brand-navy p-6 text-white sm:p-8">
                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <div className="eyebrow text-brand-orange">Stay informed</div>
                    <h3 className="display-md mt-3 text-white">Want to know when this event is confirmed?</h3>
                    <p className="mt-3 text-sm leading-6 text-on-navy">Use the contact form to express interest. A calendar action will only be enabled after a real date and venue are published.</p>
                  </div>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded bg-brand-orange px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark">
                    Express interest <Icon name="arrow-up-right" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            <aside className="space-y-10 lg:sticky lg:top-28">
              <div className="border-t border-line pt-5">
                <div className="rule-orange" />
                <div className="mono-label text-brand-deep">Event information</div>
                <p className="mt-3 text-sm leading-6 text-muted">We will add the date, time and venue here as soon as they are confirmed.</p>
                <div className="mt-3 divide-y divide-line border-y border-line">
                  {[
                    ['Organizer', 'Eagle’s Wings Foundation Tanzania'],
                    ['Status', 'Planned. Dates to be announced'],
                    ['Format', e.tag],
                  ].map(([k, v]) => (
                    <div key={k} className="py-3">
                      <div className="mono-label text-subtle">{k}</div>
                      <div className="mt-1 text-sm font-semibold text-brand-deep">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-navy p-6 text-white">
                <Icon name="hand-heart" className="h-6 w-6 text-brand-orange" />
                <div className="display-sm mt-4 text-white">Support the work behind this event</div>
                <p className="mt-3 text-sm leading-6 text-on-navy">Donations support the Foundation's wider program work. No event-specific fundraising total is claimed unless officially approved.</p>
                <Link to="/donate" className="mt-6 inline-flex items-center gap-2 rounded bg-brand-orange px-5 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark">
                  Support the mission <Icon name="arrow-up-right" className="h-4 w-4" />
                </Link>
              </div>

              <Link to={programLinkFor(e.program)} className="flex items-center justify-between border border-line p-5">
                <span>
                  <span className="mono-label text-brand-orange">Related program</span>
                  <span className="display-sm mt-1 block text-brand-deep">Explore this area of work</span>
                </span>
                <Icon name="arrow-up-right" className="h-5 w-5 text-brand-deep" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Other planned event formats" title="Continue exploring the event program." text="All entries remain previews until public dates and venues are confirmed." />
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {related.map((r) => {
              const x = eventDetails[r]
              return (
                <Link key={r} to={`/events/${r}`} className="group bg-sand p-5">
                  <img src={x.thumb} className="h-48 w-full object-cover" alt={x.title} />
                  <div className="mono-label mt-5 text-brand-orange">{x.tag}</div>
                  <h3 className="display-sm mt-2 text-brand-deep">{x.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep group-hover:text-brand-orange">
                    View details <Icon name="arrow-up-right" className="h-4 w-4 text-brand-orange" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
