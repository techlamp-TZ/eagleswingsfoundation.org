import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import { SITE } from '../../config/site.js'
import { useSeo } from '../../utils/useSeo.js'
import { pathways } from '../../data/pathways.js'

// "Start here": one entry point that matches a family's situation to the right
// program, then explains how getting in touch works. Every pathway points at an
// existing program or page; nothing here promises eligibility rules or services
// the Foundation has not described elsewhere.

const DESCRIPTION =
  'Not sure where to begin? Choose the situation closest to yours and see which Eagle’s Wings program can help, and how to get in touch.'

const steps = [
  ['Get in touch', 'Message us on WhatsApp, call, email or use the contact form. Tell us a little about the person and what you need.'],
  ['Talk it through', 'We listen, answer your questions and point you to the program, guidance or professional that fits.'],
  ['Agree the next step', 'Together we agree what happens next, for example a session, a workshop or practical guidance for home.'],
]

const reading = [
  ['When and how to seek professional guidance', '/blog/article-when-and-how-to-seek-professional-guidance-faq'],
  ['Preparing for a therapy or assessment appointment', '/blog/article-preparing-for-a-therapy-or-assessment-appointment'],
  ['Common terms in therapy and assessment, in plain language', '/blog/article-understanding-common-terms-in-therapy-and-assessment'],
]

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
const linkCls = 'inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy underline decoration-brand-orange underline-offset-4 hover:text-brand-deep'

export default function GetStarted() {
  useSeo({ title: 'Start Here', description: DESCRIPTION, path: '/get-started', image: '/photos/hero-wheelchair.webp' })

  return (
    <>
      <PageHero
        kicker="Start here"
        title="Find the right support for your family."
        text="Not sure which program fits? Choose the situation closest to yours. We will point you to the right place, and you can always ask us directly."
        img="/photos/hero-wheelchair.webp"
        alt="A Foundation caregiver with a young woman who uses a wheelchair"
        actions={<Button label="Ask us on WhatsApp" href={SITE.whatsapp} icon="whatsapp" />}
      />

      <section className="section">
        <div className={wrap}>
          <div className="eyebrow text-brand-orange">Step 1 · Your situation</div>
          <h2 className="display-lg mt-3 max-w-3xl text-brand-deep">Which of these sounds most like you?</h2>
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {pathways.map((p) => (
              <article key={p.who} className="flex flex-col bg-white p-6 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded border border-line bg-sand">
                  <Icon name={p.icon} className="h-6 w-6 text-brand-orange" />
                </span>
                <h3 className="mt-5 font-display text-xl leading-snug text-brand-deep">{p.who}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{p.need}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <div className="mono-label text-subtle">Where to go</div>
                  <ul className="mt-2 space-y-2">
                    {p.programs.map(([label, href]) => (
                      <li key={href}>
                        <Link to={href} className={linkCls}>
                          {label} <Icon name="arrow-right" className="h-3.5 w-3.5 text-brand-orange" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Your situation is not listed, or more than one fits?{' '}
            <Link to="/contact" className={linkCls}>
              Tell us about it
            </Link>{' '}
            and we will help you find the right starting point.
          </p>
        </div>
      </section>

      <section className="section bg-sand">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16`}>
          <div>
            <div className="eyebrow text-brand-orange">Step 2 · Getting started</div>
            <h2 className="display-lg mt-3 text-brand-deep">How it works.</h2>
            <p className="mt-5 text-base leading-7 text-muted">
              There is no complicated application. Getting started begins with a conversation.
            </p>
          </div>
          <ol className="border-t border-line">
            {steps.map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-6">
                <span className="font-display text-3xl text-brand-orange">{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl text-brand-deep">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <div className="eyebrow text-brand-orange">Contact us to get started</div>
            <h2 className="display-md mt-3 text-brand-deep">Talk to the team.</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 py-4 hover:text-brand-orange">
                <span className="mono-label text-subtle">WhatsApp</span>
                <span className="font-semibold text-brand-deep">Message us</span>
              </a>
              <a href="tel:+255749044723" className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4">
                <span className="mono-label text-subtle">Phone</span>
                <span className="font-semibold text-brand-deep">+255 749 044 723</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4">
                <span className="mono-label text-subtle">Email</span>
                <span className="min-w-0 font-semibold text-brand-deep [overflow-wrap:anywhere]">{SITE.email}</span>
              </a>
            </div>
            <div className="mt-6">
              <Button label="Use the contact form" href="/contact" variant="dark" />
            </div>
          </div>
          <div>
            <div className="eyebrow text-brand-orange">Before you start</div>
            <h2 className="display-md mt-3 text-brand-deep">Helpful reading.</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {reading.map(([t, href]) => (
                <li key={href}>
                  <Link to={href} className="flex items-center justify-between gap-4 py-4 text-brand-deep hover:text-brand-orange">
                    <span className="font-medium">{t}</span>
                    <Icon name="arrow-up-right" className="h-4 w-4 shrink-0 text-brand-orange" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3 border-l-[3px] border-brand-orange bg-paper p-5">
              <Icon name="shield-alert" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
              <p className="text-sm leading-6 text-muted">
                Eagle’s Wings offers education and support, not emergency or medical care. In an emergency, call 112 or go to the nearest health
                facility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
