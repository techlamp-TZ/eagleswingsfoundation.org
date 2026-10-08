import { Link } from 'react-router-dom'
import Icon from '../../components/ui/Icon.jsx'
import Button from '../../components/ui/Button.jsx'
import { SITE, absoluteUrl } from '../../config/site.js'
import { useSeo } from '../../utils/useSeo.js'
import { useActiveHeading } from '../../utils/useActiveHeading.js'

// Single-variant page. Update UPDATED whenever the policy text changes.
const UPDATED = '2026-10-02'
const updatedLabel = new Date(`${UPDATED}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

const DESCRIPTION =
  "How Eagle's Wings Foundation Tanzania collects, uses and protects personal information, and how you can see, correct or delete it."

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${absoluteUrl('/privacy')}#webpage`,
      url: absoluteUrl('/privacy'),
      name: `Privacy Policy | ${SITE.name}`,
      description: DESCRIPTION,
      dateModified: UPDATED,
      inLanguage: 'en',
      isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
      publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: absoluteUrl('/privacy') },
      ],
    },
  ],
}

const glance = [
  ['hand-heart', 'We never sell personal information.'],
  ['cookie', 'No cookies or advertising trackers on this site.'],
  ['shield-check', 'Information about children and health is handled with extra care.'],
  ['user-check', 'You can ask to see, correct or delete your information.'],
]

const P = ({ children }) => <p className="mt-3 leading-7 text-muted">{children}</p>
const List = ({ items }) => (
  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted marker:text-brand-orange">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)

const linkClass = 'font-semibold text-brand-navy underline decoration-brand-orange underline-offset-4 hover:text-brand-deep'

const sections = [
  {
    id: 'who-we-are',
    title: 'Who we are and what this covers',
    body: (
      <>
        <P>
          Eagle’s Wings Foundation Tanzania (“the Foundation”, “we”, “us”) is a nonprofit initiative based in Tegeta, Dar es Salaam, Tanzania. This
          policy explains what personal information we collect through this website and when you contact us, how we use and protect it, and the
          choices you have.
        </P>
        <P>
          It applies to eagleswingsfoundation.org. We aim to handle personal information in line with the Personal Data Protection Act, 2022 of
          Tanzania and with good practice for organizations that work with children, families and older people.
        </P>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    body: (
      <>
        <P>We try to collect only what we need.</P>
        <List
          items={[
            <>
              <strong className="text-brand-deep">Information you give us.</strong> Your name, email address, phone number, message and anything else you
              choose to share when you contact us, ask about volunteering, partnerships, careers or giving, or sign up for news. This includes messages sent by
              phone, WhatsApp or Instagram.
            </>,
            <>
              <strong className="text-brand-deep">Information collected automatically.</strong> Like most websites, our web host keeps standard server logs
              (such as your IP address, browser type, the pages requested and the time) so the site can be kept secure and working.
            </>,
          ]}
        />
        <P>
          When you send a form, the message is saved securely and, where possible, emailed to our team. If we cannot email it, the form offers a
          ready-to-send WhatsApp message instead, so your message is not lost.
        </P>
        <P>
          Please do not include medical details, identity numbers or information about a child in a website message unless we have asked for it. If you
          want to discuss a person’s situation, tell us briefly and we will explain a safe way to share what is needed.
        </P>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    title: 'How we use information',
    body: (
      <>
        <List
          items={[
            'To reply to your questions and requests.',
            'To manage volunteer, partnership and job enquiries.',
            'To send news and event updates, only if you asked to receive them. You can unsubscribe at any time.',
            'To administer donations and send acknowledgments, once online giving is available.',
            'To keep the website secure and working properly.',
            'To meet legal obligations and to protect the safety of the people we support.',
          ]}
        />
        <P>
          We use information only for the purpose it was given, and we never use it for advertising. We rely on your consent, on our legitimate interest
          in running a charitable organization, or on a legal obligation.
        </P>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Sharing and service providers',
    body: (
      <>
        <P>We do not sell or rent personal information. We share it only when needed:</P>
        <List
          items={[
            'With service providers who help us run the website and communications, such as web hosting, email and, when giving is available, payment services. They may use the information only to provide their service to us.',
            'With professional advisers or public authorities when the law requires it.',
            'With partners or other organizations only when you ask us to, or have agreed.',
          ]}
        />
        <P>
          Some providers may store or process information outside Tanzania. Where this happens, we expect them to protect it appropriately. Payment details are
          handled by the payment provider and are not stored on this website.
        </P>
      </>
    ),
  },
  {
    id: 'cookies-and-links',
    title: 'Cookies, fonts and links to other sites',
    body: (
      <>
        <P>
          This website does not set cookies and does not use advertising or analytics trackers. If we add analytics in future, we will update this policy
          and ask for your consent where required.
        </P>
        <P>
          Our text uses fonts provided by Google Fonts. When a page loads, your browser connects to Google’s servers, which can receive your IP address.
          Links to WhatsApp, Instagram and other sites take you to services with their own privacy practices, which we do not control.
        </P>
      </>
    ),
  },
  {
    id: 'children-and-sensitive-information',
    title: 'Children and sensitive information',
    body: (
      <>
        <P>
          Much of our work involves children, people with disabilities and older people, and information about health or disability is sensitive. We do not
          ask for medical or diagnostic information through this website.
        </P>
        <P>
          Where we need information about a child or a person who needs support, we aim to ask the parent, guardian or representative, explain why we need it,
          and collect only what is necessary. This website is meant for adults, parents, guardians and professionals. It is not directed at children.
        </P>
      </>
    ),
  },
  {
    id: 'photos-and-stories',
    title: 'Photos, stories and testimonials',
    body: (
      <>
        <P>
          We publish photos, names, stories or testimonials only with suitable consent, after safeguarding review and with accurate context. For children, and
          for people who may not be able to decide for themselves, we seek consent from a parent, guardian or representative.
        </P>
        <P>
          You can ask us to remove or correct anything we have published about you or your family, and we will act on your request promptly.
        </P>
      </>
    ),
  },
  {
    id: 'retention-and-security',
    title: 'Retention and security',
    body: (
      <>
        <P>
          We keep personal information only for as long as it is needed for the purpose it was collected, or as the law requires. When it is no longer needed,
          we delete it or make it anonymous.
        </P>
        <P>
          We use sensible safeguards: this website is served over HTTPS, access to personal information is limited to people who need it, and we ask service
          providers to keep it secure. No online service can be completely secure, so please take care with what you share, and tell us straight away if you
          think your information has been misused.
        </P>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <P>Under applicable law, including the Personal Data Protection Act, 2022, you may have the right to:</P>
        <List
          items={[
            'ask what information we hold about you and receive a copy;',
            'ask us to correct information that is wrong or incomplete;',
            'ask us to delete information we no longer need;',
            'object to your information being used for direct marketing, for example by unsubscribing;',
            'withdraw your consent where we rely on it;',
            'object to processing that is likely to cause you harm or distress.',
          ]}
        />
        <P>We will respond as soon as we reasonably can. We may need to confirm your identity before sharing or changing information.</P>
      </>
    ),
  },
  {
    id: 'contact-and-complaints',
    title: 'Contact and complaints',
    body: (
      <>
        <P>To ask a privacy question or use any of your rights, contact us in whichever way is easiest for you:</P>
        <ul className="mt-4 divide-y divide-line border-y border-line text-sm">
          <li className="flex flex-wrap items-center justify-between gap-2 py-3">
            <span className="mono-label text-subtle">Contact form</span>
            <Link to="/contact" className={linkClass}>
              Send a message and choose “Privacy request”
            </Link>
          </li>
          {SITE.privacyEmail && (
            <li className="flex flex-wrap items-center justify-between gap-2 py-3">
              <span className="mono-label text-subtle">Email</span>
              <a href={`mailto:${SITE.privacyEmail}`} className={linkClass}>
                {SITE.privacyEmail}
              </a>
            </li>
          )}
          <li className="flex flex-wrap items-center justify-between gap-2 py-3">
            <span className="mono-label text-subtle">Phone</span>
            <a href="tel:+255749044723" className={linkClass}>
              {SITE.phone}
            </a>
          </li>
          <li className="flex flex-wrap items-center justify-between gap-2 py-3">
            <span className="mono-label text-subtle">WhatsApp</span>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className={linkClass}>
              Message us on WhatsApp
            </a>
          </li>
          <li className="flex flex-wrap items-center justify-between gap-2 py-3">
            <span className="mono-label text-subtle">Address</span>
            <span className="font-semibold text-brand-deep">Tegeta, Dar es Salaam, Tanzania</span>
          </li>
        </ul>
        <P>
          If you are not satisfied with our response, you can complain to the Personal Data Protection Commission of Tanzania, the national data protection
          authority.
        </P>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <P>
        We will update this page when our practices change, and the date at the top will show when it was last updated. If we make an important change to how we
        use personal information, we will make that clear on the website.
      </P>
    ),
  },
]

const ids = sections.map((s) => s.id)

function scrollToSection(e, id) {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `#${id}`)
}

function TocLinks({ active }) {
  return (
    <ol className="space-y-0.5">
      {sections.map((s, i) => {
        const isActive = active === s.id
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => scrollToSection(e, s.id)}
              aria-current={isActive ? 'location' : undefined}
              className={`flex gap-3 border-l-2 py-2 pl-3 pr-2 text-sm transition-colors ${
                isActive ? 'border-brand-orange font-semibold text-brand-deep' : 'border-line text-muted hover:border-brand-navy hover:text-brand-deep'
              }`}
            >
              <span className="mono-label w-5 shrink-0 pt-0.5 text-brand-orange">{String(i + 1).padStart(2, '0')}</span>
              {s.title}
            </a>
          </li>
        )
      })}
    </ol>
  )
}

export default function Privacy() {
  const active = useActiveHeading(ids)

  useSeo({ title: 'Privacy Policy', description: DESCRIPTION, path: '/privacy', jsonLd: JSON_LD })

  return (
    <>
      <section className="border-y border-line bg-sand text-brand-deep print:bg-white print:text-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <p className="hidden text-sm print:block">Eagle’s Wings Foundation Tanzania · eagleswingsfoundation.org/privacy</p>
            <div className="eyebrow text-brand-orange print:text-black">Privacy policy</div>
            <h1 className="display-lg mt-4 text-brand-deep print:text-black">Privacy Policy</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted print:text-black">
              We are committed to protecting the personal information of the families, supporters and volunteers we work with. This page explains what we collect,
              why, and how you stay in control of it.
            </p>
            <dl className="mono-label mt-6 flex flex-wrap gap-x-8 gap-y-2 text-muted print:text-black">
              <div className="flex gap-2">
                <dt>Last updated</dt>
                <dd className="text-brand-deep print:text-black">
                  <time dateTime={UPDATED}>{updatedLabel}</time>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt>Applies to</dt>
                <dd className="text-brand-deep print:text-black">eagleswingsfoundation.org</dd>
              </div>
            </dl>
            <div className="no-print mt-8 flex flex-wrap gap-3">
              <Button label="Save as PDF" icon="download" onClick={() => window.print()} />
              <Button label="Ask a privacy question" href="/contact" variant="light" />
            </div>
            <p className="no-print mt-3 text-xs text-subtle">In the print window, choose “Save as PDF” as the destination.</p>
          </div>

          <div className="no-print border border-line p-6 sm:p-8">
            <div className="mono-label text-brand-orange">At a glance</div>
            <ul className="mt-5 space-y-5">
              {glance.map(([icon, text]) => (
                <li key={text} className="flex gap-4">
                  <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                  <span className="leading-7 text-brand-deep">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:px-8">
          <aside className="lg:sticky lg:top-28 lg:h-fit print:hidden">
            <details className="border border-line bg-sand p-4 lg:hidden">
              <summary className="mono-label cursor-pointer text-brand-deep">On this page</summary>
              <nav aria-label="On this page (mobile)" className="mt-3">
                <TocLinks active={active} />
              </nav>
            </details>
            <nav aria-label="On this page" className="hidden lg:block">
              <h2 className="mono-label border-b border-brand-deep pb-3 text-brand-deep">On this page</h2>
              <div className="mt-3">
                <TocLinks active={active} />
              </div>
            </nav>
          </aside>

          <article className="max-w-4xl">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-title`}
                className="grid gap-2 border-b border-line py-9 first:pt-0 sm:grid-cols-[3.5rem_1fr] print:break-inside-avoid"
              >
                <span className="mono-label pt-2 text-brand-orange" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 id={`${s.id}-title`} className="display-md text-brand-deep">
                    {s.title}
                  </h2>
                  {s.body}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
