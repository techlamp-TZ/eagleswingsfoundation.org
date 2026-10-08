import { photos } from '../../data/photos.js'

// Interior page hero: light paper surface, headline and intro on the left,
// a framed photograph on the right (never text over a face). `imgPosition`
// sets the crop focus, e.g. "center 30%". `actions` is a React node (Buttons).
export default function PageHero({
  kicker,
  title,
  text,
  img = photos.child,
  alt = "Eagle's Wings Foundation community work",
  imgPosition = 'center 35%',
  actions = null,
}) {
  return (
    <section className="surface-light border-b border-line bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-14 lg:px-8 lg:py-16">
        <div>
          {kicker && <p className="eyebrow text-brand-orange">{kicker}</p>}
          <h1 className="display-xl mt-3 max-w-2xl text-brand-deep">{title}</h1>
          {text && <p className="lead mt-5">{text}</p>}
          {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded bg-sand lg:aspect-[5/4]">
          <img
            src={img}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: imgPosition }}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
