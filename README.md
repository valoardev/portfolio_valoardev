# ValoarDev — Portfólio de Gabriel Valois

Site completo em HTML, CSS e JavaScript, com Bootstrap, imagens e vídeos locais.
Versão exportada em 27/11/2026, commit 8dc55c495b32e6c3943faaa425676930687ac0c5.

## Publicar no GitHub Pages
1. Extraia este ZIP no computador. Não envie o ZIP como arquivo ao repositório.
2. Crie um repositório público chamado valoardev.github.io na conta valoardev.
3. Envie TODO o conteúdo extraído para a branch main, mantendo as pastas.
   O index.html precisa aparecer na raiz do repositório, junto com css, js, html,
   img, vendor e .nojekyll. Não coloque tudo dentro de outra pasta.
4. Em Settings > Pages > Build and deployment, escolha:
   Source: Deploy from a branch
   Branch: main
   Folder: /(root)
5. Clique Save. Aguarde a publicação e use Visit site.
6. Endereço esperado: https://valoardev.github.io/

Para enviar pelo navegador: Add file > Upload files e arraste os arquivos e pastas.
Inclua o arquivo .nojekyll (alguns sistemas ocultam nomes iniciados por ponto).
Para enviar pelo GitHub Desktop: clone o repositório, copie o conteúdo deste ZIP
para a pasta clonada, faça Commit e clique Push origin.
Não precisa de npm, servidor de backend, Python ou etapa de build para publicar.

Se preferir um repositório chamado portfolio, o endereço será:
https://valoardev.github.io/portfolio/
Os links internos usam caminhos relativos compatíveis com as duas opções.

## Testar no computador
Abra a pasta no VS Code e use a extensão Live Server para servir index.html.
Também pode usar, com Python instalado: python -m http.server 8000
Depois abra http://localhost:8000/ no navegador.
Um servidor local é preferível a abrir via file:// para SVG e outros recursos.

## Onde editar
- index.html: apresentação, trajetória, contatos e estrutura da página.
- css/style.css: aparência e regras responsivas.
- js/dados/projetos.js: projetos, capas, galerias e links.
- js/dados/feed.js: publicações, textos, categorias, fotos e vídeo.
- js/dados/tecnologias.js: tecnologias e interesses.
- js/dados/visual.js: avatar, foto e vídeo de fundo.
- html/projeto.html e js/projetos.js: página de detalhes dos projetos.
- img/: imagens e vídeos, inclusive hero-jornada.mp4 e triplog-demo.mp4.
- vendor/: Bootstrap local.

Depois de editar, envie as alterações para main. O Pages publica novamente.

## Recursos que usam internet
O painel do GitHub consulta APIs públicas para perfil, repositórios e contribuições.
O calendário usa github-contributions-api.jogruber.de.
Os ícones de tecnologias usam Devicon pelo CDN jsDelivr.
Esses serviços podem impor limites ou ficar indisponíveis; não é necessário token.
O feed é editado em js/dados/feed.js; ele não importa posts do LinkedIn automaticamente.
O vídeo do pitch abre o YouTube; as demonstrações e o fundo estão no pacote.

## Endereço personalizado
valoardev.portifolio não pode ser usado atualmente: .portifolio não é uma extensão
delegada na lista da IANA. Um domínio próprio precisa ser registrado e estar
disponível. Exemplos de formato: valoardev.com.br ou valoardev.dev.
A disponibilidade desses nomes não foi verificada.
Após registrar, configure o domínio em Settings > Pages e o DNS no provedor.
Este pacote não inclui CNAME para um domínio que você ainda não possui.

## Documentação oficial
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
https://data.iana.org/TLD/tlds-alpha-by-domain.txt
