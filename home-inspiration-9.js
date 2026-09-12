/* Homepage inspiration v9 — cleaner, calmer and more premium.
   This intentionally replaces the overloaded v8 homepage with a shorter editorial flow.
   It uses only the Foundation's confirmed location, establishment year and program areas. */

home=function(){
  const homePrograms=[
    {icon:'brain',title:'Neuro-diversity Awareness',text:'Practical awareness around Autism, ADHD, Down syndrome and intellectual disability.',img:photos.child,href:'#/program-neurodiversity'},
    {icon:'heart-pulse',title:'Elderly Care Support',text:'Guidance around nutrition, safe movement, stimulation and dignified everyday support.',img:photos.care,href:'#/program-elderly-care'},
    {icon:'book-open',title:'Education & Therapy Guidance',text:'Clear, family-friendly learning around neurological conditions, therapy exercises and specialized parenting.',img:photos.family,href:'#/program-education-therapy'},
    {icon:'sparkles',title:'Life Skills Programs',text:'Structured support that strengthens practical independence and everyday confidence.',img:photos.learning,href:'#/program-life-skills'},
    {icon:'users',title:'Caregiver Training',text:'Helping caregivers build knowledge, consistency and confidence in day-to-day support.',img:photos.people,href:'#/program-caregiver-training'}
  ];

  const paths=[
    ['hand-heart','Volunteer','Give your time, skills or professional experience.','#/get-involved'],
    ['heart','Donate','Support the mission or a program area that matters to you.','#/donate'],
    ['handshake','Partner','Build responsible, practical collaborations with the Foundation.','#/partners']
  ];

  return `
  <section class="h9-hero relative overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.family}" class="h-full w-full object-cover opacity-45" alt="Family and community support"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.99)_0%,rgba(0,31,61,.92)_45%,rgba(0,31,61,.38)_100%)]"></div></div>
    <div class="absolute -left-20 -bottom-28 h-72 w-72 rounded-full border-[42px] border-brand-orange/20"></div>
    <div class="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-white/75">${icon('heart-handshake','w-4 h-4 text-brand-orange')} Eagle’s Wings Foundation Tanzania</div>
        <h1 class="mt-7 font-display text-6xl leading-[.98] sm:text-7xl lg:text-[5.4rem]">Inclusion begins with <span class="text-brand-orange">understanding.</span></h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-white/70">We support children, families, caregivers and older people through practical education, life-skills learning, healthy-ageing guidance and community awareness.</p>
        <div class="mt-9 flex flex-wrap gap-3">${button('Explore our programs','#/programs')}${button('Get involved','#/get-involved','outline')}</div>
        <div class="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold text-white/60"><span class="inline-flex items-center gap-2">${icon('map-pin','w-4 h-4 text-brand-orange')}Tegeta, Dar es Salaam</span><span class="inline-flex items-center gap-2">${icon('calendar-days','w-4 h-4 text-brand-orange')}Established 2025</span><span class="inline-flex items-center gap-2">${icon('layers-3','w-4 h-4 text-brand-orange')}5 program areas</span></div>
      </div>
      <div class="hidden lg:block"></div>
    </div>
  </section>

  <section class="h9-facts relative z-10 -mt-10">
    <div class="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-soft sm:grid-cols-3">
      ${[['5','Core program areas','Focused, practical areas of support'],['2025','Foundation established','A growing Tanzania-based organization'],['Tegeta','Dar es Salaam','Our current public base']].map(([n,t,d],i)=>`<div class="px-7 py-6 ${i?'border-t sm:border-l sm:border-t-0':''} border-slate-100"><div class="font-display text-4xl text-brand-orange">${n}</div><div class="mt-1 text-sm font-extrabold text-brand-deep">${t}</div><div class="mt-1 text-xs leading-5 text-slate-500">${d}</div></div>`).join('')}
    </div>
  </section>

  <section class="py-24 sm:py-28">
    <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8">
      <div class="h9-collage relative min-h-[520px]">
        <div class="absolute left-0 top-0 h-[78%] w-[68%] overflow-hidden rounded-[2.3rem] shadow-soft"><img src="${photos.child}" class="h-full w-full object-cover" alt="Child and family support"></div>
        <div class="absolute bottom-0 right-0 h-[58%] w-[55%] overflow-hidden rounded-[2.1rem] border-[8px] border-white shadow-soft"><img src="${photos.people}" class="h-full w-full object-cover" alt="Community support"></div>
        <div class="absolute right-[6%] top-[5%] grid h-28 w-28 place-items-center rounded-full bg-brand-orange text-center text-brand-deep shadow-card"><div><div class="font-display text-3xl">Care</div><div class="text-[9px] font-extrabold uppercase tracking-[.15em]">with dignity</div></div></div>
      </div>
      <div>
        <div class="eyebrow text-brand-orange">Who we are</div>
        <h2 class="mt-4 font-display text-5xl leading-[1.02] text-brand-deep sm:text-6xl">Practical support for everyday lives.</h2>
        <p class="mt-6 text-lg leading-8 text-slate-600">Eagle’s Wings Foundation Tanzania focuses on practical learning and community support for people with disabilities and challenges, particularly children and older people, together with the families and caregivers around them.</p>
        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          ${[['shield-check','Respect & dignity','Support should protect privacy, consent and personal dignity.'],['book-heart','Useful knowledge','Families and caregivers need guidance they can understand and use.'],['users-round','Community inclusion','Awareness should lead to practical participation and belonging.'],['sprout','Skills for everyday life','Small, consistent learning can strengthen independence and confidence.']].map(([i,t,d])=>`<div class="rounded-[1.4rem] border border-slate-100 bg-white p-5 shadow-sm"><span class="grid h-10 w-10 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><h3 class="mt-4 text-sm font-extrabold text-brand-deep">${t}</h3><p class="mt-2 text-xs leading-5 text-slate-500">${d}</p></div>`).join('')}
        </div>
        <div class="mt-8">${button('About the Foundation','#/about','outline')}</div>
      </div>
    </div>
  </section>

  <section class="h9-programs bg-[#fbfaf7] py-24 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div>${sectionHead('Our programs','Five focused areas. One shared purpose.','Each program is designed around practical understanding, stronger support and better everyday participation.')}</div>${button('View all programs','#/programs','outline')}</div>
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        ${homePrograms.map((p,i)=>`<a href="${p.href}" class="h9-program group ${i===0?'lg:col-span-2':''}"><div class="relative h-full min-h-[330px] overflow-hidden rounded-[2rem]"><img src="${p.img}" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" alt="${p.title}"><div class="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/35 to-transparent"></div><div class="absolute inset-x-0 bottom-0 p-6 sm:p-7"><span class="grid h-11 w-11 place-items-center rounded-full bg-brand-orange text-brand-deep shadow-sm">${icon(p.icon,'w-5 h-5')}</span><h3 class="mt-5 font-display text-3xl text-white">${p.title}</h3><p class="mt-2 max-w-xl text-sm leading-6 text-white/70">${p.text}</p><span class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-white">Learn more ${icon('arrow-up-right','w-3.5 h-3.5')}</span></div></div></a>`).join('')}
      </div>
    </div>
  </section>

  <section class="h9-method relative overflow-hidden bg-brand-deep py-24 text-white sm:py-28">
    <div class="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border-[46px] border-brand-orange/10"></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div><div class="eyebrow text-brand-orange">How we work</div><h2 class="mt-4 font-display text-5xl leading-tight sm:text-6xl">Start with understanding. Build with care.</h2><p class="mt-5 max-w-lg leading-7 text-white/60">We aim for support that is understandable, respectful and useful in everyday life.</p></div><div class="grid gap-4 sm:grid-cols-2">${[['01','Listen','Understand the person, family or community context first.'],['02','Educate','Turn complex topics into practical, understandable guidance.'],['03','Support','Strengthen routines, skills, confidence and participation.'],['04','Learn','Review what works and improve responsibly over time.']].map(([n,t,d])=>`<div class="rounded-[1.6rem] border border-white/10 bg-white/[.055] p-6 backdrop-blur"><div class="font-display text-4xl text-brand-orange">${n}</div><h3 class="mt-4 text-lg font-extrabold">${t}</h3><p class="mt-2 text-sm leading-6 text-white/60">${d}</p></div>`).join('')}</div></div></div>
  </section>

  <section class="py-24 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Take part','There is more than one way to strengthen the mission.','Choose the path that fits how you want to contribute.','center')}
      <div class="mt-12 grid gap-5 lg:grid-cols-3">${paths.map(([i,t,d,h],x)=>`<a href="${h}" class="h9-path group rounded-[2rem] border border-slate-100 ${x===1?'bg-brand-orange':'bg-white'} p-8 shadow-card transition hover:-translate-y-1"><span class="grid h-12 w-12 place-items-center rounded-full ${x===1?'bg-brand-deep text-white':'bg-brand-mist text-brand-navy'}">${icon(i,'w-5 h-5')}</span><h3 class="mt-7 font-display text-3xl text-brand-deep">${t}</h3><p class="mt-3 text-sm leading-6 ${x===1?'text-brand-deep/70':'text-slate-600'}">${d}</p><span class="mt-6 inline-flex items-center gap-1 text-xs font-extrabold text-brand-deep">Explore ${icon('arrow-up-right','w-3.5 h-3.5')}</span></a>`).join('')}</div>
    </div>
  </section>

  <section class="pb-24 sm:pb-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="h9-story relative overflow-hidden rounded-[2.6rem] bg-brand-deep text-white"><img src="${photos.care}" class="absolute inset-0 h-full w-full object-cover opacity-45" alt="Care and community"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.82),rgba(0,31,61,.18))]"></div><div class="relative max-w-2xl p-8 sm:p-12 lg:p-14"><div class="eyebrow text-brand-orange">Stories & learning</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Useful information should be easy to find and easy to understand.</h2><p class="mt-5 leading-7 text-white/60">Browse practical guidance, Foundation updates and future consent-approved stories from the communities we serve.</p><div class="mt-8 flex flex-wrap gap-3">${button('Read news & stories','#/blog')}${button('View gallery','#/gallery','outline')}</div></div></div>
    </div>
  </section>
  `;
};

if(typeof render==='function'&&route()==='home') render();
