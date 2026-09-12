/* Volunteer community page v1 — adapted from the supplied Our Volunteers mockup.
   We preserve the portrait-card rhythm and trust strip without inventing volunteer identities,
   social profiles, service history or partner logos. Volunteer profiles can be published later with consent. */

routeMeta.volunteers='Our Volunteers';
if(!resourceNav.some(x=>x[1]==='volunteers')) resourceNav.splice(4,0,['Our Volunteers','volunteers']);

EWPages.volunteers=()=>{
  const roles=[
    ['Community Outreach','Help with awareness, community conversations and respectful inclusion.','megaphone',photos.people,'Outreach'],
    ['Program Support','Assist with learning sessions, activities and practical program logistics.','hand-heart',photos.learning,'Programs'],
    ['Family & Caregiver Support','Support approved family-learning and caregiver activities within clear boundaries.','house-heart',photos.family,'Families'],
    ['Events Volunteer','Help with registration, guest support, setup and community-event coordination.','calendar-heart',photos.people,'Events'],
    ['Communications','Support approved photography, writing, social media and awareness materials.','messages-square',photos.child,'Media'],
    ['Fundraising Support','Help with campaigns, donor communication and responsible community fundraising.','badge-dollar-sign',photos.care,'Giving'],
    ['Administration','Contribute organization, records, scheduling and behind-the-scenes coordination.','clipboard-check',photos.learning,'Operations'],
    ['Professional Expertise','Offer specialist skills, training, review, mentoring or pro-bono professional support.','briefcase-business',photos.family,'Expertise']
  ];
  const standards=[
    ['shield-check','Safeguarding','Protect children, older people and vulnerable participants.'],
    ['heart-handshake','Dignity','Treat every person with respect, choice and inclusion.'],
    ['badge-check','Consent','Use names, images and stories only with appropriate approval.'],
    ['lock-keyhole','Confidentiality','Handle personal information carefully and only when necessary.'],
    ['clock-3','Reliability','Commit clearly, communicate early and respect agreed responsibilities.']
  ];

  return `
  <section class="vol1-hero relative isolate overflow-hidden text-white">
    <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Volunteer community">
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.73),rgba(0,31,61,.46))]"></div>
    <div class="vol1-splash absolute -left-16 bottom-0 h-48 w-48 bg-brand-orange"></div>
    <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div><div class="eyebrow text-brand-orange">People who power the mission</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">Our Volunteers</h1><div class="mt-4 flex items-center gap-2 text-xs font-semibold text-white/55"><a href="#/home" class="hover:text-white">Home</a><span>•</span><span>Our Volunteers</span></div></div>
    </div>
  </section>

  <section class="vol1-paper py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      ${sectionHead('Volunteer community','Meet the roles behind the mission.','The reference shows named volunteer portraits. Eagle’s Wings will publish real volunteer profiles only after approval and consent, so this page currently presents the roles people can join.','center')}
      <div class="mt-6 mx-auto max-w-3xl rounded-2xl border border-brand-navy/10 bg-brand-mist p-4 text-center text-sm leading-6 text-slate-600"><strong class="text-brand-deep">Profile policy:</strong> names, photos, biographies and social links are not fabricated. Approved volunteer profiles can replace these role cards later.</div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        ${roles.map(([title,text,ico,img,tag],i)=>`<article class="vol1-card group overflow-hidden rounded-[1.8rem] border border-brand-navy/10 bg-white shadow-card">
          <div class="relative overflow-hidden"><img src="${img}" class="vol1-photo h-72 w-full object-cover transition duration-500 group-hover:scale-[1.04]" alt="Illustrative ${title} volunteer visual"><div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-deep/65 to-transparent"></div><span class="absolute left-4 top-4 rounded-full ${i%3===1?'bg-brand-orange':'bg-brand-navy'} px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.14em] text-white">${tag}</span><span class="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-brand-navy shadow-sm">${icon(ico,'w-4 h-4')}</span></div>
          <div class="p-5 text-center"><h2 class="font-display text-2xl leading-tight text-brand-deep">${title}</h2><p class="mt-2 min-h-[66px] text-sm leading-6 text-slate-500">${text}</p><div class="mt-4 flex justify-center gap-2"><span class="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-400">${icon('heart','w-3.5 h-3.5')}</span><span class="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-400">${icon('clock-3','w-3.5 h-3.5')}</span><span class="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-400">${icon('sparkles','w-3.5 h-3.5')}</span></div><a href="#/get-involved" class="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Join this role ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="vol1-standards border-y border-brand-navy/10 bg-brand-mist py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Volunteer standards','Trust is built through how people serve.','Instead of unverified company logos, this strip highlights the standards expected from anyone representing Eagle’s Wings.','center')}
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${standards.map(([i,t,d])=>`<div class="rounded-[1.5rem] border border-white bg-white/80 p-5 text-center shadow-sm"><span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-deep text-brand-orange">${icon(i,'w-5 h-5')}</span><h3 class="mt-4 font-display text-xl text-brand-deep">${t}</h3><p class="mt-2 text-xs leading-5 text-slate-500">${d}</p></div>`).join('')}</div>
    </div>
  </section>

  <section class="py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="vol1-cta relative overflow-hidden rounded-[2.8rem] bg-brand-deep text-white"><img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover opacity-25" alt="Community volunteers"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98),rgba(0,31,61,.82),rgba(0,31,61,.42))]"></div><div class="relative max-w-3xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Become part of the team</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Bring your time, skills and care to the mission.</h2><p class="mt-5 max-w-2xl leading-7 text-white/65">Volunteer opportunities can include programs, events, communication, administration, fundraising, professional expertise and community outreach. Applications are reviewed before placement.</p><div class="mt-8 flex flex-wrap gap-3">${button('Apply to volunteer','#/get-involved')}${button('Explore programs','#/programs','outline')}</div></div></div></div></section>`;
};

if(typeof render==='function'&&route()==='volunteers') render();
