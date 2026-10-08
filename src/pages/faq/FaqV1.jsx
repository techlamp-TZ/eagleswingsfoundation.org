import { useState } from 'react'
import Icon from '../../components/ui/Icon.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Button from '../../components/ui/Button.jsx'
import SectionHead from '../../components/ui/SectionHead.jsx'
import { Link } from 'react-router-dom'
import { photos } from '../../data/photos.js'
import { useUrlState } from '../../utils/useUrlState.js'

const groups = {
  general: [
    [
      'What is Eagle’s Wings Foundation Tanzania?',
      'Eagle’s Wings Foundation Tanzania is a growing nonprofit initiative focused on inclusion, practical care, learning and support for children, families, caregivers and older people in Tanzania.',
    ],
    [
      'What is the Foundation’s mission?',
      'The Foundation’s work is organized around practical inclusion, caregiver and family learning, neuro-diversity awareness, life-skills development, healthy ageing support and responsible community participation.',
    ],
    [
      'Where is Eagle’s Wings based?',
      'The Foundation is currently based in Tegeta, Dar es Salaam, Tanzania. Future locations or partnerships will only be published after they are confirmed.',
    ],
    [
      'Who can contact the Foundation?',
      'Families, caregivers, volunteers, professionals, supporters, organizations and prospective partners may contact Eagle’s Wings about programs, collaboration, volunteering or general information.',
    ],
    [
      'Does the website provide medical diagnosis or treatment?',
      'No. Website content is educational and informational. Individual diagnosis, treatment, therapy plans and medical decisions should remain with qualified professionals.',
    ],
  ],
  autism: [
    [
      'What are autism spectrum disorders?',
      'Autism spectrum disorders (ASDs) are a group of neurodevelopmental conditions that affect how a person communicates, interacts with others, learns and experiences the world. They are called a “spectrum” because they look different from one person to another: some autistic people need a lot of support in daily life, while others live largely independently.\nAutism is not an illness, and it is not caused by poor parenting.',
    ],
    [
      'What are the symptoms of autism spectrum disorders?',
      'Signs vary widely, and no single sign proves autism. Common ones include:\n• Differences in communication, such as delayed or limited speech, not responding to their name, or limited gestures and eye contact\n• Difficulty with back-and-forth social interaction and making friends\n• Repetitive movements, words or play, and strong, focused interests\n• A strong need for routine and distress when things change unexpectedly\n• Unusual reactions to sound, light, touch, taste or smell\nA child who shows several of these signs should be assessed by a qualified professional. The signs alone are not a diagnosis.',
    ],
    [
      'What is Down syndrome?',
      'Down syndrome is a genetic condition caused by a person having an extra copy of chromosome 21 (also called trisomy 21). It is present from birth and lasts for life. It commonly affects learning and physical development, and some people also have health needs such as heart conditions or hearing and vision differences, so regular medical check-ups matter.\nIt is not caused by anything a parent did or did not do. With early support, education and inclusion, children and adults with Down syndrome can learn, work, form relationships and take part in community life. Down syndrome is different from autism, although some people have both.',
    ],
    [
      'When does autism develop?',
      'Autism is neurodevelopmental, which means it begins in early brain development. It is usually noticed in the first two to three years of life, although some children are only identified later, at school age or even in adulthood, especially when the signs are subtle or when assessment services are hard to reach.\nAutism does not suddenly start after a vaccine, an illness or a life event.',
    ],
    [
      'How are autism spectrum disorders (ASDs) diagnosed?',
      'There is no blood test or scan that diagnoses autism. A qualified professional, such as a pediatrician, child psychiatrist, clinical psychologist or developmental specialist, makes the diagnosis by observing the child, asking parents and caregivers about development and behavior from early life, and using structured assessment tools. Information from teachers and other caregivers also helps, and assessments are often done by a team.\nIf you are worried about a child, start by speaking with a health worker or doctor, who can refer you. You do not need to wait for a formal diagnosis before beginning supportive activities at home.',
    ],
    [
      'What are the causes of autism spectrum disorders (ASDs)?',
      'There is no single known cause. Research points to a combination of genetic factors and influences on early brain development.\nAutism is not caused by bad parenting, by vaccines, by the child’s behavior, by witchcraft or by a curse. Understanding this helps reduce blame and stigma toward children and their families.',
    ],
    [
      'How are ASDs treated?',
      'Autism is not an illness that is “cured”. Support focuses on helping each person communicate, learn, build independence, stay healthy and be included. Depending on the person’s needs, this may include speech and language therapy, occupational therapy, behavioral and developmental support, special education, family and caregiver training, and care for related conditions such as epilepsy, sleep problems, anxiety or ADHD.\nSupport plans should be individual and guided by qualified professionals. Be cautious about anyone who promises a cure or sells expensive “miracle” treatments.',
    ],
    [
      'How long does intervention for ASDs take before the individual gets better?',
      'There is no fixed timeline. Autism is lifelong, so the goal is not for a person to “get better” but to build skills, independence and wellbeing.\nProgress depends on the person’s strengths and needs, how early support begins, how consistent it is across home, school and therapy, and the quality of the support. Some skills improve within months, others take years, and needs change at different stages of life. Professionals usually set goals, review progress regularly and adjust the plan. When families and caregivers practice the same strategies at home, it makes a big difference.',
    ],
    [
      'What is the difference between the roles of behavior therapists, occupational therapists, physiotherapists, speech and language pathologists, special education teachers, shadow teachers, pediatric neurologists, clinical psychologists and caregivers?',
      'These roles are different, and they work best as a team:\n• Behavior therapist: uses structured, evidence-based methods to teach skills and reduce behaviors that make daily life hard, and works with the family on consistent routines.\n• Occupational therapist: helps with everyday activities such as dressing, eating, handwriting, play and self-care, and with sensory needs and fine motor skills.\n• Physiotherapist: supports movement, strength, balance, posture and coordination (gross motor skills).\n• Speech and language pathologist: supports understanding and use of language and speech, alternative ways of communicating, and sometimes feeding and swallowing.\n• Special education teacher: a trained teacher who adapts lessons, materials and the classroom to a learner’s needs and sets learning goals.\n• Shadow teacher: a support person who works one-to-one beside a child in a regular classroom, helping them follow lessons, routines and social situations while gradually building independence.\n• Pediatric neurologist: a doctor who diagnoses and treats conditions of the brain and nerves in children, such as epilepsy, and may contribute to assessment.\n• Clinical psychologist: assesses thinking, learning, emotions and behavior, contributes to diagnosis, and offers counseling and behavior strategies for the person and the family.\n• Caregiver: parents, relatives or other carers who provide daily care and practice skills every day. Caregivers are the most constant members of the team.\nExact titles and responsibilities can vary between services and countries.',
    ],
  ],
  skills: [
    [
      'What are vocational skills?',
      'Vocational skills are practical skills that prepare a person for work, income or independent living. Examples include farming and gardening, tailoring and sewing, crafts, cooking and food preparation, cleaning and laundry, basic computer use, carpentry and simple small-business tasks.\nFor people with disabilities and neurodevelopmental conditions, vocational training builds confidence, routine and social skills, and opens a path to dignified work or self-employment.',
    ],
    [
      'How do children with special needs respond to vocational skills training?',
      'Every child is different, but many children respond well when training is practical and hands-on, broken into small steps, repeated patiently and supported with demonstration, visual guides and encouragement. Interests and strengths matter: a child who likes plants may do well in gardening, while another who enjoys patterns may enjoy sewing or crafts.\nSome children need more time, a calm place and a trusted supporter at first. Starting early with simple life skills such as washing, tidying and preparing food lays the foundation for later vocational skills. Progress should be measured against the child’s own goals, not against other people.',
    ],
    [
      'Do autistic and other neurodivergent individuals have reproductive systems just like other people?',
      'Yes. Autistic people, people with Down syndrome and other neurodivergent people have the same bodies and go through puberty like everyone else. They also have feelings, relationships and the same right to privacy and dignity.\nThe difference is often that they need clearer, more concrete and repeated teaching about body changes, hygiene, privacy, consent and safe relationships. Good education and open conversation help protect against abuse and exploitation, which people with disabilities can face a higher risk of. It helps to prepare early, before puberty, using simple language and pictures, and to involve a trusted health professional. Decisions about their health and relationships should respect the person’s rights and wishes, with the support they need.',
    ],
    [
      'How can we help autistic teenagers during adolescence, and how can you help someone with a learning difficulty gain new skills?',
      'Helping autistic teenagers through adolescence:\n• Prepare them early for body changes, using simple, clear explanations and pictures\n• Keep routines predictable and give notice before changes\n• Teach hygiene, privacy and personal safety, including what consent means and who to tell if something feels wrong\n• Support friendships and social skills in small, safe settings, and protect them from bullying\n• Watch for anxiety, low mood and sleep problems, and seek professional help when needed\n• Involve them in decisions and build independence in tasks such as cooking, handling money and travel\n\nHelping someone with a learning difficulty gain new skills:\n• Break a skill into small steps and teach one step at a time\n• Show, don’t only tell: demonstrate, use pictures and practice together\n• Practice in short, regular sessions and in real situations\n• Give time, reduce distractions, and praise effort and progress\n• Build on the person’s interests and strengths\n• Keep home, school and therapy approaches consistent',
    ],
    [
      'What beliefs are attached to autism and other neurodevelopmental disorders in Africa?',
      'In many African communities, as in many places around the world, neurodevelopmental conditions are sometimes explained through spiritual or moral beliefs, for example witchcraft, curses, punishment for something the family did, or blame placed on the mother. Some families first seek help from traditional or religious healers. Research from several African countries describes these beliefs, and also the stigma, shame and isolation that can follow. Limited awareness of autism also delays identification.\nThe scientific evidence is clear that conditions such as autism and Down syndrome are not caused by witchcraft, curses or anything a parent did. At the same time, faith and community are important sources of support for many families, and respectful conversation works better than dismissing beliefs. The Foundation’s aim is awareness that replaces blame with understanding and links families to qualified support.',
    ],
    [
      'How does an inclusion system help individuals with neurodevelopmental challenges to thrive in society?',
      'Inclusion means that people with neurodevelopmental challenges take part fully in everyday life, including school, work, worship, markets and recreation, with the adjustments they need, instead of being separated or hidden away.\nIt helps people thrive because they:\n• Learn alongside their peers and build friendships\n• Are expected and encouraged to reach their own potential\n• Gain skills and opportunities for work and income\n• Face less stigma and isolation, and so do their families\nIt also helps the whole community to learn and understand. Inclusion works when there is awareness, trained teachers and caregivers, accessible spaces, and respect for each person’s rights and dignity. It is a shared responsibility of families, schools, employers, faith groups and government.',
    ],
    [
      'What initiatives has the Government of Tanzania taken to help individuals with neurodevelopmental challenges?',
      'Tanzania has taken several formal steps for people with disabilities, which include people with neurodevelopmental conditions:\n• The Persons with Disabilities Act, 2010, which provides for health care, social support, accessibility, rehabilitation, education and vocational training, employment and the protection of the rights of persons with disabilities\n• Commitments under the UN Convention on the Rights of Persons with Disabilities, which Tanzania ratified in 2009\n• The National Policy on Disability (2004)\n• Education policies and the National Strategy for Inclusive Education (2021/22–2025/26), which focus on training teachers and making schools more inclusive\nReports note that putting these into practice is still uneven, and limited funding, accessibility, specialist staff and community stigma remain serious barriers. Because laws and programs change, families are encouraged to ask the Ministry of Health, the Ministry of Education or their local social welfare office about current services.',
    ],
    [
      'What is the scope of professionals who are qualified to practice clinical and therapeutic roles in Tanzania?',
      'Clinical and therapeutic roles are generally expected to be performed by people with recognized training who are registered or licensed by the relevant professional body in Tanzania. For example, doctors, including pediatricians, child psychiatrists and neurologists, are registered with the Medical Council of Tanganyika. Other professionals such as nurses, physiotherapists, occupational therapists, speech and language therapists and psychologists are expected to hold recognized qualifications and to meet the registration or licensing requirements that apply to their profession.\nSpecialist services such as speech therapy, occupational therapy and child psychology are often found mainly in larger hospitals and urban centers, and the number of specialists is limited. Regulation of some professions is still developing, so it is wise to ask any provider about their qualifications and registration, and to check with the relevant council or the Ministry of Health.\nTeachers, shadow teachers and caregivers are not clinicians. Their roles are educational and supportive, and they work alongside clinical professionals, not in place of them.',
    ],
  ],
  programs: [
    [
      'What program areas does Eagle’s Wings currently present?',
      'We work in five program areas: Neuro-diversity Awareness, Elderly Care Support, Education & Therapy Guidance, Life Skills Programs and Caregiver Training.',
    ],
    [
      'Who are the programs intended to support?',
      'Depending on the program, the intended audiences include children and young people, families, caregivers, older people, educators, volunteers and community members.',
    ],
    [
      'Are all programs already operating at full scale?',
      'Not yet. Eagle’s Wings is a growing organization and some programs are still being built. We add delivery numbers and outcomes only after they are verified.',
    ],
    [
      'Can I request support for a family member?',
      'You can contact the Foundation to explain your situation. The team can then clarify whether the request fits current capacity, whether educational guidance is appropriate, or whether referral to another professional service may be needed.',
    ],
  ],
  donation: [
    [
      'Can I make a one-time or recurring donation?',
      'Yes. Tell us on the Donate page whether you would like to give once or monthly. Online payment is not available yet, so the team will contact you to confirm how to give.',
    ],
    [
      'Can I direct support to a specific program?',
      'Yes. Tell us which program area you would like to support and we will note your preference. Allocation and reporting follow the Foundation’s approved financial and governance processes.',
    ],
    [
      'Which payment methods will be supported?',
      'Mobile money, bank transfer and card are the options we plan to offer. The team will tell you which are available when you get in touch.',
    ],
    [
      'How will financial transparency be handled?',
      'We publish reports in the Annual Reports section as they are approved. Financial reports, fundraising targets and audited figures appear only after they are formally approved.',
    ],
    [
      'Why does the site not show fundraising totals or donor names?',
      'We publish fundraising totals, donor names, impact figures and testimonials only once they are verified and the people involved agree.',
    ],
  ],
  volunteer: [
    [
      'How can I become a volunteer?',
      'Use the Get Involved page to send a volunteer interest form, or contact the Foundation directly. Opportunities are matched to current needs, skills and safeguarding requirements.',
    ],
    [
      'What volunteer roles are available?',
      'Volunteers can help with community outreach, program support, family and caregiver support, events, communications, fundraising, administration, or by sharing professional expertise. Tell us your skills and the time you have, and we will suggest a role that fits.',
    ],
    [
      'Does submitting interest guarantee a placement?',
      'No. A volunteer placement should only be confirmed after the Foundation reviews current needs, role suitability, availability, safeguarding requirements and supervision arrangements.',
    ],
    ['What standards are expected from volunteers?', 'Volunteers are expected to respect safeguarding, dignity, consent, confidentiality, reliability and clear role boundaries.'],
    [
      'Will volunteer names and photos be published?',
      'Only with their approval and consent.',
    ],
  ],
  events: [
    [
      'Are there confirmed public events yet?',
      'Not yet. Our Events page shows the kinds of events we plan to run. We announce the date, time and venue of each one once they are confirmed.',
    ],
    [
      'What kinds of events are planned?',
      'Examples include neuro-diversity awareness sessions, caregiver workshops, healthy-ageing sessions, life-skills practice days, community outreach, volunteer orientation and partner briefings.',
    ],
    [
      'How do I register for an event?',
      'When an event is confirmed, the event page can publish the approved registration process. Until then, visitors can use the contact or interest pathways to ask about future participation.',
    ],
  ],
  privacy: [
    [
      'How does Eagle’s Wings handle personal information?',
      'We collect only the information we need for each purpose, keep it protected, and never publish personal information without approval.',
    ],
    [
      'How are photos and stories handled?',
      'Photos, names, biographies, testimonials and beneficiary stories should be used only with suitable consent, safeguarding review and accurate context.',
    ],
    [
      'Can I ask for information to be corrected?',
      'Yes. If the Foundation publishes information about a person or activity that requires correction, visitors should contact the team so the content can be reviewed and updated appropriately.',
    ],
  ],
}

const labels = { general: 'General', autism: 'Autism & Down syndrome', skills: 'Skills, inclusion & support', programs: 'Programs', donation: 'Donations', volunteer: 'Volunteering', events: 'Events', privacy: 'Privacy & Safeguarding' }

const trustPoints = [
  ['badge-check', 'Verified'],
  ['shield-check', 'Safeguarding aware'],
  ['file-check-2', 'Documented'],
  ['scale', 'Clear boundaries'],
  ['refresh-cw', 'Updated when needed'],
]

export default function FaqV1() {
  const [category, setCategory] = useUrlState('topic', 'general')
  const [openIndex, setOpenIndex] = useState(0)
  const [search, setSearch] = useUrlState('q', '')

  function selectCategory(cat) {
    setCategory(cat)
    setOpenIndex(0)
  }

  const rows = groups[category] || []
  const query = search.toLowerCase().trim()
  const hasMatch = rows.some(([q, a]) => !query || (q + ' ' + a).toLowerCase().includes(query))

  return (
    <>
      <PageHero kicker="Helpful information" title="Frequently Asked Questions" text="Home · FAQ" img={photos.people} />

      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <div className="rule-orange" />
              <div className="mono-label text-brand-deep">Frequently asked questions</div>
              <h2 className="display-md mt-4 text-brand-deep">Clear answers about the Foundation.</h2>
              <p className="mt-5 text-sm leading-7 text-muted">
                Browse by topic or search the questions.
              </p>
              <div className="relative mt-7">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search visible questions…"
                  aria-label="Search visible questions"
                  className="field pr-12"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-subtle">
                  <Icon name="search" className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-7 border-t border-line">
                {Object.entries(labels).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => selectCategory(key)}
                    aria-pressed={category === key}
                    className={`flex w-full items-center justify-between border-b border-line px-3 py-3.5 text-left text-sm ${
                      category === key ? 'border-l-2 border-l-brand-orange bg-brand-navy font-semibold text-white' : 'text-muted hover:text-brand-deep'
                    }`}
                  >
                    <span>{label}</span>
                    <Icon name="arrow-up-right" className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </aside>
            <div>
              <div className="flex gap-3 border border-line bg-sand p-5">
                <Icon name="badge-check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                <div>
                  <div className="mono-label text-brand-deep">Straight answers</div>
                  <p className="mt-2 text-sm leading-6 text-muted">Where something is not available yet, we say so.</p>
                </div>
              </div>
              <div className="mt-6 border-t border-line">
                {!hasMatch && (
                  <div role="status" className="border-b border-line py-10 text-center">
                    <Icon name="search-x" className="mx-auto h-6 w-6 text-brand-orange" />
                    <h3 className="display-sm mt-4 text-brand-deep">No questions match “{search.trim()}”</h3>
                    <p className="mt-2 text-sm text-muted">
                      Try a different word, switch topic, or{' '}
                      <Link to="/contact" className="font-semibold text-brand-navy underline underline-offset-4">
                        ask the team directly
                      </Link>
                      .
                    </p>
                  </div>
                )}
                {rows.map(([q, a], i) => {
                  const match = !query || (q + ' ' + a).toLowerCase().includes(query)
                  if (!match) return null
                  const open = openIndex === i
                  return (
                    <article key={q} className="border-b border-line">
                      <button
                        onClick={() => setOpenIndex(open ? -1 : i)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-5 py-5 text-left"
                      >
                        <span className="display-sm text-brand-deep">{q}</span>
                        <Icon name={open ? 'minus' : 'plus'} className="h-5 w-5 shrink-0 text-brand-orange" />
                      </button>
                      {open && <div className="max-w-3xl whitespace-pre-line pb-6 text-sm leading-7 text-muted">{a}</div>}
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Information standards"
            title="What makes an answer publishable?"
            text="Eagle’s Wings highlights the standards that govern the information it makes public."
          />
          <div className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {trustPoints.map(([i, t]) => (
              <div key={t} className="border-b border-line p-5 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <Icon name={i} className="h-5 w-5 text-brand-orange" />
                <div className="display-sm mt-3 text-brand-deep">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand text-brand-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="eyebrow text-brand-orange">Still have a question?</div>
              <h2 className="display-lg mt-4 text-brand-deep">Ask the Foundation directly.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                For a question about programs, volunteering, partnerships, donations or a family support need, contact Eagle’s Wings so the
                team can respond with context.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button label="Contact us" href="/contact" />
              <Button label="Explore programs" href="/programs" variant="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
