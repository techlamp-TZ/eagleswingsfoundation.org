import Icon from './Icon.jsx'

// Flat placeholder panel for sections whose content isn't published yet.
export default function EmptyState({ title, text, icon = 'inbox' }) {
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded border border-dashed border-line bg-sand p-8 text-center sm:p-14">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-brand-navy">
            <Icon name={icon} className="w-5 h-5" />
          </div>
          <h2 className="display-md mt-6 text-brand-deep">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-muted">{text}</p>
        </div>
      </div>
    </section>
  )
}
