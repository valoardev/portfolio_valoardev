// Aplica a preferência antes do CSS. A transição só começa após a página carregar.
(() => {
  const root = document.documentElement;
  let preference;
  try { preference = localStorage.getItem('portfolio-theme'); } catch (_) {}
  if (!['light', 'dark'].includes(preference)) preference = 'dark';
  function apply(theme) {
    root.dataset.theme = theme;
    root.dataset.bsTheme = theme;
    const dark = theme === 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0c1422' : '#e7eaee');
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', dark ? 'Ativar modo claro' : 'Ativar modo escuro');
      button.querySelector('[data-theme-label]').textContent = dark ? 'Modo claro' : 'Modo escuro';
    });
  }
  apply(preference);
  document.addEventListener('DOMContentLoaded', () => {
    apply(preference);
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('theme-ready')));
    document.querySelectorAll('[data-theme-toggle]').forEach(button => button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('portfolio-theme', preference); } catch (_) {}
      apply(preference);
    }));
  });
})();
