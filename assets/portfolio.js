const menu = document.getElementById('nav-links');
const toggle = document.getElementById('hamburger');
function closeMenu(){menu.classList.remove('open');toggle.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';menu.classList.toggle('open',open);toggle.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){closeMenu();toggle.focus();}});
window.matchMedia('(min-width:761px)').addEventListener('change',closeMenu);
const box=document.getElementById('lightbox'),close=document.getElementById('lb-close');let previous;
function closeBox(){box.classList.remove('open');document.body.style.overflow='';previous?.focus();}
document.querySelectorAll('[data-lightbox]').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.setAttribute('aria-label','Enlarge '+el.dataset.caption);function open(){previous=el;document.getElementById('lb-img').src=el.dataset.lightbox;document.getElementById('lb-img').alt=el.dataset.caption;document.getElementById('lb-caption').textContent=el.dataset.caption;box.classList.add('open');document.body.style.overflow='hidden';close.focus();}el.addEventListener('click',open);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});
close.addEventListener('click',closeBox);box.addEventListener('click',e=>{if(e.target===box)closeBox();});document.addEventListener('keydown',e=>{if(box.classList.contains('open')){if(e.key==='Escape')closeBox();if(e.key==='Tab'){e.preventDefault();close.focus();}}});
