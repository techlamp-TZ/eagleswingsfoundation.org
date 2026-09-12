/* Programs/Services page inspiration 1
   Adapted from the latest user-provided Services mockup.
   Layout ideas are borrowed while all program content stays grounded in Eagle's Wings Foundation Tanzania.
   No beneficiary testimonials, fake statistics, donor figures, or named volunteers are invented. */

EWPages.programs=()=>{
  const helpSteps=[
    ['user-round-plus','Volunteer with purpose','Offer time, skills and practical support across programs, events and outreach.'],
    ['brain','Grow awareness','Help communities understand neuro-diversity with respectful, practical information.'],
    ['heart-pulse','Strengthen care','Support families and caregivers with useful guidance for children and older people.'],
    ['sparkles','Build independence','Back life-skills learning that strengthens confidence, participation and everyday ability.']
  ];

  const servicePhotos=[photos.people,photos.child,photos.care,photos.learning,photos.family];
  const storyTopics=[
    ['Neuro-diversity','Making inclusion practical in everyday communities',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Practical ways to keep older people engaged',photos.care]
  ];

  return `
  <section class="programs-breadcrumb relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover opacity-40" alt="Eagle's Wings Foundation programs"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.92),rgba(0,31,61,.56),rgba(0,31,61,.72))]"></div></div>
    <div class="relative mx-auto flex min-h-[330px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">What we do</div><h1 class="mt-4 font-display text-5xl sm:text-6xl">Programs & Services</h1><p class="mt-3 text-sm text-white/60">Home · Programs</p></div></div>
  </section>

  <section class="programs-paper relative overflow-hidden bg-[#f5fbf8] py-24">
    <div class="programs-symbol programs-symbol-a">${icon('heart-handshake','w-16 h-16')}</div><div class="programs-symbol programs-symbol-b">${icon('gift','w-16 h-16')}</div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('How we help','Empowering change one step at a time.','A clear pathway helps visitors understand how time, knowledge and support become practical action for families and communities.','center')}
      <div class="programs-steps relative mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">${helpSteps.map(([i,t,d],x)=>`<article class="${x===1?'programs-step-feature bg-brand-deep text-white':'bg-white text-brand-deep'} relative rounded-[1.8rem] border border-brand-navy/10 p-7 shadow-sm"><span class="grid h-12 w-12 place-items-center rounded-full ${x===1?'bg-brand-orange text-white':'bg-brand-mist text-brand-navy'}">${icon(i)}</span><div class="mt-6 text-[10px] font-extrabold uppercase tracking-[.18em] ${x===1?'text-brand-orange':'text-slate-400'}">Step ${x+1}</div><h3 class="mt-2 font-display text-2xl leading-tight">${t}</h3><p class="mt-3 text-sm leading-6 ${x===1?'text-white/60':'text-slate-500'}">${d}</p></article>`).join('')}</div>
      <div class="mt-10 text-center">${button('Get involved','#/get-involved','dark')}</div>
    </div>
  </section>

  <section class="programs-service-dark relative overflow-hidden bg-[#081b15] py-24 text-white">
    <div class="absolute inset-0"><img src="${photos.child}" class="h-full w-full object-cover opacity-[.16]" alt="Programs background"><div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,21,.96),rgba(8,27,21,.89))]"></div></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Our programs','Making a difference through connected services.','The Foundation’s five verified program areas combine awareness, education, life-skills development and caregiver support.','center').replaceAll('text-brand-deep','text-white').replaceAll('text-slate-600','text-white/55')}
      <div class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">${programs.map((p,i)=>`<article class="program-service-card group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[.06]"><div class="img-zoom relative overflow-hidden"><img src="${servicePhotos[i]}" class="h-44 w-full object-cover" alt="${p.title}"><span class="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-brand-orange text-white shadow-lg">${icon(p.icon,'w-4 h-4')}</span></div><div class="p-5"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${p.tag}</div><h3 class="mt-2 font-display text-xl leading-tight">${p.title}</h3><p class="mt-3 text-xs leading-6 text-white/55">${p.short}</p><a href="#/contact" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-emerald-300">Ask about this ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="programs-cta relative overflow-hidden rounded-[2.7rem] bg-brand-deep text-white shadow-soft"><img src="${photos.family}" class="absolute inset-0 h-full w-full object-cover object-center opacity-55" alt="Family and community"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98)_0%,rgba(0,31,61,.86)_50%,rgba(0,31,61,.25)_100%)]"></div><div class="programs-brush absolute right-[8%] top-0 h-full w-[36%] bg-brand-orange/80"></div><div class="relative max-w-2xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Join the mission</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Together we can rewrite what support looks like.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">Contribute time, expertise, resources, partnership or financial support to help grow practical, dignified and inclusive programs.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Support a program','#/donate','outline')}</div></div></div></div>
  </section>

  <section class="py-10 pb-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8"><div>${sectionHead('Impact & learning','Stories of impact and hope—when verified.','The reference includes beneficiary testimonials. Eagle’s Wings will publish only consent-based, verified stories after its reporting and approval processes are ready.')}<div class="mt-8 rounded-[2rem] border border-brand-navy/10 bg-white p-7 shadow-card"><div class="flex items-start gap-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon('quote','w-5 h-5')}</span><div><div class="text-sm font-extrabold text-brand-deep">Verified story library in preparation</div><p class="mt-3 text-sm leading-7 text-slate-600">Future stories will explain what changed, why it mattered and how consent was obtained—without exaggerating results or inventing beneficiary voices.</p><a href="#/impact" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange">See our impact framework ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div></div></div><div class="relative"><div class="img-zoom overflow-hidden rounded-[2.6rem] shadow-soft"><img src="${photos.people}" class="h-[470px] w-full object-cover" alt="Community and caregiver support"></div><div class="absolute -bottom-5 -left-5 rounded-2xl bg-brand-deep p-5 text-white shadow-card"><div class="eyebrow text-brand-orange">Evidence first</div><p class="mt-2 max-w-[220px] text-sm leading-6 text-white/65">Reach, learning, practice and participant experience will be reported once verified.</p></div></div></div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Knowledge & updates','Empowering voices through useful, approved content.','The mockup’s story cards are adapted into future learning themes linked to the Foundation’s real program areas.')}<div>${button('Browse resources','#/resources','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${storyTopics.map(([tag,title,img])=>`<article class="overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-60 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned educational content will be published after Foundation review and approval.</p><div class="mt-5 flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Planned topic</span><a href="#/resources" class="text-xs font-extrabold text-brand-navy">Explore ${icon('arrow-up-right','inline w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>`;
};

if(typeof render==='function') render();
