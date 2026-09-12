/* Blog Standard inspiration 2 — adapted from the supplied standard blog mockup.
   Preserves the earlier grid page at #/blog-grid and makes #/blog a standard editorial list with a sticky sidebar.
   No fabricated dates, authors, comments, donors, partner logos or publication claims are introduced. */

const EWBlog2GridPage=EWPages.blog;
EWPages['blog-grid']=EWBlog2GridPage;
routeMeta['blog-grid']='News Grid';
routeMeta.blog='News & Stories';

const EWBlog2Items=(typeof EWBlog1Topics!=='undefined'&&EWBlog1Topics.length)?EWBlog1Topics:[
  {cat:'Neuro-diversity',title:'Understanding Neuro-diversity Beyond Labels',excerpt:'A planned educational article about respectful language, practical inclusion and everyday support for neuro-diverse people and their families.',img:photos.child,href:'#/program-neurodiversity',icon:'brain'},
  {cat:'Caregiving',title:'Supporting Families With Consistent Care Routines',excerpt:'A practical topic on communication, observation, routines and when caregivers should seek qualified professional guidance.',img:photos.family,href:'#/program-caregiver-training',icon:'users-round'},
  {cat:'Healthy ageing',title:'Healthy Ageing: Nutrition, Movement and Meaningful Activity',excerpt:'A planned guide for families supporting older people with dignity through healthy routines, safe movement and mental stimulation.',img:photos.care,href:'#/program-elderly-care',icon:'heart-pulse'},
  {cat:'Life skills',title:'Building Everyday Independence One Skill at a Time',excerpt:'A planned article on breaking daily activities into manageable steps and reinforcing practical learning at home and in the community.',img:photos.learning,href:'#/program-life-skills',icon:'sparkles'}
];

let ewBlog2Query='';
let ewBlog2Category='All';
let ewBlog2Page=1;
const EWBlog2PageSize=4;

function ewBlog2Rows(){
  const q=ewBlog2Query.trim().toLowerCase();
  return EWBlog2Items.filter(x=>{
    const catOk=ewBlog2Category==='All'||x.cat===ewBlog2Category;
    const qOk=!q||`${x.title} ${x.excerpt} ${x.cat}`.toLowerCase().includes(q);
    return catOk&&qOk;
  });
}

function ewBlog2Card(x){
  return `<article class="blog2-list-card group">
    <a href="${x.href}" class="blog2-list-img block overflow-hidden rounded-[1.7rem] bg-brand-deep"><img src="${x.img}" alt="${x.title} — illustrative editorial image" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"></a>
    <div class="mt-5 flex flex-wrap items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400"><span class="inline-flex items-center gap-1.5 text-brand-navy">${icon(x.icon||'newspaper','w-3.5 h-3.5')}${x.cat}</span><span class="h-1 w-1 rounded-full bg-slate-300"></span><span>Draft topic · Editorial review pending</span></div>
    <h2 class="mt-3 max-w-3xl font-display text-3xl leading-tight text-brand-deep sm:text-[2.15rem]">${x.title}</h2>
    <p class="mt-4 max-w-3xl text-sm leading-7 text-slate-600">${x.excerpt}</p>
    <a href="${x.href}" class="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs font-extrabold text-brand-deep transition hover:border-brand-navy/25 hover:bg-brand-mist">Explore topic ${icon('arrow-up-right','w-3.5 h-3.5')}</a>
  </article>`;
}

window.ewBlog2Search=function(value){ewBlog2Query=value||'';ewBlog2Page=1;ewBlog2Render();};
window.ewBlog2CategoryTo=function(cat){ewBlog2Category=cat;ewBlog2Page=1;ewBlog2Render();};
window.ewBlog2PageTo=function(page){ewBlog2Page=page;ewBlog2Render();document.getElementById('blog2List')?.scrollIntoView({behavior:'smooth',block:'start'});};

function ewBlog2Render(){
  const list=document.getElementById('blog2List'); if(!list) return;
  const rows=ewBlog2Rows();
  const pages=Math.max(1,Math.ceil(rows.length/EWBlog2PageSize));
  if(ewBlog2Page>pages) ewBlog2Page=pages;
  const slice=rows.slice((ewBlog2Page-1)*EWBlog2PageSize,ewBlog2Page*EWBlog2PageSize);
  list.innerHTML=slice.length?slice.map(ewBlog2Card).join(''):`<div class="rounded-[2rem] border border-dashed border-brand-navy/20 bg-brand-mist p-10 text-center"><span class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand-navy shadow-sm">${icon('search-x')}</span><h3 class="mt-5 font-display text-3xl text-brand-deep">No matching topics</h3><p class="mt-2 text-sm text-slate-500">Try another search term or category.</p></div>`;
  const pager=document.getElementById('blog2Pager');
  if(pager) pager.innerHTML=Array.from({length:pages},(_,i)=>`<button onclick="ewBlog2PageTo(${i+1})" class="grid h-10 min-w-10 place-items-center rounded-full border px-3 text-xs font-extrabold ${ewBlog2Page===i+1?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-slate-500 hover:border-brand-navy/25'}">${i+1}</button>`).join('');
  if(window.lucide) lucide.createIcons();
}

function ewBlog2CategoryList(){
  const cats=[...new Set(EWBlog2Items.map(x=>x.cat))];
  return ['All',...cats].map(c=>`<button onclick="ewBlog2CategoryTo('${c.replace(/'/g,"\\'")}')" class="blog2-category-row w-full text-left"><span class="inline-flex items-center gap-2">${icon('folder-open','w-3.5 h-3.5 text-brand-navy')} ${c==='All'?'All topics':c}</span><span class="rounded-full bg-white px-2 py-1 text-[10px] font-extrabold text-slate-400">${c==='All'?EWBlog2Items.length:EWBlog2Items.filter(x=>x.cat===c).length}</span></button>`).join('');
}

EWPages.blog=()=>`
<section class="blog2-hero relative isolate overflow-hidden text-white"><img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Eagle's Wings news and stories"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.76),rgba(0,31,61,.52))]"></div><div class="relative z-10 mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Editorial library</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">News & Stories</h1><p class="mt-4 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · Standard view</p><div class="mt-7"><a href="#/blog-grid" class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold text-white backdrop-blur hover:bg-white/15">${icon('layout-grid','w-4 h-4')} Switch to grid view</a></div></div></div></section>

<section class="blog2-paper py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="blog2-layout">
  <main><div class="mb-10"><div class="eyebrow text-brand-orange">News & blog</div><h2 class="mt-3 font-display text-5xl leading-tight text-brand-deep">Practical guidance, updates and planned editorial topics.</h2><p class="mt-4 max-w-3xl leading-7 text-slate-600">This standard view mirrors the inspiration’s long-form listing layout. Current entries are editorial topics awaiting approval, not published articles with invented dates or authors.</p></div><div id="blog2List">${EWBlog2Items.slice(0,EWBlog2PageSize).map(ewBlog2Card).join('')}</div><div id="blog2Pager" class="mt-12 flex gap-2">${Array.from({length:Math.max(1,Math.ceil(EWBlog2Items.length/EWBlog2PageSize))},(_,i)=>`<button onclick="ewBlog2PageTo(${i+1})" class="grid h-10 min-w-10 place-items-center rounded-full border px-3 text-xs font-extrabold ${i===0?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-slate-500'}">${i+1}</button>`).join('')}</div></main>
  <aside class="blog2-sidebar">
    <div class="blog2-side-card"><label class="text-xs font-extrabold uppercase tracking-[.16em] text-brand-navy">Search topics</label><div class="mt-3 flex items-center rounded-full bg-white px-4 shadow-sm"><input oninput="ewBlog2Search(this.value)" class="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none" placeholder="Search the editorial library"><span class="text-slate-400">${icon('search','w-4 h-4')}</span></div></div>
    <div class="blog2-side-card"><h3 class="blog2-side-title">Categories</h3><div class="mt-3">${ewBlog2CategoryList()}</div></div>
    <div class="blog2-side-card"><h3 class="blog2-side-title">Planned updates</h3><div class="mt-2">${EWBlog2Items.slice(0,3).map(x=>`<a href="${x.href}" class="blog2-recent"><img src="${x.img}" alt="${x.title}"><span><span class="line-clamp-2 text-xs font-extrabold leading-5 text-brand-deep">${x.title}</span><span class="mt-1 block text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">${x.cat}</span></span></a>`).join('')}</div></div>
    <div class="blog2-side-card"><h3 class="blog2-side-title">Popular themes</h3><div class="mt-3">${['Neuro-diversity','Caregiving','Healthy ageing','Life skills','Safeguarding','Partnerships'].map(x=>`<button onclick="ewBlog2Search('${x}')" class="blog2-tag">${x}</button>`).join('')}</div></div>
    <div class="blog2-side-card blog2-support p-0"><img src="${photos.child}" alt="Support the mission"><div class="p-6"><div class="eyebrow text-brand-orange">Monthly support</div><h3 class="mt-3 font-display text-3xl leading-tight">Help useful guidance and programs grow responsibly.</h3><p class="mt-3 text-sm leading-6 text-white/65">Recurring giving is planned as part of the Foundation’s future secure donation setup.</p><a href="#/donate" class="mt-5 inline-flex rounded-full bg-brand-orange px-5 py-3 text-xs font-extrabold text-white">Explore giving</a></div></div>
  </aside>
</div></div></section>

<section class="blog2-trust py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Publishing discipline','What every future article should pass before publication.','This replaces the mockup’s unverified company-logo strip with useful standards for the Foundation’s editorial process.','center')}<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${[['search-check','Source checked'],['shield-check','Consent aware'],['book-open-check','Plain language'],['scale','Clear boundaries'],['refresh-cw','Reviewable']].map(([i,t])=>`<div class="rounded-[1.5rem] bg-white p-5 text-center shadow-sm"><span class="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><h3 class="mt-3 text-sm font-extrabold text-brand-deep">${t}</h3></div>`).join('')}</div></div></section>`;

if(typeof render==='function'&&route()==='blog'){render();setTimeout(ewBlog2Render,0);}
