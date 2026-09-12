/* Events page inspiration 1
   Adapted from the supplied Upcoming Event V2 mockup.
   The reference layout is used as visual inspiration while Eagle's Wings event content remains factual.
   No event dates, attendance figures, testimonials, beneficiaries, or fundraising claims are invented. */

routeMeta.events='Events';

EWPages.events=()=>{
  const eventTypes=[
    {tag:'Awareness',icon:'brain',title:'Neuro-diversity Awareness Session',text:'A planned public-learning format focused on Autism, ADHD, Down syndrome, intellectual disability and practical inclusion.',img:photos.child,program:'program-neurodiversity'},
    {tag:'Caregiving',icon:'users-round',title:'Family & Caregiver Learning Workshop',text:'A practical session format for families and caregivers supporting children and older people in everyday settings.',img:photos.family,program:'program-caregiver-training'},
    {tag:'Healthy ageing',icon:'heart-pulse',title:'Healthy Ageing Community Session',text:'A planned session around nutrition, safe movement, mental stimulation and dignified support for older people.',img:photos.care,program:'program-elderly-care'},
    {tag:'Life skills',icon:'sparkles',title:'Life Skills Practice Day',text:'A practical learning format centred on communication, daily routines, confidence and growing independence for autistic young people.',img:photos.learning,program:'program-life-skills'},
    {tag:'Family guidance',icon:'book-heart',title:'Education & Therapy Guidance Session',text:'A family-learning format for understanding neurological conditions, therapy guidance and specialized parenting approaches.',img:photos.people,program:'program-education-therapy'},
    {tag:'Outreach',icon:'megaphone',title:'Community Inclusion Outreach',text:'A community-engagement format designed to reduce stigma, share respectful information and connect people to appropriate support.',img:photos.child,program:'program-neurodiversity'},
    {tag:'Volunteer',icon:'hand-heart',title:'Volunteer Orientation & Service Day',text:'An orientation format for supporters who want to contribute time, practical help, communication or event support responsibly.',img:photos.people,program:'get-involved'},
    {tag:'Partnership',icon:'handshake',title:'Partners & Supporters Briefing',text:'A planned briefing format for organizations and supporters interested in partnerships, sponsorship and responsible program growth.',img:photos.family,program:'partners'}
  ];

  const insightTopics=[
    ['Neuro-diversity','How communities can make inclusion practical',photos.child],
    ['Caregiving','Supporting families with dignity and consistency',photos.family],
    ['Healthy ageing','Simple ways to keep older people active and engaged',photos.care]
  ];

  return `
  <section class="events1-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover opacity-40" alt="Eagle's Wings Foundation events"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.94),rgba(0,31,61,.58),rgba(0,31,61,.76))]"></div></div>
    <div class="relative mx-auto flex min-h-[340px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Community participation</div><h1 class="mt-4 font-display text-5xl sm:text-6xl">Events & Gatherings</h1><p class="mt-3 text-sm text-white/60">Home · Events</p></div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div>${sectionHead('Upcoming event formats','Together we can create lasting change.','Eagle’s Wings has not yet published a confirmed public event calendar. The cards below show the event formats the website is prepared to support once dates and venues are approved.')}</div>
        <div class="rounded-[1.6rem] border border-slate-100 bg-brand-mist p-6"><div class="flex gap-3"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-navy shadow-sm">${icon('calendar-clock','w-5 h-5')}</span><div><div class="text-sm font-extrabold text-brand-deep">Calendar status</div><p class="mt-1 text-sm leading-6 text-slate-500">No public event dates are confirmed yet. Every event card is marked <strong>Planned</strong> until an official date is approved.</p></div></div></div>
      </div>

      <div class="mt-12 grid gap-5 lg:grid-cols-2">
        ${eventTypes.map((e,i)=>`<article class="events1-card grid overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-card sm:grid-cols-[180px_1fr]">
          <div class="img-zoom relative overflow-hidden"><img src="${e.img}" class="h-56 w-full object-cover sm:h-full" alt="${e.title}"><span class="absolute right-3 top-3 rounded-full bg-brand-orange px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.15em] text-white">Planned</span></div>
          <div class="p-6"><div class="flex flex-wrap items-center justify-between gap-3"><span class="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${icon(e.icon,'w-3.5 h-3.5')}${e.tag}</span><span class="rounded-full bg-brand-mist px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] text-slate-400">Date TBC</span></div><h2 class="mt-3 font-display text-2xl leading-tight text-brand-deep">${e.title}</h2><p class="mt-3 text-sm leading-6 text-slate-600">${e.text}</p><div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Time & venue TBC</span><a href="#/${e.program}" class="inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Related program ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div>
        </article>`).join('')}
      </div>

      <div class="mt-10 flex flex-wrap items-center gap-2"><span class="grid h-9 min-w-9 place-items-center rounded-lg bg-brand-navy px-3 text-xs font-extrabold text-white">1</span>${['2','3','4'].map(n=>`<button disabled class="grid h-9 min-w-9 cursor-not-allowed place-items-center rounded-lg border border-slate-200 px-3 text-xs font-bold text-slate-300">${n}</button>`).join('')}<span class="ml-2 text-xs text-slate-400">More pages activate when approved events are published.</span></div>
    </div>
  </section>

  <section class="pb-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="events1-cta relative overflow-hidden rounded-[2.7rem] bg-brand-deep text-white shadow-soft"><img src="${photos.family}" class="absolute inset-0 h-full w-full object-cover opacity-50" alt="Join Eagle's Wings community"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98)_0%,rgba(0,31,61,.88)_52%,rgba(0,31,61,.22)_100%)]"></div><div class="events1-brush absolute right-[8%] top-0 h-full w-[38%] bg-brand-orange/80"></div><div class="relative max-w-2xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Join the movement</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Be part of the next community gathering.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">Volunteer, partner with the Foundation, support a program or contact the team to express interest in future public events.</p><div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Contact the team','#/contact','outline')}</div></div></div></div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8"><div>${sectionHead('Event impact & learning','Stories of participation—only when verified.','The reference mockup uses a testimonial section. Eagle’s Wings will publish participant feedback, event photos and attendance information only after consent, approval and verification.')}<div class="mt-8 rounded-[1.8rem] border border-brand-navy/10 bg-white p-7 shadow-card"><div class="flex gap-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-deep text-brand-orange">${icon('quote','w-5 h-5')}</span><div><h3 class="font-extrabold text-brand-deep">Event story library in preparation</h3><p class="mt-3 text-sm leading-7 text-slate-600">Future event recaps can include approved photographs, participant feedback, learning themes and verified attendance information.</p><a href="#/impact" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-orange">See the impact framework ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div></div></div><div class="relative"><div class="img-zoom overflow-hidden rounded-[2.5rem] shadow-soft"><img src="${photos.people}" class="h-[470px] w-full object-cover" alt="Community participation"></div><div class="absolute -right-5 -top-6 text-brand-navy/15">${icon('waves','w-24 h-24')}</div></div></div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Learning before and after events','Inspiring stories, practical guidance and useful preparation.','As the event calendar develops, educational content can help participants prepare before sessions and continue learning afterward.','center')}
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${insightTopics.map(([tag,title,img])=>`<article class="overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white shadow-card"><div class="img-zoom overflow-hidden"><img src="${img}" class="h-60 w-full object-cover" alt="${title}"></div><div class="p-6"><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${title}</h3><p class="mt-3 text-sm leading-6 text-slate-500">Planned educational content will be published after Foundation review and approval.</p><a href="#/resources" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Browse resources ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></article>`).join('')}</div>
    </div>
  </section>`;
};

if(typeof render==='function') render();
