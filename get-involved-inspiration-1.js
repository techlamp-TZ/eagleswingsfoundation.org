/* Get Involved / Volunteer inspiration 1
   Adapted from the supplied Become a Volunteer mockup.
   The page keeps the strong volunteer-photo + form composition while using Eagle's Wings
   verified program areas and clearly marking the form as a frontend prototype. */

routeMeta['get-involved']='Get Involved';

EWPages['get-involved']=()=>{
  const roles=[
    ['calendar-heart','Programs & events','Help with awareness sessions, learning activities, event logistics and community participation.'],
    ['megaphone','Outreach & communication','Support respectful awareness content, community mobilization and digital communication.'],
    ['hand-heart','Family & caregiver support','Contribute practical support around approved family and caregiver activities within clear role boundaries.'],
    ['briefcase-business','Professional skills','Offer relevant expertise in administration, training, design, fundraising, partnerships or operations.']
  ];

  return `
  <section class="vol1-hero relative isolate overflow-hidden bg-brand-deep text-white">
    <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover opacity-42" alt="Eagle's Wings Foundation volunteers"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.94),rgba(0,31,61,.58),rgba(0,31,61,.78))]"></div></div>
    <div class="relative mx-auto flex min-h-[340px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Take part</div><h1 class="mt-4 font-display text-5xl sm:text-6xl">Become a Volunteer</h1><p class="mt-3 text-sm text-white/60">Home · Get Involved · Volunteer</p></div></div>
  </section>

  <section id="volunteer" class="vol1-form-section py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch">
        <div class="vol1-photo relative min-h-[560px] overflow-hidden rounded-[2.3rem] shadow-soft">
          <img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover" alt="Volunteer and community participation placeholder">
          <div class="absolute inset-0 bg-gradient-to-t from-brand-deep/78 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9"><div class="eyebrow text-brand-orange">Give your time with purpose</div><h2 class="mt-3 max-w-md font-display text-4xl leading-tight">Small contributions can strengthen a growing mission.</h2><p class="mt-4 max-w-lg text-sm leading-7 text-white/70">Volunteer roles will be matched to current Foundation needs, safeguarding requirements and the skills you can responsibly offer.</p></div>
        </div>

        <form class="vol1-form rounded-[2.3rem] border border-slate-100 bg-white p-6 shadow-soft sm:p-9 lg:p-11" onsubmit="event.preventDefault();alert('Volunteer form is a frontend prototype. Connect a form backend before launch.')">
          <div class="text-center"><div class="eyebrow text-brand-orange">We need your help</div><h2 class="mt-3 font-display text-4xl text-brand-deep">Volunteer interest form</h2><p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">Tell Eagle’s Wings how you would like to contribute. No application data is sent yet because the form backend has not been connected.</p></div>

          <div class="mt-9"><div class="flex items-center gap-3"><span class="grid h-9 w-9 place-items-center rounded-xl bg-orange-50 text-brand-orange">${icon('user-round','w-4 h-4')}</span><div><div class="text-sm font-extrabold text-brand-deep">Personal information</div><div class="text-xs text-slate-400">Basic details for future follow-up.</div></div></div></div>

          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <label class="vol1-label">First name<input required class="vol1-input" placeholder="First name"></label>
            <label class="vol1-label">Last name<input required class="vol1-input" placeholder="Last name"></label>
            <label class="vol1-label">Phone / WhatsApp<input class="vol1-input" placeholder="+255 ..."></label>
            <label class="vol1-label">Email address<input type="email" class="vol1-input" placeholder="you@example.com"></label>
            <label class="vol1-label">Availability<select class="vol1-input bg-white"><option>Choose availability</option><option>Weekdays</option><option>Weekends</option><option>Occasional events</option><option>Remote / flexible</option></select></label>
            <label class="vol1-label">Area of interest<select class="vol1-input bg-white"><option>Choose an area</option><option>Programs & events</option><option>Outreach & communication</option><option>Family & caregiver support</option><option>Professional skills</option><option>Fundraising & partnerships</option><option>Administration</option></select></label>
            <label class="vol1-label md:col-span-2">How would you like to help?<textarea class="vol1-input min-h-36 resize-y" placeholder="Tell us about your skills, interests, experience or the type of support you would like to offer."></textarea></label>
          </div>

          <label class="mt-5 flex items-start gap-3 rounded-2xl bg-brand-mist p-4 text-sm leading-6 text-slate-600"><input type="checkbox" class="mt-1 h-4 w-4 accent-brand-navy"><span>I understand that submitting this prototype form does not create a confirmed volunteer placement. Eagle’s Wings will review interests against current needs and safeguarding requirements.</span></label>

          <button class="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy">Send volunteer interest ${icon('send','w-4 h-4')}</button>
        </form>
      </div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Ways to contribute','Volunteer where your skills fit best.','The strongest placements are those where current Foundation needs, volunteer capability and responsible role boundaries align.','center')}
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">${roles.map(([ic,t,d],i)=>`<article class="float-card rounded-[1.8rem] border border-white bg-white p-6 shadow-card"><div class="flex items-center justify-between"><span class="grid h-12 w-12 place-items-center rounded-2xl ${i===1?'bg-brand-deep text-white':'bg-orange-50 text-brand-orange'}">${icon(ic,'w-5 h-5')}</span><span class="text-xs font-extrabold text-slate-300">0${i+1}</span></div><h3 class="mt-5 font-display text-2xl leading-tight text-brand-deep">${t}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${d}</p></article>`).join('')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="vol1-cta relative overflow-hidden rounded-[2.8rem] bg-brand-deep text-white shadow-soft"><img src="${photos.family}" class="absolute inset-0 h-full w-full object-cover opacity-52" alt="Community support"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.98)_0%,rgba(0,31,61,.88)_55%,rgba(0,31,61,.25)_100%)]"></div><div class="vol1-brush absolute right-[7%] top-0 h-full w-[38%] bg-brand-orange/78"></div><div class="relative max-w-2xl p-8 sm:p-12 lg:p-16"><div class="eyebrow text-brand-orange">Join the movement</div><h2 class="mt-4 font-display text-4xl leading-tight sm:text-5xl">There is more than one way to strengthen the mission.</h2><p class="mt-5 max-w-xl leading-7 text-white/65">If volunteering is not the right fit, you can support a program, introduce a partner, share the Foundation’s work or contribute financially.</p><div class="mt-8 flex flex-wrap gap-3">${button('Support a program','#/donate')}${button('Explore partnerships','#/partners','outline')}</div></div></div></div>
  </section>

  <section class="pb-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">${sectionHead('What happens next','A simple, responsible volunteer pathway.','The workflow below is ready for the Foundation to operationalize as volunteer intake develops.','center')}
      <div class="mt-12 grid gap-5 md:grid-cols-3">${[
        ['clipboard-check','1. Express interest','Share your availability, skills and preferred area of contribution.'],
        ['messages-square','2. Fit & safeguarding review','The Foundation reviews current needs, role suitability and any required checks or orientation.'],
        ['handshake','3. Agree the placement','If there is a suitable opening, expectations, supervision and next steps are confirmed before you begin.']
      ].map(([ic,t,d])=>`<div class="rounded-[1.8rem] border border-slate-100 bg-white p-7 shadow-card"><span class="grid h-12 w-12 place-items-center rounded-2xl bg-brand-mist text-brand-navy">${icon(ic,'w-5 h-5')}</span><h3 class="mt-5 font-display text-2xl text-brand-deep">${t}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${d}</p></div>`).join('')}</div>
    </div>
  </section>`;
};

if(typeof render==='function') render();
