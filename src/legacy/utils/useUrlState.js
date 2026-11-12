import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

// useState-like hook that keeps a string value in the URL query (?key=value),
// so filters, tabs and searches survive a refresh, work with the back button
// and can be shared. A value equal to `initial` is omitted from the URL.
export function useUrlState(key, initial = '') {
  const [params, setParams] = useSearchParams()
  const value = params.get(key) ?? initial
  const setValue = useCallback(
    (next) => {
      setParams(
        (prev) => {
          const p = new URLSearchParams(prev)
          const v = typeof next === 'function' ? next(p.get(key) ?? initial) : next
          if (v === '' || v == null || v === initial) p.delete(key)
          else p.set(key, v)
          return p
        },
        { replace: true },
      )
    },
    [key, initial, setParams],
  )
  return [value, setValue]
}
