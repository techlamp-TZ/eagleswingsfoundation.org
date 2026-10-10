// Single source of truth for which design variant a page family's canonical
// route renders. `order` lists every variant that exists (in display order,
// oldest to newest) for nav dropdowns / the in-page VariantSwitcher; `default`
// is which one the bare route (e.g. /programs) renders. Change `default` to change
// the live site — no per-page code changes needed.

export const variantConfig = {
  // Home, About, the Programs list, Get Involved, the Events list, the Blog
  // list, FAQ, Gallery, Donate and Contact are no longer multi-variant families — the Foundation
  // picked a final design for each and every other version was deleted
  // (Home.jsx/About.jsx/Programs.jsx/GetInvolved.jsx/Events.jsx/Blog.jsx/Faq.jsx/Gallery.jsx/Donate.jsx/
  // Contact.jsx render them directly, no entry needed here). Program/Event
  // DETAIL pages (below) are still multi-variant.
  causes: { default: 4, order: [1, 2, 3, 4] },
  'program-detail': { default: 3, order: [1, 2, 3] },
}
