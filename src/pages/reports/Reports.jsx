import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import { photos } from '../../data/photos.js'

// Single-variant page, ported 1:1 from pages-b.js's EWPages.reports.

const documents = [
  ['file-text', 'Annual reports', 'Program summaries, governance and major milestones.'],
  ['landmark', 'Financial transparency', 'Approved financial statements and stewardship information.'],
  ['shield-check', 'Governance documents', 'Policies and public governance information where appropriate.'],
]

export default function Reports() {
  return (
    <>
      <PageHero
        kicker="Annual reports"
        title="Transparency and responsible stewardship."
        text="Annual reports, financial statements and governance documents will be published here when available."
        img={photos.people}
        actions={<Button label="Contact the Foundation" href="/contact" variant="outline" />}
      />

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Document centre"
            title="A clear home for public accountability documents."
            text="Our first reports will appear here, each with its date and a short summary."
          />
          <div className="mt-12 grid border-t border-line md:grid-cols-3">
            {documents.map(([i, t, d]) => (
              <div key={t} className="border-b border-line py-8 md:pr-8">
                <Icon name={i} className="w-6 h-6 text-brand-orange" />
                <h3 className="display-sm mt-5 text-brand-deep">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{d}</p>
                <p className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-sm font-semibold text-brand-deep">
                  <Icon name="clock" className="h-4 w-4 text-brand-orange" />
                  Status: not yet published
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
