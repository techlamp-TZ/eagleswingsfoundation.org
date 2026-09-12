/* Support Areas / Donation Causes v4
   Inspired by the latest Donation Causes 02 mockup.
   New patterns: two-column catalogue + sticky right rail, support CTA, support pathways,
   updates rail and monthly-giving CTA. Content remains factual; no fake donors, raised totals,
   partner logos, beneficiary counts or fundraising percentages are introduced. */

routeMeta.causes='Support Areas';

const cause4Items = (typeof cause3Items !== 'undefined' ? cause3Items : []);
let cause4Page = 1;
const cause4PerPage = 8;

function cause4RenderCards(){
  const grid=document.getElementById('cause4Grid');
  if(!grid)return;
  const pages=Math.max(1,Math.ceil(cause4Items.length/cause4PerPage));
  cause4Page=Math.min(Math.max(1,cause4Page),pages);
  const start=(cause4Page-1)*cause4PerPage;
  const view=cause4Items.slice(start,start+cause4PerPage);
  grid.innerHTML=view.map((c,i)=>`<article class="cause4-card overflow-hidden rounded-[1.55rem] border border-brand-navy/10 bg-white shadow-card">
    <div class="img-zoom relative overflow-hidden"><img src="${c.img}" class="h-52 w-full object-cover" alt="${c.title}"><span class="absolute right-4 top-4 rounded-full ${i%2?'bg-brand-navy':'bg-brand-orange'} px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.14em] text-white">${c.tag}</span></div>
    <div class="p-5">
      <div class="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400"><span class="grid h-8 w-8 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(c.icon,'w-4 h-4')}</span>${c.focus}</div>
      <h2 class="mt-4 font-display text-[1.45rem] leading-tight text-brand-deep">${c.title}</h2>
      <p class="mt-3 min-h-[66px] text-sm leading-6 text-slate-600">${c.text}</p>
      <div class="cause4-support mt-5 rounded-[1.05rem] border border-brand-navy/10 bg-[#f8fbfa] p-4">
        <div class="text-[9px] font-extrabold uppercase tracking-[.13em] text-slate-400">Support can help with</div>
        <div class="mt-2 text-xs font-extrabold text-brand-deep">${c.support}</div>
        <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-white"><div class="h-full w-[68%] rounded-full ${i%2?'bg-brand-navy':'bg-brand-orange'}"></div></div>
        <p class="mt-2 text-[10px] leading-5 text-slate-400">Illustrative readiness indicator — not a fundraising percentage.</p>
      </div>
      <div class="mt-5 flex gap-3"><a href="#/${c.route}" class="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-brand-navy/15 px-4 py-2.5 text-xs font-extrabold text-brand-navy transition hover:bg-brand-mist">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</a><a href="#/donate" aria-label="Support ${c.title}" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-orange text-white shadow-sm">${icon('heart','w-4 h-4')}</a></div>
    </div>
  </article>`).join('');

  const pager=document.getElementById('cause4Pager');
  if(pager){
    pager.innerHTML=`<button class="cause4-page" onclick="cause4GoPage(${cause4Page-1})" ${cause4Page===1?'disabled':''} aria-label="Previous page">${icon('chevron-left','w-4 h-4')}</button>${Array.from({length:pages},(_,k)=>k+1).map(p=>`<button class="cause4-page ${p===cause4Page?'is-active':''}" onclick="cause4GoPage(${p})" ${p===cause4Page?'aria-current="page"':''}>${p}</button>`).join('')}<button class="cause4-page" onclick="cause4GoPage(${cause4Page+1})" ${cause4Page===pages?'disabled':''} aria-label="Next page">${icon('chevron-right','w-4 h-4')}</button>`;
  }
  lucide.createIcons();
}

window.cause4GoPage=function(p){
  const pages=Math.max(1,Math.ceil(cause4Items.length/cause4PerPage));
  cause4Page=Math.min(Math.max(1,p),pages);
  cause4RenderCards();
  document.getElementById('cause4Grid')?.scrollIntoView({behavior:'smooth',block:'start'});
};

EWPages.causes=()=>`
<section class="cause4-hero relative isolate overflow-hidden text-white">
  <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover grayscale" alt="Eagle's Wings support programs"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.70),rgba(0,31,61,.38))]"></div></div>
  <div class="cause4-spray absolute -left-20 bottom-0 h-48 w-80 bg-brand-orange"></div>
  <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Programs you can support</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">Support Areas</h1><div class="mt-4 flex items-center gap-2 text-xs font-semibold text-white/55"><a href="#/home" class="hover:text-white">Home</a><span>•</span><span>Support Areas</span></div></div></div>
</section>

<section class="cause4-paper py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-10 xl:grid-cols-[minmax(0,1fr)_330px] xl:items-start">
      <div>
        <div class="mb-10">${sectionHead('Featured programs & support themes','Choose where your support can help.','A denser two-column catalogue inspired by the reference. Each card uses real Eagle’s Wings program information and avoids invented fundraising totals.')}</div>
        <div id="cause4Grid" class="grid gap-6 md:grid-cols-2"></div>
        <div id="cause4Pager" class="mt-10 flex items-center justify-center gap-2"></div>
      </div>

      <aside class="cause4-rail space-y-5 xl:sticky xl:top-28">
        <div class="cause4-side-card bg-[#eaf6f2] p-7 text-center">
          <span class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-brand-orange shadow-sm">${icon('hand-heart','w-6 h-6')}</span>
          <div class="eyebrow mt-5 justify-center text-brand-orange">Take action</div>
          <h3 class="mt-3 font-display text-3xl text-brand-deep">Support a program</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">Choose a program, give once, give regularly, volunteer, or contribute professional and in-kind support.</p>
          <div class="mt-6">${button('Explore ways to give','#/donate','dark')}</div>
        </div>

        <div class="cause4-side-card bg-[#eef8f5] p-6">
          <div class="eyebrow text-brand-orange">Ways people can help</div>
          <h3 class="mt-2 font-display text-2xl text-brand-deep">Support pathways</h3>
          <div class="mt-5 space-y-4">${[
            ['wallet-cards','Financial support','One-time or recurring giving after secure channels are approved.'],
            ['hand-heart','Volunteer time','Programs, events, administration, outreach and skills-based support.'],
            ['briefcase-business','Professional expertise','Training, therapy, health, communications and institutional support.'],
            ['gift','In-kind contributions','Approved materials, services and resources matched to program needs.']
          ].map(([i,t,d])=>`<div class="flex gap-3"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-navy shadow-sm">${icon(i,'w-4 h-4')}</span><div><div class="text-sm font-extrabold text-brand-deep">${t}</div><p class="mt-1 text-xs leading-5 text-slate-500">${d}</p></div></div>`).join('')}</div>
        </div>

        <div class="cause4-side-card bg-[#eef8f5] p-6">
          <div class="eyebrow text-brand-orange">What's new</div>
          <h3 class="mt-2 font-display text-2xl text-brand-deep">Planned updates</h3>
          <div class="mt-5 space-y-4">${[
            ['Neuro-diversity awareness','Community education and inclusion materials',photos.child,'#/program-neurodiversity'],
            ['Caregiver learning','Practical family and caregiver guidance',photos.family,'#/program-caregiver-training'],
            ['Healthy ageing','Nutrition, movement and engagement resources',photos.care,'#/program-elderly-care']
          ].map(([t,d,img,h])=>`<a href="${h}" class="grid grid-cols-[70px_1fr] gap-3 border-b border-brand-navy/10 pb-4 last:border-0 last:pb-0"><img src="${img}" class="h-16 w-full rounded-xl object-cover" alt="${t}"><div><div class="text-xs font-extrabold leading-5 text-brand-deep">${t}</div><div class="mt-1 text-[10px] leading-4 text-slate-500">${d}</div></div></a>`).join('')}</div>
        </div>

        <div class="cause4-monthly relative overflow-hidden rounded-[2rem] bg-brand-deep p-7 text-white">
          <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover opacity-20" alt="Community support"></div>
          <div class="relative"><span class="grid h-12 w-12 place-items-center rounded-full bg-brand-orange text-white">${icon('repeat-2','w-5 h-5')}</span><div class="eyebrow mt-5 text-brand-orange">Planned giving option</div><h3 class="mt-3 font-display text-3xl">Monthly giving</h3><p class="mt-3 text-sm leading-6 text-white/60">The site is prepared for recurring giving once merchant onboarding, accounting and reporting workflows are approved.</p><div class="mt-6">${button('Learn about giving','#/donate')}</div></div>
        </div>
      </aside>
    </div>
  </div>
</section>

<section class="cause4-trust border-y border-brand-navy/10 bg-white py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Partnership network','Built for trusted collaboration—not decorative logos.','The reference shows company logos. Until Eagle’s Wings has approved public partners, the site names the partnership categories it is ready to develop.','center')}
    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${[
      ['building-2','Corporate & CSR'],['hospital','Health & therapy'],['graduation-cap','Education'],['landmark','Public institutions'],['users-round','Community networks']
    ].map(([i,t])=>`<a href="#/partners" class="cause4-trust-pill flex min-h-[120px] items-center justify-center gap-3 rounded-[1.5rem] border border-brand-navy/10 bg-white px-5 text-center shadow-sm"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><span class="text-sm font-extrabold text-brand-deep">${t}</span></a>`).join('')}</div>
  </div>
</section>`;

const cause4Observer=new MutationObserver(()=>{
  const grid=document.getElementById('cause4Grid');
  if(route()==='causes'&&grid&&!grid.dataset.ready){grid.dataset.ready='true';cause4RenderCards();}
});
cause4Observer.observe(document.documentElement,{childList:true,subtree:true});
if(typeof render==='function'&&route()==='causes')render();
