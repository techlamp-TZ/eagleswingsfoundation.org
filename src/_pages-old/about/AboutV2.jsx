import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import { photos } from '../../data/photos.js'
import '../home/home.css'

const FeaturedArticles = lazy(() => import('./FeaturedArticles.jsx'))

// `photo` (image URL) and `bio` (one or two sentences) are optional — add them
// once the person has approved a headshot and a short biography.
const leadership = [
  { name: 'Stella Paul Rweyemamu', role: 'Director', initials: 'SR' },
  { name: 'Tegemeo Paschal Nsonda', role: 'Executive Secretary', initials: 'TN' },
  { name: 'Paul Alex Rweyemamu', role: 'Treasurer', initials: 'PR' },
  { name: 'Winifrida Igembe Rweyemamu', role: 'Member', initials: 'WR' },
  { name: 'Doreen Temistocles Igembe', role: 'Member', initials: 'DI' },
]

const facts = [
  ['calendar-days', 'Founded in', '2025'],
  ['map-pin', 'Based in', 'Tegeta, Dar es Salaam'],
  ['users-round', 'Programs across', '5 focus areas'],
  ['heart', 'Community-led', 'support'],
]

// Mission, vision and promise in the Foundation's own wording.
const purpose = [
  [
    'target',
    'Our mission',
    'Empower, encourage and educate.',
    'Our mission is to empower, encourage and educate less privileged, special needs and elderly individuals by helping, caring for and supporting their needs.',
  ],
  [
    'eye',
    'Our vision',
    'A fully inclusive society where special needs individuals are valued equally.',
    'The vision for Eagle’s Wings Foundation is to create full inclusive awareness that the special needs population and individuals with disabilities are valued equally. They will receive comprehensive support in order to reach their full potential.',
  ],
  [
    'heart',
    'Our promise',
    'Grow carefully. Serve respectfully. Report truthfully.',
    'As Eagle’s Wings expands, the website and programs are designed to keep dignity, inclusion, accountability and practical usefulness at the centre.',
  ],
]

const values = [
  ['gem', 'Dignity', 'People deserve support that respects identity, choice and potential.'],
  ['users-round', 'Inclusion', 'Support works best when families, caregivers and communities are included.'],
  ['chart-no-axes-column-increasing', 'Empowerment', 'We build independence, skills and confidence through practical learning.'],
  ['book-open', 'Early support', 'We offer timely guidance, learning and care.'],
  ['shield-check', 'Consent & safeguarding', 'We listen, respect choices and keep people safe.'],
  ['settings', 'Accountability', 'We aim to be transparent, responsible and committed to learning and improvement.'],
]

const pillars = [
  ['Community Inclusion', 'Ensuring individuals are active, contributing members of their local communities rather than being isolated.'],
  ['Rights and Dignity', 'They deserve human rights, equality and dignity, and should be treated with respect.'],
  ['Empowerment and Independence', 'We teach vocational training and independent living skills so individuals can generate their own income and become independent.'],
  ['Early Support', 'Providing early intervention therapies, family counseling and educational opportunities for caregivers.'],
]

const commitments = [
  ['shield-check', 'Transparent reporting', 'Publish approved reports and verified results as systems mature.'],
  ['user-check', 'Consent-aware stories', 'Use beneficiary, caregiver and partner stories only with appropriate consent.'],
  ['database', 'Responsible stewardship', 'Connect future donations to clear program priorities and accountable use.'],
  ['refresh-cw', 'Continuous learning', 'Use feedback and evidence to improve programs before scaling them.'],
]

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'

function Rule() {
  return <div aria-hidden="true" className="h-[3px] w-10 bg-brand-orange" />
}

function Stroke({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 40" fill="none" className={className}>
      <path d="M4 34C52 30 110 20 156 4M22 38c44-6 88-16 124-30" stroke="var(--color-brand-orange)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

// Static three-photo collage (same framing as the home hero, no motion).
function Photo({ src, alt, position = 'center', ratio, className, rot }) {
  return (
    <div className={`absolute ${className}`} style={{ transform: `rotate(${rot})` }}>
      <div className="collage-frame" style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} data-active="true" decoding="async" style={{ objectPosition: position }} />
      </div>
    </div>
  )
}

export default function AboutV2() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-brand-deep text-white">
        <div className={`${wrap} grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-16`}>
          <div>
            <p className="home-eyebrow text-brand-orange">About Eagle’s Wings</p>
            <h1 className="home-h1 mt-4 text-white">
              People first. <span className="block">Possibility always.</span>
            </h1>
            <p className="mt-6 max-w-[30rem] text-lg leading-8 text-on-navy">
              A community foundation supporting people with disabilities and their families in Tegeta, Dar es Salaam.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Explore our programs" href="/programs" />
              <Button label="Get involved" href="/get-involved" variant="light" />
            </div>
          </div>
          <div className="relative mx-auto aspect-[10/8] w-full max-w-[32rem] lg:max-w-none">
            <Stroke className="absolute -left-[4%] top-[14%] w-[22%] -rotate-[28deg]" />
            <Stroke className="absolute -right-[2%] top-[40%] w-[20%] rotate-[150deg]" />
            <Photo
              src={photos.hero}
              alt="Foundation staff, young people and visitors gathered in the classroom"
              position="center 30%"
              ratio="4 / 3"
              className="right-0 top-0 w-[72%]"
              rot="2deg"
            />
            <Photo
              src={photos.child}
              alt="A Foundation staff member and a young girl smiling together"
              position="center 58%"
              ratio="5 / 4"
              className="bottom-0 left-0 z-10 w-[42%]"
              rot="-4deg"
            />
            <Photo
              src={photos.galleryExtra1}
              alt="Young people on a swing set in the play area"
              ratio="4 / 3"
              className="bottom-[2%] right-[4%] z-10 w-[44%]"
              rot="3deg"
            />
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-line bg-surface">
        <dl className={`${wrap} grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x`}>
          {facts.map(([icon, label, value]) => (
            <div key={label} className="flex items-center gap-4 py-5 lg:justify-center lg:px-6">
              <Icon name={icon} className="h-8 w-8 shrink-0 text-brand-orange-ink" />
              <div>
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="font-display text-[1.0625rem] text-brand-deep">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      {/* Our story */}
      <section className="section bg-sand-warm">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16`}>
          <div>
            <div className="flex items-center gap-3">
              <Rule />
              <p className="home-eyebrow text-brand-deep">Our story</p>
            </div>
            <h2 className="home-h2 mt-4 text-brand-deep">
              Compassion in action. <span className="block">A better tomorrow, together.</span>
            </h2>
            <div className="mt-6 max-w-[60ch] space-y-4 text-[1.0625rem] leading-8 text-muted">
              <p>
                Eagle’s Wings Foundation Tanzania was founded in 2025 in Tegeta, Dar es Salaam, to improve the lives of people with disabilities and
                challenges, particularly children and older people.
              </p>
              <p>
                We focus on practical learning and community support for them and for the families and caregivers around them, so that understanding
                turns into everyday participation and belonging.
              </p>
            </div>
            <Link
              to="/blog/article-mission-and-vision-in-plain-words"
              className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-deep underline decoration-brand-orange underline-offset-4 hover:text-brand-navy"
            >
              Read our mission in plain words <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink" />
            </Link>
          </div>
          <img
            src={photos.people}
            alt="Two men smiling in front of the classroom whiteboard"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded object-cover object-[center_22%]"
          />
        </div>
      </section>

      {/* Mission, vision, promise */}
      <section id="mission" className="scroll-mt-28 bg-[#e6f1fb] py-14 md:py-16">
        <div className={wrap}>
          <Rule />
          <h2 className="home-h2 mt-4 text-brand-deep">Why we exist.</h2>
          <ul className="mt-8 grid divide-y divide-[#c9dcee] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {purpose.map(([icon, label, title, text]) => (
              <li key={label} className="py-7 lg:px-8 lg:py-1 lg:first:pl-0 lg:last:pr-0">
                <p className="flex items-center gap-3 text-sm font-semibold text-brand-deep">
                  <Icon name={icon} className="h-8 w-8 text-brand-orange-ink" /> {label}
                </p>
                <h3 className="home-serif mt-4 max-w-[22ch] text-[1.5rem] leading-snug text-brand-deep">{title}</h3>
                <p className="mt-3 max-w-[44ch] text-[0.9375rem] leading-7 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className={wrap}>
          <Rule />
          <h2 className="home-h2 mt-4 text-brand-deep">The values that guide every decision.</h2>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([icon, title, text]) => (
              <li key={title} className="flex gap-4 border-b border-line py-6">
                <Icon name={icon} className="h-8 w-8 shrink-0 text-brand-orange-ink" />
                <div>
                  <h3 className="font-display text-[1.0625rem] text-brand-deep">{title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-7 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dignity */}
      <section className="grid bg-brand-deep text-white lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
          <img
            src={photos.child}
            alt="A Foundation staff member and a young girl smiling together"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_48%]"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16">
          <Rule />
          <h2 className="home-h2 mt-4 max-w-[16ch] text-white">Dignity is at the heart of everything we do.</h2>
          <p className="mt-5 max-w-[48ch] text-[1.0625rem] leading-8 text-on-navy">
            We believe every person deserves to be seen, heard and valued. We support individuals and families to make their own choices, take part
            in their communities and reach their potential with dignity.
          </p>
          <div className="mt-8">
            <Button label="Our approach" href="#pillars" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="section scroll-mt-28 border-b border-line">
        <div className={wrap}>
          <Rule />
          <h2 className="home-h2 mt-4 text-brand-deep">What inclusion looks like in practice.</h2>
          <ol className="mt-8 grid divide-y divide-line sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-y-0">
            {pillars.map(([title, text], i) => (
              <li key={title} className="py-6 lg:px-7 lg:py-1 lg:first:pl-0 lg:last:pr-0">
                <span className="tabular font-display text-xl text-brand-orange-ink">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-display text-[1.0625rem] leading-snug text-brand-deep">{title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-7 text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className={wrap}>
          <Rule />
          <h2 className="home-h2 mt-4 text-brand-deep">Meet the people guiding the mission.</h2>
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-8 text-muted">The people who guide the Foundation’s direction and look after its work.</p>
          <ul className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {leadership.map((m) => (
              <li key={m.name} className="border-b border-line py-6 sm:pr-6 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="h-20 w-20 rounded object-cover" loading="lazy" decoding="async" />
                ) : (
                  <div aria-hidden="true" className="grid h-12 w-12 place-items-center rounded bg-brand-deep font-display text-base text-white">
                    {m.initials}
                  </div>
                )}
                <h3 className="mt-4 font-display text-[1.0625rem] leading-snug text-brand-deep">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">{m.role}</p>
                {m.bio && <p className="mt-3 text-sm leading-6 text-muted">{m.bio}</p>}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-muted">
            Headshots and short biographies will be added once each person has approved their entry. Governance documents are not yet published, because
            each has to be reviewed before it goes online.
          </p>
        </div>
      </section>

      {/* Trust */}
      <section id="commitments" className="scroll-mt-28 bg-[#e6f1fb] py-14 md:py-16">
        <div className={wrap}>
          <Rule />
          <h2 className="home-h2 mt-4 text-brand-deep">How we earn trust.</h2>
          <p className="mt-4 max-w-[70ch] text-[1.0625rem] leading-8 text-muted">
            We share impact figures only when they are verified, testimonials only with consent, and we keep our growth accountable to the families and
            communities we serve. These are four commitments that can be verified over time.
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(([icon, title, text]) => (
              <li key={title}>
                <Icon name={icon} className="h-8 w-8 text-brand-orange-ink" />
                <h3 className="mt-4 font-display text-[1.0625rem] text-brand-deep">{title}</h3>
                <p className="mt-1 max-w-[32ch] text-[0.9375rem] leading-7 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className={wrap}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Rule />
              <h2 className="home-h2 mt-4 text-brand-deep">Practical guidance for everyday life.</h2>
              <p className="mt-4 text-[1.0625rem] leading-8 text-muted">
                Plain-language articles from the Foundation on neuro-diversity, caregiving, healthy ageing and everyday life skills.
              </p>
            </div>
            <div>
              <Button label="Browse all articles" href="/blog" variant="outline" />
            </div>
          </div>
          <Suspense fallback={<div className="mt-12 min-h-[28rem] border-t border-line" />}>
            <FeaturedArticles />
          </Suspense>
        </div>
      </section>

      {/* Together */}
      <section className="-mb-20 grid bg-sand-warm lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20 xl:pl-[max(4rem,calc((100vw-80rem)/2+2rem))]">
          <Rule />
          <h2 className="home-h2 mt-4 max-w-[14ch] text-brand-deep">Together, we can build a better tomorrow.</h2>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-8 text-muted">
            Support can come through volunteering, partnerships, professional expertise, in-kind contributions or financial giving.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button label="Get involved" href="/get-involved" />
            <Button label="Support the mission" href="/donate" variant="outline" />
          </div>
        </div>
        <div className="relative min-h-[300px] lg:min-h-[400px]">
          <img
            src={photos.galleryExtra1}
            alt="Young people playing together on a swing set"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  )
}
