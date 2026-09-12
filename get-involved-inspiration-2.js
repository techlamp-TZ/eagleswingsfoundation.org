/* Get Involved / Volunteer inspiration 2
   Adapted from the supplied Become a Volunteer application mockup.
   The composition borrows the centered enrollment heading, large split form panel and trust strip.
   We intentionally avoid collecting unnecessary sensitive data and do not invent partner logos, volunteer counts or placements. */

routeMeta['get-involved']='Become a Volunteer';

EWPages['get-involved']=()=>{
  const roleOptions=[
    'Community Outreach',
    'Program Support',
    'Family & Caregiver Support',
    'Events Volunteer',
    'Communications',
    'Fundraising Support',
    'Administration',
    'Professional Expertise'
  ];
  const trustItems=[
    ['shield-check','Safeguarding first','Volunteer placement must respect safeguarding and role boundaries.'],
    ['heart-handshake','Dignity & inclusion','Every interaction should protect dignity, choice and respectful participation.'],
    ['badge-check','Consent-aware work','Names, images and personal stories require appropriate approval before use.'],
    ['messages-square','Clear supervision','Volunteers should know who they report to and what is expected before starting.'],
    ['clock-3','Reliable commitment','Availability and responsibilities should be agreed realistically.']
  ];

  return `
  <section class="vol2-hero relative isolate overflow-hidden text-white">
    <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="Volunteer community">
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.73),rgba(0,31,61,.45))]"></div>
    <div class="vol2-splash absolute -left-14 bottom-0 h-52 w-52 bg-brand-orange"></div>
    <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div><div class="eyebrow text-brand-orange">Join the mission</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">Become a Volunteer</h1><div class="mt-4 flex items-center gap-2 text-xs font-semibold text-white/55"><a href="#/home" class="hover:text-white">Home</a><span>•</span><span>Become a Volunteer</span></div></div>
    </div>
  </section>

  <section id="volunteer" class="vol2-paper py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      ${sectionHead('Enroll in our mission','Become a volunteer and join our community.','Tell us how you would like to contribute. This frontend form is prepared for future secure submission; it does not currently send or store application data.','center')}

      <div class="vol2-application mt-12 grid overflow-hidden rounded-[2.4rem] border border-brand-navy/10 bg-white shadow-soft lg:grid-cols-[1.12fr_.88fr]">
        <form class="vol2-form p-6 sm:p-9 lg:p-12" onsubmit="event.preventDefault();alert('Volunteer application is currently a frontend prototype. Connect a secure form backend before launch.')">
          <div class="grid gap-5 md:grid-cols-2">
            <label class="vol2-label md:col-span-2">Full name<input required class="vol2-input" placeholder="Your full name"></label>
            <label class="vol2-label">Email address<input type="email" required class="vol2-input" placeholder="you@example.com"></label>
            <label class="vol2-label">Phone / WhatsApp<input class="vol2-input" placeholder="+255 ..."></label>
            <label class="vol2-label">Occupation / skill area<input class="vol2-input" placeholder="Your occupation or main skill"></label>
            <label class="vol2-label">City / region<input class="vol2-input" placeholder="e.g. Dar es Salaam"></label>
            <label class="vol2-label">Availability<select class="vol2-input bg-white"><option value="">Choose availability</option><option>Weekdays</option><option>Weekends</option><option>Occasional events</option><option>Remote / flexible</option></select></label>
            <label class="vol2-label">Preferred role<select class="vol2-input bg-white"><option value="">Choose a role</option>${roleOptions.map(x=>`<option>${x}</option>`).join('')}</select></label>
            <label class="vol2-label md:col-span-2">How would you like to help?<textarea class="vol2-input min-h-36 resize-y" placeholder="Tell us about your interests, relevant experience, skills or the type of contribution you would like to make."></textarea></label>
          </div>

          <div class="mt-6 grid gap-3">
            <label class="flex items-start gap-3 rounded-2xl bg-brand-mist p-4 text-sm leading-6 text-slate-600"><input required type="checkbox" class="mt-1 h-4 w-4 accent-brand-navy"><span>I understand that submitting an interest form does not guarantee placement. Roles depend on current needs, suitability, supervision capacity and safeguarding requirements.</span></label>
            <label class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"><input required type="checkbox" class="mt-1 h-4 w-4 accent-brand-navy"><span>I agree that the Foundation may contact me about this volunteer enquiry once a secure form backend is activated.</span></label>
          </div>

          <button class="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-deep">Submit volunteer interest ${icon('arrow-up-right','w-4 h-4')}</button>
          <p class="mt-4 max-w-2xl text-xs leading-5 text-slate-400">We intentionally do not request date of birth, ID numbers or other sensitive information at this stage. Any information later required for safeguarding or onboarding should be collected only through an approved secure process.</p>
        </form>

        <aside class="vol2-visual relative min-h-[620px] overflow-hidden bg-[#fff1eb]">
          <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover" alt="Illustrative volunteer participation">
          <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,61,.08),rgba(0,31,61,.78))]"></div>
          <div class="absolute left-6 top-6 right-6 flex flex-wrap gap-2">${['Programs','Outreach','Events','Skills'].map((x,i)=>`<span class="rounded-full ${i===1?'bg-brand-orange':'bg-white/92'} px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] ${i===1?'text-white':'text-brand-deep'} shadow-sm">${x}</span>`).join('')}</div>
          <div class="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
            <div class="eyebrow text-brand-orange">Volunteer with purpose</div>
            <h2 class="mt-3 font-display text-4xl leading-tight">Bring your skills where they can be used responsibly.</h2>
            <p class="mt-4 max-w-xl text-sm leading-7 text-white/70">Good volunteering is not only about willingness. It also requires role clarity, consent, safeguarding, reliability and support from the organization.</p>
            <a href="#/volunteers" class="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-extrabold text-brand-deep">Explore volunteer roles ${icon('arrow-up-right','w-3.5 h-3.5')}</a>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <section class="vol2-trust border-y border-brand-navy/10 bg-brand-mist py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Volunteer standards','Trust is built before service begins.','The inspiration uses a company-logo strip. We replace that with the standards Eagle’s Wings can actually apply to volunteer intake.','center')}
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${trustItems.map(([i,t,d])=>`<article class="rounded-[1.5rem] border border-white bg-white/85 p-5 text-center shadow-sm"><span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-deep text-brand-orange">${icon(i,'w-5 h-5')}</span><h3 class="mt-4 font-display text-xl text-brand-deep">${t}</h3><p class="mt-2 text-xs leading-5 text-slate-500">${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="vol2-next relative overflow-hidden rounded-[2.8rem] bg-brand-deep text-white shadow-soft"><img src="${photos.family}" class="absolute inset-0 h-full w-full object-cover opacity-35" alt="Community support"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98),rgba(0,31,61,.83),rgba(0,31,61,.40))]"></div><div class="relative max-w-3xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">What happens next</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">Interest → review → orientation → placement.</h2><p class="mt-5 max-w-2xl leading-7 text-white/65">Once a secure intake process is active, Eagle’s Wings can review your interest, discuss fit, complete relevant safeguarding or orientation steps, and agree a role before volunteering begins.</p><div class="mt-8 flex flex-wrap gap-3">${button('Meet volunteer roles','#/volunteers')}${button('Ask a question','#/contact','outline')}</div></div></div></div>
  </section>`;
};

if(typeof render==='function'&&route()==='get-involved') render();
