import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import { blogListItems } from '../../data/blog.js'

// One real article per core topic. Loaded lazily from AboutV2 so the blog's
// Markdown stays out of the main bundle.
const topics = ['Neuro-diversity', 'Caregiving', 'Healthy ageing', 'Life skills']

export default function FeaturedArticles() {
  const picks = topics.map((cat) => blogListItems.find((a) => a.cat === cat)).filter(Boolean)
  return (
    <div className="mt-12 border-t border-line">
      {picks.map((a, i) => (
        <Link
          key={a.slug}
          to={`/blog/article-${a.slug}`}
          className="group grid gap-3 border-b border-line py-6 transition-colors hover:bg-sand md:grid-cols-[4rem_1fr_auto] md:items-center md:gap-8 md:px-3"
        >
          <span className="mono-label text-subtle">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <div className="eyebrow text-brand-orange">{a.cat}</div>
            <h3 className="mt-2 font-display text-2xl leading-tight text-brand-deep">{a.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{a.excerpt}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
            Read · {a.readingMinutes} min
            <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-brand-orange transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  )
}
