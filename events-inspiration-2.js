/* Events listing v2 — adapted from the supplied Events Listing mockup.
   Preserves the strong vertical schedule layout without inventing dates, venues,
   attendance figures, organizers or sponsor logos. */

routeMeta.events='Events';
let ewEvents2Filter='all';
let ewEvents2Page=1;

const EWEvents2Rows=[
  ['event-neurodiversity-awareness','Awareness','Neuro-diversity Awareness Session','Public learning around Autism, ADHD, Down syndrome, intellectual disability and practical inclusion.',photos.child,'brain'],
  ['event-caregiver-workshop','Caregiving','Family & Caregiver Learning Workshop','Practical learning for families and caregivers supporting children and older people in everyday settings.',photos.family,'users-round'],
  ['event-healthy-ageing','Healthy ageing','Healthy Ageing Community Session','Nutrition, safe movement, mental stimulation and dignified support for older people.',photos.care,'heart-pulse'],
  ['event-life-skills','Life skills','Life Skills Practice Day','Communication, everyday routines, confidence and growing independence for autistic young people.',photos.learning,'sparkles'],
  ['event-family-guidance','Family guidance','Education & Therapy Guidance Session','Accessible learning around neurological conditions, therapy guidance and specialized parenting.',photos.people,'book-heart'],
  ['event-community-inclusion','Outreach','Community Inclusion Outreach','Community conversations designed to reduce stigma and make inclusion more practical.',photos.child,'megaphone'],
  ['event-volunteer-orientation','Volunteer','Volunteer Orientation & Service Day','Orientation around roles, safeguarding, privacy and responsible service boundaries.',photos.people,'hand-heart'],
  ['event-partners-briefing','Partnership','Partners & Supporters Briefing','A briefing format for organizations interested in sponsorship, expertise and responsible program growth.',photos.family,'handshake']
];

window.ewEvents2SetFilter=function(filter,btn){
  ewEvents2Filter=filter; ewEvents2Page=1;
  document.querySelectorAll('[data-events2-filter]').forEach(x=>x.className='events2-filter rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/20 hover:text-brand-navy');
  if(btn) btn.className='events2-filter rounded-xl border border-brand-navy bg-brand-navy px-5 py-3 text-xs font-extrabold text-white';
  ewEvents2RenderList();
};

window.ewEvents2PageTo=function(page){ ewEvents2Page=page; ewEvents2RenderList(); };

function ewEvents2Filtered(){
  if(ewEvents2Filter==='all') return EWEvents2Rows;
  const groups={learning:['Awareness','Caregiving','Family guidance'], wellbeing:['Healthy ageing','Life skills'], community:['Outreach','Volunteer','Partnership']};
  return EWEvents2Rows.filter(x=>(groups[ewEvents2Filter]||[]).includes(x[1]));
}

function ewEvents2RowsHtml(rows){
  return rows.map((e,i)=>`<article class="events2-row group grid overflow-hidden rounded-[1.8rem] border border-brand-navy/10 bg-[#eef8f5] shadow-sm lg:grid-cols-[150px_minmax(0,1fr)_310px]">
    <div class="flex items-center gap-4 border-b border-brand-navy/10 p-5 lg:block lg:border-b-0 lg:border-r lg:p-6">
      <div class="events2-date grid h-20 w-20 shrink-0 place-items-center rounded-[1.35rem] bg-brand-orange text-center text-white shadow-sm"><div><div class="font-display text-2xl leading-none">TBC</div><div class="mt-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-white/80">Date pending</div></div></div>
      <div class="lg:mt-4"><div class="text-[9px] font-extrabold uppercase tracking-[.15em] text-slate-400">Format ${String(((ewEvents2Page-1)*5)+i+1).padStart(2,'0')}</div><div class="mt-2 flex -space-x-2"><span class="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-brand-navy text-white">${icon(e[5],'w-3.5 h-3.5')}</span><span class="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-brand-orange text-white">${icon('heart','w-3.5 h-3.5')}</span><span class="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-emerald-600 text-white">${icon('users','w-3.5 h-3.5')}</span></div></div>
    </div>
    <div class="relative p-6 lg:p-7"><div class="flex flex-wrap items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.13em] text-brand-navy/55"><span class="inline-flex items-center gap-1.5">${icon('clock-3','w-3.5 h-3.5')}Time TBC</span><span class="inline-flex items-center gap-1.5">${icon('map-pin','w-3.5 h-3.5')}Venue TBC</span><span class="rounded-full bg-white px-3 py-1 text-brand-orange">${e[1]}</span></div><h2 class="mt-3 font-display text-2xl leading-tight text-brand-deep sm:text-3xl">${e[2]}</h2><p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">${e[3]}</p><a href="#/${e[0]}" class="mt-5 inline-flex items-center gap-1.5 rounded-xl border border-brand-navy/15 bg-white px-4 py-2.5 text-xs font-extrabold text-brand-navy transition hover:bg-brand-deep hover:text-white">Event details ${icon('arrow-up-right','w-3.5 h-3.5')}</a><span class="events2-heart absolute -right-6 top-1/2 hidden h-16 w-16 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-orange shadow-card lg:grid">${icon('heart-handshake','w-7 h-7')}</span></div>
    <div class="events2-image relative min-h-[230px] overflow-hidden bg-brand-deep"><img src="${e[4]}" class="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0" alt="${e[2]}"><div class="absolute inset-0 bg-gradient-to-r from-brand-deep/12 to-transparent"></div><span class="absolute bottom-4 right-4 rounded-full bg-brand-deep/85 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.14em] text-white backdrop-blur">Planned</span></div>
  </article>`).join('');
}

function ewEvents2RenderList(){
  const target=document.getElementById('events2List'); if(!target) return;
  const filtered=ewEvents2Filtered(); const size=5; const pages=Math.max(1,Math.ceil(filtered.length/size));
  if(ewEvents2Page>pages) ewEvents2Page=pages;
  const slice=filtered.slice((ewEvents2Page-1)*size,ewEvents2Page*size);
  target.innerHTML=ewEvents2RowsHtml(slice);
  const pager=document.getElementById('events2Pager');
  if(pager) pager.innerHTML=Array.from({length:pages},(_,i)=>`<button onclick="ewEvents2PageTo(${i+1})" class="grid h-10 min-w-10 place-items-center rounded-full border px-3 text-xs font-extrabold ${ewEvents2Page===i+1?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-slate-500 hover:border-brand-navy/25'}">${i+1}</button>`).join('');
  if(window.lucide) lucide.createIcons();
}

EWPages.events=()=>`
<section class="events2-hero relative isolate overflow-hidden text-white"><img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Eagle's Wings events"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.72),rgba(0,31,61,.45))]"></div><div class="events2-splash absolute -left-12 bottom-0 h-56 w-44 bg-brand-orange"></div><div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Community learning & participation</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">Events Listing</h1><p class="mt-4 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · Events Listing</p></div></div></section>

<section class="events2-paper py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div>${sectionHead('Upcoming events','Join our latest upcoming events.','Eagle’s Wings has not yet published confirmed public dates. This listing shows planned event formats and links to detailed previews until dates, venues and facilitators are approved.')}</div><div class="flex flex-wrap gap-2"><button data-events2-filter="all" onclick="ewEvents2SetFilter('all',this)" class="events2-filter rounded-xl border border-brand-navy bg-brand-navy px-5 py-3 text-xs font-extrabold text-white">All events</button><button data-events2-filter="learning" onclick="ewEvents2SetFilter('learning',this)" class="events2-filter rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/20 hover:text-brand-navy">Learning</button><button data-events2-filter="wellbeing" onclick="ewEvents2SetFilter('wellbeing',this)" class="events2-filter rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/20 hover:text-brand-navy">Wellbeing</button><button data-events2-filter="community" onclick="ewEvents2SetFilter('community',this)" class="events2-filter rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/20 hover:text-brand-navy">Community</button></div></div><div id="events2List" class="mt-12 grid gap-4">${ewEvents2RowsHtml(EWEvents2Rows.slice(0,5))}</div><div class="mt-9 flex items-center justify-center gap-2" id="events2Pager"><button onclick="ewEvents2PageTo(1)" class="grid h-10 min-w-10 place-items-center rounded-full border border-brand-navy bg-brand-navy px-3 text-xs font-extrabold text-white">1</button><button onclick="ewEvents2PageTo(2)" class="grid h-10 min-w-10 place-items-center rounded-full border border-slate-200 bg-white px-3 text-xs font-extrabold text-slate-500">2</button></div></div></section>

<section class="events2-trust py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Event publishing standards','Every event should be clear before people commit.','Instead of unverified sponsor logos, this section shows the publication standards Eagle’s Wings will apply to confirmed events.','center')}<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${[['calendar-check','Confirmed date'],['map-pinned','Approved venue'],['users-round','Named facilitator'],['shield-check','Safeguarding ready'],['badge-check','Registration status']].map(([i,t])=>`<div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 text-center shadow-sm"><span class="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><div class="mt-3 text-sm font-extrabold text-brand-deep">${t}</div><div class="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Required before confirmation</div></div>`).join('')}</div></div></section>

<section class="pb-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="events2-cta relative overflow-hidden rounded-[2.7rem] bg-brand-deep text-white"><img src="${photos.family}" class="absolute inset-0 h-full w-full object-cover opacity-34" alt="Community participation"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98),rgba(0,31,61,.84),rgba(0,31,61,.35))]"></div><div class="relative max-w-3xl p-8 sm:p-12 lg:p-14"><div class="eyebrow text-brand-orange">Want to take part?</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Express interest before the public calendar goes live.</h2><p class="mt-5 max-w-2xl leading-7 text-white/65">Contact the Foundation about a planned event, volunteer to help deliver one, or explore the program behind the event.</p><div class="mt-8 flex flex-wrap gap-3">${button('Contact the team','#/contact')}${button('Volunteer at events','#/get-involved','outline')}</div></div></div></div></section>`;

if(typeof render==='function'&&route()==='events'){ render(); setTimeout(ewEvents2RenderList,0); }
