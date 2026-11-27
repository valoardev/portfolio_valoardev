// Foto, avatar e filme de fundo. Conteúdo editável em js/dados/visual.js.
(() => {
  const config = window.portfolioVisual;
  if (!config) return;
  function mediaURL(src) {
    if (!src || typeof src !== 'string') return '';
    if (/^https:\/\//i.test(src)) return src;
    if (/^(?:[a-z]+:|\/\/|\/)/i.test(src)) return '';
    return src;
  }
  function portrait(selector, data) {
    const slot = document.querySelector(selector), src = mediaURL(data?.src);
    if (!slot || !src) return;
    const img = new Image();
    img.alt = data.alt || 'Gabriel Valois Rodrigues';
    img.decoding = 'async';
    if (data.posicao && CSS.supports('object-position', data.posicao)) img.style.objectPosition = data.posicao;
    img.addEventListener('load', () => {
      slot.dataset.enquadramento = data.enquadramento === 'recorte' ? 'recorte' : 'retrato';
      slot.classList.add('has-photo');
      slot.replaceChildren(img);
    }, { once: true });
    // Se o arquivo falhar, a composição reservada continua visível.
    img.src = src;
  }
  portrait('#hero-portrait', config.hero);
  portrait('#profile-photo', config.perfil);

  const hero = document.querySelector('#inicio');
  const video = document.querySelector('#hero-background-video');
  const button = document.querySelector('#hero-motion-toggle');
  if (!hero || !video || !button) return;
  const src = mediaURL(config.fundo?.src);
  const poster = mediaURL(config.fundo?.poster);
  if (poster) video.poster = poster;
  if (!src) { video.parentElement.hidden = true; return; }

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = reduced.matches || Boolean(navigator.connection?.saveData);
  let inView = true;
  let failed = false;
  video.muted = true;
  button.hidden = false;
  function updateControl() {
    const playing = !video.paused && !video.ended;
    button.querySelector('span').textContent = playing ? 'Pausar fundo' : 'Reproduzir fundo';
    button.querySelector('use').setAttribute('href', `img/icons.svg#${playing ? 'pause' : 'play'}`);
    button.setAttribute('aria-pressed', String(playing));
    hero.classList.toggle('hero-animation-paused', !playing);
  }
  function syncPlayback() {
    if (failed) return;
    if (userPaused || document.hidden || !inView) {
      video.pause(); updateControl(); return;
    }
    // Só baixa o MP4 quando a reprodução é permitida.
    if (!video.getAttribute('src')) video.src = src;
    video.play().catch(() => updateControl());
  }
  button.addEventListener('click', () => {
    userPaused = !video.paused;
    syncPlayback();
  });
  video.addEventListener('play', updateControl);
  video.addEventListener('pause', updateControl);
  video.addEventListener('error', () => {
    failed = true; video.pause(); video.hidden = true; button.hidden = true;
    hero.classList.add('hero-animation-paused');
  });
  reduced.addEventListener('change', () => { userPaused = reduced.matches; syncPlayback(); });
  document.addEventListener('visibilitychange', syncPlayback);
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting;
    syncPlayback();
  }, { threshold: 0 }).observe(hero);
  updateControl();
  syncPlayback();
})();
