/* Homepage inspiration v5
   Adapted from the latest user-provided mockup. Layout ideas are borrowed, not copied.
   We use only verified Eagle's Wings content and clearly label future editorial/testimonial content. */

home = function(){
  const serviceCards = [
    ['hand-heart','Volunteer with purpose','Support programs, outreach, events and practical activities.','#/get-involved'],
    ['house-heart','Strengthen families','Help parents and caregivers access useful, respectful guidance.','#/programs'],
    ['heart-pulse','Support healthy ageing','Promote nutrition, movement and mental stimulation for older people.','#/programs'],
    ['sparkles','Build life skills','Back practical learning that strengthens participation and independence.','#/programs']
  ];

  const causes = [
    {tag:'Awareness',title:'Neuro-diversity awareness',text:'Community education around Autism, ADHD, Down syndrome and intellectual disability.',img:photos.child,icon:'brain'},
    {tag:'Care',title:'Healthy ageing support',text:'Practical guidance for older people and the families and caregivers around them.',img:photos.care,icon:'heart-pulse'},
    {tag:'Education',title:'Family education & therapy guidance',text:'Respectful learning around neurological conditions, therapy exercises and specialized parenting.',img:photos.family,icon:'book-heart'}
  ];

  const leaders = [
    ['Stella Paul Rweyemamu','Director','SR'],
    ['Tegemeo Paschal Nsonda','Executive Secretary','TN'],
    ['Paul Alex Rweyemamu','Treasurer','PR'],
    ['Winifrida Igembe Rweyemamu','Member','WR'],
    ['Doreen Temistocles Igembe','Member','DI']
  ];

  const editorial = [
    ['Neuro-diversity','Making inclusion practical in everyday communities',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Simple ways to encourage engagement and activity',photos.care],
    ['Life skills','Building independence through repeatable routines',photos.learning],
    ['Community','Reducing stigma through respectful awareness',photos.people]
  ];

  return `
  <section class="v5-paper overflow-hidden">
    <div class="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[.88fr_1.12fr]">
      <div class="v5-hero-cut relative min-h-[520px] bg-slate-200 lg:min-h-[610px]"><img src="${photos.family}" class="absolute inset-0 h-full w-full object-cover" alt="Family and child support"><div class="absolute inset-0 bg-gradient-to-r from-brand-deep/16 to-transparent"></div></div>
      <div class="v5-handmark relative flex min-h-[520px] items-center px-6 py-16 sm:px-10 lg:min-h-[610px] lg:px-16">
        <div class="max-w-2xl"><div class="eyebrow text-brand-orange">Together for brighter tomorrows</div><h1 class="mt-4 font-display text-5xl leading-[1.02] text-brand-deep sm:text-6xl lg:text-[4.9rem]">Uniting hearts and hands to bring <span class="text-brand-orange">hope and lasting change.</span></h1><p class="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">Eagle’s Wings Foundation Tanzania supports children, older people, families and caregivers through awareness, practical education, life-skills learning and professional caregiver development.</p><div class="mt-8 flex flex-wrap gap-3">${button('Support our work','#/donate')}${button('Get involved','#/get-involved','dark')}</div><div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-extrabold uppercase tracking-[.14em] text-slate-400"><span class="flex items-center gap-2">${icon('map-pin','w-4 h-4 text-brand-orange')}Tegeta, Dar es Salaam</span><span class="flex items-center gap-2">${icon('calendar-heart','w-4 h-4 text-brand-orange')}Founded 2025</span></div></div>
      </div>
    </div>
  </section>

  <section class="v5-service-wrap bg-brand-deep py-24 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Our services','Making a difference through compassionate action.','A clearer service overview helps visitors understand how they can engage with the mission.','center').replaceAll('text-brand-deep','text-white').replaceAll('text-slate-600','text-white/55')}
      <div class="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">${serviceCards.map(([i,t,d,h],x)=>`<a href="${h}" class="float-card relative rounded-[1.6rem] border border-white/10 bg-white/[.07] p-6 text-center"><span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-orange text-white">${icon(i,'w-5 h-5')}</span><h3 class="mt-5 font-display text-2xl">${t}</h3><p class="mt-3 text-sm leading-6 text-white/55">${d}</p><span class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange">Learn more ${icon('arrow-right','w-3.5 h-3.5')}</span>${x<3?`<span class="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-brand-deep text-white/50 xl:grid">${icon('chevron-right','w-3 h-3')}</span>`:''}</a>`).join('')}</div>
      <div class="mt-10 text-center">${button('Get involved','#/get-involved')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
      <div>${sectionHead('Our mission','Making a difference one mission at a time.','We focus on inclusion, practical knowledge and everyday support for people with disabilities and challenges, particularly children and older people.')}
        <div class="mt-7 grid gap-3 sm:grid-cols-2">${[['circle-check','Neuro-diversity awareness'],['circle-check','Healthy ageing support'],['circle-check','Education & therapy guidance'],['circle-check','Life-skills development']].map(([i,t])=>`<div class="flex items-center gap-3 text-sm font-bold text-slate-600"><span class="text-brand-orange">${icon(i,'w-4 h-4')}</span>${t}</div>`).join('')}</div><div class="mt-8">${button('Explore our story','#/about','dark')}</div>
      </div>
      <div class="v5-photo-stack relative z-0"><div class="grid grid-cols-[1.15fr_.85fr] gap-4"><div class="img-zoom overflow-hidden rounded-[2.1rem] shadow-soft"><img src="${photos.people}" class="h-[430px] w-full object-cover" alt="Community support"></div><div class="space-y-4 pt-12"><div class="img-zoom overflow-hidden rounded-[1.7rem] shadow-card"><img src="${photos.child}" class="h-48 w-full object-cover" alt="Child support"></div><div class="rounded-[1.7rem] bg-brand-deep p-6 text-white"><div class="font-display text-4xl text-brand-orange">5</div><p class="mt-2 text-sm font-extrabold">Core program areas</p><p class="mt-2 text-xs leading-5 text-white/55">A focused foundation for practical community support.</p></div></div></div></div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Program areas','Empowering change through every cause.','The reference uses campaign cards; these are adapted to Eagle’s Wings’ real program areas without invented fundraising totals.','center')}
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${causes.map((c)=>`<article class="overflow-hidden rounded-[2rem] bg-white shadow-card"><div class="img-zoom relative overflow-hidden"><img src="${c.img}" class="h-64 w-full object-cover" alt="${c.title}"><span class="absolute right-5 top-5 rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.15em] text-white">${c.tag}</span></div><div class="p-6"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(c.icon)}</span><h3 class="mt-5 font-display text-2xl text-brand-deep">${c.title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${c.text}</p><div class="mt-6 border-t border-slate-100 pt-5"><a href="#/programs" class="inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="py-24"><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="relative overflow-hidden rounded-[2.8rem] bg-brand-deep p-8 text-white sm:p-12 lg:p-14"><div class="absolute inset-y-0 right-0 w-[46%]"><img src="${photos.child}" class="h-full w-full object-cover opacity-80" alt="Young person"><div class="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/55 to-transparent"></div></div><div class="relative z-10 max-w-xl"><div class="eyebrow text-brand-orange">Take action</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Join the movement for a better tomorrow.</h2><p class="mt-5 leading-7 text-white/65">Your support can be financial, voluntary, professional or in-kind. Every pathway helps strengthen practical care and inclusion.</p><div class="mt-8 flex flex-wrap gap-3">${button('Donate now','#/donate')}${button('Volunteer','#/get-involved','outline')}</div></div></div></div></section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('People behind the mission','Meet the Foundation leadership.','Instead of inventing volunteer profiles, we use the verified Eagle’s Wings leadership already provided.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">${leaders.map(([n,r,initials],i)=>`<article class="float-card rounded-[1.8rem] bg-white p-5 shadow-card"><div class="grid aspect-[4/4.7] place-items-center rounded-[1.4rem] ${i%2?'bg-orange-50':'bg-white'} v5-card-border"><div class="grid h-28 w-28 place-items-center rounded-full ${i%2?'bg-brand-orange':'bg-brand-navy'} font-display text-4xl text-white shadow-soft">${initials}</div></div><h3 class="mt-5 text-sm font-extrabold text-brand-deep">${n}</h3><p class="mt-1 text-xs text-slate-500">${r}</p></article>`).join('')}</div><div class="mt-10 text-center">${button('About our team','#/about','dark')}</div>
    </div>
  </section>

  <section class="py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="v5-quote-panel overflow-hidden rounded-[2.7rem] px-6 py-16 text-white sm:px-10 lg:px-14"><div class="max-w-2xl"><div class="eyebrow text-brand-orange">Impact stories</div><h2 class="mt-4 font-display text-4xl sm:text-5xl">Stories of change will be shared with consent and care.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">The reference uses a client testimonial. We preserve the visual storytelling pattern but do not invent a beneficiary quote. Verified stories will be published only after approval and consent.</p><div class="mt-8">${button('Visit impact','#/impact')}</div></div></div></div></section>

  <section class="py-10 pb-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Knowledge & updates','Read inspiring stories and practical guidance.','This editorial layout is ready for approved articles, program updates and caregiver resources.')}<div>${button('Browse all updates','#/blog','outline')}</div></div>
      <div class="v5-story-grid mt-12">
        ${editorial.slice(0,2).map(([tag,title,img],i)=>`<article class="overflow-hidden rounded-[1.8rem] bg-white shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-64 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned editorial topic. Content will be added after Foundation review and approval.</p><a href="#/blog" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Read updates ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></article>`).join('')}
        <div class="v5-story-side">${editorial.slice(2).map(([tag,title,img])=>`<article class="rounded-[1.4rem] bg-white p-3 shadow-sm v5-card-border"><img src="${img}" class="h-24 w-full rounded-xl object-cover" alt="${title}"><div><div class="text-[9px] font-extrabold uppercase tracking-[.14em] text-brand-orange">${tag}</div><h3 class="mt-1 text-sm font-extrabold leading-5 text-brand-deep">${title}</h3><span class="mt-2 inline-block text-[10px] font-bold text-slate-400">Planned topic</span></div></article>`).join('')}</div>
      </div>
    </div>
  </section>`;
};

if (typeof render === 'function') render();
