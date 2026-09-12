/* Event details v2 — adapted from the latest Event Details mockup.
   The layout follows the reference's wide feature image, editorial body and compact information sidebar.
   Eagle's Wings does not yet publish confirmed dates, venues, organizers or attendance data, so those remain TBC. */

function ewEventDetails2Page(id){
  const e=EWEventDetails[id];
  if(!e) return '';
  const related=EWEventRouteIds.filter(x=>x!==id).slice(0,3);
  return `
  <section class="event2-hero relative isolate overflow-hidden text-white">
    <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Community event">
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.72),rgba(0,31,61,.45))]"></div>
    <div class="event2-splash absolute -left-12 bottom-0 h-52 w-40 bg-brand-orange"></div>
    <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div><div class="eyebrow text-brand-orange">Planned event format</div><h1 class="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-6xl">${e.title}</h1><p class="mt-4 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · <a href="#/events" class="hover:text-white">Events</a> · Event Details</p></div>
    </div>
  </section>

  <section class="event2-paper py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="event2-feature overflow-hidden rounded-[2.2rem] bg-brand-deep shadow-soft"><img src="${e.img}" class="h-[390px] w-full object-cover sm:h-[540px]" alt="${e.title}"></div>

      <div class="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
        <article class="min-w-0">
          <div class="flex flex-wrap items-center gap-3"><span class="rounded-full bg-orange-50 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${e.tag}</span><span class="rounded-full bg-brand-mist px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-navy">Planned</span></div>
          <h2 class="mt-5 font-display text-4xl leading-tight text-brand-deep sm:text-5xl">${e.title}</h2>
          <p class="mt-5 text-lg leading-8 text-slate-600">${e.intro}</p>

          <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">Event mission</h3><p class="mt-4 text-base leading-8 text-slate-600">${e.summary}</p><p class="mt-4 text-base leading-8 text-slate-600">The event will only be presented as confirmed after the Foundation approves a date, venue, facilitator plan and participation arrangements. Until then, this page transparently describes the intended format rather than inventing public details.</p></section>

          <section class="mt-10 grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-center"><div class="img-zoom overflow-hidden rounded-[1.7rem]"><img src="${photos.family}" class="h-64 w-full object-cover" alt="Community learning"></div><div><div class="eyebrow text-brand-orange">What participants can expect</div><div class="mt-5 grid gap-3">${e.highlights.map(t=>`<div class="flex items-start gap-3 text-sm font-bold text-slate-600">${icon('circle-check','mt-0.5 w-5 h-5 shrink-0 text-emerald-600')}<span>${t}</span></div>`).join('')}</div></div></section>

          <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">Planned session flow</h3><div class="mt-6 grid gap-4 sm:grid-cols-2">${e.agenda.map((x,i)=>`<div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm"><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">Step ${String(i+1).padStart(2,'0')}</div><div class="mt-2 font-extrabold text-brand-deep">${x}</div></div>`).join('')}</div></section>

          <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">Why this event matters</h3><p class="mt-4 text-base leading-8 text-slate-600">Eagle’s Wings uses events as a practical bridge between awareness and action. Depending on the format, events can help families understand support options, strengthen caregiver knowledge, encourage inclusion, introduce volunteer roles and connect prospective partners to the Foundation’s work.</p><div class="mt-6 grid gap-3">${[['book-open-check','Learning should be practical and understandable.'],['shield-check','Safeguarding, dignity and privacy guide participation.'],['users-round','Families, caregivers and communities are part of the learning process.'],['arrow-up-right','Clinical or individualized needs should be referred to qualified professionals.']].map(([i,t])=>`<div class="flex items-start gap-3 rounded-2xl bg-brand-mist p-4 text-sm font-bold text-brand-deep">${icon(i,'mt-0.5 w-5 h-5 shrink-0 text-brand-orange')}<span>${t}</span></div>`).join('')}</div></section>

          <div class="mt-12 rounded-[1.8rem] bg-brand-deep p-6 text-white sm:p-8"><div class="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center"><div><div class="eyebrow text-brand-orange">Stay informed</div><h3 class="mt-3 font-display text-3xl">Want to know when this event is confirmed?</h3><p class="mt-3 text-sm leading-6 text-white/65">Use the contact form to express interest. A calendar action will only be enabled after a real date and venue are published.</p></div><a href="#/contact" class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-extrabold text-white">Express interest ${icon('arrow-up-right','w-4 h-4')}</a></div></div>
        </article>

        <aside class="event2-sidebar space-y-5 lg:sticky lg:top-28">
          <div class="rounded-[1.8rem] bg-[#e9f6f1] p-6 shadow-sm"><div class="eyebrow text-brand-orange">Event information</div><p class="mt-3 text-sm leading-6 text-slate-600">Confirmed logistics will appear here as soon as they are approved.</p><div class="mt-6 grid gap-5">${[
            ['user-round','Organizer','Eagle’s Wings Foundation Tanzania'],
            ['map-pin','Venue','To be confirmed'],
            ['calendar-days','Date','To be confirmed'],
            ['clock-3','Time','To be confirmed'],
            [e.icon,'Format',e.tag]
          ].map(([i,k,v])=>`<div class="flex gap-3"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand-navy shadow-sm">${icon(i,'w-4 h-4')}</span><div><div class="text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400">${k}</div><div class="mt-1 text-sm font-extrabold text-brand-deep">${v}</div></div></div>`).join('')}</div></div>

          <div class="rounded-[1.8rem] bg-brand-deep p-6 text-white shadow-card"><span class="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-brand-orange">${icon('hand-heart','w-5 h-5')}</span><div class="mt-5 font-display text-3xl">Support the work behind this event</div><p class="mt-3 text-sm leading-6 text-white/60">Donations support the Foundation’s wider program work. No event-specific fundraising total is claimed unless officially approved.</p><a href="#/donate" class="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-xs font-extrabold text-white">Support the mission ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div>

          <a href="#/${e.program}" class="flex items-center justify-between rounded-[1.6rem] border border-brand-navy/10 bg-white p-5 shadow-sm"><span><span class="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">Related program</span><span class="mt-1 block font-display text-xl text-brand-deep">Explore this area of work</span></span>${icon('arrow-up-right','w-5 h-5 text-brand-navy')}</a>
        </aside>
      </div>
    </div>
  </section>

  <section class="event2-related border-t border-brand-navy/10 bg-brand-mist py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Other planned event formats','Continue exploring the event programme.','All entries remain previews until public dates and venues are confirmed.','center')}<div class="mt-10 grid gap-5 md:grid-cols-3">${related.map(r=>{const x=EWEventDetails[r];return `<a href="#/${r}" class="group overflow-hidden rounded-[1.7rem] bg-white shadow-sm"><div class="overflow-hidden"><img src="${x.img}" class="h-52 w-full object-cover grayscale transition duration-500 group-hover:scale-[1.04] group-hover:grayscale-0" alt="${x.title}"></div><div class="p-5"><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${x.tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${x.title}</h3><span class="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</span></div></a>`}).join('')}</div></div></section>`;
}

EWEventRouteIds.forEach(id=>{ EWPages[id]=()=>ewEventDetails2Page(id); });

if(typeof render==='function'&&EWEventRouteIds.includes(route())) render();
