import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import EmptyState from '../../components/ui/EmptyState.jsx'
import { photos } from '../../data/photos.js'

export default function Careers() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Join a mission-driven team."
        text="Current staff, consultant and internship opportunities will be listed here as they become available."
        img={photos.people}
      />

      <section className="section bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-line px-4 pt-10 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <Icon name="briefcase-business" className="w-6 h-6 text-brand-orange" />
            <h2 className="display-md mt-5 text-brand-deep">Work that supports inclusion.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-muted">
              Future opportunities may include program delivery, caregiver training, community engagement, administration and specialist
              support. Roles will only be listed when approved.
            </p>
            <div className="mt-6">
              <Button label="Send a general enquiry" href="/contact" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <EmptyState
        title="No published vacancies at the moment"
        text="Approved vacancies, internships and consultancy opportunities will appear here."
        icon="briefcase"
      />
    </>
  )
}
