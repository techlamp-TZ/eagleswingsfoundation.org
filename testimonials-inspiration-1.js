/* Testimonials inspiration 1 — adapted from the supplied Testimonials mockup.
   Preserves the 3x3 quote-card rhythm without inventing names, ratings, testimonials,
   beneficiary outcomes or audience counts. Real stories can replace placeholders after consent and verification. */

routeMeta.testimonials='Testimonials';
if(typeof resourceNav!=='undefined' && !resourceNav.some(x=>x[1]==='testimonials')) resourceNav.splice(5,0,['Testimonials','testimonials']);

const EWTestimonial1Slots=[
  ['Families','Family perspective','A future consent-approved story can describe how a parent or guardian experienced Foundation learning, guidance or community support.','users-round'],
  ['Caregivers','Caregiver perspective','This space is reserved for a verified caregiver reflection on training, practical routines, communication or confidence.','hand-heart'],
  ['Volunteers','Volunteer perspective','A future volunteer voice can describe role clarity, safeguarding, service experience and what meaningful participation looked like.','heart-handshake'],
  ['Community','Community perspective','Approved community feedback can document changes in awareness, inclusion, stigma reduction or access to practical information.','megaphone'],
  ['Older people & families','Healthy-ageing perspective','This card can later feature a verified story about dignified support, routines, movement, nutrition or family engagement.','heart-pulse'],
  ['Learning','Education perspective','A future approved story can reflect on accessible education, therapy guidance, specialized parenting or practical learning.','book-heart'],
  ['Life skills','Independence perspective','This space can document a verified experience around communication, routines, confidence and everyday life-skills practice.','sparkles'],
  ['Partners','Partner perspective','A future partner story can explain what responsible collaboration, sponsorship, expertise or accountability looked like in practice.','handshake'],
  ['Events','Participant perspective','Approved event feedback can reflect what participants learned, how accessible the session felt and what they took forward.','calendar-heart']
];

EWPages.testimonials=()=>`
<section class="test1-hero relative isolate overflow-hidden text-white">
  <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Community storytelling">
  <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.72),rgba(0,31,61,.48))]"></div>
  <div class="test1-splash absolute -left-14 bottom-0 h-56 w-44 bg-brand-orange"></div>
  <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
    <div><div class="eyebrow text-brand-orange">Voices with dignity</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">Testimonials</h1><p class="mt-4 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · Testimonials</p></div>
  </div>
</section>

<section class="test1-paper py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    ${sectionHead('Testimonials','What people will be able to share—once verified.','The inspiration uses named people, ratings and direct quotations. Eagle’s Wings will not fabricate any of those. This page is therefore publication-ready but holds consent-aware story slots until real testimonials are approved.','center')}
    <div class="mx-auto mt-6 max-w-3xl rounded-[1.5rem] border border-brand-navy/10 bg-brand-mist p-5 text-center text-sm leading-6 text-slate-600"><strong class="text-brand-deep">Publishing rule:</strong> no quote, name, photo, role, rating or outcome appears as a testimonial until the Foundation has verified the source and appropriate consent.</div>

    <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      ${EWTestimonial1Slots.map(([tag,title,text,ico],i)=>`<article class="test1-card relative overflow-hidden rounded-[1.7rem] border border-[#d9ebe5] bg-[#eaf7f2] p-7 shadow-sm">
        <div class="flex items-center justify-between gap-4"><span class="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.15em] text-brand-navy">${icon(ico,'w-3.5 h-3.5 text-brand-orange')}${tag}</span><span class="rounded-full border border-brand-navy/10 bg-white/70 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-slate-400">Awaiting approval</span></div>
        <div class="mt-6 text-brand-navy/20">${icon('quote','w-10 h-10')}</div>
        <h2 class="mt-4 font-display text-2xl leading-tight text-brand-deep">${title}</h2>
        <p class="mt-4 min-h-[112px] text-sm leading-7 text-slate-600">${text}</p>
        <div class="mt-6 border-t border-brand-navy/10 pt-5"><div class="text-[10px] font-extrabold uppercase tracking-[.15em] text-brand-orange">Future testimonial requirements</div><div class="mt-3 flex flex-wrap gap-2">${['Consent','Verified source','Accurate context'].map(x=>`<span class="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-brand-navy shadow-sm">${x}</span>`).join('')}</div></div>
        <span class="test1-quote absolute -bottom-3 -right-1 font-display text-[7rem] leading-none text-brand-navy/[.06]">“</span>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="test1-standards border-y border-brand-navy/10 bg-brand-mist py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    ${sectionHead('Responsible storytelling','A real story should be powerful because it is true.','Instead of fake ratings and company logos, this section defines the standards used before a testimonial can be published.','center')}
    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${[
      ['badge-check','Source verified','The speaker and relationship to the story are confirmed.'],
      ['shield-check','Consent recorded','Publication permission is appropriate to the person and context.'],
      ['scan-face','Dignity protected','Stories avoid exploitation, stigma and unnecessary identifying detail.'],
      ['file-check-2','Context checked','Claims are reviewed so quotations do not imply unsupported outcomes.'],
      ['refresh-cw','Consent revisitable','A story can be corrected or removed when circumstances require it.']
    ].map(([ic,t,d])=>`<div class="rounded-[1.5rem] border border-white bg-white/85 p-5 text-center shadow-sm"><span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-deep text-brand-orange">${icon(ic,'w-5 h-5')}</span><h3 class="mt-4 font-display text-xl text-brand-deep">${t}</h3><p class="mt-2 text-xs leading-5 text-slate-500">${d}</p></div>`).join('')}</div>
  </div>
</section>

<section class="py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="test1-cta relative overflow-hidden rounded-[2.7rem] bg-brand-deep text-white shadow-soft"><img src="${photos.family}" class="absolute inset-0 h-full w-full object-cover opacity-28" alt="Community story sharing"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98),rgba(0,31,61,.86),rgba(0,31,61,.38))]"></div><div class="relative max-w-3xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Share an experience</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Have a story Eagle’s Wings should consider?</h2><p class="mt-5 max-w-2xl leading-7 text-white/65">Contact the Foundation first. The team can review the story, explain how it may be used, confirm consent and decide whether publication is appropriate.</p><div class="mt-8 flex flex-wrap gap-3">${button('Contact the team','#/contact')}${button('Explore our impact approach','#/impact','outline')}</div></div></div></div></section>`;

if(typeof render==='function'&&route()==='testimonials') render();
