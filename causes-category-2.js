/* Support Areas / Causes Category v2
   Adapted from the latest supplied Causes Category V2 mockup.
   We use the denser catalogue/grid language while keeping Eagle's Wings content factual.
   No fundraising totals, donation progress, donor names, testimonials or beneficiary outcomes are invented. */

routeMeta.causes='Support Areas';

EWPages.causes=()=>{
  const items=[
    {route:'program-neurodiversity',category:'Neuro-diversity',tag:'Awareness',icon:'brain',title:'Community Neuro-diversity Awareness',text:'Build understanding around Autism, ADHD, Down syndrome and intellectual disability using respectful, practical education.',img:photos.child,focus:'Awareness & inclusion'},
    {route:'program-education-therapy',category:'Family guidance',tag:'Parenting',icon:'house-heart',title:'Family Education & Specialized Parenting',text:'Help parents and families understand neurological conditions and practical ways to support children at home.',img:photos.family,focus:'Family learning'},
    {route:'program-education-therapy',category:'Family guidance',tag:'Therapy',icon:'activity',title:'Therapy Exercise Guidance',text:'Share approved practical guidance around therapy exercises and everyday routines that families can practise consistently.',img:photos.learning,focus:'Practical guidance'},
    {route:'program-elderly-care',category:'Healthy ageing',tag:'Nutrition',icon:'apple',title:'Healthy Ageing Through Nutrition',text:'Support older people and families with practical nutrition guidance as part of dignified day-to-day care.',img:photos.care,focus:'Elderly care'},
    {route:'program-elderly-care',category:'Healthy ageing',tag:'Movement',icon:'person-standing',title:'Movement & Physical Activity Support',text:'Encourage safe, appropriate physical activity and family support that help older people stay engaged and active.',img:photos.people,focus:'Healthy ageing'},
    {route:'program-elderly-care',category:'Healthy ageing',tag:'Engagement',icon:'puzzle',title:'Mental Stimulation & Engagement',text:'Promote meaningful routines and mental stimulation for older people, including those facing Alzheimer’s or Dementia.',img:photos.family,focus:'Mental stimulation'},
    {route:'program-life-skills',category:'Life skills',tag:'Skills',icon:'sparkles',title:'Life Skills for Autistic Young People',text:'Structured learning focused on confidence, communication, participation and everyday independence, especially from age 12 upward.',img:photos.learning,focus:'Independence'},
    {route:'program-caregiver-training',category:'Training',tag:'Training',icon:'users-round',title:'Professional Caregiver Development',text:'Build caregiver knowledge, confidence and professional practice for supporting children and older people.',img:photos.people,focus:'Caregiver development'},
    {route:'program-caregiver-training',category:'Training',tag:'Support',icon:'heart-handshake',title:'Family & Caregiver Support Networks',text:'Strengthen the people around children and older people so support is more consistent, informed and dignified.',img:photos.care,focus:'Support network'}
  ];

  const planned=[
    ['Neuro-diversity','Making inclusion practical in everyday communities',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Practical ways to keep older people active and engaged',photos.care],
    ['Life skills','Building independence through repeatable routines',photos.learning]
  ];

  const categories=['All','Neuro-diversity','Healthy ageing','Family guidance','Life skills','Training'];

  return `
  <section class="cause2-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover object-center opacity-40" alt="Eagle's Wings Foundation support areas"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.95),rgba(0,31,61,.58),rgba(0,31,61,.72))]"></div></div>
    <div class="relative mx-auto flex min-h-[340px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Programs you can support</div><h1 class="mt-4 font-display text-5xl sm:text-6xl">Support Areas</h1><p class="mt-3 text-sm text-white/60">Home · Support Areas</p></div></div>
  </section>

  <section class="cause2-catalog py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
        <div>${sectionHead('Browse support areas','Empowering change through every cause.','Explore the Foundation’s verified program themes. Each card links into a detailed program page and shows the practical focus of that support area.')}</div>
        <div class="rounded-[1.45rem] border border-slate-100 bg-white p-5 shadow-card"><label for="cause2Search" class="text-xs font-extrabold uppercase tracking-[.14em] text-slate-400">Search support areas</label><div class="mt-3 flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3"><input id="cause2Search" class="min-w-0 flex-1 bg-transparent text-sm outline-none" placeholder="Search"><span class="text-slate-400">${icon('search','w-4 h-4')}</span></div></div>
      </div>

      <div id="cause2Filters" class="mt-8 flex gap-2 overflow-x-auto pb-2">
        ${categories.map((c,i)=>`<button data-cause2-filter="${c.toLowerCase()}" class="cause2-filter whitespace-nowrap rounded-full border px-4 py-2 text-xs font-extrabold transition ${i===0?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-slate-500 hover:border-brand-navy/30 hover:text-brand-navy'}">${c}</button>`).join('')}
      </div>

      <div id="cause2Grid" class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        ${items.map((c)=>`<article data-cause2-card data-category="${c.category.toLowerCase()}" data-search="${(c.title+' '+c.text+' '+c.focus+' '+c.category+' '+c.tag).toLowerCase()}" class="cause2-card group overflow-hidden rounded-[1.5rem] border border-brand-navy/10 bg-white">
          <div class="img-zoom relative overflow-hidden"><img src="${c.img}" class="h-56 w-full object-cover" alt="${c.title}"><span class="absolute right-4 top-4 rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-white">${c.tag}</span></div>
          <div class="p-5">
            <div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.13em] text-slate-400"><span class="grid h-7 w-7 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(c.icon,'w-3.5 h-3.5')}</span>${c.focus}</div>
            <h2 class="mt-3 font-display text-[1.35rem] leading-tight text-brand-deep">${c.title}</h2>
            <p class="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">${c.text}</p>
            <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-[10px] font-extrabold uppercase tracking-[.12em] text-slate-400"><span>${c.category}</span><span>Open for support</span></div>
            <div class="mt-4 flex gap-3"><a href="#/${c.route}" class="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-brand-navy/15 px-4 py-2.5 text-xs font-extrabold text-brand-navy transition hover:bg-brand-mist">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</a><a href="#/donate" aria-label="Support ${c.title}" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-orange text-white shadow-sm">${icon('heart','w-4 h-4')}</a></div>
          </div>
        </article>`).join('')}
      </div>
      <div id="cause2Empty" class="mt-10 hidden rounded-[2rem] border border-dashed border-slate-200 bg-brand-mist p-10 text-center"><span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-brand-navy shadow-sm">${icon('search-x','w-5 h-5')}</span><h3 class="mt-4 font-display text-2xl text-brand-deep">No matching support area</h3><p class="mt-2 text-sm text-slate-500">Try another keyword or select All.</p></div>
    </div>
  </section>

  <section class="cause2-impact bg-brand-mist py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8">
      <div>${sectionHead('Impact & accountability','Stories of impact and hope—only when verified.','The reference includes a beneficiary testimonial. Eagle’s Wings will publish only consent-based stories and validated evidence after its monitoring and approval processes are ready.')}<div class="mt-8 rounded-[1.7rem] border border-brand-navy/10 bg-white p-7 shadow-card"><div class="flex gap-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-deep text-brand-orange">${icon('quote','w-5 h-5')}</span><div><h3 class="font-extrabold text-brand-deep">Verified story library in preparation</h3><p class="mt-3 text-sm leading-7 text-slate-600">Future stories will explain what changed, why it mattered and how consent and evidence were handled. Until then, the site avoids fictional voices and results.</p><a href="#/impact" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange">View our impact framework ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div></div><div class="mt-5 flex gap-2"><span class="h-2 w-8 rounded-full bg-brand-navy"></span><span class="h-2 w-2 rounded-full bg-slate-200"></span><span class="h-2 w-2 rounded-full bg-slate-200"></span></div></div>
      <div class="relative"><div class="img-zoom overflow-hidden rounded-[2.2rem] shadow-soft"><img src="${photos.people}" class="h-[460px] w-full object-cover" alt="Community and caregiver support"></div><div class="cause2-waves absolute -right-6 -top-8 text-brand-navy/15">${icon('waves','w-24 h-24')}</div></div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Knowledge & updates','Read useful stories and guidance as our content library grows.','The editorial composition is adapted from your mockup. The items below are planned themes rather than fake published stories.','center')}
      <div class="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1.1fr_.8fr]">
        ${planned.slice(0,2).map(([tag,title,img])=>`<article class="overflow-hidden rounded-[1.6rem] border border-slate-100 bg-white shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-60 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned educational content will be published after Foundation review and approval.</p><div class="mt-5 flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Planned topic</span><a href="#/resources" class="text-xs font-extrabold text-brand-navy">Explore</a></div></div></article>`).join('')}
        <div class="grid gap-4">${planned.slice(2).map(([tag,title,img])=>`<article class="grid grid-cols-[96px_1fr] gap-4 rounded-[1.35rem] border border-slate-100 bg-white p-3 shadow-sm"><img src="${img}" class="h-24 w-full rounded-xl object-cover" alt="${title}"><div class="py-1"><div class="text-[9px] font-extrabold uppercase tracking-[.14em] text-brand-orange">${tag}</div><h3 class="mt-1 font-display text-lg leading-tight text-brand-deep">${title}</h3><a href="#/resources" class="mt-3 inline-flex text-[11px] font-extrabold text-brand-navy">Explore</a></div></article>`).join('')}<a href="#/resources" class="flex items-center justify-between rounded-[1.35rem] bg-brand-deep p-5 text-white"><div><div class="eyebrow text-brand-orange">More resources</div><div class="mt-1 font-display text-xl">Browse the library</div></div>${icon('arrow-up-right','w-5 h-5')}</a></div>
      </div>
    </div>
  </section>`;
};

function filterCause2Cards(){
  const input=document.getElementById('cause2Search');
  if(!input)return;
  const q=input.value.trim().toLowerCase();
  const active=document.querySelector('[data-cause2-filter][data-active="true"]')?.dataset.cause2Filter||'all';
  let shown=0;
  document.querySelectorAll('[data-cause2-card]').forEach(card=>{
    const tagOk=active==='all'||card.dataset.category===active;
    const queryOk=!q||card.dataset.search.includes(q);
    const visible=tagOk&&queryOk;
    card.classList.toggle('hidden',!visible);
    if(visible)shown++;
  });
  document.getElementById('cause2Empty')?.classList.toggle('hidden',shown!==0);
}

window.addEventListener('click',e=>{
  const btn=e.target.closest('[data-cause2-filter]');
  if(!btn)return;
  document.querySelectorAll('[data-cause2-filter]').forEach(x=>{x.dataset.active='false';x.className='cause2-filter whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/30 hover:text-brand-navy';});
  btn.dataset.active='true';
  btn.className='cause2-filter whitespace-nowrap rounded-full border border-brand-navy bg-brand-navy px-4 py-2 text-xs font-extrabold text-white transition';
  filterCause2Cards();
});

const cause2Observer=new MutationObserver(()=>{
  const input=document.getElementById('cause2Search');
  if(input&&!input.dataset.wired){
    input.dataset.wired='true';
    input.addEventListener('input',filterCause2Cards);
    const all=document.querySelector('[data-cause2-filter="all"]');
    if(all)all.dataset.active='true';
  }
});
cause2Observer.observe(document.documentElement,{childList:true,subtree:true});

if(typeof render==='function')render();
