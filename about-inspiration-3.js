/* About page inspiration v3 — adapted from the latest supplied About Us reference.
   The layout borrows visual patterns only. Eagle's Wings content remains factual,
   with no invented beneficiary totals, partner logos, donor figures or testimonials. */

EWPages.about=()=>{
  const leadership=[
    ['Stella Paul Rweyemamu','Director','SR'],
    ['Tegemeo Paschal Nsonda','Executive Secretary','TN'],
    ['Paul Alex Rweyemamu','Treasurer','PR'],
    ['Winifrida Igembe Rweyemamu','Member','WR'],
    ['Doreen Temistocles Igembe','Member','DI']
  ];

  const process=[
    ['clipboard-check','Listen & assess','Understand the person, family or community need before proposing support.'],
    ['route','Plan the response','Match the need with awareness, guidance, life-skills learning or caregiver support.'],
    ['hand-heart','Deliver with dignity','Work respectfully with families, caregivers, volunteers and communities.'],
    ['chart-no-axes-combined','Learn & improve','Capture evidence, feedback and lessons before scaling what works.']
  ];

  const faq=[
    ['What does Eagle’s Wings Foundation focus on?','The Foundation focuses on neuro-diversity awareness, support for older people, education and therapy guidance, life-skills development and caregiver training.'],
    ['Who does the Foundation aim to support?','The work is designed around people with disabilities and challenges, particularly children and older people, together with the families and caregivers around them.'],
    ['How can I support the Foundation?','You can volunteer, partner, contribute professional expertise, provide in-kind support or donate once secure giving channels are activated.'],
    ['How will the Foundation report impact?','The website is structured to publish verified program results, annual reports and consent-approved stories rather than invented impact claims.']
  ];

  return `
  <section class="about3-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Community and children">
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.96),rgba(0,31,61,.70),rgba(0,31,61,.35))]"></div>
    <div class="about3-swash absolute -left-20 bottom-0 h-32 w-72 bg-brand-orange"></div>
    <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div><div class="eyebrow text-brand-orange">Our Foundation</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">About Us</h1><div class="mt-4 flex items-center gap-2 text-xs font-semibold text-white/55"><a href="#/home" class="hover:text-white">Home</a><span>•</span><span>About Us</span></div></div>
    </div>
  </section>

  <section class="about3-paper py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
      <div class="about3-collage relative">
        <div class="img-zoom overflow-hidden rounded-[2.8rem_2.8rem_5rem_2.8rem] shadow-soft"><img src="${photos.family}" class="h-[510px] w-full object-cover" alt="Family and community support"></div>
        <div class="absolute -bottom-7 right-7 grid h-28 w-28 place-items-center rounded-[2rem] bg-[#fff5c7] text-center shadow-card"><div><div class="font-display text-4xl text-brand-deep">5</div><div class="mt-1 text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-500">Core programs</div></div></div>
      </div>
      <div>${sectionHead('Who we are','A trusted mission built around dignity, inclusion and practical care.','Eagle’s Wings Foundation Tanzania was founded in 2025 in Tegeta, Dar es Salaam, to improve everyday support for people with disabilities and challenges, particularly children and older people.')}
        <div class="mt-8 grid gap-5 sm:grid-cols-2">${[
          ['coins','Purposeful giving','Support can be financial, professional, voluntary or in-kind.'],
          ['hand-heart','Volunteer participation','People can contribute time, skills, advocacy and practical support.'],
          ['book-open-check','Learning that becomes action','Awareness and guidance are designed to improve everyday care.'],
          ['shield-check','Responsible growth','Evidence, consent and transparent reporting guide how the Foundation grows.']
        ].map(([i,t,d])=>`<div class="flex gap-3"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-5 h-5')}</span><div><h3 class="text-sm font-extrabold text-brand-deep">${t}</h3><p class="mt-1 text-sm leading-6 text-slate-500">${d}</p></div></div>`).join('')}</div>
        <div class="mt-8 flex flex-wrap gap-3">${button('Explore programs','#/programs','dark')}${button('Get involved','#/get-involved','outline')}</div>
      </div>
    </div>
  </section>

  <section class="border-y border-brand-navy/10 bg-white py-10">
    <div class="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">${[
      ['2025','Founded'],['Tegeta','Community base'],['5','Core programs'],['5','Leadership members'],['Tanzania','Current country']
    ].map(([v,t])=>`<div class="about3-fact rounded-[1.7rem] border border-brand-navy/10 bg-white p-5 text-center shadow-sm"><div class="font-display text-3xl text-brand-deep">${v}</div><div class="mt-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-400">${t}</div></div>`).join('')}</div>
  </section>

  <section class="bg-[#fbfaf3] py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('How we work','Making support seamless, practical and accountable.','The reference uses a giving workflow. For Eagle’s Wings, the same visual idea becomes a transparent four-step operating approach.','center')}
      <div class="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">${process.map(([i,t,d],x)=>`<article class="about3-process relative text-center"><div class="mx-auto grid h-32 w-32 place-items-center rounded-full border-[10px] border-white bg-brand-mist shadow-card"><span class="grid h-16 w-16 place-items-center rounded-full ${x%2?'bg-brand-orange text-white':'bg-brand-navy text-white'}">${icon(i,'w-7 h-7')}</span></div><h3 class="mt-6 font-display text-2xl text-brand-deep">${t}</h3><p class="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">${d}</p>${x<3?'<span class="about3-arrow absolute -right-5 top-14 hidden text-brand-orange/40 lg:block">→</span>':''}</article>`).join('')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
      <div>${sectionHead('Our direction','Touching lives by building stronger everyday support.','The Foundation is intentionally building from a focused set of programs rather than making broad or unsupported impact claims.')}
        <div class="mt-8 space-y-5">${[
          ['Neuro-diversity awareness','Community understanding and respectful inclusion.'],
          ['Healthy ageing','Nutrition, safe movement and mental stimulation guidance.'],
          ['Family & therapy guidance','Practical learning for parents, families and caregivers.']
        ].map(([t,d],i)=>`<div><div class="flex items-center justify-between text-sm font-extrabold text-brand-deep"><span>${t}</span><span class="text-brand-orange">0${i+1}</span></div><div class="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full ${i===1?'bg-brand-orange':'bg-brand-navy'}" style="width:${[86,72,80][i]}%"></div></div><p class="mt-2 text-xs text-slate-500">${d}</p></div>`).join('')}</div>
        <div class="mt-8">${button('See all programs','#/programs','dark')}</div>
      </div>
      <div class="relative"><div class="img-zoom overflow-hidden rounded-[2.6rem] shadow-soft"><img src="${photos.care}" class="h-[520px] w-full object-cover" alt="Care and community support"></div><a href="#/gallery" class="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur transition hover:scale-105">${icon('play','w-9 h-9')}</a><div class="absolute -bottom-6 left-6 rounded-2xl bg-brand-orange p-5 text-white shadow-soft"><div class="text-xs font-extrabold uppercase tracking-[.14em]">Media library</div><div class="mt-1 text-sm">Approved stories and videos</div></div></div>
    </div>
  </section>

  <section class="bg-brand-mist py-20">
    <div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">${[
      ['heart-handshake','Give love & support','Contribute time, expertise, funds or in-kind support in responsible ways.','#/get-involved'],
      ['badge-check','Build useful capacity','Strengthen families, caregivers and communities through practical knowledge.','#/programs'],
      ['gift','Support responsibly','Use verified channels and clear program priorities when supporting the mission.','#/donate']
    ].map(([i,t,d,h],x)=>`<a href="${h}" class="about3-action rounded-[2rem] ${x===1?'bg-brand-orange text-brand-deep':x===2?'bg-brand-deep text-white':'bg-brand-navy text-white'} p-7 shadow-card"><span class="grid h-12 w-12 place-items-center rounded-full ${x===1?'bg-brand-deep text-white':'bg-white/10 text-brand-orange'}">${icon(i)}</span><h3 class="mt-6 font-display text-3xl">${t}</h3><p class="mt-3 text-sm leading-6 ${x===1?'text-brand-deep/60':'text-white/60'}">${d}</p><span class="mt-6 inline-flex items-center gap-1 text-xs font-extrabold ${x===1?'text-brand-deep':'text-brand-orange'}">Learn more ${icon('arrow-up-right','w-3.5 h-3.5')}</span></a>`).join('')}</div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Leadership','Meet the people guiding Eagle’s Wings.','The reference uses volunteer portraits; this version uses the Foundation’s verified leadership instead of invented profiles.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">${leadership.map(([n,r,initials],i)=>`<article class="about3-person rounded-[1.8rem] bg-white p-5 shadow-card"><div class="relative grid aspect-[4/4.6] place-items-center overflow-hidden rounded-[1.4rem] ${i%2?'bg-orange-50':'bg-brand-mist'}"><div class="grid h-28 w-28 place-items-center rounded-full ${i%2?'bg-brand-orange':'bg-brand-navy'} font-display text-4xl text-white shadow-soft">${initials}</div><span class="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon('plus','w-4 h-4')}</span></div><h3 class="mt-5 font-extrabold leading-tight text-brand-deep">${n}</h3><p class="mt-1 text-xs font-semibold text-slate-500">${r}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="about3-impact bg-brand-deep py-24 text-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><div class="eyebrow text-brand-orange">Impact stories</div><h2 class="mt-4 font-display text-5xl leading-tight">Stories should be truthful, consented and useful.</h2><p class="mt-5 max-w-xl leading-7 text-white/60">The reference contains customer testimonials. Eagle’s Wings will only publish beneficiary, caregiver or partner stories after consent and verification.</p><div class="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-orange text-white">${icon('shield-check','w-5 h-5')}</span><div><p class="text-sm font-extrabold">Consent-first storytelling</p><p class="mt-1 text-xs text-white/45">No invented quotations or unsupported numbers.</p></div></div></div><div class="rounded-[2.4rem] bg-white p-7 text-brand-deep shadow-soft"><div class="text-6xl leading-none text-brand-orange">“</div><h3 class="mt-2 font-display text-3xl">Verified stories coming soon</h3><p class="mt-4 text-sm leading-7 text-slate-500">This panel is reserved for a future approved story from a beneficiary, caregiver, volunteer or partner.</p><div class="mt-6 flex items-center gap-3"><span class="grid h-11 w-11 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon('user-round')}</span><div><div class="text-sm font-extrabold">Approved storyteller</div><div class="mt-1 text-xs text-slate-400">Name and role published with consent</div></div></div></div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:px-8"><div class="img-zoom overflow-hidden rounded-[2.4rem] shadow-soft"><img src="${photos.learning}" class="h-[500px] w-full object-cover" alt="Community learning"></div><div>${sectionHead('Questions people ask','Common questions about the Foundation and ways to participate.','A clearer FAQ inspired by the reference, adapted to Eagle’s Wings current stage.')}
      <div class="mt-8 space-y-3">${faq.map(([q,a],i)=>`<details class="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm" ${i===0?'open':''}><summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-brand-deep"><span>${q}</span><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-navy transition group-open:rotate-45">${icon('plus','w-4 h-4')}</span></summary><p class="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">${a}</p></details>`).join('')}</div>
    </div></div>
  </section>`;
};

if (typeof render === 'function' && route()==='about') render();