import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import { photos } from '../../data/photos.js'

const missionPoints = [
  ['zap', 'Empower: build independence, skills and confidence.'],
  ['megaphone', 'Encourage: walk alongside individuals and families with hope.'],
  ['book-open', 'Educate: share practical knowledge, therapy guidance and training.'],
]

const values = [
  ['users-round', 'Community Inclusion', 'Ensuring individuals are active, contributing members of their local communities rather than being isolated.'],
  ['scale', 'Rights and Dignity', 'They deserve human rights, equality and dignity, and should be treated with respect.'],
  ['briefcase-business', 'Empowerment and Independence', 'We teach vocational training and independent living skills so individuals can generate their own income and become independent.'],
  ['stethoscope', 'Early Support', 'Providing early intervention therapies, family counseling and educational opportunities for caregivers.'],
]

const commitments = [
  ['shield-check', 'Transparent reporting', 'Publish approved reports and verified results as systems mature.'],
  ['user-check', 'Consent-aware stories', 'Use beneficiary, caregiver and partner stories only with appropriate consent.'],
  ['scale', 'Responsible stewardship', 'Connect future donations to clear program priorities and accountable use.'],
  ['refresh-cw', 'Continuous learning', 'Use feedback and evidence to improve programs before scaling them.'],
]

export default function MissionVisionValues() {
  return (
    <>
      <PageHero
        kicker="Our purpose"
        title="Creating hope. Shaping futures."
        text="Mission, vision and the values that guide how Eagle’s Wings works with individuals, families and communities."
        img={photos.people}
      />

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_2.2fr] lg:gap-16 lg:px-8">
          <div>
            <div className="h-[3px] w-10 bg-brand-orange" />
            <div className="eyebrow mt-4 text-brand-deep">Our mission</div>
          </div>
          <div>
            <h2 className="display-lg text-brand-deep">Empower, encourage and educate.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Our mission is to empower, encourage and educate less privileged, special needs and elderly individuals by helping,
              caring for and supporting their needs.
            </p>
            <ul className="mt-8 max-w-2xl border-t border-line">
              {missionPoints.map(([i, t]) => (
                <li key={t} className="flex items-center gap-3 border-b border-line py-4">
                  <Icon name={i} className="h-5 w-5 shrink-0 text-brand-orange" />
                  <span className="text-sm font-semibold text-brand-deep">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button label="Explore our programs" href="/programs" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <img src={photos.family} className="absolute inset-0 h-full w-full object-cover" alt="Family and community support" />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
          <div className="eyebrow text-brand-orange">Our vision</div>
          <h2 className="display-md mt-4 max-w-xl text-brand-deep">
            A fully inclusive society where special needs individuals are valued equally.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            The vision for Eagle's Wings Foundation is to create full inclusive awareness that the special needs population and
            individuals with disabilities are valued equally. They will receive comprehensive support in order to reach their full
            potential.
          </p>
        </div>
      </section>

      <section className="bg-sand section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="eyebrow text-brand-orange">Core pillars of our vision</div>
          <h2 className="display-lg mt-3 max-w-3xl text-brand-deep">What full inclusion looks like in practice.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            These are the four pillars that guide how Eagle's Wings works with individuals, families and communities toward full
            inclusion and independence.
          </p>
          <div className="mt-10 grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
            {values.map(([i, t, d]) => (
              <article key={t} className="border-b border-line py-8 md:px-6 md:first:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0">
                <Icon name={i} className="h-7 w-7 text-brand-orange" />
                <h3 className="mt-5 font-display text-2xl text-brand-deep">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{d}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl border-l-[3px] border-brand-orange pl-5 text-sm leading-7 text-muted">
            <span className="eyebrow block text-brand-deep">How we earn trust</span>
            <span className="mt-2 block">
              We share impact figures only when they are verified, testimonials only with consent, and we keep our growth accountable to the
              families and communities we serve.
            </span>
          </p>
        </div>
      </section>

      <section className="border-y border-line grid bg-sand lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:pl-[max(4rem,calc((100vw-80rem)/2+2rem))]">
          <div className="eyebrow text-brand-orange">Our promise</div>
          <h2 className="display-lg mt-4 max-w-xl text-brand-deep">Grow carefully. Serve respectfully. Report truthfully.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            As Eagle’s Wings expands, the website and programs are designed to keep dignity, inclusion, accountability and practical
            usefulness at the centre.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button label="Get involved" href="/get-involved" />
            <Button label="Support the mission" href="/donate" variant="light" />
          </div>
        </div>
        <div className="relative min-h-[320px]">
          <img
            src={photos.galleryExtra1}
            alt="Young people playing together on the swings"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="eyebrow text-brand-orange">What this means in practice</div>
          <h2 className="display-lg mt-3 max-w-3xl text-brand-deep">
            Four commitments visitors should be able to see across the website.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Eagle’s Wings makes explicit commitments that can be verified
            over time.
          </p>
          <div className="mt-10 grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
            {commitments.map(([i, t, d]) => (
              <article key={t} className="border-b border-line py-8 md:px-6 md:first:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0">
                <Icon name={i} className="h-7 w-7 text-brand-orange" />
                <h3 className="mt-5 font-display text-2xl text-brand-deep">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
