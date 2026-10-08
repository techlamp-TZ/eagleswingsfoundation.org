import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import { photos } from '../../data/photos.js'
import { programMeta, programDetails } from '../../data/programDetails.js'

const pathway = [
  ['eye', 'Awareness'],
  ['book-open', 'Understanding'],
  ['activity', 'Practice'],
  ['users', 'Ongoing support'],
]

// Small topical thumbnails (field stills are low-res, so keep them small).
// Elderly care has no footage of older people yet, so it shows an icon tile
// rather than a photo that would misrepresent the program.
const rowThumbs = {
  'program-neurodiversity': [photos.childSmile, 'Smiling child during a session'],
  'program-education-therapy': [photos.exerciseBike, 'Physical activity on an exercise bike'],
  'program-life-skills': [photos.lifeLaundry, 'Practising a laundry-folding life skill'],
  'program-caregiver-training': [photos.lifeGardening, 'Caregiver and child gardening together'],
}

const linkClass = 'inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-deep'

export default function ProgramsV0() {
  return (
    <>
      <PageHero
        kicker="What we do"
        title="Programs built around real family and community needs."
        text="The Foundation’s five current activity areas combine awareness, education, life skills and caregiver support."
        img={photos.care}
        actions={
          <>
            <Button label="Not sure? Start here" href="/get-started" />
            <Button label="Support a program" href="/donate" variant="light" />
          </>
        }
      />

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            title="Five connected areas of work."
            text="Discover our five program areas, each designed to support children, older people, families and caregivers."
          />
          <div className="mt-12 border-t border-line">
            {Object.entries(programDetails).map(([id, p], i) => {
              const thumb = rowThumbs[id]
              return (
                <article key={id} className="grid gap-4 border-b border-line py-9 md:grid-cols-[4rem_1fr_1.5fr_7rem] md:items-start md:gap-8">
                  <span className="mono-label text-subtle">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="eyebrow text-brand-orange">{p.tag}</div>
                    <h3 className="mt-2 font-display text-2xl leading-tight text-brand-deep sm:text-3xl">
                      <Link to={`/programs/${id}`} className="hover:text-brand-navy">
                        {p.title}
                      </Link>
                    </h3>
                    {programMeta[id] && (
                      <dl className="mt-4 space-y-2 text-[0.9375rem]">
                        <div>
                          <dt className="text-subtle">Who it is for</dt>
                          <dd className="font-medium text-brand-deep">{programMeta[id].audience}</dd>
                        </div>
                        <div>
                          <dt className="text-subtle">What it offers</dt>
                          <dd className="font-medium text-brand-deep">{programMeta[id].delivery}</dd>
                        </div>
                      </dl>
                    )}
                  </div>
                  <div>
                    <p className="text-base leading-7 text-muted">{p.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {p.checks.map((t) => (
                        <li key={t} className="flex items-center gap-2 text-sm text-muted">
                          <Icon name="circle-check" className="h-4 w-4 shrink-0 text-brand-orange" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <Link to={`/programs/${id}`} className={linkClass}>
                        Learn more about this program <Icon name="arrow-right" className="h-3.5 w-3.5 text-brand-orange" />
                      </Link>
                      <Link to="/contact" className={linkClass}>
                        Ask about this program <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-brand-orange" />
                      </Link>
                    </div>
                  </div>
                  {thumb ? (
                    <img src={thumb[0]} alt={thumb[1]} className="h-28 w-28 object-cover md:justify-self-end" loading="lazy" decoding="async" />
                  ) : (
                    <div aria-hidden="true" className="grid h-28 w-28 place-items-center border border-line bg-sand md:justify-self-end">
                      <Icon name={p.icon} className="h-10 w-10 text-brand-orange" />
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line section bg-sand text-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="eyebrow text-brand-orange">Program pathway</div>
              <h2 className="display-lg mt-3 max-w-3xl text-brand-deep">Awareness → understanding → practice → support.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button label="Partner with us" href="/get-involved" />
              <Button label="Read practical guidance" href="/blog" variant="light" />
            </div>
          </div>
          <div className="mt-10 grid border-t border-line sm:grid-cols-2 md:grid-cols-4">
            {pathway.map(([i, t], x) => (
              <div key={t} className="border-b border-line py-6 md:border-b-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0">
                <div className="flex items-center gap-3">
                  <span className="mono-label text-muted">{String(x + 1).padStart(2, '0')}</span>
                  <Icon name={i} className="h-6 w-6 text-brand-orange" />
                </div>
                <p className="mt-4 font-display text-xl text-brand-deep">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
