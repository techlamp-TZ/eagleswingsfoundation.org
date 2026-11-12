import HomeV9 from './HomeV9.jsx'

// Home used to be a multi-variant family (9 competing designs). The Foundation
// picked v9 as the final homepage, so every other variant was removed and
// this is now a plain single-variant page like Impact/Reports/etc.
export default function Home() {
  return <HomeV9 />
}
