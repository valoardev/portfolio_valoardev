// Somente dados públicos. Nenhuma credencial é enviada ao navegador.
(() => {
 const user = 'valoardev';
 function updatedLabel(value) {
  const date = new Date(value), now = new Date();
  if (!Number.isFinite(date.getTime())) return 'Data indisponível';
  const days = Math.max(0, Math.floor((now-date)/86400000));
  if (days === 0) return 'Atualizado hoje';
  if (days === 1) return 'Atualizado há 1 dia';
  if (days < 7) return `Atualizado há ${days} dias`;
  return 'Atualizado em ' + date.toLocaleDateString('pt-BR', {day:'numeric',month:'short', ...(date.getFullYear() !== now.getFullYear() ? {year:'numeric'} : {})});
 }

 const total = document.querySelector('#github-total'), grid = document.querySelector('#contribution-grid'), repos = document.querySelector('#github-repos');
 if (!total || !repos) return;
 async function json(url) { const response = await fetch(url, {signal: AbortSignal.timeout(12000)}); if (!response.ok) throw new Error('Serviço indisponível'); return response.json(); }
 json(`https://api.github.com/users/${user}/repos?sort=updated&direction=desc&per_page=30&type=owner`).then(items => {
  if (!Array.isArray(items)) throw new Error('Resposta inválida');
  repos.replaceChildren();
  if (!items.length) repos.textContent = 'Nenhum repositório público encontrado.';
  const more = document.querySelector('#github-more'); more.hidden = items.length < 3; more.onclick = () => repos.scrollBy({top:180,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  items.forEach(item => {
   const row = document.createElement('div'), link = document.createElement('a'), date = document.createElement('small');
   const url = new URL(item.html_url); if(url.origin !== 'https://github.com') return;
   link.href = url.href; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = item.name;
   row.className = 'github-repo'; row.setAttribute('role','listitem'); date.textContent = updatedLabel(item.updated_at); date.title = item.updated_at;
   row.append(link, date); repos.append(row);
  });
 }).catch(() => {repos.textContent = 'Não foi possível carregar os repositórios agora. Acesse o perfil acima.';});
 json(`https://api.github.com/users/${user}`).then(profile => {
  const avatar = document.querySelector('#github-avatar'); const url = new URL(profile.avatar_url);
  if (url.protocol !== 'https:' || url.hostname !== 'avatars.githubusercontent.com') return;
  avatar.onload = () => {avatar.hidden=false;}; avatar.src=url.href;
 }).catch(() => {});
 // Calendário público fornecido por github-contributions-api (serviço independente).
 json(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`).then(data => {
  if (!Array.isArray(data.contributions) || !data.contributions.length) throw new Error('Calendário indisponível');
  const days = data.contributions.filter(d => /^\d{4}-\d{2}-\d{2}$/.test(d.date) && Number.isFinite(d.count) && d.count >= 0).sort((a,b)=>a.date.localeCompare(b.date));
  if (!days.length) throw new Error('Calendário inválido');
  total.textContent = `${days.reduce((sum,day)=>sum+day.count,0).toLocaleString('pt-BR')} contribuições nos últimos 12 meses`;
  const offset = new Date(days[0].date+'T12:00:00Z').getUTCDay();
  for(let i=0;i<offset;i++){const blank=document.createElement('span');blank.className='contribution-blank';grid.append(blank);}
  days.forEach(day => {const cell=document.createElement('span');cell.className=`contribution-cell level-${Math.max(0,Math.min(4,Number(day.level)||0))}`;cell.title=`${day.date}: ${day.count} contribuições`;cell.setAttribute('aria-label',cell.title);grid.append(cell);});
 }).catch(() => {total.textContent='Calendário temporariamente indisponível. Veja suas contribuições no perfil acima.';});
})();
