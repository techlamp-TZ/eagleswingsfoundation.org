import BlogV2 from './BlogV2.jsx'

// Blog list used to be a multi-variant family (v0, v1, v2). The Foundation
// picked v2 as the final page, so v0/v1 were removed and this is now a
// plain single-variant page like Impact/Reports/etc.
export default function Blog() {
  return <BlogV2 />
}
