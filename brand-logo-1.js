/* Official Eagle's Wings Foundation Tanzania logo.
   Extracted from the Foundation-supplied full-colour logo PDF and used globally
   in the shared header/footer brand component and homepage hero. */

window.EWOfficialLogo='./assets/eagles-wings-foundation-logo.png';

brand=function(){
  return `<a href="#/home" class="group inline-flex shrink-0 items-center rounded-2xl bg-white px-3 py-1.5 transition hover:-translate-y-0.5" aria-label="Eagle's Wings Foundation Tanzania home">
    <img src="${window.EWOfficialLogo}" alt="Eagle's Wings Foundation Tanzania" class="h-[72px] w-auto max-w-[118px] object-contain sm:h-[78px] sm:max-w-[128px]" width="128" height="102" decoding="sync" fetchpriority="high">
  </a>`;
};

function ensureOfficialHomeLogo(){
  if(typeof route!=='function' || route()!=='home') return;
  const hero=document.querySelector('.h9-hero .max-w-3xl');
  if(!hero || hero.querySelector('[data-ew-home-logo]')) return;
  const wrap=document.createElement('div');
  wrap.setAttribute('data-ew-home-logo','true');
  wrap.className='mb-6 inline-flex items-center rounded-[1.6rem] bg-white px-4 py-3 shadow-xl shadow-black/10';
  wrap.innerHTML=`<img src="${window.EWOfficialLogo}" alt="Eagle's Wings Foundation Tanzania" class="h-24 w-auto object-contain sm:h-28" width="180" height="144" decoding="sync" fetchpriority="high">`;
  hero.prepend(wrap);
}

if(typeof render==='function') render();
ensureOfficialHomeLogo();
window.addEventListener('hashchange',()=>requestAnimationFrame(ensureOfficialHomeLogo));
