import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../components/ui/Icon.jsx'
import { programDetails, programRouteIds } from '../../../data/programDetails.js'
import EnquiryResult from '../../../components/ui/EnquiryResult.jsx'
import { useEnquiry } from '../../../utils/useEnquiry.js'
import { usePageTitle } from '../../../utils/usePageTitle.js'
import { DetailHero, Block, ProgramList, SearchBox, Checks, Steps, RelatedGrid, Flat } from './detail-parts.jsx'

// Gift type / amount toggles are real state (replaces old global class toggling).

const PLANNED_RESOURCES = [
  ['brain', 'Neuro-diversity', 'Making inclusion practical in everyday communities'],
  ['house-heart', 'Family guidance', 'Supporting families with dignity and consistency'],
  ['heart-pulse', 'Healthy ageing', 'Practical ways to keep older people active and engaged'],
  ['sparkles', 'Life skills', 'Building independence through repeatable routines'],
]

const SUPPORT_WAYS = [
  ['wallet-cards', 'One-time giving', 'Support a current priority.'],
  ['repeat-2', 'Monthly support', 'Build dependable recurring support.'],
  ['package-open', 'In-kind support', 'Offer useful goods or equipment.'],
  ['briefcase-business', 'Expertise & partnership', 'Contribute skills, services or sponsorship.'],
]

const AMOUNTS = ['25,000', '50,000', '100,000', '250,000']

function ProgramSupportSidebar({ activeId }) {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const p = programDetails[activeId]
  const ids = programRouteIds.filter((id) => !q || programDetails[id].title.toLowerCase().includes(q))

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <Block title="Search programs">
        <SearchBox value={query} onChange={setQuery} />
        <div className="mt-4">
          <ProgramList ids={ids} activeId={activeId} />
        </div>
      </Block>

      <Block title="Support this program">
        <h3 className="display-sm text-brand-deep">Ways to contribute</h3>
        <ul className="mt-4 border-t border-line">
          {SUPPORT_WAYS.map(([ic, t, d]) => (
            <li key={t} className="flex gap-3 border-b border-line py-3">
              <Icon name={ic} className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
              <div>
                <div className="text-sm font-semibold text-brand-deep">{t}</div>
                <div className="mt-0.5 text-xs leading-5 text-muted">{d}</div>
              </div>
            </li>
          ))}
        </ul>
        <a href="#program-support-form" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-brand-orange px-5 py-3.5 text-sm font-semibold text-brand-deep hover:bg-brand-orange-dark">
          Support {p.title} <Icon name="arrow-down" className="h-4 w-4" />
        </a>
      </Block>

      <Block title="Planned resources">
        <ul className="border-t border-line">
          {PLANNED_RESOURCES.map(([ic, tag, title]) => (
            <li key={title} className="border-b border-line">
              <Link to="/resources" className="group flex gap-3 py-3">
                <Icon name={ic} className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <div>
                  <div className="mono-label text-subtle">{tag}</div>
                  <div className="mt-1 text-sm font-medium leading-5 text-brand-deep group-hover:text-brand-orange">{title}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-subtle">Topics are planned editorial themes until approved articles are published.</p>
      </Block>
    </aside>
  )
}

function Tab({ active, onClick, children, dark = false }) {
  const on = 'bg-brand-orange text-brand-deep border-brand-orange'
  const off = dark ? 'border-navy-line text-on-navy hover:border-brand-orange' : 'border-line bg-white text-muted hover:border-brand-navy'
  return (
    <button type="button" onClick={onClick} aria-pressed={active} className={`rounded border px-4 py-3 text-sm font-semibold transition-colors ${active ? on : off}`}>
      {children}
    </button>
  )
}

export default function ProgramDetailV2({ item: p }) {
  usePageTitle(p.title)
  const relatives = programRouteIds.filter((id) => id !== p.id).slice(0, 3)
  const [giftType, setGiftType] = useState('once')
  const [amount, setAmount] = useState(AMOUNTS[1])
  const { status, whatsappLink, submit, reset, done } = useEnquiry({
    form: 'program-support',
    subject: `Support request: ${p.title}`,
    intro: `I would like to support the program: ${p.title}.`,
  })

  return (
    <>
      <DetailHero kicker="Support area details" title={p.title} crumbs={[['Home', '/'], ['Support Areas', '/causes'], [p.tag]]} />

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-16 lg:px-8">
          <article className="min-w-0">
            <Flat src={p.hero} alt={p.title} className="h-[300px] sm:h-[480px]" />

            <div className="mt-10">
              <div className="mono-label inline-flex items-center gap-2 text-brand-orange">
                <Icon name={p.icon} className="h-4 w-4" />
                {p.tag}
              </div>
              <h2 className="display-lg mt-4 text-brand-deep">{p.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted">{p.intro}</p>
            </div>

            <div className="mt-10">
              <Checks items={p.checks} />
            </div>

            <section className="mt-14">
              <h3 className="display-md text-brand-deep">Program summary</h3>
              <p className="mt-4 leading-8 text-muted">{p.summary}</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Flat src={p.gallery[1]} alt="Program support" />
                <Flat src={p.gallery[2]} alt="Community support" />
              </div>
            </section>

            <section className="mt-14 border-t border-line pt-14">
              <h3 className="display-md text-brand-deep">Our approach</h3>
              <p className="mt-4 leading-8 text-muted">{p.approach}</p>
              <div className="mt-8 bg-sand p-6 sm:p-8">
                <div className="mono-label mb-2 text-brand-orange">How we work</div>
                <Steps items={p.process} />
              </div>
            </section>

            <section className="mt-14 border-t border-line pt-14">
              <h3 className="display-md mb-8 text-brand-deep">Related support areas</h3>
              <RelatedGrid ids={relatives} />
            </section>
          </article>

          <ProgramSupportSidebar activeId={p.id} />
        </div>
      </section>

      <section id="program-support-form" className="bg-sand section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="eyebrow text-brand-orange">Support this work</div>
            <h2 className="display-lg mt-3 text-brand-deep">Contribute to {p.title}.</h2>
            <p className="mt-4 leading-7 text-muted">Tell us how you would like to support this program. Online payment is not available yet, so the team will contact you to confirm how to give.</p>
          </div>
          {done ? (
              <EnquiryResult
                status={status}
                whatsappLink={whatsappLink}
                onReset={reset}
                sentTitle="Thank you for your support."
                sentText="The team will contact you to confirm how to give."
              />
            ) : (
          <form onSubmit={submit} className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <input type="hidden" name="program" value={p.title} />
            <input type="hidden" name="frequency" value={giftType === 'monthly' ? 'Monthly' : 'One-time'} />
            <input type="hidden" name="amountTZS" value={amount} />
            <div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="display-md text-brand-deep">Your details</h3>
                <span className="mono-label text-subtle">{p.tag}</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="mono-label text-brand-deep">
                  First name
                  <input name="firstName" required autoComplete="given-name" className="field mt-2 font-sans normal-case tracking-normal" />
                </label>
                <label className="mono-label text-brand-deep">
                  Last name
                  <input name="lastName" required autoComplete="family-name" className="field mt-2 font-sans normal-case tracking-normal" />
                </label>
                <label className="mono-label text-brand-deep">
                  Email
                  <input type="email" name="email" required autoComplete="email" spellCheck={false} className="field mt-2 font-sans normal-case tracking-normal" />
                </label>
                <label className="mono-label text-brand-deep">
                  Phone
                  <input type="tel" name="phone" autoComplete="tel" className="field mt-2 font-sans normal-case tracking-normal" placeholder="+255 712 345 678" />
                </label>
                <label className="mono-label text-brand-deep sm:col-span-2">
                  Message or dedication
                  <textarea name="message" autoComplete="off" className="field mt-2 min-h-28 font-sans normal-case tracking-normal" placeholder="Optional…"></textarea>
                </label>
              </div>
              <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-muted">
                  <input required name="consent" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-brand-navy" />
                  <span>I agree that Eagle’s Wings may use these details to reply to my support request.</span>
                </label>
            </div>
            <div className="bg-brand-navy p-6 text-white sm:p-8">
              <h3 className="display-md text-white">Choose support</h3>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <Tab dark active={giftType === 'once'} onClick={() => setGiftType('once')}>One-time</Tab>
                <Tab dark active={giftType === 'monthly'} onClick={() => setGiftType('monthly')}>Monthly</Tab>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {AMOUNTS.map((a) => (
                  <Tab dark key={a} active={amount === a} onClick={() => setAmount(a)}>{a}</Tab>
                ))}
              </div>
              <label className="mono-label mt-5 block text-on-navy">
                Other amount (TZS)
                <input name="otherAmount" inputMode="numeric" autoComplete="off" spellCheck={false} className="field mt-2 font-sans normal-case tracking-normal" placeholder="Enter amount…" />
              </label>
              <div className="mt-6">
                <div className="mono-label text-on-navy">How you can give</div>
                <p className="mt-3 border-t border-navy-line pt-3 text-sm leading-6 text-on-navy">
                  Mobile money, bank transfer or card. We will confirm the options with you directly.
                </p>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded bg-brand-orange px-6 py-3.5 text-sm font-semibold text-brand-deep hover:bg-brand-orange-dark disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending…' : 'Send my support request'} <Icon name="arrow-right" className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs leading-5 text-on-navy">We never ask for card numbers, mobile-money PINs or passwords on this website.</p>
            </div>
          </form>
          )}
        </div>
      </section>
    </>
  )
}
