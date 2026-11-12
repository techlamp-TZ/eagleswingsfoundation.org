import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const VARIANT_STYLES = {
  // orange fill, navy label: the main call to action
  primary: 'bg-brand-orange text-brand-deep hover:bg-brand-orange-dark',
  // solid deep navy (visible on paper and on the navy hero)
  dark: 'border border-navy-line bg-brand-deep text-white hover:border-brand-orange',
  // works on paper AND on dark sections: white fill, hairline border
  outline: 'border border-line bg-white text-brand-navy hover:border-brand-navy',
  // secondary: navy on white on light surfaces, white outline inside navy
  // sections (index.css .btn-light), so it is readable wherever it is placed
  light: 'btn-light border',
}

// `href` starting with "#" is an in-page anchor (plain <a>); everything else
// routes through react-router's <Link>. With `onClick` and no `href` it renders
// a real <button>.
export default function Button({ label, href, onClick, variant = 'primary', icon = 'arrow-right' }) {
  const className = `inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-5 py-3 text-[0.9375rem] font-semibold transition-[background-color,border-color,color,transform] duration-200 active:translate-y-px ${VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary}`
  const content = (
    <>
      {label}
      {icon && <Icon name={icon} className="w-4 h-4" />}
    </>
  )
  if (!href) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {content}
      </button>
    )
  }
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    const external = href.startsWith('http')
    return (
      <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {content}
      </a>
    )
  }
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    )
  }
  return (
    <Link to={href} className={className}>
      {content}
    </Link>
  )
}
