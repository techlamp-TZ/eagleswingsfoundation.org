import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import { photos } from '../../data/photos.js'
import { programMeta, programDetails } from '../../data/programDetails.js'
import { SITE } from '../../config/site.js'
import '../home/home.css'

// Programs: navy hero with a photo collage, a five-item index, then one
// alternating row per program. Names, audiences and descriptions come from
// data/programDetails.js.

const pathway = [
  ['eye', 'Awareness'],
  ['book-open', 'Understanding'],
  ['activity', 'Practice'],
  ['users', 'Ongoing support'],
]

const indexIcons = {
  'program-neurodiversity': ['eye', 'Awareness'],
  'program-elderly-care': ['heart', 'Elderly care'],
  'program-education-therapy': ['graduation-cap', 'Education'],
  'program-life-skills': ['sparkles', 'Life skills'],
  'program-caregiver-training': ['users', 'Caregiver training'],
}

// Field stills are low resolution, so rows keep them at a modest size.
// Elderly care has no footage of older people yet, so it shows a text tile
// rather than a photo that would misrepresent the program.
const rowPhotos = {
  'program-neurodiversity': [photos.childSmile, 'A boy smiling and clapping during a session', 'center 25%'],
  'program-education-therapy': [photos.exerciseBike, 'A young person using an exercise bike in the activity room', 'center 40%'],
  'program-life-skills': [photos.lifeLaundry, 'Practising a laundry-folding life skill', 'center 55%'],
  'program-caregiver-training': [photos.lifeGardening, 'A caregiver and a young person watering the vegetable garden', 'center 40%'],
}

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'

function Photo({ src, alt, position = 'center', ratio, className, rot }) {
  return (
    <div className={`absolute ${className}`} style={{ transform: `rotate(${rot})` }}>
      <div className="collage-frame" style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} data-active="true" decoding="async" style={{ objectPosition: position }} />
      </div>
    </div>
  )
}

export default function ProgramsV0() {
  const entries = Object.entries(programDetails)

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-brand-deep text-white">
        <div className={`${wrap} grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-16`}>
          <div>
            <p className="home-eyebrow text-brand-orange">What we do</p>
            <h1 className="home-h1 mt-4 text-white">
              Practical support. <span className="block">Greater possibilities.</span>
            </h1>
            <p className="mt-6 max-w-[30rem] text-lg leading-8 text-on-navy">Five connected programs supporting children, older people, families and caregivers.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Find the right support" href="/get-started" />
              <Button label="Support a program" href="/donate" variant="light" />
            </div>
          </div>
          <div className="relative mx-auto aspect-[10/8] w-full max-w-[32rem] lg:max-w-none">
            <svg aria-hidden="true" viewBox="0 0 400 320" fill="none" className="pointer-events-none absolute -inset-[4%] h-[108%] w-[108%]">
              <path d="M20 300c80 26 170 10 230-40" stroke="var(--color-brand-orange)" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <Photo src={photos.care} alt="A young person sitting at the edge of the pool with a supervisor" ratio="5 / 4" className="left-0 top-0 w-[62%]" rot="-3deg" />
            <Photo
              src={photos.childSmile}
              alt="A boy smiling and clapping during a session"
              position="center 22%"
              ratio="1 / 1"
              className="right-0 top-[4%] z-10 w-[36%]"
              rot="4deg"
            />
            <Photo
              src={photos.lifeGardening}
              alt="A caregiver and a young person watering the vegetable garden"
              position="center 40%"
              ratio="4 / 3"
              className="bottom-0 right-[4%] z-10 w-[48%]"
              rot="3deg"
            />
          </div>
        </div>
      </section>

      {/* Index of the five programs */}
      <nav aria-label="Programs on this page" className="border-b border-line bg-surface">
        <ol className={`${wrap} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-line`}>
          {entries.map(([id], i) => {
            const [icon, label] = indexIcons[id]
            return (
              <li key={id}>
                <a href={`#${id}`} className="group flex min-h-16 items-center gap-3 py-4 lg:justify-center lg:px-4">
                  <Icon name={icon} className="h-7 w-7 shrink-0 text-brand-orange-ink" />
                  <span>
                    <span className="tabular block text-xs text-subtle">{String(i + 1).padStart(2, '0')}</span>
                    <span className="block text-[0.9375rem] font-semibold text-brand-deep group-hover:text-brand-navy">{label}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ol>
      </nav>

      {/* Intro */}
      <section className="pt-14 md:pt-20">
        <div className={wrap}>
          <h2 className="home-h1 text-brand-deep">Five connected areas of work.</h2>
          <p className="mt-4 max-w-[58ch] text-lg leading-8 text-muted">
            Our five program areas combine awareness, education, practical support and guidance to help children, older people, families and caregivers.
          </p>
        </div>
      </section>

      {/* One row per program */}
      {entries.map(([id, p], i) => {
        const photo = rowPhotos[id]
        const meta = programMeta[id]
        const reversed = i % 2 === 1
        return (
          <section key={id} id={id} className={`scroll-mt-28 overflow-hidden py-12 md:py-16 ${reversed ? 'bg-sand-warm' : ''}`}>
            <div className={`${wrap} grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16`}>
              <div className={`relative ${reversed ? 'md:order-2' : ''}`}>
                <div aria-hidden="true" className={`absolute -inset-3 rounded bg-sand ${reversed ? 'rotate-2 bg-surface' : '-rotate-2'}`} />
                {photo ? (
                  <img
                    src={photo[0]}
                    alt={photo[1]}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: photo[2] }}
                    className="relative aspect-[16/10] w-full rounded object-cover"
                  />
                ) : (
                  <div className="relative grid aspect-[16/10] w-full place-items-center rounded bg-brand-deep p-8 text-center">
                    <div>
                      <Icon name="heart-handshake" className="mx-auto h-14 w-14 text-brand-orange" />
                      <p className="home-serif mt-5 text-2xl leading-snug text-white">
                        Dignity. <span className="block">Connection.</span> Everyday support.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className={reversed ? 'md:order-1' : ''}>
                <span className="tabular font-display text-lg text-brand-orange-ink">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="home-h2 mt-1 text-brand-deep">
                  <Link to={`/programs/${id}`} className="hover:text-brand-navy">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 max-w-[52ch] text-[1.0625rem] leading-7 text-muted">{p.intro}</p>
                {meta && (
                  <dl className="mt-5 grid gap-4 border-b border-line pb-5 text-[0.9375rem] sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-line">
                    <div className="sm:pr-5">
                      <dt className="font-semibold text-brand-deep">Who it supports</dt>
                      <dd className="mt-1 leading-6 text-muted">{meta.audience}</dd>
                    </div>
                    <div className="sm:pl-5">
                      <dt className="font-semibold text-brand-deep">What we offer</dt>
                      <dd className="mt-1 leading-6 text-muted">{meta.delivery}</dd>
                    </div>
                  </dl>
                )}
                <ul className="mt-5 space-y-2">
                  {p.checks.map((t) => (
                    <li key={t} className="flex items-center gap-3 text-[0.9375rem] text-muted">
                      <Icon name="circle-check" className="h-5 w-5 shrink-0 text-brand-orange-ink" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button label="Learn more about this program" href={`/programs/${id}`} />
                  <Button label="Ask about this program" href="/contact" variant="outline" />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Pathway */}
      <section className="bg-brand-deep text-white">
        <div className={`${wrap} grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_auto] lg:items-center lg:gap-10`}>
          <div>
            <p className="font-semibold text-brand-orange">Program pathway</p>
            <h2 className="home-serif mt-2 text-[1.9rem] leading-tight text-white">Awareness. Understanding. Practice. Ongoing support.</h2>
          </div>
          <ol className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-navy-line">
            {pathway.map(([icon, label], i) => (
              <li key={label} className="sm:px-5 sm:first:pl-0">
                <span className="flex items-center gap-2">
                  <span className="tabular text-sm text-on-navy">{String(i + 1).padStart(2, '0')}</span>
                  <Icon name={icon} className="h-6 w-6 text-brand-orange" />
                </span>
                <span className="mt-2 block font-display text-[1.0625rem] text-white">{label}</span>
              </li>
            ))}
          </ol>
          <div>
            <Button label="Partner with us" href="/get-involved" />
          </div>
        </div>
      </section>

      {/* Guidance */}
      <section className="-mb-20 bg-sand-warm">
        <div className={`${wrap} flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between`}>
          <div>
            <p className="font-semibold text-brand-orange-ink">Need guidance?</p>
            <h2 className="home-h2 mt-2 text-brand-deep">Not sure which program fits?</h2>
            <p className="mt-2 text-[1.0625rem] leading-8 text-muted">Start with your situation, or talk to our team.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button label="Find support" href="/get-started" />
            <Button label="Ask on WhatsApp" href={SITE.whatsapp} variant="outline" icon="whatsapp" />
          </div>
        </div>
      </section>
    </>
  )
}
