import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { volunteerRoles } from '../../data/volunteerRoles.js'
import { usePageTitle } from '../../utils/usePageTitle.js'
import './volunteers.css'

const standards = [
  ['shield-check', 'Safeguarding', 'Protect children, older people and vulnerable participants.'],
  ['heart-handshake', 'Dignity', 'Treat every person with respect, choice and inclusion.'],
  ['badge-check', 'Consent', 'Use names, images and stories only with appropriate approval.'],
  ['lock-keyhole', 'Confidentiality', 'Handle personal information carefully and only when necessary.'],
  ['clock-3', 'Reliability', 'Commit clearly, communicate early and respect agreed responsibilities.'],
]

const roleEntries = Object.entries(volunteerRoles)

export default function Volunteers() {
  usePageTitle('Our Volunteers')
  return (
    <>
      <section className="bg-sand-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mono-label flex items-center gap-2 text-brand-navy">
            <span className="text-lg leading-none text-brand-orange">+</span> People who power the mission
          </div>
          <h1 className="display-xl mt-5 text-brand-deep">Our Volunteers</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            <Link to="/" className="underline underline-offset-2">
              Home
            </Link>{' '}
            · Our Volunteers
          </p>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Volunteer community"
            title="Meet the roles behind the mission."
            text="These are the roles people can join. Volunteer profiles are shown only with each person’s approval."
          />
          <p className="mt-6 max-w-3xl border-l-2 border-brand-orange pl-4 text-sm leading-6 text-muted">
            <strong className="text-brand-deep">Profiles:</strong> names, photos and biographies are published only with the volunteer’s approval.
          </p>

          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {roleEntries.map(([id, role]) => (
              <article key={id}>
                <Link to={`/volunteers/${id}`} className="block overflow-hidden rounded">
                  <img src={role.thumb} className="h-64 w-full object-cover" alt={role.title} />
                </Link>
                <div className="mono-label mt-4 flex items-center gap-2 text-brand-orange">
                  <Icon name={role.icon} className="w-3.5 h-3.5" /> {role.tag}
                </div>
                <h2 className="display-sm mt-2 text-brand-deep">{role.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{role.intro}</p>
                <Link to={`/volunteers/${id}`} className="mt-4 inline-flex w-full items-center gap-1 border-t border-line pt-3 text-sm font-semibold text-brand-navy hover:text-brand-orange">
                  View role <Icon name="arrow-right" className="w-3.5 h-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Volunteer standards"
            title="Trust is built through how people serve."
            text="This strip highlights the standards expected from anyone representing Eagle's Wings."
          />
          <div className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {standards.map(([i, t, d]) => (
              <div key={t} className="border-b border-line py-7 sm:pr-6">
                <Icon name={i} className="w-5 h-5 text-brand-orange" />
                <h3 className="display-sm mt-4 text-brand-deep">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line relative bg-sand text-brand-deep">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="eyebrow text-brand-orange">Become part of the team</div>
            <h2 className="display-lg mt-4 text-brand-deep">Bring your time, skills and care to the mission.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">Volunteer opportunities can include programs, events, communication, administration, fundraising, professional expertise and community outreach. Applications are reviewed before placement.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Apply to volunteer" href="/get-involved" />
              <Button label="Explore programs" href="/programs" variant="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
