/* Homepage inspiration v4
   Adapted from the latest user-provided charity mockup.
   We borrow layout/interaction ideas only. No beneficiary stories, donation totals,
   impact percentages, testimonials, or named volunteers are invented. */

home = function(){
  const serviceCards = [
    ['user-round-plus','Become a volunteer','Offer time and practical support across programs, outreach and events.','#/get-involved'],
    ['house-heart','Support families','Help strengthen parents, caregivers and households with practical guidance.','#/programs'],
    ['heart-pulse','Healthy ageing','Support dignified care, movement, nutrition and mental stimulation for older people.','#/programs'],
    ['sparkles','Build life skills','Back learning that strengthens confidence, participation and everyday independence.','#/programs']
  ];

  const causeCards = [
    {tag:'Awareness',title:'Neuro-diversity awareness',text:'Community education around Autism, ADHD, Down syndrome and intellectual disability.',img:photos.child,icon:'brain'},
    {tag:'Care',title:'Healthy ageing support',text:'Practical support for older people and the families and caregivers around them.',img:photos.care,icon:'heart-pulse'},
    {tag:'Education',title:'Family education & therapy guidance',text:'Useful, respectful learning around neurological conditions, therapy exercises and parenting.',img:photos.family,icon:'book-heart'},
    {tag:'Skills',title:'Life-skills development',text:'Structured learning that helps young people practise independence, communication and daily routines.',img:photos.learning,icon:'sparkles'}
  ];

  const articleCards = [
    ['Neuro-diversity','Making inclusion practical in everyday communities',photos.child],
    ['Caregiving','Supporting families with dignity, consistency and empathy',photos.family],
    ['Healthy ageing','Simple ways to keep older people engaged and active',photos.care]
  ];

  const volunteerRoles = [
    ['calendar-heart','Events & outreach','Support awareness events, participant registration and community engagement.'],
    ['messages-square','Communications','Help shape approved awareness content, updates and digital storytelling.'],
    ['hand-heart','Program support','Assist with practical activities, logistics and participant support.'],
    ['badge-dollar-sign','Fundraising support','Help with sponsor outreach, donor stewardship and campaign coordination.']
  ];

  return `
  <section class="v4-paper py-6 sm:py-8 lg:py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="v4-hero-card relative isolate overflow-hidden rounded-[2.4rem] bg-brand-deep text-white shadow-[0_28px_90px_rgba(0,31,61,.22)]">
        <div class="absolute inset-0"><img src="${photos.hero}" class="h-full w-full object-cover object-center opacity-35" alt="Eagle's Wings Foundation community support"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98)_0%,rgba(0,31,61,.86)_48%,rgba(0,31,61,.34)_75%,rgba(0,31,61,.64)_100%)]"></div></div>
        <div class="v4-brush absolute right-[8%] top-[13%] h-[74%] w-[36%] bg-brand-orange"></div>
        <button type="button" aria-label="Previous hero story" class="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-deep shadow-lg sm:left-6">${icon('chevron-left','w-5 h-5')}</button>
        <button type="button" aria-label="Next hero story" class="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-deep shadow-lg sm:right-6">${icon('chevron-right','w-5 h-5')}</button>
        <div class="relative z-10 grid min-h-[560px] items-center gap-10 px-8 py-16 sm:px-14 lg:grid-cols-[1.05fr_.95fr] lg:px-20">
          <div class="max-w-2xl">
            <div class="eyebrow flex items-center gap-2 text-brand-orange">${icon('heart-handshake','w-4 h-4')} Eagle’s Wings Foundation Tanzania</div>
            <h1 class="mt-5 font-display text-5xl leading-[.97] sm:text-6xl lg:text-[4.9rem]">Empowering lives through<br><span class="text-brand-orange">compassion and unity.</span></h1>
            <p class="mt-6 max-w-xl text-base leading-8 text-white/72">We support children, older people, families and caregivers through awareness, practical education, life-skills learning and caregiver development.</p>
            <div class="mt-8 flex flex-wrap gap-3">${button('Explore our work','#/programs')}${button('Get involved','#/get-involved','outline')}</div>
          </div>
          <div class="relative hidden min-h-[430px] lg:block"><div class="absolute bottom-0 right-2 h-[400px] w-[330px] overflow-hidden rounded-[45%_45%_18%_18%/32%_32%_12%_12%] border-[8px] border-white/15 bg-white/10 shadow-2xl"><img src="${photos.child}" class="h-full w-full object-cover" alt="Child support"></div></div>
        </div>
        <div class="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2"><span class="h-2 w-7 rounded-full bg-brand-orange"></span><span class="h-2 w-2 rounded-full bg-white/45"></span><span class="h-2 w-2 rounded-full bg-white/45"></span></div>
      </div>
    </div>
  </section>

  <section class="home-paper py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
      <div>${sectionHead('Our mission','Driving change with compassion.','Eagle’s Wings Foundation Tanzania works to improve the lives of people with disabilities and challenges, particularly children and older people, by combining awareness, practical learning, life skills and caregiver support.')}
        <div class="mt-8 grid gap-4 sm:grid-cols-3">${[
          ['brain','Awareness','Understand'],['users-round','Caregivers','Equip'],['sparkles','Life skills','Strengthen']
        ].map(([i,t,s])=>`<div class="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><span class="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-brand-orange">${icon(i,'w-4 h-4')}</span><div class="mt-4 text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-400">${s}</div><h3 class="mt-1 font-display text-xl text-brand-deep">${t}</h3></div>`).join('')}</div>
        <div class="mt-8 flex items-center gap-4 rounded-2xl bg-brand-mist p-5"><span class="grid h-12 w-12 place-items-center rounded-full bg-brand-navy text-white">${icon('map-pin','w-5 h-5')}</span><div><div class="text-xs font-extrabold uppercase tracking-[.15em] text-brand-orange">Community base</div><div class="mt-1 font-bold text-brand-deep">Tegeta, Dar es Salaam · Founded 2025</div></div></div>
      </div>
      <div class="relative min-h-[520px]">
        <div class="absolute left-0 top-8 w-[62%] overflow-hidden rounded-[2.3rem] shadow-soft"><img src="${photos.family}" class="h-[420px] w-full object-cover" alt="Families and community"></div>
        <div class="absolute right-0 top-0 w-[48%] overflow-hidden rounded-[2rem] border-[8px] border-white shadow-card"><img src="${photos.care}" class="h-64 w-full object-cover" alt="Care and support"></div>
        <div class="absolute bottom-0 right-5 w-[50%] overflow-hidden rounded-[2rem] border-[8px] border-white shadow-card"><img src="${photos.child}" class="h-64 w-full object-cover" alt="Child support"></div>
        <div class="absolute bottom-12 left-[42%] grid h-20 w-20 place-items-center rounded-full border-[7px] border-white bg-brand-orange text-white shadow-soft">${icon('heart','w-7 h-7')}</div>
      </div>
    </div>
  </section>

  <section class="v4-service-stage relative overflow-hidden py-24 text-white">
    <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover opacity-20" alt="Community"><div class="absolute inset-0 bg-brand-deep/95"></div></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Our services','Making a difference through focused support.','Four clear entry points help visitors quickly understand how they can participate in the mission.','center').replaceAll('text-brand-deep','text-white').replaceAll('text-slate-600','text-white/55')}
      <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">${serviceCards.map(([i,t,d,h],x)=>`<a href="${h}" class="group overflow-hidden rounded-[1.7rem] border ${x===2?'border-brand-orange bg-brand-orange text-white':'border-white/10 bg-white/[.055] text-white'} p-6 transition hover:-translate-y-1"><div class="flex items-center justify-between"><span class="grid h-12 w-12 place-items-center rounded-full ${x===2?'bg-white text-brand-orange':'bg-white/10 text-brand-orange'}">${icon(i)}</span><span class="text-xs font-extrabold text-white/35">0${x+1}</span></div><h3 class="mt-8 font-display text-2xl">${t}</h3><p class="mt-3 text-sm leading-6 ${x===2?'text-white/80':'text-white/55'}">${d}</p><span class="mt-6 inline-flex items-center gap-1 text-xs font-extrabold ${x===2?'text-white':'text-brand-orange'}">Explore ${icon('arrow-up-right','w-3.5 h-3.5')}</span></a>`).join('')}</div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Priority programs','Championing causes that inspire change.','The horizontal campaign rail is inspired by the reference. We keep it grounded in real Eagle’s Wings program areas and avoid invented financial targets.')}<div>${button('View all programs','#/programs','dark')}</div></div>
      <div class="v4-rail mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">${causeCards.map(c=>`<article class="min-w-[82%] snap-start overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card sm:min-w-[48%] xl:min-w-[32%]"><div class="img-zoom relative overflow-hidden"><img src="${c.img}" class="h-64 w-full object-cover" alt="${c.title}"><span class="absolute right-5 top-5 rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-white">${c.tag}</span></div><div class="p-6"><div class="flex items-start gap-3"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(c.icon)}</span><div><h3 class="font-display text-2xl text-brand-deep">${c.title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${c.text}</p></div></div><div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5"><span class="text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-400">Open for support</span><a href="#/programs" class="text-xs font-extrabold text-brand-navy">View details ${icon('arrow-up-right','inline w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
      <div class="mt-4 flex justify-center gap-2"><span class="h-2 w-8 rounded-full bg-brand-navy"></span><span class="h-2 w-2 rounded-full bg-brand-navy/20"></span><span class="h-2 w-2 rounded-full bg-brand-navy/20"></span></div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Stories & learning','Explore inspiring stories and latest updates.','We are preparing consented stories and reviewed educational content. These cards show the planned editorial structure, not invented beneficiary accounts.')}<div>${button('Explore resources','#/resources','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${articleCards.map(([tag,title,img])=>`<article class="group overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-sm"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-60 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned editorial content will be published after Foundation review and approval.</p><div class="mt-5 flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Planned topic</span><a href="#/blog" class="text-xs font-extrabold text-brand-navy">Explore ${icon('arrow-up-right','inline w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Volunteer with us','Bring your skills to a mission that values practical contribution.','The inspiration uses named volunteers; we keep the same card rhythm while showing real volunteer pathways until approved profiles are available.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${volunteerRoles.map(([i,t,d],x)=>`<article class="float-card rounded-[1.7rem] bg-white p-5 shadow-card"><div class="grid h-52 place-items-center overflow-hidden rounded-[1.35rem] ${x%2?'bg-orange-50':'bg-emerald-50'}"><span class="grid h-24 w-24 place-items-center rounded-full ${x%2?'bg-brand-orange':'bg-emerald-700'} text-white shadow-soft">${icon(i,'w-9 h-9')}</span></div><h3 class="mt-5 font-display text-2xl text-brand-deep">${t}</h3><p class="mt-2 text-sm leading-6 text-slate-500">${d}</p></article>`).join('')}</div><div class="mt-10 text-center">${button('Register your interest','#/get-involved','dark')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="v4-cta relative overflow-hidden rounded-[2.8rem] bg-brand-deep text-white"><img src="${photos.child}" class="absolute inset-0 h-full w-full object-cover opacity-45" alt="Child and community"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98)_0%,rgba(0,31,61,.84)_55%,rgba(0,31,61,.20)_100%)]"></div><div class="v4-cta-brush absolute right-0 top-0 h-full w-[42%] bg-brand-orange"></div><div class="relative max-w-2xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Take action</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Together we can rewrite what support looks like.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">Bring your time, expertise, network, resources or financial support to a mission focused on inclusion, practical learning and dignified care.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Partner with us','#/partners','outline')}</div></div></div></div>
  </section>

  <section class="relative overflow-hidden bg-[#071812] py-24 text-white">
    <div class="absolute inset-0"><img src="${photos.care}" class="h-full w-full object-cover opacity-20" alt="Caregiver support"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,18,.98),rgba(7,24,18,.82),rgba(7,24,18,.62))]"></div></div>
    <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><div><div class="eyebrow text-emerald-400">Impact stories</div><h2 class="mt-4 font-display text-4xl sm:text-5xl">Client experiences will be published with consent.</h2><p class="mt-5 max-w-xl leading-7 text-white/60">The reference includes a testimonial carousel. We preserve that storytelling pattern but do not fabricate a quote, person or outcome. Verified stories can be added here after consent and review.</p></div><div class="rounded-[2rem] bg-white p-7 text-brand-deep shadow-2xl sm:p-9"><div class="flex items-center justify-between"><div class="flex gap-1 text-brand-orange">${[1,2,3,4,5].map(()=>icon('star','w-4 h-4 fill-current')).join('')}</div><span class="font-display text-5xl leading-none text-brand-orange/60">“</span></div><h3 class="mt-4 font-display text-3xl">Verified story placeholder</h3><p class="mt-4 leading-7 text-slate-600">Approved family, caregiver or beneficiary feedback will appear here. Until then, the interface clearly communicates that testimonial content is pending.</p><div class="mt-6 flex items-center gap-3"><span class="grid h-11 w-11 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon('shield-check','w-5 h-5')}</span><div><div class="text-sm font-extrabold">Consent-first storytelling</div><div class="text-xs text-slate-400">No fabricated identities or quotations</div></div></div></div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Knowledge & updates','Empowering voices through transformative stories.','A magazine-style closing section gives the homepage more editorial depth while we build the real content library.')}<div>${button('Browse all news','#/blog','dark')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-[1fr_.65fr]">
        <div class="grid gap-6 sm:grid-cols-2">${articleCards.slice(0,2).map(([tag,title,img])=>`<article class="overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-64 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned educational content pending review.</p></div></article>`).join('')}</div>
        <div class="rounded-[1.8rem] bg-brand-mist p-5">${[
          ['Families','Creating routines that support participation',photos.family],['Caregivers','Practical learning for stronger daily support',photos.care],['Community','Awareness that reduces stigma',photos.people],['Life skills','Building confidence through repetition',photos.learning]
        ].map(([tag,title,img],i)=>`<a href="#/blog" class="grid grid-cols-[92px_1fr] gap-4 ${i?'border-t border-brand-navy/10':''} py-4"><img src="${img}" class="h-20 w-full rounded-xl object-cover" alt="${title}"><div><div class="text-[9px] font-extrabold uppercase tracking-[.14em] text-brand-orange">${tag}</div><h3 class="mt-1 font-display text-lg leading-tight text-brand-deep">${title}</h3><div class="mt-2 text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Planned topic</div></div></a>`).join('')}</div>
      </div>
    </div>
  </section>`;
};

if (typeof render === 'function') render();
