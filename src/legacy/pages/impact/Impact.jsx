import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import { photos } from '../../data/photos.js'
import '../home/home.css'

// Our Impact: what the Foundation works on and how, with links to the pages a
// visitor can check for themselves. The only figures shown are the founding
// year and the number of program areas; no outcome numbers are published yet.

const focus = [
  ['users-round', 'Supporting families', 'Guidance, practical advice and activities for families and caregivers.'],
  ['book-open', 'Building everyday skills', 'Inclusive learning and hands-on activities that build confidence and independence.'],
  ['users', 'Connecting our community', 'Community activities that bring people together and raise awareness in Tegeta.'],
]

const stages = [
  ['megaphone', 'Awareness', 'Sharing information and opening conversations.'],
  ['book-open', 'Understanding', 'Building knowledge for families, caregivers and the community.'],
  ['settings', 'Practice', 'Hands-on learning and practical activities in real settings.'],
  ['users-round', 'Support', 'Ongoing guidance and a welcoming community.'],
]

// Captions state only what is visible in each photograph.
const moments = [
  ['/photos/foundation/pool-group.webp', 'Young people swimming in the pool during a group session', 'Learning together in the water.', 'Young people swimming during a group pool session.'],
  [photos.galleryExtra1, 'Young people on a swing set in the play area', 'Play in the open air.', 'Young people on the swing set in the play area.'],
  [photos.hero, 'Foundation staff, young people and visitors gathered in the classroom', 'Together in the classroom.', 'Staff, young people and visitors gathered in the Foundation classroom.'],
]

const learnMore = [
  ['How we earn trust', '/about#commitments'],
  ['Privacy policy', '/privacy'],
]

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'

function Rule() {
  return <div aria-hidden="true" className="h-[3px] w-10 bg-brand-orange" />
}

function IconDisc({ name, onNavy = false }) {
  return (
    <span className={`mx-auto grid h-20 w-20 place-items-center rounded-full ${onNavy ? 'bg-brand-navy text-brand-orange' : 'bg-[#fde3c0] text-brand-orange-ink'}`} aria-hidden="true">
      <Icon name={name} className="h-9 w-9" />
    </span>
  )
}

export default function Impact() {
  const [active, setActive] = useState(0)
  const [src, alt, title, caption] = moments[active]

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b border-line">
        <div className={`${wrap} grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:py-16`}>
          <div>
            <p className="font-semibold text-brand-orange-ink">Our Impact</p>
            <h1 className="home-h1 mt-3 max-w-[10ch] text-brand-deep">Building inclusion, every day.</h1>
            <p className="mt-6 max-w-[30rem] text-lg leading-8 text-muted">Practical learning, family guidance and community activities in Tegeta, Dar es Salaam.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Explore our programs" href="/programs" />
              <Button label="Get involved" href="/get-involved" variant="outline" />
            </div>
          </div>
          <div className="relative">
            <svg aria-hidden="true" viewBox="0 0 200 60" fill="none" className="absolute -bottom-5 -right-4 z-10 w-[38%]">
              <path d="M6 54C70 46 140 28 194 6M30 58c56-10 110-26 160-46" stroke="var(--color-brand-orange)" strokeWidth="7" strokeLinecap="round" />
            </svg>
            <img
              src="/photos/foundation/pool-group.webp"
              alt="Young people swimming in the pool during a group session"
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="aspect-[5/4] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-line bg-sand-warm">
        <dl className={`${wrap} grid divide-y divide-line-strong sm:grid-cols-2 sm:divide-x sm:divide-y-0`}>
          {[
            ['calendar-days', 'Founded', '2025'],
            ['users-round', 'Program areas', '5'],
          ].map(([icon, label, value]) => (
            <div key={label} className="flex items-center gap-5 py-7 sm:justify-center">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#fde3c0] text-brand-orange-ink" aria-hidden="true">
                <Icon name={icon} className="h-7 w-7" />
              </span>
              <div>
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="tabular home-serif text-4xl text-brand-deep">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      {/* Focus */}
      <section className="section">
        <div className={wrap}>
          <p className="font-semibold text-brand-orange-ink">Our focus</p>
          <h2 className="home-h1 mt-3 max-w-[14ch] text-brand-deep">Where our work makes a difference.</h2>
          <p className="mt-5 max-w-[58ch] text-[1.0625rem] leading-8 text-muted">
            We support children, older people, families and caregivers in Tegeta, Dar es Salaam through practical learning, guidance and community
            activities.
          </p>
          <ul className="mt-10 grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {focus.map(([icon, title, text]) => (
              <li key={title} className="py-8 text-center md:px-8 md:py-2">
                <IconDisc name={icon} />
                <h3 className="home-serif mt-5 text-[1.375rem] text-brand-deep">{title}</h3>
                <p className="mx-auto mt-2 max-w-[30ch] text-[0.9375rem] leading-7 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How the work is done */}
      <section className="bg-brand-deep py-14 text-white md:py-20">
        <div className={`${wrap} grid gap-12 lg:grid-cols-2 lg:gap-0`}>
          <div className="lg:pr-14">
            <Rule />
            <h2 className="home-h2 mt-4 text-white">
              Small steps. <span className="block">Shared possibilities.</span>
            </h2>
            <p className="mt-5 max-w-[42ch] text-[1.0625rem] leading-8 text-on-navy">
              We raise awareness, provide education, and offer practical support and guidance so that children, older people, families and caregivers
              can take part more fully in everyday life.
            </p>
            <div className="mt-8">
              <Button label="View our programs" href="/programs" />
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:border-l lg:border-navy-line lg:pl-14">
            {stages.map(([icon, title, text]) => (
              <li key={title} className="text-center">
                <IconDisc name={icon} onNavy />
                <h3 className="home-serif mt-4 text-xl text-white">{title}</h3>
                <p className="mx-auto mt-1 max-w-[24ch] text-[0.9375rem] leading-6 text-on-navy">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Moments */}
      <section className="section">
        <div className={wrap}>
          <Rule />
          <h2 className="home-h2 mt-4 text-brand-deep">Moments from our activities.</h2>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-12">
            <img key={src} src={src} alt={alt} loading="lazy" decoding="async" className="aspect-[16/9] w-full rounded object-cover object-[center_35%]" />
            <div aria-live="polite">
              <Rule />
              <h3 className="home-serif mt-4 text-2xl leading-snug text-brand-deep">{title}</h3>
              <p className="mt-2 max-w-[34ch] text-[1.0625rem] leading-7 text-muted">{caption}</p>
              <div className="mt-4 flex" role="group" aria-label="Activity photos">
                {moments.map((m, i) => (
                  <button
                    key={m[0]}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show photo ${i + 1} of ${moments.length}`}
                    aria-current={i === active ? 'true' : undefined}
                    className="grid h-11 w-9 place-items-center"
                  >
                    <span className={`block h-3 w-3 rounded-full border-2 border-brand-orange ${i === active ? 'bg-brand-orange' : ''}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-5 border-t border-line pt-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Rule />
              <h2 className="home-serif mt-4 text-[1.75rem] text-brand-deep">Learn more about our work.</h2>
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-1 lg:divide-x lg:divide-line">
              {learnMore.map(([label, href]) => (
                <li key={href} className="lg:pl-8 lg:first:pl-0">
                  <Link to={href} className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand-deep underline decoration-brand-navy underline-offset-4 hover:text-brand-navy">
                    {label} <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 max-w-[72ch] text-sm leading-6 text-muted">
            We do not publish beneficiary totals, outcome percentages or testimonials yet. When we have collected them in a consent-based way, they will
            appear on this website with the method stated next to them.
          </p>
        </div>
      </section>

      {/* Call to act */}
      <section className="-mb-20 bg-[#fdebd3]">
        <div className={`${wrap} flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between`}>
          <div>
            <Rule />
            <h2 className="home-h2 mt-4 max-w-[14ch] text-brand-deep">Be part of a more inclusive tomorrow.</h2>
            <p className="mt-4 max-w-[46ch] text-[1.0625rem] leading-8 text-muted">
              Your time, skills or support can help us continue creating opportunities for children, older people, families and caregivers in Tegeta,
              Dar es Salaam.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button label="Volunteer" href="/get-involved" />
            <Button label="Partner" href="/contact" variant="outline" />
            <Button label="Donate" href="/donate" variant="outline" />
          </div>
        </div>
      </section>
    </>
  )
}
