import FaqV1 from './FaqV1.jsx'

// FAQ used to be a multi-variant family (v0, v1). The Foundation picked v1
// as the final page, so v0 was removed and this is now a plain
// single-variant page like Contact/Impact/Reports/etc.
export default function Faq() {
  return <FaqV1 />
}
