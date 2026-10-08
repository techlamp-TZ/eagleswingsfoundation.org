import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import { usePageTitle } from '../../utils/usePageTitle.js'

const shortcuts = [
  ['/get-involved', 'Get involved', 'Volunteer or partner'],
  ['/events', 'Events', 'See planned gatherings'],
  ['/donate', 'Support', 'Ways to donate'],
]

// Single-variant catch-all page (React Router's <Route path="*">).
export default function NotFound() {
  usePageTitle('Page Not Found')
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mono-label text-brand-orange">404</div>
        <h1 className="display-xl mt-5 text-brand-deep">This page flew off course.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          The page you tried to open may have moved, been renamed, or is not available yet. You can return home or continue exploring the Foundation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button label="Back to home" href="/" />
          <Button label="Explore programs" href="/programs" variant="outline" />
          <Button label="Contact us" href="/contact" variant="outline" />
        </div>
        <ul className="mt-14 border-t border-line">
          {shortcuts.map(([to, title, sub]) => (
            <li key={to} className="border-b border-line">
              <Link to={to} className="group flex items-center justify-between gap-4 py-5">
                <span>
                  <span className="display-sm block text-brand-deep group-hover:text-brand-orange">{title}</span>
                  <span className="mt-1 block text-sm text-muted">{sub}</span>
                </span>
                <Icon name="arrow-up-right" className="h-5 w-5 text-brand-orange" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
