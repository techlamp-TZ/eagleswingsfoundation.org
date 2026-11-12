import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import VideoModal from '../../components/ui/VideoModal.jsx'
import HeroCollage from './HeroCollage.jsx'
import { photos } from '../../data/photos.js'
import { programDetails } from '../../data/programDetails.js'
import { videos, duration } from '../../data/media.js'
import { SITE } from '../../config/site.js'
import { supplier, catalogueItems, catalogueCategories } from '../../data/catalogue.js'
import summary from '../../data/generated/home-summary.json'
import './home.css'

// Home: navy hero with a layered photo collage, then one job per section.
// Hero, visitor pathways, introduction, five programs, session clips,
// transparency, get involved, equipment, family resources and contact.
// All names, figures, prices and clip descriptions come from the site's data
// files; nothing here is invented for the layout.

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
const textLink = 'inline-flex items-center gap-1.5 font-semibold text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-[6px] hover:text-brand-deep'

const money = (n) => `TZS ${n.toLocaleString('en-US')}`
const categoryName = (id) => catalogueCategories.find((c) => c.id === id)?.name ?? id
const videoById = (id) => videos.find((v) => v.id === id)

const heroVideo = videoById('supported-swimming')
const storyVideos = ['supported-swimming', 'drawing-together', 'washing-up-together'].map(videoById)

const programOrder = ['program-neurodiversity', 'program-elderly-care', 'program-education-therapy', 'program-life-skills', 'program-caregiver-training']

// Elderly care has no footage of older people yet, so it renders an icon tile
// instead of a photo that would misrepresent the program.
const programThumbs = {
  'program-neurodiversity': [photos.childSmile, 'A child smiling during a session'],
  'program-education-therapy': [photos.exerciseBike, 'Physical activity on an exercise bike'],
  'program-life-skills': [photos.lifeLaundry, 'Practising a laundry-folding life skill'],
  'program-caregiver-training': [photos.lifeGardening, 'Caregiver and child gardening together'],
}

const pathways = [
  ['users', 'For families', 'Find information and guidance for children, older people, families and caregivers.', 'Get family support', '/get-started'],
  ['book-open', 'Our programs', 'Explore our five areas of support in Tegeta, Dar es Salaam.', 'View our programs', '/programs'],
  ['heart', 'Support our work', 'Volunteer, donate or partner to help build more inclusive communities.', 'Explore ways to help', '/get-involved'],
]

const involved = [
  {
    title: 'Volunteer',
    text: 'Share your time, skills and experience. We confirm the commitment before you start.',
    action: 'Become a volunteer',
    href: '/get-involved',
    icon: 'users',
    photo: [photos.lifeGardening, 'A young person and a caregiver watering the vegetable garden', 'center 40%'],
  },
  {
    title: 'Donate',
    text: 'Send a donation request. The team confirms the details with you; no payment is taken online.',
    action: 'Donate now',
    href: '/donate',
    icon: 'heart',
    primary: true,
    photo: [photos.exerciseBike, 'A young person using an exercise bike in the activity room', 'center 35%'],
  },
  {
    title: 'Partner',
    text: 'For schools, clinics and companies who want a working relationship with the Foundation.',
    action: 'Become a partner',
    href: '/contact',
    icon: 'handshake',
    photo: [photos.people, 'A visitor and a Foundation staff member standing together', 'center 22%'],
  },
]

const catalogueSample = ['fishing-jigsaw-puzzle-3-in-1-large-box', 'gym-ball-pump', 'flashcards', 'arm-trolley']
  .map((id) => catalogueItems.find((i) => i.id === id))
  .filter(Boolean)

// Hand-drawn orange stroke used as a quiet accent under headings.
function Stroke({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 14" fill="none" className={className}>
      <path d="M3 10C40 2 96 2 157 6" stroke="var(--color-brand-orange)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function Eyebrow({ children, onNavy = false }) {
  return <p className={`home-eyebrow ${onNavy ? 'text-brand-orange' : 'text-brand-orange-ink'}`}>{children}</p>
}

export default function HomeV9() {
  const [playing, setPlaying] = useState(null)

  return (
    <>
      {/* 1. Hero: heading and actions beside a layered collage of real photos */}
      <section className="overflow-hidden bg-brand-deep text-white">
        <div className={`${wrap} grid gap-x-12 gap-y-8 pb-12 pt-8 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:pb-16 lg:pt-14`}>
          <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
            <Stroke className="mb-5 h-3 w-28 -rotate-3 sm:w-36" />
            <h1 className="home-h1 max-w-[12ch] text-white">
              Every person deserves a place <span className="text-brand-orange">to belong.</span>
            </h1>
            <p className="mt-6 max-w-[30rem] text-lg leading-8 text-on-navy">
              Supporting children, older people, families and caregivers in Tegeta, Dar es Salaam.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Find support" href="/get-started" />
              <Button label="Get involved" href="/get-involved" variant="light" icon={null} />
            </div>
          </div>
          <HeroCollage video={heroVideo} onPlay={setPlaying} />
        </div>
      </section>

      {/* 2. Visitor pathways */}
      <section className="border-b border-line bg-sand-warm">
        <ul className={`${wrap} grid divide-y divide-line-strong md:grid-cols-3 md:divide-x md:divide-y-0`}>
          {pathways.map(([icon, title, text, action, href]) => (
            <li key={title} className="flex gap-5 py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#fde3c0] text-brand-orange-ink" aria-hidden="true">
                <Icon name={icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-xl text-brand-deep">{title}</h2>
                <p className="mt-2 text-[0.9375rem] leading-6 text-muted">{text}</p>
                <Link to={href} className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-deep hover:text-brand-navy">
                  {action} <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Introduction */}
      <section className="section overflow-hidden">
        <div className={`${wrap} grid items-center gap-10 md:grid-cols-2 lg:gap-20`}>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div aria-hidden="true" className="home-blob absolute -right-3 -top-4 h-2/3 w-2/3 bg-brand-orange" />
            <div className="home-blob relative aspect-[5/4] overflow-hidden bg-sand">
              <img
                src={photos.child}
                alt="A Foundation staff member and a young girl smiling together"
                width={1200}
                height={1599}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
              />
            </div>
          </div>
          <div>
            <Eyebrow>About Eagle’s Wings</Eyebrow>
            <h2 className="home-h2 mt-3 max-w-[14ch] text-brand-deep">Belonging grows through everyday support.</h2>
            <Stroke className="mt-3 h-3 w-32" />
            <p className="mt-6 max-w-[56ch] text-[1.0625rem] leading-8 text-muted">
              Eagle’s Wings Foundation Tanzania was founded in 2025 in Tegeta, Dar es Salaam, to improve the lives of people with disabilities and
              challenges, particularly children and older people. We focus on practical learning for them and for the families and caregivers around
              them.
            </p>
            <p className="mt-7">
              <Link to="/about" className={textLink}>
                About us <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 4. Five areas of support (official program names and descriptions) */}
      <section className="border-y border-line bg-surface py-14 md:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-16`}>
          <div>
            <Eyebrow>Our programs</Eyebrow>
            <h2 className="home-h2 mt-3 max-w-[13ch] text-brand-deep">Care, learning and greater independence.</h2>
            <p className="lead mt-5">Each program is educational and practical. Diagnosis and treatment stay with qualified health professionals.</p>
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-sand">
              <img
                src={photos.hydrotherapyPool}
                alt="A child in a swim ring with a supervisor close by in the pool"
                width={848}
                height={478}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className="mt-6">
              <Link to="/programs" className={textLink}>
                Compare all programs <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </p>
          </div>
          <ol className="grid content-start gap-3">
            {programOrder.map((id, i) => {
              const p = programDetails[id]
              const thumb = programThumbs[id]
              return (
                <li key={id}>
                  <Link
                    to={`/programs/${id}`}
                    className="group grid grid-cols-[2rem_4.5rem_1fr_auto] items-center gap-4 rounded border border-line bg-paper p-3 transition-colors hover:border-brand-navy sm:grid-cols-[2.5rem_5.5rem_1fr_auto] sm:gap-5 sm:p-4"
                  >
                    <span className="tabular font-display text-lg text-brand-orange-ink">{String(i + 1).padStart(2, '0')}</span>
                    {thumb ? (
                      <img src={thumb[0]} alt={thumb[1]} className="aspect-[4/3] w-full rounded object-cover" loading="lazy" decoding="async" />
                    ) : (
                      <span className="grid aspect-[4/3] w-full place-items-center rounded bg-brand-orange text-brand-deep" aria-hidden="true">
                        <Icon name={p.icon} className="h-7 w-7" />
                      </span>
                    )}
                    <span className="min-w-0">
                      <span className="block font-display text-[1.0625rem] leading-snug text-brand-deep group-hover:text-brand-navy">{p.title}</span>
                      <span className="mt-1 line-clamp-2 block text-sm leading-6 text-muted">{p.intro}</span>
                    </span>
                    <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* 5. Session clips: click to play in a dialog, silent */}
      <section className="bg-brand-deep py-14 text-white md:py-20">
        <div className={wrap}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] lg:items-end">
            <div>
              <Eyebrow onNavy>From our sessions</Eyebrow>
              <h2 className="home-h2 mt-3 text-white">See inclusion in action.</h2>
            </div>
            <p className="max-w-md text-[0.9375rem] leading-7 text-on-navy">
              Short clips recorded during Foundation activities in Tegeta. They play only when you press play, and they have no sound.
            </p>
          </div>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {storyVideos.map((v) => (
              <li key={v.id}>
                <button
                  type="button"
                  onClick={() => setPlaying(v)}
                  className="group relative block aspect-[16/10] w-full overflow-hidden rounded border-4 border-brand-cream bg-brand-navy"
                  aria-label={`Play video: ${v.title}, ${duration(v.seconds)}, no sound`}
                >
                  <img src={v.poster} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-brand-deep transition-transform group-hover:scale-105">
                      <Icon name="play" className="h-6 w-6 translate-x-0.5 fill-current" />
                    </span>
                  </span>
                </button>
                <h3 className="mt-4 font-display text-lg text-white">{v.title}</h3>
                <p className="mt-1 text-[0.9375rem] leading-6 text-on-navy">{v.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 font-semibold text-white underline decoration-brand-orange decoration-2 underline-offset-[6px] hover:text-brand-orange"
            >
              More photos and clips in the gallery <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* 6. Transparency: verified facts only */}
      <section className="border-b border-line bg-sand-warm py-14 md:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16`}>
          <div>
            <Eyebrow>Our impact</Eyebrow>
            <h2 className="home-h2 mt-3 text-brand-deep">
              A young foundation. <span className="block">A lasting commitment.</span>
            </h2>
            <p className="mt-5 max-w-[52ch] text-[0.9375rem] leading-7 text-muted">
              Founded in 2025, Eagle’s Wings Foundation Tanzania supports children, older people, families and caregivers in Tegeta. Our first annual
              report is not published yet, and we do not publish estimates in the meantime.
            </p>
          </div>
          <dl className="grid divide-y divide-line-strong sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="py-6 sm:px-6 sm:py-2 sm:first:pl-0">
              <Icon name="calendar-days" className="h-8 w-8 text-brand-orange-ink" />
              <dd className="tabular home-serif mt-4 text-4xl text-brand-deep">2025</dd>
              <dt className="mt-1 text-sm leading-6 text-muted">Founded in Tegeta, Dar es Salaam</dt>
            </div>
            <div className="py-6 sm:px-6 sm:py-2">
              <Icon name="layers" className="h-8 w-8 text-brand-orange-ink" />
              <dd className="tabular home-serif mt-4 text-4xl text-brand-deep">{summary.programCount}</dd>
              <dt className="mt-1 text-sm leading-6 text-muted">Areas of support for children, older people and families</dt>
            </div>
            <div className="py-6 sm:px-6 sm:py-2 sm:last:pr-0">
              <Icon name="file-text" className="h-8 w-8 text-brand-orange-ink" />
              <dt className="sr-only">Evidence</dt>
              <dd className="mt-4 grid gap-1">
                <Link to="/impact" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand-deep hover:text-brand-navy">
                  What we can show <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink" />
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 7. Get involved */}
      <section className="section">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] lg:gap-14`}>
          <div>
            <Eyebrow>Get involved</Eyebrow>
            <h2 className="home-h2 mt-3 max-w-[12ch] text-brand-deep">Make room for more possibilities.</h2>
            <Stroke className="mt-3 h-3 w-32" />
            <p className="mt-6 max-w-[40ch] text-[0.9375rem] leading-7 text-muted">
              There are several ways to support inclusion and stronger communities in Tegeta. Each one starts with a conversation.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-3">
            {involved.map((c) => (
              <li key={c.title} className="flex flex-col overflow-hidden rounded border border-line bg-surface">
                <div className="relative aspect-[4/3] bg-sand">
                  <img src={c.photo[0]} alt={c.photo[1]} loading="lazy" decoding="async" style={{ objectPosition: c.photo[2] }} className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-brand-orange text-brand-deep" aria-hidden="true">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="home-serif text-2xl text-brand-deep">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">{c.text}</p>
                  <div className="mt-5">
                    {c.primary ? (
                      <Button label={c.action} href={c.href} />
                    ) : (
                      <Link to={c.href} className="inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-deep underline decoration-brand-orange decoration-2 underline-offset-[6px] hover:text-brand-navy">
                        {c.action} <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink" />
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Equipment: a real price schedule from the catalogue */}
      <section className="border-y border-line bg-surface py-14 md:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16`}>
          <div>
            <Eyebrow>Equipment catalogue</Eyebrow>
            <h2 className="home-h2 mt-3 text-brand-deep">Therapy, sensory and learning equipment.</h2>
            <p className="lead mt-5">
              {summary.catalogueCount} items across cognitive, sensory, speech and motor categories, sold and delivered by {supplier.name}, a separate
              supplier. Prices are in Tanzanian shillings and confirmed when you order.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button label={`Browse all ${summary.catalogueCount} items`} href="/catalogue" variant="outline" />
              <Button label="Order via WhatsApp" href={supplier.whatsapp} icon="whatsapp" variant="light" />
            </div>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {catalogueSample.map((item) => (
              <li key={item.id}>
                <Link to="/catalogue" className="group flex items-center gap-4 py-4">
                  <span className="block h-14 w-14 shrink-0 overflow-hidden rounded border border-line bg-white">
                    <img src={item.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain p-1.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold text-brand-deep group-hover:text-brand-navy">{item.name}</span>
                    <span className="mono-label block truncate text-subtle">{categoryName(item.category)}</span>
                  </span>
                  <span className="tabular shrink-0 font-display text-base text-brand-deep sm:text-lg">{money(item.variants[0].price)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Family resources and contact */}
      <section className="section">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-12`}>
          <div>
            <Eyebrow>Family resources</Eyebrow>
            <h2 className="home-h2 mt-3 max-w-[12ch] text-brand-deep">You don’t have to figure it out alone.</h2>
            <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-7 text-muted">
              Plain-language guidance on disability, inclusion, caregiving and everyday family life.
            </p>
          </div>
          <div>
            <ul className="divide-y divide-line border-y border-line">
              {summary.latest.map((a) => (
                <li key={a.slug}>
                  <Link to={`/blog/article-${a.slug}`} className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 py-4">
                    <span className="block aspect-[4/3] overflow-hidden rounded bg-sand">
                      <img src={a.thumb} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    </span>
                    <span className="text-[0.9375rem] font-semibold leading-snug text-brand-deep group-hover:text-brand-navy">{a.title}</span>
                    <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link to="/blog" className={textLink}>
                See all {summary.articleCount} resources <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </p>
          </div>
          <aside aria-labelledby="home-contact" className="self-start lg:border-l lg:border-line lg:pl-12">
            <h2 id="home-contact" className="home-serif text-[1.75rem] leading-tight text-brand-deep">
              Let’s talk about the support you need.
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-7 text-muted">
              Get in touch with our team to ask a question, find support or learn more about our programs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button label="Contact the team" href="/contact" />
              <Button label="WhatsApp" href={SITE.whatsapp} variant="outline" icon="whatsapp" />
            </div>
            <p className="mt-5 text-[0.9375rem] text-muted">
              Or call{' '}
              <a href="tel:+255749044723" className="font-semibold text-brand-deep underline decoration-brand-orange underline-offset-4">
                +255 749 044 723
              </a>
            </p>
          </aside>
        </div>
      </section>

      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </>
  )
}
