/* About page inspiration 1
   Adapted from the latest supplied About Us mockup.
   The layout is inspired by the reference, but content is limited to verified Eagle's Wings information.
   No partner logos, testimonials, donation figures, or staff photos are fabricated. */

EWPages.about=()=>{
  const leadership=[
    ['Stella Paul Rweyemamu','Director','SR'],
    ['Tegemeo Paschal Nsonda','Executive Secretary','TN'],
    ['Paul Alex Rweyemamu','Treasurer','PR'],
    ['Winifrida Igembe Rweyemamu','Member','WR'],
    ['Doreen Temistocles Igembe','Member','DI']
  ];
  const partnerTypes=[
    ['building-2','Corporate partners'],['landmark','Public institutions'],['heart-handshake','NGOs & community groups'],['stethoscope','Health professionals'],['graduation-cap','Education partners']
  ];
  const plannedStories=[
    ['Neuro-diversity','How communities can make inclusion practical',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Practical ways to keep older people engaged',photos.care]
  ];
  return `
  <section class="about1-hero">
    <img src="${photos.people}" alt="Community gathering">
    <div class="relative z-10 mx-auto flex min-h-[300px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div><div class="eyebrow text-brand-orange">About Eagle’s Wings</div><h1 class="mt-3 font-display text-5xl sm:text-6xl">About us</h1><div class="mt-4 flex items-center gap-2 text-sm text-white/65"><a href="#/home" class="hover:text-white">Home</a><span>•</span><span>About us</span></div></div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
      <div>
        ${sectionHead('Our story','Driving change with compassion.','Founded in 2025 and based in Tegeta, Dar es Salaam, Eagle’s Wings Foundation Tanzania exists to improve the lives of people with disabilities and challenges, especially children and older people.')}
        <p class="mt-6 leading-8 text-slate-600">Our mission is to improve the lives of people with disabilities and challenges, particularly children and the elderly facing conditions such as Alzheimer’s and Dementia.</p>
        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          ${[['layers-3','5','Core focus areas'],['calendar-heart','2025','Founded'],['map-pin','Tegeta','Dar es Salaam']].map(([i,v,l])=>`<div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm"><span class="grid h-10 w-10 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><div class="mt-4 font-display text-3xl text-brand-deep">${v}</div><div class="mt-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-400">${l}</div></div>`).join('')}
        </div>
        <div class="mt-8 flex flex-wrap gap-3">${button('Explore our programs','#/programs','dark')}${button('Get involved','#/get-involved','outline')}</div>
      </div>
      <div class="about1-photo-stack relative z-0">
        <div class="grid grid-cols-[1.08fr_.92fr] gap-4">
          <div class="img-zoom overflow-hidden rounded-[2.2rem] shadow-soft"><img src="${photos.family}" class="h-[470px] w-full object-cover" alt="Family support"></div>
          <div class="space-y-4 pt-10"><div class="img-zoom overflow-hidden rounded-[1.9rem] shadow-card"><img src="${photos.child}" class="h-56 w-full object-cover" alt="Child support"></div><div class="rounded-[1.9rem] bg-brand-deep p-6 text-white"><div class="eyebrow text-brand-orange">Our approach</div><p class="mt-3 font-display text-2xl leading-tight">Understand first. Support practically. Grow responsibly.</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="about1-partner-strip border-y border-slate-100 py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center"><div class="eyebrow text-brand-orange">Partnership ecosystem</div><p class="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">The reference uses sponsor logos. Until Eagle’s Wings confirms approved partners, we show the types of organizations we are prepared to collaborate with.</p></div><div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${partnerTypes.map(([i,t])=>`<div class="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><span class="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-brand-orange">${icon(i,'w-4 h-4')}</span><span class="text-sm font-extrabold text-brand-deep">${t}</span></div>`).join('')}</div></div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Leadership','Meet the people guiding the mission.','The names and roles below come from the Foundation’s supplied requirements. Approved portraits can replace the initials later.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">${leadership.map(([n,r,initials],i)=>`<article class="about1-team-card rounded-[1.8rem] bg-white p-5 shadow-sm"><div class="relative grid aspect-[4/4.7] place-items-center overflow-hidden rounded-[1.4rem] ${i%2?'bg-orange-50':'bg-emerald-50'}"><div class="grid h-28 w-28 place-items-center rounded-full ${i%2?'bg-brand-orange':'bg-brand-navy'} font-display text-4xl text-white shadow-soft">${initials}</div><span class="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon('shield-check','w-4 h-4')}</span></div><h3 class="mt-5 font-display text-xl leading-tight text-brand-deep">${n}</h3><p class="mt-2 text-xs font-bold uppercase tracking-[.13em] text-slate-400">${r}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
      <div>
        ${sectionHead('Impact & hope','Stories should be powerful—and verified.','The reference includes a beneficiary testimonial. Eagle’s Wings will only publish stories after consent and verification, so this section is prepared without inventing a person or quote.')}
        <div class="mt-8 rounded-[2rem] border border-slate-100 bg-white p-7 shadow-card"><div class="flex items-start gap-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-mist text-brand-navy">${icon('quote','w-5 h-5')}</span><div><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">Consent-based story slot</div><h3 class="mt-2 font-display text-2xl text-brand-deep">Verified beneficiary stories will appear here.</h3><p class="mt-3 text-sm leading-6 text-slate-500">This card is ready for an approved story, name, role and photograph once the Foundation’s consent and review process is in place.</p></div></div></div>
      </div>
      <div class="img-zoom overflow-hidden rounded-[2.5rem] shadow-soft"><img src="${photos.care}" class="h-[470px] w-full object-cover" alt="Care and support"></div>
    </div>
  </section>

  <section class="pb-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="about1-cta rounded-[2.6rem] bg-brand-deep p-8 text-white sm:p-12 lg:p-14"><div class="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><div class="eyebrow text-brand-orange">Join the movement</div><h2 class="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Together we can build more informed, inclusive and supportive communities.</h2><p class="mt-5 max-w-2xl text-sm leading-7 text-white/60">Volunteer, partner, sponsor a program or support the Foundation’s work as it grows responsibly.</p></div><div class="flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Donate','#/donate','outline')}</div></div></div></div>
  </section>

  <section class="bg-orange-50/50 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Knowledge & updates','Read useful stories and practical guidance.','The reference finishes with an editorial/news grid. These are planned topics only until Eagle’s Wings publishes approved articles.')}<div>${button('Browse news','#/blog','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${plannedStories.map(([tag,title,img])=>`<article class="about1-editorial-card overflow-hidden rounded-[1.8rem] border border-orange-100 bg-white shadow-sm"><div class="overflow-hidden"><img src="${img}" class="h-56 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned educational content. Final articles will be reviewed and approved before publication.</p><div class="mt-5 flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Planned article</span><a href="#/blog" class="text-xs font-extrabold text-brand-navy">Explore ${icon('arrow-up-right','inline w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>`;
};

if(typeof render==='function' && route()==='about') render();
