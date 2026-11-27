// Clones fora da área visível permitem reciclar a faixa sem cruzar ícones pela tela.
(() => {
 const root=document.querySelector('#technology-groups'); if(!root)return;
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 (window.portfolioTecnologias||[]).forEach(group=>{
  const n=group.itens.length;if(!n)return;let start=0,busy=false;
  const section=document.createElement('section'),heading=document.createElement('h3'),track=document.createElement('div'),controls=document.createElement('div'),status=document.createElement('span');
  section.className='technology-group';heading.textContent=group.titulo;track.className='technology-orbit';controls.className='technology-controls';status.className='visually-hidden';status.setAttribute('aria-live','polite');
  function paint(){track.replaceChildren();for(let slot=-3;slot<8;slot++){
   const [name,icon]=group.itens[((start+slot-1)%n+n)%n];const card=document.createElement('div'),img=document.createElement('img'),label=document.createElement('span');
   card.className='orbit-tech';card.dataset.slot=slot;card.style.setProperty('--slot',slot);card.style.transition='none';card.classList.toggle('orbit-focus',slot>=1&&slot<=3);card.setAttribute('aria-hidden',String(slot<0||slot>4));
   img.src=`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${icon}/${icon}-original.svg`;img.alt='';img.width=40;img.height=40;img.draggable=false;img.onerror=()=>img.hidden=true;label.textContent=name;card.append(img,label);track.append(card);
  }status.textContent=Array.from({length:3},(_,i)=>group.itens[(start+i)%n][0]).join(' · ');}
  function move(delta){if(busy)return;busy=true;const cards=[...track.children];
   if(reduce.matches){start=(start+delta+n)%n;paint();busy=false;return;}
   // Primeiro materializa os clones; depois move todos na mesma direção.
   track.getBoundingClientRect();
   cards.forEach(card=>{card.style.transition='left 650ms cubic-bezier(.22,.61,.36,1), opacity 650ms ease, transform 650ms ease';const slot=Number(card.dataset.slot)-delta;card.style.setProperty('--slot',slot);card.classList.toggle('orbit-focus',slot>=1&&slot<=3);});
   setTimeout(()=>{start=(start+delta+n)%n;paint();busy=false;},670);
  }
  for(const [label,delta,symbol] of [['Anteriores',-3,'‹'],['Próximas',3,'›']]){const button=document.createElement('button');button.type='button';button.className='filter';button.textContent=symbol;button.setAttribute('aria-label',`${label}: ${group.titulo}`);button.onclick=()=>move(delta);controls.append(button);}
  let x=null;track.addEventListener('pointerdown',e=>{x=e.clientX;});track.addEventListener('pointerup',e=>{if(x!==null&&Math.abs(e.clientX-x)>35)move(e.clientX<x?3:-3);x=null;});track.addEventListener('pointercancel',()=>x=null);
  controls.append(status);section.append(heading,track,controls);root.append(section);paint();
 });
})();
