/* Donate page v2 — adapted from the latest Donate Now mockup supplied by the user.
   The visual composition borrows the large-image + overlapping form + sidebar pattern.
   Content remains factual for Eagle's Wings Foundation Tanzania. No donor names, donation totals,
   live payment claims, partner logos or fundraising success metrics are fabricated. */

routeMeta.donate='Donate';

let ewDonateType='once';
let ewDonateAmount='50000';
let ewDonateMethod='mobile-money';

function ewDonateFmt(value){
  const n=Number(String(value||'').replace(/[^0-9]/g,''));
  return Number.isFinite(n)&&n>0 ? new Intl.NumberFormat('en-US').format(n) : '—';
}

window.ewDonateSelectType=function(type){
  ewDonateType=type;
  document.querySelectorAll('[data-ew-donate-type]').forEach(btn=>{
    const on=btn.dataset.ewDonateType===type;
    btn.className=`donate1-type flex-1 rounded-full px-4 py-3 text-xs font-extrabold transition ${on?'bg-white text-brand-deep shadow-sm':'text-white/55 hover:text-white'}`;
  });
  const label=document.getElementById('donate1Frequency');
  if(label) label.textContent=type==='monthly'?'Monthly support':'One-time support';
};

window.ewDonateSelectAmount=function(value,btn){
  ewDonateAmount=String(value).replace(/[^0-9]/g,'');
  document.querySelectorAll('[data-ew-donate-amount]').forEach(x=>{
    x.className='donate1-amount rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-extrabold text-brand-deep transition hover:border-brand-orange/40';
  });
  if(btn) btn.className='donate1-amount rounded-xl border border-brand-navy bg-brand-navy px-3 py-3 text-xs font-extrabold text-white';
  const custom=document.getElementById('donate1Custom');
  if(custom) custom.value='';
  ewDonateUpdateSummary();
};

window.ewDonateCustom=function(input){
  const v=String(input.value||'').replace(/[^0-9]/g,'');
  ewDonateAmount=v;
  document.querySelectorAll('[data-ew-donate-amount]').forEach(x=>{
    x.className='donate1-amount rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-extrabold text-brand-deep transition hover:border-brand-orange/40';
  });
  ewDonateUpdateSummary();
};

window.ewDonateSelectMethod=function(method){
  ewDonateMethod=method;
  document.querySelectorAll('[data-ew-donate-method]').forEach(btn=>{
    const on=btn.dataset.ewDonateMethod===method;
    btn.className=`donate1-method flex items-center gap-3 rounded-xl border p-3 text-left transition ${on?'border-brand-orange bg-orange-50':'border-slate-200 bg-white hover:border-brand-navy/20'}`;
  });
};

window.ewDonateUpdateSummary=function(){
  const amount=document.getElementById('donate1SummaryAmount');
  if(amount) amount.textContent=`TZS ${ewDonateFmt(ewDonateAmount)}`;
};

window.ewDonatePreviewSubmit=function(e){
  e.preventDefault();
  alert('Online donations are not active yet. This page is a frontend preview until Eagle’s Wings completes merchant onboarding and approves payment providers.');
};

EWPages.donate=()=>`
<section class="donate1-hero relative isolate overflow-hidden bg-brand-deep text-white">
  <div class="absolute inset-0"><img src="${photos.people}" class="h-full w-full object-cover grayscale" alt="Community support"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,61,.97),rgba(0,31,61,.72),rgba(0,31,61,.38))]"></div></div>
  <div class="donate1-swash absolute -left-24 bottom-0 h-32 w-80 bg-brand-orange"></div>
  <div class="relative mx-auto flex min-h-[390px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"><div><div class="eyebrow text-brand-orange">Give with purpose</div><h1 class="mt-4 font-display text-6xl sm:text-7xl">Donate Now</h1><p class="mt-4 max-w-2xl text-sm leading-7 text-white/65">Support practical education, inclusion, healthy ageing, life-skills learning and caregiver development through approved giving channels.</p><div class="mt-4 flex items-center gap-2 text-xs font-semibold text-white/50"><a href="#/home" class="hover:text-white">Home</a><span>•</span><span>Donate</span></div></div></div>
</section>

<section class="donate1-main py-20 lg:py-24">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="donate1-image img-zoom overflow-hidden rounded-[2.6rem] shadow-soft"><img src="${photos.family}" class="h-[390px] w-full object-cover sm:h-[520px]" alt="Family and community support"></div>

    <div class="donate1-overlap mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_290px] lg:items-start">
      <form onsubmit="ewDonatePreviewSubmit(event)" class="donate1-form rounded-[2rem] border border-slate-100 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"><div><div class="eyebrow text-brand-orange">Your support</div><h2 class="mt-2 font-display text-4xl text-brand-deep">Choose your donation</h2><p class="mt-3 max-w-xl text-sm leading-6 text-slate-500">Select a giving preference below. No payment is processed by this prototype.</p></div><span class="rounded-full bg-brand-mist px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-navy">TZS</span></div>

        <div class="mt-7 grid grid-cols-2 gap-2 rounded-full bg-brand-deep p-1.5" role="tablist" aria-label="Donation frequency">
          <button type="button" data-ew-donate-type="once" onclick="ewDonateSelectType('once')" class="donate1-type flex-1 rounded-full bg-white px-4 py-3 text-xs font-extrabold text-brand-deep shadow-sm">One-time</button>
          <button type="button" data-ew-donate-type="monthly" onclick="ewDonateSelectType('monthly')" class="donate1-type flex-1 rounded-full px-4 py-3 text-xs font-extrabold text-white/55 hover:text-white">Monthly</button>
        </div>

        <div class="mt-8"><div class="flex items-center justify-between"><h3 class="font-display text-2xl text-brand-deep">Donation amount</h3><span id="donate1Frequency" class="text-[10px] font-extrabold uppercase tracking-[.13em] text-slate-400">One-time support</span></div>
          <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">${['25000','50000','100000','250000'].map((x,i)=>`<button type="button" data-ew-donate-amount="${x}" onclick="ewDonateSelectAmount('${x}',this)" class="donate1-amount rounded-xl border ${i===1?'border-brand-navy bg-brand-navy text-white':'border-slate-200 bg-white text-brand-deep hover:border-brand-orange/40'} px-3 py-3 text-xs font-extrabold transition">${ewDonateFmt(x)}</button>`).join('')}</div>
          <label class="mt-4 block text-xs font-extrabold uppercase tracking-[.12em] text-slate-400">Other amount<input id="donate1Custom" oninput="ewDonateCustom(this)" inputmode="numeric" class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal text-brand-deep outline-none focus:border-brand-navy" placeholder="Enter custom amount"></label>
        </div>

        <div class="mt-8"><h3 class="font-display text-2xl text-brand-deep">Planned payment method</h3><p class="mt-2 text-xs leading-5 text-slate-400">Shown for interface design only until merchant onboarding is complete.</p>
          <div class="mt-4 grid gap-3 sm:grid-cols-3">${[
            ['mobile-money','smartphone','Mobile money','Tanzanian mobile-money checkout'],
            ['card','credit-card','Card payment','Secure card checkout when enabled'],
            ['bank','landmark','Bank transfer','Approved bank details when published']
          ].map(([id,i,t,d],x)=>`<button type="button" data-ew-donate-method="${id}" onclick="ewDonateSelectMethod('${id}')" class="donate1-method flex items-center gap-3 rounded-xl border ${x===0?'border-brand-orange bg-orange-50':'border-slate-200 bg-white hover:border-brand-navy/20'} p-3 text-left transition"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-brand-navy shadow-sm">${icon(i,'w-4 h-4')}</span><span><span class="block text-xs font-extrabold text-brand-deep">${t}</span><span class="mt-1 block text-[10px] leading-4 text-slate-400">${d}</span></span></button>`).join('')}</div>
        </div>

        <div class="mt-8"><h3 class="font-display text-2xl text-brand-deep">Personal information</h3><div class="mt-4 grid gap-4 sm:grid-cols-2"><label class="text-xs font-extrabold uppercase tracking-[.1em] text-slate-400">First name<input class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-deep outline-none focus:border-brand-navy"></label><label class="text-xs font-extrabold uppercase tracking-[.1em] text-slate-400">Last name<input class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-deep outline-none focus:border-brand-navy"></label><label class="text-xs font-extrabold uppercase tracking-[.1em] text-slate-400 sm:col-span-2">Email address<input type="email" class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-deep outline-none focus:border-brand-navy" placeholder="For future receipts"></label><label class="text-xs font-extrabold uppercase tracking-[.1em] text-slate-400 sm:col-span-2">Message or dedication<textarea class="mt-2 min-h-28 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-brand-deep outline-none focus:border-brand-navy" placeholder="Optional"></textarea></label></div></div>

        <div class="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between"><button class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_34px_rgba(246,147,30,.22)]">Continue when giving is active ${icon('lock-keyhole','w-4 h-4')}</button><div class="text-right"><div class="text-[10px] font-extrabold uppercase tracking-[.14em] text-slate-400">Donation preview</div><div id="donate1SummaryAmount" class="mt-1 font-display text-2xl text-brand-deep">TZS 50,000</div></div></div>
        <p class="mt-4 rounded-xl bg-brand-mist p-3 text-center text-[10px] leading-5 text-slate-500">No payment credentials, card numbers or mobile-money PINs are collected by this frontend prototype.</p>
      </form>

      <aside class="donate1-sidebar space-y-5 lg:sticky lg:top-28">
        <div class="rounded-[1.8rem] bg-[#e8f6f2] p-6 text-center shadow-card"><span class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-brand-navy shadow-sm">${icon('hand-coins','w-6 h-6')}</span><h3 class="mt-5 font-display text-3xl text-brand-deep">Become a supporter</h3><p class="mt-3 text-sm leading-6 text-slate-600">Support can be financial, recurring, professional, voluntary or in-kind.</p><a href="#/causes" class="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-xs font-extrabold text-white">Choose a program ${icon('arrow-up-right','w-3.5 h-3.5')}</a></div>

        <div class="rounded-[1.8rem] bg-brand-mist p-6 shadow-card"><div class="eyebrow text-brand-orange">Direct your support</div><div class="mt-5 grid gap-3">${[
          ['brain','Neuro-diversity awareness'],['heart-pulse','Healthy ageing'],['book-heart','Family & therapy guidance'],['sparkles','Life skills'],['users-round','Caregiver development']
        ].map(([i,t])=>`<a href="#/causes" class="flex items-center gap-3 rounded-xl bg-white p-3"><span class="grid h-9 w-9 place-items-center rounded-lg bg-orange-50 text-brand-orange">${icon(i,'w-4 h-4')}</span><span class="text-xs font-extrabold text-brand-deep">${t}</span></a>`).join('')}</div></div>

        <div class="rounded-[1.8rem] bg-brand-deep p-6 text-white shadow-card"><span class="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-brand-orange">${icon('repeat-2','w-5 h-5')}</span><div class="mt-5 text-[10px] font-extrabold uppercase tracking-[.14em] text-brand-orange">Monthly giving</div><h3 class="mt-2 font-display text-3xl">Build dependable support.</h3><p class="mt-3 text-sm leading-6 text-white/60">Recurring giving will be activated only after secure payment and reporting workflows are approved.</p></div>
      </aside>
    </div>
  </div>
</section>

<section class="donate1-trust border-y border-brand-navy/10 bg-[#fffaf2] py-20"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">${sectionHead('Giving with confidence','Clear pathways, responsible handling and transparent reporting.','The inspiration uses donor lists and company logos. This version replaces them with verifiable stewardship commitments and partnership pathways.','center')}
  <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${[
    ['shield-check','Approved channels only','Live payments will use Foundation-approved merchant and banking arrangements.'],
    ['receipt-text','Receipts & records','Donation acknowledgements and records can be added once the backend is active.'],
    ['chart-no-axes-combined','Transparent reporting','Annual reports and verified program evidence are prepared for public accountability.'],
    ['lock-keyhole','Privacy by design','Only necessary donor information should be collected and protected.']
  ].map(([i,t,d])=>`<div class="rounded-[1.6rem] border border-brand-navy/10 bg-white p-6 text-center shadow-sm"><span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-mist text-brand-navy">${icon(i,'w-5 h-5')}</span><h3 class="mt-5 font-display text-2xl text-brand-deep">${t}</h3><p class="mt-3 text-sm leading-6 text-slate-500">${d}</p></div>`).join('')}</div>
  <div class="mt-9 text-center">${button('View transparency resources','#/reports','dark')}</div>
</div></section>

<section class="py-20"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="rounded-[2.5rem] bg-brand-deep p-8 text-center text-white sm:p-12"><div class="eyebrow text-brand-orange">Other ways to help</div><h2 class="mt-4 font-display text-4xl sm:text-5xl">Giving is more than a payment form.</h2><p class="mx-auto mt-5 max-w-2xl leading-7 text-white/60">You can also contribute professional expertise, useful goods, volunteer time, partnerships or sponsorship.</p><div class="mt-8 flex flex-wrap justify-center gap-3">${button('Get involved','#/get-involved')}${button('Explore support areas','#/causes','outline')}</div></div></div></section>`;

if(typeof render==='function'&&route()==='donate'){render();setTimeout(()=>{ewDonateUpdateSummary();window.EWWire?.();},0);}
