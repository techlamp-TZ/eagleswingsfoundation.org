import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Eagle's Wings Foundation Tanzania` : "Eagle's Wings Foundation Tanzania"
  }, [title])
}
