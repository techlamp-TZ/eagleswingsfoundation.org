import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import { photos } from '../../data/photos.js'

const FeaturedArticles = lazy(() => import('./FeaturedArticles.jsx'))

// `photo` (image URL) and `bio` (one or two sentences) are optional — add them
// once the person has approved a headshot and a short biography.
const leadership = [
  { name: 'Stella Paul Rweyemamu', role: 'Director', initials: 'SR' },
  { name: 'Tegemeo Paschal Nsonda', role: 'Executive Secretary', initials: 'TN' },
  { name: 'Paul Alex Rweyemamu', role: 'Treasurer', initials: 'PR' },
  { name: 'Winifrida Igembe Rweyemamu', role: 'Member', initials: 'WR' },
  { name: 'Doreen Temistocles Igembe', role: 'Member', initials: 'DI' },
]

const storyHighlights = [
  ['users-round', 'Together for a brighter future', 'Support works best when families, caregivers and communities are included.'],
  ['sparkles', 'Change one step at a time', 'Practical learning turns awareness into better everyday support.'],
  ['heart-handshake', 'United by dignity and purpose', 'People deserve support that respects identity, choice and potential.'],
]

const factStrip = [
  ['Founded', '2025'],
  ['Community base', 'Tegeta, Dar es Salaam'],
  ['Core program areas', '5'],
  ['Approach', 'Dignity & inclusion'],
]

const inlineLink = 'font-semibold text-brand-navy underline decoration-brand-orange underline-offset-4 hover:text-brand-deep'

export default function AboutV2() {
  return (
    <>
      <PageHero
        kicker="Who we are"
        title="About Eagle’s Wings"
        text="Eagle’s Wings Foundation Tanzania was founded in 2025 in Tegeta, Dar es Salaam, to improve the lives of people with disabilities and challenges, particularly children and older people."
        img={photos.hero}
        imgPosition="70% 35%"
        actions={<Button label="Explore our programs" href="/programs" />}
      />

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_2.2fr] lg:gap-16 lg:px-8">
          <div>
            <div className="h-[3px] w-10 bg-brand-orange" />
            <div className="eyebrow mt-4 text-brand-deep">Our story</div>
          </div>
          <div>
            <h2 className="display-lg text-brand-deep">Compassion in action. Building a better tomorrow.</h2>
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>
                Our story begins in Tegeta, Dar es Salaam, in 2025, with a simple aim: to improve the lives of people with disabilities and challenges,
                particularly children and older people.
              </p>
              <p>
                We focus on practical learning and community support for them and for the families and caregivers around them, so that understanding turns
                into everyday participation and belonging.
              </p>
              <p>
                Our mission is to empower, encourage and educate less privileged, special needs and elderly individuals by helping, caring for and
                supporting their needs.{' '}
                <Link to="/mission-vision-values" className={inlineLink}>
                  Read our mission, vision and values
                </Link>
                .
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Explore our programs" href="/programs" variant="dark" />
              <Button label="Get involved" href="/get-involved" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface section">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-8">
          <h2 className="display-lg max-w-md text-brand-deep">The principles behind our work.</h2>
          <ul className="divide-y divide-line border-y border-line">
            {storyHighlights.map(([i, title, d]) => (
              <li key={title} className="grid grid-cols-[2.75rem_1fr] gap-5 py-6">
                <span className="grid h-11 w-11 place-items-center rounded bg-sand">
                  <Icon name={i} className="h-5 w-5 text-brand-orange" />
                </span>
                <span>
                  <span className="display-sm block text-brand-deep">{title}</span>
                  <span className="mt-1 block text-[0.9375rem] leading-7 text-muted">{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <img
            src={photos.family}
            className="absolute inset-0 h-full w-full object-cover"
            alt="A Foundation staff member with a young child"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
          <h2 className="display-md text-brand-deep">At a glance</h2>
          <dl className="mt-6 max-w-lg">
            {factStrip.map(([t, v]) => (
              <div key={t} className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:border-t">
                <dt className="mono-label text-subtle">{t}</dt>
                <dd className="font-display text-xl text-brand-deep sm:text-2xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_2.2fr] lg:gap-16">
            <div>
              <div className="h-[3px] w-10 bg-brand-orange" />
              <div className="eyebrow mt-4 text-brand-deep">Leadership</div>
            </div>
            <div>
              <h2 className="display-lg text-brand-deep">Meet the people guiding the mission.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                The people who guide the Foundation’s direction and look after its work.
              </p>
            </div>
          </div>
          <div className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {leadership.map((m) => (
              <article key={m.name} className="border-b border-line py-6 sm:pr-6 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="h-24 w-24 object-cover" loading="lazy" decoding="async" />
                ) : (
                  <div
                    aria-hidden="true"
                    className="grid h-16 w-16 place-items-center border-b-4 border-brand-orange bg-brand-navy font-display text-2xl text-white"
                  >
                    {m.initials}
                  </div>
                )}
                <h3 className="mt-5 font-display text-xl leading-tight text-brand-deep">{m.name}</h3>
                <p className="mono-label mt-2 text-subtle">{m.role}</p>
                {m.bio && <p className="mt-3 text-sm leading-6 text-muted">{m.bio}</p>}
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button label="See our programs" href="/programs" variant="dark" />
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-sand px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:pl-[max(4rem,calc((100vw-80rem)/2+2rem))]">
          <h2 className="display-lg max-w-xl text-brand-deep">Together we can build a better tomorrow.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            Support can come through volunteering, partnerships, professional expertise, in-kind contributions or financial giving.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button label="Get involved" href="/get-involved" />
            <Button label="Donate" href="/donate" variant="light" />
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[420px]">
          <img
            src={photos.galleryExtra1}
            className="absolute inset-0 h-full w-full object-cover"
            alt="Children playing together on a swing"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="bg-sand section">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <h2 className="display-lg text-brand-deep">Real stories, shared with care.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              We are preparing our first stories of impact. Each one will be shared only with the informed consent of the people involved, so that every
              story is true and told with dignity.
            </p>
            <div className="mt-8 flex items-start gap-3 border-t border-line pt-5">
              <Icon name="shield-check" className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
              <div>
                <p className="font-semibold text-brand-deep">Consent-first storytelling</p>
                <p className="mt-1 text-sm text-muted">Every story is shared with the permission of the people in it.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={photos.care}
              className="h-[340px] w-full object-cover"
              alt="A supported swimming session"
              loading="lazy"
              decoding="async"
            />
            <div className="border-l-[3px] border-brand-orange bg-paper p-6">
              <h3 className="font-display text-2xl text-brand-deep">Our first stories are coming soon</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Follow us on{' '}
                <a href="https://instagram.com/eaglewings.tz" target="_blank" rel="noreferrer" className={inlineLink}>
                  Instagram @eaglewings.tz
                </a>{' '}
                or{' '}
                <Link to="/contact" className={inlineLink}>
                  get in touch
                </Link>{' '}
                to hear when they are published.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="display-lg text-brand-deep">Practical reading for families and caregivers.</h2>
              <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Plain-language articles from the Foundation on neuro-diversity, caregiving, healthy ageing and everyday life skills.
              </p>
            </div>
            <div>
              <Button label="Browse all articles" href="/blog" variant="outline" />
            </div>
          </div>
          <Suspense fallback={<div className="mt-12 min-h-[28rem] border-t border-line" />}>
            <FeaturedArticles />
          </Suspense>
        </div>
      </section>
    </>
  )
}
