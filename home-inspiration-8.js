/* Homepage inspiration v8
   Adapted from the latest long-form NGO/donation mockup supplied by the user.
   New patterns: bold donation-first split hero, paired participation cards, round service pillars,
   vulnerable-community feature, seamless-giving process, participation banner, FAQ + events row,
   donation starter overlay, trust principles and editorial cards.
   Content remains Eagle's Wings-specific. No invented beneficiary counts, donor totals, partner logos,
   testimonials, payment availability or international footprint claims are introduced. */

home = function(){
  const pillars = [
    ['graduation-cap','Awareness & education','Practical learning that improves understanding of neuro-diversity, disability and everyday inclusion.'],
    ['heart-pulse','Healthy ageing','Guidance around nutrition, safe movement, mental stimulation and dignified support for older people.'],
    ['droplets','Family & therapy guidance','Useful information for families navigating neurological conditions, therapy exercises and specialized parenting.'],
    ['hand-heart','Life skills & caregiving','Structured life-skills learning and caregiver development for stronger day-to-day support.']
  ];

  const programs = [
    {tag:'Awareness',title:'Neuro-diversity Awareness',text:'Community education around Autism, ADHD, Down syndrome and intellectual disability.',img:photos.child,href:'#/program-neurodiversity'},
    {tag:'Healthy ageing',title:'Elderly Care Support',text:'Nutrition, safe movement and mental stimulation guidance for older people and families.',img:photos.care,href:'#/program-elderly-care'},
    {tag:'Family guidance',title:'Education & Therapy Guidance',text:'Practical learning around neurological conditions, therapy exercises and specialized parenting.',img:photos.family,href:'#/program-education-therapy'}
  ];

  const givingSteps = [
    ['heart-handshake','Choose what matters','Support the mission generally or choose a verified program area that matches your priorities.'],
    ['smartphone','Choose a payment path','The interface is prepared for Mobile Money, card and bank transfer after merchant onboarding.'],
    ['shield-check','Give with safeguards','Payment collection only activates after secure merchant setup, review and internal approval.'],
    ['file-check-2','Follow the evidence','Program results and public accountability documents can be linked back to verified reporting.']
  ];

  const leaders = [
    ['Stella Paul Rweyemamu','Director','SR'],
    ['Tegemeo Paschal Nsonda','Executive Secretary','TN'],
    ['Paul Alex Rweyemamu','Treasurer','PR'],
    ['Winifrida Igembe Rweyemamu','Member','WR']
  ];

  const eventCards = [
    ['Awareness','Neuro-diversity awareness session','Planned public-learning format focused on inclusion and respectful support.','#/event-neurodiversity-awareness',photos.child],
    ['Caregiving','Family & caregiver workshop','Planned practical learning for families and people supporting children and older adults.','#/event-caregiver-workshop',photos.family],
    ['Healthy ageing','Healthy ageing community session','Planned guidance around nutrition, movement and mental stimulation in everyday life.','#/event-healthy-ageing',photos.care]
  ];

  const faqItems = [
    ['Can I donate to a specific program?','Yes—the frontend supports program-directed giving. Final allocation, reconciliation and reporting rules will be confirmed before live payments are activated.'],
    ['Which payment methods will be supported?','The interface is prepared for Mobile Money, card and bank transfer. These remain planned until merchant onboarding and secure checkout are completed.'],
    ['Can I volunteer instead of donating money?','Yes. Volunteer interests can include programs, events, communications, administration, professional expertise, partnerships and fundraising support.'],
    ['How will Eagle’s Wings report impact?','The site is structured to publish verified program results, annual reports and consent-approved stories rather than invented impact claims.']
  ];

  const updates = [
    ['Neuro-diversity','Making inclusion practical in everyday communities',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Simple ways to encourage activity and engagement',photos.care]
  ];

  return `
  <section class="v8-hero relative isolate overflow-hidden bg-[#fffdf8]">
    <div class="absolute inset-0 v8-grid opacity-40"></div>
    <div class="absolute right-[5%] top-[10%] h-48 w-48 rounded-full bg-brand-orange/12 blur-3xl"></div>
    <div class="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-8 lg:py-20">
      <div class="relative z-10 max-w-2xl">
        <div class="eyebrow text-brand-orange">Give • Participate • Strengthen everyday support</div>
        <h1 class="mt-5 font-display text-6xl leading-[.93] text-brand-deep sm:text-7xl lg:text-[5.6rem]">Donate now.<br><span class="text-brand-orange">Restore hope.</span><br>Build inclusion.</h1>
        <p class="mt-7 max-w-xl text-lg leading-8 text-slate-600">Your support helps Eagle’s Wings Foundation Tanzania expand practical education, inclusion, healthy-ageing guidance, life-skills learning and caregiver development.</p>
        <div class="mt-9 flex flex-wrap gap-3">${button('Donate with purpose','#/donate')}${button('Get involved','#/get-involved','dark')}</div>
        <div class="mt-9 flex flex-wrap gap-5 text-xs font-extrabold uppercase tracking-[.14em] text-slate-400"><span class="flex items-center gap-2">${icon('map-pin','w-4 h-4 text-brand-orange')}Tegeta, Dar es Salaam</span><span class="flex items-center gap-2">${icon('calendar-heart','w-4 h-4 text-brand-orange')}Established 2025</span></div>
      </div>
      <div class="relative min-h-[520px]">
        <div class="v8-hero-frame absolute inset-0 overflow-hidden rounded-[3rem] bg-brand-deep shadow-soft"><img src="${photos.people}" class="h-full w-full object-cover" alt="People supporting a community initiative"><div class="absolute inset-0 bg-gradient-to-t from-brand-deep/65 via-transparent to-transparent"></div></div>
        <div class="absolute -left-6 bottom-10 max-w-[240px] rounded-[1.7rem] bg-brand-navy p-5 text-white shadow-soft"><div class="flex items-center gap-3"><span class="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-brand-orange">${icon('heart-handshake','w-5 h-5')}</span><div><p class="text-xs font-extrabold uppercase tracking-[.13em] text-white/45">Support path</p><p class="mt-1 text-sm font-extrabold">Give • Volunteer • Partner</p></div></div></div>
        <a href="#/gallery" class="absolute bottom-8 right-8 grid h-20 w-20 place-items-center rounded-full border-[7px] border-white bg-brand-orange text-brand-deep shadow-soft transition hover:scale-105" aria-label="Explore approved media">${icon('play','w-7 h-7')}</a>
      </div>
    </div>
  </section>

  <section class="relative z-10 -mt-10 pb-10">
    <div class="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.15fr]">
      <a href="#/get-involved" class="v8-mini-action p-7"><span class="grid h-11 w-11 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon('hand-heart')}</span><div class="mt-5 text-[10px] font-extrabold uppercase tracking-[.15em] text-slate-400">Take part</div><h3 class="mt-1 font-display text-2xl text-brand-deep">Become a volunteer</h3><p class="mt-2 text-sm leading-6 text-slate-500">Share time, skills or professional expertise.</p></a>
      <a href="#/partners" class="v8-mini-action border-t border-slate-100 p-7 sm:border-l sm:border-t-0"><span class="grid h-11 w-11 place-items-center rounded-full bg-orange-50 text-brand-orange">${icon('briefcase-business')}</span><div class="mt-5 text-[10px] font-extrabold uppercase tracking-[.15em] text-slate-400">Build together</div><h3 class="mt-1 font-display text-2xl text-brand-deep">Partner with the mission</h3><p class="mt-2 text-sm leading-6 text-slate-500">Support through expertise, services or sponsorship.</p></a>
      <a href="#/donate" class="v8-mini-action relative overflow-hidden border-t border-slate-100 bg-brand-deep p-7 text-white sm:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0"><div class="absolute -right-8 -top-10 h-32 w-32 rounded-full border-[16px] border-brand-orange/15"></div><span class="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-brand-orange">${icon('coins')}</span><div class="mt-5 text-[10px] font-extrabold uppercase tracking-[.15em] text-white/40">Responsible giving</div><h3 class="mt-1 font-display text-2xl">Support a program</h3><p class="mt-2 text-sm leading-6 text-white/55">Directed-giving UI is ready for secure payment integration.</p></a>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('What we do','Practical help built around inclusion, learning and care.','The reference uses simple circular service pillars. Here they explain the real Eagle’s Wings operating model.','center')}
      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">${pillars.map(([i,t,d],x)=>`<article class="v8-pillar rounded-[8rem_8rem_2rem_2rem] ${x%2?'bg-orange-50':'bg-brand-mist'} px-6 pb-8 pt-10 text-center"><span class="mx-auto grid h-16 w-16 place-items-center rounded-full ${x%2?'bg-brand-orange text-brand-deep':'bg-white text-brand-navy'} shadow-sm">${icon(i,'w-6 h-6')}</span><h3 class="mt-6 font-display text-2xl text-brand-deep">${t}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="v8-soft relative overflow-hidden bg-brand-mist py-24">
    <div class="absolute -left-20 top-16 h-72 w-72 rounded-full border-[28px] border-brand-navy/5"></div>
    <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
      <div class="relative"><div class="img-zoom overflow-hidden rounded-[2.5rem] shadow-soft"><img src="${photos.family}" class="h-[520px] w-full object-cover" alt="Families and community"></div><div class="absolute -bottom-6 right-6 rounded-[1.6rem] bg-white p-5 shadow-card"><div class="font-display text-4xl text-brand-orange">5</div><div class="mt-1 text-xs font-extrabold uppercase tracking-[.13em] text-brand-deep">Core program areas</div></div></div>
      <div>${sectionHead('Vulnerable communities','Delivering hope through practical support.','Our programs focus on people with disabilities and challenges, particularly children and older people, together with the families and caregivers around them.')}
        <div class="mt-7 grid gap-3 sm:grid-cols-2">${['Children & young people','Older people','Families & caregivers','Communities & volunteers'].map(t=>`<div class="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-brand-deep shadow-sm"><span class="grid h-8 w-8 place-items-center rounded-full bg-orange-50 text-brand-orange">${icon('check','w-4 h-4')}</span>${t}</div>`).join('')}</div>
        <div class="mt-8 flex flex-wrap gap-3">${button('Explore programs','#/programs')}${button('Read our approach','#/about','outline')}</div>
      </div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">${sectionHead('Featured programs & causes','Support areas with a clear purpose.','Program cards use verified Eagle’s Wings activity areas rather than invented fundraising totals or progress percentages.')}<div>${button('View all programs','#/programs','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${programs.map((p,i)=>`<article class="v8-program overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white shadow-card"><div class="img-zoom relative overflow-hidden"><img src="${p.img}" class="h-64 w-full object-cover" alt="${p.title}"><span class="absolute left-5 top-5 rounded-full ${i===1?'bg-brand-navy':'bg-brand-orange'} px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.15em] text-white">${p.tag}</span></div><div class="p-6"><h3 class="font-display text-2xl text-brand-deep">${p.title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${p.text}</p><div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5"><span class="text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400">Verified program area</span><a href="${p.href}" class="inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Details ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="v8-banner relative overflow-hidden bg-brand-deep py-20 text-white">
    <div class="absolute inset-y-0 right-0 w-[46%]"><img src="${photos.care}" class="h-full w-full object-cover opacity-70" alt="Care and support"><div class="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/55 to-transparent"></div></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="max-w-2xl"><div class="eyebrow text-brand-orange">Build a future filled with opportunity</div><h2 class="mt-4 font-display text-5xl leading-tight">A better future grows when people participate.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">Volunteer, partner, sponsor a practical activity, share professional expertise or help widen responsible awareness.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Partner with us','#/partners','outline')}</div></div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Giving process','Making giving seamless, clear and secure.','The reference presents a circular donation journey. We adapt it into a transparent four-step process that stays inactive until secure payment onboarding is complete.','center')}
      <div class="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"><div class="absolute left-[12%] right-[12%] top-10 hidden border-t border-dashed border-brand-navy/20 lg:block"></div>${givingSteps.map(([i,t,d],x)=>`<article class="relative z-10 text-center"><span class="mx-auto grid h-20 w-20 place-items-center rounded-full border-[8px] border-white ${x%2?'bg-brand-orange text-brand-deep':'bg-brand-navy text-white'} shadow-card">${icon(i,'w-6 h-6')}</span><div class="mt-6 text-[10px] font-extrabold uppercase tracking-[.15em] text-slate-400">Step 0${x+1}</div><h3 class="mt-2 font-display text-2xl text-brand-deep">${t}</h3><p class="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Leadership','Meet the people guiding the Foundation.','The reference uses volunteer portraits. We keep the people-first presentation while using verified Eagle’s Wings leadership rather than invented volunteer profiles.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${leaders.map(([n,r,initials],i)=>`<article class="v8-person rounded-[1.8rem] bg-white p-5 shadow-card"><div class="grid aspect-[4/4.5] place-items-center rounded-[1.4rem] ${i%2?'bg-orange-50':'bg-white'} v8-person-frame"><div class="grid h-32 w-32 place-items-center rounded-full ${i%2?'bg-brand-orange':'bg-brand-navy'} font-display text-4xl text-white shadow-soft">${initials}</div></div><h3 class="mt-5 text-sm font-extrabold text-brand-deep">${n}</h3><p class="mt-1 text-xs text-slate-500">${r}</p></article>`).join('')}</div><div class="mt-10 text-center">${button('Meet the Foundation','#/about','dark')}</div>
    </div>
  </section>

  <div class="v8-marquee overflow-hidden border-y border-brand-navy/10 bg-white py-5"><div class="v8-marquee-track whitespace-nowrap font-display text-3xl text-brand-deep/85 sm:text-4xl"><span>Inclusion <b class="text-brand-orange">•</b> Awareness <b class="text-brand-orange">•</b> Caregiving <b class="text-brand-orange">•</b> Life skills <b class="text-brand-orange">•</b> Healthy ageing <b class="text-brand-orange">•</b> Support <b class="text-brand-orange">•</b> Participation <b class="text-brand-orange">•</b> Inclusion</span></div></div>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8"><div class="relative"><div class="img-zoom overflow-hidden rounded-[2.4rem] shadow-soft"><img src="${photos.people}" class="h-[500px] w-full object-cover" alt="Supporters and volunteers"></div><div class="absolute -bottom-5 -right-5 rounded-2xl bg-brand-orange p-5 text-brand-deep shadow-card"><div class="text-xs font-extrabold uppercase tracking-[.14em]">Every contribution can help</div><div class="mt-1 text-sm font-extrabold">Money • time • skills • networks</div></div></div><div>${sectionHead('Support our cause','Be a beacon of practical hope.','Support does not have to look the same for everyone. Choose a pathway that matches what you can give and what the Foundation can responsibly use.')}
      <div class="mt-7 grid gap-3">${[['coins','Financial support','Support planned program activity after secure checkout is activated.'],['hand-heart','Volunteer support','Contribute time, events help, communication or practical service.'],['briefcase-business','Professional expertise','Offer specialist skills, services or organizational support.'],['megaphone','Awareness support','Help widen respectful, accurate community understanding.']].map(([i,t,d])=>`<div class="flex gap-4 rounded-2xl border border-brand-navy/10 bg-white p-4"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><div><h3 class="text-sm font-extrabold text-brand-deep">${t}</h3><p class="mt-1 text-sm leading-6 text-slate-500">${d}</p></div></div>`).join('')}</div><div class="mt-8">${button('Choose how to help','#/get-involved')}</div>
    </div></div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:px-8"><div>${sectionHead('Common questions','Questions about giving, volunteering and accountability.','Clear answers make it easier for visitors to understand what is available now and what is still being prepared.')}<div class="mt-8">${button('View full FAQ','#/faq','outline')}</div></div><div class="space-y-3">${faqItems.map(([q,a],i)=>`<details class="group rounded-[1.4rem] border border-brand-navy/10 bg-white p-5 shadow-sm" ${i===0?'open':''}><summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-brand-deep">${q}<span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-navy group-open:rotate-45 transition">${icon('plus','w-4 h-4')}</span></summary><p class="mt-4 pr-8 text-sm leading-7 text-slate-600">${a}</p></details>`).join('')}</div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Upcoming event formats','Join our latest community learning activities.','Dates and venues are still to be confirmed. These cards show event formats the website is ready to publish once approved.','center')}
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${eventCards.map(([tag,title,text,href,img])=>`<article class="overflow-hidden rounded-[1.8rem] border border-brand-navy/10 bg-white shadow-card"><div class="img-zoom relative overflow-hidden"><img src="${img}" class="h-56 w-full object-cover" alt="${title}"><span class="absolute right-4 top-4 rounded-full bg-brand-orange px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.15em] text-white">Planned</span></div><div class="p-5"><div class="text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-orange">${tag} • Date TBC</div><h3 class="mt-2 font-display text-2xl text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">${text}</p><a href="${href}" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></article>`).join('')}</div>
    </div>
  </section>

  <section class="v8-give relative overflow-hidden bg-brand-deep py-24 text-white">
    <img src="${photos.child}" class="absolute inset-0 h-full w-full object-cover opacity-35" alt="Community support"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98),rgba(0,31,61,.82),rgba(0,31,61,.55))]"></div>
    <div class="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><div class="eyebrow text-brand-orange">Give your way</div><h2 class="mt-4 font-display text-5xl leading-tight">Start a contribution in a few clear steps.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">This is a frontend donation starter. It helps visitors choose an amount and payment preference, then continues to the dedicated donation page. No money is collected here.</p></div><div class="rounded-[2rem] bg-white p-6 text-brand-deep shadow-soft sm:p-8"><div class="grid gap-4 sm:grid-cols-2"><label class="text-xs font-extrabold uppercase tracking-[.12em] text-slate-400">Your name<input class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-brand-navy" placeholder="Name"></label><label class="text-xs font-extrabold uppercase tracking-[.12em] text-slate-400">Email<input type="email" class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-brand-navy" placeholder="you@example.com"></label></div><div class="mt-5 text-xs font-extrabold uppercase tracking-[.12em] text-slate-400">Choose an amount</div><div class="mt-3 flex flex-wrap gap-2">${['TZS 10,000','TZS 25,000','TZS 50,000','TZS 100,000'].map((a,i)=>`<button type="button" class="rounded-full ${i===1?'bg-brand-orange text-white':'border border-slate-200 bg-white text-brand-deep'} px-4 py-2 text-xs font-extrabold">${a}</button>`).join('')}</div><div class="mt-5 grid gap-3 sm:grid-cols-3">${[['smartphone','Mobile Money'],['credit-card','Card'],['landmark','Bank transfer']].map(([i,t])=>`<div class="rounded-xl border border-slate-200 p-3 text-center"><span class="mx-auto grid h-9 w-9 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><div class="mt-2 text-xs font-extrabold">${t}</div><div class="mt-1 text-[9px] uppercase tracking-[.1em] text-slate-400">Planned</div></div>`).join('')}</div><a href="#/donate" class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3.5 text-sm font-extrabold text-white">Continue to donation page ${icon('arrow-right','w-4 h-4')}</a></div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Trust principles','Credibility should be built through evidence—not decorative logos.','The inspiration uses trust badges and partner marks. Until Eagle’s Wings has confirmed organizations and certifications to display, the homepage communicates the standards the site is designed around.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${[['shield-check','Secure by design','Payments stay inactive until secure merchant onboarding is complete.'],['file-check-2','Evidence-led reporting','Impact claims should be tied to verified records and approved reports.'],['scan-face','Consent-aware stories','Beneficiary and participant stories should only be published with appropriate approval and consent.'],['scale','Clear governance','Public information should distinguish current services, planned features and future ambitions.']].map(([i,t,d])=>`<article class="rounded-[1.6rem] border border-brand-navy/10 bg-white p-6 text-center shadow-sm"><span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-5 h-5')}</span><h3 class="mt-5 font-display text-2xl text-brand-deep">${t}</h3><p class="mt-3 text-sm leading-6 text-slate-500">${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="bg-[#fffaf2] py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">${sectionHead('Knowledge & updates','Our latest learning and program stories.','Editorial cards are ready for approved articles, program updates and practical resources.')}<div>${button('Browse all updates','#/blog','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${updates.map(([tag,title,img])=>`<article class="overflow-hidden rounded-[1.8rem] bg-white shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-60 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned editorial topic. Final content will be published after Foundation review and approval.</p><a href="#/blog" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Read updates ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></article>`).join('')}</div>
    </div>
  </section>`;
};

if (typeof render === 'function') render();
