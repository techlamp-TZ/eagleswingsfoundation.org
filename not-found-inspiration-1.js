/* 404 page inspiration 1
   Adapted from the supplied oversized 404/donation mockup.
   We keep the bold central composition and return-home action while using an original
   Eagle's Wings visual language rather than copying the reference illustration. */

routeMeta['404']='Page Not Found';

function ewNotFoundPage(){
  return `<section class="nf1-shell relative overflow-hidden bg-white">
    <div class="nf1-glow nf1-glow-a"></div><div class="nf1-glow nf1-glow-b"></div>
    <div class="mx-auto flex min-h-[690px] max-w-7xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div class="relative w-full max-w-5xl text-center">
        <div class="eyebrow text-brand-orange">Page not found</div>
        <h1 class="mt-4 font-display text-5xl text-brand-deep sm:text-6xl">Oops — this page flew off course.</h1>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">The page you tried to open may have moved, been renamed, or is not available yet. You can return home or continue exploring the Foundation.</p>

        <div class="nf1-art relative mx-auto mt-10 h-[360px] max-w-4xl sm:h-[410px]">
          <div class="nf1-number nf1-four-left">4</div>
          <div class="nf1-number nf1-four-right">4</div>
          <div class="nf1-center-mark" aria-hidden="true">
            <div class="nf1-heart">${icon('heart-handshake','w-14 h-14')}</div>
            <div class="nf1-wing nf1-wing-left"></div>
            <div class="nf1-wing nf1-wing-right"></div>
            <div class="nf1-route-dot nf1-route-dot-a"></div>
            <div class="nf1-route-dot nf1-route-dot-b"></div>
            <div class="nf1-route-dot nf1-route-dot-c"></div>
          </div>
          <div class="nf1-label">404</div>
          <div class="nf1-flight-line nf1-flight-a"></div><div class="nf1-flight-line nf1-flight-b"></div>
        </div>

        <div class="-mt-3 flex flex-wrap justify-center gap-3">${button('Back to home','#/home','dark')}${button('Explore programs','#/programs','outline')}${button('Contact us','#/contact','outline')}</div>
        <div class="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          <a href="#/get-involved" class="nf1-shortcut">${icon('hand-heart','w-5 h-5')}<span><strong>Get involved</strong><small>Volunteer or partner</small></span></a>
          <a href="#/events" class="nf1-shortcut">${icon('calendar-days','w-5 h-5')}<span><strong>Events</strong><small>See planned gatherings</small></span></a>
          <a href="#/donate" class="nf1-shortcut">${icon('heart','w-5 h-5')}<span><strong>Support</strong><small>Ways to give</small></span></a>
        </div>
      </div>
    </div>
  </section>`;
}

EWPages['404']=ewNotFoundPage;

function ewRenderUnknownRoute(){
  const id=route();
  if(id==='home'||id==='404'||window.EWPages?.[id]) return false;
  document.title=`Page Not Found | Eagle's Wings Foundation Tanzania`;
  document.getElementById('app').innerHTML=header()+`<main class="route-enter">${ewNotFoundPage()}</main>`+footer()+`<a href="https://wa.me/255749044723" target="_blank" aria-label="Chat on WhatsApp" class="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl ring-4 ring-white transition hover:-translate-y-1">${icon('message-circle','w-6 h-6')}</a>`;
  document.getElementById('menuBtn')?.addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('hidden'));
  if(window.lucide) lucide.createIcons();
  window.scrollTo({top:0,behavior:'instant'});
  return true;
}

window.addEventListener('hashchange',()=>setTimeout(ewRenderUnknownRoute,0));
if(route()==='404'&&typeof render==='function') render();
else ewRenderUnknownRoute();
