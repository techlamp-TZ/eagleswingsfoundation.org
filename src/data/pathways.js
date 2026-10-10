// Five clear visitor journeys, one per audience. Used by the home page
// "Start here" section and the full /get-started page.
// `to` is the primary destination (a comparison/support page when a journey
// spans several programs); `programs` are the specific pages, each linked
// individually so no journey arbitrarily points at a single program.
export const pathways = [
  {
    icon: 'house-heart',
    who: 'I am looking for support for my child or family',
    need: 'Understand a condition, communicate better and help a child or young person take part at home and in the community.',
    to: '/programs',
    programs: [
      ['Neuro-diversity Awareness', '/programs/program-neurodiversity'],
      ['Education & Therapy Guidance', '/programs/program-education-therapy'],
      ['Life Skills Programs', '/programs/program-life-skills'],
    ],
  },
  {
    icon: 'users',
    who: 'I am a caregiver looking for guidance or training',
    need: 'Gain knowledge, confidence and consistency supporting children and older people, at home or at work.',
    to: '/programs',
    programs: [
      ['Caregiver Training', '/programs/program-caregiver-training'],
      ['Elderly Care Support', '/programs/program-elderly-care'],
    ],
  },
  {
    icon: 'hand-heart',
    who: 'I want to support the Foundation financially',
    need: 'Give a donation that funds learning materials, sessions and outreach. No payment is taken online.',
    to: '/donate',
    programs: [['Donate', '/donate']],
  },
  {
    icon: 'handshake',
    who: 'I want to volunteer or partner',
    need: 'Give time, skills or a partnership, or explore how your organisation can work with us responsibly.',
    to: '/get-involved',
    programs: [
      ['Get involved', '/get-involved'],
      ['Partner with us', '/contact'],
    ],
  },
  {
    icon: 'package',
    who: 'I need therapy, sensory or learning equipment',
    need: 'Browse sensory, speech, motor and learning items with prices in TZS, and order on WhatsApp.',
    to: '/catalogue',
    programs: [['Equipment catalogue', '/catalogue']],
  },
]
