/* Gallery inspiration 1 — adapted from the supplied Gallery mockup.
   Keeps the asymmetric editorial photo wall and lightbox interaction while clearly
   distinguishing prototype imagery from consent-approved Eagle's Wings media. */

routeMeta.gallery='Gallery';

const EWGallery1Items=[
  {src:photos.people,tag:'Community',title:'Community participation'},
  {src:photos.child,tag:'Children & families',title:'Inclusive learning and support'},
  {src:photos.care,tag:'Care',title:'Care and wellbeing'},
  {src:photos.family,tag:'Families',title:'Family support'},
  {src:photos.learning,tag:'Learning',title:'Learning in action'},
  {src:'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=88',tag:'Community',title:'Community connection'},
  {src:'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=88',tag:'Volunteering',title:'Volunteers serving together'},
  {src:'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1400&q=88',tag:'Outreach',title:'Outreach and participation'},
  {src:'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=88',tag:'Families',title:'Family-centred support'}
];

let ewGallery1Filter='All';
let ewGallery1Active=0;

window.ewGallery1SetFilter=function(tag,btn){
  ewGallery1Filter=tag;
  document.querySelectorAll('[data-gallery1-filter]').forEach(x=>x.className='gallery1-filter rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-500 transition hover:border-brand-navy/25 hover:text-brand-navy');
  if(btn) btn.className='gallery1-filter rounded-full border border-brand-navy bg-brand-navy px-4 py-2 text-xs font-extrabold text-white';
  ewGallery1RenderGrid();
};

function ewGallery1Filtered(){return ewGallery1Filter==='All'?EWGallery1Items:EWGallery1Items.filter(x=>x.tag===ewGallery1Filter);}

function ewGallery1Card(item,index){
  return `<button type="button" onclick="ewGallery1Open(${index})" class="gallery1-card group relative block w-full overflow-hidden rounded-[1.55rem] bg-brand-deep text-left shadow-sm focus:outline-none focus:ring-4 focus:ring-brand-orange/20">
    <img src="${item.src}" alt="${item.title} — illustrative prototype image" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.045]">
    <div class="gallery1-overlay absolute inset-0 bg-gradient-to-t from-brand-deep/82 via-brand-deep/12 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
    <div class="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><div class="text-[9px] font-extrabold uppercase tracking-[.16em] text-brand-orange">${item.tag}</div><div class="mt-1 font-display text-xl text-white">${item.title}</div></div>
    <span class="absolute right-4 top-4 grid h-11 w-11 scale-90 place-items-center rounded-full bg-white text-brand-navy opacity-0 shadow-card transition group-hover:scale-100 group-hover:opacity-100">${icon('arrow-up-right','w-4 h-4')}</span>
  </button>`;
}

window.ewGallery1RenderGrid=function(){
  const target=document.getElementById('gallery1Grid'); if(!target) return;
  const rows=ewGallery1Filtered();
  target.innerHTML=rows.map((x,i)=>ewGallery1Card(x,i)).join('');
  if(window.lucide) lucide.createIcons();
};

window.ewGallery1Open=function(index){
  const rows=ewGallery1Filtered(); ewGallery1Active=index;
  const item=rows[index]; if(!item) return;
  const modal=document.getElementById('gallery1Modal');
  if(!modal) return;
  modal.classList.remove('hidden'); modal.classList.add('flex');
  const img=document.getElementById('gallery1ModalImg'); img.src=item.src; img.alt=item.title;
  document.getElementById('gallery1ModalTag').textContent=item.tag;
  document.getElementById('gallery1ModalTitle').textContent=item.title;
  document.body.style.overflow='hidden';
};
window.ewGallery1Close=function(){const modal=document.getElementById('gallery1Modal'); if(modal){modal.classList.add('hidden');modal.classList.remove('flex');}document.body.style.overflow='';};
window.ewGallery1Step=function(dir){const rows=ewGallery1Filtered(); if(!rows.length)return; ewGallery1Active=(ewGallery1Active+dir+rows.length)%rows.length; ewGallery1Open(ewGallery1Active);};

EWPages.gallery=()=>{
  const filters=['All','Community','Children & families','Care','Families','Learning','Volunteering','Outreach'];
  return `
  <section class="gallery1-hero relative isolate overflow-hidden text-white">
    <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Eagle's Wings gallery">
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.70),rgba(0,31,61,.42))]"></div>
    <div class="gallery1-splash absolute -left-14 bottom-0 h-56 w-44 bg-brand-orange"></div>
    <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Stories in pictures</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">Gallery</h1><p class="mt-4 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · Gallery</p></div></div>
  </section>

  <section class="gallery1-paper py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div>${sectionHead('Photo & video gallery','Moments that show the mission in action.','The final gallery will feature consent-approved Eagle’s Wings photographs, event coverage and program stories. The current visual set is illustrative while original media is being prepared.')}</div><div class="flex flex-wrap gap-2">${filters.map((f,i)=>`<button data-gallery1-filter onclick="ewGallery1SetFilter('${f.replace(/'/g,"\\'")}',this)" class="gallery1-filter rounded-full border ${i===0?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-slate-500'} px-4 py-2 text-xs font-extrabold transition hover:border-brand-navy/25 hover:text-brand-navy">${f}</button>`).join('')}</div></div>

      <div class="mt-8 rounded-[1.4rem] border border-brand-navy/10 bg-brand-mist px-5 py-4 text-sm leading-6 text-slate-600"><strong class="text-brand-deep">Media policy:</strong> before launch, illustrative images should be replaced by Foundation-owned or licensed media with appropriate consent, captions and usage approval.</div>

      <div id="gallery1Grid" class="gallery1-grid mt-12">${EWGallery1Items.map((x,i)=>ewGallery1Card(x,i)).join('')}</div>
    </div>
  </section>

  <section class="gallery1-standards border-y border-brand-navy/10 bg-brand-mist py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Responsible storytelling','Every image should protect dignity as well as tell a story.','Instead of the reference mockup’s unverified company-logo strip, this site uses the space to communicate the standards behind publication.','center')}<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${[['badge-check','Consent approved'],['shield-check','Safeguarding checked'],['image','Accurate context'],['heart-handshake','Dignified portrayal'],['copyright','Usage rights clear']].map(([i,t])=>`<div class="rounded-[1.45rem] border border-white bg-white p-5 text-center shadow-sm"><span class="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-deep text-brand-orange">${icon(i,'w-4 h-4')}</span><div class="mt-3 text-sm font-extrabold text-brand-deep">${t}</div><div class="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">Before publication</div></div>`).join('')}</div></div></section>

  <section class="py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="gallery1-cta relative overflow-hidden rounded-[2.7rem] bg-brand-deep text-white"><img src="${photos.child}" class="absolute inset-0 h-full w-full object-cover opacity-32" alt="Community storytelling"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98),rgba(0,31,61,.82),rgba(0,31,61,.30))]"></div><div class="relative max-w-3xl p-8 sm:p-12 lg:p-14"><div class="eyebrow text-brand-orange">Share the mission responsibly</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Have approved photos or a story from an Eagle’s Wings activity?</h2><p class="mt-5 max-w-2xl leading-7 text-white/65">The Foundation can review suitable media for future publication, provided consent, context and usage rights are clear.</p><div class="mt-8 flex flex-wrap gap-3">${button('Contact the team','#/contact')}${button('See our impact approach','#/impact','outline')}</div></div></div></div></section>

  <div id="gallery1Modal" class="gallery1-modal fixed inset-0 z-[100] hidden items-center justify-center bg-brand-deep/94 p-4 backdrop-blur-sm" onclick="if(event.target===this)ewGallery1Close()">
    <button onclick="ewGallery1Close()" class="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close gallery">${icon('x','w-5 h-5')}</button>
    <button onclick="ewGallery1Step(-1)" class="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Previous image">${icon('chevron-left','w-5 h-5')}</button>
    <button onclick="ewGallery1Step(1)" class="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Next image">${icon('chevron-right','w-5 h-5')}</button>
    <div class="w-full max-w-5xl"><img id="gallery1ModalImg" class="max-h-[76vh] w-full rounded-[1.7rem] object-contain shadow-2xl" alt=""><div class="mt-5 text-center"><div id="gallery1ModalTag" class="text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-orange"></div><div id="gallery1ModalTitle" class="mt-2 font-display text-3xl text-white"></div></div></div>
  </div>`;
};

if(typeof render==='function'&&route()==='gallery'){render();setTimeout(ewGallery1RenderGrid,0);}
