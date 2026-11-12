import { useLocation } from 'react-router-dom'

export default function WhatsAppButton() {
  const { pathname } = useLocation()
  // Shown only on wide screens, where it sits in the page gutter and cannot cover
  // text or form buttons. Smaller screens reach WhatsApp from the top bar instead.
  if (pathname === '/contact') return null
  return (
    <a
      href="https://wa.me/255749044723"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="no-print fixed bottom-6 right-6 z-40 hidden h-12 w-12 transition-transform hover:-translate-y-0.5 min-[1440px]:block"
    >
      {/* Official WhatsApp mark: green tile, white bubble and handset */}
      <svg viewBox="0 0 512 512" className="h-full w-full" aria-hidden="true">
        <rect width="512" height="512" rx="77" fill="#25d366" />
        <path fill="#25d366" stroke="#fff" strokeWidth="26" d="M123 393l14-65a138 138 0 1150 47z" />
        <path
          fill="#fff"
          d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
        />
      </svg>
    </a>
  )
}
