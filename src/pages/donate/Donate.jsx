import DonateV1 from './DonateV1.jsx'

// Donate used to be a multi-variant family (v0, v1). The Foundation picked v1
// as the final page, so v0 was removed and this is now a plain
// single-variant page like FAQ/Gallery/Contact/etc.
export default function Donate() {
  return <DonateV1 />
}
