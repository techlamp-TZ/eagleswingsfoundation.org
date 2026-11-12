import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { photos } from '../../data/photos.js'
import { cause3Items } from '../../data/causes.js'
import { CausesHero, CauseGrid, Pager, Partners } from './causes-parts.jsx'

// Default causes variant: two-column catalogue with 8-per-page pagination
// and a sticky hairline-divided rail.

const PER_PAGE = 8

const supportPathways = [
  ['wallet-cards', 'Financial support', 'One-time or recurring giving after secure channels are approved.'],
  ['hand-heart', 'Volunteer time', 'Programs, events, administration, outreach and skills-based support.'],
  ['briefcase-business', 'Professional expertise', 'Training, therapy, health, communications and institutional support.'],
  ['gift', 'In-kind contributions', 'Approved materials, services and resources matched to program needs.'],
]

const plannedUpdates = [
  ['Neuro-diversity awareness', 'Community education and inclusion materials', photos.child, '/programs/program-neurodiversity'],
  ['Caregiver learning', 'Practical family and caregiver guidance', photos.family, '/programs/program-caregiver-training'],
  ['Healthy ageing', 'Nutrition, movement and engagement resources', photos.care, '/programs/program-elderly-care'],
]

const trustPills = [
  ['building-2', 'Corporate & CSR'],
  ['hospital', 'Health & therapy'],
  ['graduation-cap', 'Education'],
  ['landmark', 'Public institutions'],
  ['users-round', 'Community networks'],
]


export default function CausesV4() {
  const [page, setPage] = useState(1)
  const pageCount = Math.max(1, Math.ceil(cause3Items.length / PER_PAGE))

  useEffect(() => {
    if (page > pageCount) setPage(pageCount)
  }, [page, pageCount])

  const view = useMemo(() => cause3Items.slice((page - 1) * PER_PAGE, page * PER_PAGE), [page])

  function goPage(p) {
    const clamped = Math.min(Math.max(1, p), pageCount)
    setPage(clamped)
    document.getElementById('cause4Grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <CausesHero />

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start xl:gap-16">
            <div>
              <div className="mb-10">
                <SectionHead
                  eyebrow="Featured programs & support themes"
                  title="Choose where your support can help."
                  text="Choose a program area to read about and support."
                />
              </div>
              <div className="">
                <CauseGrid items={view} id="cause4Grid" detail cols="md:grid-cols-2" />
              </div>
              <Pager page={page} pageCount={pageCount} onGo={goPage} />
            </div>

            <aside className="xl:sticky xl:top-28">
              <div className="pb-6">
                <div className="mono-label text-brand-orange">Take action</div>
                <h3 className="display-md mt-3 text-brand-deep">Support a program</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Choose a program, give once, give regularly, volunteer, or contribute professional and in-kind support.</p>
                <div className="mt-5">
                  <Button label="Explore ways to give" href="/donate" variant="dark" />
                </div>
              </div>

              <div className="border-t border-line py-6">
                <div className="mono-label text-brand-orange">Ways people can help</div>
                <h3 className="display-sm mt-3 text-brand-deep">Support pathways</h3>
                <ul className="mt-4 border-t border-line">
                  {supportPathways.map(([i, t, d]) => (
                    <li key={t} className="flex gap-3 border-b border-line py-4">
                      <Icon name={i} className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                      <div>
                        <div className="text-sm font-semibold text-brand-deep">{t}</div>
                        <p className="mt-1 text-xs leading-5 text-muted">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-line py-6">
                <div className="mono-label text-brand-orange">What's new</div>
                <h3 className="display-sm mt-3 text-brand-deep">Planned updates</h3>
                <ul className="mt-4 border-t border-line">
                  {plannedUpdates.map(([t, d, img, href]) => (
                    <li key={t} className="border-b border-line">
                      <Link to={href} className="group grid grid-cols-[72px_1fr] gap-3 py-4">
                        <img src={img} className="h-16 w-full object-cover" alt={t} />
                        <div>
                          <div className="text-sm font-semibold leading-5 text-brand-deep group-hover:text-brand-orange">{t}</div>
                          <div className="mt-1 text-xs leading-4 text-muted">{d}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-line pt-6">
                <div className="mono-label text-brand-orange">Giving option</div>
                <h3 className="display-sm mt-3 text-brand-deep">Monthly giving</h3>
                <p className="mt-3 text-sm leading-6 text-muted">Choose Monthly on the giving page and the team will arrange a schedule with you directly.</p>
                <div className="mt-5">
                  <Button label="Ways to donate" href="/donate" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Partnership network"
            title="Built for trusted collaboration, not decorative logos."
            text="Until Eagle's Wings has approved public partners, this section names the partnership categories it is ready to develop."
          />
          <div className="mt-10">
            <Partners items={trustPills} cols="lg:grid-cols-5" />
          </div>
        </div>
      </section>
    </>
  )
}
