import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import VideoCard from '../../components/ui/VideoCard.jsx'
import { photos } from '../../data/photos.js'
import { pathways } from '../../data/pathways.js'
import { programDetails } from '../../data/programDetails.js'
import { videos } from '../../data/media.js'
import { SITE } from '../../config/site.js'
import summary from '../../data/generated/home-summary.json'

// Home: one job per section, in the order a visitor needs them.
// Hero, find support, who we are, programs, activity videos, evidence,
// ways to help, catalogue, reading and contact. Light paper throughout;
// navy only for type, the footer and small structural accents.

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
const textLink = 'inline-flex items-center gap-1.5 font-semibold text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-[6px] hover:text-brand-deep'

const homeVideos = ['supported-swimming', 'washing-up-together', 'drawing-together'].map((id) => videos.find((v) => v.id === id))

const programOrder = ['program-neurodiversity', 'program-elderly-care', 'program-education-therapy', 'program-life-skills', 'program-caregiver-training']

// Small photographs for the home program list. Elderly care has no footage of
// older people yet, so it renders an icon tile instead of a photo that would
// misrepresent the program.
const programThumbs = {
  'program-neurodiversity': [photos.childSmile, 'A child smiling during a session'],
  'program-education-therapy': [photos.exerciseBike, 'Physical activity on an exercise bike'],
  'program-life-skills': [photos.lifeLaundry, 'Practising a laundry-folding life skill'],
  'program-caregiver-training': [photos.lifeGardening, 'Caregiver and child gardening together'],
}

export default function HomeV9() {
  return (
    <>
      {/* 1. Hero: who we support and how. Text and photo never overlap. */}
      <section className="surface-light bg-paper">
        <div className={`${wrap} grid items-center gap-6 pb-14 pt-4 sm:gap-10 md:pt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-16 lg:pb-20 lg:pt-14`}>
          <div className="order-2 lg:order-1">
            <h1 className="display-xl max-w-xl text-brand-deep">Inclusion begins with understanding.</h1>
            <p className="lead mt-5 max-w-[34rem]">
              We help children, older people, families and caregivers in Tegeta, Dar es Salaam, through practical learning and everyday care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Find support" href="/get-started" />
              <Button label="Support our work" href="/donate" variant="light" icon="heart" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[16/11] max-h-[34rem] w-full overflow-hidden rounded bg-sand sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src="/photos/hero-wheelchair.webp"
                alt="A Foundation caregiver standing behind a young woman who uses a wheelchair"
                width={607}
                height={1080}
                className="absolute inset-0 h-full w-full object-cover object-[center_12%] sm:object-[center_22%] lg:object-top"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Start here: five clear visitor journeys */}
      <section className="border-y border-line bg-surface py-14 md:py-20">
        <div className={wrap}>
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-orange">Start here</p>
            <h2 className="display-lg mt-3 text-brand-deep">What would you like help with?</h2>
            <p className="lead mt-4">Choose the situation closest to yours. Each one leads straight to the right program or page.</p>
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded border border-line bg-line md:grid-cols-2">
            {pathways.map((p, i) => (
              <li key={p.who} className={`bg-surface ${i === 0 ? 'md:col-span-2' : ''}`}>
                <div className="flex h-full items-start gap-4 p-6 sm:p-8">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded bg-sand text-brand-orange-ink">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <Link to={p.to} className="group font-semibold leading-snug text-brand-deep hover:text-brand-navy">
                      {p.who}
                      <Icon name="arrow-right" className="ml-1.5 inline h-4 w-4 -translate-y-px text-brand-orange-ink transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <span className="mt-1.5 block text-[0.9375rem] leading-6 text-muted">{p.need}</span>
                    <span className="mt-3 flex flex-wrap gap-2">
                      {p.programs.map(([label, href]) => (
                        <Link
                          key={href}
                          to={href}
                          className="rounded border border-line bg-paper px-2.5 py-1 text-xs font-semibold text-brand-navy transition-colors hover:border-brand-navy hover:text-brand-deep"
                        >
                          {label}
                        </Link>
                      ))}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link to="/get-started" className={textLink}>
              See how getting started works <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* 3. Who we are */}
      <section className="section">
        <div className={`${wrap} grid items-center gap-10 md:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-20`}>
          <div className="relative aspect-[4/5] overflow-hidden rounded bg-sand md:max-w-md">
            <img
              src={photos.child}
              alt="A Foundation staff member and a young girl smiling together"
              width={1200}
              height={1599}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          </div>
          <div>
            <h2 className="display-lg max-w-xl text-brand-deep">A community foundation in Tegeta, founded in 2025.</h2>
            <div className="mt-6 max-w-[60ch] space-y-4 text-[1.0625rem] leading-8 text-muted">
              <p>
                Eagle’s Wings Foundation Tanzania works to improve the lives of people with disabilities and challenges, particularly children and older
                people.
              </p>
              <p>
                We focus on practical learning: helping families and caregivers understand a condition, build everyday routines and find the right
                professional help when it is needed.
              </p>
            </div>
            <p className="mt-7">
              <Link to="/about" className={textLink}>
                About the Foundation <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 4. Programs */}
      <section className="border-t border-line bg-surface py-14 md:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-brand-orange">Programs</p>
            <h2 className="display-lg mt-3 text-brand-deep">Five areas of support.</h2>
            <p className="lead mt-4">Each program is educational and practical. Diagnosis and treatment stay with qualified health professionals.</p>
            <p className="mt-6">
              <Link to="/programs" className={textLink}>
                Compare all programs <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </p>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {programOrder.map((id) => {
              const p = programDetails[id]
              const thumb = programThumbs[id]
              return (
                <li key={id}>
                  <Link to={`/programs/${id}`} className="group grid gap-5 py-6 sm:grid-cols-[5rem_1fr_auto] sm:items-center">
                    {thumb ? (
                      <img src={thumb[0]} alt={thumb[1]} className="h-20 w-20 rounded object-cover" loading="lazy" decoding="async" />
                    ) : (
                      <span className="grid h-20 w-20 place-items-center rounded border border-line text-brand-orange-ink" aria-hidden="true">
                        <Icon name={p.icon} className="h-8 w-8" />
                      </span>
                    )}
                    <span>
                      <span className="display-sm block text-brand-deep group-hover:text-brand-navy">{p.title}</span>
                      <span className="mt-2 block max-w-[58ch] text-[0.9375rem] leading-7 text-muted">{p.intro}</span>
                    </span>
                    <span className="hidden items-center gap-1 text-sm font-semibold text-brand-navy sm:inline-flex sm:justify-self-end">
                      View program <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* 5. Real activities (click to play, silent clips) */}
      <section className="section">
        <div className={wrap}>
          <h2 className="display-lg max-w-2xl text-brand-deep">Everyday learning at the centre.</h2>
          <p className="lead mt-4">Short clips recorded during our sessions. They play only when you press Play and have no sound.</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-10">
            <VideoCard video={homeVideos[0]} />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <VideoCard video={homeVideos[1]} />
              <VideoCard video={homeVideos[2]} />
            </div>
          </div>
          <p className="mt-8">
            <Link to="/gallery" className={textLink}>
              More photos and clips in the gallery <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* 6. Evidence available today, with honest publication status */}
      <section className="border-y border-line bg-sand py-14 md:py-20">
        <div className={wrap}>
          <p className="eyebrow text-brand-orange">Facts and resources</p>
          <h2 className="display-lg mt-3 max-w-2xl text-brand-deep">What we can show today.</h2>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line lg:grid-cols-4">
            {[
              ['2025', 'Founded in Tegeta, Dar es Salaam'],
              [String(summary.programCount), 'Program areas, each with a published description'],
              [String(summary.articleCount), 'Plain-language guides published for families'],
              [String(summary.catalogueCount), 'Therapy and learning items listed in the catalogue'],
            ].map(([value, label]) => (
              <div key={label} className="bg-paper p-5 sm:p-7">
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="tabular block font-display text-4xl text-brand-deep sm:text-5xl">{value}</span>
                  <span className="mt-2 block text-[0.9375rem] leading-6 text-muted">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <p className="max-w-[62ch] text-[0.9375rem] leading-7 text-muted">
              Our first annual report and verified activity figures are not published yet. We will share them once they are checked, and we do not
              publish estimates in the meantime.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/impact" className={textLink}>
                How we measure <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <Link to="/reports" className={textLink}>
                Reports <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Ways to help: donation leads, volunteering and partnership beside it */}
      <section className="section surface-light">
        <div className={`${wrap} grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]`}>
          <div className="flex flex-col rounded border border-line bg-surface p-7 sm:p-10">
            <h2 className="display-lg text-brand-deep">Help us reach more families.</h2>
            <p className="lead mt-4">
              A donation pays for learning materials, sessions and outreach. You send a request and the team confirms the details with you; no payment is
              taken online.
            </p>
            <div className="mt-auto pt-8">
              <Button label="Donate" href="/donate" icon="heart" />
            </div>
          </div>
          <div className="grid gap-6">
            <Link to="/get-involved" className="group rounded border border-line bg-surface p-7 transition-colors hover:border-brand-navy">
              <span className="flex items-center justify-between gap-4">
                <span className="display-sm text-brand-deep">Volunteer your time or skills</span>
                <Icon name="arrow-right" className="h-5 w-5 shrink-0 text-brand-orange-ink transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-2 block text-[0.9375rem] leading-7 text-muted">Help at sessions, events, communications or with professional expertise.</span>
            </Link>
            <Link to="/partners" className="group rounded border border-line bg-surface p-7 transition-colors hover:border-brand-navy">
              <span className="flex items-center justify-between gap-4">
                <span className="display-sm text-brand-deep">Partner with the Foundation</span>
                <Icon name="arrow-right" className="h-5 w-5 shrink-0 text-brand-orange-ink transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-2 block text-[0.9375rem] leading-7 text-muted">For schools, companies and organisations who want to work with us responsibly.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Equipment catalogue */}
      <section className="border-t border-line bg-surface py-14 md:py-20">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16`}>
          <div>
            <p className="eyebrow text-brand-orange">Equipment catalogue</p>
            <h2 className="display-lg mt-3 text-brand-deep">Therapy and learning equipment, with prices.</h2>
            <p className="lead mt-4">
              Sensory, speech, motor and learning items, sold and delivered by OneStop Therapeutics. Search, compare prices in TZS and order on WhatsApp.
            </p>
            <div className="mt-7">
              <Button label="Browse the catalogue" href="/catalogue" variant="outline" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              ['/catalogue-img/sensory-room-play.webp', 'A sensory room with a swing, crash mat and soft play equipment'],
              ['/catalogue-img/memory-chess.webp', 'Memory chess, a wooden matching game'],
              ['/catalogue-img/balance-ball.webp', 'A balance ball for exercise and coordination'],
            ].map(([src, alt], i) => (
              <div key={src} className={`overflow-hidden rounded border border-line bg-white ${i === 0 ? 'col-span-3 aspect-[16/9]' : 'aspect-square'}`}>
                <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-full w-full ${i === 0 ? 'object-cover' : 'object-contain p-3'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Reading and contact */}
      <section className="section">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,.9fr)] lg:gap-16`}>
          <div>
            <h2 className="display-lg text-brand-deep">Practical reading for families.</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {summary.latest.map((a) => (
                <li key={a.slug}>
                  <Link to={`/blog/article-${a.slug}`} className="group grid grid-cols-[5.5rem_1fr] items-center gap-5 py-5 sm:grid-cols-[7rem_1fr]">
                    <span className="block aspect-[4/3] overflow-hidden rounded bg-sand">
                      <img src={a.thumb} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-brand-orange-ink">{a.category}</span>
                      <span className="mt-1 block font-semibold leading-snug text-brand-deep group-hover:text-brand-navy">{a.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link to="/blog" className={textLink}>
                All {summary.articleCount} articles <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </p>
          </div>
          <aside aria-labelledby="home-contact" className="self-start rounded border border-line bg-surface p-7 sm:p-8">
            <h2 id="home-contact" className="display-md text-brand-deep">
              Talk to the team
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-7 text-muted">Ask about a program, a visit or how we can help your family.</p>
            <dl className="mt-6 divide-y divide-line border-y border-line text-[0.9375rem]">
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-subtle">Phone</dt>
                <dd>
                  <a href="tel:+255749044723" className="font-semibold text-brand-deep hover:text-brand-navy">
                    +255 749 044 723
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-subtle">WhatsApp</dt>
                <dd>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-deep hover:text-brand-navy">
                    Message us
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-subtle">Email</dt>
                <dd className="min-w-0">
                  <a href={`mailto:${SITE.email}`} className="break-all font-semibold text-brand-deep hover:text-brand-navy">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-subtle">Location</dt>
                <dd className="font-semibold text-brand-deep">Tegeta, Dar es Salaam</dd>
              </div>
            </dl>
            <div className="mt-6">
              <Button label="Contact the team" href="/contact" variant="dark" icon="mail" />
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
