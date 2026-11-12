import { useEffect } from 'react'
import { SITE, absoluteUrl } from '../config/site.js'

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
  return el
}

// Sets description, canonical, Open Graph / Twitter tags and optional JSON-LD
// for the current page, and restores the defaults when the page unmounts.
export function useSeo({ title, description, path, image, type = 'website', jsonLd, enabled = true }) {
  useEffect(() => {
    if (!enabled) return undefined
    const prevDescription = document.head.querySelector('meta[name="description"]')?.getAttribute('content')
    const url = absoluteUrl(path || window.location.pathname)
    // Social crawlers handle JPEG most reliably; every photo ships a .jpg twin next to its .webp.
    const img = image ? (image.startsWith('http') ? image : absoluteUrl(image.replace(/\.webp$/, '.jpg'))) : absoluteUrl(SITE.logo)
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name

    if (description) setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description || '')
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:site_name', SITE.name)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description || '')
    setMeta('name', 'twitter:image', img)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    let script = null
    if (jsonLd) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.seo = 'page'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      if (script) script.remove()
      if (prevDescription) setMeta('name', 'description', prevDescription)
      document.head.querySelector('link[rel="canonical"]')?.remove()
    }
  }, [title, description, path, image, type, jsonLd, enabled])
}
