import { useParams } from 'react-router-dom'
import { variantConfig } from '../config/variants.js'
import VariantSwitcher from '../components/ui/VariantSwitcher.jsx'
import NotFound from '../pages/not-found/NotFound.jsx'

// Builds the canonical wrapper component for a page family with multiple
// design variants (e.g. Home, About, Donate...). Mount the SAME component at
// both `/family` and `/family/v/:variant` — with no `:variant` param it
// renders variantConfig[family].default, otherwise the requested one (or
// NotFound if that number doesn't exist in `registry`).
export function createVariantPage(family, registry) {
  return function VariantPage() {
    const { variant } = useParams()
    const config = variantConfig[family]
    const v = variant ? Number(variant) : config.default
    const Variant = registry[v]
    if (!Variant) return <NotFound />
    return (
      <>
        <VariantSwitcher family={family} variant={v} />
        <Variant />
      </>
    )
  }
}

// Same idea for a dynamic detail family scoped by an id (program/event).
// `paramName` is the route param holding the id (e.g. "programId"),
// `lookup(id)` returns that item's data or undefined, and `basePrefix` is
// the route prefix (e.g. "/programs") used to build VariantSwitcher links
// and to scope the canonical route back to `basePrefix/id`.
export function createVariantDetailPage(family, registry, { paramName, basePrefix, lookup }) {
  return function VariantDetailPage() {
    const params = useParams()
    const id = params[paramName]
    const item = lookup(id)
    if (!item) return <NotFound />
    const config = variantConfig[family]
    const v = params.variant ? Number(params.variant) : config.default
    const Variant = registry[v]
    if (!Variant) return <NotFound />
    return (
      <>
        <VariantSwitcher family={family} variant={v} basePath={`${basePrefix}/${id}`} />
        <Variant item={item} />
      </>
    )
  }
}
