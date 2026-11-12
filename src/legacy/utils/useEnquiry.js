import { useRef, useState } from 'react'
import { SITE } from '../config/site.js'

const HIDDEN = new Set(['form', 'started', 'company_website', 'consent'])
const label = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())

// Shared submit logic for every form on the site. Posts to /contact.php (see
// public/contact.php). If the server cannot email the team yet, or the request
// fails, the visitor gets the same message ready to send on WhatsApp, so no
// enquiry is ever lost and no form ever pretends to have sent something it did not.
//
//   const { status, whatsappLink, submit, reset } = useEnquiry({ form: 'volunteer', intro: 'I would like to volunteer.' })
//   <form onSubmit={submit}> … </form>
export function useEnquiry({ form, subject = '', intro = '' }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | whatsapp
  const [whatsappLink, setWhatsappLink] = useState('')
  const startedAt = useRef(Date.now())

  const submit = async (e) => {
    e.preventDefault()
    const formEl = e.currentTarget
    const data = new FormData(formEl)

    // Consent checkboxes are validated by the browser (required); tell the server once.
    const consentKeys = [...data.keys()].filter((k) => k.startsWith('consent'))
    consentKeys.forEach((k) => data.delete(k))
    if (consentKeys.length) data.set('consent', 'yes')
    data.set('form', form)
    data.set('started', String(startedAt.current))
    if (subject && !data.get('subject')) data.set('subject', subject)
    setStatus('sending')

    const lines = [`Hello ${SITE.shortName} Foundation,`, intro, '']
    let message = ''
    for (const [key, value] of data.entries()) {
      if (HIDDEN.has(key) || typeof value !== 'string' || !value.trim()) continue
      if (key === 'message') message = value.trim()
      else lines.push(`${label(key)}: ${value.trim()}`)
    }
    if (message) lines.push('', message)
    setWhatsappLink(`${SITE.whatsapp}?text=${encodeURIComponent(lines.filter((l, i) => l !== '' || i > 0).join('\n'))}`)

    try {
      const res = await fetch('/contact.php', { method: 'POST', body: data })
      const json = await res.json()
      if (!json.ok) throw new Error(json.error || 'failed')
      formEl.reset()
      setStatus(json.delivered ? 'sent' : 'whatsapp')
    } catch {
      setStatus('whatsapp')
    }
  }

  return { status, whatsappLink, submit, reset: () => setStatus('idle'), done: status === 'sent' || status === 'whatsapp' }
}
