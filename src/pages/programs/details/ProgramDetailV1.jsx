import { Link } from 'react-router-dom'
import Icon from '../../../components/ui/Icon.jsx'
import Button from '../../../components/ui/Button.jsx'
import { programDetails, programRouteIds } from '../../../data/programDetails.js'
import { usePageTitle } from '../../../utils/usePageTitle.js'
import { useUrlState } from '../../../utils/useUrlState.js'
import { DetailHero, Block, ProgramList, SearchBox, Checks, Steps, RelatedGrid, Flat } from './detail-parts.jsx'

function ProgramSidebar({ activeId }) {
  const [query, setQuery] = useUrlState('q', '')
  const q = query.trim().toLowerCase()
  const ids = programRouteIds.filter((id) => !q || programDetails[id].title.toLowerCase().includes(q))

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <Block title="Search programs">
        <SearchBox value={query} onChange={setQuery} />
      </Block>
      <Block title="Programs">
        <ProgramList ids={ids} activeId={activeId} />
      </Block>
      <Block title="Program photos" className="hidden lg:block">
        <div className="grid grid-cols-2 gap-2">
          {programDetails[activeId].gallery.map((img, i) => (
            <Flat key={i} src={img} alt={`Program activity photo ${i + 1}`} className="h-24" />
          ))}
        </div>
        <p className="mt-3 text-xs leading-5 text-subtle">Photographs from Eagle's Wings activities.</p>
      </Block>
      <Block>
        <Link to="/contact" className="group flex items-center justify-between gap-4">
          <span>
            <span className="mono-label block text-brand-orange">Need more information?</span>
            <span className="display-sm mt-2 block text-brand-deep group-hover:text-brand-orange">Talk to the Foundation</span>
          </span>
          <Icon name="arrow-up-right" className="h-5 w-5 text-brand-orange" />
        </Link>
      </Block>
    </aside>
  )
}

export default function ProgramDetailV1({ item: p }) {
  usePageTitle(p.title)
  const relatives = programRouteIds.filter((id) => id !== p.id).slice(0, 3)

  return (
    <>
      <DetailHero kicker="Program details" title={p.title} crumbs={[['Home', '/'], ['Programs', '/programs'], [p.tag]]} />

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:px-8">
          <article className="min-w-0">
            <Flat src={p.hero} alt={p.title} className="h-[300px] sm:h-[460px]" />

            <div className="mt-10">
              <div className="mono-label inline-flex items-center gap-2 text-brand-orange">
                <Icon name={p.icon} className="h-4 w-4" />
                {p.tag}
              </div>
              <h2 className="display-lg mt-4 text-brand-deep">{p.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted">{p.intro}</p>
            </div>

            <div className="mt-10">
              <Checks items={p.checks} />
            </div>

            <section className="mt-14">
              <h3 className="display-md text-brand-deep">Program summary</h3>
              <p className="mt-4 leading-8 text-muted">{p.summary}</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Flat src={p.gallery[1]} alt="Program support" />
                <Flat src={p.gallery[2]} alt="Community support" />
              </div>
            </section>

            <section className="mt-14 grid gap-10 border-t border-line pt-14 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <h3 className="display-md text-brand-deep">Our approach</h3>
                <p className="mt-4 leading-8 text-muted">{p.approach}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button label="Ask about this program" href="/contact" variant="dark" />
                  <Button label="Support this work" href="/donate" variant="outline" />
                </div>
              </div>
              <div>
                <div className="mono-label mb-4 text-brand-orange">How we work</div>
                <Steps items={p.process} />
              </div>
            </section>

            <section className="mt-14 border-t border-line pt-14">
              <h3 className="display-md mb-8 text-brand-deep">Related programs</h3>
              <RelatedGrid ids={relatives} />
            </section>
          </article>

          <ProgramSidebar activeId={p.id} />
        </div>
      </section>

      <section className="border-y border-line bg-sand py-16 text-brand-deep lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
          <div>
            <div className="eyebrow text-brand-orange">Take the next step</div>
            <h2 className="display-lg mt-4 text-brand-deep">Help strengthen {p.title.toLowerCase()}.</h2>
            <p className="mt-5 max-w-xl leading-7 text-muted">Contribute time, expertise, partnership, materials or financial support to help Eagle's Wings develop responsible, practical services.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Get involved" href="/get-involved" />
              <Button label="Donate" href="/donate" variant="light" />
            </div>
          </div>
          <Flat src={p.gallery[3]} alt="Community support" className="h-64 lg:h-72" />
        </div>
      </section>
    </>
  )
}
