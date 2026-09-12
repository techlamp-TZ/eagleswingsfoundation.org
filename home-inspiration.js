/* Home page enhancement inspired by the latest reference mockup.
   Visual ideas are adapted to Eagle's Wings; figures, donations, stories and testimonials
   are never fabricated. */

home = function(){
  const causeCards = [
    {tag:'Awareness', title:'Neuro-diversity awareness', text:'Help communities replace stigma with understanding around Autism, ADHD, Down syndrome and intellectual disability.', icon:'brain', img:photos.child, href:'#/programs'},
    {tag:'Care', title:'Healthy ageing support', text:'Strengthen families with practical guidance around nutrition, movement and mental stimulation for older people.', icon:'heart-pulse', img:photos.care, href:'#/programs'},
    {tag:'Skills', title:'Life skills & caregiver learning', text:'Support practical learning that builds independence, confidence and stronger everyday care.', icon:'sparkles', img:photos.learning, href:'#/programs'}
  ];

  const learningCards = [
    {tag:'Awareness', title:'Understanding neuro-diversity with dignity', text:'A future learning resource explaining conditions, respectful language and practical inclusion.', img:photos.child},
    {tag:'Families', title:'Practical support for everyday routines', text:'Guidance themes for parents and caregivers supporting communication, learning and independence.', img:photos.family},
    {tag:'Healthy ageing', title:'Care that keeps older people engaged', text:'Future guidance around movement, nutrition, mental stimulation and family support.', img:photos.care},
    {tag:'Caregivers', title:'Building confident support networks', text:'Training-oriented content for people supporting children and older people day to day.', img:photos.people}
  ];

  const givingPaths = [
    ['heart','One-time giving','Support a priority program or current operational need.'],
    ['repeat-2','Monthly support','Create dependable recurring support when online giving is activated.'],
    ['package-open','In-kind support','Contribute useful goods, equipment, professional services or materials.'],
    ['building-2','Corporate partnership','Sponsor learning, outreach, caregiver development or a specific initiative.']
  ];

  const leaders = [
    ['Stella Paul Rweyemamu','Director','SR'],
    ['Tegemeo Paschal Nsonda','Executive Secretary','TN'],
    ['Paul Alex Rweyemamu','Treasurer','PR'],
    ['Winifrida Igembe Rweyemamu','Member','WR'],
    ['Doreen Temistocles Igembe','Member','DI']
  ];

  return `
  <section class="charity-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.hero}" alt="Child and community support" class="h-full w-full object-cover object-center opacity-45"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.96)_0%,rgba(0,31,61,.84)_42%,rgba(0,31,61,.28)_72%,rgba(0,31,61,.62)_100%)]"></div></div>
    <div class="paint-splash absolute -right-10 top-24 h-72 w-72 bg-brand-orange/95 sm:right-[9%] sm:top-20"></div>
    <div class="relative mx-auto grid min-h-[660px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
      <div class="relative z-10 max-w-2xl">
        <div class="eyebrow flex items-center gap-2 text-brand-orange">${icon('heart-handshake','w-4 h-4')} Eagle’s Wings Foundation Tanzania</div>
        <h1 class="mt-5 font-display text-5xl leading-[.96] sm:text-6xl lg:text-[5.3rem]">Creating change.<br><span class="text-brand-orange">One life at a time.</span></h1>
        <p class="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">We improve the lives of people with disabilities and challenges, particularly children and older people, through awareness, practical education, life-skills support and caregiver development.</p>
        <div class="mt-8 flex flex-wrap gap-3">${button('Explore our work','#/programs')}${button('Get involved','#/get-involved','outline')}</div>
        <div class="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-xs font-extrabold uppercase tracking-[.15em] text-white/55"><span class="flex items-center gap-2">${icon('map-pin','w-4 h-4 text-brand-orange')}Tegeta, Dar es Salaam</span><span class="flex items-center gap-2">${icon('calendar-heart','w-4 h-4 text-brand-orange')}Founded 2025</span></div>
      </div>
      <div class="hidden lg:block"></div>
    </div>
    <div class="paper-tear-bottom absolute inset-x-0 bottom-0 h-8 bg-white"></div>
  </section>

  <section class="home-paper site-noise py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
      <div class="relative order-2 lg:order-1">
        <div class="grid grid-cols-[.92fr_1.08fr] gap-4">
          <div class="space-y-4 pt-10"><div class="img-zoom overflow-hidden rounded-[2.1rem] shadow-soft"><img src="${photos.child}" class="h-72 w-full object-cover" alt="Child support"></div><div class="rounded-[1.8rem] bg-brand-orange p-6 text-white"><div class="eyebrow text-white/70">Our base</div><div class="mt-2 font-display text-3xl">Tegeta, DSM</div><p class="mt-2 text-sm leading-6 text-white/80">Community-rooted support built around dignity and inclusion.</p></div></div>
          <div class="space-y-4"><div class="img-zoom overflow-hidden rounded-[2.1rem] shadow-soft"><img src="${photos.family}" class="h-52 w-full object-cover" alt="Family support"></div><div class="img-zoom overflow-hidden rounded-[2.1rem] shadow-soft"><img src="${photos.care}" class="h-80 w-full object-cover" alt="Caregiver support"></div></div>
        </div>
        <div class="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[8px] border-white bg-brand-deep text-center text-white shadow-soft"><div><div class="font-display text-2xl">2025</div><div class="mt-1 text-[9px] font-extrabold uppercase tracking-[.18em] text-white/60">Founded</div></div></div>
      </div>
      <div class="order-1 lg:order-2">${sectionHead('Who we are','Making a difference one mission at a time.','Eagle’s Wings Foundation Tanzania brings awareness, practical guidance and skills development together so children, older people, families and caregivers can participate with greater dignity and confidence.')}
        <div class="mt-7 grid gap-4 sm:grid-cols-2">
          ${[['badge-check','Respectful inclusion'],['book-heart','Practical education'],['users-round','Family & caregiver support'],['sparkles','Life-skills development']].map(([i,t])=>`<div class="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><span class="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-brand-orange">${icon(i,'w-4 h-4')}</span><span class="text-sm font-extrabold text-brand-deep">${t}</span></div>`).join('')}
        </div>
        <div class="mt-8">${button('Learn about us','#/about','dark')}</div>
      </div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Priority areas','Empowering change through focused support.','The reference design uses fundraising campaign cards; we adapt that idea to the Foundation’s verified program areas without inventing targets or progress percentages.')}<div>${button('View all programs','#/programs','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${causeCards.map((c,i)=>`<article class="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card"><div class="img-zoom relative overflow-hidden"><img src="${c.img}" class="h-64 w-full object-cover" alt="${c.title}"><div class="absolute left-5 top-5 rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-white">${c.tag}</div></div><div class="p-6"><div class="flex items-start gap-3"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(c.icon,'w-5 h-5')}</span><div><h3 class="font-display text-2xl leading-tight text-brand-deep">${c.title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${c.text}</p></div></div><div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5"><span class="text-[11px] font-extrabold uppercase tracking-[.14em] text-slate-400">Open for support</span><a href="${c.href}" class="inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="relative overflow-hidden bg-brand-deep py-24 text-white">
    <div class="absolute -left-20 top-16 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl"></div><div class="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-navy/40 blur-3xl"></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><div class="eyebrow text-brand-orange">Stories & learning</div><h2 class="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">Read inspiring, practical guidance as our content library grows.</h2><p class="mt-4 max-w-2xl text-sm leading-7 text-white/60">We are preparing approved educational content and Foundation updates. These cards show the planned editorial direction rather than claiming published beneficiary stories.</p></div><div>${button('Explore resources','#/resources','outline')}</div></div>
      <div class="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">${learningCards.map((c)=>`<article class="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[.055]"><div class="img-zoom overflow-hidden"><img src="${c.img}" class="h-44 w-full object-cover opacity-90" alt="${c.title}"></div><div class="p-5"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${c.tag}</div><h3 class="mt-2 font-display text-xl leading-tight">${c.title}</h3><p class="mt-3 text-xs leading-6 text-white/55">${c.text}</p><a href="#/resources" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-white/80">Future resource ${icon('arrow-right','w-3 h-3')}</a></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="bg-brand-deep pb-24 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="border-t border-white/10 pt-16">${sectionHead('Ways to give','Support can take more than one form.','Instead of showing invented “recent donations”, this area explains the contribution pathways the Foundation plans to support.','center').replaceAll('text-brand-deep','text-white').replaceAll('text-slate-600','text-white/55')}
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${givingPaths.map(([i,t,d])=>`<div class="rounded-[1.6rem] border border-white/10 bg-white/[.055] p-6"><span class="grid h-12 w-12 place-items-center rounded-full bg-brand-orange text-white">${icon(i,'w-5 h-5')}</span><h3 class="mt-5 font-display text-2xl">${t}</h3><p class="mt-3 text-sm leading-6 text-white/55">${d}</p><a href="#/donate" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange">Learn how ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div>`).join('')}</div>
    </div></div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('People behind the mission','Meet the Foundation leadership.','The inspiration uses volunteer profile cards; here we use the verified leadership names already provided by Eagle’s Wings.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">${leaders.map(([n,r,initials],i)=>`<article class="float-card rounded-[1.8rem] bg-white p-5 shadow-card"><div class="relative grid aspect-[4/4.7] place-items-center overflow-hidden rounded-[1.4rem] ${i%2?'bg-orange-50':'bg-brand-mist'}"><div class="grid h-28 w-28 place-items-center rounded-full ${i%2?'bg-brand-orange':'bg-brand-navy'} font-display text-4xl text-white shadow-soft">${initials}</div><div class="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon('heart','w-4 h-4')}</div></div><h3 class="mt-5 font-extrabold text-brand-deep">${n}</h3><p class="mt-1 text-xs font-semibold text-slate-500">${r}</p></article>`).join('')}</div>
      <div class="mt-10 text-center">${button('Learn about our team','#/about','dark')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="cta-photo relative overflow-hidden rounded-[2.8rem] bg-brand-deep text-white"><img src="${photos.family}" class="absolute inset-0 h-full w-full object-cover object-center opacity-50" alt="Family and community"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98)_0%,rgba(0,31,61,.82)_52%,rgba(0,31,61,.22)_100%)]"></div><div class="relative max-w-2xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Take action</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Together we can rewrite what support looks like.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">Bring your time, expertise, network, resources or financial support to a mission focused on inclusion, practical learning and dignified care.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Partner with us','#/partners','outline')}</div></div></div></div>
  </section>

  <section class="py-10 pb-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:px-8">
      <div>${sectionHead('Impact & hope','Stories will be shared with evidence and consent.','The inspiration includes a beneficiary testimonial. Eagle’s Wings has not yet supplied approved testimonials, so we keep the same storytelling structure while being transparent about what is still pending.')}
        <div class="mt-8 rounded-[1.8rem] border border-brand-navy/10 bg-brand-mist p-6"><div class="flex items-start gap-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-navy text-white">${icon('quote','w-5 h-5')}</span><div><p class="font-display text-2xl leading-snug text-brand-deep">“Approved beneficiary and caregiver stories will appear here once consent and verification are complete.”</p><p class="mt-4 text-xs font-extrabold uppercase tracking-[.14em] text-slate-400">Story placeholder — not a testimonial</p></div></div></div>
        <div class="mt-7 flex flex-wrap gap-3">${button('Our impact approach','#/impact','dark')}${button('View reports','#/reports','outline')}</div>
      </div>
      <div class="relative"><div class="paint-splash absolute -right-4 -top-5 h-40 w-40 bg-brand-orange/20"></div><div class="img-zoom relative overflow-hidden rounded-[2.4rem] shadow-soft"><img src="${photos.people}" class="h-[500px] w-full object-cover" alt="Community support"></div></div>
    </div>
  </section>

  <section class="bg-orange-50/55 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Knowledge & updates','Meaningful insights for families, caregivers and communities.','Inspired by the editorial grid in your reference. Until real articles are published, these are clearly marked as planned topics.')}<div>${button('News & updates','#/blog','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-2">${[
        ['Neuro-diversity','How communities can make inclusion practical',photos.child,'Planned topic'],
        ['Caregiving','Five principles of dignified day-to-day support',photos.care,'Planned topic'],
        ['Life skills','Building independence through repeatable routines',photos.learning,'Planned topic'],
        ['Healthy ageing','Simple ways families can encourage engagement',photos.family,'Planned topic']
      ].map(([tag,title,img,status])=>`<article class="grid overflow-hidden rounded-[1.8rem] border border-orange-100 bg-white shadow-sm sm:grid-cols-[.8fr_1.2fr]"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-52 w-full object-cover sm:h-full" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Editorial content will be added after review and approval by the Foundation.</p><div class="mt-5 flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">${status}</span><a href="#/blog" class="text-xs font-extrabold text-brand-navy">Explore ${icon('arrow-up-right','inline w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>`;
};

/* app.js performs the first render before this override is loaded, so render once more
   after installing the inspiration homepage. */
if (typeof render === 'function') render();
