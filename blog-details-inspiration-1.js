/* Blog Details inspiration 1 — adapted from the supplied Blog Details mockup.
   Adds article-detail routes for the existing editorial topics and connects both blog layouts to them.
   Current articles are explicitly presented as draft educational resources: no fabricated publication dates,
   authors, comments, ratings or review counts are introduced. */

const EWBlogDetailSlugs=[
  'understanding-neurodiversity-beyond-labels',
  'supporting-families-with-consistent-care-routines',
  'healthy-ageing-nutrition-movement-meaningful-activity',
  'building-everyday-independence-one-skill-at-a-time',
  'making-therapy-education-guidance-easier-to-understand',
  'responsible-program-growth',
  'responsible-volunteering-in-community-work',
  'community-awareness-to-everyday-inclusion',
  'why-consent-matters-in-nonprofit-storytelling',
  'responsible-partnerships-with-the-foundation',
  'preparing-community-events-safeguarding-ready',
  'transparent-reporting-as-programs-grow'
];

const EWBlogDetailExtras={
  'Neuro-diversity':{
    intro:'Neuro-diversity describes natural differences in how people think, learn, communicate and experience the world. Respectful support begins by seeing the person before the label and by understanding that needs can vary widely between individuals.',
    heading:'From awareness to practical inclusion',
    points:['Use respectful, person-centred language.','Ask what support is helpful instead of assuming.','Make routines, instructions and environments easier to understand.','Treat family and caregiver knowledge as valuable context.'],
    boundary:'Educational guidance should not be used to diagnose a condition or replace assessment by qualified professionals.',
    related:'#/program-neurodiversity'
  },
  'Caregiving':{
    intro:'Consistent care is often built through predictable routines, clear communication, observation and small adjustments over time. Caregivers also need realistic boundaries, support and opportunities to ask for professional guidance.',
    heading:'Building routines that are easier to sustain',
    points:['Keep important routines simple and predictable.','Observe what helps or increases distress.','Share relevant information consistently among caregivers.','Escalate health, safety or behavioural concerns appropriately.'],
    boundary:'Caregiver education can support day-to-day practice, but clinical or therapeutic decisions should remain with appropriately qualified professionals.',
    related:'#/program-caregiver-training'
  },
  'Healthy ageing':{
    intro:'Healthy ageing support can include balanced nutrition, safe movement, meaningful activity, social connection and attention to changes in memory, mood or functioning. The right approach should reflect the individual’s health, abilities and preferences.',
    heading:'Supporting dignity, movement and meaningful activity',
    points:['Encourage appropriate movement and daily activity.','Support hydration and balanced nutrition where possible.','Use familiar, meaningful activities to support engagement.','Notice changes that may need medical attention.'],
    boundary:'Exercise, nutrition and cognitive-activity guidance should be adapted to the individual and should not replace medical advice.',
    related:'#/program-elderly-care'
  },
  'Life skills':{
    intro:'Life-skills learning is strongest when a large task is broken into clear, repeatable steps and practised in the environment where the skill is actually needed. Progress may look different for each learner.',
    heading:'Teaching for everyday independence',
    points:['Break tasks into manageable steps.','Use visual or verbal prompts consistently.','Practise the same skill across realistic settings.','Reduce prompts gradually when the learner is ready.'],
    boundary:'Learning goals should respect the person’s abilities, communication needs, safety and dignity rather than forcing a single definition of independence.',
    related:'#/program-life-skills'
  },
  'Family guidance':{
    intro:'Families often receive complex education or therapy information at stressful moments. Clear explanations, practical examples and good referral boundaries can help people understand what questions to ask and what support may be appropriate.',
    heading:'Making guidance easier to use at home',
    points:['Translate technical language into practical examples.','Clarify the purpose of each recommended activity.','Encourage families to ask what progress should look like.','Document questions for the next professional appointment.'],
    boundary:'General guidance should never be presented as an individualized treatment plan without appropriate professional assessment.',
    related:'#/program-education-therapy'
  },
  'Foundation':{
    intro:'Responsible nonprofit growth means being clear about what is already operating, what is planned and what still requires approval, funding, staffing or evidence. Growth should follow governance rather than outrun it.',
    heading:'Start focused, learn carefully, expand responsibly',
    points:['Separate confirmed activities from future plans.','Document decisions and lessons learned.','Publish verified results rather than optimistic estimates.','Expand only when governance and delivery capacity can support it.'],
    boundary:'Organizational updates should distinguish aspiration from verified performance and should not imply scale that has not been documented.',
    related:'#/about'
  },
  'Volunteering':{
    intro:'Good volunteering is not only about goodwill. Volunteers need role clarity, safeguarding expectations, privacy boundaries, supervision and a clear understanding of what they are and are not authorized to do.',
    heading:'Volunteering with clarity and accountability',
    points:['Define responsibilities before placement.','Complete safeguarding and conduct orientation.','Protect personal and sensitive information.','Escalate concerns through the agreed channel.'],
    boundary:'Volunteers should not provide specialist, clinical or financial advice unless the role explicitly requires it and they are appropriately qualified and authorized.',
    related:'#/get-involved'
  },
  'Inclusion':{
    intro:'Awareness matters most when it changes everyday participation. Inclusion can involve language, physical access, communication, expectations, timing, sensory considerations and whether people are genuinely able to take part.',
    heading:'Turning awareness into everyday practice',
    points:['Ask who may be excluded by the current setup.','Offer more than one way to communicate or participate.','Avoid language that reduces people to a diagnosis.','Include families and people with lived experience in planning.'],
    boundary:'Inclusion is context-specific; what helps one person may not be suitable for another.',
    related:'#/program-neurodiversity'
  },
  'Safeguarding':{
    intro:'Nonprofit storytelling should protect the dignity, privacy and agency of the people whose experiences are shared. A powerful story is not an excuse to publish personal information without appropriate consent and context.',
    heading:'Consent is part of responsible storytelling',
    points:['Explain where and how a story or image may be used.','Avoid unnecessary identifying or sensitive details.','Check that captions and context are accurate.','Make it possible to revisit consent where appropriate.'],
    boundary:'Consent and safeguarding requirements can vary by age, capacity, context and applicable law; organizational policy should guide publication decisions.',
    related:'#/privacy'
  },
  'Partnerships':{
    intro:'A strong partnership should be clear about purpose, responsibilities, decision-making, resources, safeguarding, data handling and how each organization will describe the relationship publicly.',
    heading:'Building partnerships with clear expectations',
    points:['Define the shared objective and scope.','Agree responsibilities and decision rights.','Document financial or in-kind commitments.','Set expectations for safeguarding, data and public communications.'],
    boundary:'Prospective partnerships should not be represented as confirmed until the relevant parties have formally agreed to them.',
    related:'#/partners'
  },
  'Events':{
    intro:'Community events work better when participants know what will happen, who is responsible, how to register, what support is available and how safeguarding concerns will be handled.',
    heading:'Preparing events people can trust',
    points:['Publish only confirmed dates, venues and facilitators.','Explain who the event is for and what to expect.','Plan registration, accessibility and safeguarding arrangements.','Provide clear contact and escalation information.'],
    boundary:'Event promotion should not imply confirmed logistics or capacity before organizers have approved them.',
    related:'#/events'
  },
  'Transparency':{
    intro:'Transparent reporting is more useful when it shows what was done, who was reached, what changed, what remains uncertain and how resources were stewarded. Large numbers without context can mislead rather than inform.',
    heading:'Reporting evidence without overstating impact',
    points:['Define what each metric actually measures.','Separate reach from outcomes.','Explain important limitations or missing data.','Connect financial reporting to approved organizational processes.'],
    boundary:'Impact and financial figures should be published only when they have been verified through the Foundation’s reporting and governance process.',
    related:'#/reports'
  }
};

function ewBlogDetailRouteFor(index){return `#/article-${EWBlogDetailSlugs[index]||`topic-${index+1}`}`;}

if(typeof EWBlog2Items!=='undefined') EWBlog2Items.forEach((x,i)=>{x.href=ewBlogDetailRouteFor(i);});
if(typeof EWBlog1Topics!=='undefined') EWBlog1Topics.forEach((x,i)=>{x.href=ewBlogDetailRouteFor(i);});

function ewBlogDetailData(index){
  const item=(typeof EWBlog2Items!=='undefined'&&EWBlog2Items[index])||EWBlog1Topics[index];
  const extra=EWBlogDetailExtras[item.cat]||EWBlogDetailExtras.Foundation;
  const second=EWBlog2Items[(index+1)%EWBlog2Items.length];
  const third=EWBlog2Items[(index+2)%EWBlog2Items.length];
  return {...item,...extra,second,third,index};
}

function ewBlogDetailSidebar(d){
  const cats=[...new Set(EWBlog2Items.map(x=>x.cat))];
  return `<aside class="blogd-sidebar">
    <div class="blogd-side-card"><label class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-navy">Search the library</label><div class="mt-3 flex items-center rounded-full bg-white px-4 shadow-sm"><input onkeydown="if(event.key==='Enter'){location.hash='#/blog';}" class="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none" placeholder="Search topics"><span class="text-slate-400">${icon('search','w-4 h-4')}</span></div></div>
    <div class="blogd-side-card"><h3 class="blogd-side-title">Categories</h3><div class="mt-3 grid">${cats.slice(0,7).map(c=>`<a href="#/blog" class="blogd-cat"><span class="inline-flex items-center gap-2">${icon('folder-open','w-3.5 h-3.5 text-brand-navy')}${c}</span><span>${EWBlog2Items.filter(x=>x.cat===c).length}</span></a>`).join('')}</div></div>
    <div class="blogd-side-card"><h3 class="blogd-side-title">Planned updates</h3><div class="mt-2">${[d.second,d.third,EWBlog2Items[(d.index+3)%EWBlog2Items.length]].map(x=>`<a href="${x.href}" class="blogd-recent"><img src="${x.img}" alt="${x.title}"><span><span class="line-clamp-2 text-xs font-extrabold leading-5 text-brand-deep">${x.title}</span><span class="mt-1 block text-[9px] font-extrabold uppercase tracking-[.12em] text-slate-400">${x.cat}</span></span></a>`).join('')}</div></div>
    <div class="blogd-side-card"><h3 class="blogd-side-title">Popular themes</h3><div class="mt-3 flex flex-wrap gap-2">${['Inclusion','Caregiving','Safeguarding','Volunteering','Healthy ageing'].map(x=>`<a href="#/blog" class="blogd-tag">${x}</a>`).join('')}</div></div>
    <div class="blogd-support overflow-hidden rounded-[1.8rem] bg-brand-deep text-white"><img src="${photos.child}" class="h-48 w-full object-cover opacity-75" alt="Support Eagle's Wings programs"><div class="p-6"><div class="eyebrow text-brand-orange">Support the mission</div><h3 class="mt-3 font-display text-3xl leading-tight">Help practical guidance and programs grow responsibly.</h3><p class="mt-3 text-sm leading-6 text-white/65">Explore the Foundation’s giving options and current program areas.</p><a href="#/donate" class="mt-5 inline-flex rounded-full bg-brand-orange px-5 py-3 text-xs font-extrabold text-white">Explore giving</a></div></div>
  </aside>`;
}

function ewBlogDetailPage(index){
  const d=ewBlogDetailData(index);
  const inline1=index%2?photos.family:photos.learning;
  const inline2=index%3?photos.people:photos.care;
  return `<section class="blogd-hero relative isolate overflow-hidden text-white"><img src="${photos.people}" class="absolute inset-0 h-full w-full object-cover grayscale" alt="News and stories"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.76),rgba(0,31,61,.5))]"></div><div class="relative z-10 mx-auto flex min-h-[360px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Draft resource preview</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">Article Details</h1><p class="mt-4 text-sm text-white/60"><a href="#/home" class="hover:text-white">Home</a> · <a href="#/blog" class="hover:text-white">News & Stories</a> · ${d.cat}</p></div></div></section>

  <section class="blogd-paper py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="blogd-layout">
    <article class="min-w-0">
      <img src="${d.img}" class="blogd-feature w-full rounded-[1.8rem] object-cover" alt="${d.title} — illustrative editorial image">
      <div class="mt-5 flex flex-wrap items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400"><span class="inline-flex items-center gap-1.5 text-brand-navy">${icon(d.icon||'newspaper','w-3.5 h-3.5')}${d.cat}</span><span class="h-1 w-1 rounded-full bg-slate-300"></span><span>Draft · Editorial review pending</span></div>
      <h2 class="mt-4 font-display text-4xl leading-tight text-brand-deep sm:text-5xl">${d.title}</h2>
      <p class="mt-6 text-base leading-8 text-slate-600">${d.intro}</p>
      <p class="mt-5 text-base leading-8 text-slate-600">${d.excerpt}</p>

      <blockquote class="blogd-quote mt-8"><span class="text-brand-navy">${icon('quote','h-10 w-10')}</span><p>Useful nonprofit content should help people understand a topic without overstating evidence, replacing professional advice or using personal stories without appropriate consent.</p><span class="mt-4 block text-xs font-extrabold uppercase tracking-[.16em] text-brand-navy">Eagle’s Wings editorial principle</span></blockquote>

      <h3 class="mt-10 font-display text-3xl text-brand-deep">${d.heading}</h3>
      <p class="mt-4 text-base leading-8 text-slate-600">A practical resource should move beyond awareness and give readers clear next steps they can discuss, adapt and use responsibly.</p>
      <div class="mt-6 grid gap-5 sm:grid-cols-2"><img src="${inline1}" class="h-72 w-full rounded-[1.5rem] object-cover" alt="Illustrative community support image"><img src="${inline2}" class="h-72 w-full rounded-[1.5rem] object-cover" alt="Illustrative program image"></div>
      <div class="mt-7 rounded-[1.7rem] bg-brand-mist p-6"><h4 class="font-display text-2xl text-brand-deep">Practical points</h4><div class="mt-4 grid gap-3">${d.points.map(x=>`<div class="flex gap-3 text-sm leading-6 text-slate-600"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-brand-navy shadow-sm">${icon('check','w-3.5 h-3.5')}</span><span>${x}</span></div>`).join('')}</div></div>

      <h3 class="mt-10 font-display text-3xl text-brand-deep">Important boundary</h3><p class="mt-4 text-base leading-8 text-slate-600">${d.boundary}</p>
      <div class="mt-7 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-5"><div class="flex flex-wrap gap-2"><span class="text-xs font-extrabold uppercase tracking-[.13em] text-slate-400">Tags</span><span class="blogd-tag">${d.cat}</span><span class="blogd-tag">Guidance</span><span class="blogd-tag">Eagle’s Wings</span></div><div class="flex items-center gap-2"><span class="text-xs font-extrabold uppercase tracking-[.13em] text-slate-400">Explore</span><a href="${d.related}" class="inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy">Related program ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div></div>

      <div class="blogd-editor mt-8"><span class="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-brand-deep text-white">${icon('pen-line','w-6 h-6')}</span><div><div class="text-[10px] font-extrabold uppercase tracking-[.16em] text-brand-orange">Editorial status</div><h4 class="mt-1 font-display text-2xl text-brand-deep">Prepared for Eagle’s Wings editorial review</h4><p class="mt-2 text-sm leading-6 text-slate-600">This page is a draft educational resource for the website prototype. A named author, publication date and formal references should be added only when the Foundation approves the final article.</p></div></div>

      <section class="mt-12"><div class="eyebrow text-brand-orange">Community feedback</div><h3 class="mt-3 font-display text-4xl text-brand-deep">Suggest a correction or question</h3><p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500">Unlike the inspiration mockup, the prototype does not display fabricated public comments. This form can later send moderated feedback to the Foundation.</p><form class="mt-6 grid gap-4" onsubmit="event.preventDefault();alert('Feedback form backend will be connected later.')"><div class="grid gap-4 sm:grid-cols-2"><input required class="rounded-2xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand-navy" placeholder="Your name"><input type="email" required class="rounded-2xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand-navy" placeholder="Email address"></div><textarea required class="min-h-36 rounded-2xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-brand-navy" placeholder="Question, correction or suggested improvement"></textarea><button class="w-fit rounded-full bg-brand-navy px-6 py-3 text-xs font-extrabold text-white">Send feedback</button></form></section>
    </article>
    ${ewBlogDetailSidebar(d)}
  </div></div></section>

  <section class="blogd-standards py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Publication checklist','Before a draft becomes a published article.','The reference mockup used company logos here; Eagle’s Wings uses the space for a more useful trust signal.','center')}<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${[['search-check','Sources checked'],['shield-check','Consent reviewed'],['stethoscope','Boundaries clear'],['scan-text','Plain language'],['badge-check','Approved to publish']].map(([i,t])=>`<div class="rounded-[1.5rem] bg-white p-5 text-center shadow-sm"><span class="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-4 h-4')}</span><h4 class="mt-3 text-sm font-extrabold text-brand-deep">${t}</h4></div>`).join('')}</div></div></section>`;
}

EWBlogDetailSlugs.forEach((slug,index)=>{
  const routeId=`article-${slug}`;
  routeMeta[routeId]='Article Details';
  EWPages[routeId]=()=>ewBlogDetailPage(index);
});

if(typeof render==='function'){
  const r=route();
  if(r==='blog'||r==='blog-grid'||EWBlogDetailSlugs.some(s=>r===`article-${s}`)){
    render();
    if(r==='blog'&&typeof ewBlog2Render==='function') setTimeout(ewBlog2Render,0);
    if(r==='blog-grid'&&typeof ewBlog1Render==='function') setTimeout(ewBlog1Render,0);
  }
}
