import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import EmptyState from '../../components/ui/EmptyState.jsx'

// Single-variant page, ported 1:1 from pages-a.js's EWPages.impact.

const framework = [
  ['users', 'Reach', 'People, families, caregivers and communities engaged.'],
  ['graduation-cap', 'Learning', 'Knowledge or skills gained through education and training.'],
  ['activity', 'Practice', 'Observable use of life skills, care guidance or support practices.'],
  ['heart-handshake', 'Experience', 'Consent-based stories about relevance, dignity and confidence.'],
]

export default function Impact() {
  return (
    <>
      <PageHero
        kicker="Impact"
        title="How we measure what changes."
        text="We are building a library of verified stories, testimonials and reports. We publish results only after they have been checked."
        img="/photos/foundation/pool-group.webp"
        alt="Young people swimming in the pool during a group session"
        actions={<Button label="View reports" href="/reports" variant="light" />}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Impact framework"
            title="The evidence we will publish."
            text="These are the kinds of evidence we will share as programs build consistent monitoring."
          />
          <div className="mt-12 grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
            {framework.map(([i, t, d]) => (
              <div key={t} className="border-b border-line py-8 md:px-6 md:first:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0">
                <Icon name={i} className="h-7 w-7 text-brand-orange" />
                <h3 className="mt-5 font-display text-2xl text-brand-deep">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmptyState
        title="Verified stories are being prepared"
        text="Beneficiary stories, testimonials and figures will be added after consent, validation and program reporting are in place."
        icon="chart-no-axes-combined"
      />
    </>
  )
}
