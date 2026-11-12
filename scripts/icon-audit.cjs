// Audit which icon names the legacy pages actually use, and whether each
// exists in lucide-legacy (v1.47) vs lucide-react (v0.525).
const fs = require('node:fs')
const path = require('node:path')
const legacy = require('lucide-legacy')
const current = require('lucide-react')

const root = path.join(__dirname, '..', 'src', 'legacy')
const names = new Set()

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (/\.(js|jsx|ts|tsx|md)$/.test(e.name)) {
      const src = fs.readFileSync(p, 'utf8')
      for (const m of src.matchAll(/icon:\s*'([a-z0-9-]+)'/g)) names.add(m[1])
      for (const m of src.matchAll(/<Icon name="([a-z0-9-]+)"/g)) names.add(m[1])
    }
  }
}
walk(root)

const pascal = (n) => n.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('')
const report = {}
for (const n of [...names].sort()) {
  const P = pascal(n)
  const inLegacy = typeof legacy[P] !== 'undefined'
  const inCurrent = typeof current[P] !== 'undefined'
  report[n] = { legacy: inLegacy, current: inCurrent }
  console.log(`${n.padEnd(22)} legacy=${inLegacy} current=${inCurrent}`)
}
console.log('\nmissing in CURRENT:', Object.entries(report).filter(([, v]) => !v.current).map(([k]) => k).join(', ') || 'NONE')
console.log('missing in LEGACY:', Object.entries(report).filter(([, v]) => !v.legacy).map(([k]) => k).join(', ') || 'NONE')
