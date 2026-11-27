// Componentes visuais: o conteúdo editável fica apenas em js/dados/.
const PortfolioUI = (() => {
  const base = location.pathname.includes('/html/') ? '../' : '';
  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function icon(name) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('icon'); svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS(svg.namespaceURI, 'use');
    use.setAttribute('href', `${base}img/icons.svg#${name}`); svg.append(use); return svg;
  }
  function mediaURL(src) {
    if (!src) return '';
    // Aceita arquivos locais e HTTPS; bloqueia protocolos executáveis.
    if (/^https:\/\//i.test(src)) return src;
    if (/^(?:[a-z]+:|\/\/|\/)/i.test(src)) return '';
    return base + src;
  }
  function bar(title) {
    const header = el('div', '', 'mac-bar'), dots = el('span', '', 'window-dots');
    dots.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 3; i++) dots.append(el('i'));
    const mark = el('span', '⌘', 'window-mark'); mark.setAttribute('aria-hidden', 'true');
    header.append(dots, el('span', title), mark); return header;
  }
  function placeholder(label, name = 'camera') {
    const slot = el('div', '', 'media-placeholder');
    slot.append(icon(name), el('span', label), el('small', 'Imagens em breve'));
    return slot;
  }
  function picture(item, fallback, expand = false) {
    const figure = el('figure', '', 'media-figure');
    if (expand && /portfolio-codigo/.test(item.src || '')) {
      figure.classList.add('code-window');
      figure.append(bar(item.src.includes('html') ? 'index.html' : 'render.js'));
    }
    const src = mediaURL(item.src);
    if (!src) { figure.append(placeholder(fallback)); return figure; }
    const img = el('img'); img.src = src; img.alt = item.alt || item.legenda || fallback;
    img.loading = 'lazy'; img.decoding = 'async';
    const target = expand ? el('a', '', 'media-expand') : figure;
    if (expand) { target.href = src; target.target = '_blank'; target.rel = 'noopener noreferrer'; target.setAttribute('aria-label', `Abrir imagem: ${img.alt}`); figure.append(target); }
    img.addEventListener('error', () => target.replaceWith(placeholder('Imagem indisponível')), { once: true });
    target.append(img);
    if (item.legenda) figure.append(el('figcaption', item.legenda));
    return figure;
  }
  function gallery(title, items = [], fallback, name) {
    const section = el('section', '', 'detail-section detail-gallery-section');
    const heading = el('h2'); heading.append(icon(name), document.createTextNode(title));
    section.append(heading);
    const grid = el('div', '', 'detail-gallery');
    if (items.length) items.forEach(item => grid.append(picture(item, fallback, true)));
    else grid.append(placeholder(fallback, name), placeholder('Detalhes e resultados', 'camera'));
    section.append(grid); return section;
  }
  function repositories(items = []) {
    const section = el('section', '', 'repository-panel');
    const heading = el('div', '', 'repository-heading'); heading.append(icon('github'), el('h2', 'Repositórios no GitHub'));
    section.append(heading);
    const links = el('div', '', 'repository-links');
    items.forEach(item => {
      let url; try { url = new URL(item.url); } catch { return; }
      if (url.protocol !== 'https:' || url.hostname !== 'github.com' || url.pathname.split('/').filter(Boolean).length < 2) return;
      const link = el('a', item.nome || 'Ver repositório', 'btn btn-outline-custom');
      link.href = url.href; link.target = '_blank'; link.rel = 'noopener noreferrer'; links.append(link);
    });
    if (!links.childElementCount) links.append(el('p', 'Nenhum repositório público disponível no momento.', 'repository-empty'));
    section.append(links); return section;
  }
  const grid = document.querySelector('#project-grid');
  if (grid) Object.entries(window.portfolioProjetos).forEach(([id, project], index) => {
    if (project.exibirNaGrade === false) return;
    const article = el('article', '', 'col-md-6 col-xl-4'); article.dataset.category = project.categoria; article.dataset.project = id;
    const card = el('div', '', 'project-card mac-window'); card.append(bar(project.arquivo || id));
    const cover = el('div', '', `project-cover cover-${index % 4}`);
    if (project.capa) cover.append(picture({src: project.capa, alt: project.titulo}, project.titulo));
    else { const caption = el('div'); caption.append(el('span', project.rotulo), el('p', project.chamada)); cover.append(icon(project.icone || 'code'), caption); }
    const body = el('div', '', 'project-body');
    const meta = el('div', '', 'project-meta'); meta.append(el('span', project.categoria === 'web' ? 'DESENVOLVIMENTO WEB' : project.categoria === 'ideacao' ? 'IDEAÇÃO' : project.categoria === 'programacao' ? 'PROGRAMAÇÃO' : 'AUTOMAÇÃO'), el('span', project.selo, 'status-tag badge rounded-pill'));
    const tags = el('div', '', 'tech-tags'); project.tecnologias.forEach(t => tags.append(el('span', t)));
    const link = el('a', 'Conhecer o projeto', 'project-link'); link.href = `html/projeto.html?id=${encodeURIComponent(id)}`; link.append(el('span', '+'));
    body.append(tags, el('h3', project.titulo), el('p', project.resumo), meta); if(project.grupo) body.append(team(project.grupo)); body.append(link); card.append(cover, body); article.append(card); grid.append(article);
  });
  const feed = document.querySelector('#feed-list');
  if (feed) (window.portfolioFeed || []).forEach(post => {
    const article = el('article', '', 'feed-post mac-window'); article.dataset.feedCategory = post.categoria;
    article.append(bar(`registros / ${post.id}`));
    const gallery = el('div', '', 'feed-gallery');
    if (post.imagens?.length) post.imagens.forEach(item => gallery.append(picture(item, post.titulo, true)));
    else gallery.append(placeholder('Registros do evento'), placeholder('Equipe & bastidores', 'user'));
    if (post.imagens?.length > 1) {
      const figures = Array.from(gallery.children);
      let current = 0;
      const controls = el('div', '', 'photo-controls');
      controls.setAttribute('role', 'group');
      controls.setAttribute('aria-label', 'Imagens de ' + post.contexto);
      const previous = el('button', 'Anterior', 'filter');
      const next = el('button', 'Próxima', 'filter');
      const count = el('span', '', 'photo-count');
      count.setAttribute('aria-live', 'polite');
      previous.type = next.type = 'button';
      const update = () => {
        figures.forEach((figure, index) => { figure.hidden = index !== current; });
        previous.disabled = current === 0;
        next.disabled = current === figures.length - 1;
        count.textContent = (current + 1) + ' / ' + figures.length;
      };
      previous.onclick = () => { current = Math.max(0, current - 1); update(); };
      next.onclick = () => { current = Math.min(figures.length - 1, current + 1); update(); };
      controls.append(previous, count, next);
      gallery.append(controls);
      update();
    }
    const copy = el('div', '', 'feed-copy'), meta = el('div', '', 'post-meta'); meta.append(el('span', post.categoriaNome || post.categoria, 'post-category'), el('span', post.contexto));
    copy.append(meta, el('h3', post.titulo)); post.paragrafos.forEach(text => copy.append(el('p', text)));
    if (post.projetoId && Object.hasOwn(window.portfolioProjetos, post.projetoId)) {
      const link = el('a', post.textoLink || 'Conhecer o projeto', 'text-link'); link.href = `html/projeto.html?id=${encodeURIComponent(post.projetoId)}`; copy.append(link);
    }
    if (post.linkedinUrl) {
      try { const url = new URL(post.linkedinUrl);
        if (url.protocol === 'https:' && ['www.linkedin.com', 'linkedin.com'].includes(url.hostname)) {
          const link = el('a', 'Ver publicação original no LinkedIn', 'text-link');
          link.href = url.href; link.target = '_blank'; link.rel = 'noopener noreferrer'; copy.append(link);
        }
      } catch { /* URL inválida: não cria link. */ }
    }
    if(post.video){const v=el('video');v.src=post.video;v.controls=true;v.preload='none';v.playsInline=true;v.setAttribute('aria-label','Vídeo ilustrativo do TripLog');copy.append(v);}
    article.append(gallery, copy); feed.append(article);
  });
  function team(group) {
    const box = el('div', '', 'team-credit'), logo = el('span', 'Logo Orbit', 'team-logo-slot');
    if (group.logo && mediaURL(group.logo)) { const img = el('img'); img.src=mediaURL(group.logo); img.alt=`Logo ${group.nome}`; img.onerror=()=>img.replaceWith(el('span','Logo Orbit')); logo.replaceChildren(img); }
    box.append(logo, el('span', `Projeto em grupo · ${group.nome}`)); return box;
  }
  return {gallery, repositories, team};
})();
