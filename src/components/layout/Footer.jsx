import { Link } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import { SITE } from '../../config/site.js'

const explore = [
  ['About us', '/about'],
  ['Find support', '/get-started'],
  ['Programs', '/programs'],
  ['Our impact', '/impact'],
  ['Get involved', '/get-involved'],
  ['Donate', '/donate'],
]

const resources = [
  ['News and stories', '/blog'],
  ['Gallery', '/gallery'],
  ['Equipment catalogue', '/catalogue'],
  ['FAQ', '/faq'],
  ['Privacy', '/privacy'],
]

const linkClass = 'text-on-navy hover:text-white'

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-deep text-on-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_1.1fr] lg:px-8">
        <div>
          <div translate="no" className="font-display text-2xl text-white">Eagle's Wings Foundation Tanzania</div>
          <p className="mt-3 max-w-sm text-[0.9375rem] leading-7 text-on-navy">Practical learning and everyday support for children, older people, families and caregivers in Tegeta, Dar es Salaam.</p>
          <div className="mt-5 flex gap-2">
            <a href="https://instagram.com/eaglewings.tz" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded border border-navy-line text-on-navy hover:border-white hover:text-white">
              <Icon name="instagram" className="w-4 h-4" />
            </a>
            <a href="https://wa.me/255749044723" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded border border-navy-line text-on-navy hover:border-white hover:text-white">
              <Icon name="whatsapp" className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <div className="mt-4 grid gap-2.5 text-[0.9375rem]">
            {explore.map(([label, to]) => (
              <Link key={to} to={to} className={linkClass}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Resources</h2>
          <div className="mt-4 grid gap-2.5 text-[0.9375rem]">
            {resources.map(([label, to]) => (
              <Link key={to} to={to} className={linkClass}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <div className="mt-4 space-y-3 text-[0.9375rem]">
            <p className="flex gap-2">
              <Icon name="map-pin" className="mt-0.5 w-4 h-4 shrink-0 text-brand-orange" />
              Tegeta, Dar es Salaam, Tanzania
            </p>
            <a className={`flex gap-2 ${linkClass}`} href={`mailto:${SITE.email}`}>
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
              {SITE.email}
            </a>
            <a className={`flex gap-2 ${linkClass}`} href="tel:+255749044723">
              <Icon name="phone" className="mt-0.5 w-4 h-4 shrink-0 text-brand-orange" />
              +255 749 044 723
            </a>
            <p className="flex gap-2">
              <Icon name="instagram" className="mt-0.5 w-4 h-4 shrink-0 text-brand-orange" />
              @Eaglewings.tz
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-line">
        <div className="mono-label mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-on-navy-dim sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Eagle's Wings Foundation Tanzania</span>
          <Link to="/privacy" className="hover:text-white">Privacy policy</Link>
        </div>
      </div>
    </footer>
  )
}
