const wireCurrentPage=()=>setTimeout(()=>window.EWWire?.(),0);
window.addEventListener('hashchange',wireCurrentPage);
window.addEventListener('DOMContentLoaded',wireCurrentPage);
wireCurrentPage();
