import { useState, useMemo } from 'react'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { photos } from '../../data/photos.js'
import { CausesHero, FilterTabs, SearchField, CauseGrid, NoMatch, ImpactBand, PlannedTopics } from './causes-parts.jsx'

// Single-select category filter + free-text search, both real state.

const items = [
  { route: 'program-neurodiversity', category: 'Neuro-diversity', tag: 'Awareness', icon: 'brain', title: 'Community Neuro-diversity Awareness', text: 'Build understanding around Autism, ADHD, Down syndrome and intellectual disability using respectful, practical education.', img: photos.childSmile, focus: 'Awareness & inclusion' },
  { route: 'program-education-therapy', category: 'Family guidance', tag: 'Parenting', icon: 'house-heart', title: 'Family Education & Specialized Parenting', text: 'Help parents and families understand neurological conditions and practical ways to support children at home.', img: photos.joyPortrait, focus: 'Family learning' },
  { route: 'program-education-therapy', category: 'Family guidance', tag: 'Therapy', icon: 'activity', title: 'Therapy Exercise Guidance', text: 'Share approved practical guidance around therapy exercises and everyday routines that families can practise consistently.', img: photos.hydrotherapyPool, focus: 'Practical guidance' },
  { route: 'program-elderly-care', category: 'Healthy ageing', tag: 'Nutrition', icon: 'apple', title: 'Healthy Ageing Through Nutrition', text: 'Support older people and families with practical nutrition guidance as part of dignified day-to-day care.', img: photos.care, focus: 'Elderly care' },
  { route: 'program-elderly-care', category: 'Healthy ageing', tag: 'Movement', icon: 'person-standing', title: 'Movement & Physical Activity Support', text: 'Encourage safe, appropriate physical activity and family support that help older people stay engaged and active.', img: photos.people, focus: 'Healthy ageing' },
  { route: 'program-elderly-care', category: 'Healthy ageing', tag: 'Engagement', icon: 'puzzle', title: 'Mental Stimulation & Engagement', text: "Promote meaningful routines and mental stimulation for older people, including those facing Alzheimer's or Dementia.", img: photos.family, focus: 'Mental stimulation' },
  { route: 'program-life-skills', category: 'Life skills', tag: 'Skills', icon: 'sparkles', title: 'Life Skills for Autistic Young People', text: 'Structured learning focused on confidence, communication, participation and everyday independence, especially from age 12 upward.', img: photos.lifeLaundry, focus: 'Independence' },
  { route: 'program-caregiver-training', category: 'Training', tag: 'Training', icon: 'users-round', title: 'Professional Caregiver Development', text: 'Build caregiver knowledge, confidence and professional practice for supporting children and older people.', img: photos.classroomTeaching, focus: 'Caregiver development' },
  { route: 'program-caregiver-training', category: 'Training', tag: 'Support', icon: 'heart-handshake', title: 'Family & Caregiver Support Networks', text: 'Strengthen the people around children and older people so support is more consistent, informed and dignified.', img: photos.lifeGardening, focus: 'Support network' },
]

const planned = [
  ['Neuro-diversity', 'Making inclusion practical in everyday communities', photos.child],
  ['Caregiving', 'Supporting families with dignity and consistency', photos.family],
  ['Healthy ageing', 'Practical ways to keep older people active and engaged', photos.care],
  ['Life skills', 'Building independence through repeatable routines', photos.learning],
]

const categories = ['All', 'Neuro-diversity', 'Healthy ageing', 'Family guidance', 'Life skills', 'Training']


export default function CausesV2() {
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((c) => {
      const okCategory = category === 'all' || c.category.toLowerCase() === category
      const okQuery = !q || `${c.title} ${c.text} ${c.focus} ${c.category} ${c.tag}`.toLowerCase().includes(q)
      return okCategory && okQuery
    })
  }, [category, query])

  return (
    <>
      <CausesHero />

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <SectionHead
              eyebrow="Browse support areas"
              title="Empowering change through every cause."
              text="Explore the Foundation's verified program themes. Each card links into a detailed program page and shows the practical focus of that support area."
            />
            <SearchField id="cause2Search" value={query} onChange={setQuery} placeholder="Search…" />
          </div>

          <div className="mt-10 border-t border-line pt-6">
            <FilterTabs options={categories} value={category} onChange={setCategory} />
          </div>

          <div className="mt-10">
            <CauseGrid items={filtered} />
            {filtered.length === 0 && <NoMatch hint="Try another keyword or select All." />}
          </div>
        </div>
      </section>

      <ImpactBand />
      <PlannedTopics planned={planned} />
    </>
  )
}
