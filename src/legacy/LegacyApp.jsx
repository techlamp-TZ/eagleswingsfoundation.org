'use client'

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'

// Every page except the homepage is a client-side React app that runs under
// the Next.js catch-all route (src/app/[...slug]/page.tsx).
export default function LegacyApp() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
