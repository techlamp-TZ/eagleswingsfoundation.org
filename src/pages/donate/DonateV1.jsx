import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { photos } from '../../data/photos.js'
import EnquiryResult from '../../components/ui/EnquiryResult.jsx'
import { useEnquiry } from '../../utils/useEnquiry.js'
import { useUrlState } from '../../utils/useUrlState.js'
import './donate-v1.css'

// Frequency and payment preference live in the URL, the amount in local state.
// Online payment is not available yet, so the form sends a giving request to
// the team (see useEnquiry) and never collects payment details.

const amountPresets = ['25000', '50000', '100000', '250000']

// `available: false` shows the option with a status instead of letting it be chosen.
const paymentMethods = [
  ['mobile-money', 'smartphone', 'Mobile money', 'We will confirm where to send it', true],
  ['bank', 'landmark', 'Bank transfer', 'We will share the confirmed bank details', true],
  ['card', 'credit-card', 'Card payment', 'Not available yet', false],
]

const directSupport = [
  ['brain', 'Neuro-diversity awareness'],
  ['heart-pulse', 'Healthy ageing'],
  ['book-heart', 'Family & therapy guidance'],
  ['sparkles', 'Life skills'],
  ['users-round', 'Caregiver development'],
]

const trustPoints = [
  ['shield-check', 'Confirmed with you first', 'The team contacts you before any money moves, so you can check the details with us.'],
  ['credit-card', 'No payment details online', 'We never ask for card numbers, mobile-money PINs or passwords on this website.'],
  ['chart-no-axes-combined', 'Transparent reporting', 'We publish reports and program evidence as they are verified.'],
  ['lock-keyhole', 'Privacy respected', 'We collect only what we need to reply, as explained in our privacy policy.'],
]

function formatAmount(value) {
  const n = Number(String(value || '').replace(/[^0-9]/g, ''))
  return Number.isFinite(n) && n > 0 ? new Intl.NumberFormat('en-US').format(n) : 'not set'
}

const lbl = 'mono-label mono-label-lg text-brand-deep'

export default function DonateV1() {
  const [donateType, setDonateType] = useUrlState('type', 'once')
  const [amount, setAmount] = useState('50000')
  const [customValue, setCustomValue] = useState('')
  const [dedication, setDedication] = useState('none')
  const [urlMethod, setMethod] = useUrlState('method', 'mobile-money')
  // An old link may still ask for an option that is not available; fall back to mobile money.
  const method = paymentMethods.some(([id, , , , ok]) => id === urlMethod && ok) ? urlMethod : 'mobile-money'
  const { status, whatsappLink, submit, reset, done } = useEnquiry({
    form: 'giving',
    subject: 'Giving request',
    intro: 'I would like to give to the Foundation.',
  })

  function selectPreset(value) {
    setAmount(value)
    setCustomValue('')
  }

  function onCustomChange(e) {
    const digits = e.target.value.replace(/[^0-9]/g, '')
    setCustomValue(e.target.value)
    setAmount(digits)
  }

  return (
    <>
      <section className="bg-sand-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mono-label flex items-center gap-2 text-brand-navy">
            <span className="text-lg leading-none text-brand-orange">+</span> Give with purpose
          </div>
          <h1 className="display-xl mt-5 text-brand-deep">Donate to Eagle’s Wings</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Support practical education, inclusion, healthy ageing, life-skills learning and caregiver development. Tell us how you would like to
            give and the team will confirm the details with you directly.
          </p>
          <p className="mt-4 text-sm text-subtle">
            <Link to="/" className="underline underline-offset-2">
              Home
            </Link>{' '}
            · Donate
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <img src={photos.family} className="h-[300px] w-full rounded object-cover object-[center_30%] sm:h-[400px]" alt="An adult and a child, close together" />

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            {done ? (
              <EnquiryResult
                status={status}
                whatsappLink={whatsappLink}
                onReset={reset}
                sentTitle="Thank you for your generosity."
                sentText="The team will contact you to confirm how to give."
              />
            ) : (
            <form onSubmit={submit}>
              <input type="hidden" name="frequency" value={donateType === 'monthly' ? 'Monthly' : 'One-time'} />
              <input type="hidden" name="amountTZS" value={amount} />
              <input type="hidden" name="paymentPreference" value={method} />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="eyebrow text-brand-orange">Your support</div>
                  <h2 className="display-lg mt-2 text-brand-deep">Choose your donation</h2>
                  <p className="mt-3 max-w-xl leading-7 text-muted">
                    Choose an amount and how you would like to give. Online payment is not available yet, so we will confirm the details with you
                    directly.
                  </p>
                </div>
                <span className="mono-label text-brand-orange">TZS</span>
              </div>

              <div role="note" className="mt-6 flex gap-3 border-l-[3px] border-brand-orange bg-white p-4">
                <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                <div className="text-sm leading-6 text-muted">
                  <p className="font-semibold text-brand-deep">This sends a donation request. No payment is taken on this website.</p>
                  <p className="mt-1">
                    The team replies as soon as it can, usually by phone, WhatsApp or email, to confirm the amount and how to pay. When your gift arrives,
                    we confirm receipt with you. Ask us if you need a written receipt.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 border border-line bg-white" role="tablist" aria-label="Donation frequency">
                {[
                  ['once', 'One-time'],
                  ['monthly', 'Monthly'],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={donateType === id}
                    onClick={() => setDonateType(id)}
                    className={`donate1-type px-4 py-3 text-sm font-semibold transition-colors ${
                      donateType === id ? 'bg-brand-navy text-white' : 'text-muted hover:text-brand-deep'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <div className="flex items-baseline justify-between border-b border-line pb-3">
                  <h3 className="display-sm text-brand-deep">Donation amount</h3>
                  <span className="mono-label text-subtle">{donateType === 'monthly' ? 'Monthly support' : 'One-time support'}</span>
                </div>
                {donateType === 'monthly' && (
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Monthly giving is arranged with you by hand: there is no automatic recurring payment yet. We agree the amount and a schedule with you
                    directly, and you can change or stop it at any time.
                  </p>
                )}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {amountPresets.map((x) => (
                    <button
                      key={x}
                      type="button"
                      aria-pressed={amount === x && customValue === ''}
                      onClick={() => selectPreset(x)}
                      className={`donate1-amount rounded border px-3 py-3 text-sm font-semibold transition-colors ${
                        amount === x && customValue === ''
                          ? 'border-brand-navy bg-brand-navy text-white'
                          : 'border-line bg-white text-brand-deep hover:border-brand-navy'
                      }`}
                    >
                      {formatAmount(x)}
                    </button>
                  ))}
                </div>
                <label className="mt-4 block">
                  <span className={lbl}>Other amount</span>
                  <input value={customValue} onChange={onCustomChange} name="otherAmount" autoComplete="off" spellCheck={false} inputMode="numeric" className="field mt-2" placeholder="Enter custom amount…" />
                </label>
              </div>

              <div className="mt-10">
                <div className="border-b border-line pb-3">
                  <h3 className="display-sm text-brand-deep">How would you like to give?</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">Your preference helps us reply with the right details.</p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {paymentMethods.map(([id, i, t, d, available]) => (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={available ? method === id : undefined}
                      disabled={!available}
                      onClick={() => available && setMethod(id)}
                      className={`donate1-method flex items-start gap-3 rounded border p-4 text-left transition-colors ${
                        !available
                          ? 'cursor-not-allowed border-dashed border-line bg-paper opacity-80'
                          : method === id
                            ? 'border-brand-orange bg-white'
                            : 'border-line bg-white hover:border-brand-navy'
                      }`}
                    >
                      <Icon name={i} className="mt-0.5 w-4 h-4 shrink-0 text-brand-orange" />
                      <span>
                        <span className="block text-sm font-semibold text-brand-deep">{t}</span>
                        <span className="mt-1 block text-xs leading-5 text-muted">{d}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <div className="border-b border-line pb-3">
                  <h3 className="display-sm text-brand-deep">Personal information</h3>
                </div>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className={lbl}>First name</span>
                    <input name="firstName" required autoComplete="given-name" className="field mt-2" />
                  </label>
                  <label className="block">
                    <span className={lbl}>Last name</span>
                    <input name="lastName" required autoComplete="family-name" className="field mt-2" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={lbl}>Email address</span>
                    <input type="email" name="email" required autoComplete="email" spellCheck={false} className="field mt-2" placeholder="you@example.com" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={lbl}>
                      Phone or WhatsApp <span className="text-subtle">· Optional</span>
                    </span>
                    <input type="tel" name="phone" autoComplete="tel" className="field mt-2" placeholder="+255 712 345 678" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={lbl}>
                      Dedicate this donation <span className="text-subtle">· Optional</span>
                    </span>
                    <select name="dedication" value={dedication} onChange={(e) => setDedication(e.target.value)} className="field mt-2">
                      <option value="none">No dedication</option>
                      <option value="In honour of">In honour of someone</option>
                      <option value="In memory of">In memory of someone</option>
                    </select>
                  </label>
                  {dedication !== 'none' && (
                    <label className="block sm:col-span-2">
                      <span className={lbl}>{dedication === 'In memory of' ? 'In memory of' : 'In honour of'}</span>
                      <input name="dedicatedTo" required autoComplete="off" className="field mt-2" placeholder="Their name" />
                      <span className="mt-2 block text-xs text-subtle">
                        If you would like us to let someone know about your gift, add their name and contact in the message below. We never share the amount.
                      </span>
                    </label>
                  )}
                  <label className="block sm:col-span-2">
                    <span className={lbl}>Message</span>
                    <textarea name="message" autoComplete="off" className="field mt-2 min-h-28" placeholder="Optional…"></textarea>
                  </label>
                </div>
              </div>

              <label className="mt-8 flex items-start gap-3 text-sm leading-6 text-muted">
                <input required name="consent" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-brand-navy" />
                <span>
                  I agree that Eagle’s Wings may use these details to reply to my donation request. See the{' '}
                  <Link to="/privacy" className="font-semibold text-brand-navy underline underline-offset-2">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>
              <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 rounded bg-brand-orange px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending…' : 'Send my donation request'} <Icon name="arrow-right" className="h-4 w-4" />
                </button>
                <div className="sm:text-right">
                  <div className="mono-label text-subtle">Your donation</div>
                  <div className="display-md mt-1 text-brand-deep">TZS {formatAmount(amount)}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">
                No money is taken when you send this. We never ask for card numbers, mobile-money PINs or passwords on this website.
              </p>
            </form>
            )}

            <aside className="donate1-sidebar space-y-10 lg:self-start">
              <div className="border-t border-line pt-6">
                <Icon name="hand-coins" className="w-6 h-6 text-brand-orange" />
                <h3 className="display-md mt-4 text-brand-deep">Become a supporter</h3>
                <p className="mt-3 leading-7 text-muted">Support can be financial, recurring, professional, voluntary or in-kind.</p>
                <div className="mt-5">
                  <Button label="Choose a program" href="/causes" variant="outline" />
                </div>
              </div>

              <div className="border-t border-line pt-6">
                <div className="eyebrow text-brand-orange">Direct your support</div>
                <div className="mt-3">
                  {directSupport.map(([i, t]) => (
                    <Link key={t} to="/causes" className="flex items-center gap-3 border-b border-line py-3 text-brand-deep hover:text-brand-orange">
                      <Icon name={i} className="w-4 h-4 text-brand-orange" />
                      <span className="text-sm font-semibold">{t}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-line pt-6">
                <Icon name="repeat-2" className="w-5 h-5 text-brand-orange" />
                <div className="mono-label mt-4 text-brand-orange">Monthly giving</div>
                <h3 className="display-sm mt-2 text-brand-deep">Build dependable support.</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Choose Monthly above and the team will agree a schedule with you directly. There is no automatic recurring payment yet.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Giving with confidence"
            title="Clear pathways, responsible handling and transparent reporting."
            text="Donor and partner names are only ever listed with their permission."
          />
          <div className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map(([i, t, d]) => (
              <div key={t} className="border-b border-line py-7 sm:pr-6">
                <Icon name={i} className="w-5 h-5 text-brand-orange" />
                <h3 className="display-sm mt-4 text-brand-deep">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <Button label="See what we can show" href="/impact" variant="dark" />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="eyebrow text-brand-orange">Other ways to help</div>
          <h2 className="display-lg mt-4 max-w-3xl text-brand-deep">Giving is more than a payment form.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            You can also contribute professional expertise, useful goods, volunteer time, partnerships or sponsorship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button label="Get involved" href="/get-involved" />
            <Button label="Explore support areas" href="/causes" variant="light" />
          </div>
        </div>
      </section>
    </>
  )
}
