import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import { photos } from '../../data/photos.js'

// Single-variant page. Each entry links to its own route.

const links = [
  ['gallery', 'Gallery', 'images', 'Approved photos and videos'],
  ['careers', 'Careers', 'briefcase', 'Roles and opportunities'],
  ['faq', 'FAQ', 'circle-help', 'Common questions'],
  ['privacy', 'Privacy', 'shield-check', 'Data and privacy information'],
]

export default function Resources() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Public information in one clear place."
        text="Browse reports, media, answers, partnership information and opportunities."
        img={photos.learning}
      />

      <section className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {links.map(([id, t, i, d]) => (
              <Link
                key={id}
                to={`/${id}`}
                className="group block border-b border-line py-8 sm:px-8 sm:odd:pl-0 sm:even:border-l lg:border-l lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:pl-0"
              >
                <div className="flex items-center justify-between">
                  <Icon name={i} className="h-6 w-6 text-brand-orange" />
                  <Icon name="arrow-up-right" className="h-4 w-4 text-subtle transition-colors group-hover:text-brand-orange" />
                </div>
                <h3 className="display-md mt-6 text-brand-deep">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
