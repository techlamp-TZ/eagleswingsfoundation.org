import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { photos } from '../../data/photos.js'
import EnquiryResult from '../../components/ui/EnquiryResult.jsx'
import { useEnquiry } from '../../utils/useEnquiry.js'

const roleOptions = [
  'Community Outreach',
  'Program Support',
  'Family & Caregiver Support',
  'Events Volunteer',
  'Communications',
  'Fundraising Support',
  'Administration',
  'Professional Expertise',
]

const trustItems = [
  ['shield-check', 'Safeguarding first', 'Volunteer placement must respect safeguarding and role boundaries.'],
  ['heart-handshake', 'Dignity & inclusion', 'Every interaction should protect dignity, choice and respectful participation.'],
  ['badge-check', 'Consent-aware work', 'Names, images and personal stories require appropriate approval before use.'],
  ['messages-square', 'Clear supervision', 'Volunteers should know who they report to and what is expected before starting.'],
  ['clock-3', 'Reliable commitment', 'Availability and responsibilities should be agreed realistically.'],
]

const visualTags = ['Programs', 'Outreach', 'Events', 'Skills']

const lbl = 'mono-label text-muted'

export default function GetInvolvedV2() {
  const { status, whatsappLink, submit, reset, done } = useEnquiry({
    form: 'volunteer',
    subject: 'Volunteer interest',
    intro: 'I would like to volunteer.',
  })
  return (
    <>
      <section className="bg-sand-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mono-label flex items-center gap-2 text-brand-navy">
            <span className="text-lg leading-none text-brand-orange">+</span> Join the mission
          </div>
          <h1 className="display-xl mt-5 max-w-3xl text-brand-deep">Become a Volunteer</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            <Link to="/" className="underline underline-offset-2">Home</Link> · Become a Volunteer
          </p>
        </div>
      </section>

      <section id="volunteer" className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="Enroll in our mission"
                title="Become a volunteer and join our community."
                text="Tell us how you would like to contribute. The team reviews every enquiry and replies about roles that fit current needs."
              />
              {done ? (
                <div className="mt-10">
                  <EnquiryResult
                    status={status}
                    whatsappLink={whatsappLink}
                    onReset={reset}
                    sentTitle="Thank you for offering to help."
                    sentText="The team will review your enquiry and reply about roles that fit current needs."
                  />
                </div>
              ) : (
              <form className="mt-10" onSubmit={submit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block md:col-span-2">
                    <span className={lbl}>Full name</span>
                    <input required name="fullName" autoComplete="name" className="field mt-2" placeholder="Your full name…" />
                  </label>
                  <label className="block">
                    <span className={lbl}>Email address</span>
                    <input type="email" required name="email" autoComplete="email" spellCheck={false} className="field mt-2" placeholder="you@example.com" />
                  </label>
                  <label className="block">
                    <span className={lbl}>Phone / WhatsApp</span>
                    <input type="tel" name="phone" autoComplete="tel" className="field mt-2" placeholder="+255 712 345 678" />
                  </label>
                  <label className="block">
                    <span className={lbl}>Occupation / skill area</span>
                    <input name="occupation" autoComplete="organization-title" className="field mt-2" placeholder="Your occupation or main skill…" />
                  </label>
                  <label className="block">
                    <span className={lbl}>City / region</span>
                    <input name="city" autoComplete="address-level2" className="field mt-2" placeholder="e.g. Dar es Salaam" />
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
                  <label className="block">
                    <span className={lbl}>Preferred role</span>
                    <select name="role" className="field mt-2">
                      <option value="">Choose a role</option>
                      {roleOptions.map((x) => (
                        <option key={x}>{x}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block md:col-span-2">
                    <span className={lbl}>How would you like to help?</span>
                    <textarea name="message" autoComplete="off" className="field mt-2 min-h-36 resize-y" placeholder="Tell us about your interests, relevant experience, skills or the type of contribution you would like to make…"></textarea>
                  </label>
                </div>

                <div className="mt-6 grid gap-4 border-t border-line pt-6">
                  <label className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <input required name="consentContact" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-brand-navy" />
                    <span>I understand that submitting an interest form does not guarantee placement. Roles depend on current needs, suitability, supervision capacity and safeguarding requirements.</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <input required name="consentSafeguarding" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-brand-navy" />
                    <span>I agree that the Foundation may contact me about this volunteer enquiry.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-7 inline-flex items-center gap-2 rounded bg-brand-orange px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending…' : 'Send my volunteer interest'} <Icon name="arrow-right" className="h-4 w-4" />
                </button>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">We do not ask for date of birth, ID numbers or other sensitive information here. If a role needs more, we will explain why and collect it securely.</p>
              </form>
              )}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <img src={photos.people} className="h-72 w-full rounded object-cover sm:h-96" alt="Volunteers and community members together" />
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
                {visualTags.map((x) => (
                  <span key={x} className="mono-label text-brand-navy">{x}</span>
                ))}
              </div>
              <div className="mt-6 border-t border-line pt-6">
                <div className="eyebrow text-brand-orange">Volunteer with purpose</div>
                <h2 className="display-md mt-3 text-brand-deep">Bring your skills where they can be used responsibly.</h2>
                <p className="mt-4 leading-7 text-muted">Good volunteering is not only about willingness. It also requires role clarity, consent, safeguarding, reliability and support from the organization.</p>
                <div className="mt-6">
                  <Button label="Explore volunteer roles" href="/volunteers" variant="outline" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Volunteer standards" title="Trust is built before service begins." text="The standards Eagle's Wings applies to volunteer intake." />
          <div className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {trustItems.map(([i, t, d]) => (
              <article key={t} className="border-b border-line py-7 sm:pr-6">
                <Icon name={i} className="w-5 h-5 text-brand-orange" />
                <h3 className="display-sm mt-4 text-brand-deep">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line relative bg-sand text-brand-deep">
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="eyebrow text-brand-orange">What happens next</div>
            <h2 className="display-lg mt-4 text-brand-deep">Interest → review → orientation → placement.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">Once a secure intake process is active, Eagle's Wings can review your interest, discuss fit, complete relevant safeguarding or orientation steps, and agree a role before volunteering begins.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Meet volunteer roles" href="/volunteers" />
              <Button label="Ask a question" href="/contact" variant="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
