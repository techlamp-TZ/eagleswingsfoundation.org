import { Link } from 'react-router-dom'
import Icon from '../../../components/ui/Icon.jsx'
import Button from '../../../components/ui/Button.jsx'
import PageHero from '../../../components/ui/PageHero.jsx'
import { photos } from '../../../data/photos.js'
import { eventDetails, eventRouteIds, programLinkFor } from '../../../data/eventDetails.js'
import EnquiryResult from '../../../components/ui/EnquiryResult.jsx'
import { useEnquiry } from '../../../utils/useEnquiry.js'
import { SITE } from '../../../config/site.js'
import { usePageTitle } from '../../../utils/usePageTitle.js'
import { useUrlState } from '../../../utils/useUrlState.js'

function EventSidebar({ activeId }) {
  const [query, setQuery] = useUrlState('q', '')
  const q = query.trim().toLowerCase()
  const e = eventDetails[activeId]

  return (
    <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
      <div className="border-t border-line pt-5">
        <label htmlFor="event-search" className="mono-label text-brand-deep">Search event formats</label>
        <div className="relative mt-3">
          <input id="event-search" name="q" autoComplete="off" spellCheck={false} value={query} onChange={(ev) => setQuery(ev.target.value)} placeholder="Search…" className="field pr-11" />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-subtle">
            <Icon name="search" className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-4 border-t border-line">
          {eventRouteIds
            .filter((id) => !q || `${eventDetails[id].title} ${eventDetails[id].tag}`.toLowerCase().includes(q))
            .map((id) => (
              <Link
                key={id}
                to={`/events/${id}`}
                className={`block border-b border-line py-3 text-sm ${
                  id === activeId ? 'border-l-2 border-l-brand-orange pl-3 font-semibold text-brand-deep' : 'text-muted hover:text-brand-deep'
                }`}
              >
                {eventDetails[id].title}
              </Link>
            ))}
        </div>
      </div>

      <div className="border-t border-line pt-5">
        <div className="rule-orange" />
        <div className="mono-label text-brand-deep">Event status</div>
        <div className="mt-2 divide-y divide-line">
          {[
            ['Status', 'Planned. Dates to be announced'],
            ['Format', e.tag],
          ].map(([k, v]) => (
            <div key={k} className="py-3">
              <div className="mono-label text-subtle">{k}</div>
              <div className="mt-1 text-sm font-semibold text-brand-deep">{v}</div>
            </div>
          ))}
        </div>
        <a href="#event-interest-form" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded bg-brand-orange px-5 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark">
          Express interest <Icon name="arrow-down" className="h-4 w-4" />
        </a>
      </div>

      <div className="border border-line bg-sand p-6">
        <Icon name="map-pinned" className="h-5 w-5 text-brand-orange" />
        <h3 className="display-sm mt-4 text-brand-deep">Be first to know the date and venue</h3>
        <p className="mt-3 text-sm leading-6 text-muted">
          We will post dates and venues on{' '}
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy underline decoration-brand-orange underline-offset-4">
            Instagram @eaglewings.tz
          </a>{' '}
          as soon as they are confirmed.
        </p>
      </div>

      <Link to={programLinkFor(e.program)} className="flex items-center justify-between bg-brand-navy p-5 text-white">
        <span>
          <span className="mono-label text-brand-orange">Related work</span>
          <span className="display-sm mt-1 block text-white">Explore the program</span>
        </span>
        <Icon name="arrow-up-right" className="h-5 w-5" />
      </Link>
    </aside>
  )
}

export default function EventDetailV1({ item: e }) {
  usePageTitle(e.title)
  const { status, whatsappLink, submit, reset, done } = useEnquiry({
    form: 'event-interest',
    subject: `Event interest: ${e.title}`,
    intro: `I am interested in: ${e.title}.`,
  })

  return (
    <>
      <PageHero kicker="Planned event format" title={e.title} text="Home · Events · Details" img={e.img} />

      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <article className="min-w-0">
            <img src={e.img} className="h-[320px] w-full object-cover sm:h-[480px]" alt={e.title} />
            <div className="mono-label mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-brand-deep">
              <span className="inline-flex items-center gap-2"><Icon name="calendar-clock" className="h-4 w-4 text-brand-orange" />Dates to be announced</span>
              <span className="inline-flex items-center gap-2"><Icon name={e.icon} className="h-4 w-4 text-brand-orange" />{e.tag}</span>
            </div>
            <h2 className="display-lg mt-6 text-brand-deep">{e.title}</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{e.intro}</p>

            <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
              {e.highlights.map((t) => (
                <div key={t} className="flex items-start gap-2 bg-sand p-5 text-sm font-semibold text-brand-deep">
                  <Icon name="circle-check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <section className="mt-12">
              <h3 className="display-md text-brand-deep">About this event format</h3>
              <p className="mt-4 text-base leading-8 text-muted">{e.summary}</p>
              <p className="mt-4 text-base leading-8 text-muted">The event will only be published as confirmed after the Foundation approves a date, venue, facilitator plan and participation arrangements. Until then, this page serves as a transparent preview of what the event is intended to cover.</p>
            </section>

            <section className="mt-10 grid gap-4 sm:grid-cols-2">
              <img src={photos.family} className="h-64 w-full object-cover" alt="Family learning together" />
              <img src={photos.people} className="h-64 w-full object-cover" alt="Community participation" />
            </section>

            <section className="mt-12 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="display-md text-brand-deep">What participants can expect</h3>
                <p className="mt-4 text-base leading-8 text-muted">The exact facilitation plan may change when an event is confirmed, but the proposed structure below keeps the session practical, focused and clear.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button label="Related program" href={programLinkFor(e.program)} variant="dark" />
                  <Button label="Ask a question" href="/contact" variant="outline" />
                </div>
              </div>
              <div className="bg-brand-navy p-7 text-white">
                <div className="eyebrow text-brand-orange">Proposed flow</div>
                <ol className="mt-4 divide-y divide-navy-line">
                  {e.agenda.map((t, i) => (
                    <li key={t} className="flex gap-4 py-4">
                      <span className="mono-label pt-0.5 text-brand-orange">{String(i + 1).padStart(2, '0')}</span>
                      <p className="text-sm leading-6 text-on-navy">{t}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          </article>

          <EventSidebar activeId={e.id} />
        </div>
      </section>

      <section id="event-interest-form" className="section bg-sand">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <div className="rule-orange" />
              <div className="mono-label text-brand-deep">Register interest</div>
              <h2 className="display-md mt-4 text-brand-deep">Interested in {e.title.toLowerCase()}?</h2>
              <p className="mt-5 text-sm leading-7 text-muted">Leave your details and we will contact you when this event is scheduled. This is an interest form, not a booking.</p>
              <div className="mt-7 flex gap-3 border-t border-line pt-5">
                <Icon name="shield-check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                <p className="text-sm leading-6 text-muted">No payment is required. We will confirm the date, venue and how to attend when the event is scheduled.</p>
              </div>
            </div>
            {done ? (
              <EnquiryResult
                status={status}
                whatsappLink={whatsappLink}
                onReset={reset}
                sentTitle="Thank you. We have your interest."
                sentText="We will contact you when this event is scheduled."
              />
            ) : (
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <input type="hidden" name="event" value={e.title} />
              <label className="mono-label text-brand-deep">
                First name
                <input required name="firstName" autoComplete="given-name" className="field mt-2 normal-case" />
              </label>
              <label className="mono-label text-brand-deep">
                Last name
                <input required name="lastName" autoComplete="family-name" className="field mt-2 normal-case" />
              </label>
              <label className="mono-label text-brand-deep">
                Email
                <input type="email" required name="email" autoComplete="email" spellCheck={false} className="field mt-2 normal-case" />
              </label>
              <label className="mono-label text-brand-deep">
                Phone
                <input type="tel" name="phone" autoComplete="tel" className="field mt-2 normal-case" placeholder="Optional…" />
              </label>
              <label className="mono-label text-brand-deep sm:col-span-2">
                I am interested as
                <select name="role" className="field mt-2 normal-case">
                  <option>Participant / family member</option>
                  <option>Caregiver / professional</option>
                  <option>Volunteer</option>
                  <option>Partner / sponsor</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="mono-label text-brand-deep sm:col-span-2">
                Message
                <textarea name="message" autoComplete="off" className="field mt-2 min-h-28 normal-case" placeholder="Optional question or note…"></textarea>
              </label>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep disabled:opacity-70 sm:col-span-2"
              >
                {status === 'sending' ? 'Sending…' : 'Register interest'} <Icon name="send" className="h-4 w-4" />
              </button>
            </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
