import { useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { duration } from '../../data/media.js'

// Click-to-play clip. Before playing, only the poster image loads (no video
// bytes, preload="none"). Pressing Play swaps in a native <video controls>
// element, which brings keyboard and mobile playback controls with it.
// Clips are silent (see data/media.js), and the card says so.
export default function VideoCard({ video, className = '', sizes = 'aspect' }) {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const portrait = video.height > video.width
  const ratio = { aspectRatio: `${video.width} / ${video.height}` }

  function play() {
    setPlaying(true)
    // start once the element exists; the user gesture allows playback
    requestAnimationFrame(() => {
      ref.current?.play().catch(() => {})
      ref.current?.focus()
    })
  }

  return (
    <figure className={`flex flex-col ${portrait && sizes !== 'fill' ? 'w-full max-w-[18rem]' : ''} ${className}`}>
      <div className={`relative overflow-hidden rounded bg-brand-deep ${sizes === 'fill' ? 'h-full min-h-[16rem]' : ''}`} style={sizes === 'fill' ? undefined : ratio}>
        {playing ? (
          <video
            ref={ref}
            src={video.src}
            poster={video.poster}
            controls
            playsInline
            muted
            preload="metadata"
            className="absolute inset-0 h-full w-full bg-brand-deep object-contain"
            aria-label={`${video.title}, ${duration(video.seconds)}, no sound`}
          />
        ) : (
          <button
            type="button"
            onClick={play}
            className="group absolute inset-0 block h-full w-full text-left"
            aria-label={`Play ${duration(video.seconds)}, ${video.title}, no sound`}
          >
            <img
              src={video.poster}
              alt=""
              width={video.width}
              height={video.height}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full ${portrait && sizes === 'fill' ? 'object-cover object-top' : 'object-cover'}`}
            />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded bg-white px-3 py-2 text-sm font-semibold text-brand-deep transition-transform group-hover:-translate-y-0.5">
              <Icon name="play" className="h-4 w-4 fill-current text-brand-orange-ink" />
              Play <span className="tabular font-medium text-subtle">{duration(video.seconds)}</span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3">
        <span className="block font-semibold text-brand-deep">{video.title}</span>
        <span className="mt-1 block text-sm leading-6 text-muted">{video.text}</span>
        <span className="mt-1 block text-xs text-subtle">
          {video.program}. No sound.
        </span>
      </figcaption>
    </figure>
  )
}
