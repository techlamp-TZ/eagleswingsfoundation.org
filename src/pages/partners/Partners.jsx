import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import EmptyState from '../../components/ui/EmptyState.jsx'
import { photos } from '../../data/photos.js'

// Single-variant page, ported 1:1 from pages-b.js's EWPages.partners.

const options = [
  ['coins', 'Program sponsorship', 'Help fund a defined program activity or community initiative.'],
  ['briefcase-business', 'Corporate support', 'Combine CSR resources, expertise, services or employee volunteering.'],
  ['network', 'Institutional collaboration', 'Work together on referrals, awareness, training or community engagement.'],
  ['gift', 'In-kind support', 'Provide relevant equipment, services, venues or materials.'],
]

export default function Partners() {
  return (
    <>
      <PageHero
        kicker="Partners & sponsors"
        title="Working together can widen the reach of care."
        text="The Foundation welcomes responsible partnerships with companies, NGOs, public institutions and community groups."
        img={photos.people}
        actions={<Button label="Discuss a partnership" href="/contact" />}
      />

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Partnership options"
            title="Collaboration can be financial, technical or community-based."
            text="Partner and sponsor names are listed only with their permission."
          />
          <div className="mt-12 grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
            {options.map(([i, t, d]) => (
              <div key={t} className="border-b border-line py-8 md:pr-8">
                <Icon name={i} className="w-6 h-6 text-brand-orange" />
                <h3 className="display-sm mt-5 text-brand-deep">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmptyState
        title="Partner network will be published here"
        text="Confirmed partner and sponsor names and logos can be added as relationships are formalized."
        icon="handshake"
      />
    </>
  )
}
