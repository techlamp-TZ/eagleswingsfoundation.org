import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import { resourceNav } from '../../data/nav.js'

const resourceIcons = {
  'mission-vision-values': 'target',
  gallery: 'image',
  catalogue: 'shopping-bag',
  reports: 'file-text',
  partners: 'handshake',
  careers: 'briefcase',
  testimonials: 'message-square-quote',
  faq: 'circle-help',
  privacy: 'shield-check',
}

function activeRouteId(pathname) {
  return pathname.replace(/^\//, '').split('/')[0] || 'home'
}

// Desktop-only left sidebar for the Resources pages. A slim tab sits on the
// left edge; clicking it slides the panel in over the page. Closes on outside
// press, Escape and route change. Below xl the Resources list lives in the
// mobile menu instead.
export default function ResourcesSidebar() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const tabRef = useRef(null)
  const closeRef = useRef(null)
  const { pathname } = useLocation()
  const active = activeRouteId(pathname)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Move focus into the panel when it opens so keyboard users land on it.
  // (A tick later: the panel is visibility:hidden until its transition starts.)
  useEffect(() => {
    if (!open) return undefined
    const id = setTimeout(() => closeRef.current?.focus(), 30)
    return () => clearTimeout(id)
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onPress = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        tabRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPress)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPress)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="no-print hidden min-[1440px]:block">
      <button
        ref={tabRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="resourcesSidebar"
        title="Open resources menu"
        className="fixed left-0 top-1/2 z-40 flex w-8 -translate-y-1/2 flex-col items-center gap-3 rounded-r bg-brand-navy py-4 text-white transition-colors hover:bg-brand-deep"
      >
        <Icon name="panel-left-open" className="h-4 w-4 text-brand-orange" />
        <span className="mono-label [writing-mode:vertical-rl]">Resources</span>
        <Icon name="chevron-right" className="h-3.5 w-3.5 text-brand-orange" />
      </button>

      <aside
        id="resourcesSidebar"
        aria-label="Resources"
        className={`fixed inset-y-0 left-0 z-[60] flex w-72 flex-col border-r border-line bg-white transition-[transform,visibility] duration-200 ${
          open ? 'visible translate-x-0' : 'invisible -translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <div className="eyebrow text-brand-orange">Explore</div>
            <h2 className="display-sm mt-1 text-brand-deep">Resources</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={() => {
              setOpen(false)
              tabRef.current?.focus()
            }}
            aria-label="Close resources"
            className="grid h-10 w-10 place-items-center rounded border border-line text-brand-navy hover:bg-sand"
          >
            <Icon name="x" className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto overscroll-contain" aria-label="Resources">
          {resourceNav.map(([label, id]) => (
            <Link
              key={id}
              to={`/${id}`}
              className={`flex items-center gap-3 border-b border-line border-l-2 px-5 py-3.5 text-sm transition-colors ${
                active === id
                  ? 'border-l-brand-orange bg-sand font-semibold text-brand-navy'
                  : 'border-l-transparent text-brand-ink hover:bg-sand hover:text-brand-navy'
              }`}
            >
              <Icon name={resourceIcons[id] || 'circle'} className="h-4 w-4 shrink-0 text-brand-orange" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  )
}
