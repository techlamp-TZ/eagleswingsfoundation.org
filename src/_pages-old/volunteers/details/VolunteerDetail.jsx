import { useParams, Link } from 'react-router-dom'
import Icon from '../../../components/ui/Icon.jsx'
import Button from '../../../components/ui/Button.jsx'
import SectionHead from '../../../components/ui/SectionHead.jsx'
import { photos } from '../../../data/photos.js'
import { volunteerRoles } from '../../../data/volunteerRoles.js'
import { usePageTitle } from '../../../utils/usePageTitle.js'
import NotFound from '../../not-found/NotFound.jsx'
import './volunteer-detail.css'

// Route: /volunteers/:volunteerId — an unknown id renders NotFound.

const roleFacts = [
  ['user-check', 'Opportunity type', 'Volunteer role'],
  ['map-pin', 'Current base', 'Tegeta, Dar es Salaam'],
  ['shield-check', 'Safeguarding', 'Required'],
  ['clipboard-list', 'Placement', 'After review'],
]

const faqs = [
  ['Do I need professional qualifications?', 'Not for every role. Some opportunities are practical or community-based, while specialist roles may require relevant qualifications or experience.'],
  ['How are volunteers placed?', 'Interest is reviewed against current needs, role suitability, safeguarding requirements and available supervision before placement.'],
  ['Can I choose this exact role?', 'You can state your preferred role in the volunteer form. The Foundation may suggest another role if it is a better fit or if current needs differ.'],
  ['Will my photo or name appear on the website?', 'Only with your consent. We do not publish volunteers\' names, photos or social profiles unless you agree.'],
]

export default function VolunteerDetail() {
  const { volunteerId } = useParams()
  const role = volunteerRoles[volunteerId]
  usePageTitle(role?.title)
  if (!role) return <NotFound />

  return (
    <>
      <section className="bg-sand-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mono-label flex items-center gap-2 text-brand-navy">
            <span className="text-lg leading-none text-brand-orange">+</span> Volunteer opportunity
          </div>
          <h1 className="display-xl mt-5 text-brand-deep">{role.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            <Link to="/" className="underline underline-offset-2">
              Home
            </Link>{' '}
            ·{' '}
            <Link to="/volunteers" className="underline underline-offset-2">
              Our Volunteers
            </Link>{' '}
            · {role.tag}
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
            <div>
              <img src={role.photo} className="h-[420px] w-full rounded object-cover lg:h-[520px]" alt={role.title} />
              <div className="mono-label mt-4 flex items-center gap-2 text-brand-orange">
                <Icon name={role.icon} className="w-4 h-4" /> Role category · {role.tag}
              </div>
            </div>
            <div>
              <div className="eyebrow text-brand-orange">Volunteer role</div>
              <h2 className="display-lg mt-3 text-brand-deep">{role.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted">{role.intro}</p>
              <div className="mt-8 border-t border-line">
                {roleFacts.map(([i, t, d]) => (
                  <div key={t} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                    <span className="mono-label flex items-center gap-2 text-subtle">
                      <Icon name={i} className="w-3.5 h-3.5" /> {t}
                    </span>
                    <span className="text-right font-semibold text-brand-deep">{d}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button label="Apply for this role" href="/get-involved" />
                <Button label="Back to volunteers" href="/volunteers" variant="outline" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 border-t border-line pt-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <h3 className="display-md text-brand-deep">About this role</h3>
              <p className="mt-5 leading-8 text-muted">{role.about}</p>
              <div className="mt-8 border-l-2 border-brand-orange pl-5">
                <div className="mono-label text-brand-orange">Important boundary</div>
                <p className="mt-3 text-sm leading-7 text-muted">Volunteers work within approved responsibilities. Clinical, safeguarding, financial, legal or other specialist matters must be escalated to the appropriate qualified person or Foundation lead.</p>
              </div>
            </div>
            <div>
              <div className="mono-label text-brand-orange">What you may help with</div>
              <div className="mt-4 border-t border-line">
                {role.responsibilities.map((x, i) => (
                  <div key={x} className="flex gap-4 border-b border-line py-4">
                    <span className="mono-label pt-0.5 text-brand-navy">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-6 text-muted">{x}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line relative bg-sand text-brand-deep">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="eyebrow text-brand-orange">Join the mission</div>
            <h2 className="display-lg mt-4 text-brand-deep">Help build a future filled with dignity, inclusion and opportunity.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">Apply through the Foundation's volunteer-interest form. Placement depends on current needs, suitability, safeguarding and available supervision.</p>
            <div className="mt-7">
              <Button label="Start volunteer application" href="/get-involved" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:px-8">
          <img src={photos.people} className="h-[380px] w-full rounded object-cover lg:h-[460px]" alt="Volunteer teamwork" />
          <div>
            <div className="eyebrow text-brand-orange">Frequently asked questions</div>
            <h2 className="display-lg mt-3 text-brand-deep">Questions about volunteering.</h2>
            <div className="mt-7 border-t border-line">
              {faqs.map(([q, a], i) => (
                <details key={q} className="group border-b border-line py-5" open={i === 0 ? true : undefined}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-deep">
                    <span>{q}</span>
                    <Icon name="plus" className="w-4 h-4 shrink-0 text-brand-orange transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="pt-4 text-sm leading-7 text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Role fit"
            title="This opportunity may suit someone who is…"
            text="These are general indicators rather than acceptance guarantees. Final placement depends on the Foundation's current needs and review."
          />
          <div className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {role.fit.map((x) => (
              <div key={x} className="flex gap-3 border-b border-line py-6 sm:pr-6">
                <Icon name="check" className="mt-1 w-4 h-4 shrink-0 text-brand-orange" />
                <p className="font-semibold leading-6 text-brand-deep">{x}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button label="Apply to volunteer" href="/get-involved" variant="dark" />
          </div>
        </div>
      </section>
    </>
  )
}
