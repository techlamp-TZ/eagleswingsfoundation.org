import EventsV1 from './EventsV1.jsx'

// Events list used to be a multi-variant family (v0, v1, v2). The
// Foundation picked v1 as the final page, so v0/v2 were removed and this is
// now a plain single-variant page like Impact/Reports/etc.
export default function Events() {
  return <EventsV1 />
}
