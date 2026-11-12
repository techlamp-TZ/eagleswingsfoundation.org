import { photos } from './photos.js'

export const programDetails = {
  'program-neurodiversity': {
    title: 'Neuro-diversity Awareness',
    tag: 'Awareness',
    icon: 'brain',
    hero: photos.child,
    intro: 'Building understanding around Autism, ADHD, Down syndrome and intellectual disability through respectful, practical community education.',
    summary: 'This program is designed to help families, caregivers and communities better understand neuro-diversity. The emphasis is on respectful language, practical inclusion and reducing stigma through useful information rather than labels alone.',
    approach: 'We connect awareness with everyday action: understanding different needs, improving communication, supporting participation and helping families identify practical next steps.',
    process: ['Share clear, respectful awareness information.', 'Connect learning to family and community situations.', 'Encourage practical inclusion and supportive communication.', 'Refer complex or clinical questions to appropriate professionals.'],
    checks: ['Respectful, person-centred information', 'Family and caregiver participation', 'Practical inclusion in everyday settings'],
    gallery: [photos.childSmile, photos.joyPortrait, photos.classroomTeaching, photos.family],
  },
  'program-elderly-care': {
    title: 'Elderly Care Support',
    tag: 'Care',
    icon: 'heart-pulse',
    hero: photos.care,
    intro: 'Practical guidance around nutrition, movement and mental stimulation for older people and the families who support them.',
    summary: 'The elderly care program focuses on helping families and caregivers think about day-to-day wellbeing in a practical and dignified way. It is especially relevant to older people facing memory, cognitive or age-related challenges.',
    approach: 'The program brings together healthy routines, family support and caregiver learning. It is educational and supportive; diagnosis and treatment remain the responsibility of qualified health professionals.',
    process: ['Understand the person’s daily support needs.', 'Promote safe movement, nutrition and engagement.', 'Equip caregivers with practical routines and communication approaches.', 'Encourage professional referral when medical assessment is needed.'],
    checks: ['Dignified, person-centred support', 'Family and caregiver guidance', 'Healthy routines and mental stimulation'],
    gallery: [photos.care, photos.people, photos.family, photos.learning],
  },
  'program-education-therapy': {
    title: 'Education & Therapy Guidance',
    tag: 'Education',
    icon: 'book-heart',
    hero: photos.family,
    intro: 'Practical education on neurological conditions, therapy exercises and specialized parenting for families and caregivers.',
    summary: 'This program helps translate complex information into practical learning that families can understand and discuss. Content can include general therapy guidance, parenting approaches and education around neurological conditions.',
    approach: 'Guidance is framed as supportive education, not a substitute for individualized clinical assessment. Families are encouraged to work with qualified professionals for diagnosis, therapy plans and medical decisions.',
    process: ['Identify the family’s learning need.', 'Explain concepts in clear, accessible language.', 'Demonstrate practical home-support ideas where appropriate.', 'Encourage professional follow-up for individualized care.'],
    checks: ['Clear and accessible education', 'Practical family guidance', 'Professional referral when needed'],
    gallery: [photos.hydrotherapyPool, photos.exerciseBike, photos.learningWriting, photos.child],
  },
  'program-life-skills': {
    title: 'Life Skills Programs',
    tag: 'Skills',
    icon: 'sparkles',
    hero: photos.learning,
    intro: 'Structured life-skills support for children with autism, particularly young people aged 12 and above.',
    summary: 'Life-skills learning focuses on the practical routines that support participation and growing independence. Activities can be organized around communication, self-care, everyday routines and confidence-building practice.',
    approach: 'Skills are broken into manageable steps and practised consistently. Families and caregivers are part of the learning process so that practice can continue beyond a single session.',
    process: ['Choose a practical skill that matters in daily life.', 'Break the skill into clear, achievable steps.', 'Practise consistently with supportive feedback.', 'Review progress and adapt the routine to the learner’s needs.'],
    checks: ['Step-by-step practical learning', 'Family and caregiver reinforcement', 'Confidence and participation'],
    gallery: [photos.lifeLaundry, photos.lifeMopping, photos.lifeGardening, photos.galleryExtra1],
  },
  'program-caregiver-training': {
    title: 'Caregiver Training',
    tag: 'Training',
    icon: 'users',
    hero: photos.people,
    intro: 'Helping caregivers build the knowledge and confidence to support children and older people professionally and consistently.',
    summary: 'Caregiver training brings together communication, practical routines, dignity, observation and family engagement. The aim is to strengthen the quality and consistency of everyday support.',
    approach: 'Training is designed around practical scenarios and responsible boundaries. Caregivers learn what they can support directly, what should be documented, and when a concern needs professional escalation.',
    process: ['Build a shared understanding of the person’s support needs.', 'Practise respectful communication and daily-care routines.', 'Use observation and documentation to support consistency.', 'Escalate medical, safeguarding or specialist concerns appropriately.'],
    checks: ['Respectful communication', 'Consistent practical routines', 'Clear professional boundaries'],
    gallery: [photos.lifeGardening, photos.classroomTeaching, photos.lifeWheelchairCare, photos.family],
  },
}

export const programRouteIds = Object.keys(programDetails)

// The variant components only receive the resolved `item` (not the route id) from
// createVariantDetailPage, but they need their own id to highlight themselves in
// the sidebar and exclude themselves from "related programs" lists — so stamp it
// onto each entry here rather than have every variant re-derive it.
programRouteIds.forEach((id) => {
  programDetails[id].id = id
})

// Who each program is for, what it offers and what support it needs.
// Optional once confirmed: where: 'Venue and days', fee: 'Free' / 'TZS …'.
export const programMeta = {
  'program-neurodiversity': {
    // Optional per program once confirmed: where: 'Venue and days', fee: 'Free' / 'TZS …'.
    audience: 'Families, caregivers, schools & communities',
    delivery: 'Awareness sessions, practical education & referral guidance',
    support: ['Community learning materials', 'Venue and outreach support', 'Accessible awareness resources', 'Professional review of educational content'],
    question: 'How can communities make inclusion more practical?',
    tips: ['Use respectful, person-centred language and avoid reducing people to a diagnosis.', 'Turn awareness into practical adjustments in communication, routines and participation.'],
  },
  'program-elderly-care': {
    audience: 'Older people, families & caregivers',
    delivery: 'Healthy-ageing education, caregiver guidance & practical routines',
    support: ['Healthy-ageing learning materials', 'Caregiver learning sessions', 'Community activity resources', 'Professional referral and education links'],
    question: 'How can families support healthy ageing with dignity?',
    tips: ['Build simple routines around nutrition, safe movement and meaningful engagement.', 'Use professional assessment when medical, cognitive or safeguarding concerns need specialist review.'],
  },
  'program-education-therapy': {
    audience: 'Parents, families & caregivers',
    delivery: 'Accessible education, therapy guidance & specialized-parenting support',
    support: ['Family learning resources', 'Demonstration and facilitation materials', 'Accessible educational content', 'Professional content review and referral links'],
    question: 'How can families turn complex guidance into everyday support?',
    tips: ['Break guidance into clear, realistic steps that families can understand and repeat.', 'Keep educational guidance separate from diagnosis and individualized clinical treatment.'],
  },
  'program-life-skills': {
    audience: 'Autistic young people, families & caregivers',
    delivery: 'Structured practice, repeatable routines & family reinforcement',
    support: ['Life-skills activity resources', 'Facilitation and learning materials', 'Accessible practice tools', 'Family reinforcement resources'],
    question: 'How can practical skills become repeatable everyday routines?',
    tips: ['Choose skills that matter in daily life and break them into achievable steps.', 'Practise consistently with supportive feedback and adapt the routine to the learner.'],
  },
  'program-caregiver-training': {
    audience: 'Family, volunteer & professional caregivers',
    delivery: 'Scenario-based learning, practical routines & responsible escalation',
    support: ['Training materials and facilitation', 'Scenario and case-based learning resources', 'Documentation and observation tools', 'Professional safeguarding and referral guidance'],
    question: 'What helps caregivers provide more consistent support?',
    tips: ['Build shared routines around respectful communication, observation and documentation.', 'Keep clear boundaries for medical, specialist and safeguarding escalation.'],
  },
}
