import { useState, useMemo, useEffect } from 'react'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { cause3Items } from '../../data/causes.js'
import { CausesHero, FilterTabs, CauseGrid, Pager, Partners } from './causes-parts.jsx'

// Category filter + 6-per-page pagination over the shared cause3Items catalogue.

const categories = ['All', 'Neuro-diversity', 'Family guidance', 'Healthy ageing', 'Life skills', 'Training']
const PER_PAGE = 6

const partnerships = [
  ['briefcase-business', 'Corporate partners', 'CSR support, employee volunteering and professional expertise.'],
  ['hospital', 'Health & therapy networks', 'Specialist guidance, referrals and practical learning partnerships.'],
  ['graduation-cap', 'Education partners', 'Learning resources, training spaces and community education.'],
  ['landmark', 'Public & community institutions', 'Outreach, awareness, local coordination and trusted referrals.'],
]


export default function CausesV3() {
  const [filter, setFilter] = useState('all')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => (filter === 'all' ? cause3Items : cause3Items.filter((x) => x.category.toLowerCase() === filter)), [filter])
  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE))

  useEffect(() => {
    if (page > pageCount) setPage(pageCount)
  }, [page, pageCount])

  const view = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  function handleFilter(key) {
    setFilter(key)
    setPage(1)
  }

  function goPage(p) {
    const clamped = Math.min(Math.max(1, p), pageCount)
    setPage(clamped)
    document.getElementById('cause3Grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <CausesHero />

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Featured programs & support themes"
            title="Choose where your support can help."
            text="This catalogue shows only verified program information until Eagle's Wings approves public fundraising targets."
          />
          <div className="mt-10 border-t border-line pt-6">
            <FilterTabs options={categories} value={filter} onChange={handleFilter} />
          </div>

          <div className="mt-10">
            <CauseGrid items={view} id="cause3Grid" detail />
          </div>
          <Pager page={page} pageCount={pageCount} onGo={goPage} />
        </div>
      </section>

      <section className="section bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Partnership opportunities"
            title="Support can also come through institutions and professional networks."
            text="Partner and sponsor names are listed only with their permission."
          />
          <div className="mt-10">
            <Partners items={partnerships} />
          </div>
          <div className="mt-9">
            <Button label="Explore partnerships" href="/partners" variant="dark" />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand py-16 text-brand-deep lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_.7fr] lg:px-8">
          <div>
            <div className="eyebrow text-brand-orange">Give responsibly</div>
            <h2 className="display-lg mt-4 text-brand-deep">Support the program you care about.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-muted">When approved fundraising targets, payment channels and reporting data become available, these program cards can display them transparently. Until then, the website directs visitors to the Foundation's verified giving pathways.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button label="Ways to donate" href="/donate" />
            <Button label="View all programs" href="/programs" variant="light" />
          </div>
        </div>
      </section>
    </>
  )
}
