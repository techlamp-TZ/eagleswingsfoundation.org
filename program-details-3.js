/* Program detail v3 — adapted from the latest Education Initiatives / donation-details mockup.
   The design borrows the editorial + sticky giving sidebar + embedded support form composition.
   Content remains specific to Eagle's Wings Foundation Tanzania. No donor names, donation totals,
   progress percentages, beneficiary outcomes, trainers, payment capabilities or partner logos are fabricated. */

function ewProgram3Meta(id){
  const map={
    'program-neurodiversity':{
      audience:'Families, caregivers, schools & communities',
      delivery:'Awareness sessions, practical education & referral guidance',
      support:['Community learning materials','Venue and outreach support','Accessible awareness resources','Professional review of educational content'],
      question:'How can communities make inclusion more practical?',
      tips:['Use respectful, person-centred language and avoid reducing people to a diagnosis.','Turn awareness into practical adjustments in communication, routines and participation.']
    },
    'program-elderly-care':{
      audience:'Older people, families & caregivers',
      delivery:'Healthy-ageing education, caregiver guidance & practical routines',
      support:['Healthy-ageing learning materials','Caregiver learning sessions','Community activity resources','Professional referral and education links'],
      question:'How can families support healthy ageing with dignity?',
      tips:['Build simple routines around nutrition, safe movement and meaningful engagement.','Use professional assessment when medical, cognitive or safeguarding concerns need specialist review.']
    },
    'program-education-therapy':{
      audience:'Parents, families & caregivers',
      delivery:'Accessible education, therapy guidance & specialized-parenting support',
      support:['Family learning resources','Demonstration and facilitation materials','Accessible educational content','Professional content review and referral links'],
      question:'How can families turn complex guidance into everyday support?',
      tips:['Break guidance into clear, realistic steps that families can understand and repeat.','Keep educational guidance separate from diagnosis and individualized clinical treatment.']
    },
    'program-life-skills':{
      audience:'Autistic young people, families & caregivers',
      delivery:'Structured practice, repeatable routines & family reinforcement',
      support:['Life-skills activity resources','Facilitation and learning materials','Accessible practice tools','Family reinforcement resources'],
      question:'How can practical skills become repeatable everyday routines?',
      tips:['Choose skills that matter in daily life and break them into achievable steps.','Practise consistently with supportive feedback and adapt the routine to the learner.']
    },
    'program-caregiver-training':{
      audience:'Family, volunteer & professional caregivers',
      delivery:'Scenario-based learning, practical routines & responsible escalation',
      support:['Training materials and facilitation','Scenario and case-based learning resources','Documentation and observation tools','Professional safeguarding and referral guidance'],
      question:'What helps caregivers provide more consistent support?',
      tips:['Build shared routines around respectful communication, observation and documentation.','Keep clear boundaries for medical, specialist and safeguarding escalation.']
    }
  };
  return map[id]||map['program-neurodiversity'];
}

function ewProgram3Sidebar(id){
  const p=EWProgramDetails[id],m=ewProgram3Meta(id);
  const others=programRouteIds.filter(x=>x!==id).slice(0,3).map(x=>EWProgramDetails[x]);
  return `<aside class="program3-sidebar space-y-5 lg:sticky lg:top-28 lg:self-start">
    <div class="program3-gift rounded-[1.7rem] bg-[#fff5c7] p-6 text-center shadow-card">
      <span class="mx-auto grid h-14 w-14 place-items-center rounded-full border border-brand-orange/25 bg-white text-brand-orange">${icon('heart-handshake','w-6 h-6')}</span>
      <div class="mt-5 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">Support this area</div>
      <h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">Help strengthen ${p.title.toLowerCase()}.</h3>
      <p class="mt-3 text-sm leading-6 text-slate-600">Choose financial, in-kind, volunteer or professional support. Public fundraising targets will appear only after approval.</p>
      <a href="#program3-support" class="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-xs font-extrabold text-white">Choose support ${icon('arrow-down','w-3.5 h-3.5')}</a>
    </div>

    <div class="rounded-[1.7rem] bg-brand-mist p-6 shadow-sm">
      <div class="eyebrow text-brand-orange">Useful support</div>
      <div class="mt-4 grid gap-3">${m.support.slice(0,3).map((t,i)=>`<div class="flex gap-3"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-navy shadow-sm">${icon(['book-open-check','package-open','briefcase-business'][i],'w-4 h-4')}</span><p class="pt-1 text-xs font-bold leading-5 text-brand-deep">${t}</p></div>`).join('')}</div>
    </div>

    <div class="rounded-[1.7rem] bg-brand-mist p-6 shadow-sm">
      <div class="eyebrow text-brand-orange">Related programs</div>
      <div class="mt-4 grid gap-3">${programRouteIds.filter(x=>x!==id).slice(0,3).map(rid=>{const x=EWProgramDetails[rid];return `<a href="#/${rid}" class="group flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(x.icon,'w-4 h-4')}</span><div class="min-w-0"><div class="text-[9px] font-extrabold uppercase tracking-[.14em] text-brand-orange">${x.tag}</div><div class="mt-1 text-xs font-extrabold leading-5 text-brand-deep">${x.title}</div></div>${icon('arrow-up-right','ml-auto w-3.5 h-3.5 text-slate-300 group-hover:text-brand-orange')}</a>`}).join('')}</div>
    </div>

    <div class="overflow-hidden rounded-[1.7rem] bg-brand-deep text-white shadow-card">
      <div class="relative h-40"><img src="${p.gallery[3]}" class="h-full w-full object-cover opacity-55" alt="Community participation"><div class="absolute inset-0 bg-gradient-to-t from-brand-deep to-transparent"></div></div>
      <div class="p-6"><div class="eyebrow text-brand-orange">Monthly support</div><h3 class="mt-3 font-display text-2xl">Build dependable support over time.</h3><p class="mt-3 text-sm leading-6 text-white/55">Recurring giving is planned for activation after secure payment onboarding and approval.</p><a href="#program3-support" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange">Explore giving options ${icon('arrow-down','w-3.5 h-3.5')}</a></div>
    </div>
  </aside>`;
}

function programDetailsPage(id){
  const p=EWProgramDetails[id],m=ewProgram3Meta(id);
  const relatives=programRouteIds.filter(x=>x!==id).slice(0,3).map(x=>[x,EWProgramDetails[x]]);
  return `
  <section class="program3-hero relative isolate overflow-hidden text-white">
    <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover grayscale" alt="Eagle's Wings programs"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.70),rgba(0,31,61,.36))]"></div></div>
    <div class="program3-swash absolute -left-24 bottom-0 h-36 w-80 bg-brand-orange"></div>
    <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Program detail</div><h1 class="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">${p.title}</h1><div class="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/55"><a href="#/home" class="hover:text-white">Home</a><span>•</span><a href="#/causes" class="hover:text-white">Support Areas</a><span>•</span><span>${p.tag}</span></div></div></div>
  </section>

  <section class="program3-paper py-20 lg:py-24"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
    <article class="min-w-0">
      <div class="overflow-hidden rounded-[2rem] bg-white shadow-soft"><div class="img-zoom overflow-hidden"><img src="${p.hero}" class="h-[360px] w-full object-cover sm:h-[500px]" alt="${p.title}"></div><div class="p-6 sm:p-8 lg:p-10">
        <div class="flex flex-wrap items-center gap-3"><span class="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${icon(p.icon,'w-3.5 h-3.5')}${p.tag}</span><span class="rounded-full bg-brand-mist px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-navy">Verified program area</span></div>
        <h2 class="mt-5 font-display text-4xl leading-tight text-brand-deep sm:text-5xl">${p.title}</h2><p class="mt-5 text-lg leading-8 text-slate-600">${p.intro}</p>
        <div class="mt-7 grid gap-4 rounded-[1.6rem] bg-brand-mist p-5 sm:grid-cols-2"><div><div class="text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-400">Primary audience</div><div class="mt-2 text-sm font-extrabold leading-6 text-brand-deep">${m.audience}</div></div><div><div class="text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-400">Delivery model</div><div class="mt-2 text-sm font-extrabold leading-6 text-brand-deep">${m.delivery}</div></div></div>
      </div></div>

      <section class="mt-10 rounded-[2rem] bg-white p-6 shadow-card sm:p-8"><h3 class="font-display text-3xl text-brand-deep">About this program</h3><p class="mt-4 text-base leading-8 text-slate-600">${p.summary}</p><div class="mt-7 grid gap-3 sm:grid-cols-3">${p.checks.map(t=>`<div class="flex items-start gap-2 rounded-xl bg-brand-mist p-4 text-sm font-bold text-brand-deep">${icon('circle-check','mt-0.5 w-4 h-4 shrink-0 text-emerald-600')}<span>${t}</span></div>`).join('')}</div></section>

      <section class="mt-10 rounded-[2rem] bg-white p-6 shadow-card sm:p-8"><h3 class="font-display text-3xl text-brand-deep">What support can enable</h3><p class="mt-4 text-base leading-8 text-slate-600">Support for this area can strengthen the practical resources and delivery capacity around the program without implying results that have not yet been measured.</p><div class="mt-6 grid gap-3 sm:grid-cols-2">${m.support.map(t=>`<div class="flex gap-3 rounded-xl border border-brand-navy/10 p-4"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon('check','w-3.5 h-3.5')}</span><p class="pt-1 text-sm font-bold leading-6 text-brand-deep">${t}</p></div>`).join('')}</div></section>

      <section class="mt-10"><h3 class="font-display text-3xl text-brand-deep">${m.question}</h3><p class="mt-4 text-base leading-8 text-slate-600">${p.approach}</p><div class="mt-7 grid gap-5 sm:grid-cols-[1fr_.9fr]"><div class="rounded-[1.8rem] bg-brand-mist p-6">${m.tips.map((t,i)=>`<div class="${i?'mt-5 border-t border-brand-navy/10 pt-5':''}"><div class="text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-orange">0${i+1}</div><p class="mt-2 text-sm font-bold leading-7 text-brand-deep">${t}</p></div>`).join('')}</div><div class="img-zoom overflow-hidden rounded-[1.8rem] shadow-card"><img src="${p.gallery[1]}" class="h-full min-h-[280px] w-full object-cover" alt="Program support illustration"></div></div></section>

      <section class="mt-10 rounded-[2rem] bg-brand-deep p-7 text-white sm:p-9"><div class="eyebrow text-brand-orange">How we work</div><h3 class="mt-3 font-display text-3xl">A practical, responsible program pathway.</h3><div class="mt-7 grid gap-4 sm:grid-cols-2">${p.process.map((t,i)=>`<div class="flex gap-3 rounded-[1.2rem] border border-white/10 bg-white/[.04] p-4"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-extrabold text-brand-orange">${i+1}</span><p class="pt-1 text-sm leading-6 text-white/70">${t}</p></div>`).join('')}</div></section>

      <section class="mt-10 rounded-[2rem] border border-brand-orange/15 bg-[#fff5c7] p-6 sm:p-8"><div class="flex flex-col gap-6 sm:flex-row sm:items-center"><span class="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white text-brand-navy shadow-card">${icon('stethoscope','w-8 h-8')}</span><div><div class="eyebrow text-brand-orange">Professional boundaries</div><h3 class="mt-2 font-display text-2xl text-brand-deep">Education and support do not replace individualized clinical care.</h3><p class="mt-3 text-sm leading-6 text-slate-600">Where medical, diagnostic, therapy, safeguarding or specialist decisions are required, families and caregivers should use appropriately qualified professionals.</p></div></div></section>

      <section id="program3-support" class="mt-12 scroll-mt-28 rounded-[2.2rem] bg-brand-mist p-6 shadow-card sm:p-8 lg:p-10"><div class="eyebrow text-brand-orange">Support this program</div><h2 class="mt-3 font-display text-4xl text-brand-deep">Choose how you would like to contribute.</h2><p class="mt-4 max-w-2xl text-sm leading-7 text-slate-600">This is a frontend support interface. No payment is processed and no financial credentials are collected until approved payment channels are activated.</p>
        <form onsubmit="event.preventDefault();alert('This support form is currently a frontend preview. Live giving will activate after approved payment onboarding.')" class="mt-8">
          <div class="grid gap-7 lg:grid-cols-[.95fr_1.05fr]"><div><div class="text-xs font-extrabold uppercase tracking-[.14em] text-slate-400">Giving preference</div><div class="mt-3 flex flex-wrap gap-2"><button type="button" onclick="ewProgram3Gift(this)" class="p3-gift rounded-full bg-brand-navy px-5 py-2.5 text-xs font-extrabold text-white">One-time</button><button type="button" onclick="ewProgram3Gift(this)" class="p3-gift rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-extrabold text-slate-500">Monthly</button><button type="button" onclick="ewProgram3Gift(this)" class="p3-gift rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-extrabold text-slate-500">In-kind / expertise</button></div><div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">${['25,000','50,000','100,000','250,000'].map((a,i)=>`<button type="button" onclick="ewProgram3Amount(this)" class="p3-amount rounded-xl border ${i===2?'border-brand-orange bg-brand-orange text-white':'border-slate-200 bg-white text-slate-600'} px-3 py-3 text-xs font-extrabold">TZS ${a}</button>`).join('')}</div><input class="mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-brand-navy" placeholder="Other amount or in-kind contribution"></div>
          <div><div class="grid gap-3 sm:grid-cols-2"><input class="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-brand-navy" placeholder="First name"><input class="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-brand-navy" placeholder="Last name"><input type="email" class="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-brand-navy sm:col-span-2" placeholder="Email address"><textarea class="min-h-24 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-brand-navy sm:col-span-2" placeholder="Optional message"></textarea></div></div></div>
          <div class="mt-7 flex flex-col gap-4 border-t border-brand-navy/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><div class="flex flex-wrap gap-2">${[['smartphone','Mobile Money'],['credit-card','Card'],['landmark','Bank transfer']].map(([i,t])=>`<span class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-slate-500">${icon(i,'w-3.5 h-3.5 text-brand-orange')}${t} · planned</span>`).join('')}</div><button class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3.5 text-xs font-extrabold text-white">Continue when active ${icon('lock-keyhole','w-4 h-4')}</button></div>
        </form>
      </section>

      <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">Related support areas</h3><div class="mt-6 grid gap-4 md:grid-cols-3">${relatives.map(([rid,r])=>`<a href="#/${rid}" class="float-card rounded-[1.6rem] border border-brand-navy/10 bg-white p-6 shadow-sm"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(r.icon,'w-5 h-5')}</span><div class="mt-4 text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${r.tag}</div><h4 class="mt-2 font-display text-xl leading-tight text-brand-deep">${r.title}</h4><span class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View program ${icon('arrow-up-right','w-3.5 h-3.5')}</span></a>`).join('')}</div></section>
    </article>
    ${ewProgram3Sidebar(id)}
  </div></section>`;
}

window.ewProgram3Amount=(btn)=>{document.querySelectorAll('.p3-amount').forEach(x=>x.className='p3-amount rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-extrabold text-slate-600');btn.className='p3-amount rounded-xl border border-brand-orange bg-brand-orange px-3 py-3 text-xs font-extrabold text-white';};
window.ewProgram3Gift=(btn)=>{document.querySelectorAll('.p3-gift').forEach(x=>x.className='p3-gift rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-extrabold text-slate-500');btn.className='p3-gift rounded-full bg-brand-navy px-5 py-2.5 text-xs font-extrabold text-white';};

programRouteIds.forEach(id=>{EWPages[id]=()=>programDetailsPage(id);});
if(typeof render==='function'&&programRouteIds.includes(route()))render();
