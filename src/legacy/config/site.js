export const SITE = {
  url: 'https://eagleswingsfoundation.org',
  name: "Eagle's Wings Foundation Tanzania",
  shortName: "Eagle's Wings",
  logo: '/eagles-wings-foundation-logo.png',
  phone: '+255 749 044 723',
  whatsapp: 'https://wa.me/255749044723',
  instagram: 'https://instagram.com/eaglewings.tz',
  // Public contact mailbox. The Privacy and Contact pages and the footer show it
  // (and form messages are emailed to it by public/contact.php, see its header).
  email: 'info@eagleswingsfoundation.org',
  privacyEmail: 'info@eagleswingsfoundation.org',
}

export const absoluteUrl = (path = '/') => `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
