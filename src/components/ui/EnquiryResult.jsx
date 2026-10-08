import Icon from './Icon.jsx'

// Result panel shown in place of a form after submission (see useEnquiry).
// "sent": the team received it by email. "whatsapp": the message is saved and
// the visitor is handed a ready-to-send WhatsApp message as the fastest route.
export default function EnquiryResult({ status, whatsappLink, onReset, sentTitle = 'Thank you. Your message has been sent.', sentText = 'We will get back to you as soon as we can.' }) {
  return (
    <div role="status" className="border-l-4 border-brand-orange bg-sand p-6 sm:p-8">
      <Icon name="circle-check" className="h-7 w-7 text-brand-orange" />
      {status === 'sent' ? (
        <>
          <h3 className="mt-4 font-display text-2xl text-brand-deep">{sentTitle}</h3>
          <p className="mt-3 leading-7 text-muted">{sentText}</p>
        </>
      ) : (
        <>
          <h3 className="mt-4 font-display text-2xl text-brand-deep">Thank you. One more step to reach us quickly.</h3>
          <p className="mt-3 leading-7 text-muted">Your message is ready. Tap the button to send it to us on WhatsApp, which is the fastest way to get a reply.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded bg-brand-orange px-6 py-3.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-orange-dark"
          >
            <Icon name="whatsapp" className="h-4 w-4" /> Send on WhatsApp
          </a>
        </>
      )}
      <button type="button" onClick={onReset} className="mt-6 block text-sm font-semibold text-brand-navy underline underline-offset-4">
        Send another message
      </button>
    </div>
  )
}
