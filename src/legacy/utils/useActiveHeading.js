import { useEffect, useState } from 'react'

// Scroll-spy: returns the id of the last section whose top has scrolled past
// `offset` px from the viewport top. Used for sticky tables of contents.
export function useActiveHeading(ids, offset = 140) {
  const [active, setActive] = useState(ids[0] || '')
  useEffect(() => {
    if (!ids.length) return undefined
    const onScroll = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])
  return active
}
