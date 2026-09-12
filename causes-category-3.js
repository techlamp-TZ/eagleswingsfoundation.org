/* Support Areas / Donation Causes v3
   Inspired by the latest donation-causes mockup supplied by the user.
   We borrow the visual catalogue, pagination and partner-strip ideas while keeping all content factual.
   No fundraising targets, raised amounts, donor counts, fake company logos or progress percentages are invented. */

routeMeta.causes='Support Areas';

const cause3Items=[
  {route:'program-neurodiversity',category:'Neuro-diversity',tag:'Awareness',icon:'brain',title:'Community Neuro-diversity Awareness',text:'Build understanding around Autism, ADHD, Down syndrome and intellectual disability through respectful, practical education.',img:photos.child,focus:'Awareness & inclusion',support:'Education, outreach & materials'},
  {route:'program-education-therapy',category:'Family guidance',tag:'Parenting',icon:'house-heart',title:'Family Education & Specialized Parenting',text:'Help parents and families understand neurological conditions and practical ways to support children at home.',img:photos.family,focus:'Family learning',support:'Learning resources & sessions'},
  {route:'program-education-therapy',category:'Family guidance',tag:'Therapy',icon:'activity',title:'Therapy Exercise Guidance',text:'Share approved practical guidance around therapy exercises and everyday routines that families can practise consistently.',img:photos.learning,focus:'Practical guidance',support:'Guidance materials & facilitation'},
  {route:'program-elderly-care',category:'Healthy ageing',tag:'Nutrition',icon:'apple',title:'Healthy Ageing Through Nutrition',text:'Support older people and families with practical nutrition guidance as part of dignified day-to-day care.',img:photos.care,focus:'Elderly care',support:'Education & caregiver support'},
  {route:'program-elderly-care',category:'Healthy ageing',tag:'Movement',icon:'person-standing',title:'Movement & Physical Activity Support',text:'Encourage safe, appropriate physical activity and family support that help older people stay engaged and active.',img:photos.people,focus:'Healthy ageing',support:'Activity guidance & community sessions'},
  {route:'program-elderly-care',category:'Healthy ageing',tag:'Engagement',icon:'puzzle',title:'Mental Stimulation & Engagement',text:'Promote meaningful routines and mental stimulation for older people, including those facing Alzheimer’s or Dementia.',img:photos.family,focus:'Mental stimulation',support:'Activity resources & caregiver guidance'},
  {route:'program-life-skills',category:'Life skills',tag:'Skills',icon:'sparkles',title:'Life Skills for Autistic Young People',text:'Structured learning focused on confidence, communication, participation and everyday independence, especially from age 12 upward.',img:photos.learning,focus:'Independence',support:'Learning activities & facilitation'},
  {route:'program-caregiver-training',category:'Training',tag:'Training',icon:'users-round',title:'Professional Caregiver Development',text:'Build caregiver knowledge, confidence and professional practice for supporting children and older people.',img:photos.people,focus:'Caregiver development',support:'Training delivery & learning materials'},
  {route:'program-caregiver-training',category:'Training',tag:'Support',icon:'heart-handshake',title:'Family & Caregiver Support Networks',text:'Strengthen the people around children and older people so support is more consistent, informed and dignified.',img:photos.care,focus:'Support network',support:'Peer learning & community support'}
];

const cause3Categories=['All','Neuro-diversity','Family guidance','Healthy ageing','Life skills','Training'];
let cause3Filter='all';
let cause3Page=1;
const cause3PerPage=6;

function cause3RenderCards(){
  const grid=document.getElementById('cause3Grid');
  if(!grid)return;
  const filtered=cause3Items.filter(x=>cause3Filter==='all'||x.category.toLowerCase()===cause3Filter);
  const pages=Math.max(1,Math.ceil(filtered.length/cause3PerPage));
  if(cause3Page>pages)cause3Page=pages;
  const start=(cause3Page-1)*cause3PerPage;
  const view=filtered.slice(start,start+cause3PerPage);
  grid.innerHTML=view.map((c,i)=>`<article class="cause3-card overflow-hidden rounded-[1.7rem] border border-brand-navy/10 bg-white shadow-card">
    <div class="img-zoom relative overflow-hidden"><img src="${c.img}" class="cause3-card-img h-56 w-full object-cover" alt="${c.title}"><span class="absolute right-4 top-4 rounded-full ${i%2?'bg-brand-navy':'bg-brand-orange'} px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.15em] text-white">${c.tag}</span></div>
    <div class="p-5">
      <div class="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400"><span class="grid h-8 w-8 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(c.icon,'w-4 h-4')}</span>${c.focus}</div>
      <h2 class="mt-4 font-display text-[1.45rem] leading-tight text-brand-deep">${c.title}</h2>
      <p class="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">${c.text}</p>
      <div class="cause3-status mt-5 rounded-[1.15rem] border border-brand-navy/10 p-4"><div class="flex items-center justify-between gap-3"><span class="text-[10px] font-extrabold uppercase tracking-[.12em] text-slate-400">Support pathway</span><span class="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-emerald-700">Open for support</span></div><p class="mt-3 text-xs font-bold text-brand-deep">${c.support}</p><p class="mt-2 text-[11px] leading-5 text-slate-500">No public fundraising target is shown until the Foundation approves one.</p></div>
      <div class="mt-5 flex gap-3"><a href="#/${c.route}" class="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-brand-navy/15 px-4 py-2.5 text-xs font-extrabold text-brand-navy transition hover:bg-brand-mist">View details ${icon('arrow-up-right','w-3.5 h-3.5')}</a><a href="#/donate" aria-label="Support ${c.title}" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-orange text-white shadow-sm">${icon('heart','w-4 h-4')}</a></div>
    </div>
  </article>`).join('');

  const pager=document.getElementById('cause3Pager');
  if(pager){
    pager.innerHTML=`<button class="cause3-page grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-sm font-bold text-slate-500" onclick="cause3GoPage(${cause3Page-1})" ${cause3Page===1?'disabled':''} aria-label="Previous page">${icon('chevron-left','w-4 h-4')}</button>${Array.from({length:pages},(_,k)=>k+1).map(p=>`<button class="cause3-page grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-sm font-bold text-slate-500" onclick="cause3GoPage(${p})" ${p===cause3Page?'aria-current="page"':''}>${p}</button>`).join('')}<button class="cause3-page grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-sm font-bold text-slate-500" onclick="cause3GoPage(${cause3Page+1})" ${cause3Page===pages?'disabled':''} aria-label="Next page">${icon('chevron-right','w-4 h-4')}</button>`;
  }
  lucide.createIcons();
}

window.cause3SetFilter=function(v){cause3Filter=v;cause3Page=1;document.querySelectorAll('[data-c3-filter]').forEach(btn=>{const on=btn.dataset.c3Filter===v;btn.className=`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-extrabold transition ${on?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-slate-500 hover:border-brand-navy/30 hover:text-brand-navy'}`;});cause3RenderCards();};
window.cause3GoPage=function(p){const filtered=cause3Items.filter(x=>cause3Filter==='all'||x.category.toLowerCase()===cause3Filter);const pages=Math.max(1,Math.ceil(filtered.length/cause3PerPage));cause3Page=Math.min(Math.max(1,p),pages);cause3RenderCards();document.getElementById('cause3Grid')?.scrollIntoView({behavior:'smooth',block:'start'});};

EWPages.causes=()=>`
<section class="cause3-hero relative isolate overflow-hidden text-white">
  <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover grayscale" alt="Eagle's Wings support programs"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.70),rgba(0,31,61,.38))]"></div></div>
  <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Programs you can support</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">Support Areas</h1><div class="mt-4 flex items-center gap-2 text-xs font-semibold text-white/55"><a href="#/home" class="hover:text-white">Home</a><span>•</span><span>Support Areas</span></div></div></div>
</section>

<section class="cause3-paper py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    ${sectionHead('Featured programs & support themes','Choose where your support can help.','The reference uses fundraising cards with monetary goals and raised amounts. We keep the useful catalogue design, but show only verified program information until Eagle’s Wings approves public fundraising targets.','center')}
    <div class="mt-8 flex gap-2 overflow-x-auto pb-2 justify-start lg:justify-center">${cause3Categories.map((c,i)=>`<button data-c3-filter="${c.toLowerCase()}" onclick="cause3SetFilter('${c.toLowerCase()}')" class="whitespace-nowrap rounded-full border px-4 py-2 text-xs font-extrabold transition ${i===0?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-slate-500 hover:border-brand-navy/30 hover:text-brand-navy'}">${c}</button>`).join('')}</div>
    <div id="cause3Grid" class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"></div>
    <div id="cause3Pager" class="mt-10 flex items-center justify-center gap-2"></div>
  </div>
</section>

<section class="cause3-trust border-y border-brand-navy/10 py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Partnership opportunities','Support can also come through institutions and professional networks.','Instead of copying unverified company logos from the mockup, this section shows the types of partnerships Eagle’s Wings can responsibly develop.','center')}
    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${[
      ['briefcase-business','Corporate partners','CSR support, employee volunteering and professional expertise.'],
      ['hospital','Health & therapy networks','Specialist guidance, referrals and practical learning partnerships.'],
      ['graduation-cap','Education partners','Learning resources, training spaces and community education.'],
      ['landmark','Public & community institutions','Outreach, awareness, local coordination and trusted referrals.']
    ].map(([i,t,d])=>`<a href="#/partners" class="cause3-partner-pill rounded-[1.6rem] border border-brand-navy/10 bg-white p-6 text-center shadow-sm"><span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-5 h-5')}</span><h3 class="mt-5 font-display text-2xl text-brand-deep">${t}</h3><p class="mt-3 text-sm leading-6 text-slate-500">${d}</p></a>`).join('')}</div>
    <div class="mt-9 text-center">${button('Explore partnerships','#/partners','dark')}</div>
  </div>
</section>

<section class="py-20"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="rounded-[2.5rem] bg-brand-deep p-8 text-center text-white sm:p-12"><div class="eyebrow text-brand-orange">Give responsibly</div><h2 class="mt-4 font-display text-4xl sm:text-5xl">Support a program without inventing the numbers.</h2><p class="mx-auto mt-5 max-w-2xl leading-7 text-white/60">When approved fundraising targets, payment channels and reporting data become available, these program cards can display them transparently. Until then, the website directs visitors to the Foundation’s verified giving pathways.</p><div class="mt-8 flex flex-wrap justify-center gap-3">${button('Ways to give','#/donate')}${button('View all programs','#/programs','outline')}</div></div></div></section>`;

const cause3Observer=new MutationObserver(()=>{if(route()==='causes'&&document.getElementById('cause3Grid')&&!document.getElementById('cause3Grid').dataset.ready){document.getElementById('cause3Grid').dataset.ready='true';cause3RenderCards();}});
cause3Observer.observe(document.documentElement,{childList:true,subtree:true});
if(typeof render==='function'&&route()==='causes')render();
