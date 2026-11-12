import GalleryV1 from './GalleryV1.jsx'

// Gallery used to be a multi-variant family (v0, v1). The Foundation picked
// v1 as the final page, so v0 was removed and this is now a plain
// single-variant page like FAQ/Contact/Impact/etc.
export default function Gallery() {
  return <GalleryV1 />
}
