import { useEffect, useRef, useState } from 'react'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import VideoModal from '../../components/ui/VideoModal.jsx'
import { photos } from '../../data/photos.js'
import { videos, duration } from '../../data/media.js'
import { useUrlState } from '../../utils/useUrlState.js'

// Gallery: a photo mosaic with topic filters and a lightbox, the six short
// clips, and the standards an image has to meet before it is shown. Titles
// state only what is visible in each photograph.
//
// Order matters: the mosaic repeats rows of 3, 4, 4 and 3 tiles, and the
// high-resolution photographs sit in the wide (row-of-3) slots. The field
// stills from phone video are low resolution, so they take the narrow slots.
const items = [
  { src: photos.people, tag: 'Community', title: 'Community participation' },
  { src: photos.child, tag: 'Learning', title: 'Inclusive learning and support', pos: 'center 48%' },
  { src: photos.care, tag: 'Care & wellbeing', title: 'Care and wellbeing' },
  { src: photos.classroomTeaching, tag: 'Learning', title: 'Classroom teaching session' },
  { src: photos.hydrotherapyPool, tag: 'Care & wellbeing', title: 'Swimming and hydrotherapy session' },
  { src: photos.hydrotherapySupport, tag: 'Care & wellbeing', title: 'Supported swimming' },
  { src: photos.childSmile, tag: 'Community', title: 'A child smiling and clapping' },
  { src: photos.learningDrawing, tag: 'Learning', title: 'Children drawing together' },
  { src: photos.learningWriting, tag: 'Learning', title: 'Writing practice' },
  { src: photos.lifeGardening, tag: 'Life skills', title: 'Gardening with a caregiver' },
  { src: photos.playBasketball, tag: 'Community', title: 'Playing basketball' },
  { src: photos.galleryExtra1, tag: 'Community', title: 'Community connection' },
  { src: '/photos/foundation/pool-from-above.webp', tag: 'Care & wellbeing', title: 'A supervised pool session' },
  { src: photos.galleryExtra3, tag: 'Outreach', title: 'Outreach and participation' },
  { src: photos.learning, tag: 'Learning', title: 'Learning in action' },
  { src: photos.galleryExtra2, tag: 'Care & wellbeing', title: 'Swimming in the pool' },
  { src: '/photos/foundation/beach-outing.webp', tag: 'Outreach', title: 'An outing to the beach' },
  { src: photos.joyPortrait, tag: 'Community', title: 'A staff member and a child laughing together' },
  { src: photos.lifeMopping, tag: 'Life skills', title: 'Life skills: mopping a floor' },
  { src: photos.lifeLaundry, tag: 'Life skills', title: 'Life skills: folding laundry' },
  { src: photos.lifeLaundryLine, tag: 'Life skills', title: 'Life skills: hanging washing' },
  { src: photos.lifeWheelchairCare, tag: 'Life skills', title: 'Life skills: cleaning equipment' },
  { src: photos.lifeCarryingWater, tag: 'Life skills', title: 'Life skills: carrying water' },
  { src: photos.exerciseBike, tag: 'Care & wellbeing', title: 'Physical activity on an exercise bike' },
]

const filters = ['All', 'Learning', 'Care & wellbeing', 'Community', 'Life skills', 'Outreach']

// Column spans (of 12) for one cycle of the mosaic.
const spans = [4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4]
const spanClass = { 3: 'lg:col-span-3', 4: 'lg:col-span-4' }
const FIRST_PAGE = spans.length

// Each line is a check an image has to pass, not a count of images checked.
const standards = [
  ['users-round', 'Consent approved', 'Informed consent from the person or their family.'],
  ['shield-check', 'Safeguarding checked', 'Nothing that could put a child or adult at risk.'],
  ['file-text', 'Accurate context', 'Captions say only what the image shows.'],
  ['heart', 'Dignified portrayal', 'People are shown with respect, never pity.'],
  ['image', 'Usage rights clear', 'We hold the right to use each image.'],
]

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
const eyebrow = 'text-xs font-bold uppercase tracking-[0.14em] text-brand-orange-ink'

// Photo viewer in a native <dialog>: showModal() traps focus, closes on
// Escape and returns focus to the tile that opened it.
function Lightbox({ list, index, onStep, onClose }) {
  const ref = useRef(null)
  const item = index === null ? null : list[index]

  useEffect(() => {
    const dialog = ref.current
    if (item && dialog && !dialog.open) dialog.showModal()
  }, [item])

  useEffect(() => {
    document.body.style.overflow = item ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [item])

  if (!item) return null
  const navBtn = 'absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded border border-navy-line bg-brand-deep text-white hover:border-brand-orange'

  return (
    <dialog
      ref={ref}
      aria-label={item.title}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-brand-deep p-4"
      onClose={onClose}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') onStep(-1)
        if (e.key === 'ArrowRight') onStep(1)
      }}
      onClick={(e) => {
        if (e.target === ref.current) ref.current.close()
      }}
    >
      <div className="pointer-events-none flex h-full flex-col items-center justify-center">
        <img src={item.src} alt={item.title} className="pointer-events-auto max-h-[78dvh] w-auto max-w-full rounded object-contain" />
        <p className="pointer-events-auto mt-5 text-center" aria-live="polite">
          <span className={`block ${eyebrow.replace('text-brand-orange-ink', 'text-brand-orange')}`}>{item.tag}</span>
          <span className="mt-2 block font-display text-lg text-white">{item.title}</span>
          <span className="tabular mt-1 block text-sm text-on-navy">
            {index + 1} of {list.length}
          </span>
        </p>
      </div>
      <button type="button" onClick={() => ref.current?.close()} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded border border-navy-line bg-brand-deep text-white hover:border-brand-orange" aria-label="Close photo">
        <Icon name="x" className="h-5 w-5" />
      </button>
      <button type="button" onClick={() => onStep(-1)} className={`${navBtn} left-3`} aria-label="Previous photo">
        <Icon name="chevron-left" className="h-5 w-5" />
      </button>
      <button type="button" onClick={() => onStep(1)} className={`${navBtn} right-3`} aria-label="Next photo">
        <Icon name="chevron-right" className="h-5 w-5" />
      </button>
    </dialog>
  )
}

function Clip({ video, onPlay, large = false, className = '' }) {
  const portrait = video.height > video.width
  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      aria-label={`Play ${video.title}, ${duration(video.seconds)}, no sound`}
      className={`group flex flex-col overflow-hidden rounded bg-surface text-left ${className}`}
    >
      <span className={`relative block w-full overflow-hidden bg-brand-deep ${large ? 'aspect-[16/10] lg:aspect-auto lg:flex-1' : 'aspect-[16/10]'}`}>
        <img
          src={video.poster}
          alt=""
          width={video.width}
          height={video.height}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${portrait ? 'object-[center_25%]' : ''}`}
        />
        <span className={`absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-brand-deep/70 text-white transition-colors group-hover:bg-brand-orange group-hover:text-brand-deep ${large ? 'h-16 w-16' : 'h-12 w-12'}`}>
          <Icon name="play" className={`fill-current ${large ? 'h-6 w-6' : 'h-4 w-4'}`} />
        </span>
        <span className="tabular absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded bg-brand-deep px-2 py-1 text-xs font-semibold text-white">
          <Icon name="play" className="h-3 w-3 fill-current" /> {duration(video.seconds)}
        </span>
      </span>
      <span className="block p-4">
        <span className={`block ${eyebrow}`}>{video.program}</span>
        <span className={`mt-1.5 block font-display text-brand-deep group-hover:text-brand-navy ${large ? 'text-xl' : 'text-[1.0625rem]'}`}>{video.title}</span>
        <span className="mt-1 block text-sm leading-6 text-muted">{video.text}</span>
      </span>
    </button>
  )
}

export default function GalleryV1() {
  const [param, setFilter] = useUrlState('filter', 'All')
  const filter = filters.includes(param) ? param : 'All'
  const [showAll, setShowAll] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [playing, setPlaying] = useState(null)

  const filtered = filter === 'All' ? items : items.filter((x) => x.tag === filter)
  const visible = showAll ? filtered : filtered.slice(0, FIRST_PAGE)
  // The pool clip is the sharpest of the six, so it takes the large tile.
  const featuredClip = videos.find((v) => v.id === 'supported-swimming') || videos[0]
  const clips = videos.filter((v) => v !== featuredClip)

  const step = (dir) => setLightboxIndex((prev) => (prev === null ? prev : (prev + dir + filtered.length) % filtered.length))

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-sand-warm">
        <div className="mx-auto grid max-w-[96rem] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-16 lg:pl-8 lg:pr-12 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <p className={eyebrow}>Stories in pictures</p>
            <h1 className="display-xl mt-3 max-w-[18ch] text-brand-deep">Moments that show the mission in action.</h1>
            <p className="mt-5 max-w-[32rem] text-lg leading-8 text-muted">Real moments of learning, care, friendship and community, shared with care and dignity.</p>
            <a href="#dignity" className="group mt-6 inline-flex min-h-11 items-center gap-3 self-start font-semibold text-brand-deep hover:text-brand-navy">
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-brand-orange text-brand-orange-ink" aria-hidden="true">
                <Icon name="arrow-right" className="h-4 w-4" />
              </span>
              How we protect dignity
            </a>
          </div>
          <div className="relative min-h-[240px] lg:min-h-[360px]">
            <img
              src={photos.hero}
              alt="Foundation staff, young people and visitors gathered in the classroom"
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_12%]"
            />
            <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-1/4 lg:block" style={{ background: 'linear-gradient(to right, var(--color-sand-warm), transparent)' }} />
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-paper py-8 md:py-10">
        <div className={wrap}>
          <div role="group" aria-label="Filter photos" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f)
                  setShowAll(false)
                }}
                aria-pressed={filter === f}
                className={`min-h-11 shrink-0 rounded-full border px-6 text-[0.9375rem] font-semibold transition-colors ${
                  filter === f ? 'border-brand-orange bg-brand-orange text-brand-deep' : 'border-line-strong bg-surface text-brand-deep hover:border-brand-navy'
                }`}
              >
                {f === 'All' ? 'All moments' : f}
              </button>
            ))}
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
            {visible.map((item, i) => (
              <li key={item.src} className={spanClass[spans[i % spans.length]]}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View photo: ${item.title}`}
                  className="group block h-full w-full overflow-hidden rounded bg-sand-warm text-left"
                >
                  <span className="block aspect-[4/3] overflow-hidden bg-sand lg:aspect-auto lg:h-56">
                    <img src={item.src} alt={item.title} loading="lazy" decoding="async" style={item.pos ? { objectPosition: item.pos } : undefined} className="h-full w-full object-cover object-[center_30%] transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                  </span>
                  <span className="block px-3 py-3 sm:px-4">
                    <span className={`block truncate ${eyebrow} text-[0.6875rem]`}>{item.tag}</span>
                    <span className="mt-1 block text-[0.9375rem] font-semibold leading-snug text-brand-deep group-hover:text-brand-navy">{item.title}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {filtered.length > visible.length && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-brand-orange bg-surface px-7 text-[0.9375rem] font-semibold text-brand-deep hover:bg-brand-orange"
              >
                Load more moments <Icon name="arrow-down" className="h-4 w-4" />
              </button>
            </div>
          )}
          <p className="sr-only" aria-live="polite">
            Showing {visible.length} of {filtered.length} photos
          </p>
        </div>
      </section>

      {/* Clips */}
      <section className="bg-[#e6f1fb] py-12 md:py-16">
        <div className={wrap}>
          <p className={eyebrow}>Videos from our work</p>
          <h2 className="display-lg mt-2 text-brand-deep">Activities, as they happened.</h2>
          <p className="mt-3 max-w-[52ch] text-[1.0625rem] leading-8 text-muted">
            Short phone clips filmed during sessions. Each one plays only when you press play. The clips have no sound.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Clip video={featuredClip} onPlay={setPlaying} large className="sm:col-span-2 lg:row-span-2" />
            {clips.map((v) => (
              <Clip key={v.id} video={v} onPlay={setPlaying} />
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section id="dignity" className="scroll-mt-28 bg-paper py-12 md:py-16">
        <div className={wrap}>
          <p className={eyebrow}>Our commitment</p>
          <h2 className="display-lg mt-2 text-brand-deep">Every image should protect dignity as well as tell a story.</h2>
          <p className="mt-3 text-[1.0625rem] leading-8 text-muted">These are the checks behind every image and story shared on our site.</p>
          <ul className="mt-8 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-line">
            {standards.map(([icon, title, text]) => (
              <li key={title} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <Icon name={icon} className="h-9 w-9 text-brand-orange-ink" />
                <h3 className="mt-4 font-display text-[1.0625rem] text-brand-deep">{title}</h3>
                <p className="mt-1 text-[0.9375rem] leading-6 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Share */}
      <section className="-mb-20 bg-sand-warm">
        <div className={`${wrap} flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between`}>
          <div>
            <p className={eyebrow}>Share with us</p>
            <h2 className="display-lg mt-2 max-w-[28ch] text-brand-deep">Have approved photos or a story from an Eagle’s Wings activity?</h2>
            <p className="mt-3 max-w-[50ch] text-[1.0625rem] leading-8 text-muted">
              The Foundation can review suitable media for future publication, provided consent, context and usage rights are clear.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button label="Contact the team" href="/contact" />
            <Button label="Read our privacy policy" href="/privacy" variant="outline" icon={null} />
          </div>
        </div>
      </section>

      <Lightbox list={filtered} index={lightboxIndex} onStep={step} onClose={() => setLightboxIndex(null)} />
      <VideoModal video={playing} onClose={() => setPlaying(null)} />
    </>
  )
}
