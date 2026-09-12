/* Blog grid inspiration 1 — adapted from the supplied Blog Grid mockup.
   Keeps the editorial 3-column card rhythm, category browsing and pagination while
   avoiding fabricated publication dates, authors, comments or published articles. */

routeMeta.blog='News & Stories';

const EWBlog1Topics=[
  {cat:'Neuro-diversity',title:'Understanding Neuro-diversity Beyond Labels',excerpt:'A planned educational article about respectful language, practical inclusion and everyday support for neuro-diverse people and their families.',img:photos.child,href:'#/program-neurodiversity',icon:'brain'},
  {cat:'Caregiving',title:'Supporting Families With Consistent Care Routines',excerpt:'A practical topic on communication, observation, routines and when caregivers should seek qualified professional guidance.',img:photos.family,href:'#/program-caregiver-training',icon:'users-round'},
  {cat:'Healthy ageing',title:'Healthy Ageing: Nutrition, Movement and Meaningful Activity',excerpt:'A planned guide for families supporting older people with dignity through healthy routines, safe movement and mental stimulation.',img:photos.care,href:'#/program-elderly-care',icon:'heart-pulse'},
  {cat:'Life skills',title:'Building Everyday Independence One Skill at a Time',excerpt:'A planned article on breaking daily activities into manageable steps and reinforcing practical learning at home and in the community.',img:photos.learning,href:'#/program-life-skills',icon:'sparkles'},
  {cat:'Family guidance',title:'Making Therapy and Education Guidance Easier to Understand',excerpt:'A family-focused topic that translates complex information into clear questions, practical routines and responsible referral boundaries.',img:photos.people,href:'#/program-education-therapy',icon:'book-heart'},
  {cat:'Foundation',title:'How Eagle’s Wings Approaches Responsible Program Growth',excerpt:'A planned organizational update on starting focused, learning carefully, documenting progress and expanding only with appropriate governance.',img:photos.people,href:'#/about',icon:'building-2'},
  {cat:'Volunteering',title:'What Responsible Volunteering Looks Like in Community Work',excerpt:'A practical editorial topic covering role clarity, safeguarding, privacy, reliability and respectful service boundaries.',img:'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=88',href:'#/get-involved',icon:'hand-heart'},
  {cat:'Inclusion',title:'Turning Community Awareness Into Everyday Inclusion',excerpt:'A planned piece about moving from awareness campaigns to practical changes in language, participation, access and attitudes.',img:'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1400&q=88',href:'#/program-neurodiversity',icon:'megaphone'},
  {cat:'Safeguarding',title:'Why Consent Matters in Nonprofit Storytelling',excerpt:'A planned resource on dignity, image rights, privacy and why impact stories should be published only with informed consent and verified context.',img:'https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=1400&q=88',href:'#/privacy',icon:'shield-check'},
  {cat:'Partnerships',title:'What a Responsible Partnership With the Foundation Can Look Like',excerpt:'A planned overview of financial, technical, in-kind and community partnerships, including the importance of clear expectations and due diligence.',img:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88',href:'#/partners',icon:'handshake'},
  {cat:'Events',title:'Preparing Community Events That Are Clear and Safeguarding-Ready',excerpt:'A planned event-preparation guide covering approved dates, venues, facilitators, registration information and participant expectations.',img:'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=88',href:'#/events',icon:'calendar-days'},
  {cat:'Transparency',title:'What Transparent Reporting Should Show as Programs Grow',excerpt:'A planned article about reporting reach, learning, practice, experience and financial stewardship without overstating what has been achieved.',img:'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=88',href:'#/reports',icon:'file-check-2'}
];

let ewBlog1Filter='All';
let ewBlog1Page=1;
const EWBlog1PageSize=9;

function ewBlog1Filtered(){
  if(ewBlog1Filter==='All') return EWBlog1Topics;
  const groups={
    Programs:['Neuro-diversity','Caregiving','Healthy ageing','Life skills','Family guidance','Inclusion'],
    Foundation:['Foundation','Partnerships','Transparency'],
    Community:['Volunteering','Events','Safeguarding']
  };
  return EWBlog1Topics.filter(x=>(groups[ewBlog1Filter]||[]).includes(x.cat));
}

function ewBlog1Card(x){
  return `<article class="blog1-card group">
    <div class="blog1-image relative overflow-hidden rounded-[1.55rem] bg-brand-deep"><img src="${x.img}" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" alt="${x.title} — illustrative editorial image"><div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-deep/60 to-transparent opacity-0 transition group-hover:opacity-100"></div><span class="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.14em] text-brand-navy shadow-sm backdrop-blur">Draft topic</span></div>
    <div class="pt-5"><div class="flex flex-wrap items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400"><span class="inline-flex items-center gap-1.5 text-brand-navy">${icon(x.icon,'w-3.5 h-3.5')}${x.cat}</span><span class="h-1 w-1 rounded-full bg-slate-300"></span><span>Editorial review pending</span></div><h2 class="mt-3 font-display text-2xl leading-tight text-brand-deep sm:text-[1.7rem]">${x.title}</h2><p class="mt-3 text-sm leading-6 text-slate-600">${x.excerpt}</p><a href="${x.href}" class="mt-5 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold text-brand-deep transition hover:border-brand-navy/25 hover:bg-brand-mist hover:text-brand-navy">Explore topic ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div>
  </article>`;
}

window.ewBlog1SetFilter=function(filter,btn){
  ewBlog1Filter=filter; ewBlog1Page=1;
  document.querySelectorAll('[data-blog1-filter]').forEach(x=>x.className='blog1-filter rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/25 hover:text-brand-navy');
  if(btn) btn.className='blog1-filter rounded-full border border-brand-navy bg-brand-navy px-4 py-2 text-xs font-extrabold text-white';
  ewBlog1Render();
};

window.ewBlog1PageTo=function(page){ewBlog1Page=page;ewBlog1Render();document.getElementById('blog1Grid')?.scrollIntoView({behavior:'smooth',block:'start'});};

function ewBlog1Render(){
  const grid=document.getElementById('blog1Grid'); if(!grid) return;
  const rows=ewBlog1Filtered(); const pages=Math.max(1,Math.ceil(rows.length/EWBlog1PageSize));
  if(ewBlog1Page>pages) ewBlog1Page=pages;
  grid.innerHTML=rows.slice((ewBlog1Page-1)*EWBlog1PageSize,ewBlog1Page*EWBlog1PageSize).map(ewBlog1Card).join('');
  const pager=document.getElementById('blog1Pager');
  if(pager) pager.innerHTML=Array.from({length:pages},(_,i)=>`<button onclick="ewBlog1PageTo(${i+1})" class="grid h-10 min-w-10 place-items-center rounded-full border px-3 text-xs font-extrabold ${ewBlog1Page===i+1?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-slate-500 hover:border-brand-navy/25'}">${i+1}</button>`).join('');
  if(window.lucide) lucide.createIcons();
}

EWPages.blog=()=>`
<section class="blog1-hero relative isolate overflow-hidden text-white"><img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Eagle's Wings news and stories"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.72),rgba(0,31,61,.5))]"></div><div class="blog1-splash absolute -left-14 bottom-0 h-64 w-48 bg-brand-orange"></div><div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Stories, guidance & updates</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">News & Stories</h1><p class="mt-4 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · News & Stories</p></div></div></section>

<section class="blog1-paper py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('News & blog','Our latest news & insights.','The editorial library is being prepared. These cards show approved topic directions for future articles; they do not claim that an article has already been published.','center')}<div class="mt-8 flex flex-wrap justify-center gap-2"><button data-blog1-filter="All" onclick="ewBlog1SetFilter('All',this)" class="blog1-filter rounded-full border border-brand-navy bg-brand-navy px-4 py-2 text-xs font-extrabold text-white">All topics</button><button data-blog1-filter="Programs" onclick="ewBlog1SetFilter('Programs',this)" class="blog1-filter rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/25 hover:text-brand-navy">Programs</button><button data-blog1-filter="Foundation" onclick="ewBlog1SetFilter('Foundation',this)" class="blog1-filter rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/25 hover:text-brand-navy">Foundation</button><button data-blog1-filter="Community" onclick="ewBlog1SetFilter('Community',this)" class="blog1-filter rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/25 hover:text-brand-navy">Community</button></div><div id="blog1Grid" class="mt-12 grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">${EWBlog1Topics.slice(0,EWBlog1PageSize).map(ewBlog1Card).join('')}</div><div id="blog1Pager" class="mt-14 flex items-center justify-center gap-2"><button onclick="ewBlog1PageTo(1)" class="grid h-10 min-w-10 place-items-center rounded-full border border-brand-navy bg-brand-navy px-3 text-xs font-extrabold text-white">1</button><button onclick="ewBlog1PageTo(2)" class="grid h-10 min-w-10 place-items-center rounded-full border border-slate-200 bg-white px-3 text-xs font-extrabold text-slate-500">2</button></div></div></section>

<section class="blog1-standards py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Editorial standards','Useful content should be clear, sourced and respectful.','Instead of copying the mockup’s unverified company-logo strip, Eagle’s Wings uses this space to show how future articles should be prepared.','center')}<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${[['search-check','Source checked','Health, legal or technical claims should be checked before publication.'],['shield-check','Consent aware','Personal stories and images require appropriate permission.'],['book-open-check','Plain language','Complex topics should be made understandable without oversimplifying.'],['scale','Clear boundaries','Educational content should not pretend to replace professional advice.'],['refresh-cw','Reviewable','Articles should be corrected or updated when information changes.']].map(([i,t,d])=>`<div class="rounded-[1.5rem] border border-slate-100 bg-white p-5 text-center shadow-sm"><span class="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><h3 class="mt-3 text-sm font-extrabold text-brand-deep">${t}</h3><p class="mt-2 text-xs leading-5 text-slate-500">${d}</p></div>`).join('')}</div></div></section>

<section class="pb-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="blog1-cta relative overflow-hidden rounded-[2.7rem] bg-brand-deep text-white"><img src="${photos.learning}" class="absolute inset-0 h-full w-full object-cover opacity-30" alt="Learning and resources"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98),rgba(0,31,61,.86),rgba(0,31,61,.4))]"></div><div class="relative max-w-3xl p-8 sm:p-12 lg:p-14"><div class="eyebrow text-brand-orange">Help shape the library</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Have a question families or caregivers need answered?</h2><p class="mt-5 max-w-2xl leading-7 text-white/65">Send the Foundation a topic suggestion. Future resources can be prioritized around recurring community questions and program needs.</p><div class="mt-8 flex flex-wrap gap-3">${button('Suggest a topic','#/contact')}${button('Browse programs','#/programs','outline')}</div></div></div></div></section>`;

if(typeof render==='function'&&route()==='blog'){render();setTimeout(ewBlog1Render,0);}
