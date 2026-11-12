import { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'
import { duration } from '../../data/media.js'

// Plays one clip in a native <dialog>. showModal() gives the focus trap,
// Escape-to-close and focus return to the opening button for free. Clips are
// silent (see data/media.js), so starting playback on open is not intrusive.
export default function VideoModal({ video, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (video && dialog && !dialog.open) dialog.showModal()
  }, [video])

  if (!video) return null
  const portrait = video.height > video.width

  return (
    <dialog
      ref={ref}
      className="video-dialog"
      aria-labelledby="video-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current.close()
      }}
    >
      <div className="flex items-start justify-between gap-4 px-5 py-4">
        <div className="min-w-0">
          <h2 id="video-dialog-title" className="font-display text-lg text-white">
            {video.title}
          </h2>
          <p className="mt-1 text-sm leading-6 text-on-navy">
            {video.text} {duration(video.seconds)}, no sound.
          </p>
        </div>
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="grid h-11 w-11 shrink-0 place-items-center rounded border border-navy-line text-white hover:border-brand-orange"
          aria-label="Close video"
        >
          <Icon name="x" className="h-5 w-5" />
        </button>
      </div>
      <video
        src={video.src}
        poster={video.poster}
        controls
        autoPlay
        muted
        playsInline
        preload="metadata"
        className={`block w-full bg-black object-contain ${portrait ? 'max-h-[70dvh]' : 'max-h-[74dvh]'}`}
        aria-label={`${video.title}, ${duration(video.seconds)}, no sound`}
      />
    </dialog>
  )
}
