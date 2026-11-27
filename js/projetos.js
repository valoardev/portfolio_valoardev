const projetosDetalhes = window.portfolioProjetos;

const idProjeto = new URLSearchParams(window.location.search).get("id");
// hasOwn evita tratar nomes herdados do objeto como identificadores de projetos.
const projetoAtual = Object.hasOwn(projetosDetalhes, idProjeto)
  ? projetosDetalhes[idProjeto]
  : null;
const detalhe = document.querySelector("#project-detail");
function criarTexto(tag, texto, classe) {
  const elemento = document.createElement(tag);
  elemento.textContent = texto;
  if (classe) elemento.className = classe;
  return elemento;
}
if (projetoAtual) {
  document.title = `${projetoAtual.titulo} — valoardev`;
  detalhe.replaceChildren(criarTexto("h1", projetoAtual.titulo));
  const status = criarTexto("p", projetoAtual.status);
  status.dataset.status = "";
  detalhe.append(status, criarTexto("p", projetoAtual.resumo, "detail-intro"));
  const tags = document.createElement("div");
  tags.className = "tech-tags";
  projetoAtual.tecnologias.forEach((tecnologia) =>
    tags.append(criarTexto("span", tecnologia)),
  );
  detalhe.append(tags);
  if (projetoAtual.siteUrl?.startsWith('https://')) {
    const link = criarTexto('a', 'Visitar o site do projeto', 'btn btn-primary');
    link.href = projetoAtual.siteUrl;
    link.target = '_blank'; link.rel = 'noopener noreferrer';
    detalhe.append(link);
  }
  (projetoAtual.videos || []).forEach(item => {
    if (!/^img\/[a-zA-Z0-9_.-]+$/.test(item.src)) return;
    const section=document.createElement('section'), video=document.createElement('video');
    section.className='detail-section project-video';section.append(criarTexto('h2',item.titulo)); if(item.descricao) section.append(criarTexto('p',item.descricao));
    video.controls=true;video.playsInline=true;video.preload='metadata';video.src='../'+item.src;
    if(item.poster && /^img\/[a-zA-Z0-9_.-]+$/.test(item.poster)) video.poster='../'+item.poster;
    const link=document.createElement('a');link.href=video.src;link.textContent='Abrir vídeo de demonstração';
    section.append(video,link);detalhe.append(section);
  });
  if(projetoAtual.grupo) detalhe.append(PortfolioUI.team(projetoAtual.grupo));
  detalhe.append(PortfolioUI.repositories(projetoAtual.repositorios));
  detalhe.append(PortfolioUI.gallery("O programa", projetoAtual.imagensPrograma, "Telas do programa", "code"));
  if (projetoAtual.imagensTestes?.length) detalhe.append(PortfolioUI.gallery("Testes e resultados", projetoAtual.imagensTestes, "Registros dos testes", "terminal"));
  projetoAtual.secoes.forEach((secao) => {
    const bloco = document.createElement("section");
    bloco.className = "detail-section";
    bloco.append(criarTexto("h2", secao.titulo));
    if (secao.texto) bloco.append(criarTexto("p", secao.texto));
    if (secao.itens) {
      const lista = document.createElement("ul");
      secao.itens.forEach((item) => lista.append(criarTexto("li", item)));
      bloco.append(lista);
    }
    if(secao.url?.startsWith('https://')) {
      const link=criarTexto('a',secao.linkTexto,'btn btn-primary');
      link.href=secao.url;link.target='_blank';link.rel='noopener noreferrer';bloco.append(link);
    }
    detalhe.append(bloco);
  });
  const nota = document.createElement("aside");
  nota.className = "detail-callout";
  nota.append(criarTexto("p", projetoAtual.nota));
  detalhe.append(nota);
} else {
  detalhe.replaceChildren(
    criarTexto("h1", "Projeto não encontrado"),
    criarTexto(
      "p",
      "Escolha um dos projetos do portfólio para conhecer seus detalhes.",
    ),
  );
}
