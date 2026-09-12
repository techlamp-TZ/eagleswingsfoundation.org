/* Event detail pages — adapted from the supplied Upcoming Event Details mockup.
   The layout keeps the reference's deep event-information structure while Eagle's Wings content remains factual.
   No dates, times, venues, attendance figures, testimonials or outcomes are fabricated. */

const EWEventDetails={
  'event-neurodiversity-awareness':{
    title:'Neuro-diversity Awareness Session',tag:'Awareness',icon:'brain',img:photos.child,program:'program-neurodiversity',
    intro:'A planned public-learning session focused on Autism, ADHD, Down syndrome, intellectual disability and practical inclusion.',
    summary:'This event format is designed to help families, caregivers, educators and community members build a clearer and more respectful understanding of neuro-diversity. The session will connect awareness with practical inclusion rather than labels alone.',
    highlights:['Respectful language and practical inclusion','Family and community participation','Clear referral boundaries for clinical questions'],
    agenda:['Welcome and purpose of the session','Accessible learning around neuro-diversity','Practical inclusion examples and discussion','Questions, resources and next steps']
  },
  'event-caregiver-workshop':{
    title:'Family & Caregiver Learning Workshop',tag:'Caregiving',icon:'users-round',img:photos.family,program:'program-caregiver-training',
    intro:'A practical learning format for families and caregivers supporting children and older people in everyday settings.',
    summary:'The workshop format focuses on communication, consistent routines, dignity, observation and responsible support boundaries. It is intended to help families and caregivers translate learning into day-to-day practice.',
    highlights:['Practical caregiver routines','Respectful communication','Professional escalation when needed'],
    agenda:['Understanding support needs','Communication and daily-care practice','Observation, documentation and consistency','Questions and follow-up resources']
  },
  'event-healthy-ageing':{
    title:'Healthy Ageing Community Session',tag:'Healthy ageing',icon:'heart-pulse',img:photos.care,program:'program-elderly-care',
    intro:'A planned community session around nutrition, safe movement, mental stimulation and dignified support for older people.',
    summary:'This event format helps families and caregivers think about healthy daily routines for older people, including those facing age-related memory or cognitive challenges. It is educational and does not replace medical assessment.',
    highlights:['Nutrition and healthy routines','Safe movement and engagement','Dignified family support'],
    agenda:['Healthy-ageing priorities','Nutrition and movement discussion','Mental stimulation and meaningful routines','When to seek professional advice']
  },
  'event-life-skills':{
    title:'Life Skills Practice Day',tag:'Life skills',icon:'sparkles',img:photos.learning,program:'program-life-skills',
    intro:'A practical learning format centred on communication, everyday routines, confidence and growing independence for autistic young people.',
    summary:'This format breaks useful everyday skills into manageable steps and creates space for guided practice. Families and caregivers are part of the learning approach so useful routines can continue beyond the session.',
    highlights:['Step-by-step practical learning','Confidence and participation','Family reinforcement of routines'],
    agenda:['Choose meaningful everyday skills','Break routines into achievable steps','Guided practice and supportive feedback','Planning for continued practice at home']
  },
  'event-family-guidance':{
    title:'Education & Therapy Guidance Session',tag:'Family guidance',icon:'book-heart',img:photos.people,program:'program-education-therapy',
    intro:'A family-learning format for understanding neurological conditions, therapy guidance and specialized parenting approaches.',
    summary:'This event format translates complex information into accessible learning for families and caregivers. Guidance is educational and general; individualized diagnosis, treatment and therapy planning remain with qualified professionals.',
    highlights:['Accessible family education','Practical home-support ideas','Responsible professional referral'],
    agenda:['Identify common family learning needs','Explain key concepts clearly','Discuss practical home-support routines','Professional referral and next steps']
  },
  'event-community-inclusion':{
    title:'Community Inclusion Outreach',tag:'Outreach',icon:'megaphone',img:photos.child,program:'program-neurodiversity',
    intro:'A community-engagement format designed to reduce stigma, share respectful information and connect people to appropriate support.',
    summary:'Outreach activities create opportunities to talk openly about disability, neuro-diversity, ageing and inclusion in ways that are practical, respectful and relevant to everyday community life.',
    highlights:['Community-centred awareness','Stigma reduction and respectful language','Connections to appropriate support'],
    agenda:['Community welcome and listening','Focused awareness discussion','Practical inclusion actions','Resources, referrals and follow-up']
  },
  'event-volunteer-orientation':{
    title:'Volunteer Orientation & Service Day',tag:'Volunteer',icon:'hand-heart',img:photos.people,program:'get-involved',
    intro:'An orientation format for supporters who want to contribute time, practical help, communication or event support responsibly.',
    summary:'The orientation introduces volunteers to the Foundation’s mission, safeguarding expectations, practical roles and boundaries. It is designed to help people contribute effectively without overstepping professional or privacy responsibilities.',
    highlights:['Clear volunteer roles','Safeguarding and privacy awareness','Responsible service boundaries'],
    agenda:['Foundation mission and programs','Volunteer roles and expectations','Safeguarding, privacy and conduct','Role matching and next steps']
  },
  'event-partners-briefing':{
    title:'Partners & Supporters Briefing',tag:'Partnership',icon:'handshake',img:photos.family,program:'partners',
    intro:'A planned briefing format for organizations and supporters interested in partnerships, sponsorship and responsible program growth.',
    summary:'This briefing format gives prospective partners a clear view of the Foundation’s program areas, governance approach, current stage of growth and the kinds of support that can be explored responsibly.',
    highlights:['Program and governance overview','Responsible partnership pathways','Clear next-step discussions'],
    agenda:['Foundation overview','Program priorities and current stage','Ways organizations can contribute','Due diligence and next steps']
  }
};

const EWEventRouteIds=Object.keys(EWEventDetails);
EWEventRouteIds.forEach(id=>{routeMeta[id]=EWEventDetails[id].title;});

function ewEventSidebar(activeId){
  const e=EWEventDetails[activeId];
  return `<aside class="event-detail-sidebar space-y-6 lg:sticky lg:top-28 lg:self-start">
    <div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-card">
      <label class="text-sm font-extrabold text-brand-deep">Search event formats</label>
      <div class="relative mt-3"><input oninput="filterEventSidebar(this.value)" placeholder="Search" class="w-full rounded-xl border border-slate-200 py-3 pl-4 pr-11 text-sm outline-none focus:border-brand-navy"><span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">${icon('search','w-4 h-4')}</span></div>
      <div id="eventSideList" class="mt-4 grid gap-2">${EWEventRouteIds.map(id=>{const x=EWEventDetails[id];return `<a data-event-name="${(x.title+' '+x.tag).toLowerCase()}" href="#/${id}" class="rounded-xl border px-4 py-2.5 text-xs font-bold transition ${id===activeId?'border-brand-orange bg-orange-50 text-brand-orange':'border-slate-200 text-slate-600 hover:border-brand-navy/30 hover:bg-brand-mist hover:text-brand-navy'}">${x.title}</a>`}).join('')}</div>
    </div>

    <div class="rounded-[1.6rem] border-t-4 border-brand-orange bg-white p-6 shadow-card">
      <div class="eyebrow text-brand-orange">Event status</div>
      <div class="mt-5 grid gap-4 text-sm">
        ${[['calendar-days','Date','To be confirmed'],['clock-3','Time','To be confirmed'],['map-pin','Venue','To be confirmed'],['tag','Format',e.tag]].map(([i,k,v])=>`<div class="flex gap-3"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><div><div class="text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400">${k}</div><div class="mt-1 font-bold text-brand-deep">${v}</div></div></div>`).join('')}
      </div>
      <a href="#event-interest-form" class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-deep px-5 py-3 text-xs font-extrabold text-white">Express interest ${icon('arrow-down','w-3.5 h-3.5')}</a>
    </div>

    <div class="event-detail-map rounded-[1.6rem] border border-brand-navy/10 p-7 shadow-sm">
      <span class="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon('map-pinned','w-5 h-5')}</span>
      <h3 class="mt-5 font-display text-2xl text-brand-deep">Venue map will appear here</h3>
      <p class="mt-3 text-sm leading-6 text-slate-500">We will activate directions only after the Foundation approves an event venue. No location is invented in the prototype.</p>
    </div>

    <a href="#/${e.program}" class="flex items-center justify-between rounded-[1.5rem] bg-brand-deep p-5 text-white shadow-card"><span><span class="text-xs font-extrabold uppercase tracking-[.14em] text-brand-orange">Related work</span><span class="mt-1 block font-display text-xl">Explore the program</span></span>${icon('arrow-up-right','w-5 h-5')}</a>
  </aside>`;
}

function filterEventSidebar(value){
  const q=(value||'').toLowerCase().trim();
  document.querySelectorAll('#eventSideList [data-event-name]').forEach(a=>{a.style.display=!q||a.dataset.eventName.includes(q)?'block':'none';});
}
window.filterEventSidebar=filterEventSidebar;

function eventDetailPage(id){
  const e=EWEventDetails[id];
  return `
  <section class="event-detail-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover opacity-40" alt="Eagle's Wings event details"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.94),rgba(0,31,61,.56),rgba(0,31,61,.76))]"></div></div>
    <div class="relative mx-auto flex min-h-[340px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Planned event format</div><h1 class="mt-4 font-display text-5xl sm:text-6xl">${e.title}</h1><p class="mt-3 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · <a href="#/events" class="hover:text-white">Events</a> · Details</p></div></div>
  </section>

  <section class="py-20 lg:py-24"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-8">
    <article class="min-w-0">
      <div class="event-detail-feature img-zoom rounded-[2.2rem] shadow-soft"><img src="${e.img}" class="h-[380px] w-full rounded-[2.2rem] object-cover sm:h-[520px]" alt="${e.title}"></div>
      <div class="mt-8 flex flex-wrap items-center gap-3"><span class="inline-flex items-center gap-2 rounded-full bg-brand-mist px-4 py-2 text-xs font-extrabold text-brand-navy">${icon('calendar-clock','w-4 h-4')}Date & time TBC</span><span class="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-extrabold text-brand-orange">${icon(e.icon,'w-4 h-4')}${e.tag}</span><span class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-500">${icon('map-pin','w-4 h-4')}Venue TBC</span></div>
      <h2 class="mt-6 font-display text-4xl leading-tight text-brand-deep sm:text-5xl">${e.title}</h2>
      <p class="mt-5 text-lg leading-8 text-slate-600">${e.intro}</p>

      <div class="mt-8 rounded-[1.8rem] border border-brand-navy/10 bg-[#f2faf6] p-6"><div class="grid gap-3 sm:grid-cols-3">${e.highlights.map(t=>`<div class="flex items-start gap-2 text-sm font-bold text-brand-deep">${icon('circle-check','mt-0.5 w-4 h-4 shrink-0 text-emerald-600')}<span>${t}</span></div>`).join('')}</div></div>

      <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">About this event format</h3><p class="mt-4 text-base leading-8 text-slate-600">${e.summary}</p><p class="mt-4 text-base leading-8 text-slate-600">The event will only be published as confirmed after the Foundation approves a date, venue, facilitator plan and participation arrangements. Until then, this page serves as a transparent preview of what the event is intended to cover.</p></section>

      <section class="mt-10 grid gap-4 sm:grid-cols-2"><div class="img-zoom overflow-hidden rounded-[1.8rem]"><img src="${photos.family}" class="h-64 w-full object-cover" alt="Family learning placeholder"></div><div class="img-zoom overflow-hidden rounded-[1.8rem]"><img src="${photos.people}" class="h-64 w-full object-cover" alt="Community participation placeholder"></div></section>

      <section class="mt-12"><div class="grid gap-8 lg:grid-cols-[.92fr_1.08fr]"><div><h3 class="font-display text-3xl text-brand-deep">What participants can expect</h3><p class="mt-4 text-base leading-8 text-slate-600">The exact facilitation plan may change when an event is confirmed, but the proposed structure below keeps the session practical, focused and clear.</p><div class="mt-7 flex flex-wrap gap-3">${button('Related program',`#/${e.program}`,'dark')}${button('Ask a question','#/contact','outline')}</div></div><div class="rounded-[2rem] bg-brand-deep p-7 text-white"><div class="eyebrow text-brand-orange">Proposed flow</div><div class="mt-6 grid gap-4">${e.agenda.map((t,i)=>`<div class="flex gap-3"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-extrabold text-brand-orange">${i+1}</span><p class="pt-1 text-sm leading-6 text-white/70">${t}</p></div>`).join('')}</div></div></div></section>
    </article>
    ${ewEventSidebar(id)}
  </div></section>

  <section id="event-interest-form" class="event-interest bg-brand-mist py-24"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="rounded-[2.5rem] border border-slate-100 bg-white p-7 shadow-soft sm:p-10"><div class="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><div class="eyebrow text-brand-orange">Register interest</div><h2 class="mt-4 font-display text-4xl leading-tight text-brand-deep">Interested in ${e.title.toLowerCase()}?</h2><p class="mt-5 text-sm leading-7 text-slate-600">Leave your details and the Foundation can contact you when this event is officially scheduled. This is an interest form, not a confirmed event booking.</p><div class="mt-7 rounded-[1.5rem] bg-brand-deep p-5 text-white"><div class="flex gap-3">${icon('shield-check','mt-0.5 w-5 h-5 shrink-0 text-brand-orange')}<p class="text-sm leading-6 text-white/65">No payment is required. Dates, venue and attendance arrangements remain unconfirmed until formally published.</p></div></div></div><form onsubmit="event.preventDefault();alert('Interest captured in the frontend prototype. Connect this form to email or a CRM before launch.')" class="grid gap-4 sm:grid-cols-2"><label class="text-sm font-bold text-brand-deep">First name<input required class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy"></label><label class="text-sm font-bold text-brand-deep">Last name<input required class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy"></label><label class="text-sm font-bold text-brand-deep">Email<input type="email" required class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy"></label><label class="text-sm font-bold text-brand-deep">Phone<input class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy" placeholder="Optional"></label><label class="text-sm font-bold text-brand-deep sm:col-span-2">I am interested as<select class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 font-normal outline-none focus:border-brand-navy"><option>Participant / family member</option><option>Caregiver / professional</option><option>Volunteer</option><option>Partner / sponsor</option><option>Other</option></select></label><label class="text-sm font-bold text-brand-deep sm:col-span-2">Message<textarea class="mt-2 min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy" placeholder="Optional question or note"></textarea></label><button class="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-extrabold text-white">Submit interest ${icon('send','w-4 h-4')}</button></form></div></div></div></section>`;
}

EWEventRouteIds.forEach(id=>{EWPages[id]=()=>eventDetailPage(id);});

function wireEventDetailLinks(){
  if(route()!=='events')return;
  const links=[...document.querySelectorAll('.events1-card a')];
  EWEventRouteIds.forEach((id,i)=>{if(links[i]){links[i].href=`#/${id}`;links[i].innerHTML=`View details ${icon('arrow-up-right','w-3.5 h-3.5')}`;}});
  if(window.lucide)lucide.createIcons();
}

window.addEventListener('hashchange',()=>setTimeout(wireEventDetailLinks,0));
if(typeof render==='function'){render();setTimeout(()=>{wireEventDetailLinks();window.EWWire?.();},0);}
