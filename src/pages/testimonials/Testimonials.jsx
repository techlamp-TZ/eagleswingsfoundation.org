import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { DetailHero } from '../programs/details/detail-parts.jsx'

// Single-variant page. Consent-aware story slots; no fabricated testimonials.

const slots = [
  ['Families', 'Family perspective', 'A future consent-approved story can describe how a parent or guardian experienced Foundation learning, guidance or community support.', 'users-round'],
  ['Caregivers', 'Caregiver perspective', 'This space is reserved for a verified caregiver reflection on training, practical routines, communication or confidence.', 'hand-heart'],
  ['Volunteers', 'Volunteer perspective', 'A future volunteer voice can describe role clarity, safeguarding, service experience and what meaningful participation looked like.', 'heart-handshake'],
  ['Community', 'Community perspective', 'Approved community feedback can document changes in awareness, inclusion, stigma reduction or access to practical information.', 'megaphone'],
  ['Older people & families', 'Healthy-ageing perspective', 'This card can later feature a verified story about dignified support, routines, movement, nutrition or family engagement.', 'heart-pulse'],
  ['Learning', 'Education perspective', 'A future approved story can reflect on accessible education, therapy guidance, specialized parenting or practical learning.', 'book-heart'],
  ['Life skills', 'Independence perspective', 'This space can document a verified experience around communication, routines, confidence and everyday life-skills practice.', 'sparkles'],
  ['Partners', 'Partner perspective', 'A future partner story can explain what responsible collaboration, sponsorship, expertise or accountability looked like in practice.', 'handshake'],
  ['Events', 'Participant perspective', 'Approved event feedback can reflect what participants learned, how accessible the session felt and what they took forward.', 'calendar-heart'],
]

const requirementTags = ['Consent', 'Verified source', 'Accurate context']

const standards = [
  ['badge-check', 'Source verified', 'The speaker and relationship to the story are confirmed.'],
  ['shield-check', 'Consent recorded', 'Publication permission is appropriate to the person and context.'],
  ['scan-face', 'Dignity protected', 'Stories avoid exploitation, stigma and unnecessary identifying detail.'],
  ['file-check-2', 'Context checked', 'Claims are reviewed so quotations do not imply unsupported outcomes.'],
  ['refresh-cw', 'Consent revisitable', 'A story can be corrected or removed when circumstances require it.'],
]


export default function Testimonials() {
  return (
    <>
      <DetailHero kicker="Voices with dignity" title="Testimonials" crumbs={[['Home', '/'], ['Testimonials']]} />

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Testimonials"
            title="Voices we will share, with permission."
            text="Testimonials from families, caregivers, volunteers and partners will appear here once they have been verified and approved."
          />
          <p className="mt-8 max-w-3xl border-l-2 border-brand-orange pl-5 text-sm leading-7 text-muted">
            <strong className="text-brand-deep">How we publish:</strong> a quote, name or photo appears only after we have verified the source and
            have consent.
          </p>

          <div className="mt-12 grid border-t border-line md:grid-cols-2 xl:grid-cols-3">
            {slots.map(([tag, title, text, ico]) => (
              <article key={title} className="border-b border-line py-8 md:px-8 md:odd:pl-0 md:even:border-l xl:border-l xl:px-8 xl:[&:nth-child(3n+1)]:border-l-0 xl:[&:nth-child(3n+1)]:pl-0">
                <div className="flex items-center justify-between gap-4">
                  <span className="mono-label inline-flex items-center gap-2 text-brand-orange">
                    <Icon name={ico} className="h-3.5 w-3.5" />
                    {tag}
                  </span>
                  <span className="mono-label text-subtle">Awaiting approval</span>
                </div>
                <h2 className="display-sm mt-5 text-brand-deep">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
                <div className="mt-6">
                  <div className="mono-label text-subtle">Future testimonial requirements</div>
                  <div className="mono-label mt-2 flex flex-wrap gap-x-4 gap-y-1 text-brand-deep">
                    {requirementTags.map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Responsible storytelling"
            title="A real story should be powerful because it is true."
            text="This section defines the standards applied before a testimonial can be published."
          />
          <div className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-line">
            {standards.map(([ic, t, d]) => (
              <div key={t} className="border-b border-line py-6 lg:border-b-0 lg:px-5 lg:first:pl-0">
                <Icon name={ic} className="h-5 w-5 text-brand-orange" />
                <h3 className="display-sm mt-4 text-brand-deep">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line relative isolate overflow-hidden bg-sand py-20 text-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="eyebrow text-brand-orange">Share an experience</div>
            <h2 className="display-lg mt-4 text-brand-deep">Have a story Eagle’s Wings should consider?</h2>
            <p className="mt-5 max-w-2xl leading-7 text-muted">
              Contact the Foundation first. The team can review the story, explain how it may be used, confirm consent and decide
              whether publication is appropriate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Contact the team" href="/contact" />
              <Button label="Explore our impact approach" href="/impact" variant="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
