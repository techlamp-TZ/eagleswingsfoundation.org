/* Mission, Vision & Values page — adapted from the latest user-provided reference.
   Visual patterns are borrowed, not copied. Content remains specific to Eagle's Wings Foundation Tanzania.
   No invented beneficiary counts, testimonials, partner logos or global reach claims. */

routeMeta['mission-vision-values']='Mission, Vision & Values';
if (!resourceNav.some(([,id])=>id==='mission-vision-values')) resourceNav.unshift(['Mission, Vision & Values','mission-vision-values']);

EWPages['mission-vision-values']=()=>{
  const values=[
    ['heart-handshake','Dignity first','Support should respect identity, choice, family context and the person behind every need.'],
    ['shield-check','Accountability','Programs, stories and future giving should be backed by clear evidence, consent and responsible reporting.'],
    ['users-round','Inclusion','Children, older people, families and caregivers should be able to participate meaningfully in community life.'],
    ['book-open-check','Practical learning','Awareness matters most when it becomes useful knowledge, stronger routines and better everyday support.']
  ];

  return `
  <section class="mvv-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Community and children">
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.96),rgba(0,31,61,.68),rgba(0,31,61,.36))]"></div>
    <div class="mvv-brush absolute -left-20 bottom-0 h-32 w-80 bg-brand-orange"></div>
    <div class="relative mx-auto flex min-h-[400px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div class="max-w-4xl"><div class="eyebrow text-brand-orange">Our purpose</div><h1 class="mt-4 font-display text-6xl leading-[.98] sm:text-7xl">Creating hope. Shaping futures.</h1><div class="mt-5 flex items-center gap-2 text-xs font-semibold text-white/60"><a href="#/home" class="hover:text-white">Home</a><span>•</span><a href="#/about" class="hover:text-white">About</a><span>•</span><span>Mission, Vision & Values</span></div></div>
    </div>
  </section>

  <section class="mvv-paper py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
      <div class="relative">
        <div class="img-zoom overflow-hidden rounded-[2.8rem_2.8rem_5rem_2.8rem] shadow-soft"><img src="${photos.family}" class="h-[500px] w-full object-cover" alt="Family and community support"></div>
        <div class="absolute -bottom-7 right-8 grid h-28 w-28 place-items-center rounded-[2rem] bg-[#fff5c7] shadow-card"><span class="grid h-14 w-14 place-items-center rounded-full bg-brand-orange text-white">${icon('heart-handshake','w-7 h-7')}</span></div>
      </div>
      <div>${sectionHead('Our mission','Build stronger everyday support through inclusion, learning and care.','Eagle’s Wings Foundation Tanzania works to improve everyday support for people with disabilities and challenges, particularly children and older people, together with the families and caregivers around them.')}
        <div class="mt-8 space-y-4">${[
          ['brain','Grow neuro-diversity awareness and respectful inclusion.'],
          ['heart-pulse','Support healthy ageing through practical guidance.'],
          ['book-heart','Equip families with education and therapy guidance.'],
          ['sparkles','Strengthen life skills and caregiver capability.']
        ].map(([i,t])=>`<div class="flex items-center gap-3 rounded-2xl bg-brand-mist px-4 py-3"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon(i,'w-4 h-4')}</span><span class="text-sm font-bold text-brand-deep">${t}</span></div>`).join('')}</div>
        <div class="mt-8">${button('Explore our programs','#/programs','dark')}</div>
      </div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-5xl text-center"><div class="eyebrow text-brand-orange">Our vision</div><h2 class="mt-4 font-display text-5xl leading-[1.04] text-brand-deep sm:text-6xl">A Tanzania where children, older people and families experience dignity, understanding and practical support in everyday life.</h2><p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">We want communities where disability, neuro-diversity and ageing are met with informed care rather than stigma, and where families and caregivers have access to useful knowledge and support.</p></div>
      <div class="mvv-vision-grid mt-14 grid gap-5 md:grid-cols-[.72fr_1.3fr_.72fr] md:items-center"><div class="img-zoom overflow-hidden rounded-[2rem] shadow-card"><img src="${photos.child}" class="h-72 w-full object-cover" alt="Child support"></div><div class="img-zoom overflow-hidden rounded-[2.5rem] shadow-soft"><img src="${photos.people}" class="h-[390px] w-full object-cover" alt="Community participation"></div><div class="img-zoom overflow-hidden rounded-[2rem] shadow-card"><img src="${photos.care}" class="h-72 w-full object-cover" alt="Care and healthy ageing"></div></div>
    </div>
  </section>

  <section class="bg-[#fbfaf3] py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
      <div>${sectionHead('Our values','Principles that shape how the Foundation grows.','These values guide how Eagle’s Wings designs programs, works with families and communities, handles stories and prepares for future fundraising and reporting.')}
        <div class="mt-9 grid gap-5 sm:grid-cols-2">${values.map(([i,t,d],x)=>`<article class="mvv-value rounded-[1.7rem] border border-brand-navy/10 ${x===1?'bg-brand-orange text-brand-deep':'bg-white text-brand-deep'} p-6 shadow-sm"><span class="grid h-11 w-11 place-items-center rounded-full ${x===1?'bg-brand-deep text-white':'bg-brand-mist text-brand-navy'}">${icon(i,'w-5 h-5')}</span><h3 class="mt-5 font-display text-2xl">${t}</h3><p class="mt-3 text-sm leading-6 ${x===1?'text-brand-deep/65':'text-slate-600'}">${d}</p></article>`).join('')}</div>
      </div>
      <div class="relative"><div class="img-zoom overflow-hidden rounded-[2.6rem] shadow-soft"><img src="${photos.learning}" class="h-[560px] w-full object-cover" alt="Learning and community work"></div><div class="absolute -bottom-6 left-6 right-6 rounded-[1.8rem] bg-brand-deep p-6 text-white shadow-soft sm:left-auto sm:w-[66%]"><div class="eyebrow text-brand-orange">What trust means here</div><p class="mt-3 text-sm leading-7 text-white/65">No invented impact figures. No fabricated testimonials. Stories should be consented, evidence should be traceable, and growth should remain accountable.</p></div></div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mvv-promise overflow-hidden rounded-[2.8rem] bg-brand-deep text-white"><div class="grid lg:grid-cols-[1fr_.9fr]"><div class="p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Our promise</div><h2 class="mt-4 font-display text-5xl leading-tight">Grow carefully. Serve respectfully. Report truthfully.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">As Eagle’s Wings expands, the website and programs are designed to keep dignity, inclusion, accountability and practical usefulness at the centre.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Support the mission','#/donate','outline')}</div></div><div class="relative min-h-[380px]"><img src="${photos.care}" class="absolute inset-0 h-full w-full object-cover" alt="Care and community"><div class="absolute inset-0 bg-gradient-to-r from-brand-deep/45 to-transparent"></div></div></div></div></div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('What this means in practice','Four commitments visitors should be able to see across the website.','The reference includes customer testimonials; we replace that pattern with explicit commitments that can be verified over time.','center')}
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">${[
        ['shield-check','Transparent reporting','Publish approved reports and verified results as systems mature.'],
        ['user-check','Consent-aware stories','Use beneficiary, caregiver and partner stories only with appropriate consent.'],
        ['scale','Responsible stewardship','Connect future donations to clear program priorities and accountable use.'],
        ['refresh-cw','Continuous learning','Use feedback and evidence to improve programs before scaling them.']
      ].map(([i,t,d])=>`<article class="rounded-[1.8rem] bg-white p-6 shadow-card"><span class="grid h-12 w-12 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i)}</span><h3 class="mt-5 font-display text-2xl text-brand-deep">${t}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${d}</p></article>`).join('')}</div>
    </div>
  </section>`;
};

if (typeof render==='function' && route()==='mission-vision-values') render();