// Preencha apenas com os endereços reais que deseja tornar públicos.
// Os campos vazios aparecem como "Em breve", sem links falsos.
const contatos = [
  { nome: "E-mail", icone: "mail", url: "mailto:biel.valois18@gmail.com" },
  { nome: "LinkedIn", icone: "linkedin", url: "https://www.linkedin.com/in/biel-valois" },
  { nome: "GitHub", icone: "github", url: "https://github.com/valoardev" },
  { nome: "Instagram", icone: "instagram", url: "https://www.instagram.com/biel_valois" },
];

document.querySelectorAll("[data-year]").forEach((elemento) => {
  elemento.textContent = new Date().getFullYear();
});

const listaContatos = document.querySelector("#contact-links");
if (listaContatos) {
  contatos.forEach((contato) => {
    // createElement cria elementos. textContent insere texto sem interpretá-lo como HTML.
    const item = document.createElement(contato.url ? "a" : "span");
    item.className = `contact-item${contato.url ? "" : " unavailable"}`;
    if (contato.url) {
      item.href = contato.url;
      if (contato.url.startsWith("https://")) {
        item.target = "_blank";
        item.rel = "noopener noreferrer";
      }
    }
    const simbolo = document.createElement("span");
    simbolo.className = "contact-symbol";
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('icon');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', `${location.pathname.includes('/html/') ? '../' : ''}img/icons.svg#${contato.icone}`);
    svg.append(use);
    simbolo.append(svg);
    simbolo.setAttribute("aria-hidden", "true");
    item.append(simbolo, document.createTextNode(contato.nome));
    if (!contato.url) {
      const aviso = document.createElement("small");
      aviso.textContent = "Em breve";
      item.append(aviso);
    }
    listaContatos.append(item);
  });
  if (contatos.every((contato) => contato.url))
    document.querySelector("#contact-note")?.remove();
}

// dataset lê atributos data-* do HTML. O atributo hidden esconde os demais cartões.
const filtros = document.querySelectorAll("[data-filter]");
const projetos = document.querySelectorAll("[data-category]");
filtros.forEach((botao) => {
  botao.addEventListener("click", () => {
    filtros.forEach((filtro) => {
      const selecionado = filtro === botao;
      filtro.classList.toggle("active", selecionado);
      filtro.setAttribute("aria-pressed", String(selecionado));
    });
    let quantidade = 0;
    projetos.forEach((projeto) => {
      const exibir =
        botao.dataset.filter === "todos" ||
        projeto.dataset.category === botao.dataset.filter;
      projeto.hidden = !exibir;
      if (exibir) quantidade++;
    });
    document.querySelector("#filter-status").textContent =
      `${quantidade} projeto${quantidade === 1 ? "" : "s"} exibido${quantidade === 1 ? "" : "s"}.`;
  });
});

// Reutilizamos o componente Collapse do Bootstrap para fechar o menu no celular.
const menu = document.querySelector("#menu");
if (menu) {
  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      if (menu.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    }),
  );
}

// IntersectionObserver observa as seções visíveis sem verificar a rolagem a cada pixel.
if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        document.querySelectorAll(".nav-link").forEach((link) => {
          const ativo = link.getAttribute("href") === `#${entrada.target.id}`;
          link.classList.toggle("active", ativo);
          if (ativo) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -65% 0px" },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((secao) => observador.observe(secao));
}

// O renderizador monta o feed a partir de js/dados/feed.js antes de ligar os filtros.
const feedFilters = document.querySelectorAll('[data-feed-filter]');
const feedPosts = document.querySelectorAll('[data-feed-category]');
feedFilters.forEach(button => {
  button.addEventListener('click', () => {
    feedFilters.forEach(filter => {
      filter.classList.toggle('active', filter === button);
      filter.setAttribute('aria-pressed', String(filter === button));
    });
    let count = 0;
    feedPosts.forEach(post => {
      post.hidden = button.dataset.feedFilter !== 'todos' && post.dataset.feedCategory !== button.dataset.feedFilter;
      if (!post.hidden) count++;
    });
    document.querySelector('#feed-empty').hidden = count > 0;
    document.querySelector('#feed-status').textContent = count ? `${count} publicaç${count === 1 ? "ão exibida" : "ões exibidas"}.` : 'Nenhuma publicação nesta categoria ainda.';
  });
});

// Detalhes da trajetória: mouse, teclado e toque usam o mesmo estado acessível.
const stops = [...document.querySelectorAll('.journey-stop')];
let pinnedStop = null;
let dismissedStop = null;
function showStop(selected) {
  stops.forEach(stop => {
    const open = stop === selected;
    stop.classList.toggle('is-open', open);
    stop.querySelector('button').setAttribute('aria-expanded', String(open));
    stop.querySelector('.journey-popover').hidden = !open;
  });
}
stops.forEach(stop => {
  const trigger = stop.querySelector('button');
  stop.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse') return;
    dismissedStop = null;
    showStop(stop);
  });
  stop.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'mouse') return;
    dismissedStop = null;
    showStop(pinnedStop);
  });
  trigger.addEventListener('focus', () => {
    if (dismissedStop !== stop && trigger.matches(':focus-visible')) showStop(stop);
  });
  trigger.addEventListener('click', () => {
    pinnedStop = pinnedStop === stop ? null : stop;
    dismissedStop = pinnedStop ? null : stop;
    showStop(pinnedStop);
  });
  stop.addEventListener('focusout', event => {
    if (!stop.contains(event.relatedTarget)) showStop(pinnedStop);
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    dismissedStop = stops.find(stop => stop.classList.contains('is-open'));
    pinnedStop = null;
    showStop(null);
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.journey-stop')) { pinnedStop = null; showStop(null); }
});
