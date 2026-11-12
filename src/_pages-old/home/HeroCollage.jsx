import { useEffect, useRef, useState } from 'react'
import Icon from '../../components/ui/Icon.jsx'
import { photos } from '../../data/photos.js'
import { duration } from '../../data/media.js'

// Layered hero collage: one portrait, two activity photos and one video
// preview. The three photo slots cycle through curated sets of real
// Foundation photographs; the video slot stays put.
// Motion (set rotation, floating, pointer parallax) can be paused, and is off
// entirely under prefers-reduced-motion, where the dots still switch sets.

// [src, alt, object-position]
const sets = [
  {
    main: ['/photos/hero-wheelchair.webp', 'A Foundation caregiver standing behind a young woman who uses a wheelchair', 'center 18%'],
    top: [photos.child, 'A Foundation staff member and a young girl smiling together', 'center 58%'],
    bottom: [photos.learningDrawing, 'Two young people colouring a drawing at a low table', 'center'],
  },
  {
    main: [photos.people, 'A visitor and a Foundation staff member standing together in the classroom', 'center 25%'],
    top: [photos.hero, 'Foundation staff, young people and visitors gathered in the classroom', 'center 30%'],
    bottom: [photos.galleryExtra1, 'Young people on a swing set in the play area', 'center'],
  },
  {
    main: ['/photos/foundation/beach-outing-800.webp', 'Three people standing together on a beach during an outing', 'center 60%'],
    top: [photos.childSmile, 'A boy smiling and clapping during a session', 'center 22%'],
    bottom: [photos.lifeGardening, 'A young person and a caregiver watering the vegetable garden', 'center 45%'],
  },
]

const ROTATE_MS = 6500

function Frame({ slot, active, ready, ratio }) {
  return (
    <div className="collage-frame" style={{ aspectRatio: ratio }}>
      {sets.map((set, i) => {
        // Only the first set loads with the page; the rest load once idle.
        if (i !== 0 && !ready) return null
        const [src, alt, position] = set[slot]
        return (
          <img
            key={src}
            src={src}
            alt={i === active ? alt : ''}
            aria-hidden={i === active ? undefined : true}
            data-active={i === active}
            style={{ objectPosition: position }}
            decoding="async"
            fetchPriority={i === 0 && slot === 'main' ? 'high' : undefined}
          />
        )
      })}
    </div>
  )
}

export default function HeroCollage({ video, onPlay }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [ready, setReady] = useState(false)
  const [reduced, setReduced] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    const t = window.setTimeout(() => setReady(true), 2500)
    return () => {
      mq.removeEventListener('change', sync)
      window.clearTimeout(t)
    }
  }, [])

  const still = paused || reduced

  // Automatic set rotation
  useEffect(() => {
    if (still || !ready) return undefined
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % sets.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [still, ready])

  // Gentle pointer parallax, desktop pointers only
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const reset = () => {
      el.style.setProperty('--px', '0')
      el.style.setProperty('--py', '0')
    }
    if (still || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      reset()
      return undefined
    }
    let frame = 0
    const onMove = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - (r.left + r.width / 2)) / r.width
        const y = (e.clientY - (r.top + r.height / 2)) / r.height
        el.style.setProperty('--px', String(Math.max(-1, Math.min(1, x))))
        el.style.setProperty('--py', String(Math.max(-1, Math.min(1, y))))
      })
    }
    const zone = el.closest('section') ?? el
    zone.addEventListener('pointermove', onMove)
    zone.addEventListener('pointerleave', reset)
    return () => {
      cancelAnimationFrame(frame)
      zone.removeEventListener('pointermove', onMove)
      zone.removeEventListener('pointerleave', reset)
      reset()
    }
  }, [still])

  return (
    <>
      <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
      <div ref={ref} className="collage mx-auto max-w-[30rem] lg:max-w-none" data-paused={still}>
        {/* orange accent behind the photos */}
        <svg aria-hidden="true" viewBox="0 0 400 360" className="pointer-events-none absolute -inset-[4%] h-[108%] w-[108%]" fill="none">
          <path d="M40 300c70 40 190 46 290-30 60-46 74-120 40-190" stroke="var(--color-brand-orange)" strokeWidth="5" strokeLinecap="round" />
        </svg>

        <div className="collage-slot left-[1%] top-[5%] z-10 w-[45%]" style={{ '--rot': '-3deg', '--depth': '10px' }}>
          <div className="collage-enter" style={{ '--delay': '60ms' }}>
            <Frame slot="main" active={active} ready={ready} ratio="3 / 4" />
          </div>
        </div>

        <div className="collage-slot left-[51%] top-0 w-[47%]" style={{ '--rot': '3deg', '--depth': '-14px' }}>
          <div className="collage-enter" style={{ '--delay': '180ms' }}>
            <div className="collage-float">
              <Frame slot="top" active={active} ready={ready} ratio="4 / 3" />
            </div>
          </div>
        </div>

        <div className="collage-slot left-[45%] top-[36%] z-20 w-[53%]" style={{ '--rot': '-1.5deg', '--depth': '18px' }}>
          <div className="collage-enter" style={{ '--delay': '300ms' }}>
            <button
              type="button"
              onClick={(e) => onPlay(video, e.currentTarget)}
              className="collage-frame group block w-full text-left"
              style={{ aspectRatio: '16 / 10' }}
              aria-label={`Play video: ${video.title}, ${duration(video.seconds)}, no sound`}
            >
              <img src={video.poster} alt="" data-active="true" decoding="async" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-brand-deep transition-transform group-hover:scale-105">
                  <Icon name="play" className="h-6 w-6 translate-x-0.5 fill-current" />
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="collage-slot left-[39%] top-[67%] z-30 w-[45%]" style={{ '--rot': '4deg', '--depth': '-10px' }}>
          <div className="collage-enter" style={{ '--delay': '420ms' }}>
            <div className="collage-float" style={{ '--float-delay': '-3.5s' }}>
              <Frame slot="bottom" active={active} ready={ready} ratio="4 / 3" />
            </div>
          </div>
        </div>

        <p
          className="home-serif collage-slot left-[3%] top-[80%] z-30 max-w-[38%] rounded-sm bg-brand-cream px-3 py-2 text-[0.8125rem] italic leading-snug text-brand-deep sm:text-[0.9375rem]"
          style={{ '--rot': '-6deg', '--depth': '6px' }}
        >
          Real people. Everyday possibilities.
        </p>
      </div>
      </div>

      <div className="flex items-center justify-center gap-3 lg:col-start-1 lg:row-start-2 lg:justify-start lg:self-start">
        <div className="flex items-center" role="group" aria-label="Hero photo sets">
          {sets.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setReady(true)
                setActive(i)
              }}
              aria-label={`Show photo set ${i + 1} of ${sets.length}`}
              aria-current={i === active ? 'true' : undefined}
              className="grid h-11 w-11 place-items-center"
            >
              <span className={`block h-1 rounded-full transition-[width,background-color] ${i === active ? 'w-8 bg-white' : 'w-6 bg-on-navy-dim/60'}`} />
            </button>
          ))}
        </div>
        {!reduced && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Play photo animation' : 'Pause photo animation'}
            className="grid h-11 w-11 place-items-center rounded-full border border-on-navy-dim text-white hover:border-white"
          >
            <Icon name={paused ? 'play' : 'pause'} className="h-4 w-4" />
          </button>
        )}
      </div>
    </>
  )
}
