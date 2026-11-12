import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/ew/header'
import { Footer } from '@/components/ew/footer'
import { routeMeta } from '../../data/nav.js'

function activeRouteId(pathname) {
  return pathname.replace(/^\//, '').split('/')[0] || 'home'
}

// Wraps every inner page in the new site's header and footer. Sets a default
// document title from routeMeta (pages can override it), and on a new page
// starts at the top or at the section named in the URL hash.
//
// The bottom padding stands in for the old footer's top margin: pages that end
// on a coloured band pull it in with -mb-20 so the band meets the footer.
export default function Layout() {
  const { pathname, hash } = useLocation()
  const id = activeRouteId(pathname)

  useLayoutEffect(() => {
    const title = routeMeta[id]
    document.title = title ? `${title} | Eagle's Wings Foundation Tanzania` : "Eagle's Wings Foundation Tanzania"
  }, [id])

  useEffect(() => {
    // Tell the shared header where the client-side router just moved, so its
    // active-nav highlight follows inner-page navigation too.
    window.dispatchEvent(new Event("ew-route-change"));
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="legacy-page route-enter flex-1 pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
