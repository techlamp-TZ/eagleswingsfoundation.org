/* Program detail v2 — adapted from the supplied Causes Category Details mockup.
   The page keeps the mockup's deep-detail + support-flow structure while using only verified
   Eagle's Wings program information. No donor names, donation totals, progress percentages,
   beneficiary outcomes, or payment claims are fabricated. */

function ewProgramSupportSidebar(activeId){
  const p=EWProgramDetails[activeId];
  const planned=[
    ['brain','Neuro-diversity','Making inclusion practical in everyday communities'],
    ['house-heart','Family guidance','Supporting families with dignity and consistency'],
    ['heart-pulse','Healthy ageing','Practical ways to keep older people active and engaged'],
    ['sparkles','Life skills','Building independence through repeatable routines']
  ];
  return `<aside class="program2-sidebar space-y-6 lg:sticky lg:top-28 lg:self-start">
    <div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-card">
      <label class="text-sm font-extrabold text-brand-deep">Search programs</label>
      <div class="relative mt-3"><input oninput="filterProgramSidebar(this.value)" placeholder="Search" class="w-full rounded-xl border border-slate-200 py-3 pl-4 pr-11 text-sm outline-none focus:border-brand-navy"><span class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">${icon('search','w-4 h-4')}</span></div>
      <div id="programSideList" class="mt-4 grid gap-2">${programRouteIds.map(id=>{const x=EWProgramDetails[id];return `<a data-program-name="${x.title.toLowerCase()}" href="#/${id}" class="rounded-xl border px-4 py-2.5 text-xs font-bold transition ${id===activeId?'border-brand-orange bg-orange-50 text-brand-orange':'border-slate-200 text-slate-600 hover:border-brand-navy/30 hover:bg-brand-mist hover:text-brand-navy'}">${x.title}</a>`}).join('')}</div>
    </div>

    <div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-card">
      <div class="eyebrow text-brand-orange">Support this program</div>
      <h3 class="mt-3 font-display text-2xl text-brand-deep">Ways to contribute</h3>
      <div class="mt-5 grid gap-3">${[
        ['wallet-cards','One-time giving','Support a current priority.'],
        ['repeat-2','Monthly support','Build dependable recurring support.'],
        ['package-open','In-kind support','Offer useful goods or equipment.'],
        ['briefcase-business','Expertise & partnership','Contribute skills, services or sponsorship.']
      ].map(([i,t,d])=>`<div class="flex gap-3 rounded-xl bg-brand-mist p-3"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand-navy shadow-sm">${icon(i,'w-4 h-4')}</span><div><div class="text-xs font-extrabold text-brand-deep">${t}</div><div class="mt-1 text-[11px] leading-5 text-slate-500">${d}</div></div></div>`).join('')}</div>
      <a href="#program-support-form" class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-3 text-xs font-extrabold text-white">Support ${p.title} ${icon('arrow-down','w-3.5 h-3.5')}</a>
    </div>

    <div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-card">
      <div class="eyebrow text-brand-orange">Planned resources</div>
      <div class="mt-4 grid gap-3">${planned.map(([i,tag,title])=>`<a href="#/resources" class="group flex gap-3 rounded-xl p-2 transition hover:bg-brand-mist"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-navy group-hover:bg-white">${icon(i,'w-4 h-4')}</span><div><div class="text-[9px] font-extrabold uppercase tracking-[.14em] text-brand-orange">${tag}</div><div class="mt-1 text-xs font-extrabold leading-5 text-brand-deep">${title}</div></div></a>`).join('')}</div>
      <p class="mt-4 text-[10px] leading-5 text-slate-400">Topics are planned editorial themes until approved articles are published.</p>
    </div>
  </aside>`;
}

function programDetailsPage(id){
  const p=EWProgramDetails[id];
  const relatives=programRouteIds.filter(x=>x!==id).slice(0,3).map(x=>[x,EWProgramDetails[x]]);
  return `
  <section class="program-detail-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.people}" alt="Eagle's Wings programs" class="h-full w-full object-cover opacity-40"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.92),rgba(0,31,61,.55),rgba(0,31,61,.82))]"></div></div>
    <div class="relative mx-auto flex min-h-[320px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Support area details</div><h1 class="mt-4 font-display text-5xl sm:text-6xl">${p.title}</h1><p class="mt-3 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · <a href="#/causes" class="hover:text-white">Support Areas</a> · ${p.tag}</p></div></div>
  </section>

  <section class="py-20 lg:py-24"><div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-8">
    <article class="min-w-0">
      <div class="program2-feature img-zoom overflow-hidden rounded-[2.2rem] shadow-soft"><img src="${p.hero}" class="h-[360px] w-full object-cover sm:h-[520px]" alt="${p.title}"></div>
      <div class="mt-9"><div class="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${icon(p.icon,'w-3.5 h-3.5')}${p.tag}</div><h2 class="mt-4 font-display text-4xl leading-tight text-brand-deep sm:text-5xl">${p.title}</h2><p class="mt-5 text-lg leading-8 text-slate-600">${p.intro}</p></div>

      <div class="mt-8 rounded-[1.8rem] border border-brand-navy/10 bg-brand-mist p-6"><div class="grid gap-3 sm:grid-cols-3">${p.checks.map(t=>`<div class="flex items-start gap-2 text-sm font-bold text-brand-deep">${icon('circle-check','mt-0.5 w-4 h-4 shrink-0 text-emerald-600')}<span>${t}</span></div>`).join('')}</div></div>

      <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">Program summary</h3><p class="mt-4 text-base leading-8 text-slate-600">${p.summary}</p><div class="mt-7 grid gap-4 sm:grid-cols-2"><div class="img-zoom overflow-hidden rounded-[1.8rem]"><img src="${p.gallery[1]}" class="h-64 w-full object-cover" alt="Illustrative program support visual"></div><div class="img-zoom overflow-hidden rounded-[1.8rem]"><img src="${p.gallery[2]}" class="h-64 w-full object-cover" alt="Illustrative community support visual"></div></div></section>

      <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">Our approach</h3><p class="mt-4 text-base leading-8 text-slate-600">${p.approach}</p><div class="mt-8 rounded-[2rem] bg-brand-deep p-7 text-white"><div class="eyebrow text-brand-orange">How we work</div><div class="mt-6 grid gap-4">${p.process.map((t,i)=>`<div class="flex gap-3"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-extrabold text-brand-orange">${i+1}</span><p class="pt-1 text-sm leading-6 text-white/70">${t}</p></div>`).join('')}</div></div></section>

      <section class="mt-12"><h3 class="font-display text-3xl text-brand-deep">Related support areas</h3><div class="mt-6 grid gap-4 md:grid-cols-3">${relatives.map(([rid,r])=>`<a href="#/${rid}" class="float-card rounded-[1.6rem] border border-brand-navy/10 bg-white p-6 shadow-sm"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(r.icon,'w-5 h-5')}</span><div class="mt-4 text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">${r.tag}</div><h4 class="mt-2 font-display text-xl leading-tight text-brand-deep">${r.title}</h4><span class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">View program ${icon('arrow-up-right','w-3.5 h-3.5')}</span></a>`).join('')}</div></section>
    </article>
    ${ewProgramSupportSidebar(id)}
  </div></section>

  <section id="program-support-form" class="program2-support bg-brand-mist py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10 max-w-3xl"><div class="eyebrow text-brand-orange">Support this work</div><h2 class="mt-3 font-display text-4xl text-brand-deep sm:text-5xl">Contribute to ${p.title}.</h2><p class="mt-4 text-base leading-7 text-slate-600">This is a frontend support form. No payment is processed until Eagle’s Wings completes merchant onboarding and activates approved payment providers.</p></div>
      <form onsubmit="event.preventDefault();alert('Online payment is not active yet. Your selected support details are for frontend preview only.')" class="rounded-[2.4rem] border border-slate-100 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
        <div class="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div class="flex items-center justify-between gap-4"><h3 class="font-display text-3xl text-brand-deep">Your details</h3><span class="rounded-full bg-brand-mist px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-navy">${p.tag}</span></div>
            <div class="mt-6 grid gap-4 sm:grid-cols-2"><label class="text-sm font-bold text-brand-deep">First name<input class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy"></label><label class="text-sm font-bold text-brand-deep">Last name<input class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy"></label><label class="text-sm font-bold text-brand-deep">Email<input type="email" class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy"></label><label class="text-sm font-bold text-brand-deep">Phone<input class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy" placeholder="+255 ..."></label><label class="text-sm font-bold text-brand-deep sm:col-span-2">Message or dedication<textarea class="mt-2 min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3.5 font-normal outline-none focus:border-brand-navy" placeholder="Optional"></textarea></label></div>
          </div>
          <div class="rounded-[2rem] bg-brand-deep p-6 text-white sm:p-8">
            <h3 class="font-display text-3xl">Choose support</h3>
            <div class="mt-5 grid grid-cols-2 gap-2 rounded-full bg-white/10 p-1.5"><button type="button" data-program-gift="once" onclick="ewProgramGiftType(this)" class="program-gift-type rounded-full bg-white px-4 py-3 text-xs font-extrabold text-brand-deep">One-time</button><button type="button" data-program-gift="monthly" onclick="ewProgramGiftType(this)" class="program-gift-type rounded-full px-4 py-3 text-xs font-extrabold text-white/60">Monthly</button></div>
            <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">${['25,000','50,000','100,000','250,000'].map((x,i)=>`<button type="button" onclick="ewProgramAmount(this)" data-program-amount="${x}" class="program-amount rounded-xl border ${i===1?'border-brand-orange bg-brand-orange text-white':'border-white/15 bg-white/5 text-white'} px-3 py-3 text-xs font-extrabold">${x}</button>`).join('')}</div>
            <label class="mt-4 block text-xs font-extrabold uppercase tracking-[.12em] text-white/55">Other amount (TZS)<input class="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm font-normal text-white outline-none placeholder:text-white/35 focus:border-brand-orange" placeholder="Enter amount"></label>
            <div class="mt-6"><div class="text-xs font-extrabold uppercase tracking-[.12em] text-white/55">Planned payment methods</div><div class="mt-3 grid gap-2">${[['smartphone','Mobile money'],['credit-card','Card payment'],['landmark','Bank transfer']].map(([i,t])=>`<div class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"><span class="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-brand-orange">${icon(i,'w-4 h-4')}</span><span class="text-sm font-bold">${t}</span><span class="ml-auto rounded-full bg-white/10 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-white/45">Pending</span></div>`).join('')}</div></div>
            <button class="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-extrabold text-white">Continue when payments are active ${icon('lock-keyhole','w-4 h-4')}</button><p class="mt-3 text-center text-[10px] leading-5 text-white/35">No card, mobile-money or bank credentials are collected by this prototype.</p>
          </div>
        </div>
      </form>
    </div>
  </section>`;
}

window.ewProgramAmount=(btn)=>{
  document.querySelectorAll('.program-amount').forEach(x=>x.className='program-amount rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-xs font-extrabold text-white');
  btn.className='program-amount rounded-xl border border-brand-orange bg-brand-orange px-3 py-3 text-xs font-extrabold text-white';
};
window.ewProgramGiftType=(btn)=>{
  document.querySelectorAll('.program-gift-type').forEach(x=>x.className='program-gift-type rounded-full px-4 py-3 text-xs font-extrabold text-white/60');
  btn.className='program-gift-type rounded-full bg-white px-4 py-3 text-xs font-extrabold text-brand-deep';
};

programRouteIds.forEach(id=>{ EWPages[id]=()=>programDetailsPage(id); });
if(typeof render==='function') render();
