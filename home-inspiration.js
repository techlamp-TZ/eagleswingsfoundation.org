/* Home page enhancement inspired by the latest reference mockup.
   It intentionally avoids fabricated impact metrics and testimonials. */

home = function(){
  const serviceCards = [
    {title:'Understand neuro-diversity', text:'Awareness and respectful education around Autism, ADHD, Down syndrome and intellectual disability.', icon:'brain', img:photos.child},
    {title:'Support healthy ageing', text:'Nutrition, movement and mental-stimulation guidance for older people and the families who support them.', icon:'heart-pulse', img:photos.care},
    {title:'Build practical independence', text:'Life-skills learning and caregiver guidance that strengthen confidence, participation and dignity.', icon:'sparkles', img:photos.learning}
  ];

  const supportAreas = [
    {tag:'Awareness', title:'Neuro-diversity awareness', text:'Help communities replace stigma with understanding and practical knowledge.', icon:'brain', img:photos.child},
    {tag:'Care', title:'Elderly care support', text:'Support families with practical guidance for nutrition, activity and mental stimulation.', icon:'heart-handshake', img:photos.care},
    {tag:'Skills', title:'Life-skills development', text:'Back structured learning that helps young people practise daily-life and independence skills.', icon:'sparkles', img:photos.learning},
    {tag:'Training', title:'Caregiver development', text:'Strengthen the people who provide daily support through practical, professional learning.', icon:'users', img:photos.people}
  ];

  const leaders = [
    ['Stella Paul Rweyemamu','Director','SR'],
    ['Tegemeo Paschal Nsonda','Executive Secretary','TN'],
    ['Paul Alex Rweyemamu','Treasurer','PR'],
    ['Winifrida Igembe Rweyemamu','Member','WR'],
    ['Doreen Temistocles Igembe','Member','DI']
  ];

  const storyCards = [
    {tag:'Planned resource', title:'Understanding neuro-diversity with dignity', text:'An accessible awareness article is being prepared for families, schools and communities.', img:photos.child},
    {tag:'Planned resource', title:'Practical caregiver learning', text:'Future guidance will translate complex care topics into practical everyday steps.', img:photos.people},
    {tag:'Planned resource', title:'Healthy ageing and mental stimulation', text:'A future resource area will share evidence-informed ideas for supporting older people.', img:photos.care}
  ];

  return `
  <section class="home-paper site-noise relative overflow-hidden">
    <div class="pointer-events-none absolute -left-28 top-24 hidden h-[420px] w-[230px] rotate-6 bg-brand-deep blob-a opacity-[.97] lg:block"></div>
    <div class="pointer-events-none absolute -right-28 top-20 hidden h-[430px] w-[240px] -rotate-6 bg-gradient-to-b from-brand-orange to-orange-300 blob-b opacity-90 lg:block"></div>
    <div class="pointer-events-none absolute left-[42%] top-20 hidden h-24 w-24 rounded-full border-2 border-dashed border-brand-orange/30 lg:block"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:min-h-[720px] lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:py-20">
      <div class="relative z-10">
        ${pill('Inclusion • care • practical support','heart-handshake')}
        <h1 class="mt-6 max-w-3xl font-display text-[3.65rem] leading-[.95] tracking-[-.025em] text-brand-deep sm:text-7xl lg:text-[5.15rem]">
          Build a more inclusive future, <span class="text-brand-orange">one caring action at a time.</span>
        </h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          Eagle’s Wings Foundation Tanzania supports people with disabilities and challenges—especially children, families and older people—through awareness, education, life skills and caregiver development.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          ${button('Support our work','#/donate')}
          ${button('Discover our mission','#/about','dark')}
        </div>
        <div class="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
          ${[
            ['badge-check','Respectful inclusion'],
            ['book-open-check','Practical learning'],
            ['users-round','Family & caregiver support']
          ].map(([i,t])=>`<div class="flex items-center gap-2 rounded-2xl border border-brand-navy/10 bg-white/85 px-3 py-3 text-xs font-extrabold text-brand-navy shadow-sm backdrop-blur">${icon(i,'w-4 h-4 text-brand-orange')}${t}</div>`).join('')}
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[660px]">
        <div class="absolute left-0 top-8 h-24 w-24 rounded-full bg-brand-orange/15 blur-sm"></div>
        <div class="absolute -bottom-4 right-2 h-40 w-40 rounded-full bg-brand-navy/10"></div>
        <div class="relative ml-auto w-[92%] overflow-hidden bg-brand-deep/5 p-2 shadow-soft blob-b">
          <img src="${photos.hero}" class="h-[520px] w-full object-cover blob-b grayscale-[20%]" alt="Inclusive family support">
        </div>
        <div class="absolute -left-1 bottom-12 rounded-[1.7rem] border border-white/70 bg-white/95 p-4 shadow-card backdrop-blur sm:-left-7 sm:p-5">
          <div class="flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-2xl bg-orange-50 text-brand-orange">${icon('hand-heart','w-5 h-5')}</span>
            <div><p class="text-[10px] font-extrabold uppercase tracking-[.18em] text-slate-400">Our promise</p><p class="mt-0.5 text-sm font-extrabold text-brand-deep">Dignity before everything</p></div>
          </div>
        </div>
        <div class="absolute right-0 top-8 rounded-2xl bg-brand-orange px-4 py-3 text-white shadow-lg sm:right-2">
          <div class="font-display text-3xl leading-none">5</div><p class="mt-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-white/80">Core program areas</p>
        </div>
      </div>
    </div>
  </section>

  <section class="border-y border-slate-100 bg-white py-5">
    <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-[11px] font-extrabold uppercase tracking-[.17em] text-slate-400 sm:px-6 lg:justify-between lg:px-8">
      <span class="text-brand-navy">Our focus</span><span>Neuro-diversity</span><span>Healthy ageing</span><span>Family education</span><span>Life skills</span><span>Caregiver development</span>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div class="relative">
        <div class="grid grid-cols-[1.05fr_.95fr] gap-4">
          <div class="img-zoom overflow-hidden rounded-[2rem] shadow-soft">
            <img src="${photos.family}" class="h-[500px] w-full object-cover" alt="Family and community">
          </div>
          <div class="space-y-4 pt-10">
            <div class="img-zoom overflow-hidden rounded-[2rem] shadow-card"><img src="${photos.child}" class="h-56 w-full object-cover" alt="Child learning"></div>
            <div class="img-zoom overflow-hidden rounded-[2rem] shadow-card"><img src="${photos.care}" class="h-56 w-full object-cover" alt="Caregiver support"></div>
          </div>
        </div>
        <div class="absolute -bottom-5 left-6 rounded-2xl bg-brand-orange px-5 py-4 text-white shadow-lg">
          <div class="flex items-center gap-3">${icon('heart-handshake','w-6 h-6')}<span class="font-display text-xl">Compassion in action</span></div>
        </div>
      </div>
      <div>
        ${sectionHead('About Eagle’s Wings','Care that starts with understanding and grows into opportunity.','Our approach combines awareness, practical education, caregiver development and life-skills support so families can respond to different needs with confidence and dignity.')}
        <div class="mt-8 space-y-3">
          ${[
            'Raise awareness about neuro-diversity and disability',
            'Support children, families and older people with practical guidance',
            'Equip caregivers with skills they can apply every day',
            'Build confidence, dignity and participation through life skills'
          ].map(t=>`<div class="flex items-start gap-3 rounded-2xl bg-brand-mist px-4 py-3.5"><span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-brand-navy shadow-sm">${icon('check','w-4 h-4')}</span><span class="text-sm font-semibold leading-6 text-slate-600">${t}</span></div>`).join('')}
        </div>
        <div class="mt-8">${button('Explore our story','#/about','dark')}</div>
      </div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      ${sectionHead('Featured services','Three ways our work turns understanding into practical support.','The reference mockup uses strong photo-led service cards. We have adapted that idea to Eagle’s Wings’ real program areas.','center')}
      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        ${serviceCards.map((s,i)=>`<a href="#/programs" class="group relative min-h-[430px] overflow-hidden rounded-[2.2rem] shadow-card">
          <img src="${s.img}" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" alt="${s.title}">
          <div class="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/25 to-transparent"></div>
          <div class="absolute inset-x-5 bottom-5 rounded-[1.6rem] border border-white/15 bg-brand-deep/80 p-6 text-white backdrop-blur-md">
            <div class="flex items-center justify-between"><span class="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-navy">${icon(s.icon,'w-5 h-5')}</span><span class="text-xs font-extrabold text-white/45">0${i+1}</span></div>
            <h3 class="mt-5 font-display text-3xl">${s.title}</h3>
            <p class="mt-3 text-sm leading-6 text-white/70">${s.text}</p>
          </div>
        </a>`).join('')}
      </div>
      <div class="mt-9 text-center">${button('View all programs','#/programs','dark')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        ${sectionHead('Ways to support','Put generosity behind a clear area of work.','The inspiration uses fundraising campaign cards. We keep that structure but avoid invented targets or progress figures until verified campaigns are approved.')}
        <div>${button('See donation options','#/donate','outline')}</div>
      </div>
      <div class="mt-12 grid gap-5 md:grid-cols-2">
        ${supportAreas.map((c,i)=>`<article class="float-card overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-card">
          <div class="grid sm:grid-cols-[.85fr_1.15fr]">
            <div class="relative min-h-[250px]"><img src="${c.img}" class="absolute inset-0 h-full w-full object-cover" alt="${c.title}"><span class="absolute left-4 top-4 rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-white">${c.tag}</span></div>
            <div class="p-6 sm:p-7">
              <div class="grid h-11 w-11 place-items-center rounded-xl bg-brand-mist text-brand-navy">${icon(c.icon,'w-5 h-5')}</div>
              <h3 class="mt-5 font-display text-3xl leading-tight text-brand-deep">${c.title}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-600">${c.text}</p>
              <div class="mt-6 border-t border-slate-100 pt-5"><div class="flex items-center justify-between text-xs"><span class="font-extrabold uppercase tracking-[.12em] text-slate-400">Campaign status</span><span class="font-extrabold text-brand-navy">Open for support</span></div><div class="mt-3 grid grid-cols-3 gap-1.5"><span class="h-1.5 rounded-full bg-brand-orange"></span><span class="h-1.5 rounded-full bg-slate-100"></span><span class="h-1.5 rounded-full bg-slate-100"></span></div><p class="mt-2 text-[11px] text-slate-400">No fundraising target or progress figure has been published yet.</p></div>
              <a href="#/donate" class="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-navy">Support this area ${icon('arrow-up-right','w-4 h-4')}</a>
            </div>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="bg-brand-mist py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      ${sectionHead('Leadership','Meet the people guiding the mission.','We are using verified organization roles and names. Individual profile photographs can be added once approved.','center')}
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        ${leaders.map(([name,role,initials],i)=>`<article class="group overflow-hidden rounded-[1.8rem] bg-white p-5 shadow-card">
          <div class="relative grid h-48 place-items-center overflow-hidden rounded-[1.45rem] ${i%2?'bg-brand-mist':'bg-orange-50'}">
            <div class="absolute -left-8 -top-8 h-28 w-28 rounded-full ${i%2?'bg-brand-navy/10':'bg-brand-orange/15'}"></div>
            <div class="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-brand-navy/10"></div>
            <div class="relative grid h-24 w-24 place-items-center rounded-full bg-white font-display text-4xl text-brand-navy shadow-soft">${initials}</div>
          </div>
          <h3 class="mt-5 font-display text-[1.45rem] leading-tight text-brand-deep">${name}</h3>
          <p class="mt-2 text-xs font-extrabold uppercase tracking-[.14em] text-brand-orange">${role}</p>
        </article>`).join('')}
      </div>
      <div class="mt-9 text-center">${button('Learn about the foundation','#/about','outline')}</div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
        <div>${sectionHead('Community voices','Stories will be shared responsibly.','The inspiration includes testimonials. Eagle’s Wings has not yet supplied approved testimonials, so this section is designed and ready without inventing quotes.')}</div>
        <div class="grid gap-4 md:grid-cols-3">
          ${[
            ['Families','Approved family reflections will appear here once consent and review are complete.','home'],
            ['Caregivers','Caregiver experiences will be published only after the Foundation confirms wording and permission.','heart-handshake'],
            ['Partners','Partner perspectives can be added as formal collaborations and sponsor relationships are confirmed.','handshake']
          ].map(([t,d,i])=>`<div class="relative rounded-[1.8rem] border border-slate-100 bg-white p-6 shadow-card"><div class="absolute right-5 top-3 font-display text-6xl leading-none text-brand-orange/20">“</div><div class="flex items-center gap-2 text-brand-orange">${icon('star','w-4 h-4')}${icon('star','w-4 h-4')}${icon('star','w-4 h-4')}</div><p class="mt-6 text-sm leading-7 text-slate-600">${d}</p><div class="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5"><span class="grid h-10 w-10 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><div><p class="text-sm font-extrabold text-brand-deep">${t}</p><p class="text-[11px] text-slate-400">Content pending approval</p></div></div></div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 pb-24 sm:px-6 lg:px-8">
    <div class="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2.7rem] bg-brand-deep lg:grid-cols-[1.05fr_.95fr]">
      <div class="relative z-10 p-8 text-white sm:p-12 lg:p-16">
        <div class="eyebrow text-brand-orange">Join the movement</div>
        <h2 class="mt-4 max-w-xl font-display text-5xl leading-[1.02]">Your time, skills and generosity can strengthen a family’s tomorrow.</h2>
        <p class="mt-5 max-w-xl leading-7 text-white/65">Volunteer, partner, advocate, donate or share professional expertise. There are many ways to contribute beyond a single transaction.</p>
        <div class="mt-8 flex flex-wrap gap-3">${button('Get involved','#/get-involved')}${button('Donate','#/donate','outline')}</div>
      </div>
      <div class="relative min-h-[360px] overflow-hidden">
        <div class="absolute -right-16 -top-20 h-[470px] w-[470px] rounded-full bg-brand-orange"></div>
        <img src="${photos.learning}" class="absolute bottom-0 right-0 h-[95%] w-[92%] object-cover object-center mix-blend-luminosity opacity-95 blob-a" alt="Young learner">
      </div>
    </div>
  </section>

  <section class="bg-orange-50/60 py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        ${sectionHead('News & learning','Useful stories and practical guidance are being prepared.','The inspiration includes a blog grid. We have added the structure now, while clearly labelling content that is not yet published.')}
        <div>${button('Visit news','#/blog','dark')}</div>
      </div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        ${storyCards.map((s,i)=>`<article class="overflow-hidden rounded-[2rem] bg-white shadow-card">
          <div class="img-zoom overflow-hidden"><img src="${s.img}" class="h-64 w-full object-cover" alt="${s.title}"></div>
          <div class="p-6">
            <div class="flex items-center justify-between gap-3 text-[10px] font-extrabold uppercase tracking-[.14em]"><span class="text-brand-orange">${s.tag}</span><span class="text-slate-300">0${i+1}</span></div>
            <h3 class="mt-4 font-display text-3xl leading-tight text-brand-deep">${s.title}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">${s.text}</p>
            <a href="#/blog" class="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-navy">View news area ${icon('arrow-right','w-4 h-4')}</a>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>${sectionHead('Impact & transparency','Evidence first. Stories with consent.','Verified program results, beneficiary stories and annual reports will be published as reporting systems mature. We will not present invented impact numbers.')}</div>
        <div class="grid gap-4 sm:grid-cols-3">
          <a href="#/impact" class="float-card rounded-2xl bg-brand-mist p-6"><span class="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-navy">${icon('chart-no-axes-combined')}</span><h3 class="mt-5 font-display text-2xl">Impact</h3><p class="mt-2 text-sm leading-6 text-slate-500">How outcomes will be measured and reported.</p></a>
          <a href="#/reports" class="float-card rounded-2xl bg-brand-mist p-6"><span class="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-navy">${icon('file-check-2')}</span><h3 class="mt-5 font-display text-2xl">Reports</h3><p class="mt-2 text-sm leading-6 text-slate-500">Annual and financial documents when available.</p></a>
          <a href="#/gallery" class="float-card rounded-2xl bg-brand-mist p-6"><span class="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-navy">${icon('images')}</span><h3 class="mt-5 font-display text-2xl">Gallery</h3><p class="mt-2 text-sm leading-6 text-slate-500">Approved media from programs and events.</p></a>
        </div>
      </div>
    </div>
  </section>`;
};

render();
