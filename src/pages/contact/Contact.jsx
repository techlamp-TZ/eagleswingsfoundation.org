import ContactV1 from './ContactV1.jsx'

// Contact used to be a multi-variant family (v0, v1). The Foundation picked
// v1 as the final page, so v0 was removed and this is now a plain
// single-variant page like Impact/Reports/etc.
export default function Contact() {
  return <ContactV1 />
}
