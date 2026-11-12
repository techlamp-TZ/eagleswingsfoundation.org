import { useMemo } from 'react'
import { useUrlState } from '../../utils/useUrlState.js'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { photos } from '../../data/photos.js'
import { CausesHero, FilterTabs, SearchField, CauseGrid, NoMatch, ImpactBand, PlannedTopics } from './causes-parts.jsx'

// Single-select tag filter + free-text search, both real state.

const items = [
  { route: 'program-neurodiversity', tag: 'Awareness', icon: 'brain', title: 'Neuro-diversity Awareness', text: 'Build understanding around Autism, ADHD, Down syndrome and intellectual disability through respectful community education.', img: photos.childSmile, focus: 'Awareness & inclusion' },
  { route: 'program-elderly-care', tag: 'Care', icon: 'heart-pulse', title: 'Elderly Care Support', text: 'Support older people and families with practical guidance around nutrition, physical activity and mental stimulation.', img: photos.care, focus: 'Healthy ageing' },
  { route: 'program-education-therapy', tag: 'Education', icon: 'book-heart', title: 'Education & Therapy Guidance', text: 'Share practical education around neurological conditions, therapy exercises and specialized parenting.', img: photos.learningDrawing, focus: 'Family learning' },
  { route: 'program-life-skills', tag: 'Skills', icon: 'sparkles', title: 'Life Skills Programs', text: 'Strengthen confidence and everyday independence through structured life-skills support for young people with autism.', img: photos.lifeLaundry, focus: 'Independence' },
  { route: 'program-caregiver-training', tag: 'Training', icon: 'users-round', title: 'Caregiver Training', text: 'Help caregivers build the knowledge, confidence and practical skills to support children and older people professionally.', img: photos.lifeGardening, focus: 'Caregiver development' },
]

const planned = [
  ['Neuro-diversity', 'Making inclusion practical in everyday communities', photos.child],
  ['Caregiving', 'Supporting families with dignity and consistency', photos.family],
  ['Healthy ageing', 'Practical ways to keep older people active and engaged', photos.care],
  ['Life skills', 'Building independence through repeatable routines', photos.learning],
]

const filterTags = ['All', 'Awareness', 'Care', 'Education', 'Skills', 'Training']


export default function CausesV1() {
  const [filter, setFilter] = useUrlState('filter', 'all')
  const [query, setQuery] = useUrlState('q', '')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((c) => {
      const okTag = filter === 'all' || c.tag.toLowerCase() === filter
      const okQuery = !q || `${c.title} ${c.text} ${c.focus}`.toLowerCase().includes(q)
      return okTag && okQuery
    })
  }, [filter, query])

  return (
    <>
      <CausesHero />

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <SectionHead
              eyebrow="Where support can go"
              title="Together for a better tomorrow."
              text="Browse the Foundation's verified program areas and choose where your time, expertise, partnership or financial support can make the most sense."
            />
            <SearchField id="causeSearch" value={query} onChange={setQuery} placeholder="Search programs…" />
          </div>

          <div className="mt-10 border-t border-line pt-6">
            <FilterTabs options={filterTags} value={filter} onChange={setFilter} />
          </div>

          <div className="mt-10">
            <CauseGrid items={filtered} />
            {filtered.length === 0 && <NoMatch hint="Try another keyword or choose All." />}
          </div>
        </div>
      </section>

      <ImpactBand />
      <PlannedTopics planned={planned} />
    </>
  )
}
