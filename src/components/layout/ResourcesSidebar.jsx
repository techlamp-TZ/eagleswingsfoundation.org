import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import { resourceNav } from '../../data/nav.js'

const resourceIcons = {
  blog: 'file-text',
  gallery: 'image',
  catalogue: 'shopping-bag',
  careers: 'users-round',
  faq: 'circle-help',
  privacy: 'shield-check',
}

function activeRouteId(pathname) {
  return pathname.replace(/^\//, '').split('/')[0] || 'home'
}

// Desktop-only Resources menu on the left edge. A small navy circle sits on the edge;
// pointing at it or pressing it fans the Resources links out beside it as
// pills. Closes when the pointer leaves, on an outside press, on Escape and
// on route change. Below 1440px the Resources list lives in the header menu
// and the mobile menu instead.
export default function ResourcesSidebar() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const tabRef = useRef(null)
  const firstRef = useRef(null)
  const viaKeyboard = useRef(false)
  const { pathname } = useLocation()
  const active = activeRouteId(pathname)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Opened from the keyboard: move focus to the first link.
  // (A tick later: the list is visibility:hidden until its transition starts.)
  useEffect(() => {
    if (!open || !viaKeyboard.current) return undefined
    viaKeyboard.current = false
    const id = setTimeout(() => firstRef.current?.focus(), 30)
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
    <div
      ref={ref}
      className="no-print fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 items-center min-[1440px]:flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={tabRef}
        type="button"
        onClick={(e) => {
          // detail === 0 means the press came from the keyboard
          viaKeyboard.current = e.detail === 0
          setOpen((o) => (e.detail === 0 ? !o : true))
        }}
        aria-expanded={open}
        aria-controls="resourcesSidebar"
        aria-label="Resources menu"
        title="Resources"
        className="ml-2 grid h-11 w-11 place-items-center rounded-full bg-brand-navy text-brand-orange shadow-[0_6px_18px_rgba(6,31,63,0.18)] transition-colors hover:bg-brand-deep"
      >
        <Icon name={open ? 'x' : 'panel-left-open'} className="h-5 w-5" />
      </button>

      <nav id="resourcesSidebar" aria-label="Resources" className={`pl-2 ${open ? 'visible' : 'invisible'}`}>
        <ul className="flex flex-col items-start gap-2">
          {resourceNav.map(([label, id], i) => {
            const on = active === id
            return (
              <li
                key={id}
                style={{ transitionDelay: open ? `${i * 35}ms` : '0ms' }}
                className={`transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
                  open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
                }`}
              >
                <Link
                  ref={i === 0 ? firstRef : undefined}
                  to={`/${id}`}
                  aria-current={on ? 'page' : undefined}
                  className={`flex min-h-12 items-center gap-3 rounded-full border py-2 pl-5 pr-7 text-[0.9375rem] shadow-[0_6px_18px_rgba(6,31,63,0.14)] transition-colors ${
                    on
                      ? 'border-brand-orange bg-[#fdebd3] font-semibold text-brand-deep'
                      : 'border-line bg-white text-brand-deep hover:border-brand-navy hover:text-brand-navy'
                  }`}
                >
                  <Icon name={resourceIcons[id] || 'circle'} className="h-5 w-5 shrink-0 text-brand-orange-ink" />
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
