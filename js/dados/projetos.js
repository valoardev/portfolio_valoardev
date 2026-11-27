window.portfolioProjetos = {
  "incorporacao": {
    "titulo": "Scripts de administração e automação",
    "status": "AUTOMAÇÃO · APLICADO NA PRÁTICA",
    "resumo": "Scripts PowerShell para rotinas de administração: incorporações, criação e exclusão de grupos em massa e atualizações de contas.",
    "tecnologias": [
      "PowerShell",
      "Active Directory",
      "Exchange",
      "CSV"
    ],
    "secoes": [
      {
        "titulo": "Rotinas automatizadas",
        "itens": [
          "Incorporação e atualização de contas e caixas.",
          "Criação e exclusão de grupos em massa.",
          "Movimentação de usuários e grupos entre OUs.",
          "Atualização de endereços de e-mail, aliases e atributos.",
          "Entre outros ..."
        ]
      },
      {
        "titulo": "Desafio recente das incorporações",
        "texto": "Processos de incorporação envolviam movimentações e atualizações de contas e caixas. Fazer cada alteração manualmente exigia tempo e atenção, especialmente em operações com mais de 100 contas."
      },
      {
        "titulo": "Minha participação neste desafio",
        "texto": "Atuei na construção e utilização de scripts alimentados por CSV para apoiar as incorporações. O processo incluiu simulação, homologação, logs e conferência dos resultados em planilhas."
      },
      {
        "titulo": "Como o processo funciona",
        "itens": [
          "Preparar e conferir os dados de entrada no CSV.",
          "Simular as operações e revisar os usuários afetados.",
          "Executar as mudanças previstas e registrar os resultados.",
          "Conferir os relatórios e investigar as exceções."
        ]
      },
      {
        "titulo": "Resultado observado",
        "texto": "Na experiência que relatei, três incorporações foram executadas em aproximadamente quatro horas. A estimativa para o trabalho manual era de até dois dias. Esse resultado descreve aquele contexto específico."
      },
      {
        "titulo": "O que aprendi",
        "texto": "Automatizar envolve mais que executar comandos: é preciso entender as exceções, tornar o processo conferível e deixar registros que ajudem a identificar problemas."
      }
    ],
    "nota": "O código corporativo e os dados das contas não estão publicados neste portfólio. Esta página apresenta o processo e os aprendizados.",
    "categoria": "automacao",
    "arquivo": "administracao.ps1",
    "icone": "terminal",
    "rotulo": "PowerShell",
    "chamada": "Rotinas mais simples com código.",
    "selo": "Aplicado na prática",
    "exibirNaGrade": true,
    "capa": "img/powershell-perspectiva.webp",
    "repositorios": [],
    "imagensPrograma": [
      {
        "src": "img/powershell-perspectiva.webp",
        "alt": "Ilustração por IA do processo de automação — dados fictícios.",
        "legenda": "Ilustração por IA do processo de automação — dados fictícios."
      }
    ],
    "imagensTestes": []
  },
  "minha-jornada": {
    "titulo": "Minha Jornada",
    "status": "DESENVOLVIMENTO WEB",
    "resumo": "Um site para uma ONG que acolhe imigrantes, apoia sua integração ao mercado de trabalho e organiza doações, entradas e saídas.",
    "tecnologias": [
      "HTML",
      "CSS",
      "JavaScript",
      "Miro",
      "Feito com IA"
    ],
    "secoes": [
      {
        "titulo": "A proposta",
        "texto": "Apoiar uma ONG no cuidado com imigrantes e na integração dessas pessoas ao mercado de trabalho."
      },
      {
        "titulo": "Dois portais",
        "itens": [
          "Portal administrativo para a gestão da ONG, doações, entradas e saídas.",
          "Portal público para que outras pessoas encontrem os imigrantes e conheçam seus perfis."
        ],
        "url": "https://novajornada.onrender.com/modules/public/index.html",
        "linkTexto": "Visitar Nova Jornada"
      },
      {
        "titulo": "Experiência no portal público",
        "itens": [
          "Apresentação dos programas de acolhimento e integração social.",
          "Consulta de vagas e cursos para inclusão profissional.",
          "Registro de intenção de doação e cadastro de interessados em voluntariado para triagem da equipe."
        ]
      }
    ],
    "nota": "Projeto desenvolvido em grupo pela Orbit, com apoio de IA. Os indicadores de impacto exibidos no portal público são valores de demonstração.",
    "categoria": "web",
    "arquivo": "minha-jornada.web",
    "icone": "user",
    "rotulo": "Impacto social",
    "chamada": "Conectar pessoas. Criar oportunidades.",
    "selo": "Projeto web",
    "exibirNaGrade": true,
    "capa": "img/jornada-cores.webp",
    "repositorios": [
      {
        "nome": "Minha Jornada · Group-Orbit",
        "url": "https://github.com/Group-Orbit/NovaJornada"
      }
    ],
    "imagensPrograma": [
      {
        "src": "img/jornada-oportunidades.png",
        "alt": "Portal administrativo: oportunidades (demonstração)",
        "legenda": "Portal administrativo: oportunidades (demonstração)"
      },
      {
        "src": "img/jornada-dashboard.png",
        "alt": "Portal administrativo: visão geral",
        "legenda": "Portal administrativo: visão geral"
      }
    ],
    "imagensTestes": [],
    "grupo": {
      "nome": "Orbit",
      "logo": "img/orbit-escuro.jpeg"
    }
  },
  "planner-financeiro": {
    "titulo": "Planner financeiro com Telegram",
    "status": "AUTOMAÇÃO · EM DESENVOLVIMENTO",
    "resumo": "Planilha financeira com macros e VBA pronta. Agora, estamos desenvolvendo a integração com um bot do Telegram para interação em linguagem natural.",
    "tecnologias": [
      "Excel",
      "VBA",
      "Macros",
      "Telegram",
      "LLM"
    ],
    "secoes": [
      {
        "titulo": "O que já está pronto",
        "texto": "A planilha de planejamento financeiro já está pronta, com macros e VBA."
      },
      {
        "titulo": "Em desenvolvimento",
        "texto": "Estamos trabalhando na integração com um bot do Telegram. A proposta é usar uma LLM para interpretar mensagens em linguagem natural e interagir com a planilha."
      },
      {
        "titulo": "Próximos passos",
        "itens": [
          "Concluir e testar a integração com o Telegram.",
          "Implementar a interação em linguagem natural com LLM.",
          "Evoluir a planilha e explorar a geração de dashboards."
        ]
      }
    ],
    "nota": "A integração com Telegram e LLM está em desenvolvimento. Dashboards fazem parte do plano de evolução.",
    "categoria": "automacao",
    "arquivo": "planner.xlsm",
    "icone": "bolt",
    "rotulo": "Excel + Telegram",
    "chamada": "Finanças em uma conversa.",
    "selo": "Em desenvolvimento",
    "exibirNaGrade": false,
    "capa": "",
    "repositorios": [],
    "imagensPrograma": [],
    "imagensTestes": []
  },
  "portfolio": {
    "titulo": "Meu espaço na internet",
    "status": "DESENVOLVIMENTO WEB · MVP",
    "resumo": "Um portfólio para reunir minha identidade profissional, minha trajetória e os projetos que marcam meu aprendizado.",
    "tecnologias": [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
    "secoes": [
      {
        "titulo": "A proposta",
        "texto": "Unir a visão profissional de uma trajetória à visão prática dos projetos. Um espaço que conta quem sou, o que estou aprendendo e como aplico esse conhecimento."
      },
      {
        "titulo": "O que faz parte do MVP",
        "itens": [
          "Resumo profissional e trajetória.",
          "Projetos com filtros e páginas de detalhes.",
          "Feed com categorias de eventos, aulas e certificados.",
          "Rota animada da trajetória e modos claro e escuro.",
          "Área preparada para os canais de contato."
        ]
      },
      {
        "titulo": "Escolhas técnicas",
        "texto": "HTML organiza o conteúdo, CSS define a identidade visual e JavaScript cuida dos filtros e dos detalhes dos projetos. O Bootstrap fornece a grade responsiva e o menu móvel. A estrutura é estática e preparada para hospedagem no GitHub Pages."
      },
      {
        "titulo": "Próximos passos",
        "itens": [
          "Avaliar a possibilidade de uso de Angular e React em futuras atualizações."
        ]
      }
    ],
    "nota": "Este site acompanha meu aprendizado. O MVP usa os fundamentos que estou estudando, com espaço para evoluir aos poucos.",
    "categoria": "web",
    "arquivo": "portfolio.html",
    "icone": "code",
    "rotulo": "HTML · CSS · JS",
    "chamada": "Um espaço com a minha cara.",
    "selo": "MVP",
    "exibirNaGrade": true,
    "capa": "img/portfolio-perspectiva.webp",
    "repositorios": [],
    "imagensPrograma": [
      {
        "src": "img/hero-jornada-poster.webp",
        "alt": "Arte do vídeo de abertura do portfólio",
        "legenda": "Composição visual usada no fundo da abertura"
      },
      {
        "src": "img/mac-render.webp",
        "alt": "JavaScript em janela de terminal",
        "legenda": "JavaScript: criação de elementos — representação visual."
      },
      {
        "src": "img/mac-html.webp",
        "alt": "HTML em janela de terminal",
        "legenda": "HTML: estrutura da trajetória — representação visual."
      },
      {
        "src": "img/portfolio-perspectiva.webp",
        "alt": "Conceito visual do portfólio — ilustração por IA.",
        "legenda": "Conceito visual do portfólio — ilustração por IA."
      }
    ],
    "imagensTestes": []
  },
  "triplog": {
    "titulo": "TripLog",
    "status": "SEBRAE SUPERNOVA · PROJETO EM IDEAÇÃO",
    "resumo": "Uma proposta de planejamento de viagens por voz, desenvolvida em equipe para transformar uma ideia em um pitch de três minutos.",
    "tecnologias": [
      "Miro",
      "Canva",
      "Figma"
    ],
    "secoes": [
      {
        "titulo": "A ideia",
        "texto": "Ajudar pessoas a planejar viagens por meio de uma experiência mais simples, usando voz para expressar preferências e explorar um roteiro."
      },
      {
        "titulo": "Minha participação",
        "texto": "Atuei como apresentador do pitch e editor do vídeo. Ajudei a organizar a narrativa para comunicar o problema, o público e a proposta dentro do tempo disponível.",
        "url": "https://www.youtube.com/watch?v=e3rnqWhVStc",
        "linkTexto": "Assistir ao pitch"
      },
      {
        "titulo": "Trabalho em equipe",
        "texto": "O time utilizou Miro e Kanban para organização, Canva para o vídeo e ferramentas do Figma para explorar os mockups. A divisão de tarefas e a priorização foram importantes para preparar a apresentação."
      },
      {
        "titulo": "O que aprendi",
        "texto": "Uma boa ideia precisa ser explicada com clareza. O processo me ajudou a praticar comunicação, colaboração e escolhas de prioridade diante de um prazo."
      },
      {
        "titulo": "Estágio atual",
        "texto": "O TripLog está na fase de ideia e proposta. A apresentação e os mockups representam o conceito; ainda não há um aplicativo funcional ou validação com usuários apresentada aqui."
      }
    ],
    "nota": "Projeto conceitual em equipe. O foco desta página é a proposta e minha contribuição para a apresentação.",
    "categoria": "ideacao",
    "arquivo": "triplog.idea",
    "icone": "plane",
    "rotulo": "TripLog",
    "chamada": "Uma ideia para ir mais longe.",
    "selo": "Conceito",
    "exibirNaGrade": true,
    "capa": "img/triplog-logo.png",
    "repositorios": [],
    "imagensPrograma": [
      {
        "src": "img/triplog-identidade.png",
        "alt": "Identidade visual do projeto",
        "legenda": "Logo e identidade visual"
      }
    ],
    "imagensTestes": [],
    "grupo": {
      "nome": "Orbit",
      "logo": "img/orbit-escuro.jpeg"
    },
    "videos": [
      {
        "src": "img/triplog-demo.mp4",
        "titulo": "Vídeo ilustrativo: como seria o site TripLog",
        "poster": "img/triplog-demo-poster.jpg",
        "descricao": "Demonstração visual do protótipo. O vídeo ilustra a proposta de navegação e não representa um produto final em funcionamento."
      }
    ]
  },
  "integracao": {
    "titulo": "Conectando as peças",
    "status": "PROJETO INTEGRADO · EM DESENVOLVIMENTO",
    "resumo": "Um projeto de aprendizado para conectar JavaScript, Microsoft Graph e Power Automate no processamento de solicitações.",
    "tecnologias": [
      "JavaScript",
      "Microsoft Graph",
      "Power Automate",
      "JSON"
    ],
    "secoes": [
      {
        "titulo": "O objetivo",
        "texto": "Construir um projeto integrado e documentável, aplicando os conhecimentos de programação e automação em uma sequência de processamento de dados."
      },
      {
        "titulo": "O que já foi praticado",
        "itens": [
          "Validação de entradas e classificação de solicitações.",
          "Uso de JSON e definição de um esquema de dados no fluxo.",
          "Testes dos três caminhos de resultado.",
          "Ações Compor para inspecionar as saídas durante o desenvolvimento."
        ]
      },
      {
        "titulo": "O que vem a seguir",
        "itens": [
          "Consolidar e verificar as partes da integração com Microsoft Graph.",
          "Revisar o tratamento de erros e os limites das contas disponíveis.",
          "Organizar exemplos sem dados pessoais.",
          "Documentar a configuração, os testes e os aprendizados no GitHub."
        ]
      },
      {
        "titulo": "Aprendizado em andamento",
        "texto": "O projeto conecta lógica, formatos de dados e automação. Cada teste ajuda a entender onde uma informação é produzida, transformada e consumida."
      }
    ],
    "nota": "Projeto em desenvolvimento. As etapas futuras representam o plano de evolução, não funcionalidades concluídas.",
    "categoria": "automacao",
    "arquivo": "integracao.js",
    "icone": "code",
    "rotulo": "JavaScript + Graph",
    "chamada": "Conectando as peças.",
    "selo": "Em desenvolvimento",
    "exibirNaGrade": false,
    "capa": "",
    "repositorios": [],
    "imagensPrograma": [],
    "imagensTestes": []
  },
  "gerenciamento-senhas": {
    "titulo": "Senhas de atendimento em C",
    "status": "PROJETO EM C",
    "resumo": "Sistema de terminal que simula o atendimento em uma clínica: cadastro, emissão de senhas, fila por prioridade, chamadas e histórico.",
    "tecnologias": [
      "C"
    ],
    "categoria": "programacao",
    "arquivo": "gerenciamento_senhas",
    "icone": "code",
    "rotulo": "Linguagem C",
    "chamada": "Organizar a fila. Priorizar o atendimento.",
    "selo": "Projeto acadêmico",
    "exibirNaGrade": true,
    "capa": "img/c-perspectiva.webp",
    "repositorios": [
      {
        "nome": "Código do projeto em C",
        "url": "https://github.com/valoardev/Desenvolvimento_De_Algoritmo_E_Pensamento_Computacional/tree/main/gerenciamento_senhas"
      }
    ],
    "imagensPrograma": [
      {
        "src": "img/senhas-teste_01_cadastro.png",
        "alt": "Cadastro de usuário e geração de ID",
        "legenda": "Cadastro de usuário e geração de ID"
      },
      {
        "src": "img/senhas-teste_03_fila_prioridades.png",
        "alt": "Fila ordenada por prioridade",
        "legenda": "Fila ordenada por prioridade"
      }
    ],
    "imagensTestes": [
      {
        "src": "img/senhas-teste_01_cadastro.png",
        "alt": "Cadastro de usuário e geração de ID",
        "legenda": "Cadastro de usuário e geração de ID"
      },
      {
        "src": "img/senhas-teste_02_id_inexistente.png",
        "alt": "Validação de ID inexistente",
        "legenda": "Validação de ID inexistente"
      },
      {
        "src": "img/senhas-teste_03_fila_prioridades.png",
        "alt": "Fila ordenada por prioridade",
        "legenda": "Fila ordenada por prioridade"
      },
      {
        "src": "img/senhas-teste_04_registro_atendimento.png",
        "alt": "Chamada e finalização do atendimento",
        "legenda": "Chamada e finalização do atendimento"
      },
      {
        "src": "img/senhas-teste_05_historico.png",
        "alt": "Histórico de atendimentos concluídos",
        "legenda": "Histórico de atendimentos concluídos"
      }
    ],
    "secoes": [
      {
        "titulo": "Como funciona",
        "itens": [
          "Cadastrar usuários e emitir senhas por ID.",
          "Organizar a fila por prioridade e chamar o próximo paciente.",
          "Finalizar atendimentos e consultar o histórico.",
          "Exibir o painel de chamada e os contadores."
        ]
      },
      {
        "titulo": "Conceitos praticados",
        "texto": "Funções, estruturas de dados, vetores e modularização em linguagem C."
      }
    ],
    "nota": "Projeto acadêmico. Os dados ficam em memória durante a execução; esta versão não utiliza arquivos ou banco de dados para persistência."
  }
};
