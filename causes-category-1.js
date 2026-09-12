/* Support Areas / Causes Category page — adapted from the supplied category mockup.
   The reference layout is used as inspiration only. Eagle's Wings content stays grounded in
   the Foundation's verified program areas. No fundraising totals, progress percentages,
   donor names, testimonials, or beneficiary outcomes are fabricated. */

routeMeta.causes='Support Areas';

EWPages.causes=()=>{
  const items=[
    {
      route:'program-neurodiversity', tag:'Awareness', icon:'brain', title:'Neuro-diversity Awareness',
      text:'Build understanding around Autism, ADHD, Down syndrome and intellectual disability through respectful community education.',
      img:photos.child, focus:'Awareness & inclusion'
    },
    {
      route:'program-elderly-care', tag:'Care', icon:'heart-pulse', title:'Elderly Care Support',
      text:'Support older people and families with practical guidance around nutrition, physical activity and mental stimulation.',
      img:photos.care, focus:'Healthy ageing'
    },
    {
      route:'program-education-therapy', tag:'Education', icon:'book-heart', title:'Education & Therapy Guidance',
      text:'Share practical education around neurological conditions, therapy exercises and specialized parenting.',
      img:photos.family, focus:'Family learning'
    },
    {
      route:'program-life-skills', tag:'Skills', icon:'sparkles', title:'Life Skills Programs',
      text:'Strengthen confidence and everyday independence through structured life-skills support for young people with autism.',
      img:photos.learning, focus:'Independence'
    },
    {
      route:'program-caregiver-training', tag:'Training', icon:'users-round', title:'Caregiver Training',
      text:'Help caregivers build the knowledge, confidence and practical skills to support children and older people professionally.',
      img:photos.people, focus:'Caregiver development'
    }
  ];

  const planned=[
    ['Neuro-diversity','Making inclusion practical in everyday communities',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Practical ways to keep older people active and engaged',photos.care],
    ['Life skills','Building independence through repeatable routines',photos.learning]
  ];

  return `
  <section class="causecat-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover object-center opacity-40" alt="Eagle's Wings Foundation support areas"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.94),rgba(0,31,61,.56),rgba(0,31,61,.72))]"></div></div>
    <div class="relative mx-auto flex min-h-[340px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Programs you can support</div><h1 class="mt-4 font-display text-5xl sm:text-6xl">Support Areas</h1><p class="mt-3 text-sm text-white/60">Home · Support Areas</p></div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
        <div>${sectionHead('Where support can go','Together for a better tomorrow.','Browse the Foundation’s verified program areas and choose where your time, expertise, partnership or financial support can make the most sense.')}</div>
        <div class="causecat-search rounded-[1.5rem] border border-slate-100 bg-white p-4 shadow-card"><label class="text-xs font-extrabold uppercase tracking-[.14em] text-slate-400">Search support areas</label><div class="mt-3 flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3"><input id="causeSearch" class="min-w-0 flex-1 bg-transparent text-sm outline-none" placeholder="Search programs"><span class="text-slate-400">${icon('search','w-4 h-4')}</span></div></div>
      </div>

      <div class="mt-8 flex flex-wrap gap-2" id="causeFilters">
        ${['All','Awareness','Care','Education','Skills','Training'].map((x,i)=>`<button data-cause-filter="${x.toLowerCase()}" class="cause-filter rounded-full border px-4 py-2 text-xs font-extrabold transition ${i===0?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-slate-500 hover:border-brand-navy/30 hover:text-brand-navy'}">${x}</button>`).join('')}
      </div>

      <div id="causeGrid" class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        ${items.map((c,i)=>`<article data-cause-card data-tag="${c.tag.toLowerCase()}" data-search="${(c.title+' '+c.text+' '+c.focus).toLowerCase()}" class="causecat-card group overflow-hidden rounded-[1.9rem] border border-slate-100 bg-white shadow-card">
          <div class="img-zoom relative overflow-hidden"><img src="${c.img}" class="h-60 w-full object-cover" alt="${c.title}"><span class="absolute right-4 top-4 rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-white">${c.tag}</span></div>
          <div class="p-6"><div class="flex items-start gap-3"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(c.icon,'w-5 h-5')}</span><div><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-slate-400">${c.focus}</div><h2 class="mt-1 font-display text-2xl leading-tight text-brand-deep">${c.title}</h2></div></div><p class="mt-4 text-sm leading-6 text-slate-600">${c.text}</p>
          <div class="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100"><div class="h-full w-full rounded-full bg-gradient-to-r from-brand-navy via-emerald-600 to-brand-orange opacity-65"></div></div><p class="mt-2 text-[10px] font-bold uppercase tracking-[.13em] text-slate-400">Open for support · no target amount published</p>
          <div class="mt-6 grid grid-cols-2 gap-3"><a href="#/${c.route}" class="inline-flex items-center justify-center gap-1 rounded-full border border-brand-navy/15 px-4 py-3 text-xs font-extrabold text-brand-navy transition hover:bg-brand-mist">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</a><a href="#/donate" class="inline-flex items-center justify-center gap-1 rounded-full bg-brand-orange px-4 py-3 text-xs font-extrabold text-white">Support ${icon('heart','w-3.5 h-3.5')}</a></div></div>
        </article>`).join('')}
      </div>
      <div id="causeEmpty" class="mt-10 hidden rounded-[2rem] border border-dashed border-slate-200 bg-brand-mist p-10 text-center"><span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-brand-navy shadow-sm">${icon('search-x','w-5 h-5')}</span><h3 class="mt-4 font-display text-2xl text-brand-deep">No matching support area</h3><p class="mt-2 text-sm text-slate-500">Try another keyword or choose All.</p></div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8">
      <div>${sectionHead('Impact & accountability','Stories of impact and hope—only when verified.','The reference design includes beneficiary testimonials. Eagle’s Wings will publish only consent-based stories and validated results once its monitoring and approval processes are ready.')}<div class="mt-8 rounded-[1.8rem] border border-brand-navy/10 bg-white p-7 shadow-card"><div class="flex items-start gap-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-deep text-brand-orange">${icon('quote','w-5 h-5')}</span><div><h3 class="font-extrabold text-brand-deep">Verified story library in preparation</h3><p class="mt-3 text-sm leading-7 text-slate-600">Future stories will explain what changed, why it mattered, and how consent and evidence were handled.</p><a href="#/impact" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange">View the impact framework ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div></div></div>
      <div class="relative"><div class="img-zoom overflow-hidden rounded-[2.5rem] shadow-soft"><img src="${photos.people}" class="h-[470px] w-full object-cover" alt="Community and caregiver support"></div><div class="causecat-doodle absolute -right-5 -top-7 text-brand-navy/15">${icon('waves','w-24 h-24')}</div></div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Knowledge & updates','Read useful stories and guidance as our content library grows.','The editorial layout is adapted from the reference. Topics below are planned themes, not fabricated published articles.','center')}
      <div class="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1.1fr_.8fr]">
        ${planned.slice(0,2).map(([tag,title,img])=>`<article class="overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-60 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned educational content will be published after Foundation review and approval.</p><div class="mt-5 flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Planned topic</span><a href="#/resources" class="text-xs font-extrabold text-brand-navy">Explore</a></div></div></article>`).join('')}
        <div class="grid gap-4">${planned.slice(2).map(([tag,title,img])=>`<article class="grid grid-cols-[100px_1fr] gap-4 rounded-[1.4rem] border border-slate-100 bg-white p-3 shadow-sm"><img src="${img}" class="h-24 w-full rounded-xl object-cover" alt="${title}"><div class="py-1"><div class="text-[9px] font-extrabold uppercase tracking-[.14em] text-brand-orange">${tag}</div><h3 class="mt-1 font-display text-lg leading-tight text-brand-deep">${title}</h3><a href="#/resources" class="mt-3 inline-flex text-[11px] font-extrabold text-brand-navy">Explore</a></div></article>`).join('')}<a href="#/resources" class="flex items-center justify-between rounded-[1.4rem] bg-brand-deep p-5 text-white"><div><div class="eyebrow text-brand-orange">More resources</div><div class="mt-1 font-display text-xl">Browse the library</div></div>${icon('arrow-up-right','w-5 h-5')}</a></div>
      </div>
    </div>
  </section>`;
};

window.addEventListener('click',e=>{
  const btn=e.target.closest('[data-cause-filter]');
  if(!btn)return;
  document.querySelectorAll('.cause-filter').forEach(x=>x.className='cause-filter rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/30 hover:text-brand-navy');
  btn.className='cause-filter rounded-full border border-brand-navy bg-brand-navy px-4 py-2 text-xs font-extrabold text-white transition';
  btn.dataset.active='true';
  filterCauseCards();
});

function filterCauseCards(){
  const input=document.getElementById('causeSearch');
  if(!input)return;
  const q=input.value.trim().toLowerCase();
  const active=document.querySelector('[data-cause-filter][data-active="true"]')?.dataset.causeFilter || 'all';
  let shown=0;
  document.querySelectorAll('[data-cause-card]').forEach(card=>{
    const okTag=active==='all'||card.dataset.tag===active;
    const okQuery=!q||card.dataset.search.includes(q);
    const visible=okTag&&okQuery;
    card.classList.toggle('hidden',!visible);
    if(visible)shown++;
  });
  document.getElementById('causeEmpty')?.classList.toggle('hidden',shown!==0);
}

const causeObserver=new MutationObserver(()=>{
  const input=document.getElementById('causeSearch');
  if(input&&!input.dataset.wired){
    input.dataset.wired='true';
    input.addEventListener('input',filterCauseCards);
    const all=document.querySelector('[data-cause-filter="all"]');
    if(all)all.dataset.active='true';
  }
});
causeObserver.observe(document.documentElement,{childList:true,subtree:true});

if(typeof render==='function')render();
