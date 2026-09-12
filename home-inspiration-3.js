/* Homepage refinement inspired by the latest reference mockup.
   Visual structure is adapted to Eagle's Wings Foundation Tanzania.
   No donation totals, progress percentages, testimonials, beneficiary counts, or impact claims are fabricated. */

home = function(){
  const steps = [
    ['hand-heart','Become a supporter','Give financially, contribute useful materials or sponsor a priority activity.'],
    ['heart-handshake','Strengthen families','Help us expand practical learning for parents, caregivers and families.'],
    ['book-open-check','Grow knowledge','Support awareness, therapy guidance and respectful community education.'],
    ['sparkles','Build independence','Back life-skills learning and opportunities that strengthen dignity and confidence.']
  ];

  const causes = [
    {tag:'Awareness',title:'Neuro-diversity awareness',text:'Community education around Autism, ADHD, Down syndrome and intellectual disability.',img:photos.child,icon:'brain'},
    {tag:'Care',title:'Healthy ageing support',text:'Practical guidance around nutrition, movement and mental stimulation for older people.',img:photos.care,icon:'heart-pulse'},
    {tag:'Skills',title:'Life skills & caregiver learning',text:'Structured learning that strengthens independence and everyday support.',img:photos.learning,icon:'users-round'}
  ];

  const giving = [
    ['wallet-cards','One-time giving','Support a current program or priority need.'],
    ['repeat-2','Monthly support','Build dependable recurring support when online giving is activated.'],
    ['package-open','In-kind support','Contribute equipment, learning materials, professional services or useful goods.'],
    ['building-2','Corporate partnership','Sponsor outreach, caregiver learning or a specific initiative.']
  ];

  const volunteerRoles = [
    ['heart-handshake','Program support','Help with activities, community engagement and participant support.'],
    ['calendar-days','Events & outreach','Support awareness events, registration, coordination and follow-up.'],
    ['megaphone','Communications','Help shape approved stories, awareness material and digital content.'],
    ['hand-coins','Fundraising support','Assist with campaigns, sponsorship outreach and donor stewardship.']
  ];

  const plannedTopics = [
    ['Neuro-diversity','How communities can make inclusion practical',photos.child],
    ['Caregiving','Five principles of dignified day-to-day support',photos.care],
    ['Life skills','Building independence through repeatable routines',photos.learning],
    ['Healthy ageing','Simple ways families can encourage engagement',photos.family]
  ];

  return `
  <section class="ref3-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.hero}" class="h-full w-full object-cover object-center opacity-40" alt="Eagle's Wings Foundation community work"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97)_0%,rgba(0,31,61,.83)_43%,rgba(0,31,61,.30)_73%,rgba(0,31,61,.70)_100%)]"></div></div>
    <div class="ref3-corner ref3-corner-a"></div><div class="ref3-corner ref3-corner-b"></div><div class="ref3-swoop"></div>
    <div class="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
      <div class="relative z-10 max-w-2xl">
        <div class="eyebrow flex items-center gap-2 text-brand-orange">${icon('sparkles','w-4 h-4')} Inclusion • Care • Opportunity</div>
        <h1 class="mt-5 font-display text-5xl leading-[.96] sm:text-6xl lg:text-[5.4rem]">Making life brighter<br><span class="text-brand-orange">through care.</span></h1>
        <p class="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">We support children, older people, families and caregivers through awareness, practical education, life-skills learning and professional caregiver development.</p>
        <div class="mt-8 flex flex-wrap gap-3">${button('Explore our work','#/programs')}${button('Get involved','#/get-involved','outline')}</div>
        <div class="mt-10 flex flex-wrap gap-3 text-xs font-bold text-white/60"><span class="rounded-full border border-white/15 bg-white/5 px-4 py-2">Families</span><span class="rounded-full border border-white/15 bg-white/5 px-4 py-2">Caregivers</span><span class="rounded-full border border-white/15 bg-white/5 px-4 py-2">Communities</span></div>
      </div>
      <div class="relative hidden min-h-[420px] lg:block">
        <div class="ref3-feature absolute bottom-12 right-0 w-[330px] rounded-[2rem] border border-white/10 bg-brand-deep/90 p-4 shadow-2xl backdrop-blur">
          <div class="overflow-hidden rounded-[1.5rem]"><img src="${photos.care}" class="h-44 w-full object-cover" alt="Healthy ageing support"></div>
          <div class="mt-4 flex items-start justify-between gap-4"><div><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">Featured focus</div><h3 class="mt-1 font-display text-2xl">Healthy ageing support</h3><p class="mt-2 text-xs leading-5 text-white/55">Practical support for older people and the families who care for them.</p></div><span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-orange text-white">${icon('arrow-up-right','w-4 h-4')}</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="home-paper py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
      <div>${sectionHead('How support moves','Empowering change through generosity.','The reference uses fundraising progress bars. Here we translate that idea into a transparent support journey without inventing percentages or financial results.')}
        <div class="mt-8 space-y-5">
          ${[['Awareness & education','Community understanding and respectful information','brain'],['Family & caregiver support','Practical guidance people can use every day','heart-handshake'],['Life skills & independence','Learning that strengthens participation and confidence','sparkles']].map(([t,d,i],x)=>`<div><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-3"><span class="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-navy shadow-sm">${icon(i,'w-4 h-4')}</span><div><h3 class="text-sm font-extrabold text-brand-deep">${t}</h3><p class="mt-1 text-xs text-slate-500">${d}</p></div></div><span class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">Priority</span></div><div class="mt-3 h-2 overflow-hidden rounded-full bg-slate-200"><div class="h-full rounded-full ${x===1?'w-4/5':'w-3/4'} bg-brand-navy"></div></div></div>`).join('')}
        </div>
        <div class="mt-8">${button('About Eagle’s Wings','#/about','dark')}</div>
      </div>
      <div class="relative">
        <div class="grid grid-cols-[1.2fr_.8fr] gap-4"><div class="img-zoom overflow-hidden rounded-[2.4rem] shadow-soft"><img src="${photos.family}" class="h-[470px] w-full object-cover" alt="Families and community"></div><div class="space-y-4 pt-12"><div class="img-zoom overflow-hidden rounded-[2rem] shadow-card"><img src="${photos.child}" class="h-52 w-full object-cover" alt="Child support"></div><div class="rounded-[2rem] bg-brand-deep p-6 text-white"><div class="font-display text-4xl text-brand-orange">5</div><p class="mt-2 text-sm font-bold">Core focus areas</p><p class="mt-2 text-xs leading-5 text-white/55">Awareness, elderly care, education, life skills and caregiver training.</p></div></div></div>
      </div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('How we work','Empowering change one step at a time.','A clear pathway helps visitors understand how support becomes practical action.','center')}
      <div class="ref3-steps relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">${steps.map(([i,t,d],x)=>`<article class="${x===1?'ref3-step-feature bg-brand-deep text-white':'bg-white text-brand-deep'} relative rounded-[1.8rem] border border-slate-100 p-7 shadow-sm"><span class="grid h-12 w-12 place-items-center rounded-full ${x===1?'bg-brand-orange text-white':'bg-orange-50 text-brand-orange'}">${icon(i)}</span><div class="mt-6 text-[10px] font-extrabold uppercase tracking-[.18em] ${x===1?'text-brand-orange':'text-slate-400'}">Step ${x+1}</div><h3 class="mt-2 font-display text-2xl">${t}</h3><p class="mt-3 text-sm leading-6 ${x===1?'text-white/60':'text-slate-500'}">${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Priority programs','Together for a better tomorrow.','Campaign-style cards from the mockup are adapted to real Eagle’s Wings program areas rather than invented fundraising campaigns.')}<div>${button('View programs','#/programs','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${causes.map((c)=>`<article class="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card"><div class="img-zoom relative overflow-hidden"><img src="${c.img}" class="h-64 w-full object-cover" alt="${c.title}"><span class="absolute right-5 top-5 rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.15em] text-white">${c.tag}</span></div><div class="p-6"><div class="flex items-start gap-3"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(c.icon)}</span><div><h3 class="font-display text-2xl leading-tight text-brand-deep">${c.title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${c.text}</p></div></div><div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5"><span class="text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-400">Open for support</span><a href="#/programs" class="inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="ref3-dark overflow-hidden bg-brand-deep py-24 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Ways to give','Support can take more than one form.','Instead of fake “recent donations”, we use the compact card pattern to explain the real contribution pathways planned for Eagle’s Wings.','center').replaceAll('text-brand-deep','text-white').replaceAll('text-slate-600','text-white/55')}
      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${giving.map(([i,t,d])=>`<article class="rounded-[1.6rem] border border-white/10 bg-white/[.055] p-6"><span class="grid h-12 w-12 place-items-center rounded-full bg-emerald-700 text-white">${icon(i,'w-5 h-5')}</span><h3 class="mt-5 font-display text-2xl">${t}</h3><p class="mt-3 text-sm leading-6 text-white/55">${d}</p><a href="#/donate" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange">Learn how ${icon('arrow-up-right','w-3.5 h-3.5')}</a></article>`).join('')}</div>
    </div>
  </section>

  <section class="ref3-dark-2 bg-[#071812] py-24 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><div class="eyebrow text-emerald-400">Stories & learning</div><h2 class="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">Read inspiring practical guidance as our content library grows.</h2><p class="mt-4 max-w-2xl text-sm leading-7 text-white/55">The layout is inspired by the mockup’s story cards. Content is clearly marked as planned until approved articles are actually published.</p></div><div>${button('Explore resources','#/resources','outline')}</div></div>
      <div class="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">${plannedTopics.map(([tag,title,img])=>`<article class="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[.055]"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-44 w-full object-cover" alt="${title}"></div><div class="p-5"><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-xl leading-tight">${title}</h3><div class="mt-5 flex items-center justify-between"><span class="text-[10px] uppercase tracking-[.12em] text-white/35">Planned topic</span><a href="#/resources" class="text-xs font-extrabold text-emerald-300">Explore</a></div></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Volunteer with us','Bring your time and skills to the mission.','The reference uses named volunteer profiles. We avoid inventing people and instead show genuine volunteer pathways that can later be linked to approved applications.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${volunteerRoles.map(([i,t,d],x)=>`<article class="float-card rounded-[1.8rem] bg-white p-6 shadow-card"><div class="relative grid h-56 place-items-center overflow-hidden rounded-[1.4rem] ${x%2?'bg-orange-50':'bg-emerald-50'}"><span class="grid h-24 w-24 place-items-center rounded-full ${x%2?'bg-brand-orange':'bg-emerald-700'} text-white shadow-soft">${icon(i,'w-9 h-9')}</span><span class="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-navy">Volunteer role</span></div><h3 class="mt-5 font-display text-2xl text-brand-deep">${t}</h3><p class="mt-2 text-sm leading-6 text-slate-500">${d}</p></article>`).join('')}</div><div class="mt-10 text-center">${button('Register your interest','#/get-involved','dark')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8"><div>${sectionHead('Impact stories','Stories of impact and hope.','The mockup uses a beneficiary testimonial. Eagle’s Wings has not yet supplied an approved testimonial, so this section is prepared for future consent-based stories without inventing a quote.')}<div class="mt-8 rounded-[2rem] border border-dashed border-brand-navy/20 bg-brand-mist p-7"><div class="flex items-start gap-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon('quote','w-5 h-5')}</span><div><h3 class="font-display text-2xl text-brand-deep">Verified story library in preparation</h3><p class="mt-2 text-sm leading-6 text-slate-500">Stories will be published only after consent, review and approval. Until then, this space stays transparent rather than presenting fictional testimonials.</p></div></div></div><div class="mt-7">${button('Explore impact','#/impact','outline')}</div></div><div class="img-zoom overflow-hidden rounded-[2.4rem] shadow-soft"><img src="${photos.people}" class="h-[460px] w-full object-cover" alt="Community support"></div></div>
  </section>

  <section class="py-8 pb-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="ref3-cta relative overflow-hidden rounded-[2.8rem] bg-brand-deep text-white"><img src="${photos.child}" class="absolute right-0 top-0 h-full w-full object-cover object-center opacity-50 lg:w-[55%]" alt="Child support"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.99)_0%,rgba(0,31,61,.93)_48%,rgba(0,31,61,.25)_100%)]"></div><div class="ref3-cta-splash absolute right-[35%] top-0 h-full w-32 bg-brand-orange/95"></div><div class="relative max-w-2xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Join the mission</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Join the movement for a better tomorrow.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">Volunteer, partner, sponsor a program or help us grow respectful awareness in your community.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Partner with us','#/partners','outline')}</div></div></div></div>
  </section>

  <section class="bg-orange-50/50 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center">${sectionHead('Knowledge & updates','Read inspiring stories and practical insights.','The mockup’s magazine-style layout is adapted to planned educational topics and future Foundation updates.','center')}</div>
      <div class="mt-12 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <div class="grid gap-6 sm:grid-cols-2">${plannedTopics.slice(0,2).map(([tag,title,img])=>`<article class="overflow-hidden rounded-[1.8rem] border border-orange-100 bg-white shadow-sm"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-64 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Approved educational content will be published here as the library grows.</p><div class="mt-5 flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Planned topic</span><a href="#/blog" class="text-xs font-extrabold text-brand-navy">Explore ${icon('arrow-up-right','inline w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
        <div class="grid content-start gap-4">${plannedTopics.slice(2).concat([['Volunteer','How to contribute time and skills meaningfully',photos.people],['Partnerships','What responsible corporate support can look like',photos.family]]).map(([tag,title,img])=>`<a href="#/blog" class="grid grid-cols-[96px_1fr] gap-4 rounded-[1.4rem] bg-white p-3 shadow-sm"><img src="${img}" class="h-24 w-24 rounded-[1rem] object-cover" alt="${title}"><div class="py-1"><div class="text-[9px] font-extrabold uppercase tracking-[.14em] text-brand-orange">${tag}</div><h3 class="mt-1 font-display text-lg leading-tight text-brand-deep">${title}</h3><div class="mt-2 text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Planned topic</div></div></a>`).join('')}</div>
      </div>
    </div>
  </section>`;
};

if (typeof render === 'function') render();
