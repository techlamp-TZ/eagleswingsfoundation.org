import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import { nav, resourceNav } from '../../data/nav.js'

function activeRouteId(pathname) {
  return pathname.replace(/^\//, '').split('/')[0] || 'home'
}

function Brand({ dark }) {
  return (
    <Link to="/" translate="no" className="inline-flex shrink-0 items-center gap-3">
      <img
        src="/eagles-wings-foundation-logo-header.webp"
        alt="Eagle's Wings Foundation Tanzania"
        className={`h-11 w-auto object-contain sm:h-12 ${dark ? 'rounded bg-brand-cream p-1' : ''}`}
        width={80}
        height={64}
        decoding="sync"
        fetchPriority="high"
      />
      <span className={`hidden leading-tight ${dark ? 'sm:block lg:hidden xl:block' : 'xl:block'}`} aria-hidden="true">
        <span className={`block font-display text-[1.02rem] ${dark ? 'text-white' : 'text-brand-deep'}`}>Eagle's Wings</span>
        <span className={`block text-[0.7rem] font-medium tracking-wide ${dark ? 'text-on-navy' : 'text-muted'}`}>Foundation Tanzania</span>
      </span>
    </Link>
  )
}

const navLinkBase = 'relative py-2 text-[0.9375rem] font-medium transition-colors'
// `dark` is the home page, where the header sits on navy above the hero.
const navLinkClass = (isActive, dark = false) => {
  const active = `${dark ? 'text-white' : 'text-brand-navy'} after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-orange`
  const idle = dark ? 'text-on-navy hover:text-white' : 'text-brand-ink hover:text-brand-navy'
  return `${navLinkBase} ${isActive ? active : idle}`
}

// Desktop "Resources" menu: a disclosure button with a panel of links.
// Closes on route change, outside click and Escape (focus returns to the button).
function ResourcesMenu({ active, dark }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const btnRef = useRef(null)
  const { pathname } = useLocation()
  const isActive = resourceNav.some(([, id]) => id === active)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return undefined
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btnRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls="resources-menu"
        onClick={() => setOpen((o) => !o)}
        className={`${navLinkClass(isActive, dark)} inline-flex items-center gap-1`}
      >
        Resources
        <Icon name="chevron-down" className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div id="resources-menu" className="absolute left-1/2 top-full z-50 mt-3 w-[34rem] -translate-x-1/2 border border-line bg-white p-3">
          <ul className="grid grid-cols-2 gap-x-2">
            {resourceNav.map(([label, id]) => (
              <li key={id}>
                <Link
                  to={`/${id}`}
                  className={`block rounded px-3 py-2.5 text-sm transition-colors ${active === id ? 'bg-sand font-semibold text-brand-navy' : 'text-brand-ink hover:bg-sand hover:text-brand-navy'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const active = activeRouteId(pathname)
  const dark = pathname === '/'

  useEffect(() => {
    setMobileOpen(false)
    setMobileResourcesOpen(false)
  }, [pathname])

  return (
    <>
      <div className="bg-brand-deep text-on-navy">
        <div className="mono-label mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <span className="hidden items-center gap-2 sm:inline-flex">
            <Icon name="map-pin" className="h-4 w-4 text-brand-orange" /> Tegeta, Dar es Salaam
          </span>
          <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end sm:gap-6">
            <a href="tel:+255749044723" className="inline-flex items-center gap-1.5 whitespace-nowrap hover:text-white sm:gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-orange" /> +255 749 044 723
            </a>
            <a href="https://wa.me/255749044723" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 whitespace-nowrap hover:text-white sm:gap-2">
              <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-brand-orange" /> <span className="max-[359px]:sr-only">WhatsApp</span>
            </a>
            <a href="https://instagram.com/eaglewings.tz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 whitespace-nowrap hover:text-white sm:gap-2">
              <Icon name="instagram" className="h-4 w-4 shrink-0 text-brand-orange" /> <span className="max-[359px]:sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <header className={`sticky top-0 z-50 border-b ${dark ? 'border-navy-line bg-brand-deep' : 'border-line bg-paper'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div className="lg:justify-self-start">
            <Brand dark={dark} />
          </div>
          <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Primary navigation">
            {nav.slice(0, 4).map(([label, id]) => (
              <Link key={id} to={`/${id}`} className={navLinkClass(active === id, dark)}>
                {label}
              </Link>
            ))}
            <ResourcesMenu active={active} dark={dark} />
            {nav.slice(4).map(([label, id]) => (
              <Link key={id} to={`/${id}`} className={navLinkClass(active === id, dark)}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex lg:items-center lg:gap-2 lg:justify-self-end">
            <Link to="/donate" className="inline-flex items-center rounded bg-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark">
              Donate
            </Link>
          </div>
          <button
            id="menuBtn"
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            className={`grid h-11 w-11 place-items-center rounded border lg:hidden ${dark ? 'border-navy-line bg-brand-navy text-white' : 'border-line bg-white text-brand-navy'}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={mobileOpen ? 'x' : 'menu'} />
          </button>
        </div>
        {mobileOpen && (
          <div id="mobileMenu" className="max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain border-t border-line bg-paper px-4 pb-5 pt-3 lg:hidden">
            <div className="grid gap-0.5">
              <Link to="/" className={`rounded px-3 py-3 text-[15px] font-medium ${active === 'home' ? 'bg-sand text-brand-navy' : 'text-brand-ink hover:bg-sand'}`}>
                Home
              </Link>
              {nav.map(([label, id]) => (
                <Link key={id} to={`/${id}`} className={`rounded px-3 py-3 text-[15px] font-medium ${active === id ? 'bg-sand text-brand-navy' : 'text-brand-ink hover:bg-sand'}`}>
                  {label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setMobileResourcesOpen((o) => !o)}
                aria-expanded={mobileResourcesOpen}
                className="flex items-center justify-between rounded px-3 py-3 text-left text-[15px] font-medium text-brand-ink hover:bg-sand"
              >
                Resources
                <Icon name="chevron-down" className={`w-4 h-4 transition ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileResourcesOpen && (
                <div className="grid gap-0.5 border-l border-line pl-3">
                  {resourceNav.map(([label, id]) => (
                    <Link key={id} to={id === 'home' ? '/' : `/${id}`} className={`rounded px-3 py-2.5 text-sm ${active === id ? 'bg-sand text-brand-navy' : 'text-muted hover:bg-sand'}`}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
              <Link to="/donate" className="mt-2 rounded bg-brand-orange px-4 py-3.5 text-center text-sm font-semibold text-brand-deep">
                Donate
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
