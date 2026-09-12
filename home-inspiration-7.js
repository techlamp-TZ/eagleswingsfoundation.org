/* Homepage inspiration v7
   Adapted from the latest long-form charity mockup supplied by the user.
   New patterns: credibility strip, circular facts, vulnerable-community split, media story panel,
   denser six-card program catalogue, FAQ, giving-priority module, consent-aware photo ribbon.
   No invented beneficiary counts, donor totals, testimonials, partner logos or geographic reach. */

home = function(){
  const focusCards = [
    {tag:'Awareness',icon:'brain',title:'Neuro-diversity Awareness',text:'Community learning around Autism, ADHD, Down syndrome and intellectual disability.',img:photos.child,href:'#/program-neurodiversity'},
    {tag:'Healthy ageing',icon:'heart-pulse',title:'Elderly Care Support',text:'Nutrition, safe movement and mental stimulation guidance for older people and families.',img:photos.care,href:'#/program-elderly-care'},
    {tag:'Family guidance',icon:'book-heart',title:'Education & Therapy Guidance',text:'Practical learning around neurological conditions, therapy exercises and specialized parenting.',img:photos.family,href:'#/program-education-therapy'},
    {tag:'Life skills',icon:'sparkles',title:'Life Skills Programs',text:'Structured support for communication, routines, confidence and growing independence.',img:photos.learning,href:'#/program-life-skills'},
    {tag:'Caregiving',icon:'users-round',title:'Caregiver Training',text:'Helping families, volunteers and professional caregivers build practical knowledge and confidence.',img:photos.people,href:'#/program-caregiver-training'},
    {tag:'Inclusion',icon:'megaphone',title:'Community Inclusion',text:'Respectful outreach designed to reduce stigma and connect communities with useful information.',img:photos.child,href:'#/causes'}
  ];

  const facts = [
    ['5','Core program areas','layers-3'],
    ['5','Leadership members','users-round'],
    ['2025','Foundation established','calendar-heart'],
    ['1','Current Tanzania base','map-pinned']
  ];

  const faqItems = [
    ['Can I volunteer even if I am not a health professional?','Yes. Volunteer interests can include programs, events, communications, fundraising, administration and professional skills. The Foundation can review where your contribution best fits.'],
    ['Can I support a specific program?','The frontend is prepared for program-directed giving. Final allocation and payment workflows will be confirmed when the Foundation completes its merchant and reporting setup.'],
    ['Are online donations live now?','Not yet. Mobile Money, card and bank-transfer interfaces are being prepared, but live checkout should only activate after merchant onboarding and internal approval.'],
    ['How will impact be reported?','The site is structured to publish verified program results, annual reports and consent-approved stories rather than invented impact numbers.']
  ];

  const updates = [
    ['Neuro-diversity','Making inclusion practical in everyday communities',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Simple ways to encourage activity and engagement',photos.care]
  ];

  return `
  <section class="v7-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.family}" class="h-full w-full object-cover grayscale" alt="Family and community"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97)_0%,rgba(0,31,61,.83)_43%,rgba(0,31,61,.28)_78%,rgba(0,31,61,.18)_100%)]"></div></div>
    <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-deep/70 to-transparent"></div>
    <div class="v7-yellow-line absolute left-[5%] top-[13%] h-[76%] w-1 rounded-full bg-brand-orange"></div>
    <div class="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
      <div class="max-w-3xl pl-4 sm:pl-8">
        <div class="eyebrow text-brand-orange">Give • Participate • Build inclusion</div>
        <h1 class="mt-5 font-display text-6xl leading-[.95] sm:text-7xl lg:text-[5.7rem]">Your support builds a <span class="text-brand-orange">brighter future.</span></h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-white/70">Eagle’s Wings Foundation Tanzania advances inclusion, practical care, life-skills learning and caregiver development for children, older people, families and communities.</p>
        <div class="mt-9 flex flex-wrap gap-3">${button('Support the mission','#/donate')}${button('Explore programs','#/programs','outline')}</div>
      </div>
      <div class="hidden lg:block"></div>
    </div>
  </section>

  <section class="border-b border-brand-navy/10 bg-white">
    <div class="mx-auto grid max-w-7xl gap-0 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">${facts.map(([n,t,i])=>`<div class="v7-fact flex items-center gap-4 border-b border-brand-navy/10 px-5 py-6 sm:border-b-0 sm:border-r"><span class="grid h-12 w-12 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i)}</span><div><div class="font-display text-3xl text-brand-deep">${n}</div><div class="mt-1 text-[10px] font-extrabold uppercase tracking-[.15em] text-slate-400">${t}</div></div></div>`).join('')}</div>
  </section>

  <section class="v7-paper py-24">
    <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:px-8">
      <div class="relative">
        <div class="grid grid-cols-[1.08fr_.92fr] gap-4"><div class="img-zoom overflow-hidden rounded-[2.4rem] shadow-soft"><img src="${photos.people}" class="h-[460px] w-full object-cover" alt="Community support"></div><div class="space-y-4 pt-12"><div class="img-zoom overflow-hidden rounded-[1.8rem] shadow-card"><img src="${photos.child}" class="h-52 w-full object-cover" alt="Child support"></div><div class="rounded-[1.8rem] bg-brand-deep p-6 text-white"><div class="eyebrow text-brand-orange">Our approach</div><p class="mt-3 text-sm leading-7 text-white/65">Practical knowledge, dignity, participation and accountable growth.</p></div></div></div>
        <div class="absolute -bottom-6 left-8 rounded-2xl bg-brand-orange px-5 py-4 text-brand-deep shadow-card"><div class="text-sm font-extrabold">People first</div><div class="mt-1 text-xs text-brand-deep/60">Consent-aware storytelling</div></div>
      </div>
      <div>${sectionHead('About the Foundation','Join us in building a brighter future for all.','Our work focuses on practical support, awareness and learning that can strengthen everyday care for people with disabilities and challenges, particularly children and older people.')}
        <div class="mt-8 grid gap-4 sm:grid-cols-2">${[['heart-handshake','Dignity-led support','Respectful, practical support shaped around people and families.'],['shield-check','Accountability by design','Verified evidence, clear reporting and responsible use of stories.']].map(([i,t,d])=>`<div class="rounded-[1.5rem] border border-brand-navy/10 bg-white p-5 shadow-sm"><span class="grid h-10 w-10 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><h3 class="mt-4 text-sm font-extrabold text-brand-deep">${t}</h3><p class="mt-2 text-sm leading-6 text-slate-500">${d}</p></div>`).join('')}</div><div class="mt-8">${button('Learn about us','#/about','dark')}</div>
      </div>
    </div>
  </section>

  <section class="bg-[#fffaf2] py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Foundation at a glance','Verified facts—not invented impact totals.','The inspiration uses large beneficiary statistics. We preserve the visual emphasis while showing only facts already confirmed for Eagle’s Wings.','center')}
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">${facts.map(([n,t,i],x)=>`<div class="v7-ring-card relative grid aspect-square place-items-center rounded-full bg-white text-center shadow-card"><div class="absolute inset-3 rounded-full border ${x%2?'border-brand-orange/40':'border-brand-navy/20'}"></div><div class="relative px-7"><span class="mx-auto grid h-11 w-11 place-items-center rounded-full ${x%2?'bg-orange-50 text-brand-orange':'bg-brand-mist text-brand-navy'}">${icon(i,'w-5 h-5')}</span><div class="mt-4 font-display text-4xl text-brand-deep">${n}</div><div class="mt-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-400">${t}</div></div></div>`).join('')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('How support helps','Helping people through practical, focused action.','The reference groups support into simple cards. We adapt that idea to Eagle’s Wings’ real operating model.','center')}
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${[['brain','Awareness & inclusion','Build understanding and reduce stigma around neuro-diversity and disability.',photos.child],['book-open-check','Education & guidance','Share practical learning for families, caregivers and communities.',photos.learning],['heart-pulse','Healthy ageing & care','Promote nutrition, movement, mental stimulation and dignified everyday support.',photos.care]].map(([i,t,d,img],x)=>`<article class="v7-support-card overflow-hidden rounded-[2rem] ${x===1?'bg-brand-navy text-white':'bg-white text-brand-deep'} shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-52 w-full object-cover" alt="${t}"></div><div class="p-6"><span class="grid h-11 w-11 place-items-center rounded-full ${x===1?'bg-white/10 text-brand-orange':'bg-brand-mist text-brand-navy'}">${icon(i)}</span><h3 class="mt-5 font-display text-2xl">${t}</h3><p class="mt-3 text-sm leading-6 ${x===1?'text-white/60':'text-slate-600'}">${d}</p></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div class="img-zoom overflow-hidden rounded-[2.5rem] shadow-soft"><img src="${photos.family}" class="h-[500px] w-full object-cover" alt="Families and community"></div><div>${sectionHead('Vulnerable communities','We are here to support everyday inclusion.','Eagle’s Wings focuses on practical learning and support for people with disabilities and challenges, particularly children and older people, together with the families and caregivers around them.')}
      <div class="mt-7 flex flex-wrap gap-2">${['Children & young people','Older people','Families','Caregivers','Communities'].map(t=>`<span class="rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-xs font-extrabold text-brand-navy">${t}</span>`).join('')}</div><div class="mt-8">${button('Explore programs','#/programs')}</div></div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="v7-media relative overflow-hidden rounded-[2.8rem] bg-brand-deep text-white shadow-soft"><img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover opacity-50" alt="Community gathering"><div class="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/70 to-brand-deep/20"></div><div class="relative grid min-h-[430px] items-center gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_.7fr] lg:p-16"><div><div class="eyebrow text-brand-orange">Stories in motion</div><h2 class="mt-4 max-w-xl font-display text-5xl leading-tight">A future film library for programs, events and community learning.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">This section is prepared for approved Eagle’s Wings videos. No beneficiary film is published until media, consent and usage rights are confirmed.</p></div><div class="flex justify-center"><a href="#/gallery" class="v7-play grid h-24 w-24 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:scale-105">${icon('play','w-9 h-9')}</a></div></div></div></div>
  </section>

  <div class="v7-marquee overflow-hidden border-y border-brand-navy/10 bg-white py-5"><div class="v7-marquee-track whitespace-nowrap font-display text-3xl text-brand-deep/85 sm:text-4xl"><span>Inclusion <b class="text-brand-orange">•</b> Awareness <b class="text-brand-orange">•</b> Education <b class="text-brand-orange">•</b> Healthy ageing <b class="text-brand-orange">•</b> Life skills <b class="text-brand-orange">•</b> Caregiver development <b class="text-brand-orange">•</b> Inclusion <b class="text-brand-orange">•</b> Awareness</span></div></div>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">${sectionHead('Featured programs & support themes','Six clear ways the mission becomes practical.','A denser catalogue inspired by the reference, using Eagle’s Wings’ verified program areas and related support themes.')}<div>${button('View all programs','#/programs','outline')}</div></div>
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${focusCards.map((p,i)=>`<article class="v7-program overflow-hidden rounded-[1.8rem] border border-brand-navy/10 bg-white shadow-card"><div class="img-zoom relative overflow-hidden"><img src="${p.img}" class="h-52 w-full object-cover" alt="${p.title}"><span class="absolute right-4 top-4 rounded-full ${i%2?'bg-brand-navy':'bg-brand-orange'} px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.15em] text-white">${p.tag}</span></div><div class="p-5"><span class="grid h-10 w-10 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(p.icon,'w-4 h-4')}</span><h3 class="mt-4 font-display text-2xl text-brand-deep">${p.title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${p.text}</p><a href="${p.href}" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="v7-community overflow-hidden bg-brand-deep py-24 text-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><div class="eyebrow text-brand-orange">Join our community</div><h2 class="mt-4 font-display text-5xl leading-tight">Participation matters as much as donation.</h2><p class="mt-5 max-w-xl leading-7 text-white/60">Give time, professional expertise, advocacy, partnership support or financial resources. The mission grows through people who take part responsibly.</p><div class="mt-8 flex flex-wrap gap-3">${button('Volunteer','#/get-involved')}${button('Partner with us','#/partners','outline')}</div></div><div class="grid gap-4 sm:grid-cols-2">${[['hand-heart','Volunteer','Programs, events and operations'],['briefcase-business','Partner','Expertise, services and sponsorship'],['megaphone','Advocate','Share respectful awareness'],['gift','Support','Financial or in-kind help']].map(([i,t,d])=>`<div class="rounded-[1.6rem] border border-white/10 bg-white/[.06] p-6"><span class="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-brand-orange">${icon(i)}</span><h3 class="mt-5 font-display text-2xl">${t}</h3><p class="mt-2 text-sm text-white/50">${d}</p></div>`).join('')}</div></div>
  </section>

  <section class="bg-[#fffaf2] py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Give with direction','Choose the kind of support you want to begin with.','This is a frontend planning interface. Live payments remain disabled until merchant onboarding is complete.','center')}
      <div class="mt-12 grid gap-8 rounded-[2.5rem] bg-white p-6 shadow-soft lg:grid-cols-[.9fr_1.1fr] lg:p-10"><div class="relative overflow-hidden rounded-[2rem] bg-brand-deep p-8 text-white"><div class="eyebrow text-brand-orange">Support priorities</div><h3 class="mt-4 font-display text-4xl">Start with what matters most to you.</h3><div class="mt-8 grid gap-3">${[['brain','Neuro-diversity awareness'],['heart-pulse','Healthy ageing'],['book-heart','Family education & therapy'],['sparkles','Life skills'],['users-round','Caregiver development']].map(([i,t])=>`<a href="#/donate" class="flex items-center justify-between rounded-xl border border-white/10 bg-white/[.06] px-4 py-3"><span class="flex items-center gap-3 text-sm font-bold"><span class="text-brand-orange">${icon(i,'w-4 h-4')}</span>${t}</span>${icon('chevron-right','w-4 h-4 text-white/35')}</a>`).join('')}</div></div><div><div class="grid gap-4 sm:grid-cols-2"><label class="text-sm font-bold text-brand-deep">Your name<input class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy" placeholder="Full name"></label><label class="text-sm font-bold text-brand-deep">Email<input type="email" class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy" placeholder="you@example.com"></label></div><div class="mt-5"><div class="text-sm font-extrabold text-brand-deep">Suggested starting amounts</div><div class="mt-3 flex flex-wrap gap-2">${['10,000','25,000','50,000','100,000'].map(a=>`<button type="button" class="rounded-full border border-brand-navy/10 bg-brand-mist px-4 py-2 text-xs font-extrabold text-brand-navy">TZS ${a}</button>`).join('')}</div></div><div class="mt-5 grid gap-3 sm:grid-cols-3">${[['smartphone','Mobile Money'],['credit-card','Card'],['landmark','Bank Transfer']].map(([i,t])=>`<div class="rounded-2xl border border-slate-100 p-4 text-center"><span class="mx-auto grid h-10 w-10 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><div class="mt-3 text-xs font-extrabold text-brand-deep">${t}</div><div class="mt-1 text-[10px] uppercase tracking-[.12em] text-slate-400">Planned</div></div>`).join('')}</div><div class="mt-6">${button('Continue to donation page','#/donate')}</div><p class="mt-4 text-xs leading-5 text-slate-400">No payment is processed from this homepage module.</p></div></div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:px-8"><div class="img-zoom overflow-hidden rounded-[2.5rem] shadow-soft"><img src="${photos.people}" class="h-[500px] w-full object-cover" alt="Community volunteers"></div><div>${sectionHead('Questions before you support?','Common questions about participation and giving.','A homepage FAQ reduces uncertainty before visitors move to volunteer, partnership or donation flows.')}
      <div class="mt-8 space-y-3">${faqItems.map(([q,a],i)=>`<details class="group rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm" ${i===0?'open':''}><summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-brand-deep">${q}<span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-navy group-open:rotate-45">${icon('plus','w-4 h-4')}</span></summary><p class="mt-4 pr-10 text-sm leading-7 text-slate-600">${a}</p></details>`).join('')}</div><div class="mt-7">${button('View all FAQs','#/faq','outline')}</div></div></div>
  </section>

  <section class="bg-brand-deep py-24 text-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8"><div><div class="eyebrow text-brand-orange">Responsible storytelling</div><h2 class="mt-4 font-display text-5xl leading-tight">Impact stories will be powerful because they are verified.</h2><p class="mt-5 max-w-xl leading-7 text-white/60">The reference uses customer testimonials. Eagle’s Wings will publish beneficiary and participant stories only after consent, factual review and appropriate safeguarding checks.</p><div class="mt-8">${button('See our impact framework','#/impact')}</div></div><div class="grid grid-cols-2 gap-4"><img src="${photos.child}" class="h-56 w-full rounded-[1.8rem] object-cover" alt="Child support"><img src="${photos.care}" class="mt-10 h-56 w-full rounded-[1.8rem] object-cover" alt="Care support"><img src="${photos.family}" class="h-56 w-full rounded-[1.8rem] object-cover" alt="Family support"><img src="${photos.learning}" class="mt-10 h-56 w-full rounded-[1.8rem] object-cover" alt="Learning support"></div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Knowledge & updates','Our latest learning themes and Foundation updates.','The editorial structure is ready for approved news, caregiver resources, event recaps and program learning.','center')}
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${updates.map(([tag,title,img])=>`<article class="overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-60 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned editorial content will be published after Foundation review and approval.</p><a href="#/blog" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Browse updates ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="pb-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mb-8 text-center"><div class="eyebrow text-brand-orange">Gallery preview</div><h2 class="mt-3 font-display text-4xl text-brand-deep">A visual record of the mission—published with care.</h2><p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">These are layout placeholders. Final media should use approved Eagle’s Wings photographs and videos with appropriate consent.</p></div><div class="v7-photo-ribbon grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">${[photos.child,photos.family,photos.care,photos.learning,photos.people,photos.child].map((img,i)=>`<a href="#/gallery" class="img-zoom overflow-hidden rounded-[1.4rem]"><img src="${img}" class="h-44 w-full object-cover" alt="Gallery placeholder ${i+1}"></a>`).join('')}</div></div>
  </section>`;
};

if(typeof render==='function') render();
