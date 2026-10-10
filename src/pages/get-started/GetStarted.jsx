import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import { photos } from '../../data/photos.js'
import { SITE } from '../../config/site.js'
import { useSeo } from '../../utils/useSeo.js'
import '../home/home.css'

// Find Support: one entry point that matches a family's situation to the right
// program, then explains how getting in touch works. Every card points at an
// existing program or page; nothing here promises eligibility rules or
// services the Foundation has not described elsewhere.

const DESCRIPTION =
  'Not sure where to begin? Choose the situation closest to yours and see which Eagle’s Wings program can help, and how to get in touch.'

const situations = [
  {
    icon: 'users-round',
    title: 'Support for my child',
    text: 'My child has autism, ADHD, Down syndrome or an intellectual disability. I want to understand their condition, communicate better and help them take part at home and in the community.',
    links: [
      ['Neuro-diversity Awareness', '/programs/program-neurodiversity'],
      ['Education & Therapy Guidance', '/programs/program-education-therapy'],
    ],
  },
  {
    icon: 'heart',
    title: 'Caring for an older person',
    text: 'I look after an older person. I want practical guidance on nutrition, safe movement, mental stimulation and daily routines.',
    links: [['Elderly Care Support', '/programs/program-elderly-care']],
  },
  {
    icon: 'chart-no-axes-column-increasing',
    title: 'Building everyday independence',
    text: 'A young person in my family is building everyday independence. I want structured help with daily routines, communication and practical life skills.',
    links: [['Life Skills Programs', '/programs/program-life-skills']],
  },
  {
    icon: 'users',
    title: 'Support as a caregiver',
    text: 'I am a caregiver, at home or at work. I want more knowledge, confidence and consistency in the support I give every day.',
    links: [['Caregiver Training', '/programs/program-caregiver-training']],
  },
  {
    icon: 'package',
    title: 'Therapy and learning equipment',
    text: 'I need therapy, sensory or learning equipment. I want to browse items with prices in TZS and order on WhatsApp.',
    links: [['Equipment catalogue', '/catalogue']],
  },
  {
    icon: 'hand-heart',
    title: 'I want to help',
    text: 'I want to volunteer, partner or donate: giving time, skills, a partnership or financial support.',
    links: [
      ['Get involved', '/get-involved'],
      ['Donate', '/donate'],
    ],
  },
]

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
const goLink = 'inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-deep hover:text-brand-navy'

function Eyebrow({ children, onNavy = false }) {
  return <p className={`home-eyebrow ${onNavy ? 'text-brand-orange' : 'text-brand-orange-ink'}`}>{children}</p>
}

export default function GetStarted() {
  useSeo({ title: 'Find Support', description: DESCRIPTION, path: '/get-started', image: '/photos/hero-wheelchair.webp' })

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-brand-deep text-white">
        <div className="mx-auto grid max-w-[96rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-16 lg:pl-8 lg:pr-12 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <Eyebrow onNavy>Find support</Eyebrow>
            <h1 className="home-h1 mt-4 max-w-[12ch] text-white">Find the right support for your family.</h1>
            <p className="mt-6 max-w-[30rem] text-lg leading-8 text-on-navy">Tell us what you need. We will help you find a useful starting point.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Ask us on WhatsApp" href={SITE.whatsapp} icon="whatsapp" />
              <Button label="Contact the team" href="/contact" variant="light" icon={null} />
            </div>
          </div>
          <div className="grid grid-cols-[1.5fr_1fr] gap-1 border-t-4 border-brand-orange lg:border-l-4 lg:border-t-0">
            <div className="relative row-span-2 min-h-[320px] lg:min-h-[440px]">
              <img
                src="/photos/hero-wheelchair.webp"
                alt="A young woman who uses a wheelchair, with a Foundation caregiver behind her"
                width={607}
                height={1080}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
              />
            </div>
            <div className="relative">
              <img src={photos.learningDrawing} alt="Two young people colouring a drawing at a low table" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="relative">
              <img src={photos.child} alt="A Foundation staff member and a young girl smiling together" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[center_55%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="section">
        <div className={wrap}>
          <Eyebrow>Start with your situation</Eyebrow>
          <h2 className="home-h2 mt-3 text-brand-deep">What would you like help with?</h2>
          <p className="mt-3 text-[1.0625rem] leading-8 text-muted">Choose the situation closest to yours. More than one can apply.</p>
          <ul className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {situations.map((s) => (
              <li key={s.title} className="flex flex-col rounded border border-line bg-surface p-6 sm:p-7">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[#fde3c0] text-brand-orange-ink" aria-hidden="true">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="home-serif mt-4 text-[1.375rem] leading-snug text-brand-deep">{s.title}</h3>
                <p className="mt-2 flex-1 text-[0.9375rem] leading-7 text-muted">{s.text}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-sm text-subtle">Go to:</p>
                  <ul>
                    {s.links.map(([label, href]) => (
                      <li key={href}>
                        <Link to={href} className={goLink}>
                          {label} <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-4 rounded bg-[#fdf0dc] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex gap-4">
              <Icon name="info" className="mt-0.5 h-6 w-6 shrink-0 text-brand-orange-ink" />
              <div>
                <h3 className="home-serif text-lg text-brand-deep">Not sure where to start?</h3>
                <p className="text-[0.9375rem] leading-6 text-muted">Tell us about your situation and we will help you find the right starting point.</p>
              </div>
            </div>
            <Link to="/contact" className={`${goLink} shrink-0 text-brand-orange-ink`}>
              Tell us about your situation <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="border-y border-line bg-sand-warm py-14 md:py-16">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,.8fr)_minmax(0,1.4fr)] lg:gap-12`}>
          <div>
            <Eyebrow>Getting started</Eyebrow>
            <h2 className="home-h2 mt-3 max-w-[12ch] text-brand-deep">Getting started is a conversation.</h2>
            <p className="mt-5 max-w-[32ch] text-[1.0625rem] leading-8 text-muted">There is no complicated application. Getting started begins with a conversation.</p>
          </div>
          <img
            src={photos.family}
            alt="A Foundation staff member with a young child"
            width={1200}
            height={1599}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded object-cover object-[center_75%] lg:aspect-square"
          />
          <ol className="divide-y divide-line-strong">
            {steps.map(([title, text], i) => (
              <li key={title} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                <span className="tabular grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#fde3c0] font-display text-lg text-brand-orange-ink">{i + 1}</span>
                <div>
                  <h3 className="home-serif text-xl text-brand-deep">{title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-7 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact and reading */}
      <section className="section">
        <div className={`${wrap} grid gap-12 lg:grid-cols-2 lg:gap-0`}>
          <div className="lg:pr-12">
            <Eyebrow>Contact us</Eyebrow>
            <h2 className="home-h2 mt-3 text-brand-deep">You can ask us directly.</h2>
            <p className="mt-3 max-w-[44ch] text-[1.0625rem] leading-8 text-muted">Get in touch with our team. Tell us a little about the person and what you need.</p>
            <div className="mt-6 divide-y divide-navy-line rounded bg-brand-deep px-5 text-white">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex min-h-14 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3">
                <span className="flex items-center gap-4 text-on-navy">
                  <Icon name="whatsapp" className="h-5 w-5 text-white" /> WhatsApp
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  Message us <Icon name="arrow-right" className="h-4 w-4" />
                </span>
              </a>
              <a href="tel:+255749044723" className="flex min-h-14 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3">
                <span className="flex items-center gap-4 text-on-navy">
                  <Icon name="phone" className="h-5 w-5 text-white" /> Phone
                </span>
                <span className="tabular font-semibold">+255 749 044 723</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex min-h-14 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3">
                <span className="flex items-center gap-4 text-on-navy">
                  <Icon name="mail" className="h-5 w-5 text-white" /> Email
                </span>
                <span className="min-w-0 font-semibold [overflow-wrap:anywhere]">{SITE.email}</span>
              </a>
            </div>
            <div className="mt-6">
              <Button label="Use the contact form" href="/contact" />
            </div>
          </div>
          <div className="lg:border-l lg:border-line lg:pl-12">
            <Eyebrow>Helpful reading</Eyebrow>
            <h2 className="home-serif mt-3 text-[1.9rem] leading-tight text-brand-deep">Helpful reading.</h2>
            <p className="mt-3 text-[1.0625rem] leading-8 text-muted">These articles may help as you explore your options.</p>
            <ul className="mt-6 divide-y divide-line rounded border border-line bg-surface">
              {reading.map(([title, href]) => (
                <li key={href}>
                  <Link to={href} className="group flex min-h-14 items-center gap-4 px-4 py-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-[#fde3c0] text-brand-orange-ink" aria-hidden="true">
                      <Icon name="file-text" className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-[0.9375rem] font-medium text-brand-deep group-hover:text-brand-navy">{title}</span>
                    <Icon name="arrow-right" className="h-4 w-4 shrink-0 text-brand-orange-ink transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-4 rounded border-l-[3px] border-brand-orange bg-[#fdf0dc] p-5">
              <Icon name="info" className="mt-0.5 h-6 w-6 shrink-0 text-brand-orange-ink" />
              <p className="text-sm leading-6 text-muted">
                <strong className="block text-[0.9375rem] text-brand-deep">We offer education and support, not emergency or medical care.</strong>
                In an emergency, call 112 or go to the nearest health facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stay connected */}
      <section className="-mb-20 border-b border-navy-line bg-brand-deep text-white">
        <div className={`${wrap} flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between`}>
          <div>
            <Eyebrow onNavy>Stay connected</Eyebrow>
            <h2 className="home-h2 mt-3 max-w-[18ch] text-white">Follow our stories, events and practical guidance.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button label="Follow on Instagram" href="https://instagram.com/eaglewings.tz" icon="instagram" />
            <Button label="Read the latest articles" href="/blog" variant="light" />
          </div>
        </div>
      </section>
    </>
  )
}
