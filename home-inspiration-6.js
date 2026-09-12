/* Homepage inspiration v6
   Adapted from the latest long-form charity mockup supplied by the user.
   Visual patterns are borrowed, but content remains specific to Eagle's Wings Foundation Tanzania.
   We intentionally avoid invented fundraising totals, beneficiary counts, partner logos, testimonials or geographic reach claims. */

home = function(){
  const programCards = [
    {tag:'Awareness',icon:'brain',title:'Neuro-diversity Awareness',text:'Community education around Autism, ADHD, Down syndrome and intellectual disability.',img:photos.child,href:'#/program-neurodiversity'},
    {tag:'Healthy ageing',icon:'heart-pulse',title:'Elderly Care Support',text:'Nutrition, movement and mental stimulation guidance for older people and their families.',img:photos.care,href:'#/program-elderly-care'},
    {tag:'Family guidance',icon:'book-heart',title:'Education & Therapy Guidance',text:'Practical education on neurological conditions, therapy exercises and specialized parenting.',img:photos.family,href:'#/program-education-therapy'}
  ];

  const services = [
    ['heart-handshake','Family-centred support','Practical guidance that respects dignity, identity and everyday realities.'],
    ['book-open-check','Education that becomes action','Awareness and learning designed to improve day-to-day support.'],
    ['sparkles','Life-skills development','Structured learning that strengthens participation, confidence and independence.'],
    ['users-round','Caregiver development','Training and guidance for families, volunteers and professional caregivers.']
  ];

  const leaders = [
    ['Stella Paul Rweyemamu','Director','SR'],
    ['Tegemeo Paschal Nsonda','Executive Secretary','TN'],
    ['Paul Alex Rweyemamu','Treasurer','PR'],
    ['Winifrida Igembe Rweyemamu','Member','WR']
  ];

  const plannedEvents = [
    ['Awareness','Neuro-diversity awareness session','Community learning around inclusion and respectful support.','#/event-neurodiversity-awareness',photos.child],
    ['Caregiving','Family & caregiver learning workshop','Practical guidance for people supporting children and older adults.','#/event-caregiver-workshop',photos.family],
    ['Healthy ageing','Healthy ageing community session','Nutrition, safe movement and mental stimulation in everyday life.','#/event-healthy-ageing',photos.care]
  ];

  const editorial = [
    ['Neuro-diversity','Making inclusion practical in everyday communities',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Simple ways to encourage activity and engagement',photos.care]
  ];

  return `
  <section class="v6-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.family}" class="h-full w-full object-cover" alt="Family and community"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98)_0%,rgba(0,31,61,.90)_42%,rgba(0,31,61,.42)_72%,rgba(0,31,61,.22)_100%)]"></div></div>
    <div class="v6-yellow-stroke absolute -left-16 bottom-10 h-44 w-72 bg-brand-orange/95"></div>
    <div class="v6-white-stroke absolute -right-20 bottom-16 h-20 w-72 bg-white/80"></div>
    <div class="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div class="max-w-3xl">
        <div class="eyebrow text-brand-orange">Inclusion • Care • Brighter tomorrows</div>
        <h1 class="mt-5 font-display text-6xl leading-[.96] sm:text-7xl lg:text-[5.8rem]">Support today.<br><span class="text-brand-orange">Transform everyday life.</span></h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-white/70">Eagle’s Wings Foundation Tanzania supports children, older people, families and caregivers through awareness, practical education, life-skills learning and caregiver development.</p>
        <div class="mt-9 flex flex-wrap gap-3">${button('Donate with purpose','#/donate')}${button('Explore our work','#/programs','outline')}</div>
        <div class="mt-9 flex flex-wrap gap-5 text-xs font-extrabold uppercase tracking-[.15em] text-white/45"><span class="flex items-center gap-2">${icon('map-pin','w-4 h-4 text-brand-orange')}Tegeta, Dar es Salaam</span><span class="flex items-center gap-2">${icon('shield-check','w-4 h-4 text-brand-orange')}Evidence-led growth</span></div>
      </div>
      <div class="hidden lg:block"></div>
    </div>
  </section>

  <section class="v6-factbar bg-brand-deep text-white">
    <div class="mx-auto grid max-w-7xl divide-y divide-white/10 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-8">
      ${[['5','Core programs','layers-3'],['5','Leadership members','users-round'],['2025','Foundation established','calendar-heart'],['Tegeta','Dar es Salaam base','map-pinned']].map(([n,t,i])=>`<div class="flex items-center gap-4 px-5 py-7"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-brand-orange">${icon(i,'w-5 h-5')}</span><div><div class="font-display text-3xl text-white">${n}</div><div class="mt-1 text-[10px] font-extrabold uppercase tracking-[.15em] text-white/45">${t}</div></div></div>`).join('')}
    </div>
  </section>

  <section class="v6-paper py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:px-8">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <a href="#/get-involved" class="v6-action-card rounded-[2rem] bg-brand-navy p-7 text-white shadow-soft"><span class="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-brand-orange">${icon('hand-heart')}</span><div class="mt-8 text-[10px] font-extrabold uppercase tracking-[.16em] text-white/45">Take part</div><h3 class="mt-2 font-display text-3xl">Become a volunteer</h3><p class="mt-3 text-sm leading-6 text-white/60">Give time, skills or professional support in ways that match the Foundation’s needs.</p><span class="mt-6 inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange">Get involved ${icon('arrow-up-right','w-3.5 h-3.5')}</span></a>
        <a href="#/donate" class="v6-action-card rounded-[2rem] bg-brand-orange p-7 text-brand-deep shadow-soft"><span class="grid h-12 w-12 place-items-center rounded-full bg-brand-deep text-white">${icon('heart-handshake')}</span><div class="mt-8 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-deep/45">Support responsibly</div><h3 class="mt-2 font-display text-3xl">Give with purpose</h3><p class="mt-3 text-sm leading-6 text-brand-deep/65">Support can be financial, professional, voluntary or in-kind.</p><span class="mt-6 inline-flex items-center gap-1 text-xs font-extrabold text-brand-deep">Ways to give ${icon('arrow-up-right','w-3.5 h-3.5')}</span></a>
      </div>
      <div class="relative">
        <div class="v6-collage grid grid-cols-[1.08fr_.92fr] gap-4"><div class="img-zoom overflow-hidden rounded-[2.4rem]"><img src="${photos.people}" class="h-[470px] w-full object-cover" alt="Community support"></div><div class="space-y-4 pt-10"><div class="img-zoom overflow-hidden rounded-[1.8rem]"><img src="${photos.child}" class="h-52 w-full object-cover" alt="Child support"></div><div class="rounded-[1.8rem] bg-white p-6 shadow-card"><div class="eyebrow text-brand-orange">Our promise</div><p class="mt-3 text-sm leading-7 text-slate-600">Build carefully, publish verified evidence and tell people’s stories only with appropriate consent.</p></div></div></div>
        <div class="absolute -left-5 -top-6 rounded-2xl bg-white px-5 py-4 shadow-card"><div class="flex items-center gap-3"><span class="grid h-10 w-10 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon('badge-check')}</span><div><p class="text-xs font-extrabold text-brand-deep">Trusted by design</p><p class="mt-1 text-[10px] text-slate-400">Transparent • consent-aware • practical</p></div></div></div>
      </div>
    </div>
  </section>

  <section class="bg-[#fffaf2] py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('What we do','Practical support built around real life.','The reference uses a grid of impact services. Here it becomes a clear explanation of Eagle’s Wings’ actual service model.','center')}
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">${services.map(([i,t,d],x)=>`<article class="v6-service-card rounded-[1.8rem] border border-brand-navy/10 ${x===1?'bg-brand-orange text-brand-deep':'bg-white text-brand-deep'} p-6 shadow-card"><span class="grid h-12 w-12 place-items-center rounded-full ${x===1?'bg-brand-deep text-white':'bg-brand-mist text-brand-navy'}">${icon(i,'w-5 h-5')}</span><h3 class="mt-6 font-display text-2xl">${t}</h3><p class="mt-3 text-sm leading-6 ${x===1?'text-brand-deep/65':'text-slate-600'}">${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <div class="v6-marquee overflow-hidden border-y border-brand-navy/10 bg-white py-5"><div class="v6-marquee-track whitespace-nowrap font-display text-3xl text-brand-deep/85 sm:text-4xl"><span>Awareness <b class="text-brand-orange">•</b> Education <b class="text-brand-orange">•</b> Healthy ageing <b class="text-brand-orange">•</b> Life skills <b class="text-brand-orange">•</b> Caregiver support <b class="text-brand-orange">•</b> Inclusion <b class="text-brand-orange">•</b> Awareness <b class="text-brand-orange">•</b> Education <b class="text-brand-orange">•</b> Healthy ageing <b class="text-brand-orange">•</b> Life skills</span></div></div>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">${sectionHead('Featured programs','Support areas with a clear purpose.','Program cards use verified activity areas instead of invented campaign totals or fundraising percentages.')}<div>${button('View all programs','#/programs','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${programCards.map((p,i)=>`<article class="v6-project overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white shadow-card"><div class="img-zoom relative overflow-hidden"><img src="${p.img}" class="h-64 w-full object-cover" alt="${p.title}"><span class="absolute left-5 top-5 rounded-full ${i===1?'bg-brand-navy':'bg-brand-orange'} px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.15em] text-white">${p.tag}</span></div><div class="p-6"><span class="grid h-11 w-11 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(p.icon,'w-5 h-5')}</span><h3 class="mt-5 font-display text-2xl text-brand-deep">${p.title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${p.text}</p><div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5"><span class="text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-400">Verified program area</span><a href="${p.href}" class="inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Details ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="v6-community relative overflow-hidden bg-brand-deep py-20 text-white">
    <div class="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[28px] border-brand-orange/15"></div><div class="absolute -right-20 -bottom-24 h-72 w-72 rounded-full border-[24px] border-white/5"></div>
    <div class="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><div class="eyebrow text-brand-orange">Join our community</div><h2 class="mt-4 font-display text-5xl leading-tight">A stronger mission grows through people who participate.</h2><p class="mt-5 max-w-xl leading-7 text-white/60">Volunteer, partner, sponsor a practical activity, share professional expertise or help widen respectful awareness.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Partner with us','#/partners','outline')}</div></div><div class="grid gap-4 sm:grid-cols-2">${[['hand-heart','Volunteer','Time and skills'],['briefcase-business','Partner','Expertise and resources'],['megaphone','Advocate','Responsible awareness'],['gift','Support','Financial or in-kind']].map(([i,t,d])=>`<div class="rounded-[1.5rem] border border-white/10 bg-white/[.06] p-5"><span class="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-brand-orange">${icon(i,'w-4 h-4')}</span><h3 class="mt-4 font-display text-2xl">${t}</h3><p class="mt-1 text-xs font-bold uppercase tracking-[.13em] text-white/35">${d}</p></div>`).join('')}</div></div>
  </section>

  <section class="bg-[#fffaf2] py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Leadership','Meet the people guiding the Foundation.','The inspiration uses volunteer portraits. We retain the strong people-first presentation while using verified Eagle’s Wings leadership instead of invented profiles.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${leaders.map(([n,r,initials],i)=>`<article class="v6-person rounded-[1.8rem] bg-white p-5 shadow-card"><div class="relative grid aspect-[4/4.7] place-items-center overflow-hidden rounded-[1.4rem] ${i%2?'bg-orange-50':'bg-brand-mist'}"><div class="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-deep/10 to-transparent"></div><div class="relative grid h-32 w-32 place-items-center rounded-full ${i%2?'bg-brand-orange':'bg-brand-navy'} font-display text-4xl text-white shadow-soft">${initials}</div><span class="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon('heart','w-4 h-4')}</span></div><h3 class="mt-5 text-sm font-extrabold text-brand-deep">${n}</h3><p class="mt-1 text-xs text-slate-500">${r}</p></article>`).join('')}</div><div class="mt-10 text-center">${button('About our leadership','#/about','dark')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.86fr_1.14fr] lg:items-center lg:px-8"><div class="relative"><div class="v6-donation-photo overflow-hidden rounded-[2.5rem] bg-brand-deep"><img src="${photos.people}" class="h-[560px] w-full object-cover opacity-80" alt="Community support"><div class="absolute inset-0 bg-gradient-to-t from-brand-deep/75 via-transparent to-transparent"></div></div><div class="absolute -bottom-5 -right-5 rounded-[1.8rem] bg-brand-orange p-6 text-brand-deep shadow-soft"><div class="font-display text-4xl">Give your way</div><p class="mt-2 max-w-[220px] text-sm leading-6 text-brand-deep/65">Financial, professional, voluntary or in-kind support can all strengthen the mission.</p></div></div>
      <div>${sectionHead('Support the mission','Make a difference one practical action at a time.','The inspiration places a compact donation form on the homepage. We add the same convenience while keeping checkout inactive until payment integration is complete.')}
        <form class="mt-8 rounded-[2rem] border border-brand-navy/10 bg-white p-6 shadow-soft sm:p-8" onsubmit="event.preventDefault();location.hash='#/donate'">
          <div class="flex items-center justify-between gap-4"><div><div class="text-xs font-extrabold uppercase tracking-[.14em] text-brand-orange">Donation starter</div><p class="mt-1 text-sm text-slate-500">Choose an amount, then continue to the full donation page.</p></div><span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-50 text-brand-orange">${icon('heart-handshake')}</span></div>
          <div class="mt-6 grid grid-cols-3 gap-3">${['10,000','25,000','50,000'].map((a,i)=>`<label class="cursor-pointer"><input type="radio" name="homeAmount" class="peer sr-only" ${i===1?'checked':''}><span class="block rounded-xl border border-slate-200 px-3 py-3 text-center text-xs font-extrabold text-slate-500 peer-checked:border-brand-orange peer-checked:bg-orange-50 peer-checked:text-brand-deep">TZS ${a}</span></label>`).join('')}</div>
          <label class="mt-4 block text-xs font-extrabold uppercase tracking-[.13em] text-slate-400">Your name<input class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal text-brand-deep outline-none focus:border-brand-orange" placeholder="Name"></label>
          <div class="mt-4 flex flex-wrap gap-2">${['Mobile Money','Card','Bank Transfer'].map((m,i)=>`<span class="rounded-full ${i===0?'bg-brand-deep text-white':'bg-brand-mist text-brand-navy'} px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.12em]">${m}</span>`).join('')}</div>
          <button class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-extrabold text-white">Continue to donation ${icon('arrow-right','w-4 h-4')}</button>
          <p class="mt-4 text-center text-[10px] leading-5 text-slate-400">No payment is processed from this homepage form. Secure checkout activates only after merchant onboarding.</p>
        </form>
      </div>
    </div>
  </section>

  <section class="v6-story-band relative isolate overflow-hidden bg-brand-deep py-24 text-white">
    <div class="absolute inset-0"><img src="${photos.child}" class="h-full w-full object-cover opacity-25" alt="Community story"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98),rgba(0,31,61,.82),rgba(0,31,61,.72))]"></div></div>
    <div class="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"><div class="eyebrow text-brand-orange">Responsible storytelling</div><h2 class="mt-4 font-display text-5xl sm:text-6xl">Generosity becomes meaningful when it creates dignified, practical support.</h2><p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">Verified participant stories and testimonials will be added only when the Foundation has consent, context and evidence. Until then, the website does not invent impact claims.</p><div class="mt-8">${button('See our impact approach','#/impact')}</div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:px-8">
      <div>${sectionHead('Events & learning','Join our planned community gatherings.','The reference highlights event cards prominently. We adapt that pattern to the event formats already prepared for Eagle’s Wings.')}
        <div class="mt-8 rounded-[1.8rem] bg-brand-mist p-6"><div class="flex items-start gap-3"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon('calendar-clock','w-4 h-4')}</span><p class="text-sm leading-6 text-slate-600"><strong class="text-brand-deep">Calendar status:</strong> dates and venues remain TBC until the Foundation approves its public event calendar.</p></div></div>
        <div class="mt-6">${button('Browse event formats','#/events','dark')}</div>
      </div>
      <div class="space-y-4">${plannedEvents.map(([tag,title,text,href,img],i)=>`<a href="${href}" class="v6-event grid gap-4 rounded-[1.6rem] border border-brand-navy/10 bg-white p-3 shadow-sm sm:grid-cols-[150px_1fr]"><img src="${img}" class="h-36 w-full rounded-[1.2rem] object-cover" alt="${title}"><div class="p-2"><div class="flex items-center justify-between gap-3"><span class="text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-orange">${tag}</span><span class="rounded-full bg-brand-mist px-3 py-1 text-[9px] font-extrabold uppercase tracking-[.13em] text-slate-400">Date TBC</span></div><h3 class="mt-2 font-display text-2xl text-brand-deep">${title}</h3><p class="mt-2 text-sm leading-6 text-slate-500">${text}</p><span class="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</span></div></a>`).join('')}</div>
    </div>
  </section>

  <section class="v6-location bg-[#fffaf2] py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
      <div class="relative min-h-[440px] overflow-hidden rounded-[2.5rem] border border-brand-navy/10 bg-white shadow-soft"><div class="absolute inset-0 v6-map-grid"></div><div class="absolute left-[58%] top-[46%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange ring-8 ring-brand-orange/15"></div><div class="absolute left-[58%] top-[46%] translate-x-5 -translate-y-12 rounded-xl bg-brand-deep px-4 py-3 text-white shadow-card"><div class="text-xs font-extrabold">Tegeta, Dar es Salaam</div><div class="mt-1 text-[10px] text-white/45">Current Foundation base</div></div><div class="absolute bottom-6 left-6 max-w-sm rounded-[1.4rem] bg-brand-mist p-5"><div class="eyebrow text-brand-orange">Current footprint</div><p class="mt-2 text-sm leading-6 text-slate-600">We show only the confirmed base location. Additional project locations can be added when activities and partnerships are formally documented.</p></div></div>
      <div>${sectionHead('Where we are based','Local roots, responsible growth.','The inspiration uses a global project map. Eagle’s Wings is based in Tegeta, Dar es Salaam, so the design reflects that confirmed location rather than suggesting global operations.')}
        <div class="mt-8 grid gap-4 sm:grid-cols-2"><div class="rounded-[1.5rem] bg-white p-5 shadow-card"><span class="grid h-10 w-10 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon('map-pin','w-4 h-4')}</span><h3 class="mt-4 font-display text-2xl text-brand-deep">Tegeta</h3><p class="mt-2 text-sm leading-6 text-slate-500">Current Foundation base in Dar es Salaam.</p></div><div class="rounded-[1.5rem] bg-white p-5 shadow-card"><span class="grid h-10 w-10 place-items-center rounded-full bg-orange-50 text-brand-orange">${icon('network','w-4 h-4')}</span><h3 class="mt-4 font-display text-2xl text-brand-deep">Partnership growth</h3><p class="mt-2 text-sm leading-6 text-slate-500">Future locations will be published only when partnerships and programs are confirmed.</p></div></div>
      </div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Knowledge & updates','Latest learning themes and Foundation news.','The long-form inspiration closes with editorial cards. This area is ready for approved articles and updates.')}<div>${button('Browse all news','#/blog','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${editorial.map(([tag,title,img])=>`<article class="v6-news overflow-hidden rounded-[1.8rem] border border-brand-navy/10 bg-white shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-64 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned editorial topic. Content will be published after Foundation review and approval.</p><a href="#/blog" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Read updates ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></article>`).join('')}</div>
    </div>
  </section>`;
};

if(typeof render==='function') render();
