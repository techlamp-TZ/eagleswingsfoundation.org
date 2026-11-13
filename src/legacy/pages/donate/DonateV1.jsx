import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import EnquiryResult from '../../components/ui/EnquiryResult.jsx'
import { useEnquiry } from '../../utils/useEnquiry.js'
import { useUrlState } from '../../utils/useUrlState.js'
import './donate-v1.css'

const amountPresets = ['25000', '50000', '100000', '250000']

const paymentMethods = [
  ['mobile-money', 'smartphone', 'Mobile money', 'We will confirm where to send it', true],
  ['bank', 'landmark', 'Bank transfer', 'We will share the confirmed bank details', true],
  ['card', 'credit-card', 'Card payment', 'Not available yet', false],
]

const bankAccounts = [
  {
    bank: 'Azania Bank',
    color: '#00614B',
    accent: '#00614B',
    logo: '/logos/azania-bank.png',
    accountName: 'Eagles Wings Foundation Tanzania',
    accountNumber: '005000231172',
    swift: 'AZANTZTZ',
    branch: 'Head Office, Mawasiliano Tower, Dar es Salaam',
  },
  {
    bank: 'CRDB Bank',
    color: '#C8102E',
    accent: '#C8102E',
    logo: '/logos/crdb-bank.png',
    accountName: 'Eagles Wings Foundation Tanzania',
    accountNumber: '10365565077',
    swift: 'CORUTZTZ',
    branch: 'Mbezi Beach Branch, Dar es Salaam',
  },
]

const programs = [
  'Where it\'s needed most',
  'Neuro-diversity awareness',
  'Healthy ageing',
  'Family & therapy guidance',
  'Life skills',
  'Caregiver development',
]

const trustSteps = [
  ['We start with a conversation.', 'Our team confirms your donation request and shares the right payment details directly with you.'],
  ['You give on your terms.', 'Choose a one-time gift or agree a monthly schedule. No automatic charges, and no payment details collected here.'],
  ['Your support stays personal.', 'Ask us about receipts and verified program updates. Donor names are shared only with permission.'],
]

const faqs = [
  ['Will I be charged when I fill in the form?', 'No. This page helps you prepare a donation request. No money is collected here. The team will confirm how and where to give directly with you.'],
  ['How does monthly giving work?', 'Choose Monthly in the donation form. The team will agree a giving schedule with you directly. This does not create an automatic recurring payment.'],
  ['Can I choose which program to support?', 'Yes. Select one of our five support areas, or choose "Where it\'s needed most" to let the team direct your gift.'],
  ['Can I receive a donation receipt?', 'When your donation has been received, the team can confirm receipt. Let them know if you need a written receipt.'],
  ['Can I help in ways other than donating?', 'Absolutely. Professional expertise, useful goods, volunteer time, partnerships, and sponsorship can all help. Contact the team to discuss what you would like to contribute.'],
]

function formatAmount(value) {
  const n = Number(String(value || '').replace(/[^0-9]/g, ''))
  return Number.isFinite(n) && n > 0 ? new Intl.NumberFormat('en-US').format(n) : '—'
}

export default function DonateV1() {
  const [step, setStep] = useState(0)
  const [donateType, setDonateType] = useUrlState('type', 'once')
  const [amount, setAmount] = useState('50000')
  const [customValue, setCustomValue] = useState('')
  const [program, setProgram] = useState(programs[0])
  const [dedication, setDedication] = useState('none')
  const [urlMethod, setMethod] = useUrlState('method', 'mobile-money')
  const method = paymentMethods.some(([id, , , , ok]) => id === urlMethod && ok) ? urlMethod : 'mobile-money'
  const [openFaq, setOpenFaq] = useState(0)
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

  function goToStep2(e) {
    e.preventDefault()
    setStep(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goBack() {
    setStep(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const stepLabels = ['Your gift', 'Your details', 'Confirm']

  return (
    <>
      {/* ── Hero: story + donation card ── */}
      <section className="bg-[#faf9f5]">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">

            {/* Left: storytelling */}
            <div>
              <p className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[1.8px] text-brand-deep/60">
                <span className="text-[1.2rem] leading-none text-[#b46932]">✳</span>
                A little kindness. A lasting difference.
              </p>
              <h1 className="mt-5 font-serif text-[3.5rem] font-normal leading-[1.05] tracking-tight text-brand-deep sm:text-[4.25rem]">
                Give someone<br />room to <em className="not-italic text-[#3e6156]">soar.</em>
              </h1>
              <p className="mt-5 max-w-[490px] text-[0.9375rem] leading-[1.85] text-brand-deep/55">
                More opportunities. More independence. More belonging.
                Your support helps make everyday life brighter for children, older people, and families in Tanzania.
              </p>

              <div className="relative mt-8 overflow-hidden rounded-lg rounded-tr-[5rem] bg-[#e9e2ca]" style={{ aspectRatio: '1.22' }}>
                <img
                  src="/photos/family.webp"
                  alt="An adult and a child, close together"
                  className="size-full object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-md border border-white/65 bg-[#fffaf1ed] px-4 py-3 backdrop-blur-sm sm:inset-x-5 sm:bottom-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#ede9dc] text-[#3e6156]">
                    <Icon name="heart" className="size-[18px]" />
                  </span>
                  <span className="text-xs font-semibold leading-snug text-brand-deep">
                    Small acts. Stronger communities.
                    <span className="mt-0.5 block text-[0.625rem] font-normal text-brand-deep/50">That's the power of giving together.</span>
                  </span>
                </div>
              </div>
              <p className="mt-4 flex items-center justify-center gap-2 text-[0.6875rem] text-brand-deep/45">
                <Icon name="leaf" className="size-4" />
                Locally rooted. People first. Always.
              </p>
            </div>

            {/* Right: donation card */}
            <div className="rounded-xl border border-[#e2e4dc] bg-white p-6 shadow-[0_12px_35px_#1a35270a] sm:p-8">
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
                <input type="hidden" name="program" value={program} />

                {/* Card header */}
                <div className="flex items-center justify-between">
                  <span className="text-[0.5rem] font-bold uppercase tracking-[1.5px] text-[#8b6c47]">Your generosity starts here</span>
                  <Icon name="heart" className="size-5 text-[#bc793d]" />
                </div>
                <h2 className="mt-3 text-[1.5625rem] font-bold tracking-tight text-brand-deep">Make a meaningful gift.</h2>
                <p className="mt-1 text-xs text-brand-deep/50">Choose what feels right for you.</p>

                {/* Steps indicator */}
                <ol className="mt-6 flex border-b border-[#e3e5de]" aria-label="Donation steps">
                  {stepLabels.map((label, i) => (
                    <li key={label} className={`relative flex flex-1 items-center gap-1.5 pb-4 text-[0.625rem] ${i <= step ? 'font-semibold text-brand-deep' : 'text-brand-deep/40'}`}>
                      <span className={`grid size-5 place-items-center rounded-full text-[0.5625rem] ${i <= step ? 'bg-brand-deep text-white' : 'bg-[#f0f1ed] text-brand-deep/40'}`}>
                        {i + 1}
                      </span>
                      {label}
                      {i <= step && <span className="absolute bottom-[-1px] left-0 right-3 h-0.5 bg-[#3e6156]" />}
                    </li>
                  ))}
                </ol>

                {/* ── Step 1: Gift ── */}
                {step === 0 && (
                  <div className="mt-6">
                    {/* Frequency toggle */}
                    <div className="flex gap-1 rounded-md bg-[#f3f4ef] p-1">
                      {[['once', 'One-time'], ['monthly', 'Monthly']].map(([id, label]) => (
                        <button
                          key={id}
                          type="button"
                          aria-pressed={donateType === id}
                          onClick={() => setDonateType(id)}
                          className={`flex flex-1 items-center justify-center gap-1.5 rounded px-3 py-2.5 text-xs font-medium transition-all ${
                            donateType === id
                              ? 'bg-white text-brand-deep shadow-sm'
                              : 'text-brand-deep/45 hover:text-brand-deep/70'
                          }`}
                        >
                          {label}
                          {id === 'monthly' && <Icon name="heart" className="size-3" />}
                        </button>
                      ))}
                    </div>
                    {donateType === 'monthly' && (
                      <p className="mt-2 text-[0.625rem] leading-relaxed text-brand-deep/45">We'll agree a schedule with you. No automatic charges.</p>
                    )}

                    {/* Amount selection */}
                    <div className="mt-5 flex items-baseline justify-between">
                      <label className="text-[0.6875rem] font-semibold text-brand-deep">Choose your amount</label>
                      <span className="text-[0.5625rem] text-brand-deep/40">Tanzanian shillings · TZS</span>
                    </div>
                    <div className="mt-3 grid grid-cols-4 gap-2">
                      {amountPresets.map((x) => (
                        <button
                          key={x}
                          type="button"
                          aria-pressed={amount === x && customValue === ''}
                          onClick={() => selectPreset(x)}
                          className={`relative rounded border py-3 text-xs font-semibold transition-all ${
                            amount === x && customValue === ''
                              ? 'border-[#3e6156] bg-[#f0f5f0] text-[#3e6156]'
                              : 'border-[#e3e5de] bg-white text-brand-deep hover:border-[#3e6156]/40'
                          }`}
                        >
                          {formatAmount(x)}
                          {x === '50000' && amount === x && customValue === '' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-[#3e6156] px-1.5 py-px text-[0.375rem] uppercase tracking-wider text-white">
                              Popular choice
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center rounded border border-[#e3e5de] focus-within:outline focus-within:outline-2 focus-within:outline-[#3e6156]">
                      <span className="pl-3 text-[0.625rem] font-semibold text-brand-deep/35">TZS</span>
                      <input
                        value={customValue}
                        onChange={onCustomChange}
                        name="otherAmount"
                        autoComplete="off"
                        inputMode="numeric"
                        placeholder="Or enter your own amount"
                        className="w-full border-0 bg-transparent px-3 py-2.5 text-[0.6875rem] text-brand-deep placeholder:text-brand-deep/30 focus:outline-none"
                      />
                    </div>

                    {/* Program selection */}
                    <label className="mt-5 block">
                      <span className="text-[0.6875rem] font-semibold text-brand-deep">Where would you like to help?</span>
                      <select
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className="mt-2 w-full rounded border border-[#e3e5de] bg-white px-3 py-2.5 text-[0.6875rem] text-brand-deep focus:outline focus:outline-2 focus:outline-[#3e6156]"
                      >
                        {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </label>

                    {/* Payment method */}
                    <p className="mb-2 mt-5 text-[0.6875rem] font-semibold text-brand-deep">How would you like to give?</p>
                    <div className="flex gap-2">
                      {paymentMethods.filter(([,,,, ok]) => ok).map(([id, icon, label]) => (
                        <button
                          key={id}
                          type="button"
                          aria-pressed={method === id}
                          onClick={() => setMethod(id)}
                          className={`flex flex-1 items-center justify-start gap-2 rounded border px-3 py-3 text-[0.625rem] text-brand-deep transition-all ${
                            method === id
                              ? 'border-[#3e6156] bg-[#f3f7f2]'
                              : 'border-[#e3e5de] bg-white hover:border-[#3e6156]/40'
                          }`}
                        >
                          <Icon name={icon} className="size-4" />
                          {label}
                          <span className={`ml-auto size-3 rounded-full border ${method === id ? 'border-[6px] border-[#3e6156]' : 'border-[#c3ccc2]'}`} />
                        </button>
                      ))}
                    </div>
                    {method === 'mobile-money' && (
                      <p className="mt-2 text-[0.625rem] text-brand-deep/45">We'll confirm the mobile money details directly with you.</p>
                    )}

                    {/* Bank transfer details (shown when bank is selected) */}
                    {method === 'bank' && (
                      <div className="mt-4 space-y-3">
                        {bankAccounts.map((b) => (
                          <div key={b.bank} className="overflow-hidden rounded-lg border border-[#e3e5de] bg-white">
                            <div className="px-4 py-3" style={{ borderBottom: `2px solid ${b.color}` }}>
                              <img src={b.logo} alt={b.bank} className="h-7 max-w-[140px] object-contain object-left" />
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-4 py-3 text-[0.625rem]">
                              <div>
                                <span className="block font-semibold uppercase tracking-wide text-brand-deep/40">Account</span>
                                <span className="block font-mono text-xs font-bold tracking-wider text-brand-deep">{b.accountNumber}</span>
                              </div>
                              <div>
                                <span className="block font-semibold uppercase tracking-wide text-brand-deep/40">SWIFT</span>
                                <span className="block font-mono font-semibold text-brand-deep">{b.swift}</span>
                              </div>
                              <div className="col-span-2">
                                <span className="block font-semibold uppercase tracking-wide text-brand-deep/40">Name</span>
                                <span className="block font-semibold text-brand-deep">{b.accountName}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Security note */}
                    <div className="mt-5 flex items-start gap-2.5 rounded bg-[#f5f5ee] px-3 py-3">
                      <Icon name="shield-check" className="mt-0.5 size-[18px] shrink-0 text-[#3e6156]" />
                      <p className="text-[0.625rem] leading-relaxed text-brand-deep/50">
                        <strong className="block text-[0.625rem] font-semibold text-[#3e6156]">A request today. A difference tomorrow.</strong>
                        No money is taken on this website. Our team will contact you to confirm the next steps.
                      </p>
                    </div>

                    {/* Continue button */}
                    <button
                      type="button"
                      onClick={goToStep2}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded bg-[#eb8b39] px-5 py-3.5 text-xs font-bold text-brand-deep transition-all hover:bg-[#f1a45f] hover:-translate-y-px"
                    >
                      Continue with TZS {formatAmount(amount)}
                      <Icon name="arrow-right" className="ml-auto size-4" />
                    </button>
                  </div>
                )}

                {/* ── Step 2: Details ── */}
                {step === 1 && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold tracking-tight text-brand-deep">A little about you</h3>
                    <p className="mt-1 text-[0.625rem] text-brand-deep/45">So our team can help you take the next step.</p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <label className="block">
                        <span className="text-[0.6875rem] font-semibold text-brand-deep">First name</span>
                        <input name="firstName" required autoComplete="given-name" className="mt-1.5 w-full rounded border border-[#e3e5de] bg-white px-3 py-2.5 text-[0.6875rem] text-brand-deep focus:outline focus:outline-2 focus:outline-[#3e6156]" />
                      </label>
                      <label className="block">
                        <span className="text-[0.6875rem] font-semibold text-brand-deep">Last name</span>
                        <input name="lastName" required autoComplete="family-name" className="mt-1.5 w-full rounded border border-[#e3e5de] bg-white px-3 py-2.5 text-[0.6875rem] text-brand-deep focus:outline focus:outline-2 focus:outline-[#3e6156]" />
                      </label>
                    </div>
                    <label className="mt-4 block">
                      <span className="text-[0.6875rem] font-semibold text-brand-deep">Email address</span>
                      <input type="email" name="email" required autoComplete="email" placeholder="you@example.com" className="mt-1.5 w-full rounded border border-[#e3e5de] bg-white px-3 py-2.5 text-[0.6875rem] text-brand-deep placeholder:text-brand-deep/30 focus:outline focus:outline-2 focus:outline-[#3e6156]" />
                    </label>
                    <label className="mt-4 block">
                      <span className="text-[0.6875rem] font-semibold text-brand-deep">Phone or WhatsApp <span className="font-normal text-brand-deep/40">(optional)</span></span>
                      <input type="tel" name="phone" autoComplete="tel" placeholder="+255" className="mt-1.5 w-full rounded border border-[#e3e5de] bg-white px-3 py-2.5 text-[0.6875rem] text-brand-deep placeholder:text-brand-deep/30 focus:outline focus:outline-2 focus:outline-[#3e6156]" />
                    </label>
                    <label className="mt-4 block">
                      <span className="text-[0.6875rem] font-semibold text-brand-deep">Dedicate your gift <span className="font-normal text-brand-deep/40">(optional)</span></span>
                      <select name="dedication" value={dedication} onChange={(e) => setDedication(e.target.value)} className="mt-1.5 w-full rounded border border-[#e3e5de] bg-white px-3 py-2.5 text-[0.6875rem] text-brand-deep focus:outline focus:outline-2 focus:outline-[#3e6156]">
                        <option value="none">No dedication</option>
                        <option value="In honour of">In honour of someone</option>
                        <option value="In memory of">In memory of someone</option>
                      </select>
                    </label>
                    {dedication !== 'none' && (
                      <label className="mt-3 block">
                        <input name="dedicatedTo" required placeholder="Their name" className="w-full rounded border border-[#e3e5de] bg-white px-3 py-2.5 text-[0.6875rem] text-brand-deep placeholder:text-brand-deep/30 focus:outline focus:outline-2 focus:outline-[#3e6156]" />
                      </label>
                    )}
                    <label className="mt-4 block">
                      <span className="text-[0.6875rem] font-semibold text-brand-deep">A message for our team <span className="font-normal text-brand-deep/40">(optional)</span></span>
                      <textarea name="message" rows={2} placeholder="Anything you'd like us to know?" className="mt-1.5 w-full rounded border border-[#e3e5de] bg-white px-3 py-2.5 text-[0.6875rem] text-brand-deep placeholder:text-brand-deep/30 focus:outline focus:outline-2 focus:outline-[#3e6156]" />
                    </label>
                    <label className="mt-5 flex items-start gap-2 text-[0.625rem] leading-relaxed text-brand-deep/50">
                      <input required name="consent" type="checkbox" className="mt-0.5 size-3.5 shrink-0 accent-[#3e6156]" />
                      <span>
                        I agree that Eagle's Wings may use these details to reply to my request.{' '}
                        <Link to="/privacy" className="font-semibold text-[#3e6156] underline underline-offset-2">About your privacy</Link>
                      </span>
                    </label>

                    <div className="mt-6 flex items-center justify-between">
                      <button type="button" onClick={goBack} className="text-[0.6875rem] text-brand-deep/45 hover:text-brand-deep">
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="inline-flex items-center gap-2 rounded bg-[#eb8b39] px-5 py-3 text-[0.6875rem] font-bold text-brand-deep transition-all hover:bg-[#f1a45f] hover:-translate-y-px disabled:opacity-70"
                      >
                        {status === 'sending' ? 'Sending…' : 'Send my request'}
                        <Icon name="arrow-right" className="size-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
              )}

              <p className="mt-4 flex items-center justify-center gap-1.5 text-[0.5625rem] text-brand-deep/35">
                <Icon name="lock" className="size-3" />
                Your kindness matters. Your privacy does too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs: where your gift goes ── */}
      <section className="border-t border-[#e3e5de] bg-[#faf9f5] py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[0.5625rem] font-bold uppercase tracking-[1.8px] text-brand-deep/50">The possibility you make possible</p>
              <h2 className="mt-3 font-serif text-[2.125rem] font-normal tracking-tight text-brand-deep">One gift. Many ways to help.</h2>
            </div>
            <p className="text-xs leading-relaxed text-brand-deep/50">Support the whole person.<br />Strengthen the whole community.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-y-8 border-t border-[#e3e5de] pt-8 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ['sun', '#f4e4d4', '#a36736', 'Different minds.\nEqual possibilities.', 'Neuro-diversity awareness'],
              ['leaf', '#e5eadb', '#587052', 'More dignity.\nAt every age.', 'Healthy ageing'],
              ['users', '#eae5f0', '#7b668f', 'Families supported.\nFutures strengthened.', 'Family & therapy guidance'],
              ['book-open', '#f1ebcd', '#937b39', 'Everyday skills.\nLifelong confidence.', 'Life skills'],
              ['heart', '#e1e9ec', '#4c7281', 'Care for those\nwho care.', 'Caregiver development'],
            ].map(([icon, bg, color, headline, label]) => (
              <div key={label} className="border-r border-[#e3e5de] px-4 last:border-0 first:pl-0">
                <span className="grid size-11 place-items-center rounded-full" style={{ background: bg, color }}>
                  <Icon name={icon} className="size-5" />
                </span>
                <h3 className="mt-4 whitespace-pre-line text-sm font-semibold leading-snug text-brand-deep">{headline}</h3>
                <p className="mt-2 text-[0.625rem] text-brand-deep/45">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust: what happens next ── */}
      <section className="bg-[#f3f0e7] py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[0.5625rem] font-bold uppercase tracking-[1.8px] text-brand-deep/50">Give with confidence</p>
              <h2 className="mt-3 font-serif text-[2.5rem] font-normal leading-[1.15] tracking-tight text-brand-deep">
                Good intentions.<br /><em className="not-italic text-[#3e6156]">Clear next steps.</em>
              </h2>
              <p className="mt-5 max-w-sm text-[0.8125rem] leading-[1.9] text-brand-deep/50">
                Giving should feel personal, simple, and transparent. Here's what happens when you choose to support Eagle's Wings.
              </p>
              <Link to="/faq" className="mt-4 inline-flex items-center gap-3 text-[0.6875rem] font-semibold text-brand-deep hover:text-[#3e6156]">
                Your questions, answered <Icon name="arrow-right" className="size-4" />
              </Link>
            </div>
            <div className="divide-y divide-[#dbded3]">
              {trustSteps.map(([title, text], i) => (
                <div key={title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <span className="font-serif text-[1.4375rem] leading-tight text-[#a28c61]">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[0.9375rem] font-semibold text-brand-deep">{title}</h3>
                    <p className="mt-2 text-xs leading-[1.85] text-brand-deep/50">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#faf9f5] py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="text-[0.5625rem] font-bold uppercase tracking-[1.8px] text-brand-deep/50">A little clarity</p>
              <h2 className="mt-3 font-serif text-[2.4rem] font-normal tracking-tight text-brand-deep">Before you give.</h2>
              <p className="mt-3 text-[0.8125rem] text-brand-deep/50">Still have a question?<br />We're here to help.</p>
              <a href="mailto:info@eagleswingsfoundation.org" className="mt-4 inline-flex items-center gap-3 text-[0.6875rem] font-semibold text-brand-deep hover:text-[#3e6156]">
                Talk to our team <Icon name="arrow-right" className="size-4" />
              </a>
            </div>
            <div className="divide-y divide-[#e3e5de]">
              {faqs.map(([q, a], i) => (
                <details key={q} open={i === openFaq} onToggle={(e) => e.currentTarget.open && setOpenFaq(i)} className="group py-4 first:pt-0">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[0.8125rem] font-medium text-brand-deep [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="text-lg text-[#7e8e7e] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-8 text-xs leading-[1.9] text-brand-deep/50">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Other ways ── */}
      <section className="bg-[#faf9f5] pb-14 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-lg border border-[#dfe5d5] bg-[#e9eddf] px-6 py-8 sm:flex-row sm:items-center sm:gap-8 sm:px-10">
            <div className="hidden size-32 shrink-0 items-center justify-center rounded-full border border-[#bbc9ae] sm:grid">
              <Icon name="feather" className="size-20 -rotate-[15deg] text-[#5c7659]" style={{ strokeWidth: 0.8 }} />
            </div>
            <div className="flex-1">
              <p className="text-[0.5625rem] font-bold uppercase tracking-[1.8px] text-brand-deep/50">There's more than one way to give</p>
              <h2 className="mt-2 font-serif text-[2rem] font-normal tracking-tight text-brand-deep sm:text-[2.125rem]">
                Your time and talents<br />can lift someone, too.
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-brand-deep/50">
                Share your skills. Volunteer your time. Become a partner. Let's find a way to make a difference together.
              </p>
            </div>
            <Link
              to="/get-involved"
              className="inline-flex shrink-0 items-center gap-3 rounded bg-[#eb8b39] px-5 py-3.5 text-xs font-bold text-brand-deep transition-all hover:bg-[#f1a45f] hover:-translate-y-px"
            >
              Get involved <Icon name="arrow-right" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
