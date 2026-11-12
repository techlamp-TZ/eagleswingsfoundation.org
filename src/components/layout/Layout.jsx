import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import ResourcesSidebar from './ResourcesSidebar.jsx'
import { routeMeta } from '../../data/nav.js'

function activeRouteId(pathname) {
  return pathname.replace(/^\//, '').split('/')[0] || 'home'
}

// Header + <Outlet/> + Footer + WhatsApp FAB, rendered once around every
// page route (replaces app.js's render() re-building header/footer on
// every hash change). Sets a default document title from routeMeta.
//
// This uses useLayoutEffect (not the usePageTitle hook, which is a plain
// useEffect) deliberately: React fires ALL layout effects, parent-included,
// before ANY passive effect anywhere in the tree, so this default always
// applies before a child detail page's usePageTitle(item.title) call —
// letting the more specific title win. If this also used useEffect, child
// effects (which mount before parent effects) would run first and this
// default would fire after and silently clobber them back every time.
export default function Layout() {
  const { pathname, hash } = useLocation()
  const id = activeRouteId(pathname)

  useLayoutEffect(() => {
    const title = routeMeta[id]
    document.title = title ? `${title} | Eagle's Wings Foundation Tanzania` : "Eagle's Wings Foundation Tanzania"
  }, [id])

  // New page: start at the top, or at the section named in the URL hash
  // (e.g. /about#mission).
  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="route-enter">
        <Outlet />
      </main>
      <Footer />
      <ResourcesSidebar />
      <WhatsAppButton />
    </>
  )
}
