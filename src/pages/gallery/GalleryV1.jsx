import { useEffect, useState } from 'react'
import Icon from '../../components/ui/Icon.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { photos } from '../../data/photos.js'
import { videos } from '../../data/media.js'
import VideoCard from '../../components/ui/VideoCard.jsx'
import { useUrlState } from '../../utils/useUrlState.js'

const items = [
  { src: photos.people, tag: 'Community', title: 'Community participation' },
  { src: photos.child, tag: 'Children & families', title: 'Inclusive learning and support' },
  { src: photos.care, tag: 'Care', title: 'Care and wellbeing' },
  { src: photos.learning, tag: 'Learning', title: 'Learning in action' },
  { src: photos.galleryExtra1, tag: 'Community', title: 'Community connection' },
  { src: photos.galleryExtra2, tag: 'Volunteering', title: 'Volunteers serving together' },
  { src: photos.galleryExtra3, tag: 'Outreach', title: 'Outreach and participation' },
  // Foundation photos from the local media folder (publication consent to be confirmed).
  { src: '/photos/foundation/pool-from-above.webp', tag: 'Care', title: 'A supervised pool session' },
  { src: '/photos/foundation/beach-outing.webp', tag: 'Outreach', title: 'An outing to the beach' },
  // Field stills from the Foundation's own phone videos (low resolution; tile sizes only).
  { src: photos.classroomTeaching, tag: 'Learning', title: 'Classroom teaching session' },
  { src: photos.learningDrawing, tag: 'Learning', title: 'Children drawing together' },
  { src: photos.learningWriting, tag: 'Learning', title: 'Writing practice' },
  { src: photos.childSmile, tag: 'Children & families', title: 'A child smiling and clapping' },
  { src: photos.joyPortrait, tag: 'Community', title: 'A staff member and a child laughing together' },
  { src: photos.lifeMopping, tag: 'Care', title: 'Life skills: mopping a floor' },
  { src: photos.lifeLaundry, tag: 'Care', title: 'Life skills: folding laundry' },
  { src: photos.lifeLaundryLine, tag: 'Care', title: 'Life skills: hanging washing' },
  { src: photos.lifeGardening, tag: 'Families', title: 'Gardening with a caregiver' },
  { src: photos.lifeWheelchairCare, tag: 'Care', title: 'Life skills: cleaning equipment' },
  { src: photos.lifeCarryingWater, tag: 'Care', title: 'Life skills: carrying water' },
  { src: photos.exerciseBike, tag: 'Care', title: 'Physical activity on an exercise bike' },
  { src: photos.playBasketball, tag: 'Community', title: 'Playing basketball' },
  { src: photos.hydrotherapyPool, tag: 'Care', title: 'Swimming and hydrotherapy session' },
  { src: photos.hydrotherapySupport, tag: 'Care', title: 'Supported swimming' },
]

const filters = ['All', 'Community', 'Children & families', 'Care', 'Families', 'Learning', 'Volunteering', 'Outreach']

const standards = [
  ['badge-check', 'Consent approved'],
  ['shield-check', 'Safeguarding checked'],
  ['image', 'Accurate context'],
  ['heart-handshake', 'Dignified portrayal'],
  ['copyright', 'Usage rights clear'],
]

export default function GalleryV1() {
  const [filter, setFilter] = useUrlState('filter', 'All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = filter === 'All' ? items : items.filter((x) => x.tag === filter)
  const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

  useEffect(() => {
    document.body.style.overflow = lightboxItem ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxItem])

  function step(dir) {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + dir + filtered.length) % filtered.length))
  }

  return (
    <>
      <PageHero kicker="Stories in pictures" title="Gallery" text="Photos and short clips from Foundation activities, shared with care." img="/photos/foundation/beach-outing.webp" alt="Three people standing together on a beach at sunset during an outing" imgPosition="center 40%" />

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Photo & video gallery"
            title="Moments that show the mission in action."
            text="Photographs from Eagle’s Wings activities: learning sessions, life skills, therapy and community moments, shared with care."
          />

          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`mono-label border px-4 py-2.5 ${
                  filter === f ? 'border-brand-navy bg-brand-navy text-white' : 'border-line bg-paper text-muted hover:border-brand-navy hover:text-brand-deep'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 border-l-[3px] border-brand-orange bg-sand px-5 py-4 text-sm leading-6 text-muted">
            <strong className="text-brand-deep">Media policy:</strong> images are published only with appropriate consent, captions and usage
            approval from the people and families involved.
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <button
                key={`${item.tag}-${item.title}`}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              >
                <div className="aspect-[4/3] overflow-hidden bg-brand-deep">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 border-t border-line pt-4">
                  <div className="mono-label text-brand-orange">{item.tag}</div>
                  <div className="display-sm mt-1 text-brand-deep group-hover:text-brand-navy">{item.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Short clips"
            title="Activities, as they happened."
            text="Short phone clips filmed during sessions. Each one plays only when you press play. The clips have no sound."
          />
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <VideoCard key={v.src} video={v} />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Responsible storytelling"
            title="Every image should protect dignity as well as tell a story."
            text="These are the standards behind every image and story Eagle’s Wings publishes."
          />
          <div className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {standards.map(([i, t]) => (
              <div key={t} className="border-b border-line p-5 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <Icon name={i} className="h-5 w-5 text-brand-orange" />
                <div className="display-sm mt-3 text-brand-deep">{t}</div>
                <div className="mono-label mt-1 text-subtle">Before publication</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand text-brand-deep">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:pl-[max(4rem,calc((100vw-80rem)/2+2rem))]">
            <div className="eyebrow text-brand-orange">Share the mission responsibly</div>
            <h2 className="display-lg mt-4 text-brand-deep">Have approved photos or a story from an Eagle’s Wings activity?</h2>
            <p className="mt-5 max-w-xl leading-7 text-muted">
              The Foundation can review suitable media for future publication, provided consent, context and usage rights are clear.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Contact the team" href="/contact" />
              <Button label="See our impact approach" href="/impact" variant="light" />
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded">
            <img src="/photos/foundation/pool-group.webp" alt="Young people swimming in the pool during a group session" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: 'center 50%' }} />
          </div>
        </div>
      </section>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null)
          }}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center border border-navy-line text-white hover:bg-brand-navy"
            aria-label="Close gallery"
          >
            <Icon name="x" className="h-5 w-5" />
          </button>
          <button
            onClick={() => step(-1)}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-navy-line bg-brand-deep text-white hover:bg-brand-navy"
            aria-label="Previous image"
          >
            <Icon name="chevron-left" className="h-5 w-5" />
          </button>
          <button
            onClick={() => step(1)}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-navy-line bg-brand-deep text-white hover:bg-brand-navy"
            aria-label="Next image"
          >
            <Icon name="chevron-right" className="h-5 w-5" />
          </button>
          <div className="w-full max-w-5xl">
            <img src={lightboxItem.src} alt={lightboxItem.title} className="mx-auto max-h-[80vh] w-auto max-w-full object-contain" />
            <div className="mt-5 text-center">
              <div className="mono-label text-brand-orange">{lightboxItem.tag}</div>
              <div className="display-sm mt-2 text-white">{lightboxItem.title}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
