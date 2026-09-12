/* Official Eagle's Wings Foundation Tanzania logo.
   Extracted from the Foundation-supplied full-colour logo PDF and used globally
   in the shared header/footer brand component. */

window.EWOfficialLogo='./assets/eagles-wings-foundation-logo.png';

brand=function(){
  return `<a href="#/home" class="group inline-flex shrink-0 items-center rounded-2xl bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-slate-100/80 transition hover:-translate-y-0.5 hover:shadow-card" aria-label="Eagle's Wings Foundation Tanzania home">
    <img src="${window.EWOfficialLogo}" alt="Eagle's Wings Foundation Tanzania" class="h-14 w-auto object-contain sm:h-16" width="101" height="81" decoding="async">
  </a>`;
};

if(typeof render==='function') render();
