/* FAQ inspiration 1 — adapted from the supplied FAQ mockup.
   Keeps the split category + accordion composition while using Eagle's Wings factual content.
   No donor counts, partner logos, impact totals or unsupported service claims are invented. */

routeMeta.faq='FAQ';

const EWFAQ1Groups={
  general:[
    ['What is Eagle’s Wings Foundation Tanzania?','Eagle’s Wings Foundation Tanzania is a growing nonprofit initiative focused on inclusion, practical care, learning and support for children, families, caregivers and older people in Tanzania.'],
    ['What is the Foundation’s mission?','The Foundation’s work is organized around practical inclusion, caregiver and family learning, neuro-diversity awareness, life-skills development, healthy ageing support and responsible community participation.'],
    ['Where is Eagle’s Wings based?','The Foundation is currently based in Tegeta, Dar es Salaam, Tanzania. Future locations or partnerships will only be published after they are confirmed.'],
    ['Who can contact the Foundation?','Families, caregivers, volunteers, professionals, supporters, organizations and prospective partners may contact Eagle’s Wings about programs, collaboration, volunteering or general information.'],
    ['Does the website provide medical diagnosis or treatment?','No. Website content is educational and informational. Individual diagnosis, treatment, therapy plans and medical decisions should remain with qualified professionals.']
  ],
  programs:[
    ['What program areas does Eagle’s Wings currently present?','The website currently presents five main program areas: Neuro-diversity Awareness, Elderly Care Support, Education & Therapy Guidance, Life Skills Programs and Caregiver Training.'],
    ['Who are the programs intended to support?','Depending on the program, the intended audiences include children and young people, families, caregivers, older people, educators, volunteers and community members.'],
    ['Are all programs already operating at full scale?','No. The website reflects a growing organization and some sections describe planned program structures. Public claims about delivery, attendance or outcomes are only added after verification.'],
    ['Can I request support for a family member?','You can contact the Foundation to explain your situation. The team can then clarify whether the request fits current capacity, whether educational guidance is appropriate, or whether referral to another professional service may be needed.']
  ],
  donation:[
    ['Can I make a one-time or recurring donation?','The frontend is prepared for one-time and monthly support, but live payment processing should only be activated after secure merchant onboarding and payment-provider configuration are complete.'],
    ['Can I direct support to a specific program?','Yes. The donation interface is designed to let supporters indicate a preferred program area. Final allocation and reporting should follow the Foundation’s approved financial and governance processes.'],
    ['Which payment methods will be supported?','The current frontend shows planned options such as Mobile Money, card and bank transfer. These are not presented as live until the relevant secure payment integrations are connected.'],
    ['How will financial transparency be handled?','The site includes an Annual Reports / Financial Transparency area. Public financial reports, fundraising targets and audited figures should only be published after they are formally approved and available.'],
    ['Why are there no fake fundraising totals or donor names?','Because the site is being designed to remain trustworthy. Fundraising totals, donor identities, impact figures and testimonials are intentionally omitted until they are verified and appropriate to publish.']
  ],
  volunteer:[
    ['How can I become a volunteer?','Use the Get Involved page to submit a volunteer interest form once the backend is connected, or contact the Foundation directly. Volunteer opportunities are matched to current needs, skills and safeguarding requirements.'],
    ['What volunteer roles are available?','The site currently describes roles in community outreach, program support, family and caregiver support, events, communications, fundraising, administration and professional expertise.'],
    ['Does submitting interest guarantee a placement?','No. A volunteer placement should only be confirmed after the Foundation reviews current needs, role suitability, availability, safeguarding requirements and supervision arrangements.'],
    ['What standards are expected from volunteers?','Volunteers are expected to respect safeguarding, dignity, consent, confidentiality, reliability and clear role boundaries.'],
    ['Will volunteer names and photos be published?','Only with appropriate approval and consent. The current volunteer showcase intentionally uses role-based placeholders instead of invented identities.']
  ],
  events:[
    ['Are there confirmed public events yet?','The site currently shows planned event formats, but no public date, time or venue is treated as confirmed until the Foundation formally approves it.'],
    ['What kinds of events are planned?','Examples include neuro-diversity awareness sessions, caregiver workshops, healthy-ageing sessions, life-skills practice days, community outreach, volunteer orientation and partner briefings.'],
    ['How do I register for an event?','When an event is confirmed, the event page can publish the approved registration process. Until then, visitors can use the contact or interest pathways to ask about future participation.']
  ],
  privacy:[
    ['How does Eagle’s Wings handle personal information?','The site is being designed to collect only information needed for the relevant purpose, protect it appropriately and avoid publishing personal information without approval.'],
    ['How are photos and stories handled?','Photos, names, biographies, testimonials and beneficiary stories should be used only with suitable consent, safeguarding review and accurate context.'],
    ['Can I ask for information to be corrected?','Yes. If the Foundation publishes information about a person or activity that requires correction, visitors should contact the team so the content can be reviewed and updated appropriately.']
  ]
};

let ewFaq1Category='general';
let ewFaq1Open=0;

const EWFAQ1Labels={general:'General',programs:'Programs',donation:'Donations',volunteer:'Volunteering',events:'Events',privacy:'Privacy & Safeguarding'};

window.ewFaq1SetCategory=function(cat,btn){
  ewFaq1Category=cat; ewFaq1Open=0;
  document.querySelectorAll('[data-faq1-cat]').forEach(x=>x.className='faq1-cat flex w-full items-center justify-between rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm font-extrabold text-slate-600 transition hover:border-brand-navy/25 hover:text-brand-navy');
  if(btn) btn.className='faq1-cat flex w-full items-center justify-between rounded-full border border-brand-navy bg-brand-navy px-5 py-3.5 text-sm font-extrabold text-white shadow-sm';
  ewFaq1Render();
};

window.ewFaq1Toggle=function(i){ ewFaq1Open=ewFaq1Open===i?-1:i; ewFaq1Render(); };

window.ewFaq1Search=function(value){
  const q=(value||'').toLowerCase().trim();
  document.querySelectorAll('[data-faq1-row]').forEach(row=>{
    row.style.display=!q||row.dataset.faq1Row.includes(q)?'block':'none';
  });
};

function ewFaq1Render(){
  const target=document.getElementById('faq1Accordion'); if(!target) return;
  const rows=EWFAQ1Groups[ewFaq1Category]||[];
  target.innerHTML=rows.map(([q,a],i)=>`<article data-faq1-row="${(q+' '+a).toLowerCase()}" class="faq1-item overflow-hidden rounded-[1.35rem] border border-slate-100 bg-white shadow-card"><button onclick="ewFaq1Toggle(${i})" class="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"><span class="font-display text-lg leading-snug text-brand-deep sm:text-xl">${q}</span><span class="grid h-9 w-9 shrink-0 place-items-center rounded-full ${ewFaq1Open===i?'bg-brand-navy text-white':'bg-brand-mist text-brand-navy'}">${icon(ewFaq1Open===i?'minus':'plus','w-4 h-4')}</span></button><div class="faq1-answer ${ewFaq1Open===i?'block':'hidden'} border-t border-slate-100 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6">${a}</div></article>`).join('');
  if(window.lucide) lucide.createIcons();
}

EWPages.faq=()=>`
<section class="faq1-hero relative isolate overflow-hidden text-white"><img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Eagle's Wings Foundation FAQ"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.72),rgba(0,31,61,.48))]"></div><div class="faq1-splash absolute -left-14 bottom-0 h-56 w-48 bg-brand-orange"></div><div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Helpful information</div><h1 class="mt-4 font-display text-5xl leading-tight sm:text-7xl">Frequently Asked Questions</h1><p class="mt-4 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · FAQ</p></div></div></section>

<section class="faq1-paper py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start"><aside class="lg:sticky lg:top-28"><div class="eyebrow text-brand-orange">Frequently asked questions</div><h2 class="mt-4 font-display text-4xl leading-tight text-brand-deep sm:text-5xl">Clear answers about the Foundation.</h2><p class="mt-5 text-sm leading-7 text-slate-600">Browse by topic or search the visible questions. Answers are written to match the Foundation’s current public website status and avoid unsupported claims.</p><div class="mt-7 relative"><input oninput="ewFaq1Search(this.value)" placeholder="Search visible questions" class="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-5 pr-12 text-sm outline-none focus:border-brand-navy"><span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">${icon('search','w-4 h-4')}</span></div><div class="mt-7 grid gap-3">${Object.entries(EWFAQ1Labels).map(([k,v],i)=>`<button data-faq1-cat onclick="ewFaq1SetCategory('${k}',this)" class="faq1-cat flex w-full items-center justify-between rounded-full border ${i===0?'border-brand-navy bg-brand-navy text-white shadow-sm':'border-slate-200 bg-white text-slate-600'} px-5 py-3.5 text-sm font-extrabold transition hover:border-brand-navy/25 hover:text-brand-navy"><span>${v}</span>${icon('arrow-up-right','w-4 h-4')}</button>`).join('')}</div></aside><div><div class="rounded-[1.7rem] border border-brand-navy/10 bg-brand-mist p-5"><div class="flex gap-3"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-orange shadow-sm">${icon('badge-check','w-5 h-5')}</span><div><div class="text-sm font-extrabold text-brand-deep">Accuracy-first FAQ</div><p class="mt-1 text-sm leading-6 text-slate-500">Where a service, date, payment integration, report or public metric is not yet confirmed, the FAQ says so instead of inventing details.</p></div></div></div><div id="faq1Accordion" class="mt-5 grid gap-3"></div></div></div></div></section>

<section class="faq1-trust border-y border-brand-navy/10 bg-brand-mist py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Information standards','What makes an answer publishable?','The reference mockup uses company logos here. Eagle’s Wings instead highlights the standards that should govern public information.','center')}<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${[['badge-check','Verified'],['shield-check','Safeguarding aware'],['file-check-2','Documented'],['scale','Clear boundaries'],['refresh-cw','Updated when needed']].map(([i,t])=>`<div class="rounded-[1.5rem] border border-white bg-white p-5 text-center shadow-sm"><span class="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-deep text-brand-orange">${icon(i,'w-4 h-4')}</span><div class="mt-3 text-sm font-extrabold text-brand-deep">${t}</div></div>`).join('')}</div></div></section>

<section class="py-24"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="faq1-contact relative overflow-hidden rounded-[2.5rem] bg-brand-deep p-8 text-white shadow-soft sm:p-12"><div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-orange/15 blur-2xl"></div><div class="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><div class="eyebrow text-brand-orange">Still have a question?</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Ask the Foundation directly.</h2><p class="mt-4 max-w-2xl text-sm leading-7 text-white/65">For a question about programs, volunteering, partnerships, donations or a family support need, contact Eagle’s Wings so the team can respond with context.</p></div><div class="flex flex-wrap gap-3 lg:justify-end">${button('Contact us','#/contact')}${button('Explore programs','#/programs','outline')}</div></div></div></div></section>`;

if(typeof render==='function'&&route()==='faq'){ render(); setTimeout(ewFaq1Render,0); }
