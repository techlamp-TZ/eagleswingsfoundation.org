import { photos } from './photos.js'
import { programRouteIds } from './programDetails.js'

export const eventDetails = {
  'event-neurodiversity-awareness': {
    title: 'Neuro-diversity Awareness Session',
    tag: 'Awareness',
    icon: 'brain',
    img: photos.child, thumb: photos.childSmile,
    program: 'program-neurodiversity',
    intro: 'A planned public-learning session focused on Autism, ADHD, Down syndrome, intellectual disability and practical inclusion.',
    summary: 'This event format is designed to help families, caregivers, educators and community members build a clearer and more respectful understanding of neuro-diversity. The session will connect awareness with practical inclusion rather than labels alone.',
    highlights: ['Respectful language and practical inclusion', 'Family and community participation', 'Clear referral boundaries for clinical questions'],
    agenda: ['Welcome and purpose of the session', 'Accessible learning around neuro-diversity', 'Practical inclusion examples and discussion', 'Questions, resources and next steps'],
  },
  'event-caregiver-workshop': {
    title: 'Family & Caregiver Learning Workshop',
    tag: 'Caregiving',
    icon: 'users-round',
    img: photos.family, thumb: photos.lifeGardening,
    program: 'program-caregiver-training',
    intro: 'A practical learning format for families and caregivers supporting children and older people in everyday settings.',
    summary: 'The workshop format focuses on communication, consistent routines, dignity, observation and responsible support boundaries. It is intended to help families and caregivers translate learning into day-to-day practice.',
    highlights: ['Practical caregiver routines', 'Respectful communication', 'Professional escalation when needed'],
    agenda: ['Understanding support needs', 'Communication and daily-care practice', 'Observation, documentation and consistency', 'Questions and follow-up resources'],
  },
  'event-healthy-ageing': {
    title: 'Healthy Ageing Community Session',
    tag: 'Healthy ageing',
    icon: 'heart-pulse',
    img: photos.care, thumb: photos.care,
    program: 'program-elderly-care',
    intro: 'A planned community session around nutrition, safe movement, mental stimulation and dignified support for older people.',
    summary: 'This event format helps families and caregivers think about healthy daily routines for older people, including those facing age-related memory or cognitive challenges. It is educational and does not replace medical assessment.',
    highlights: ['Nutrition and healthy routines', 'Safe movement and engagement', 'Dignified family support'],
    agenda: ['Healthy-ageing priorities', 'Nutrition and movement discussion', 'Mental stimulation and meaningful routines', 'When to seek professional advice'],
  },
  'event-life-skills': {
    title: 'Life Skills Practice Day',
    tag: 'Life skills',
    icon: 'sparkles',
    img: photos.learning, thumb: photos.lifeLaundryLine,
    program: 'program-life-skills',
    intro: 'A practical learning format centred on communication, everyday routines, confidence and growing independence for autistic young people.',
    summary: 'This format breaks useful everyday skills into manageable steps and creates space for guided practice. Families and caregivers are part of the learning approach so useful routines can continue beyond the session.',
    highlights: ['Step-by-step practical learning', 'Confidence and participation', 'Family reinforcement of routines'],
    agenda: ['Choose meaningful everyday skills', 'Break routines into achievable steps', 'Guided practice and supportive feedback', 'Planning for continued practice at home'],
  },
  'event-family-guidance': {
    title: 'Education & Therapy Guidance Session',
    tag: 'Family guidance',
    icon: 'book-heart',
    img: photos.people, thumb: photos.hydrotherapyPool,
    program: 'program-education-therapy',
    intro: 'A family-learning format for understanding neurological conditions, therapy guidance and specialized parenting approaches.',
    summary: 'This event format translates complex information into accessible learning for families and caregivers. Guidance is educational and general; individualized diagnosis, treatment and therapy planning remain with qualified professionals.',
    highlights: ['Accessible family education', 'Practical home-support ideas', 'Responsible professional referral'],
    agenda: ['Identify common family learning needs', 'Explain key concepts clearly', 'Discuss practical home-support routines', 'Professional referral and next steps'],
  },
  'event-community-inclusion': {
    title: 'Community Inclusion Outreach',
    tag: 'Outreach',
    icon: 'megaphone',
    img: photos.child, thumb: photos.playBasketball,
    program: 'program-neurodiversity',
    intro: 'A community-engagement format designed to reduce stigma, share respectful information and connect people to appropriate support.',
    summary: 'Outreach activities create opportunities to talk openly about disability, neuro-diversity, ageing and inclusion in ways that are practical, respectful and relevant to everyday community life.',
    highlights: ['Community-centred awareness', 'Stigma reduction and respectful language', 'Connections to appropriate support'],
    agenda: ['Community welcome and listening', 'Focused awareness discussion', 'Practical inclusion actions', 'Resources, referrals and follow-up'],
  },
  'event-volunteer-orientation': {
    title: 'Volunteer Orientation & Service Day',
    tag: 'Volunteer',
    icon: 'hand-heart',
    img: photos.people, thumb: photos.joyPortrait,
    program: 'get-involved',
    intro: 'An orientation format for supporters who want to contribute time, practical help, communication or event support responsibly.',
    summary: 'The orientation introduces volunteers to the Foundation’s mission, safeguarding expectations, practical roles and boundaries. It is designed to help people contribute effectively without overstepping professional or privacy responsibilities.',
    highlights: ['Clear volunteer roles', 'Safeguarding and privacy awareness', 'Responsible service boundaries'],
    agenda: ['Foundation mission and programs', 'Volunteer roles and expectations', 'Safeguarding, privacy and conduct', 'Role matching and next steps'],
  },
  'event-partners-briefing': {
    title: 'Partners & Supporters Briefing',
    tag: 'Partnership',
    icon: 'handshake',
    img: photos.family, thumb: photos.people,
    program: 'partners',
    intro: 'A planned briefing format for organizations and supporters interested in partnerships, sponsorship and responsible program growth.',
    summary: 'This briefing format gives prospective partners a clear view of the Foundation’s program areas, governance approach, current stage of growth and the kinds of support that can be explored responsibly.',
    highlights: ['Program and governance overview', 'Responsible partnership pathways', 'Clear next-step discussions'],
    agenda: ['Foundation overview', 'Program priorities and current stage', 'Ways organizations can contribute', 'Due diligence and next steps'],
  },
}

export const eventRouteIds = Object.keys(eventDetails)

// See the matching comment in programDetails.js — variant components only receive
// the resolved `item`, so stamp the route id onto each entry here.
eventRouteIds.forEach((id) => {
  eventDetails[id].id = id
})

export function programLinkFor(programId) {
  return programRouteIds.includes(programId) ? `/programs/${programId}` : `/${programId}`
}
