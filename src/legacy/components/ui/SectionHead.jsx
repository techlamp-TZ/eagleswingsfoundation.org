// Eyebrow (orange, small caps) + serif heading + optional paragraph.
// `dark` flips colours for navy / photo backgrounds. `rule` adds the short
// orange rule above the eyebrow.
export default function SectionHead({ eyebrow, title, text = '', align = 'left', dark = false, rule = false }) {
  const center = align === 'center'
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {rule && <div className={`h-[3px] w-10 bg-brand-orange ${center ? 'mx-auto' : ''} mb-4`} />}
      {eyebrow && <div className="eyebrow text-brand-orange">{eyebrow}</div>}
      <h2 className={`display-lg mt-3 ${dark ? 'text-white' : 'text-brand-deep'}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${dark ? 'text-on-navy' : 'text-muted'}`}>{text}</p>}
    </div>
  )
}
