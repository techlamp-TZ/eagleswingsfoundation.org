import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../components/ui/Icon.jsx'
import { programMeta, programDetails, programRouteIds } from '../../../data/programDetails.js'
import EnquiryResult from '../../../components/ui/EnquiryResult.jsx'
import { useEnquiry } from '../../../utils/useEnquiry.js'
import { usePageTitle } from '../../../utils/usePageTitle.js'
import { DetailHero, Block, Checks, Steps, RelatedGrid, Flat } from './detail-parts.jsx'
import VideoCard from '../../../components/ui/VideoCard.jsx'
import { videos } from '../../../data/media.js'
import { photos } from '../../../data/photos.js'

// Lead photo per program (real Foundation media where it exists) and the
// recorded activity clips that show the program in practice.
const programHero = {
  'program-neurodiversity': [photos.child, 'A Foundation staff member and a young girl smiling together', 'center 30%'],
  'program-elderly-care': ['/photos/blog/healthy-ageing-nutrition-movement-meaningful-activity.webp', 'An older man smiling (illustrative photo)', 'center 25%'],
  // education and life skills have no sharp still photo yet; their clips below carry the visuals
  'program-caregiver-training': [photos.people, 'Foundation staff in the classroom', 'center 30%'],
}
const programVideos = {
  'program-education-therapy': ['drawing-together', 'classroom-session'],
  'program-life-skills': ['washing-up-together', 'watering-the-garden'],
  'program-caregiver-training': ['classroom-session'],
}

// Audience / delivery / support details live in data/programDetails.js (programMeta),
// shared with the Programs list. Gift / amount are real state.



function ProgramSidebar({ p, m }) {
  const icons = ['book-open-check', 'package-open', 'briefcase-business']
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <Block title="Support this area">
        <h3 className="display-sm text-brand-deep">Help strengthen {p.title.toLowerCase()}.</h3>
        <p className="mt-3 text-sm leading-6 text-muted">Choose financial, in-kind, volunteer or professional support. Public fundraising targets will appear only after approval.</p>
        <a href="#program3-support" className="mt-5 inline-flex items-center justify-center gap-2 rounded bg-brand-orange px-5 py-3.5 text-sm font-semibold text-brand-deep hover:bg-brand-orange-dark">
          Choose support <Icon name="arrow-down" className="h-4 w-4" />
        </a>
      </Block>

      <Block title="Useful support">
        <ul className="border-t border-line">
          {m.support.slice(0, 3).map((t, i) => (
            <li key={t} className="flex gap-3 border-b border-line py-3">
              <Icon name={icons[i]} className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
              <p className="text-sm font-medium leading-6 text-brand-deep">{t}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Related programs">
        <ul className="border-t border-line">
          {programRouteIds
            .filter((id) => id !== p.id)
            .slice(0, 3)
            .map((rid) => {
              const x = programDetails[rid]
              return (
                <li key={rid} className="border-b border-line">
                  <Link to={`/programs/${rid}`} className="group flex items-center gap-3 py-3">
                    <div className="min-w-0">
                      <div className="mono-label text-subtle">{x.tag}</div>
                      <div className="mt-1 text-sm font-medium leading-5 text-brand-deep group-hover:text-brand-orange">{x.title}</div>
                    </div>
                    <Icon name="arrow-up-right" className="ml-auto h-4 w-4 shrink-0 text-brand-orange" />
                  </Link>
                </li>
              )
            })}
        </ul>
      </Block>

      <Block title="Monthly support">
        <Flat src={p.gallery[3]} alt="Community participation" className="h-36" />
        <h3 className="display-sm mt-4 text-brand-deep">Build dependable support over time.</h3>
        <p className="mt-3 text-sm leading-6 text-muted">Choose Monthly when you contact us and we will arrange it with you directly.</p>
        <a href="#program3-support" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-deep">
          Explore donation options <Icon name="arrow-down" className="h-4 w-4 text-brand-orange" />
        </a>
      </Block>
    </aside>
  )
}

const GIFT_PREFS = ['One-time', 'Monthly', 'In-kind / expertise']
const AMOUNTS = ['25,000', '50,000', '100,000', '250,000']

function Tab({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded border px-4 py-3 text-sm font-semibold transition-colors ${active ? 'border-brand-orange bg-brand-orange text-brand-deep' : 'border-line bg-white text-muted hover:border-brand-navy'}`}
    >
      {children}
    </button>
  )
}

export default function ProgramDetailV3({ item: p }) {
  usePageTitle(p.title)
  const m = programMeta[p.id] || programMeta['program-neurodiversity']
  const relatives = programRouteIds.filter((id) => id !== p.id).slice(0, 3)
  const [gift, setGift] = useState(GIFT_PREFS[0])
  const [amount, setAmount] = useState(AMOUNTS[2])
  const { status, whatsappLink, submit, reset, done } = useEnquiry({
    form: 'program-support',
    subject: `Support request: ${p.title}`,
    intro: `I would like to support the program: ${p.title}.`,
  })

  return (
    <>
      <DetailHero kicker="Program detail" title={p.title} crumbs={[['Home', '/'], ['Support Areas', '/causes'], [p.tag]]} />

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:px-8">
          <article className="min-w-0">
            {(() => {
              if (!programHero[p.id]) return null
              const [src, alt, pos] = programHero[p.id]
              return (
                <div className="relative h-[260px] overflow-hidden rounded bg-sand sm:h-[380px]">
                  <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: pos }} fetchPriority="high" decoding="async" />
                </div>
              )
            })()}
            <div className="mt-10">
              <div className="mono-label flex flex-wrap items-center gap-x-4 gap-y-2 text-brand-orange">
                <span className="inline-flex items-center gap-2">
                  <Icon name={p.icon} className="h-4 w-4" />
                  {p.tag}
                </span>
              </div>
              <p className="lead mt-4">{p.intro}</p>
              <section aria-labelledby="glance-heading" className="mt-8 border border-line bg-white">
                <h3 id="glance-heading" className="border-b border-line bg-sand px-5 py-3 font-display text-lg text-brand-deep">
                  At a glance
                </h3>
                <dl className="divide-y divide-line">
                  {[
                    ['Who it is for', m.audience],
                    ['What it offers', m.delivery],
                    ['Where and when', m.where || 'Arranged with you when you get in touch. The Foundation is based in Tegeta, Dar es Salaam.'],
                    ['Cost', m.fee || 'Ask the team. Any cost is explained to you before anything is arranged.'],
                    ['How to get started', null],
                    ['What happens next', 'We listen, point you to the right support or professional, and agree the next step with you.'],
                  ].map(([label, value]) => (
                    <div key={label} className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                      <dt className="mono-label text-subtle">{label}</dt>
                      <dd className="text-sm leading-6 text-brand-deep">
                        {value ?? (
                          <>
                            Message us on{' '}
                            <a href="https://wa.me/255749044723" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-navy underline decoration-brand-orange underline-offset-4">
                              WhatsApp
                            </a>
                            , call +255 749 044 723, or use the{' '}
                            <a href="#program3-support" className="font-semibold text-brand-navy underline decoration-brand-orange underline-offset-4">
                              form below
                            </a>
                            .
                          </>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>

            <section className="mt-14">
              <h3 className="display-md text-brand-deep">About this program</h3>
              <p className="mt-4 leading-8 text-muted">{p.summary}</p>
              <div className="mt-7">
                <Checks items={p.checks} />
              </div>
            </section>

            <section className="mt-14 border-t border-line pt-14">
              <h3 className="display-md text-brand-deep">What support can enable</h3>
              <p className="mt-4 leading-8 text-muted">Support for this area can strengthen the practical resources and delivery capacity around the program.</p>
              <ul className="mt-6 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
                {m.support.map((t) => (
                  <li key={t} className="flex gap-3 border-b border-line py-4">
                    <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-orange" />
                    <p className="text-sm font-medium leading-6 text-brand-deep">{t}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14 border-t border-line pt-14">
              <h3 className="display-md text-brand-deep">{m.question}</h3>
              <p className="mt-4 leading-8 text-muted">{p.approach}</p>
              <div className="mt-7 grid gap-8 sm:grid-cols-[1fr_.9fr]">
                <div className="bg-sand p-6">
                  {m.tips.map((t, i) => (
                    <div key={t} className={i ? 'mt-5 border-t border-line pt-5' : ''}>
                      <div className="mono-label text-brand-orange">0{i + 1}</div>
                      <p className="mt-2 text-sm font-medium leading-7 text-brand-deep">{t}</p>
                    </div>
                  ))}
                </div>
                <Flat src={p.gallery[1]} alt="Program support illustration" className="h-full min-h-[240px]" />
              </div>
            </section>

            <section className="mt-14 bg-brand-navy p-7 text-white sm:p-10">
              <div className="eyebrow text-brand-orange">How we work</div>
              <h3 className="display-md mt-3 text-white">A practical, responsible program pathway.</h3>
              <div className="mt-6">
                <Steps items={p.process} dark />
              </div>
            </section>

            {programVideos[p.id] && (
              <section aria-labelledby="in-action" className="mt-14">
                <h3 id="in-action" className="display-md text-brand-deep">
                  See this program in practice
                </h3>
                <p className="mt-2 text-[0.9375rem] text-muted">Short clips recorded during sessions. They play when you press Play and have no sound.</p>
                <div className="mt-6 grid gap-8 sm:grid-cols-2">
                  {programVideos[p.id].map((id) => {
                    const v = videos.find((x) => x.id === id)
                    return v ? <VideoCard key={id} video={v} /> : null
                  })}
                </div>
              </section>
            )}

            <section className="mt-14 border-y border-line py-8">
              <div className="mono-label text-brand-orange">Professional boundaries</div>
              <h3 className="display-sm mt-3 text-brand-deep">Education and support do not replace individualized clinical care.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">Where medical, diagnostic, therapy, safeguarding or specialist decisions are required, families and caregivers should use appropriately qualified professionals.</p>
            </section>

            <section id="program3-support" className="mt-14 bg-sand p-6 sm:p-8 lg:p-10">
              <div className="eyebrow text-brand-orange">Support this program</div>
              <h2 className="display-lg mt-3 text-brand-deep">Choose how you would like to contribute.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Tell us how you would like to support this program. Online payment is not available yet, so the team will contact you to confirm how to give.</p>
              {done ? (
              <div className="mt-8"><EnquiryResult
                status={status}
                whatsappLink={whatsappLink}
                onReset={reset}
                sentTitle="Thank you for your support."
                sentText="The team will contact you to confirm how to give."
              /></div>
            ) : (
              <form onSubmit={submit} className="mt-8">
                <input type="hidden" name="program" value={p.title} />
                <input type="hidden" name="givingPreference" value={gift} />
                <input type="hidden" name="amountTZS" value={amount} />
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <div className="mono-label text-subtle">Giving preference</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {GIFT_PREFS.map((g) => (
                        <Tab key={g} active={gift === g} onClick={() => setGift(g)}>{g}</Tab>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {AMOUNTS.map((a) => (
                        <Tab key={a} active={amount === a} onClick={() => setAmount(a)}>TZS {a}</Tab>
                      ))}
                    </div>
                    <input name="otherAmount" autoComplete="off" className="field mt-3" placeholder="Other amount or in-kind contribution…" aria-label="Other amount or in-kind contribution" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input name="firstName" required autoComplete="given-name" className="field" placeholder="First name…" aria-label="First name" />
                    <input name="lastName" required autoComplete="family-name" className="field" placeholder="Last name…" aria-label="Last name" />
                    <input type="email" name="email" required autoComplete="email" spellCheck={false} className="field sm:col-span-2" placeholder="Email address…" aria-label="Email address" />
                    <textarea name="message" autoComplete="off" className="field min-h-24 sm:col-span-2" placeholder="Optional message…" aria-label="Optional message"></textarea>
                  </div>
                </div>
                <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-muted">
                  <input required name="consent" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-brand-navy" />
                  <span>I agree that Eagle’s Wings may use these details to reply to my support request.</span>
                </label>
                <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-muted">We never ask for card numbers, mobile-money PINs or passwords on this website.</p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center gap-2 rounded bg-brand-orange px-6 py-3.5 text-sm font-semibold text-brand-deep hover:bg-brand-orange-dark disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send my support request'} <Icon name="arrow-right" className="h-4 w-4" />
                  </button>
                </div>
              </form>
              )}
            </section>

            <section className="mt-14 border-t border-line pt-14">
              <h3 className="display-md mb-8 text-brand-deep">Related support areas</h3>
              <RelatedGrid ids={relatives} />
            </section>
          </article>

          <ProgramSidebar p={p} m={m} />
        </div>
      </section>
    </>
  )
}
