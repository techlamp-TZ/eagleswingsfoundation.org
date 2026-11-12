import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import EnquiryResult from '../../components/ui/EnquiryResult.jsx'
import { photos } from '../../data/photos.js'
import { volunteerRoles } from '../../data/volunteerRoles.js'
import { SITE } from '../../config/site.js'
import { useEnquiry } from '../../utils/useEnquiry.js'

// Volunteer page: the eight roles, the interest form, the intake standards
// and what happens after the form is sent. Role names and descriptions come
// from data/volunteerRoles.js. No volunteer testimonials are shown because
// none have been collected.

const roleEntries = Object.entries(volunteerRoles)

const promises = [
  ['shield-check', 'Safeguarding first', 'People’s safety and wellbeing come first.'],
  ['users-round', 'Clear roles and supervision', 'You will know who you report to.'],
  ['calendar-days', 'Flexible ways to contribute', 'Weekdays, weekends, events or remote.'],
]

const formSteps = [
  ['Submit your interest', 'Tell us about your skills, experience and availability.'],
  ['Review and conversation', 'Our team gets in touch to discuss suitable opportunities.'],
  ['Orientation and placement', 'Complete safeguarding and orientation steps before volunteering begins.'],
]

const trustItems = [
  ['shield-check', 'Safeguarding first', 'Volunteer placement must respect safeguarding and role boundaries.'],
  ['users-round', 'Dignity & inclusion', 'Every interaction should protect dignity, choice and respectful participation.'],
  ['file-check', 'Consent-aware work', 'Names, images and personal stories require appropriate approval before use.'],
  ['messages-square', 'Clear supervision', 'Volunteers should know who they report to and what is expected before starting.'],
  ['clock-3', 'Reliable commitment', 'Availability and responsibilities should be agreed realistically.'],
]

const nextSteps = [
  ['Interest received', 'Your enquiry reaches the team by email or WhatsApp.'],
  ['Review and conversation', 'The team reviews your information and may get in touch for a short conversation.'],
  ['Orientation and safeguarding', 'Complete the relevant orientation and safeguarding steps before volunteering begins.'],
  ['Suitable placement', 'If there is a match, we agree the role, expectations and start date.'],
]

const wrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
const eyebrow = 'text-xs font-bold uppercase tracking-[0.14em] text-brand-orange-ink'
const lbl = 'text-sm font-semibold text-brand-deep'

function Req() {
  return (
    <span className="text-brand-orange-ink" aria-hidden="true">
      {' '}
      *
    </span>
  )
}

function Num({ n }) {
  return (
    <span className="tabular grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-orange text-sm font-bold text-brand-deep" aria-hidden="true">
      {String(n).padStart(2, '0')}
    </span>
  )
}

export default function GetInvolvedV2() {
  const { status, whatsappLink, submit, reset, done } = useEnquiry({
    form: 'volunteer',
    subject: 'Volunteer interest',
    intro: 'I would like to volunteer.',
  })

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-sand-warm">
        <div className="mx-auto grid max-w-[96rem] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:py-16 lg:pl-8 lg:pr-12 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <p className={eyebrow}>Join the mission</p>
            <h1 className="display-xl mt-3 max-w-[22ch] text-brand-deep">Your time and skills can make a meaningful difference.</h1>
            <p className="mt-5 max-w-[30rem] text-lg leading-8 text-muted">Volunteer alongside our team to support learning, wellbeing and stronger communities in Tegeta.</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button label="Explore volunteer roles" href="#roles" />
              <a href="#next" className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand-deep hover:text-brand-navy">
                How volunteering works <Icon name="arrow-right" className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative min-h-[260px] lg:min-h-[400px]">
            <img
              src={photos.people}
              alt="Volunteers and community members together"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
            />
            <div aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-1/4 lg:block" style={{ background: 'linear-gradient(to right, var(--color-sand-warm), transparent)' }} />
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="bg-[#e6f1fb]">
        <ul className={`${wrap} grid divide-y divide-[#c9dcee] py-2 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-6`}>
          {promises.map(([icon, title, text]) => (
            <li key={title} className="flex items-center gap-4 py-4 md:px-8 md:py-1 md:first:pl-0 md:last:pr-0">
              <Icon name={icon} className="h-8 w-8 shrink-0 text-brand-navy" />
              <div>
                <h2 className="font-display text-[1.0625rem] text-brand-deep">{title}</h2>
                <p className="text-[0.9375rem] leading-6 text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Roles */}
      <section id="roles" className="scroll-mt-28 bg-paper py-12 md:py-16">
        <div className={wrap}>
          <p className={eyebrow}>Explore opportunities</p>
          <h2 className="display-lg mt-2 text-brand-deep">Find where you can contribute.</h2>
          <p className="mt-3 max-w-[60ch] text-[1.0625rem] leading-8 text-muted">There are eight volunteer roles. Choose an area that matches your interests and skills.</p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roleEntries.map(([id, role]) => (
              <li key={id}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded border border-line bg-surface transition-colors hover:border-brand-navy">
                  <div className="relative h-40 bg-sand">
                    <img src={role.thumb} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[center_30%]" />
                  </div>
                  <span className="relative -mt-6 ml-5 grid h-12 w-12 place-items-center rounded-full border-4 border-surface bg-[#fde3c0] text-brand-orange-ink" aria-hidden="true">
                    <Icon name={role.icon} className="h-5 w-5" />
                  </span>
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
                    <h3 className="font-display text-lg text-brand-deep">
                      <Link to={`/volunteers/${id}`} className="after:absolute after:inset-0 after:content-[''] group-hover:text-brand-navy">
                        {role.title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-[0.9375rem] leading-6 text-muted">{role.intro}</p>
                    <span className="mt-3 self-start rounded bg-[#eef3f9] px-2.5 py-1 text-xs font-medium text-brand-deep">{role.tag}</span>
                    <span className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-deep">
                      View role <Icon name="arrow-right" className="h-4 w-4 text-brand-orange-ink" />
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form */}
      <section id="volunteer" className="scroll-mt-28 bg-sand-warm py-12 md:py-16">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-14`}>
          <div>
            <p className={eyebrow}>Apply to volunteer</p>
            <h2 className="display-lg mt-2 max-w-[16ch] text-brand-deep">Tell us how you would like to help.</h2>
            <p className="mt-4 max-w-[44ch] text-[1.0625rem] leading-8 text-muted">
              Complete this short form. The team reviews every enquiry and replies about roles that fit current needs.
            </p>
            <ol className="mt-7 space-y-6">
              {formSteps.map(([title, text], i) => (
                <li key={title} className="flex gap-4">
                  <Num n={i + 1} />
                  <div>
                    <h3 className="font-display text-[1.0625rem] text-brand-deep">{title}</h3>
                    <p className="mt-1 max-w-[38ch] text-[0.9375rem] leading-6 text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex gap-4 border-t border-line-strong pt-6">
              <Icon name="mail" className="mt-0.5 h-6 w-6 shrink-0 text-brand-orange-ink" />
              <div>
                <h3 className="font-display text-[1.0625rem] text-brand-deep">Have a question?</h3>
                <p className="mt-1 text-[0.9375rem] leading-7 text-muted">
                  You can also reach us at{' '}
                  <a href={`mailto:${SITE.email}`} className="font-semibold text-brand-navy underline underline-offset-2 [overflow-wrap:anywhere]">
                    {SITE.email}
                  </a>{' '}
                  or{' '}
                  <a href="tel:+255749044723" className="whitespace-nowrap font-semibold text-brand-navy underline underline-offset-2">
                    +255 749 044 723
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="rounded border border-line bg-surface p-5 sm:p-8">
            {done ? (
              <EnquiryResult
                status={status}
                whatsappLink={whatsappLink}
                onReset={reset}
                sentTitle="Thank you for offering to help."
                sentText="The team will review your enquiry and reply about roles that fit current needs."
              />
            ) : (
              <form onSubmit={submit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block md:col-span-2">
                    <span className={lbl}>
                      Full name
                      <Req />
                    </span>
                    <input required name="fullName" autoComplete="name" className="field mt-2" placeholder="Your full name…" />
                  </label>
                  <label className="block">
                    <span className={lbl}>
                      Email address
                      <Req />
                    </span>
                    <input type="email" required name="email" autoComplete="email" spellCheck={false} className="field mt-2" placeholder="you@example.com" />
                  </label>
                  <label className="block">
                    <span className={lbl}>Phone / WhatsApp</span>
                    <input type="tel" name="phone" autoComplete="tel" className="field mt-2" placeholder="+255 712 345 678" />
                  </label>
                  <label className="block">
                    <span className={lbl}>City / region</span>
                    <input name="city" autoComplete="address-level2" className="field mt-2" placeholder="e.g. Dar es Salaam" />
                  </label>
                  <label className="block">
                    <span className={lbl}>Occupation or skill area</span>
                    <input name="occupation" autoComplete="organization-title" className="field mt-2" placeholder="Your occupation or main skill…" />
                  </label>
                  <label className="block">
                    <span className={lbl}>Preferred role</span>
                    <select name="role" className="field mt-2">
                      <option value="">Choose a role</option>
                      {roleEntries.map(([id, role]) => (
                        <option key={id}>{role.title}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className={lbl}>Availability</span>
                    <select name="availability" className="field mt-2">
                      <option value="">Choose availability</option>
                      <option>Weekdays</option>
                      <option>Weekends</option>
                      <option>Occasional events</option>
                      <option>Remote / flexible</option>
                    </select>
                  </label>
                  <label className="block md:col-span-2">
                    <span className={lbl}>How would you like to help?</span>
                    <textarea
                      name="message"
                      autoComplete="off"
                      className="field mt-2 min-h-32 resize-y"
                      placeholder="Tell us about your interests, relevant experience, skills or the type of contribution you would like to make…"
                    ></textarea>
                  </label>
                </div>

                <div className="mt-5 grid gap-3">
                  <label className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <input required name="consentContact" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-brand-navy" />
                    <span>
                      I understand that submitting this form does not guarantee placement. Roles depend on current needs, suitability, supervision capacity
                      and safeguarding requirements.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <input required name="consentSafeguarding" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-brand-navy" />
                    <span>I agree that the Foundation may contact me about this volunteer enquiry.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-6 inline-flex min-h-12 items-center gap-2 rounded bg-brand-orange px-6 text-[0.9375rem] font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending…' : 'Send my volunteer interest'} <Icon name="arrow-right" className="h-4 w-4" />
                </button>
                <p className="mt-4 text-sm leading-6 text-muted">
                  We do not ask for date of birth, ID numbers or other sensitive information here. If a role needs more, we will explain why and collect it
                  securely.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-paper py-12 md:py-16">
        <div className={wrap}>
          <p className={eyebrow}>Our volunteer standards</p>
          <h2 className="display-lg mt-2 text-brand-deep">Trust is built before service begins.</h2>
          <p className="mt-3 text-[1.0625rem] leading-8 text-muted">The standards Eagle’s Wings applies to volunteer intake.</p>
          <ul className="mt-8 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-line">
            {trustItems.map(([icon, title, text]) => (
              <li key={title} className="sm:pr-6 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <Icon name={icon} className="h-8 w-8 text-brand-orange-ink" />
                <h3 className="mt-4 font-display text-[1.0625rem] text-brand-deep">{title}</h3>
                <p className="mt-1 text-[0.9375rem] leading-6 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What happens next */}
      <section id="next" className="scroll-mt-28 bg-[#e6f1fb] py-12 md:py-16">
        <div className={wrap}>
          <p className={eyebrow}>What happens next</p>
          <h2 className="display-lg mt-2 text-brand-deep">From interest to impact.</h2>
          <p className="mt-3 text-[1.0625rem] leading-8 text-muted">The steps from your enquiry to a placement.</p>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {nextSteps.map(([title, text], i) => (
              <li key={title} className="relative flex gap-4">
                <Num n={i + 1} />
                <div className="lg:pr-6">
                  <h3 className="flex min-h-10 items-center font-display text-[1.0625rem] leading-snug text-brand-deep">{title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-6 text-muted">{text}</p>
                </div>
                {i < nextSteps.length - 1 && <Icon name="arrow-right" className="absolute right-0 top-2.5 hidden h-5 w-5 text-brand-navy lg:block" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Approach: the Foundation's own statement, not a volunteer quote */}
      <section className="bg-sand-warm">
        <div className="mx-auto grid max-w-[96rem] lg:grid-cols-2">
          <div className="relative min-h-[240px] lg:min-h-[300px]">
            <img src={photos.hero} alt="Foundation staff, young people and visitors gathered in the classroom" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[center_12%]" />
          </div>
          <div className="flex flex-col justify-center px-4 py-10 sm:px-6 lg:px-14 lg:py-12">
            <p className={eyebrow}>Volunteer with purpose</p>
            <p className="mt-3 max-w-[30ch] font-display text-2xl leading-snug text-brand-deep md:text-[1.75rem]">Bring your skills where they can be used responsibly.</p>
            <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-8 text-muted">
              Good volunteering is not only about willingness. It also requires role clarity, consent, safeguarding, reliability and support from the
              organization.
            </p>
            <div aria-hidden="true" className="mt-5 h-[3px] w-10 bg-brand-orange" />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="-mb-20 bg-paper">
        <div className={`${wrap} flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="flex items-center gap-5">
            <span className="hidden h-16 w-16 shrink-0 place-items-center rounded-full bg-[#fde3c0] text-brand-orange-ink sm:grid" aria-hidden="true">
              <Icon name="hand-heart" className="h-7 w-7" />
            </span>
            <div>
              <p className={eyebrow}>Get involved</p>
              <h2 className="display-md mt-1 text-brand-deep">Ready to contribute with purpose?</h2>
              <p className="mt-1 text-[0.9375rem] leading-7 text-muted">Join people supporting learning, wellbeing and stronger communities in Tegeta.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button label="Explore volunteer roles" href="/volunteers" />
            <Button label="Ask a question" href="/contact" variant="outline" />
          </div>
        </div>
      </section>
    </>
  )
}
