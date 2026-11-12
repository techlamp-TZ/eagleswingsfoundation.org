import { Link } from 'react-router-dom'
import { variantConfig } from '../../config/variants.js'

// "Viewing design N of M" bar shown above every multi-variant page.
// `basePath` defaults to `/family`; detail pages pass e.g. `/programs/${id}`.
export default function VariantSwitcher({ family, variant, basePath }) {
  // Design-comparison tool for development only; never shown to visitors.
  if (process.env.NODE_ENV === 'production') return null
  const config = variantConfig[family]
  if (!config) return null
  const base = basePath ?? `/${family}`
  const index = config.order.indexOf(variant)

  return (
    <div className="border-b border-line bg-sand">
      <div className="mono-label mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-2 text-muted sm:px-6 lg:px-8">
        <span>
          Design {index + 1} of {config.order.length}
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          {config.order.map((v) => (
            <Link
              key={v}
              to={v === config.default ? base : `${base}/v/${v}`}
              aria-current={v === variant ? 'true' : undefined}
              className={`grid h-6 w-6 place-items-center rounded border text-[11px] transition-colors ${
                v === variant
                  ? 'border-brand-orange bg-brand-orange text-brand-deep'
                  : 'border-line bg-white text-muted hover:border-brand-navy hover:text-brand-navy'
              }`}
            >
              {v}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
