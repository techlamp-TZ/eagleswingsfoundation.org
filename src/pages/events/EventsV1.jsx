import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import { photos } from '../../data/photos.js'

// This variant's pagination was permanently disabled placeholder buttons
// (only page 1 exists) since no real dated events are published yet.
// `program` link targets route to their real paths (not event-detail ids).

const eventTypes = [
  { tag: 'Awareness', icon: 'brain', title: 'Neuro-diversity Awareness Session', text: 'A planned public-learning format focused on Autism, ADHD, Down syndrome, intellectual disability and practical inclusion.', img: photos.child, thumb: photos.childSmile, program: '/programs/program-neurodiversity' },
  { tag: 'Caregiving', icon: 'users-round', title: 'Family & Caregiver Learning Workshop', text: 'A practical session format for families and caregivers supporting children and older people in everyday settings.', img: photos.family, thumb: photos.lifeGardening, program: '/programs/program-caregiver-training' },
  { tag: 'Healthy ageing', icon: 'heart-pulse', title: 'Healthy Ageing Community Session', text: 'A planned session around nutrition, safe movement, mental stimulation and dignified support for older people.', img: photos.care, thumb: photos.care, program: '/programs/program-elderly-care' },
  { tag: 'Life skills', icon: 'sparkles', title: 'Life Skills Practice Day', text: 'A practical learning format centred on communication, daily routines, confidence and growing independence for autistic young people.', img: photos.learning, thumb: photos.lifeLaundryLine, program: '/programs/program-life-skills' },
  { tag: 'Family guidance', icon: 'book-heart', title: 'Education & Therapy Guidance Session', text: 'A family-learning format for understanding neurological conditions, therapy guidance and specialized parenting approaches.', img: photos.people, thumb: photos.hydrotherapyPool, program: '/programs/program-education-therapy' },
  { tag: 'Outreach', icon: 'megaphone', title: 'Community Inclusion Outreach', text: 'A community-engagement format designed to reduce stigma, share respectful information and connect people to appropriate support.', img: photos.child, thumb: photos.playBasketball, program: '/programs/program-neurodiversity' },
  { tag: 'Volunteer', icon: 'hand-heart', title: 'Volunteer Orientation & Service Day', text: 'An orientation format for supporters who want to contribute time, practical help, communication or event support responsibly.', img: photos.people, thumb: photos.joyPortrait, program: '/get-involved' },
  { tag: 'Partnership', icon: 'handshake', title: 'Partners & Supporters Briefing', text: 'A planned briefing format for organizations and supporters interested in partnerships, sponsorship and responsible program growth.', img: photos.family, thumb: photos.people, program: '/partners' },
]

const insightTopics = [
  ['Neuro-diversity', 'How communities can make inclusion practical', photos.child],
  ['Caregiving', 'Supporting families with dignity and consistency', photos.family],
  ['Healthy ageing', 'Simple ways to keep older people active and engaged', photos.care],
]

export default function EventsV1() {
  return (
    <>
      <PageHero kicker="Community participation" title="Events & Gatherings" text="Home · Events" img={photos.people} />

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div className="h-fit">
              <div className="rule-orange mb-4" />
              <div className="mono-label text-brand-deep">Upcoming event formats</div>
              <div className="mt-8 border border-line bg-sand p-5">
                <div className="flex gap-3">
                  <Icon name="calendar-clock" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                  <div>
                    <div className="mono-label text-brand-deep">Calendar status</div>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      No public event dates are confirmed yet. Every event card is marked <strong>Planned</strong> until an official date is approved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="display-lg text-brand-deep">Together we can create lasting change.</h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Eagle's Wings has not yet published a confirmed public event calendar. The cards below show the kinds of events we plan to run once dates and venues are confirmed.
              </p>
            </div>
          </div>

          <ul className="mt-14 border-t border-line">
            {eventTypes.map((e) => (
              <li key={e.title} className="grid gap-5 border-b border-line py-8 md:grid-cols-[120px_200px_1fr] md:gap-8 lg:grid-cols-[140px_220px_1fr_auto] lg:items-center">
                <div>
                  <span className="mono-label inline-block bg-brand-navy px-3 py-1.5 text-white">Planned</span>
                  <div className="mono-label mt-3 text-subtle">Dates to be announced</div>
                </div>
                <img src={e.thumb} className="h-44 w-full object-cover md:h-32" alt={e.title} />
                <div>
                  <span className="mono-label inline-flex items-center gap-2 text-brand-orange">
                    <Icon name={e.icon} className="h-3.5 w-3.5" />
                    {e.tag}
                  </span>
                  <h3 className="display-sm mt-2 text-brand-deep">{e.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{e.text}</p>
                </div>
                <Link to={e.program} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-brand-orange">
                  Related program <Icon name="arrow-up-right" className="h-4 w-4 text-brand-orange" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mono-label grid h-9 min-w-9 place-items-center bg-brand-navy px-3 text-white">1</span>
            {['2', '3', '4'].map((n) => (
              <button key={n} disabled className="mono-label grid h-9 min-w-9 cursor-not-allowed place-items-center border border-line px-3 text-subtle">
                {n}
              </button>
            ))}
            <span className="ml-2 text-xs text-subtle">More pages activate when approved events are published.</span>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand text-brand-deep">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[300px] overflow-hidden rounded">
            <img src="/photos/foundation/beach-outing.webp" alt="Three people standing together on a beach during an outing" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: 'center 45%' }} />
          </div>
          <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <div className="eyebrow text-brand-orange">Join the movement</div>
            <h2 className="display-lg mt-4 text-brand-deep">Be part of the next community gathering.</h2>
            <p className="mt-5 max-w-xl leading-7 text-muted">Volunteer, partner with the Foundation, support a program or contact the team to express interest in future public events.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Get involved" href="/get-involved" />
              <Button label="Contact the team" href="/contact" variant="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHead
              eyebrow="Event impact & learning"
              title="Stories of participation, shared only when verified."
              text="Eagle's Wings will publish participant feedback, event photos and attendance information only after consent, approval and verification."
            />
            <div className="mt-8 border-t border-line pt-6">
              <div className="flex gap-4">
                <Icon name="quote" className="h-6 w-6 shrink-0 text-brand-orange" />
                <div>
                  <h3 className="display-sm text-brand-deep">Event story library in preparation</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">Future event recaps can include approved photographs, participant feedback, learning themes and verified attendance information.</p>
                  <Link to="/impact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-brand-orange">
                    See the impact framework <Icon name="arrow-up-right" className="h-4 w-4 text-brand-orange" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img src={photos.people} className="h-[420px] w-full object-cover" alt="Community participation" />
        </div>
      </section>

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Learning before and after events" title="Inspiring stories, practical guidance and useful preparation." text="As the event calendar develops, educational content can help participants prepare before sessions and continue learning afterward." />
          <div className="mt-12 grid gap-8 border-t border-line pt-10 lg:grid-cols-3">
            {insightTopics.map(([tag, title, img]) => (
              <article key={title}>
                <img src={img} className="h-56 w-full object-cover" alt={title} />
                <div className="mono-label mt-5 text-brand-orange">{tag}</div>
                <h3 className="display-sm mt-2 text-brand-deep">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Planned educational content will be published after Foundation review and approval.</p>
                <Link to="/resources" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep hover:text-brand-orange">
                  Browse resources <Icon name="arrow-up-right" className="h-4 w-4 text-brand-orange" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
