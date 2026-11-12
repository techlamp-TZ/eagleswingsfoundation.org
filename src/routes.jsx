import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'

import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Programs from './pages/programs/Programs.jsx'
import GetStarted from './pages/get-started/GetStarted.jsx'
import ProgramDetail from './pages/programs/details/ProgramDetail.jsx'
import GetInvolved from './pages/get-involved/GetInvolved.jsx'
// The blog bundles every article's Markdown, so load it only when visited.
const Blog = lazy(() => import('./pages/blog/Blog.jsx'))
const ArticleDetail = lazy(() => import('./pages/blog/details/ArticleDetail.jsx'))
const Catalogue = lazy(() => import('./pages/catalogue/Catalogue.jsx'))
import Causes from './pages/causes/Causes.jsx'
import Donate from './pages/donate/Donate.jsx'
import Gallery from './pages/gallery/Gallery.jsx'
import Faq from './pages/faq/Faq.jsx'
import Contact from './pages/contact/Contact.jsx'
import Volunteers from './pages/volunteers/Volunteers.jsx'
import VolunteerDetail from './pages/volunteers/details/VolunteerDetail.jsx'
import Impact from './pages/impact/Impact.jsx'
import Careers from './pages/careers/Careers.jsx'
import Privacy from './pages/privacy/Privacy.jsx'
import Resources from './pages/resources/Resources.jsx'
import NotFound from './pages/not-found/NotFound.jsx'

// Every multi-variant family gets two route shapes: canonical (renders
// variantConfig[family].default) and explicit (`.../v/:variant`). Dynamic
// detail families (program/event) nest the same pattern under their id.
// See src/config/variants.js for the source of truth on defaults/order.
export default function AppRoutes() {
  return (
    <Suspense fallback={<div role="status" className="grid min-h-[60vh] place-items-center text-sm text-muted">Loading…</div>}>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="about" element={<About />} />

        <Route path="programs" element={<Programs />} />
        <Route path="programs/:programId" element={<ProgramDetail />} />
        <Route path="programs/:programId/v/:variant" element={<ProgramDetail />} />

        <Route path="get-involved" element={<GetInvolved />} />

        <Route path="events/*" element={<Navigate to="/contact" replace />} />

        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<ArticleDetail />} />

        <Route path="causes" element={<Causes />} />
        <Route path="causes/v/:variant" element={<Causes />} />

        <Route path="donate" element={<Donate />} />

        <Route path="gallery" element={<Gallery />} />
        <Route path="catalogue" element={<Catalogue />} />

        <Route path="faq" element={<Faq />} />

        <Route path="contact" element={<Contact />} />

        <Route path="volunteers" element={<Volunteers />} />
        <Route path="volunteers/:volunteerId" element={<VolunteerDetail />} />

        <Route path="mission-vision-values" element={<Navigate to="/about#mission" replace />} />
        <Route path="impact" element={<Impact />} />
        <Route path="reports" element={<Navigate to="/impact" replace />} />
        <Route path="partners" element={<Navigate to="/contact" replace />} />
        <Route path="careers" element={<Careers />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="get-started" element={<GetStarted />} />
        <Route path="resources" element={<Resources />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </Suspense>
  )
}
