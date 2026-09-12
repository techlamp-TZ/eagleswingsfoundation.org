/* About page inspiration v2 — adapted from the latest supplied reference.
   Uses verified Eagle's Wings content only. No fake volunteers, testimonials,
   partner logos, impact metrics, or beneficiary stories are introduced. */

EWPages.about=()=>{
  const leadership=[
    ['Stella Paul Rweyemamu','Director','SR'],
    ['Tegemeo Paschal Nsonda','Executive Secretary','TN'],
    ['Paul Alex Rweyemamu','Treasurer','PR'],
    ['Winifrida Igembe Rweyemamu','Member','WR'],
    ['Doreen Temistocles Igembe','Member','DI']
  ];
  const storyTopics=[
    ['Neuro-diversity','Making inclusion practical in everyday communities',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Practical ways to keep older people engaged',photos.care],
    ['Life skills','Building confidence through repeatable routines',photos.learning]
  ];

  return `
  <section class="about2-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover opacity-45" alt="Eagle's Wings community">
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.94),rgba(0,31,61,.58),rgba(0,31,61,.30))]"></div>
    <div class="relative mx-auto flex min-h-[330px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <div><div class="eyebrow text-brand-orange">Who we are</div><h1 class="mt-4 font-display text-5xl sm:text-6xl">About Eagle’s Wings</h1><div class="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/60"><a href="#/home" class="hover:text-white">Home</a><span>•</span><span>About us</span></div></div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
      <div class="about2-collage relative">
        <div class="grid grid-cols-[1.05fr_.95fr] gap-4">
          <div class="img-zoom overflow-hidden rounded-[2.1rem] shadow-soft"><img src="${photos.child}" class="h-[470px] w-full object-cover" alt="Child support"></div>
          <div class="space-y-4 pt-8"><div class="img-zoom overflow-hidden rounded-[2rem] shadow-card"><img src="${photos.family}" class="h-52 w-full object-cover" alt="Family support"></div><div class="img-zoom overflow-hidden rounded-[2rem] shadow-card"><img src="${photos.care}" class="h-64 w-full object-cover" alt="Care and ageing support"></div></div>
        </div>
        <div class="about2-mark absolute -bottom-6 -right-4 grid h-24 w-24 place-items-center rounded-full bg-brand-orange text-white shadow-soft">${icon('heart-handshake','w-9 h-9')}</div>
      </div>
      <div>${sectionHead('Our story','Compassion in action. Building a better tomorrow.','Eagle’s Wings Foundation Tanzania was founded in 2025 in Tegeta, Dar es Salaam, to improve the lives of people with disabilities and challenges, particularly children and older people.')}
        <div class="mt-8 rounded-[1.8rem] bg-brand-mist p-6">
          <div class="grid gap-4">${[
            ['users-round','Together for a brighter future','Support works best when families, caregivers and communities are included.'],
            ['sparkles','Change one step at a time','Practical learning turns awareness into better everyday support.'],
            ['heart-handshake','United by dignity and purpose','People deserve support that respects identity, choice and potential.']
          ].map(([i,t,d])=>`<div class="flex items-start gap-3"><span class="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon(i,'w-4 h-4')}</span><div><h3 class="text-sm font-extrabold text-brand-deep">${t}</h3><p class="mt-1 text-sm leading-6 text-slate-500">${d}</p></div></div>`).join('')}</div>
        </div>
        <div class="mt-8 flex flex-wrap gap-3">${button('Explore our programs','#/programs','dark')}${button('Get involved','#/get-involved','outline')}</div>
      </div>
    </div>
  </section>

  <section class="border-y border-slate-100 bg-white py-10">
    <div class="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">${[
      ['calendar-heart','Founded','2025'],['map-pin','Community base','Tegeta, Dar es Salaam'],['layout-grid','Core program areas','5'],['shield-check','Approach','Dignity & inclusion']
    ].map(([i,t,v])=>`<div class="rounded-2xl border border-slate-100 p-5"><span class="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-brand-orange">${icon(i,'w-4 h-4')}</span><p class="mt-4 text-xs font-extrabold uppercase tracking-[.16em] text-slate-400">${t}</p><p class="mt-1 font-display text-2xl text-brand-deep">${v}</p></div>`).join('')}</div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Leadership','Meet the people guiding the mission.','We use the Foundation’s verified leadership list rather than inventing volunteer profiles or staff identities.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">${leadership.map(([n,r,initials],i)=>`<article class="float-card rounded-[1.8rem] bg-white p-5 shadow-card"><div class="about2-person relative grid aspect-[4/4.65] place-items-center overflow-hidden rounded-[1.4rem] ${i%2?'bg-orange-50':'bg-white'}"><div class="grid h-28 w-28 place-items-center rounded-full ${i%2?'bg-brand-orange':'bg-brand-navy'} font-display text-4xl text-white shadow-soft">${initials}</div><span class="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon('plus','w-4 h-4')}</span></div><h3 class="mt-5 font-extrabold leading-tight text-brand-deep">${n}</h3><p class="mt-1 text-xs font-semibold text-slate-500">${r}</p></article>`).join('')}</div>
      <div class="mt-10 text-center">${button('See our programs','#/programs','dark')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="about2-cta relative overflow-hidden rounded-[2.8rem] bg-brand-deep text-white"><img src="${photos.child}" class="absolute inset-0 h-full w-full object-cover object-center opacity-45" alt="Child and community"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98)_0%,rgba(0,31,61,.83)_54%,rgba(0,31,61,.18)_100%)]"></div><div class="relative max-w-2xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Join the mission</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Together we can build a better tomorrow.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">Support can come through volunteering, partnerships, professional expertise, in-kind contributions or financial giving.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Donate','#/donate','outline')}</div></div></div></div>
  </section>

  <section class="about2-impact overflow-hidden bg-brand-deep py-24 text-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
      <div><div class="eyebrow text-emerald-300">Stories of impact and hope</div><h2 class="mt-4 font-display text-4xl sm:text-5xl">Stories should be real, consented and worth trusting.</h2><p class="mt-5 max-w-xl leading-7 text-white/60">The reference uses a beneficiary testimonial. Eagle’s Wings will publish this kind of story only after consent and verification. Until then, the website clearly shows that the story library is being prepared.</p><div class="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-orange text-white">${icon('shield-check','w-5 h-5')}</span><div><p class="text-sm font-extrabold">Consent-first storytelling</p><p class="mt-1 text-xs text-white/45">No invented quotations or impact claims.</p></div></div></div>
      <div class="relative"><div class="img-zoom overflow-hidden rounded-[2.4rem] border border-white/10 shadow-2xl"><img src="${photos.care}" class="h-[430px] w-full object-cover opacity-90" alt="Care and support"></div><div class="absolute -bottom-5 left-5 right-5 rounded-[1.8rem] bg-white p-6 text-brand-deep shadow-soft sm:left-auto sm:right-6 sm:w-[62%]"><div class="text-5xl leading-none text-brand-orange">“</div><h3 class="mt-1 font-display text-2xl">Verified stories coming soon</h3><p class="mt-3 text-sm leading-6 text-slate-500">This card is ready for an approved beneficiary, caregiver or partner story when the Foundation has consent and source material.</p></div></div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">${sectionHead('Knowledge & updates','Inspiring stories. Meaningful insights.','A magazine-style grid inspired by the reference, prepared for approved educational content and Foundation news.')}<div>${button('Browse news','#/blog','outline')}</div></div>
      <div class="mt-12 grid gap-6 lg:grid-cols-2">${storyTopics.map(([tag,title,img])=>`<article class="grid overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-sm sm:grid-cols-[.8fr_1.2fr]"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-52 w-full object-cover sm:h-full" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned educational content. Publication will begin after Foundation review and approval.</p><div class="mt-5 flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Planned topic</span><a href="#/blog" class="text-xs font-extrabold text-brand-navy">Explore ${icon('arrow-up-right','inline w-3.5 h-3.5')}</a></div></div></article>`).join('')}</div>
    </div>
  </section>`;
};

if (typeof render === 'function' && route()==='about') render();