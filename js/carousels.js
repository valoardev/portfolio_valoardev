for (const [id,label] of [['project-grid','projetos'],['feed-list','publicações']]) {
 const rail=document.getElementById(id);if(!rail)continue;
 rail.tabIndex=0;rail.setAttribute('aria-label','Lista de '+label+'; navegue lateralmente');
 const nav=document.createElement('div');nav.className='rail-nav';
 const prev=document.createElement('button'),next=document.createElement('button');
 prev.textContent='‹';next.textContent='›';
 for(const [b,name,dir] of [[prev,'Anterior',-1],[next,'Próximo',1]]){b.type='button';b.className='filter';b.setAttribute('aria-label',name+' em '+label);b.onclick=()=>rail.scrollBy({left:dir*rail.clientWidth*.9,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});nav.append(b);}
 rail.before(nav);
 const update=()=>{prev.disabled=rail.scrollLeft<2;next.disabled=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-3;};
 rail.addEventListener('scroll',update,{passive:true});new ResizeObserver(update).observe(rail);
 document.querySelectorAll(id==='project-grid'?'[data-filter]':'[data-feed-filter]').forEach(b=>b.addEventListener('click',()=>{rail.scrollLeft=0;requestAnimationFrame(update);}));
 let start=null,moved=false;
 rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.target.closest('a,button,video'))return;start={x:e.clientX,left:rail.scrollLeft};moved=false;});
 window.addEventListener('pointermove',e=>{if(!start)return;const delta=e.clientX-start.x;if(Math.abs(delta)>5){moved=true;rail.scrollLeft=start.left-delta;}});
 window.addEventListener('pointerup',()=>{start=null;});
 rail.addEventListener('click',e=>{if(moved){e.preventDefault();moved=false;}},true);
 rail.addEventListener('dragstart',e=>e.preventDefault());update();
}
