/* Volunteer role detail pages v1 — adapted from the supplied Single Volunteer mockup.
   We keep the large portrait + profile-details + CTA + FAQ composition without inventing
   volunteer identities, biographies, contact details or social profiles. These pages describe
   real volunteer role types that Eagle's Wings can recruit for. */

const EWVolunteerRoles = {
  'volunteer-community-outreach': {
    title:'Community Outreach', tag:'Outreach', icon:'megaphone', photo:photos.people,
    intro:'Help Eagle’s Wings take respectful awareness, inclusion and practical information into communities.',
    about:'Community Outreach volunteers can help with awareness sessions, community conversations, participant welcome, information distribution and respectful referral to the Foundation’s approved channels.',
    responsibilities:['Support awareness and community-engagement activities.','Help welcome participants and explain approved Foundation information.','Assist with outreach logistics, attendance and follow-up coordination.','Escalate questions that require professional or organizational guidance.'],
    fit:['Comfortable speaking with different people','Respectful and non-stigmatizing communication','Reliable attendance and follow-through','Willingness to follow safeguarding and consent rules']
  },
  'volunteer-program-support': {
    title:'Program Support', tag:'Programs', icon:'hand-heart', photo:photos.learning,
    intro:'Support approved learning sessions, activities and practical program logistics.',
    about:'Program Support volunteers help the delivery team prepare materials, welcome participants, organize activities and keep sessions running smoothly. They support delivery without replacing qualified professionals.',
    responsibilities:['Prepare learning materials and activity spaces.','Support participant registration and session flow.','Assist facilitators with approved non-clinical activities.','Help document practical logistics and follow-up actions.'],
    fit:['Organized and dependable','Comfortable supporting groups','Able to follow instructions and boundaries','Interested in disability inclusion and family support']
  },
  'volunteer-family-caregiver-support': {
    title:'Family & Caregiver Support', tag:'Families', icon:'house-heart', photo:photos.family,
    intro:'Support approved family-learning and caregiver activities within clear professional boundaries.',
    about:'This role helps families and caregivers feel welcomed, informed and connected to approved learning resources. Volunteers do not diagnose, prescribe or provide individualized clinical treatment.',
    responsibilities:['Welcome families and help them access approved resources.','Support caregiver-learning sessions and practical activities.','Help coordinate referrals to appropriate Foundation contacts.','Protect privacy and avoid giving unsupported clinical advice.'],
    fit:['Patient and empathetic communication','Strong respect for privacy and dignity','Comfortable working with families','Able to maintain clear role boundaries']
  },
  'volunteer-events': {
    title:'Events Volunteer', tag:'Events', icon:'calendar-heart', photo:photos.people,
    intro:'Help community events feel organized, welcoming and safe.',
    about:'Events volunteers can help with setup, registration, participant guidance, guest support, session transitions and post-event pack-down under the direction of the event lead.',
    responsibilities:['Assist with setup, registration and guest flow.','Help participants find sessions and support points.','Support accessibility and hospitality arrangements.','Assist with safe pack-down and post-event checks.'],
    fit:['Friendly and calm under pressure','Good timekeeping','Comfortable with practical event tasks','Willing to follow event and safeguarding procedures']
  },
  'volunteer-communications': {
    title:'Communications', tag:'Media', icon:'messages-square', photo:photos.child,
    intro:'Support approved writing, photography, social media and awareness materials.',
    about:'Communications volunteers help prepare respectful public information. Any photography, names, stories or testimonials must follow consent, safeguarding and organizational approval requirements.',
    responsibilities:['Draft or edit approved awareness content.','Support photography or video only where consent is confirmed.','Help organize social-media and campaign materials.','Avoid publishing unverified claims, identities or outcomes.'],
    fit:['Strong writing or visual communication skills','Respect for consent and privacy','Attention to accuracy','Ability to work within an approval process']
  },
  'volunteer-fundraising': {
    title:'Fundraising Support', tag:'Giving', icon:'badge-dollar-sign', photo:photos.care,
    intro:'Help communicate responsible giving opportunities and support fundraising activities.',
    about:'Fundraising Support volunteers can assist with campaign preparation, donor communication, event support and stewardship administration using approved messages and verified information.',
    responsibilities:['Help prepare fundraising materials and campaigns.','Support donor enquiries using approved information.','Assist fundraising events and partnership outreach.','Avoid making unauthorized promises about impact or use of funds.'],
    fit:['Clear and trustworthy communication','Comfort with outreach and follow-up','Attention to records and accountability','Respect for donor privacy']
  },
  'volunteer-administration': {
    title:'Administration', tag:'Operations', icon:'clipboard-check', photo:photos.learning,
    intro:'Strengthen the behind-the-scenes systems that keep programs and communication organized.',
    about:'Administration volunteers can support scheduling, document organization, event lists, communications tracking and other approved operational tasks under staff supervision.',
    responsibilities:['Help organize schedules, lists and routine records.','Support document preparation and filing.','Assist with non-sensitive communications follow-up.','Handle any personal information only when authorized.'],
    fit:['Careful and organized','Comfortable with basic digital tools','Respect for confidentiality','Reliable attention to detail']
  },
  'volunteer-professional-expertise': {
    title:'Professional Expertise', tag:'Expertise', icon:'briefcase-business', photo:photos.family,
    intro:'Offer specialist skills, review, mentoring or pro-bono professional support.',
    about:'Qualified professionals may contribute expertise in areas such as training, therapy education, health education, communications, legal review, finance, technology or organizational development, subject to Foundation approval.',
    responsibilities:['Define a clear and approved scope of professional support.','Work within professional standards and applicable qualifications.','Review or strengthen Foundation materials and systems.','Flag risks, limitations and matters that require formal professional responsibility.'],
    fit:['Relevant professional competence','Clear ethical and professional boundaries','Ability to document recommendations','Willingness to collaborate with Foundation leadership']
  }
};

Object.entries(EWVolunteerRoles).forEach(([id,r])=>{routeMeta[id]=r.title;});

function volunteerRolePage(id){
  const r=EWVolunteerRoles[id];
  return `
  <section class="vold1-hero relative isolate overflow-hidden text-white">
    <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Volunteer role details">
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.72),rgba(0,31,61,.46))]"></div>
    <div class="vold1-splash absolute -left-16 bottom-0 h-48 w-48 bg-brand-orange"></div>
    <div class="relative mx-auto flex min-h-[360px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Volunteer opportunity</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">${r.title}</h1><div class="mt-4 flex items-center gap-2 text-xs font-semibold text-white/55"><a href="#/home" class="hover:text-white">Home</a><span>•</span><a href="#/volunteers" class="hover:text-white">Our Volunteers</a><span>•</span><span>${r.tag}</span></div></div></div>
  </section>

  <section class="vold1-paper py-20 lg:py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
      <div class="relative"><div class="img-zoom overflow-hidden rounded-[2rem] shadow-soft"><img src="${r.photo}" class="h-[520px] w-full object-cover" alt="Illustrative ${r.title} volunteer visual"></div><div class="absolute -bottom-5 -right-5 rounded-2xl bg-brand-deep p-5 text-white shadow-card"><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-white/50">Role category</div><div class="mt-1 flex items-center gap-2 font-bold">${icon(r.icon,'w-4 h-4 text-brand-orange')}${r.tag}</div></div></div>
      <div><div class="eyebrow text-brand-orange">Volunteer role</div><h2 class="mt-3 font-display text-5xl text-brand-deep">${r.title}</h2><p class="mt-5 text-lg leading-8 text-slate-600">${r.intro}</p>
        <div class="mt-7 grid gap-3 sm:grid-cols-2">${[['user-check','Opportunity type','Volunteer role'],['map-pin','Current base','Tegeta, Dar es Salaam'],['shield-check','Safeguarding','Required'],['clipboard-list','Placement','After review']].map(([i,t,d])=>`<div class="flex gap-3 rounded-2xl border border-brand-navy/10 bg-white p-4 shadow-sm"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><div><div class="text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400">${t}</div><div class="mt-1 text-sm font-bold text-brand-deep">${d}</div></div></div>`).join('')}</div>
        <div class="mt-8 flex flex-wrap gap-3">${button('Apply for this role','#/get-involved')}${button('Back to volunteers','#/volunteers','outline')}</div>
      </div>
    </div>

    <div class="mt-16 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
      <div><h3 class="font-display text-4xl text-brand-deep">About this role</h3><p class="mt-5 text-base leading-8 text-slate-600">${r.about}</p><div class="mt-8 rounded-[2rem] border border-brand-navy/10 bg-brand-mist p-6"><div class="eyebrow text-brand-orange">Important boundary</div><p class="mt-3 text-sm leading-7 text-slate-600">Volunteers work within approved responsibilities. Clinical, safeguarding, financial, legal or other specialist matters must be escalated to the appropriate qualified person or Foundation lead.</p></div></div>
      <div class="rounded-[2rem] bg-brand-deep p-7 text-white"><div class="eyebrow text-brand-orange">What you may help with</div><div class="mt-6 grid gap-4">${r.responsibilities.map((x,i)=>`<div class="flex gap-3"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-extrabold text-brand-orange">${i+1}</span><p class="pt-1 text-sm leading-6 text-white/70">${x}</p></div>`).join('')}</div></div>
    </div>
  </div></section>

  <section class="vold1-banner relative overflow-hidden bg-brand-deep text-white"><img src="${photos.care}" class="absolute inset-0 h-full w-full object-cover opacity-30" alt="Supporting the mission"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98),rgba(0,31,61,.84),rgba(0,31,61,.52))]"></div><div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div class="max-w-3xl"><div class="eyebrow text-brand-orange">Join the mission</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Help build a future filled with dignity, inclusion and opportunity.</h2><p class="mt-5 max-w-2xl leading-7 text-white/65">Apply through the Foundation’s volunteer-interest form. Placement depends on current needs, suitability, safeguarding and available supervision.</p><div class="mt-7">${button('Start volunteer application','#/get-involved')}</div></div></div></section>

  <section class="py-24"><div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:px-8"><div class="img-zoom overflow-hidden rounded-[2.2rem] shadow-card"><img src="${photos.people}" class="h-[460px] w-full object-cover" alt="Volunteer teamwork"></div><div><div class="eyebrow text-brand-orange">Frequently asked questions</div><h2 class="mt-3 font-display text-4xl leading-tight text-brand-deep sm:text-5xl">Questions about volunteering.</h2><div class="mt-7 space-y-3">${[
    ['Do I need professional qualifications?','Not for every role. Some opportunities are practical or community-based, while specialist roles may require relevant qualifications or experience.'],
    ['How are volunteers placed?','Interest is reviewed against current needs, role suitability, safeguarding requirements and available supervision before placement.'],
    ['Can I choose this exact role?','You can state your preferred role in the volunteer form. The Foundation may suggest another role if it is a better fit or if current needs differ.'],
    ['Will my photo or name appear on the website?','Only with appropriate approval and consent. The website does not publish volunteer identities or social profiles by default.']
  ].map(([q,a],i)=>`<details class="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm" ${i===0?'open':''}><summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-brand-deep"><span>${q}</span><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon('plus','w-4 h-4')}</span></summary><p class="pt-4 text-sm leading-7 text-slate-600">${a}</p></details>`).join('')}</div></div></div></section>

  <section class="bg-brand-mist py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Role fit','This opportunity may suit someone who is…','These are general indicators rather than acceptance guarantees. Final placement depends on the Foundation’s current needs and review.','center')}<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${r.fit.map((x,i)=>`<div class="rounded-[1.5rem] bg-white p-6 text-center shadow-sm"><span class="mx-auto grid h-11 w-11 place-items-center rounded-full ${i%2?'bg-orange-50 text-brand-orange':'bg-brand-deep text-brand-orange'}">${icon('check','w-4 h-4')}</span><p class="mt-4 text-sm font-extrabold leading-6 text-brand-deep">${x}</p></div>`).join('')}</div><div class="mt-10 text-center">${button('Apply to volunteer','#/get-involved','dark')}</div></div></section>`;
}

Object.keys(EWVolunteerRoles).forEach(id=>{EWPages[id]=()=>volunteerRolePage(id);});

function wireVolunteerRoleLinks(){
  if(route()!=='volunteers') return;
  const cards=[...document.querySelectorAll('.vol1-card')];
  const ids=Object.keys(EWVolunteerRoles);
  cards.forEach((card,i)=>{
    const link=card.querySelector('a');
    if(link&&ids[i]){
      link.href=`#/${ids[i]}`;
      link.innerHTML=`View role ${icon('arrow-up-right','w-3.5 h-3.5')}`;
    }
  });
  if(window.lucide) lucide.createIcons();
}

window.addEventListener('hashchange',()=>setTimeout(wireVolunteerRoleLinks,0));
const volDetailObserver=new MutationObserver(()=>{if(route()==='volunteers') wireVolunteerRoleLinks();});
volDetailObserver.observe(document.documentElement,{childList:true,subtree:true});
if(typeof render==='function'){render();setTimeout(wireVolunteerRoleLinks,0);}
