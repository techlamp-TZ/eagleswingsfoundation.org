import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import { SITE } from '../../config/site.js'
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

const rowCls = 'flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-5'
const labelCls = 'mono-label mono-label-lg text-brand-deep'

export default function ContactV1() {
  const { status, whatsappLink, submit, reset, done } = useEnquiry({ form: 'contact' })

  useSeo({ title: 'Contact', description: DESCRIPTION, path: '/contact' })

  return (
    <>
      <section className="bg-sand-warm">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mono-label flex items-center gap-2 text-brand-navy">
              <span className="text-lg leading-none text-brand-orange">+</span> Contact
            </div>
            <h1 className="display-xl mt-5 text-brand-deep">Start a conversation.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Contact us about programs, volunteering, partnerships, donations, events or general enquiries.
            </p>
          </div>
          <div className="border-t border-line">
            <a href="tel:+255749044723" className={rowCls}>
              <span className="mono-label text-subtle">Phone</span>
              <span className="font-semibold text-brand-deep">+255 749 044 723</span>
            </a>
            <a href={`mailto:${SITE.email}`} className={rowCls}>
              <span className="mono-label text-subtle">Email</span>
              <span className="min-w-0 font-semibold text-brand-deep [overflow-wrap:anywhere]">{SITE.email}</span>
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={rowCls}>
              <span className="mono-label text-subtle">WhatsApp</span>
              <span className="font-semibold text-brand-deep">Message us</span>
            </a>
            <div className={rowCls}>
              <span className="mono-label text-subtle">Location</span>
              <span className="text-right font-semibold text-brand-deep">Tegeta, Dar es Salaam, Tanzania</span>
            </div>
            <a href="https://instagram.com/eaglewings.tz" target="_blank" rel="noopener noreferrer" className={rowCls}>
              <span className="mono-label text-subtle">Social</span>
              <span className="font-semibold text-brand-deep">Instagram @Eaglewings.tz</span>
            </a>
            <Link to="/faq" className={rowCls}>
              <span className="mono-label text-subtle">Questions</span>
              <span className="font-semibold text-brand-deep">Browse the FAQ</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <h2 className="display-lg text-brand-deep">How can we help?</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              Tell us what you need and we will point you to the right person. Choose a subject so your message reaches the appropriate team.
            </p>
            <div className="mt-8 max-w-md border-t border-line pt-6">
              <div className="mono-label text-brand-orange">Need a quick answer?</div>
              <p className="mt-3 leading-7 text-brand-deep">
                Call us on +255 749 044 723 or read the{' '}
                <Link to="/faq" className="underline underline-offset-2">
                  frequently asked questions
                </Link>
                .
              </p>
            </div>
          </div>

          <div>
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

      <section className="border-y border-line">
        <div className="relative h-[380px] bg-sand">
          <iframe
            title="Map of Tegeta, Dar es Salaam"
            aria-label="Map of the Tegeta area in Dar es Salaam, where the Foundation is based"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            src="https://www.google.com/maps?q=Tegeta%2C%20Dar%20es%20Salaam%2C%20Tanzania&z=14&output=embed"
          ></iframe>
        </div>
        <div className="bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6 lg:px-8">
            <div>
              <div className="mono-label text-brand-navy">Tegeta, Dar es Salaam, Tanzania</div>
              <p className="mt-2 text-sm leading-6 text-muted">Call or message us on WhatsApp for directions before you visit.</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tegeta%2C%20Dar%20es%20Salaam%2C%20Tanzania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy underline underline-offset-4"
            >
              Open in Google Maps <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-brand-orange" />
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-sand-warm">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <div className="eyebrow text-brand-orange">Before you contact us</div>
            <h2 className="display-md mt-3 text-brand-deep">Help us route your enquiry clearly.</h2>
            <p className="mt-4 max-w-md leading-7 text-muted">
              Choose the closest subject in the form and include only the information needed for the Foundation to understand your request.
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
