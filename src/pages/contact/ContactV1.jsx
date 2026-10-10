import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import { SITE } from '../../config/site.js'
import { photos } from '../../data/photos.js'
import EnquiryResult from '../../components/ui/EnquiryResult.jsx'
import { useEnquiry } from '../../utils/useEnquiry.js'
import { useSeo } from '../../utils/useSeo.js'

const DESCRIPTION =
  "Contact Eagle's Wings Foundation Tanzania about programs, volunteering, partnerships, donations, events or general enquiries. Based in Tegeta, Dar es Salaam."

const subjects = [
  'Programs & family guidance',
  'Volunteering',
  'Partnerships & sponsorship',
  'Donations',
  'Events',
  'Privacy request',
  'Media / general enquiry',
]

const responsePoints = [
  ['clock-3', 'Response times', 'We read every message and reply as soon as we can. For a quicker answer, call us or message us on WhatsApp.'],
  [
    'shield-check',
    'Privacy first',
    'Avoid sending unnecessary sensitive personal or medical information through a general enquiry form.',
    { to: '/privacy', label: 'Read our Privacy Policy' },
  ],
  [
    'messages-square',
    'Urgent support',
    'This website is not an emergency, crisis or medical-response service. In an emergency, call 112 or go to the nearest health facility. If a child is at risk, call the National Child Helpline on 116.',
  ],
]

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'

const channels = [
  { icon: 'phone', label: 'Call us', value: '+255 749 044 723', note: 'Speak to our team.', href: 'tel:+255749044723' },
  { icon: 'whatsapp', label: 'WhatsApp', value: '+255 749 044 723', note: 'Message us for a quicker reply.', href: SITE.whatsapp, external: true },
  { icon: 'mail', label: 'Email us', value: SITE.email, note: 'Send us an email at any time.', href: `mailto:${SITE.email}` },
  { icon: 'map-pin', label: 'Visit us', value: 'Tegeta, Dar es Salaam, Tanzania', note: 'Call or message first for directions.' },
]

function Label({ children }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-orange-ink">
      <span aria-hidden="true" className="h-0.5 w-7 bg-brand-orange" />
      {children}
    </p>
  )
}

function IconDisc({ name }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#eef3f9] text-brand-navy" aria-hidden="true">
      <Icon name={name} className="h-5 w-5" />
    </span>
  )
}

const labelCls = 'mono-label mono-label-lg text-brand-deep'

export default function ContactV1() {
  const { status, whatsappLink, submit, reset, done } = useEnquiry({ form: 'contact' })

  useSeo({ title: 'Contact', description: DESCRIPTION, path: '/contact' })

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-sand-warm">
        <div className="mx-auto grid max-w-[96rem] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-6 lg:py-20 lg:pl-8 lg:pr-12 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <Label>Contact</Label>
            <h1 className="display-xl mt-5 max-w-[11ch] text-brand-deep">Start a conversation.</h1>
            <p className="mt-6 max-w-[30rem] text-lg leading-8 text-muted">
              Whether you need support, want to volunteer, explore a partnership or ask a question, our team is here to listen.
            </p>
          </div>
          <div className="relative min-h-[260px] lg:min-h-[420px]">
            <img
              src={photos.hero}
              alt="Foundation staff, young people and visitors gathered in the classroom"
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="bg-paper">
        <ul className={`${wrap} grid gap-4 py-6 sm:grid-cols-2 xl:grid-cols-4`}>
          {channels.map(({ icon, label, value, note, href, external }) => {
            const body = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#fde3c0] text-brand-orange-ink" aria-hidden="true">
                  <Icon name={icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.1em] text-brand-deep">{label}</span>
                  <span className={`mt-1 block font-semibold text-brand-deep [overflow-wrap:anywhere] ${value.includes('@') ? 'text-[0.8125rem] sm:text-[0.9375rem]' : ''}`}>
                    {value.includes('@') ? (
                      <>
                        {value.split('@')[0]}@<wbr />
                        {value.split('@')[1]}
                      </>
                    ) : (
                      value
                    )}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{note}</span>
                </span>
              </>
            )
            const cls = 'flex h-full gap-4 rounded border border-line bg-surface p-5'
            return (
              <li key={label}>
                {href ? (
                  <a href={href} className={`${cls} transition-colors hover:border-brand-navy`} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>

      {/* Form */}
      <section className="bg-paper pb-16 pt-8 md:pb-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16`}>
          <div>
            <Label>Get in touch</Label>
            <h2 className="display-xl mt-4 text-brand-deep">How can we help?</h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-muted">
              Tell us what you need and we will point you to the right person. Choose a subject so your message reaches the appropriate team.
            </p>
            <ul className="mt-8 max-w-md space-y-7">
              <li className="flex gap-4">
                <IconDisc name="users-round" />
                <div>
                  <h3 className="font-semibold text-brand-deep">Real people, real support</h3>
                  <p className="mt-1 text-[0.9375rem] leading-7 text-muted">Our team reads every message and replies personally.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <IconDisc name="clock-3" />
                <div>
                  <h3 className="font-semibold text-brand-deep">Response times</h3>
                  <p className="mt-1 text-[0.9375rem] leading-7 text-muted">We reply as soon as we can. For a quicker answer, call us or message us on WhatsApp.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <IconDisc name="heart" />
                <div>
                  <h3 className="font-semibold text-brand-deep">Not sure where to start?</h3>
                  <p className="mt-1 text-[0.9375rem] leading-7 text-muted">
                    Call us on +255 749 044 723 or read the{' '}
                    <Link to="/faq" className="font-semibold text-brand-navy underline underline-offset-2">
                      frequently asked questions
                    </Link>
                    .
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded border border-line bg-surface p-6 sm:p-8">
            <h2 className="display-md mb-6 text-brand-deep">Send us a message</h2>
            {done ? (
              <EnquiryResult status={status} whatsappLink={whatsappLink} onReset={reset} />
            ) : (
              <form onSubmit={submit}>
                {/* Honeypot: hidden from people, tempting to bots */}
                <div aria-hidden="true" inert="" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="company_website">Leave this field empty</label>
                  <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className={labelCls}>
                      Name
                    </label>
                    <input id="c-name" name="name" required autoComplete="name" maxLength={120} className="field mt-2 h-12" placeholder="Your name…" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className={labelCls}>
                      Email
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      maxLength={200}
                      className="field mt-2 h-12"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-phone" className={labelCls}>
                      Phone <span className="text-subtle">· Optional</span>
                    </label>
                    <input id="c-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className="field mt-2 h-12" placeholder="+255 712 345 678" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-subject" className={labelCls}>
                      Subject
                    </label>
                    <select id="c-subject" name="subject" required defaultValue="" className="field mt-2 h-12">
                      <option value="" disabled>
                        Select subject
                      </option>
                      {subjects.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className={labelCls}>
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      required
                      maxLength={5000}
                      className="field mt-2 min-h-36 resize-y"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                </div>
                <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-muted">
                  <input required name="consent" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-brand-navy" />
                  <span>
                    I agree that Eagle’s Wings may use these details to respond to my enquiry. See the{' '}
                    <Link to="/privacy" className="font-semibold text-brand-navy underline underline-offset-2">
                      privacy policy
                    </Link>
                    .
                  </span>
                </label>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-muted">Your details are used only to respond to this enquiry.</p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 rounded bg-brand-orange px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send enquiry'} <Icon name="arrow-right" className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#eef3f9] py-12 md:py-14">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14`}>
          <div className="relative h-[300px] overflow-hidden rounded border border-line bg-sand sm:h-[340px]">
            <iframe
              title="Map of Tegeta, Dar es Salaam"
              aria-label="Map of the Tegeta area in Dar es Salaam, where the Foundation is based"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.google.com/maps?q=Tegeta%2C%20Dar%20es%20Salaam%2C%20Tanzania&z=14&output=embed"
            ></iframe>
          </div>
          <div>
            <Label>Our location</Label>
            <h2 className="display-lg mt-4 text-brand-deep">Visit us in Tegeta</h2>
            <p className="mt-4 max-w-[44ch] text-[1.0625rem] leading-8 text-muted">
              We are based in Tegeta, Dar es Salaam, Tanzania. Please call or message us on WhatsApp for directions before you visit.
            </p>
            <p className="mt-4 flex items-center gap-2 font-semibold text-brand-deep">
              <Icon name="map-pin" className="h-5 w-5 text-brand-orange-ink" /> Tegeta, Dar es Salaam, Tanzania
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tegeta%2C%20Dar%20es%20Salaam%2C%20Tanzania"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 items-center gap-2 rounded border border-line-strong bg-surface px-5 text-[0.9375rem] font-semibold text-brand-navy hover:border-brand-navy"
            >
              <Icon name="map" className="h-4 w-4" /> Open in Google Maps <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="section -mb-20 bg-sand-warm">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <Label>Before you contact us</Label>
            <h2 className="display-md mt-3 text-brand-deep">Help us route your enquiry clearly.</h2>
            <p className="mt-4 max-w-md leading-7 text-muted">
              Choose the closest subject in the form and include only the information needed for us to understand your request.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {responsePoints.map(([i, t, d, link]) => (
              <div key={t} className="border-t border-line pt-5">
                <Icon name={i} className="h-5 w-5 text-brand-orange" />
                <h3 className="mt-3 font-semibold text-brand-deep">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{d}</p>
                {link && (
                  <Link to={link.to} className="mt-3 inline-block text-sm font-semibold text-brand-navy underline decoration-brand-orange underline-offset-4">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
