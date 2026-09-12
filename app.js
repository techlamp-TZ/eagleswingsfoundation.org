const programs = [
  {icon:'brain', title:'Neuro-diversity Awareness', short:'Building understanding around Autism, ADHD, Down syndrome and intellectual disability.', tag:'Awareness'},
  {icon:'heart-pulse', title:'Elderly Care Support', short:'Nutrition, physical exercise and mental stimulation guidance for older people and their families.', tag:'Care'},
  {icon:'book-open', title:'Education & Therapy Guidance', short:'Practical education on neurological conditions, therapy exercises and specialized parenting.', tag:'Education'},
  {icon:'sparkles', title:'Life Skills Programs', short:'Structured life-skills support for children with autism, particularly young people aged 12 and above.', tag:'Skills'},
  {icon:'users', title:'Caregiver Training', short:'Helping caregivers build the knowledge and confidence to support children and older people professionally.', tag:'Training'}
];

const photos = {
  hero:'https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1800&q=88',
  child:'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=88',
  care:'https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=1400&q=88',
  people:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=88',
  family:'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=88',
  learning:'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=88'
};

const nav = [
  ['Home','home'],['About','about'],['Programs','programs'],['Impact','impact'],['Get Involved','get-involved'],['Events','events'],['News','blog'],['Contact','contact']
];
const resourceNav = [['Gallery','gallery'],['Annual Reports','reports'],['Partners','partners'],['Careers','careers'],['FAQ','faq'],['Privacy','privacy']];
const routeMeta = {
  home:'Home',about:'About Us',programs:'Programs',impact:'Impact','get-involved':'Get Involved',events:'Events',blog:'News',gallery:'Gallery',reports:'Annual Reports',partners:'Partners',careers:'Careers',faq:'FAQ',contact:'Contact',privacy:'Privacy',resources:'Resources',donate:'Donate'
};

const route = () => location.hash.replace('#/','').replace('#','') || 'home';
const icon = (name, cls='w-5 h-5') => `<i data-lucide="${name}" class="${cls}"></i>`;
const button = (label, href, variant='primary') => {
  const styles = variant === 'primary'
    ? 'bg-brand-orange text-white shadow-[0_12px_34px_rgba(246,147,30,.24)] hover:-translate-y-0.5 hover:bg-orange-500'
    : variant === 'dark'
      ? 'bg-brand-deep text-white hover:-translate-y-0.5 hover:bg-brand-navy'
      : 'border border-brand-navy/15 bg-white text-brand-navy hover:-translate-y-0.5 hover:border-brand-navy/30 hover:bg-brand-mist';
  return `<a href="${href}" class="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold transition ${styles}">${label}${icon('arrow-up-right','w-4 h-4')}</a>`;
};
const pill = (text, iconName='sparkles') => `<span class="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-brand-navy shadow-sm">${icon(iconName,'w-4 h-4 text-brand-orange')}${text}</span>`;
const sectionHead = (eyebrow,title,text='',align='left') => `<div class="${align==='center'?'mx-auto max-w-3xl text-center':'max-w-3xl'}"><div class="eyebrow text-brand-orange">${eyebrow}</div><h2 class="mt-3 font-display text-4xl leading-[1.05] text-brand-deep sm:text-5xl">${title}</h2>${text?`<p class="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">${text}</p>`:''}</div>`;

function brand(){
  return `<a href="#/home" class="group flex items-center gap-3" aria-label="Eagle's Wings Foundation Tanzania home">
    <span class="relative grid h-12 w-14 place-items-center overflow-hidden rounded-2xl bg-brand-deep shadow-sm transition group-hover:-translate-y-0.5">
      <svg viewBox="0 0 64 42" class="h-8 w-10" aria-hidden="true"><path d="M30 21C20 9 10 4 2 5c5 4 8 8 10 13-4-2-7-2-10-1 7 4 13 9 18 16l10-12Z" fill="#F6931E"/><path d="M34 21C44 9 54 4 62 5c-5 4-8 8-10 13 4-2 7-2 10-1-7 4-13 9-18 16L34 21Z" fill="#F6931E"/><path d="M26 18h12l-6 14-6-14Z" fill="#fff"/></svg>
    </span>
    <span><span class="block font-display text-[1.35rem] leading-none text-brand-deep">Eagle’s Wings</span><span class="mt-1 block text-[9px] font-extrabold uppercase tracking-[.22em] text-brand-orange">Foundation Tanzania</span></span>
  </a>`;
}

function header(){
  const r = route();
  return `<div class="bg-brand-deep text-white">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 text-[11px] sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 text-white/75"><span class="hidden items-center gap-1.5 sm:flex">${icon('map-pin','w-3.5 h-3.5')}Tegeta, Dar es Salaam</span><a href="tel:+255749044723" class="flex items-center gap-1.5 hover:text-white">${icon('phone','w-3.5 h-3.5')}+255 749 044 723</a></div>
      <div class="flex items-center gap-3"><a href="https://instagram.com/eaglewings.tz" target="_blank" class="text-white/70 hover:text-white">Instagram</a><span class="h-3 w-px bg-white/20"></span><a href="#/donate" class="font-extrabold text-brand-orange">Support the mission</a></div>
    </div>
  </div>
  <header class="sticky top-0 z-50 border-b border-slate-100/90 bg-white/90 backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
      ${brand()}
      <nav class="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">
        ${nav.map(([t,id])=>`<a href="#/${id}" class="rounded-full px-3 py-2 text-[13px] font-bold transition ${r===id?'bg-brand-mist text-brand-navy':'text-slate-600 hover:bg-slate-50 hover:text-brand-navy'}">${t}</a>`).join('')}
        <div class="group relative"><button class="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-navy">Resources${icon('chevron-down','w-3.5 h-3.5')}</button><div class="invisible absolute right-0 top-[calc(100%+10px)] w-56 translate-y-1 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">${resourceNav.map(([t,id])=>`<a href="#/${id}" class="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-brand-mist hover:text-brand-navy">${t}</a>`).join('')}</div></div>
        <a href="#/donate" class="ml-2 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-[13px] font-extrabold text-white shadow-[0_10px_26px_rgba(246,147,30,.2)]">${icon('heart','w-4 h-4')}Donate</a>
      </nav>
      <button id="menuBtn" class="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-brand-navy xl:hidden" aria-label="Open menu">${icon('menu')}</button>
    </div>
    <div id="mobileMenu" class="hidden border-t border-slate-100 bg-white px-4 pb-5 pt-3 xl:hidden"><div class="grid gap-1">${nav.concat([['Resources','resources'],['Donate','donate']]).map(([t,id])=>`<a class="rounded-xl px-4 py-3 text-sm font-bold ${r===id?'bg-brand-mist text-brand-navy':'text-slate-600 hover:bg-brand-mist'}" href="#/${id}">${t}</a>`).join('')}</div></div>
  </header>`;
}

function footer(){
  return `<footer class="mt-24 overflow-hidden bg-brand-deep text-white">
    <div class="relative border-b border-white/10"><div class="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl"></div><div class="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-8"><div><div class="eyebrow text-brand-orange">Stay connected</div><h2 class="mt-3 max-w-2xl font-display text-4xl leading-tight">Stories, events and practical guidance—straight to your inbox.</h2></div><form class="flex max-w-xl flex-col gap-3 sm:flex-row"><input type="email" aria-label="Email address" placeholder="Email address" class="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/45 focus:border-brand-orange"><button class="rounded-full bg-brand-orange px-6 py-3.5 text-sm font-extrabold text-white">Subscribe</button></form></div></div>
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_.7fr_.9fr] lg:px-8">
      <div>${brand().replace('text-brand-deep','text-white').replace('bg-brand-deep','bg-white/10')}<p class="mt-5 max-w-sm text-sm leading-7 text-white/60">Advancing inclusion, practical care and brighter tomorrows for children, families and older people in Tanzania.</p><div class="mt-5 flex gap-2"><a href="https://instagram.com/eaglewings.tz" target="_blank" class="grid h-10 w-10 place-items-center rounded-full bg-white/8 text-white/70 hover:bg-white/15 hover:text-white">${icon('instagram','w-4 h-4')}</a><a href="https://wa.me/255749044723" target="_blank" class="grid h-10 w-10 place-items-center rounded-full bg-white/8 text-white/70 hover:bg-white/15 hover:text-white">${icon('message-circle','w-4 h-4')}</a></div></div>
      <div><h3 class="text-sm font-extrabold">Explore</h3><div class="mt-4 grid gap-3 text-sm text-white/60"><a href="#/about">About us</a><a href="#/programs">Programs</a><a href="#/impact">Impact</a><a href="#/events">Events</a><a href="#/blog">News</a></div></div>
      <div><h3 class="text-sm font-extrabold">Resources</h3><div class="mt-4 grid gap-3 text-sm text-white/60"><a href="#/gallery">Gallery</a><a href="#/reports">Annual reports</a><a href="#/partners">Partners</a><a href="#/careers">Careers</a><a href="#/faq">FAQ</a><a href="#/privacy">Privacy</a></div></div>
      <div><h3 class="text-sm font-extrabold">Contact</h3><div class="mt-4 space-y-3 text-sm text-white/60"><p class="flex gap-2">${icon('map-pin','mt-0.5 w-4 h-4 shrink-0')}Tegeta, Dar es Salaam, Tanzania</p><a class="flex gap-2" href="tel:+255749044723">${icon('phone','mt-0.5 w-4 h-4 shrink-0')}+255 749 044 723</a><p class="flex gap-2">${icon('instagram','mt-0.5 w-4 h-4 shrink-0')}@Eaglewings.tz</p></div></div>
    </div>
    <div class="border-t border-white/10"><div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><span>© 2026 Eagle’s Wings Foundation Tanzania.</span><span>Inclusion · Care · Brighter Tomorrows</span></div></div>
  </footer>`;
}

function pageHero(kicker,title,text,img=photos.people,actions=''){
  return `<section class="hero-orbs site-noise overflow-hidden"><div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-20"><div><div class="eyebrow text-brand-orange">${kicker}</div><h1 class="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-brand-deep sm:text-6xl">${title}</h1><p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">${text}</p>${actions?`<div class="mt-8 flex flex-wrap gap-3">${actions}</div>`:''}</div><div class="relative mx-auto w-full max-w-2xl"><div class="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-brand-orange/15 blur-sm"></div><div class="absolute -bottom-8 -right-5 h-40 w-40 rounded-full bg-brand-navy/10"></div><div class="img-zoom relative overflow-hidden rounded-[2.6rem] border-[10px] border-white shadow-soft"><img src="${img}" class="h-[360px] w-full object-cover sm:h-[430px]" alt="Eagle's Wings Foundation community work"></div><div class="absolute -bottom-5 left-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-card sm:left-10"><div class="flex items-center gap-3"><span class="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-brand-orange">${icon('heart-handshake','w-5 h-5')}</span><div><p class="text-xs font-extrabold uppercase tracking-[.16em] text-slate-400">Our approach</p><p class="text-sm font-bold text-brand-deep">Dignity • Skills • Support</p></div></div></div></div></div></section>`;
}
const hero=pageHero;

function emptyState(title,text,ico='inbox'){
  return `<section class="py-20"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="soft-grid overflow-hidden rounded-[2.5rem] border border-dashed border-brand-navy/20 bg-brand-mist p-8 text-center sm:p-14"><div class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand-navy shadow-sm">${icon(ico,'w-7 h-7')}</div><h2 class="mt-6 font-display text-4xl text-brand-deep">${title}</h2><p class="mx-auto mt-4 max-w-xl leading-7 text-slate-600">${text}</p></div></div></section>`;
}

function home(){
  return `<section class="hero-orbs site-noise overflow-hidden"><div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:min-h-[700px] lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-16"><div class="relative z-10">${pill('A more inclusive Tanzania','sparkles')}<h1 class="mt-6 max-w-4xl font-display text-[3.7rem] leading-[.94] tracking-[-.02em] text-brand-deep sm:text-7xl lg:text-[5.4rem]">Different abilities.<br><span class="relative text-brand-orange">Brighter tomorrows.<svg class="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 460 18" preserveAspectRatio="none" aria-hidden="true"><path d="M4 13C108 5 263 2 456 10" stroke="#F6931E" stroke-width="5" stroke-linecap="round" opacity=".28"/></svg></span></h1><p class="mt-7 max-w-2xl text-lg leading-8 text-slate-600">We improve the lives of people with disabilities and challenges, particularly children and older people facing conditions such as Alzheimer’s and Dementia.</p><div class="mt-8 flex flex-wrap gap-3">${button('Support our work','#/donate')}${button('Explore programs','#/programs','outline')}</div><div class="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-500"><span class="flex items-center gap-2">${icon('check-circle-2','w-4 h-4 text-brand-orange')}Community awareness</span><span class="flex items-center gap-2">${icon('check-circle-2','w-4 h-4 text-brand-orange')}Caregiver skills</span><span class="flex items-center gap-2">${icon('check-circle-2','w-4 h-4 text-brand-orange')}Life-skills support</span></div></div>
    <div class="relative mx-auto w-full max-w-[620px]"><div class="absolute -right-8 top-8 h-36 w-36 rounded-full bg-brand-orange/15"></div><div class="absolute -left-8 bottom-10 h-44 w-44 rounded-full bg-brand-navy/10"></div><div class="grid grid-cols-[.8fr_1.2fr] gap-4"><div class="space-y-4 pt-14"><div class="img-zoom overflow-hidden rounded-[2rem] shadow-soft"><img src="${photos.child}" class="h-56 w-full object-cover" alt="Child support"></div><div class="rounded-[2rem] bg-brand-deep p-6 text-white shadow-soft"><div class="eyebrow text-brand-orange">Since 2025</div><p class="mt-3 font-display text-2xl leading-tight">Rooted in Tegeta. Built for inclusion.</p></div></div><div class="space-y-4"><div class="img-zoom overflow-hidden rounded-[2.4rem] border-[8px] border-white shadow-soft"><img src="${photos.hero}" class="h-[390px] w-full object-cover" alt="Inclusive care"></div><div class="grid grid-cols-2 gap-4"><div class="rounded-2xl bg-white p-5 shadow-card"><div class="font-display text-3xl text-brand-navy">5</div><p class="mt-1 text-xs font-semibold text-slate-500">Core program areas</p></div><div class="rounded-2xl bg-orange-50 p-5"><div class="font-display text-3xl text-brand-orange">DSM</div><p class="mt-1 text-xs font-semibold text-slate-500">Community base</p></div></div></div></div></div></div></section>

  <section class="border-y border-slate-100 bg-white py-6"><div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 text-xs font-extrabold uppercase tracking-[.16em] text-slate-400 sm:px-6 lg:justify-between lg:px-8"><span class="text-brand-navy">Our focus</span><span>Neuro-diversity</span><span>Healthy ageing</span><span>Family education</span><span>Life skills</span><span>Caregiver development</span></div></section>

  <section class="py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('What we do','Practical programs designed around families and communities.','Our work brings awareness, education, practical skills and caregiver support together—so inclusion becomes something people can live every day.','center')}<div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">${programs.map((p,i)=>`<a href="#/programs" class="float-card group rounded-[1.8rem] border border-slate-100 bg-white p-6 shadow-card"><div class="flex items-center justify-between"><span class="grid h-12 w-12 place-items-center rounded-2xl ${i%2?'bg-brand-mist text-brand-navy':'bg-orange-50 text-brand-orange'}">${icon(p.icon)}</span><span class="text-xs font-extrabold text-slate-300">0${i+1}</span></div><div class="mt-7 text-[10px] font-extrabold uppercase tracking-[.18em] text-brand-orange">${p.tag}</div><h3 class="mt-2 font-display text-2xl leading-tight text-brand-deep">${p.title}</h3><p class="mt-3 text-sm leading-6 text-slate-600">${p.short}</p><span class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Learn more ${icon('arrow-right','w-3.5 h-3.5 transition group-hover:translate-x-1')}</span></a>`).join('')}</div></div></section>

  <section class="bg-brand-mist py-24"><div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8"><div class="relative"><div class="grid grid-cols-2 gap-4"><div class="img-zoom mt-12 overflow-hidden rounded-[2.2rem] shadow-soft"><img src="${photos.care}" class="h-[380px] w-full object-cover" alt="Care and support"></div><div class="space-y-4"><div class="img-zoom overflow-hidden rounded-[2.2rem] shadow-soft"><img src="${photos.family}" class="h-60 w-full object-cover" alt="Families and community"></div><div class="rounded-[2rem] bg-brand-orange p-6 text-white"><div class="flex items-center gap-3">${icon('hand-heart','w-7 h-7')}<div class="font-display text-2xl">Care with dignity</div></div><p class="mt-3 text-sm leading-6 text-white/80">Support that respects the person, equips the family and strengthens the community.</p></div></div></div></div><div>${sectionHead('Our approach','Care for the person. Equip the family. Strengthen the community.','We connect awareness with practical learning so families and caregivers are better prepared to support different needs with confidence and dignity.')}<div class="mt-8 grid gap-4 sm:grid-cols-2">${[['eye','Understand','Build awareness and reduce stigma through accurate, respectful education.'],['book-heart','Learn','Share practical guidance around care, therapy exercises and parenting.'],['activity','Practise','Develop daily-life, communication and independence skills.'],['users','Support','Equip caregivers and families for consistent, professional support.']].map(([i,t,d])=>`<div class="rounded-2xl bg-white p-5 shadow-sm"><div class="flex items-start gap-3"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-brand-orange">${icon(i,'w-4 h-4')}</span><div><h3 class="font-extrabold text-brand-deep">${t}</h3><p class="mt-1 text-sm leading-6 text-slate-500">${d}</p></div></div></div>`).join('')}</div><div class="mt-8">${button('Meet the foundation','#/about','dark')}</div></div></div></section>

  <section class="py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid overflow-hidden rounded-[2.8rem] bg-brand-deep lg:grid-cols-[1.1fr_.9fr]"><div class="p-8 text-white sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Give with purpose</div><h2 class="mt-4 max-w-xl font-display text-5xl leading-[1.02]">Help turn care and knowledge into everyday opportunity.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">Support can be financial, in-kind, professional or voluntary. The Foundation is preparing secure online giving while continuing to welcome direct support.</p><div class="mt-8 flex flex-wrap gap-3">${button('Donate','#/donate')}${button('Volunteer','#/get-involved','outline')}</div></div><div class="relative min-h-[360px]"><img src="${photos.learning}" class="absolute inset-0 h-full w-full object-cover" alt="Education and learning"><div class="absolute inset-0 bg-gradient-to-r from-brand-deep/40 to-transparent lg:from-brand-deep/20"></div><div class="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur"><div class="flex items-center gap-3"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-orange text-white">${icon('shield-check')}</span><div><p class="text-sm font-extrabold text-brand-deep">Responsible giving</p><p class="mt-0.5 text-xs text-slate-500">Online checkout will activate after merchant onboarding.</p></div></div></div></div></div></div></section>

  <section class="bg-orange-50/60 py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div>${sectionHead('Impact & transparency','Evidence first. Stories with consent.','We will publish verified program results, beneficiary stories and annual reports as the Foundation’s reporting systems mature. We do not use invented impact numbers.')}</div><div class="grid gap-4 sm:grid-cols-3"><a href="#/impact" class="float-card rounded-2xl bg-white p-6 shadow-sm"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon('chart-no-axes-combined')}</span><h3 class="mt-5 font-display text-2xl">Impact</h3><p class="mt-2 text-sm leading-6 text-slate-500">How outcomes will be measured and reported.</p></a><a href="#/reports" class="float-card rounded-2xl bg-white p-6 shadow-sm"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon('file-check-2')}</span><h3 class="mt-5 font-display text-2xl">Reports</h3><p class="mt-2 text-sm leading-6 text-slate-500">Annual and financial documents when available.</p></a><a href="#/gallery" class="float-card rounded-2xl bg-white p-6 shadow-sm"><span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon('images')}</span><h3 class="mt-5 font-display text-2xl">Gallery</h3><p class="mt-2 text-sm leading-6 text-slate-500">Approved media from programs and events.</p></a></div></div></div></section>`;
}

function render(){
  const id = route();
  const body = id === 'home' ? home() : (window.EWPages?.[id] ? window.EWPages[id]() : home());
  document.title = `${routeMeta[id] || 'Home'} | Eagle's Wings Foundation Tanzania`;
  document.getElementById('app').innerHTML = header() + `<main class="route-enter">${body}</main>` + footer() + `<a href="https://wa.me/255749044723" target="_blank" aria-label="Chat on WhatsApp" class="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl ring-4 ring-white transition hover:-translate-y-1">${icon('message-circle','w-6 h-6')}</a>`;
  document.getElementById('menuBtn')?.addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('hidden'));
  lucide.createIcons();
  window.scrollTo({top:0,behavior:'instant'});
}

window.addEventListener('hashchange',render);
render();
