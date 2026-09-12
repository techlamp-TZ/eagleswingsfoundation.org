/* Program detail pages — adapted from the supplied Services Details mockup.
   The structure is reusable across Eagle's Wings verified program areas.
   Prototype photography is illustrative; no beneficiary outcomes, testimonials or figures are fabricated. */

const EWProgramDetails = {
  'program-neurodiversity': {
    title:'Neuro-diversity Awareness', tag:'Awareness', icon:'brain', hero:photos.child,
    intro:'Building understanding around Autism, ADHD, Down syndrome and intellectual disability through respectful, practical community education.',
    summary:'This program is designed to help families, caregivers and communities better understand neuro-diversity. The emphasis is on respectful language, practical inclusion and reducing stigma through useful information rather than labels alone.',
    approach:'We connect awareness with everyday action: understanding different needs, improving communication, supporting participation and helping families identify practical next steps.',
    process:['Share clear, respectful awareness information.','Connect learning to family and community situations.','Encourage practical inclusion and supportive communication.','Refer complex or clinical questions to appropriate professionals.'],
    checks:['Respectful, person-centred information','Family and caregiver participation','Practical inclusion in everyday settings'],
    gallery:[photos.child,photos.family,photos.people,photos.learning]
  },
  'program-elderly-care': {
    title:'Elderly Care Support', tag:'Care', icon:'heart-pulse', hero:photos.care,
    intro:'Practical guidance around nutrition, movement and mental stimulation for older people and the families who support them.',
    summary:'The elderly care program focuses on helping families and caregivers think about day-to-day wellbeing in a practical and dignified way. It is especially relevant to older people facing memory, cognitive or age-related challenges.',
    approach:'The program brings together healthy routines, family support and caregiver learning. It is educational and supportive; diagnosis and treatment remain the responsibility of qualified health professionals.',
    process:['Understand the person’s daily support needs.','Promote safe movement, nutrition and engagement.','Equip caregivers with practical routines and communication approaches.','Encourage professional referral when medical assessment is needed.'],
    checks:['Dignified, person-centred support','Family and caregiver guidance','Healthy routines and mental stimulation'],
    gallery:[photos.care,photos.people,photos.family,photos.learning]
  },
  'program-education-therapy': {
    title:'Education & Therapy Guidance', tag:'Education', icon:'book-heart', hero:photos.family,
    intro:'Practical education on neurological conditions, therapy exercises and specialized parenting for families and caregivers.',
    summary:'This program helps translate complex information into practical learning that families can understand and discuss. Content can include general therapy guidance, parenting approaches and education around neurological conditions.',
    approach:'Guidance is framed as supportive education, not a substitute for individualized clinical assessment. Families are encouraged to work with qualified professionals for diagnosis, therapy plans and medical decisions.',
    process:['Identify the family’s learning need.','Explain concepts in clear, accessible language.','Demonstrate practical home-support ideas where appropriate.','Encourage professional follow-up for individualized care.'],
    checks:['Clear and accessible education','Practical family guidance','Professional referral when needed'],
    gallery:[photos.family,photos.learning,photos.child,photos.people]
  },
  'program-life-skills': {
    title:'Life Skills Programs', tag:'Skills', icon:'sparkles', hero:photos.learning,
    intro:'Structured life-skills support for children with autism, particularly young people aged 12 and above.',
    summary:'Life-skills learning focuses on the practical routines that support participation and growing independence. Activities can be organized around communication, self-care, everyday routines and confidence-building practice.',
    approach:'Skills are broken into manageable steps and practised consistently. Families and caregivers are part of the learning process so that practice can continue beyond a single session.',
    process:['Choose a practical skill that matters in daily life.','Break the skill into clear, achievable steps.','Practise consistently with supportive feedback.','Review progress and adapt the routine to the learner’s needs.'],
    checks:['Step-by-step practical learning','Family and caregiver reinforcement','Confidence and participation'],
    gallery:[photos.learning,photos.child,photos.family,photos.people]
  },
  'program-caregiver-training': {
    title:'Caregiver Training', tag:'Training', icon:'users', hero:photos.people,
    intro:'Helping caregivers build the knowledge and confidence to support children and older people professionally and consistently.',
    summary:'Caregiver training brings together communication, practical routines, dignity, observation and family engagement. The aim is to strengthen the quality and consistency of everyday support.',
    approach:'Training is designed around practical scenarios and responsible boundaries. Caregivers learn what they can support directly, what should be documented, and when a concern needs professional escalation.',
    process:['Build a shared understanding of the person’s support needs.','Practise respectful communication and daily-care routines.','Use observation and documentation to support consistency.','Escalate medical, safeguarding or specialist concerns appropriately.'],
    checks:['Respectful communication','Consistent practical routines','Clear professional boundaries'],
    gallery:[photos.people,photos.care,photos.family,photos.child]
  }
};

Object.keys(EWProgramDetails).forEach(id=>{ routeMeta[id] = EWProgramDetails[id].title; });

const programRouteIds = Object.keys(EWProgramDetails);

function ewProgramSidebar(activeId){
  return `<aside class="program-detail-sidebar space-y-6 lg:sticky lg:top-28 lg:self-start">
    <div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-card">
      <label class="text-sm font-extrabold text-brand-deep">Search programs</label>
      <div class="relative mt-3"><input id="programSearch" oninput="filterProgramSidebar(this.value)" placeholder="Search" class="w-full rounded-xl border border-slate-200 py-3 pl-4 pr-11 text-sm outline-none focus:border-brand-navy"><span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">${icon('search','w-4 h-4')}</span></div>
    </div>
    <div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-card"><div class="eyebrow text-brand-orange">Programs</div><div id="programSideList" class="mt-4 grid gap-2">${programRouteIds.map(id=>{const p=EWProgramDetails[id];return `<a data-program-name="${p.title.toLowerCase()}" href="#/${id}" class="rounded-xl border px-4 py-3 text-sm font-bold transition ${id===activeId?'border-brand-orange bg-orange-50 text-brand-orange':'border-slate-200 text-slate-600 hover:border-brand-navy/30 hover:bg-brand-mist hover:text-brand-navy'}">${p.title}</a>`}).join('')}</div></div>
    <div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-card"><div class="eyebrow text-brand-orange">Prototype gallery</div><div class="mt-4 grid grid-cols-2 gap-2">${EWProgramDetails[activeId].gallery.map((img,i)=>`<div class="img-zoom overflow-hidden rounded-xl"><img src="${img}" alt="Program visual placeholder ${i+1}" class="h-24 w-full object-cover"></div>`).join('')}</div><p class="mt-3 text-[11px] leading-5 text-slate-400">Replace these illustrative photos with approved Eagle’s Wings program media before launch.</p></div>
    <a href="#/contact" class="flex items-center justify-between rounded-[1.5rem] bg-brand-deep p-5 text-white shadow-card"><span><span class="text-xs font-extrabold uppercase tracking-[.14em] text-brand-orange">Need more information?</span><span class="mt-1 block font-display text-xl">Talk to the Foundation</span></span>${icon('arrow-up-right','w-5 h-5')}</a>
  </aside>`;
}

function filterProgramSidebar(value){
  const q=(value||'').toLowerCase().trim();
  document.querySelectorAll('#programSideList [data-program-name]').forEach(a=>{a.style.display=!q||a.dataset.programName.includes(q)?'block':'none';});
}
window.filterProgramSidebar=filterProgramSidebar;

function programDetailsPage(id){
  const p=EWProgramDetails[id];
  const relatives=programRouteIds.filter(x=>x!==id).slice(0,3).map(x=>[x,EWProgramDetails[x]]);
  return `
  <section class="program-detail-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.people}" alt="Eagle's Wings programs" class="h-full w-full object-cover opacity-40"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.92),rgba(0,31,61,.55),rgba(0,31,61,.82))]"></div></div>
    <div class="relative mx-auto flex min-h-[320px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Program details</div><h1 class="mt-4 font-display text-5xl sm:text-6xl">${p.title}</h1><p class="mt-3 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · <a href="#/programs" class="hover:text-white">Programs</a> · ${p.tag}</p></div></div>
  </section>

  <section class="py-20 lg:py-24"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
    <article class="min-w-0">
      <div class="img-zoom overflow-hidden rounded-[2.2rem] shadow-soft"><img src="${p.hero}" class="h-[360px] w-full object-cover sm:h-[500px]" alt="${p.title}"></div>
      <div class="mt-9"><div class="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${icon(p.icon,'w-3.5 h-3.5')}${p.tag}</div><h2 class="mt-4 font-display text-4xl leading-tight text-brand-deep sm:text-5xl">${p.title}</h2><p class="mt-5 text-lg leading-8 text-slate-600">${p.intro}</p></div>

      <div class="mt-8 rounded-[1.8rem] border border-brand-navy/10 bg-brand-mist p-6"><div class="grid gap-3 sm:grid-cols-3">${p.checks.map(t=>`<div class="flex items-start gap-2 text-sm font-bold text-brand-deep">${icon('circle-check','mt-0.5 w-4 h-4 shrink-0 text-emerald-600')}<span>${t}</span></div>`).join('')}</div></div>

      <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">Program summary</h3><p class="mt-4 text-base leading-8 text-slate-600">${p.summary}</p><div class="mt-7 grid gap-4 sm:grid-cols-2"><div class="img-zoom overflow-hidden rounded-[1.8rem]"><img src="${p.gallery[1]}" class="h-64 w-full object-cover" alt="Program support placeholder"></div><div class="img-zoom overflow-hidden rounded-[1.8rem]"><img src="${p.gallery[2]}" class="h-64 w-full object-cover" alt="Community support placeholder"></div></div></section>

      <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">Related programs</h3><div class="mt-6 grid gap-4 md:grid-cols-3">${relatives.map(([rid,r])=>`<a href="#/${rid}" class="float-card rounded-[1.6rem] border border-brand-navy/10 bg-white p-6 shadow-sm"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(r.icon,'w-5 h-5')}</span><div class="mt-4 text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${r.tag}</div><h4 class="mt-2 font-display text-xl leading-tight text-brand-deep">${r.title}</h4><span class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View program ${icon('arrow-up-right','w-3.5 h-3.5')}</span></a>`).join('')}</div></section>

      <section class="mt-12 grid gap-10 lg:grid-cols-[.92fr_1.08fr]"><div><h3 class="font-display text-3xl text-brand-deep">Our approach</h3><p class="mt-4 text-base leading-8 text-slate-600">${p.approach}</p><div class="mt-7 flex flex-wrap gap-3">${button('Ask about this program','#/contact','dark')}${button('Support this work','#/donate','outline')}</div></div><div class="rounded-[2rem] bg-brand-deep p-7 text-white"><div class="eyebrow text-brand-orange">How we work</div><div class="mt-6 grid gap-4">${p.process.map((t,i)=>`<div class="flex gap-3"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-extrabold text-brand-orange">${i+1}</span><p class="pt-1 text-sm leading-6 text-white/70">${t}</p></div>`).join('')}</div></div></section>
    </article>
    ${ewProgramSidebar(id)}
  </div></section>

  <section class="bg-brand-mist py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid overflow-hidden rounded-[2.6rem] bg-brand-deep text-white lg:grid-cols-[1fr_.8fr]"><div class="p-8 sm:p-12"><div class="eyebrow text-brand-orange">Take the next step</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Help strengthen ${p.title.toLowerCase()}.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">Contribute time, expertise, partnership, materials or financial support to help Eagle’s Wings develop responsible, practical services.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Donate','#/donate','outline')}</div></div><div class="relative min-h-[330px]"><img src="${p.gallery[3]}" class="absolute inset-0 h-full w-full object-cover opacity-70" alt="Community support"><div class="absolute inset-0 bg-gradient-to-r from-brand-deep/60 to-transparent"></div></div></div></div></section>`;
}

programRouteIds.forEach(id=>{ EWPages[id]=()=>programDetailsPage(id); });

function wireProgramDetailLinks(){
  if(route()!=='programs') return;
  const links=[...document.querySelectorAll('.program-service-card a')];
  programRouteIds.forEach((id,i)=>{ if(links[i]){links[i].href=`#/${id}`;links[i].innerHTML=`View details ${icon('arrow-up-right','w-3.5 h-3.5')}`;} });
  if(window.lucide) lucide.createIcons();
}

window.addEventListener('hashchange',()=>setTimeout(wireProgramDetailLinks,0));
if(typeof render==='function'){ render(); setTimeout(()=>{wireProgramDetailLinks();window.EWWire?.();},0); }
