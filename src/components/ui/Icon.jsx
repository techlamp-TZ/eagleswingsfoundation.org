import * as icons from 'lucide-react'
import { Circle } from 'lucide-react'

function toPascalCase(name) {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function InstagramGlyph({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

// WhatsApp speech bubble and handset, drawn in currentColor so it works on any background.
function WhatsAppGlyph({ className }) {
  return (
    <svg viewBox="96 96 320 320" fill="none" className={className} aria-hidden="true">
      <path stroke="currentColor" strokeWidth="26" d="M123 393l14-65a138 138 0 1150 47z" />
      <path
        fill="currentColor"
        d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
      />
    </svg>
  )
}

export default function Icon({ name, className = 'w-5 h-5' }) {
  if (name === 'instagram') return <InstagramGlyph className={className} />
  if (name === 'whatsapp') return <WhatsAppGlyph className={className} />
  const Component = icons[toPascalCase(name)]
  if (!Component) {
    console.warn(`Icon: unknown lucide icon name "${name}"`)
    return <Circle className={className} aria-hidden="true" />
  }
  return <Component className={className} aria-hidden="true" />
}
