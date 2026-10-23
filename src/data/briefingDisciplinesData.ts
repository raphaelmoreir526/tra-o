import { DisciplineItem } from "../types";

export const briefingMeta = {
  versao: "1.0",
  titulo: "Briefing de Projetos – Edifício Residencial Multifamiliar",
  opcaoPersonalizada: "Outra resposta (descreva)"
};

export const disciplinesData: DisciplineItem[] = [
  {
    "id": "arq",
    "name": "Arquitetura",
    "shortName": "ARQ",
    "description": "Definições que orientam o partido arquitetônico, as plantas e as áreas técnicas.",
    "questions": [
      {
        "id": "arq01",
        "title": "Qual o padrão do empreendimento?",
        "hint": "Define acabamentos, áreas e o nível de todas as instalações.",
        "options": [
          {
            "id": "arq01-opt1",
            "label": "Econômico / programa habitacional",
            "isCustom": false
          },
          {
            "id": "arq01-opt2",
            "label": "Médio padrão",
            "isCustom": false
          },
          {
            "id": "arq01-opt3",
            "label": "Alto padrão / luxo",
            "isCustom": false
          },
          {
            "id": "arq01-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq02",
        "title": "Quantos pavimentos-tipo (andares de apartamentos) estão previstos?",
        "hint": "Acima de 4 pavimentos normalmente há exigência de elevador.",
        "options": [
          {
            "id": "arq02-opt1",
            "label": "Até 4 pavimentos",
            "isCustom": false
          },
          {
            "id": "arq02-opt2",
            "label": "De 5 a 12 pavimentos",
            "isCustom": false
          },
          {
            "id": "arq02-opt3",
            "label": "Mais de 12 pavimentos",
            "isCustom": false
          },
          {
            "id": "arq02-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq03",
        "title": "Quantos apartamentos por andar?",
        "options": [
          {
            "id": "arq03-opt1",
            "label": "2 por andar",
            "isCustom": false
          },
          {
            "id": "arq03-opt2",
            "label": "4 por andar",
            "isCustom": false
          },
          {
            "id": "arq03-opt3",
            "label": "6 ou mais por andar",
            "isCustom": false
          },
          {
            "id": "arq03-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq04",
        "title": "Qual a tipologia predominante dos apartamentos?",
        "options": [
          {
            "id": "arq04-opt1",
            "label": "Studio ou 1 quarto",
            "isCustom": false
          },
          {
            "id": "arq04-opt2",
            "label": "2 quartos (1 suíte)",
            "isCustom": false
          },
          {
            "id": "arq04-opt3",
            "label": "3 quartos ou mais (2 ou mais suítes)",
            "isCustom": false
          },
          {
            "id": "arq04-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq05",
        "title": "Qual a área privativa média das unidades?",
        "options": [
          {
            "id": "arq05-opt1",
            "label": "Até 50 m²",
            "isCustom": false
          },
          {
            "id": "arq05-opt2",
            "label": "De 50 a 90 m²",
            "isCustom": false
          },
          {
            "id": "arq05-opt3",
            "label": "Acima de 90 m²",
            "isCustom": false
          },
          {
            "id": "arq05-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq06",
        "title": "Quantas vagas de garagem por unidade?",
        "options": [
          {
            "id": "arq06-opt1",
            "label": "1 vaga",
            "isCustom": false
          },
          {
            "id": "arq06-opt2",
            "label": "2 vagas",
            "isCustom": false
          },
          {
            "id": "arq06-opt3",
            "label": "3 vagas ou mais",
            "isCustom": false
          },
          {
            "id": "arq06-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq07",
        "title": "Onde ficará a garagem?",
        "hint": "Subsolos exigem drenagem, bombas de recalque e ventilação.",
        "options": [
          {
            "id": "arq07-opt1",
            "label": "Térreo / pilotis",
            "isCustom": false
          },
          {
            "id": "arq07-opt2",
            "label": "Subsolo(s)",
            "isCustom": false
          },
          {
            "id": "arq07-opt3",
            "label": "Pavimentos de garagem elevados",
            "isCustom": false
          },
          {
            "id": "arq07-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq08",
        "title": "Qual o sistema construtivo previsto?",
        "hint": "Afeta a passagem de tubulações e a flexibilidade das plantas.",
        "options": [
          {
            "id": "arq08-opt1",
            "label": "Estrutura de concreto armado com alvenaria de vedação",
            "isCustom": false
          },
          {
            "id": "arq08-opt2",
            "label": "Alvenaria estrutural",
            "isCustom": false
          },
          {
            "id": "arq08-opt3",
            "label": "Paredes de concreto moldadas no local",
            "isCustom": false
          },
          {
            "id": "arq08-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq09",
        "title": "Como será a cozinha?",
        "options": [
          {
            "id": "arq09-opt1",
            "label": "Fechada",
            "isCustom": false
          },
          {
            "id": "arq09-opt2",
            "label": "Americana, integrada à sala",
            "isCustom": false
          },
          {
            "id": "arq09-opt3",
            "label": "Integrada à varanda gourmet",
            "isCustom": false
          },
          {
            "id": "arq09-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq10",
        "title": "Que tipo de varanda as unidades terão?",
        "options": [
          {
            "id": "arq10-opt1",
            "label": "Sem varanda",
            "isCustom": false
          },
          {
            "id": "arq10-opt2",
            "label": "Varanda simples",
            "isCustom": false
          },
          {
            "id": "arq10-opt3",
            "label": "Varanda gourmet com churrasqueira",
            "isCustom": false
          },
          {
            "id": "arq10-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq11",
        "title": "Qual o nível da área de lazer?",
        "options": [
          {
            "id": "arq11-opt1",
            "label": "Básico: salão de festas e playground",
            "isCustom": false
          },
          {
            "id": "arq11-opt2",
            "label": "Intermediário: + piscina, academia e espaço gourmet",
            "isCustom": false
          },
          {
            "id": "arq11-opt3",
            "label": "Completo (clube): + quadra, sauna, coworking e pet place",
            "isCustom": false
          },
          {
            "id": "arq11-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq12",
        "title": "Como será a portaria?",
        "options": [
          {
            "id": "arq12-opt1",
            "label": "Presencial 24 horas",
            "isCustom": false
          },
          {
            "id": "arq12-opt2",
            "label": "Remota (portaria virtual)",
            "isCustom": false
          },
          {
            "id": "arq12-opt3",
            "label": "Híbrida",
            "isCustom": false
          },
          {
            "id": "arq12-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq13",
        "title": "Onde haverá forro de gesso nas unidades?",
        "hint": "O forro esconde tubulações e permite iluminação embutida.",
        "options": [
          {
            "id": "arq13-opt1",
            "label": "Somente em banheiros e área de serviço",
            "isCustom": false
          },
          {
            "id": "arq13-opt2",
            "label": "Áreas molhadas e circulação",
            "isCustom": false
          },
          {
            "id": "arq13-opt3",
            "label": "Em todos os ambientes",
            "isCustom": false
          },
          {
            "id": "arq13-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq14",
        "title": "Qual o tipo de esquadria (janelas e portas externas)?",
        "options": [
          {
            "id": "arq14-opt1",
            "label": "Alumínio, linha padrão",
            "isCustom": false
          },
          {
            "id": "arq14-opt2",
            "label": "Alumínio, linha superior com vidro laminado",
            "isCustom": false
          },
          {
            "id": "arq14-opt3",
            "label": "PVC ou alumínio com isolamento acústico",
            "isCustom": false
          },
          {
            "id": "arq14-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "arq15",
        "title": "Qual o nível de desempenho desejado pela NBR 15575?",
        "hint": "A norma exige no mínimo o nível Mínimo; níveis maiores melhoram conforto acústico, térmico e durabilidade.",
        "options": [
          {
            "id": "arq15-opt1",
            "label": "Mínimo",
            "isCustom": false
          },
          {
            "id": "arq15-opt2",
            "label": "Intermediário",
            "isCustom": false
          },
          {
            "id": "arq15-opt3",
            "label": "Superior",
            "isCustom": false
          },
          {
            "id": "arq15-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      }
    ]
  },
  {
    "id": "hid",
    "name": "Hidrossanitário",
    "shortName": "HID",
    "description": "Água fria e quente, esgoto, águas pluviais e combate a incêndio hidráulico.",
    "questions": [
      {
        "id": "hid01",
        "title": "Como será o abastecimento de água?",
        "options": [
          {
            "id": "hid01-opt1",
            "label": "Rede pública da concessionária",
            "isCustom": false
          },
          {
            "id": "hid01-opt2",
            "label": "Rede pública + poço artesiano",
            "isCustom": false
          },
          {
            "id": "hid01-opt3",
            "label": "Poço ou fonte própria",
            "isCustom": false
          },
          {
            "id": "hid01-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid02",
        "title": "Qual o sistema de distribuição de água?",
        "hint": "A pressurização dispensa a caixa d'água na cobertura, mas depende de energia constante.",
        "options": [
          {
            "id": "hid02-opt1",
            "label": "Reservatório superior por gravidade",
            "isCustom": false
          },
          {
            "id": "hid02-opt2",
            "label": "Pressurizado com bombas (sem reservatório superior)",
            "isCustom": false
          },
          {
            "id": "hid02-opt3",
            "label": "Misto (gravidade + pressurização nos últimos andares)",
            "isCustom": false
          },
          {
            "id": "hid02-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid03",
        "title": "Qual a reservação de água desejada?",
        "options": [
          {
            "id": "hid03-opt1",
            "label": "1 dia de consumo",
            "isCustom": false
          },
          {
            "id": "hid03-opt2",
            "label": "2 dias de consumo",
            "isCustom": false
          },
          {
            "id": "hid03-opt3",
            "label": "A critério do projetista, conforme a concessionária",
            "isCustom": false
          },
          {
            "id": "hid03-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid04",
        "title": "Como será a medição individual de água?",
        "options": [
          {
            "id": "hid04-opt1",
            "label": "Hidrômetro por unidade, no hall do andar",
            "isCustom": false
          },
          {
            "id": "hid04-opt2",
            "label": "Hidrômetros agrupados no térreo",
            "isCustom": false
          },
          {
            "id": "hid04-opt3",
            "label": "Medição remota (telemetria)",
            "isCustom": false
          },
          {
            "id": "hid04-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid05",
        "title": "Qual a fonte de aquecimento de água?",
        "options": [
          {
            "id": "hid05-opt1",
            "label": "Chuveiro elétrico",
            "isCustom": false
          },
          {
            "id": "hid05-opt2",
            "label": "Aquecedor a gás de passagem",
            "isCustom": false
          },
          {
            "id": "hid05-opt3",
            "label": "Solar ou bomba de calor (com apoio)",
            "isCustom": false
          },
          {
            "id": "hid05-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid06",
        "title": "Quais pontos terão água quente?",
        "options": [
          {
            "id": "hid06-opt1",
            "label": "Somente chuveiros",
            "isCustom": false
          },
          {
            "id": "hid06-opt2",
            "label": "Chuveiros e lavatórios",
            "isCustom": false
          },
          {
            "id": "hid06-opt3",
            "label": "Chuveiros, lavatórios e pia da cozinha",
            "isCustom": false
          },
          {
            "id": "hid06-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid07",
        "title": "Qual material de tubulação de água prefere?",
        "options": [
          {
            "id": "hid07-opt1",
            "label": "PVC (fria) + CPVC (quente)",
            "isCustom": false
          },
          {
            "id": "hid07-opt2",
            "label": "PPR (fria e quente)",
            "isCustom": false
          },
          {
            "id": "hid07-opt3",
            "label": "PEX (fria e quente)",
            "isCustom": false
          },
          {
            "id": "hid07-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid08",
        "title": "Qual o destino do esgoto?",
        "options": [
          {
            "id": "hid08-opt1",
            "label": "Rede pública coletora",
            "isCustom": false
          },
          {
            "id": "hid08-opt2",
            "label": "Fossa séptica + filtro",
            "isCustom": false
          },
          {
            "id": "hid08-opt3",
            "label": "Estação de tratamento compacta (ETE)",
            "isCustom": false
          },
          {
            "id": "hid08-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid09",
        "title": "Qual o padrão acústico das prumadas de esgoto?",
        "hint": "Tubulações silenciosas reduzem o ruído de descargas entre apartamentos.",
        "options": [
          {
            "id": "hid09-opt1",
            "label": "PVC convencional",
            "isCustom": false
          },
          {
            "id": "hid09-opt2",
            "label": "PVC reforçado com isolamento acústico",
            "isCustom": false
          },
          {
            "id": "hid09-opt3",
            "label": "Tubos acústicos (silenciosos)",
            "isCustom": false
          },
          {
            "id": "hid09-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid10",
        "title": "Que tipo de ralo nos boxes dos banheiros?",
        "options": [
          {
            "id": "hid10-opt1",
            "label": "Ralo sifonado comum",
            "isCustom": false
          },
          {
            "id": "hid10-opt2",
            "label": "Ralo linear",
            "isCustom": false
          },
          {
            "id": "hid10-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "hid10-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid11",
        "title": "Como serão as caixas de gordura?",
        "options": [
          {
            "id": "hid11-opt1",
            "label": "Individual por unidade",
            "isCustom": false
          },
          {
            "id": "hid11-opt2",
            "label": "Coletiva por prumada, no térreo",
            "isCustom": false
          },
          {
            "id": "hid11-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "hid11-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid12",
        "title": "O município exige reservatório de retenção de águas pluviais?",
        "hint": "Muitas prefeituras exigem para lotes com alta taxa de impermeabilização.",
        "options": [
          {
            "id": "hid12-opt1",
            "label": "Sim, é exigido",
            "isCustom": false
          },
          {
            "id": "hid12-opt2",
            "label": "Não é exigido",
            "isCustom": false
          },
          {
            "id": "hid12-opt3",
            "label": "Não sei — verificar na prefeitura",
            "isCustom": false
          },
          {
            "id": "hid12-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid13",
        "title": "Deseja aproveitamento de água de chuva ou reuso?",
        "options": [
          {
            "id": "hid13-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "hid13-opt2",
            "label": "Água de chuva para rega e lavagem",
            "isCustom": false
          },
          {
            "id": "hid13-opt3",
            "label": "Água de chuva + reuso de águas cinzas para descargas",
            "isCustom": false
          },
          {
            "id": "hid13-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid14",
        "title": "Como será a piscina?",
        "options": [
          {
            "id": "hid14-opt1",
            "label": "Não haverá piscina",
            "isCustom": false
          },
          {
            "id": "hid14-opt2",
            "label": "Piscina sem aquecimento",
            "isCustom": false
          },
          {
            "id": "hid14-opt3",
            "label": "Piscina aquecida",
            "isCustom": false
          },
          {
            "id": "hid14-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "hid15",
        "title": "Qual o sistema hidráulico de combate a incêndio?",
        "hint": "A exigência final depende da classificação do Corpo de Bombeiros.",
        "options": [
          {
            "id": "hid15-opt1",
            "label": "Hidrantes ou mangotinhos, conforme o bombeiro",
            "isCustom": false
          },
          {
            "id": "hid15-opt2",
            "label": "Hidrantes + chuveiros automáticos (sprinklers)",
            "isCustom": false
          },
          {
            "id": "hid15-opt3",
            "label": "Somente extintores (edificação baixa)",
            "isCustom": false
          },
          {
            "id": "hid15-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      }
    ]
  },
  {
    "id": "ele",
    "name": "Elétrico",
    "shortName": "ELE",
    "description": "Entrada de energia, medição, instalações das unidades e das áreas comuns.",
    "questions": [
      {
        "id": "ele01",
        "title": "Qual a tensão de fornecimento da região?",
        "options": [
          {
            "id": "ele01-opt1",
            "label": "127/220 V",
            "isCustom": false
          },
          {
            "id": "ele01-opt2",
            "label": "220/380 V",
            "isCustom": false
          },
          {
            "id": "ele01-opt3",
            "label": "Não sei — verificar com a distribuidora",
            "isCustom": false
          },
          {
            "id": "ele01-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele02",
        "title": "Como será a entrada de energia?",
        "hint": "Empreendimentos com grande demanda podem exigir transformador próprio.",
        "options": [
          {
            "id": "ele02-opt1",
            "label": "Baixa tensão direto da rede",
            "isCustom": false
          },
          {
            "id": "ele02-opt2",
            "label": "Subestação / transformador próprio",
            "isCustom": false
          },
          {
            "id": "ele02-opt3",
            "label": "A critério do projetista, conforme a demanda",
            "isCustom": false
          },
          {
            "id": "ele02-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele03",
        "title": "Onde ficará o centro de medição?",
        "options": [
          {
            "id": "ele03-opt1",
            "label": "Agrupado no térreo",
            "isCustom": false
          },
          {
            "id": "ele03-opt2",
            "label": "Por andar",
            "isCustom": false
          },
          {
            "id": "ele03-opt3",
            "label": "Medição remota",
            "isCustom": false
          },
          {
            "id": "ele03-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele04",
        "title": "Qual o tipo de ligação de cada unidade?",
        "options": [
          {
            "id": "ele04-opt1",
            "label": "Monofásica",
            "isCustom": false
          },
          {
            "id": "ele04-opt2",
            "label": "Bifásica",
            "isCustom": false
          },
          {
            "id": "ele04-opt3",
            "label": "Trifásica",
            "isCustom": false
          },
          {
            "id": "ele04-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele05",
        "title": "Como será a cocção nas cozinhas?",
        "hint": "Cooktop de indução e forno elétrico aumentam muito a carga elétrica.",
        "options": [
          {
            "id": "ele05-opt1",
            "label": "Fogão / cooktop a gás",
            "isCustom": false
          },
          {
            "id": "ele05-opt2",
            "label": "Cooktop de indução + forno elétrico",
            "isCustom": false
          },
          {
            "id": "ele05-opt3",
            "label": "Infraestrutura para gás e indução",
            "isCustom": false
          },
          {
            "id": "ele05-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele06",
        "title": "Haverá chuveiro elétrico?",
        "options": [
          {
            "id": "ele06-opt1",
            "label": "Sim, em todos os banheiros",
            "isCustom": false
          },
          {
            "id": "ele06-opt2",
            "label": "Não (aquecimento a gás, solar ou central)",
            "isCustom": false
          },
          {
            "id": "ele06-opt3",
            "label": "Apenas ponto elétrico de reserva",
            "isCustom": false
          },
          {
            "id": "ele06-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele07",
        "title": "Qual a quantidade de tomadas nas unidades?",
        "options": [
          {
            "id": "ele07-opt1",
            "label": "Mínimo da NBR 5410",
            "isCustom": false
          },
          {
            "id": "ele07-opt2",
            "label": "Mínimo + cerca de 20%",
            "isCustom": false
          },
          {
            "id": "ele07-opt3",
            "label": "Padrão elevado, com tomadas USB",
            "isCustom": false
          },
          {
            "id": "ele07-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele08",
        "title": "Quais ambientes terão ponto elétrico para ar-condicionado?",
        "options": [
          {
            "id": "ele08-opt1",
            "label": "Somente suítes",
            "isCustom": false
          },
          {
            "id": "ele08-opt2",
            "label": "Todos os quartos",
            "isCustom": false
          },
          {
            "id": "ele08-opt3",
            "label": "Quartos e sala",
            "isCustom": false
          },
          {
            "id": "ele08-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele09",
        "title": "Como será a iluminação das unidades?",
        "options": [
          {
            "id": "ele09-opt1",
            "label": "Ponto simples no teto por ambiente",
            "isCustom": false
          },
          {
            "id": "ele09-opt2",
            "label": "Pontos + infraestrutura para spots e sancas",
            "isCustom": false
          },
          {
            "id": "ele09-opt3",
            "label": "Projeto luminotécnico completo",
            "isCustom": false
          },
          {
            "id": "ele09-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele10",
        "title": "Haverá automação residencial?",
        "options": [
          {
            "id": "ele10-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "ele10-opt2",
            "label": "Somente infraestrutura seca (tubulação)",
            "isCustom": false
          },
          {
            "id": "ele10-opt3",
            "label": "Sistema instalado (cenas, persianas, voz)",
            "isCustom": false
          },
          {
            "id": "ele10-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele11",
        "title": "Haverá gerador?",
        "options": [
          {
            "id": "ele11-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "ele11-opt2",
            "label": "Somente cargas de emergência (elevador, bombas, iluminação)",
            "isCustom": false
          },
          {
            "id": "ele11-opt3",
            "label": "Áreas comuns completas",
            "isCustom": false
          },
          {
            "id": "ele11-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele12",
        "title": "Deseja sistema fotovoltaico (energia solar)?",
        "options": [
          {
            "id": "ele12-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "ele12-opt2",
            "label": "Sim, para as áreas comuns",
            "isCustom": false
          },
          {
            "id": "ele12-opt3",
            "label": "Sim, para áreas comuns e unidades",
            "isCustom": false
          },
          {
            "id": "ele12-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele13",
        "title": "Como será a recarga de veículos elétricos?",
        "options": [
          {
            "id": "ele13-opt1",
            "label": "Não prevista",
            "isCustom": false
          },
          {
            "id": "ele13-opt2",
            "label": "Infraestrutura seca para futuras instalações",
            "isCustom": false
          },
          {
            "id": "ele13-opt3",
            "label": "Carregadores instalados em parte das vagas",
            "isCustom": false
          },
          {
            "id": "ele13-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele14",
        "title": "Como será o controle da iluminação das áreas comuns?",
        "options": [
          {
            "id": "ele14-opt1",
            "label": "Interruptores convencionais",
            "isCustom": false
          },
          {
            "id": "ele14-opt2",
            "label": "Sensores de presença",
            "isCustom": false
          },
          {
            "id": "ele14-opt3",
            "label": "Automação com horários e dimerização",
            "isCustom": false
          },
          {
            "id": "ele14-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "ele15",
        "title": "Qual a linha de acabamento de tomadas e interruptores?",
        "options": [
          {
            "id": "ele15-opt1",
            "label": "Linha básica",
            "isCustom": false
          },
          {
            "id": "ele15-opt2",
            "label": "Linha intermediária",
            "isCustom": false
          },
          {
            "id": "ele15-opt3",
            "label": "Linha premium",
            "isCustom": false
          },
          {
            "id": "ele15-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      }
    ]
  },
  {
    "id": "tel",
    "name": "Telefone / Interfone",
    "shortName": "TEL",
    "description": "Telecomunicações, interfone, segurança e controle de acesso.",
    "questions": [
      {
        "id": "tel01",
        "title": "Como será a entrada das operadoras de telecomunicações?",
        "options": [
          {
            "id": "tel01-opt1",
            "label": "Subterrânea",
            "isCustom": false
          },
          {
            "id": "tel01-opt2",
            "label": "Aérea",
            "isCustom": false
          },
          {
            "id": "tel01-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "tel01-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel02",
        "title": "Qual a estrutura da rede de dados do prédio?",
        "options": [
          {
            "id": "tel02-opt1",
            "label": "Infraestrutura seca para as operadoras",
            "isCustom": false
          },
          {
            "id": "tel02-opt2",
            "label": "Fibra até cada unidade (FTTH), multioperadora",
            "isCustom": false
          },
          {
            "id": "tel02-opt3",
            "label": "Rede própria do condomínio em cabo Cat 6",
            "isCustom": false
          },
          {
            "id": "tel02-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel03",
        "title": "Como será o quadro de telecom dentro da unidade?",
        "options": [
          {
            "id": "tel03-opt1",
            "label": "Caixa de passagem simples",
            "isCustom": false
          },
          {
            "id": "tel03-opt2",
            "label": "Centro de distribuição com tomada para roteador",
            "isCustom": false
          },
          {
            "id": "tel03-opt3",
            "label": "Mini-rack",
            "isCustom": false
          },
          {
            "id": "tel03-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel04",
        "title": "Quantos pontos de dados (internet cabeada) por unidade?",
        "options": [
          {
            "id": "tel04-opt1",
            "label": "Sala e suíte",
            "isCustom": false
          },
          {
            "id": "tel04-opt2",
            "label": "Todos os ambientes de permanência",
            "isCustom": false
          },
          {
            "id": "tel04-opt3",
            "label": "Todos + ponto no teto para Wi-Fi",
            "isCustom": false
          },
          {
            "id": "tel04-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel05",
        "title": "Qual o cabeamento interno das unidades?",
        "options": [
          {
            "id": "tel05-opt1",
            "label": "Somente tubulação seca",
            "isCustom": false
          },
          {
            "id": "tel05-opt2",
            "label": "Cabo Cat 6",
            "isCustom": false
          },
          {
            "id": "tel05-opt3",
            "label": "Cabo Cat 6A ou fibra óptica",
            "isCustom": false
          },
          {
            "id": "tel05-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel06",
        "title": "Onde haverá pontos de TV?",
        "options": [
          {
            "id": "tel06-opt1",
            "label": "Somente sala",
            "isCustom": false
          },
          {
            "id": "tel06-opt2",
            "label": "Sala e suítes",
            "isCustom": false
          },
          {
            "id": "tel06-opt3",
            "label": "Sala e todos os quartos",
            "isCustom": false
          },
          {
            "id": "tel06-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel07",
        "title": "Haverá ponto de telefone fixo?",
        "options": [
          {
            "id": "tel07-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "tel07-opt2",
            "label": "Um ponto na sala",
            "isCustom": false
          },
          {
            "id": "tel07-opt3",
            "label": "Sala e cozinha",
            "isCustom": false
          },
          {
            "id": "tel07-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel08",
        "title": "Qual o tipo de interfone?",
        "options": [
          {
            "id": "tel08-opt1",
            "label": "Interfone analógico",
            "isCustom": false
          },
          {
            "id": "tel08-opt2",
            "label": "Interfone digital / IP com aplicativo",
            "isCustom": false
          },
          {
            "id": "tel08-opt3",
            "label": "Vídeo-porteiro com aplicativo",
            "isCustom": false
          },
          {
            "id": "tel08-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel09",
        "title": "Onde haverá pontos de interfone?",
        "options": [
          {
            "id": "tel09-opt1",
            "label": "Unidades e portaria",
            "isCustom": false
          },
          {
            "id": "tel09-opt2",
            "label": "Unidades, portaria, portões e garagem",
            "isCustom": false
          },
          {
            "id": "tel09-opt3",
            "label": "Todos os anteriores + lazer e elevadores",
            "isCustom": false
          },
          {
            "id": "tel09-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel10",
        "title": "Qual a abrangência do CFTV (câmeras)?",
        "options": [
          {
            "id": "tel10-opt1",
            "label": "Básico: acessos",
            "isCustom": false
          },
          {
            "id": "tel10-opt2",
            "label": "Intermediário: acessos, garagem e lazer",
            "isCustom": false
          },
          {
            "id": "tel10-opt3",
            "label": "Completo, com análise inteligente de vídeo",
            "isCustom": false
          },
          {
            "id": "tel10-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel11",
        "title": "Como será o controle de acesso de pedestres?",
        "options": [
          {
            "id": "tel11-opt1",
            "label": "Tag ou cartão",
            "isCustom": false
          },
          {
            "id": "tel11-opt2",
            "label": "Biometria",
            "isCustom": false
          },
          {
            "id": "tel11-opt3",
            "label": "Reconhecimento facial",
            "isCustom": false
          },
          {
            "id": "tel11-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel12",
        "title": "Como será o controle de acesso de veículos?",
        "options": [
          {
            "id": "tel12-opt1",
            "label": "Controle remoto",
            "isCustom": false
          },
          {
            "id": "tel12-opt2",
            "label": "TAG veicular",
            "isCustom": false
          },
          {
            "id": "tel12-opt3",
            "label": "Leitura de placa (LPR)",
            "isCustom": false
          },
          {
            "id": "tel12-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel13",
        "title": "Haverá clausura (eclusa) nos acessos?",
        "hint": "Clausura é um espaço entre dois portões que só abrem um de cada vez.",
        "options": [
          {
            "id": "tel13-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "tel13-opt2",
            "label": "Somente para pedestres",
            "isCustom": false
          },
          {
            "id": "tel13-opt3",
            "label": "Para pedestres e veículos",
            "isCustom": false
          },
          {
            "id": "tel13-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel14",
        "title": "Qual a segurança perimetral?",
        "options": [
          {
            "id": "tel14-opt1",
            "label": "Nenhuma além do fechamento",
            "isCustom": false
          },
          {
            "id": "tel14-opt2",
            "label": "Cerca elétrica",
            "isCustom": false
          },
          {
            "id": "tel14-opt3",
            "label": "Cerca elétrica + sensores infravermelhos",
            "isCustom": false
          },
          {
            "id": "tel14-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "tel15",
        "title": "Haverá Wi-Fi nas áreas comuns?",
        "options": [
          {
            "id": "tel15-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "tel15-opt2",
            "label": "Somente nas áreas de lazer",
            "isCustom": false
          },
          {
            "id": "tel15-opt3",
            "label": "Em todas as áreas comuns",
            "isCustom": false
          },
          {
            "id": "tel15-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      }
    ]
  },
  {
    "id": "spda",
    "name": "SPDA",
    "shortName": "SPDA",
    "description": "Proteção contra descargas atmosféricas (para-raios), conforme ABNT NBR 5419:2026.",
    "questions": [
      {
        "id": "spda01",
        "title": "Já existe análise de risco de SPDA para o projeto?",
        "hint": "A NBR 5419 foi revisada em 2026; análises feitas pela edição de 2015 devem ser refeitas.",
        "options": [
          {
            "id": "spda01-opt1",
            "label": "Não — o projetista elabora",
            "isCustom": false
          },
          {
            "id": "spda01-opt2",
            "label": "Sim, pela edição de 2015 (refazer)",
            "isCustom": false
          },
          {
            "id": "spda01-opt3",
            "label": "Sim, já pela edição de 2026",
            "isCustom": false
          },
          {
            "id": "spda01-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda02",
        "title": "Qual a altura aproximada da edificação?",
        "options": [
          {
            "id": "spda02-opt1",
            "label": "Até 15 m",
            "isCustom": false
          },
          {
            "id": "spda02-opt2",
            "label": "De 15 a 45 m",
            "isCustom": false
          },
          {
            "id": "spda02-opt3",
            "label": "Acima de 45 m",
            "isCustom": false
          },
          {
            "id": "spda02-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda03",
        "title": "Como é o entorno do edifício?",
        "hint": "Edifícios isolados ou mais altos que o entorno ficam mais expostos.",
        "options": [
          {
            "id": "spda03-opt1",
            "label": "Isolado ou mais alto que o entorno",
            "isCustom": false
          },
          {
            "id": "spda03-opt2",
            "label": "Cercado por edificações de altura semelhante",
            "isCustom": false
          },
          {
            "id": "spda03-opt3",
            "label": "Cercado por edificações mais altas",
            "isCustom": false
          },
          {
            "id": "spda03-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda04",
        "title": "Qual o método de captação preferido?",
        "options": [
          {
            "id": "spda04-opt1",
            "label": "Malha na cobertura (gaiola de Faraday)",
            "isCustom": false
          },
          {
            "id": "spda04-opt2",
            "label": "Mastros captores + malha",
            "isCustom": false
          },
          {
            "id": "spda04-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "spda04-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda05",
        "title": "Como serão as descidas?",
        "hint": "Usar as armaduras do concreto evita cabos na fachada, mas exige coordenação com o projeto estrutural.",
        "options": [
          {
            "id": "spda05-opt1",
            "label": "Armaduras da estrutura (descidas naturais)",
            "isCustom": false
          },
          {
            "id": "spda05-opt2",
            "label": "Cabos externos aparentes",
            "isCustom": false
          },
          {
            "id": "spda05-opt3",
            "label": "Cabos embutidos em eletroduto",
            "isCustom": false
          },
          {
            "id": "spda05-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda06",
        "title": "Elementos do SPDA podem ficar aparentes na fachada?",
        "options": [
          {
            "id": "spda06-opt1",
            "label": "Não, nada aparente",
            "isCustom": false
          },
          {
            "id": "spda06-opt2",
            "label": "Apenas em fachadas secundárias",
            "isCustom": false
          },
          {
            "id": "spda06-opt3",
            "label": "Sim, podem ficar aparentes",
            "isCustom": false
          },
          {
            "id": "spda06-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda07",
        "title": "Como será o aterramento?",
        "options": [
          {
            "id": "spda07-opt1",
            "label": "Armaduras das fundações",
            "isCustom": false
          },
          {
            "id": "spda07-opt2",
            "label": "Anel de cabo de cobre enterrado",
            "isCustom": false
          },
          {
            "id": "spda07-opt3",
            "label": "Combinação dos dois",
            "isCustom": false
          },
          {
            "id": "spda07-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda08",
        "title": "Qual o tipo de cobertura?",
        "options": [
          {
            "id": "spda08-opt1",
            "label": "Laje impermeabilizada",
            "isCustom": false
          },
          {
            "id": "spda08-opt2",
            "label": "Telhado metálico",
            "isCustom": false
          },
          {
            "id": "spda08-opt3",
            "label": "Telhado de fibrocimento ou cerâmico",
            "isCustom": false
          },
          {
            "id": "spda08-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda09",
        "title": "Quais equipamentos ficarão na cobertura?",
        "hint": "Todos os elementos metálicos precisam ser interligados ao SPDA.",
        "options": [
          {
            "id": "spda09-opt1",
            "label": "Apenas reservatório e casa de máquinas",
            "isCustom": false
          },
          {
            "id": "spda09-opt2",
            "label": "Reservatório + condensadoras de ar-condicionado",
            "isCustom": false
          },
          {
            "id": "spda09-opt3",
            "label": "Reservatório, condensadoras, placas solares e antenas",
            "isCustom": false
          },
          {
            "id": "spda09-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda10",
        "title": "A cobertura terá uso por pessoas?",
        "options": [
          {
            "id": "spda10-opt1",
            "label": "Não, apenas técnica",
            "isCustom": false
          },
          {
            "id": "spda10-opt2",
            "label": "Sim, área de lazer aberta (rooftop)",
            "isCustom": false
          },
          {
            "id": "spda10-opt3",
            "label": "Sim, com piscina",
            "isCustom": false
          },
          {
            "id": "spda10-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda11",
        "title": "Onde instalar dispositivos de proteção contra surtos (DPS)?",
        "options": [
          {
            "id": "spda11-opt1",
            "label": "Somente no quadro geral",
            "isCustom": false
          },
          {
            "id": "spda11-opt2",
            "label": "Quadro geral + quadros das áreas comuns",
            "isCustom": false
          },
          {
            "id": "spda11-opt3",
            "label": "Todos os quadros, inclusive unidades e telecom",
            "isCustom": false
          },
          {
            "id": "spda11-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda12",
        "title": "Como proteger equipamentos sensíveis (portaria, CFTV, elevadores)?",
        "options": [
          {
            "id": "spda12-opt1",
            "label": "DPS padrão",
            "isCustom": false
          },
          {
            "id": "spda12-opt2",
            "label": "DPS coordenados em cascata",
            "isCustom": false
          },
          {
            "id": "spda12-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "spda12-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda13",
        "title": "Onde ficarão as caixas de inspeção e medição?",
        "options": [
          {
            "id": "spda13-opt1",
            "label": "No piso",
            "isCustom": false
          },
          {
            "id": "spda13-opt2",
            "label": "Na parede, junto às descidas",
            "isCustom": false
          },
          {
            "id": "spda13-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "spda13-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda14",
        "title": "Qual material dos condutores?",
        "options": [
          {
            "id": "spda14-opt1",
            "label": "Cobre",
            "isCustom": false
          },
          {
            "id": "spda14-opt2",
            "label": "Alumínio",
            "isCustom": false
          },
          {
            "id": "spda14-opt3",
            "label": "Aço galvanizado",
            "isCustom": false
          },
          {
            "id": "spda14-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "spda15",
        "title": "O escopo inclui medições e laudo na obra?",
        "options": [
          {
            "id": "spda15-opt1",
            "label": "Não incluir",
            "isCustom": false
          },
          {
            "id": "spda15-opt2",
            "label": "Incluir medição de continuidade das armaduras",
            "isCustom": false
          },
          {
            "id": "spda15-opt3",
            "label": "Incluir medições + laudo final de conformidade",
            "isCustom": false
          },
          {
            "id": "spda15-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      }
    ]
  },
  {
    "id": "sdai",
    "name": "SDAI",
    "shortName": "SDAI",
    "description": "Sistema de detecção e alarme de incêndio e medidas integradas.",
    "questions": [
      {
        "id": "sdai01",
        "title": "Qual a altura da edificação para o Corpo de Bombeiros?",
        "hint": "Medida do piso de saída até o piso do último pavimento habitável.",
        "options": [
          {
            "id": "sdai01-opt1",
            "label": "Até 12 m",
            "isCustom": false
          },
          {
            "id": "sdai01-opt2",
            "label": "De 12 a 30 m",
            "isCustom": false
          },
          {
            "id": "sdai01-opt3",
            "label": "Acima de 30 m",
            "isCustom": false
          },
          {
            "id": "sdai01-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai02",
        "title": "Qual a área construída total?",
        "options": [
          {
            "id": "sdai02-opt1",
            "label": "Até 750 m²",
            "isCustom": false
          },
          {
            "id": "sdai02-opt2",
            "label": "De 750 a 5.000 m²",
            "isCustom": false
          },
          {
            "id": "sdai02-opt3",
            "label": "Acima de 5.000 m²",
            "isCustom": false
          },
          {
            "id": "sdai02-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai03",
        "title": "Qual a abrangência desejada do sistema?",
        "options": [
          {
            "id": "sdai03-opt1",
            "label": "Somente o exigido pelo bombeiro",
            "isCustom": false
          },
          {
            "id": "sdai03-opt2",
            "label": "Exigido + detecção em salas técnicas",
            "isCustom": false
          },
          {
            "id": "sdai03-opt3",
            "label": "Exigido + detecção ampliada nas áreas comuns",
            "isCustom": false
          },
          {
            "id": "sdai03-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai04",
        "title": "Qual o tipo de central de alarme?",
        "hint": "A endereçável indica o local exato do alarme.",
        "options": [
          {
            "id": "sdai04-opt1",
            "label": "Convencional (por zona)",
            "isCustom": false
          },
          {
            "id": "sdai04-opt2",
            "label": "Endereçável",
            "isCustom": false
          },
          {
            "id": "sdai04-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "sdai04-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai05",
        "title": "Haverá detectores dentro dos apartamentos?",
        "options": [
          {
            "id": "sdai05-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "sdai05-opt2",
            "label": "Detector autônomo a bateria",
            "isCustom": false
          },
          {
            "id": "sdai05-opt3",
            "label": "Detector integrado ao sistema do prédio",
            "isCustom": false
          },
          {
            "id": "sdai05-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai06",
        "title": "Onde ficarão os acionadores manuais?",
        "options": [
          {
            "id": "sdai06-opt1",
            "label": "Halls e escadas",
            "isCustom": false
          },
          {
            "id": "sdai06-opt2",
            "label": "Halls, escadas, garagem e lazer",
            "isCustom": false
          },
          {
            "id": "sdai06-opt3",
            "label": "A critério do projetista, conforme norma",
            "isCustom": false
          },
          {
            "id": "sdai06-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai07",
        "title": "Qual o tipo de avisador?",
        "options": [
          {
            "id": "sdai07-opt1",
            "label": "Sonoro",
            "isCustom": false
          },
          {
            "id": "sdai07-opt2",
            "label": "Sonoro e visual",
            "isCustom": false
          },
          {
            "id": "sdai07-opt3",
            "label": "Sonoro, visual e mensagem de voz",
            "isCustom": false
          },
          {
            "id": "sdai07-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai08",
        "title": "Onde ficará a central de alarme?",
        "options": [
          {
            "id": "sdai08-opt1",
            "label": "Na portaria",
            "isCustom": false
          },
          {
            "id": "sdai08-opt2",
            "label": "Em sala técnica, com painel repetidor na portaria",
            "isCustom": false
          },
          {
            "id": "sdai08-opt3",
            "label": "Em sala de segurança dedicada",
            "isCustom": false
          },
          {
            "id": "sdai08-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai09",
        "title": "Como será o monitoramento?",
        "options": [
          {
            "id": "sdai09-opt1",
            "label": "Somente local",
            "isCustom": false
          },
          {
            "id": "sdai09-opt2",
            "label": "Remoto, por empresa de monitoramento",
            "isCustom": false
          },
          {
            "id": "sdai09-opt3",
            "label": "Local e remoto",
            "isCustom": false
          },
          {
            "id": "sdai09-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai10",
        "title": "A escada de emergência será pressurizada?",
        "hint": "Depende da altura e das exigências do bombeiro.",
        "options": [
          {
            "id": "sdai10-opt1",
            "label": "Não exigida",
            "isCustom": false
          },
          {
            "id": "sdai10-opt2",
            "label": "Sim, integrar ao alarme",
            "isCustom": false
          },
          {
            "id": "sdai10-opt3",
            "label": "Não sei — verificar com o bombeiro",
            "isCustom": false
          },
          {
            "id": "sdai10-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai11",
        "title": "Como os elevadores responderão ao alarme?",
        "options": [
          {
            "id": "sdai11-opt1",
            "label": "Sem integração",
            "isCustom": false
          },
          {
            "id": "sdai11-opt2",
            "label": "Retorno automático ao térreo",
            "isCustom": false
          },
          {
            "id": "sdai11-opt3",
            "label": "Retorno ao térreo + elevador de emergência",
            "isCustom": false
          },
          {
            "id": "sdai11-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai12",
        "title": "Haverá detecção na garagem?",
        "options": [
          {
            "id": "sdai12-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "sdai12-opt2",
            "label": "Detectores de temperatura",
            "isCustom": false
          },
          {
            "id": "sdai12-opt3",
            "label": "Detectores de fumaça",
            "isCustom": false
          },
          {
            "id": "sdai12-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai13",
        "title": "Como será a iluminação de emergência?",
        "options": [
          {
            "id": "sdai13-opt1",
            "label": "Blocos autônomos",
            "isCustom": false
          },
          {
            "id": "sdai13-opt2",
            "label": "Sistema central com baterias",
            "isCustom": false
          },
          {
            "id": "sdai13-opt3",
            "label": "Sistema alimentado pelo gerador",
            "isCustom": false
          },
          {
            "id": "sdai13-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai14",
        "title": "Haverá chuveiros automáticos (sprinklers)?",
        "options": [
          {
            "id": "sdai14-opt1",
            "label": "Não exigidos",
            "isCustom": false
          },
          {
            "id": "sdai14-opt2",
            "label": "Sim, exigidos pelo bombeiro",
            "isCustom": false
          },
          {
            "id": "sdai14-opt3",
            "label": "Sim, por opção do empreendedor",
            "isCustom": false
          },
          {
            "id": "sdai14-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "sdai15",
        "title": "Quem consolida o projeto de segurança contra incêndio para aprovação?",
        "options": [
          {
            "id": "sdai15-opt1",
            "label": "O projetista do SDAI",
            "isCustom": false
          },
          {
            "id": "sdai15-opt2",
            "label": "Outro profissional contratado",
            "isCustom": false
          },
          {
            "id": "sdai15-opt3",
            "label": "Já existe projeto aprovado",
            "isCustom": false
          },
          {
            "id": "sdai15-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      }
    ]
  },
  {
    "id": "clim",
    "name": "Climatização",
    "shortName": "CLIM",
    "description": "Ar-condicionado, ventilação e exaustão das unidades e áreas comuns.",
    "questions": [
      {
        "id": "clim01",
        "title": "O que será entregue nas unidades?",
        "options": [
          {
            "id": "clim01-opt1",
            "label": "Somente infraestrutura (tubulação, dreno e elétrica)",
            "isCustom": false
          },
          {
            "id": "clim01-opt2",
            "label": "Infraestrutura + equipamentos em parte dos ambientes",
            "isCustom": false
          },
          {
            "id": "clim01-opt3",
            "label": "Equipamentos instalados em todos os ambientes previstos",
            "isCustom": false
          },
          {
            "id": "clim01-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim02",
        "title": "Quais ambientes serão climatizados?",
        "options": [
          {
            "id": "clim02-opt1",
            "label": "Somente suítes",
            "isCustom": false
          },
          {
            "id": "clim02-opt2",
            "label": "Todos os quartos",
            "isCustom": false
          },
          {
            "id": "clim02-opt3",
            "label": "Quartos e sala",
            "isCustom": false
          },
          {
            "id": "clim02-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim03",
        "title": "Qual o sistema nas unidades?",
        "options": [
          {
            "id": "clim03-opt1",
            "label": "Split hi-wall",
            "isCustom": false
          },
          {
            "id": "clim03-opt2",
            "label": "Multi-split (uma condensadora para vários ambientes)",
            "isCustom": false
          },
          {
            "id": "clim03-opt3",
            "label": "Dutado (built-in no forro) ou VRF",
            "isCustom": false
          },
          {
            "id": "clim03-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim04",
        "title": "Onde ficarão as condensadoras?",
        "hint": "Definir agora evita equipamentos improvisados na fachada.",
        "options": [
          {
            "id": "clim04-opt1",
            "label": "Varanda técnica ou nicho com veneziana",
            "isCustom": false
          },
          {
            "id": "clim04-opt2",
            "label": "Área comum na cobertura",
            "isCustom": false
          },
          {
            "id": "clim04-opt3",
            "label": "Na fachada, com suporte padronizado",
            "isCustom": false
          },
          {
            "id": "clim04-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim05",
        "title": "Como será o dreno do ar-condicionado?",
        "options": [
          {
            "id": "clim05-opt1",
            "label": "Prumada dedicada por gravidade",
            "isCustom": false
          },
          {
            "id": "clim05-opt2",
            "label": "Ligação ao ralo da varanda ou área de serviço",
            "isCustom": false
          },
          {
            "id": "clim05-opt3",
            "label": "Bomba de condensado",
            "isCustom": false
          },
          {
            "id": "clim05-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim06",
        "title": "Qual a capacidade-base dos aparelhos nos quartos?",
        "options": [
          {
            "id": "clim06-opt1",
            "label": "9.000 BTU/h",
            "isCustom": false
          },
          {
            "id": "clim06-opt2",
            "label": "12.000 BTU/h",
            "isCustom": false
          },
          {
            "id": "clim06-opt3",
            "label": "A critério, por cálculo de carga térmica",
            "isCustom": false
          },
          {
            "id": "clim06-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim07",
        "title": "Haverá forro rebaixado para dutos?",
        "hint": "Rebaixos reduzem o pé-direito.",
        "options": [
          {
            "id": "clim07-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "clim07-opt2",
            "label": "Somente na circulação",
            "isCustom": false
          },
          {
            "id": "clim07-opt3",
            "label": "Em todos os ambientes climatizados",
            "isCustom": false
          },
          {
            "id": "clim07-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim08",
        "title": "Como será a exaustão de banheiros sem janela?",
        "options": [
          {
            "id": "clim08-opt1",
            "label": "Exaustor individual com saída na fachada",
            "isCustom": false
          },
          {
            "id": "clim08-opt2",
            "label": "Duto coletivo vertical",
            "isCustom": false
          },
          {
            "id": "clim08-opt3",
            "label": "Projetar todos os banheiros com janela",
            "isCustom": false
          },
          {
            "id": "clim08-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim09",
        "title": "Como será a exaustão da cozinha?",
        "options": [
          {
            "id": "clim09-opt1",
            "label": "Depurador (sem saída externa)",
            "isCustom": false
          },
          {
            "id": "clim09-opt2",
            "label": "Coifa com saída na fachada",
            "isCustom": false
          },
          {
            "id": "clim09-opt3",
            "label": "Duto coletivo de exaustão",
            "isCustom": false
          },
          {
            "id": "clim09-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim10",
        "title": "Quais áreas comuns serão climatizadas?",
        "options": [
          {
            "id": "clim10-opt1",
            "label": "Portaria e salão de festas",
            "isCustom": false
          },
          {
            "id": "clim10-opt2",
            "label": "Portaria, salão, academia e espaço gourmet",
            "isCustom": false
          },
          {
            "id": "clim10-opt3",
            "label": "Todas as áreas comuns fechadas",
            "isCustom": false
          },
          {
            "id": "clim10-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim11",
        "title": "Qual o sistema das áreas comuns?",
        "options": [
          {
            "id": "clim11-opt1",
            "label": "Splits independentes",
            "isCustom": false
          },
          {
            "id": "clim11-opt2",
            "label": "VRF central",
            "isCustom": false
          },
          {
            "id": "clim11-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "clim11-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim12",
        "title": "Como será a renovação de ar nas áreas comuns?",
        "options": [
          {
            "id": "clim12-opt1",
            "label": "Natural, por janelas",
            "isCustom": false
          },
          {
            "id": "clim12-opt2",
            "label": "Mecânica nos salões e academia",
            "isCustom": false
          },
          {
            "id": "clim12-opt3",
            "label": "Mecânica com recuperação de energia",
            "isCustom": false
          },
          {
            "id": "clim12-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim13",
        "title": "Como será a ventilação da garagem?",
        "options": [
          {
            "id": "clim13-opt1",
            "label": "Natural",
            "isCustom": false
          },
          {
            "id": "clim13-opt2",
            "label": "Mecânica, com sensores de monóxido de carbono",
            "isCustom": false
          },
          {
            "id": "clim13-opt3",
            "label": "Não há garagem em subsolo",
            "isCustom": false
          },
          {
            "id": "clim13-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim14",
        "title": "Haverá piscina coberta?",
        "options": [
          {
            "id": "clim14-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "clim14-opt2",
            "label": "Sim, com ventilação",
            "isCustom": false
          },
          {
            "id": "clim14-opt3",
            "label": "Sim, com desumidificação",
            "isCustom": false
          },
          {
            "id": "clim14-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "clim15",
        "title": "Incluir plano de manutenção (PMOC) das áreas comuns?",
        "hint": "O PMOC é obrigatório por lei para sistemas de climatização de uso coletivo.",
        "options": [
          {
            "id": "clim15-opt1",
            "label": "Sim",
            "isCustom": false
          },
          {
            "id": "clim15-opt2",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "clim15-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "clim15-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      }
    ]
  },
  {
    "id": "gas",
    "name": "Gás",
    "shortName": "GÁS",
    "description": "Rede de gás combustível, medição e aparelhos.",
    "questions": [
      {
        "id": "gas01",
        "title": "Qual a fonte de gás?",
        "options": [
          {
            "id": "gas01-opt1",
            "label": "Gás natural (GN) da rede pública",
            "isCustom": false
          },
          {
            "id": "gas01-opt2",
            "label": "GLP em central própria",
            "isCustom": false
          },
          {
            "id": "gas01-opt3",
            "label": "GLP com previsão de conversão para GN",
            "isCustom": false
          },
          {
            "id": "gas01-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas02",
        "title": "Se GLP, como será a central?",
        "options": [
          {
            "id": "gas02-opt1",
            "label": "Cilindros P-45",
            "isCustom": false
          },
          {
            "id": "gas02-opt2",
            "label": "Cilindros P-190",
            "isCustom": false
          },
          {
            "id": "gas02-opt3",
            "label": "Tanque estacionário",
            "isCustom": false
          },
          {
            "id": "gas02-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas03",
        "title": "Como será a medição individual de gás?",
        "options": [
          {
            "id": "gas03-opt1",
            "label": "Medidores agrupados no térreo",
            "isCustom": false
          },
          {
            "id": "gas03-opt2",
            "label": "Medidores por andar, no hall",
            "isCustom": false
          },
          {
            "id": "gas03-opt3",
            "label": "Medição remota",
            "isCustom": false
          },
          {
            "id": "gas03-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas04",
        "title": "Quais aparelhos da cozinha usarão gás?",
        "options": [
          {
            "id": "gas04-opt1",
            "label": "Fogão ou cooktop",
            "isCustom": false
          },
          {
            "id": "gas04-opt2",
            "label": "Cooktop e forno",
            "isCustom": false
          },
          {
            "id": "gas04-opt3",
            "label": "Nenhum (cozinha elétrica)",
            "isCustom": false
          },
          {
            "id": "gas04-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas05",
        "title": "Haverá aquecedor de água a gás?",
        "options": [
          {
            "id": "gas05-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "gas05-opt2",
            "label": "Sim, na área de serviço",
            "isCustom": false
          },
          {
            "id": "gas05-opt3",
            "label": "Sim, em varanda técnica ou nicho externo",
            "isCustom": false
          },
          {
            "id": "gas05-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas06",
        "title": "Qual a vazão do aquecedor por unidade?",
        "options": [
          {
            "id": "gas06-opt1",
            "label": "15 a 20 L/min",
            "isCustom": false
          },
          {
            "id": "gas06-opt2",
            "label": "25 a 35 L/min",
            "isCustom": false
          },
          {
            "id": "gas06-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "gas06-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas07",
        "title": "Haverá ponto para secadora a gás?",
        "options": [
          {
            "id": "gas07-opt1",
            "label": "Não",
            "isCustom": false
          },
          {
            "id": "gas07-opt2",
            "label": "Sim, somente ponto de gás",
            "isCustom": false
          },
          {
            "id": "gas07-opt3",
            "label": "Sim, ponto de gás + exaustão",
            "isCustom": false
          },
          {
            "id": "gas07-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas08",
        "title": "Como será a churrasqueira da varanda?",
        "options": [
          {
            "id": "gas08-opt1",
            "label": "A carvão",
            "isCustom": false
          },
          {
            "id": "gas08-opt2",
            "label": "Elétrica",
            "isCustom": false
          },
          {
            "id": "gas08-opt3",
            "label": "A gás",
            "isCustom": false
          },
          {
            "id": "gas08-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas09",
        "title": "Quais áreas comuns usarão gás?",
        "options": [
          {
            "id": "gas09-opt1",
            "label": "Nenhuma",
            "isCustom": false
          },
          {
            "id": "gas09-opt2",
            "label": "Espaço gourmet",
            "isCustom": false
          },
          {
            "id": "gas09-opt3",
            "label": "Espaço gourmet + aquecimento de piscina ou de água central",
            "isCustom": false
          },
          {
            "id": "gas09-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas10",
        "title": "Qual material da tubulação?",
        "options": [
          {
            "id": "gas10-opt1",
            "label": "Aço galvanizado",
            "isCustom": false
          },
          {
            "id": "gas10-opt2",
            "label": "Cobre",
            "isCustom": false
          },
          {
            "id": "gas10-opt3",
            "label": "Multicamada (PEX-AL-PEX)",
            "isCustom": false
          },
          {
            "id": "gas10-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas11",
        "title": "Onde passarão as prumadas de gás?",
        "options": [
          {
            "id": "gas11-opt1",
            "label": "Em shaft ventilado",
            "isCustom": false
          },
          {
            "id": "gas11-opt2",
            "label": "Aparentes na fachada",
            "isCustom": false
          },
          {
            "id": "gas11-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "gas11-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas12",
        "title": "Quais dispositivos de segurança?",
        "options": [
          {
            "id": "gas12-opt1",
            "label": "Válvula de bloqueio por unidade",
            "isCustom": false
          },
          {
            "id": "gas12-opt2",
            "label": "Válvula + detector de vazamento",
            "isCustom": false
          },
          {
            "id": "gas12-opt3",
            "label": "Detector com válvula de corte automático",
            "isCustom": false
          },
          {
            "id": "gas12-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas13",
        "title": "Como será a ventilação permanente dos ambientes com gás?",
        "options": [
          {
            "id": "gas13-opt1",
            "label": "Janela ou veneziana",
            "isCustom": false
          },
          {
            "id": "gas13-opt2",
            "label": "Grelha em porta ou parede",
            "isCustom": false
          },
          {
            "id": "gas13-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "gas13-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas14",
        "title": "Como será a exaustão do aquecedor?",
        "options": [
          {
            "id": "gas14-opt1",
            "label": "Chaminé individual até a fachada",
            "isCustom": false
          },
          {
            "id": "gas14-opt2",
            "label": "Duto coletivo",
            "isCustom": false
          },
          {
            "id": "gas14-opt3",
            "label": "Aquecedor em área externa (sem chaminé)",
            "isCustom": false
          },
          {
            "id": "gas14-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      },
      {
        "id": "gas15",
        "title": "Qual a pressão de distribuição na prumada?",
        "options": [
          {
            "id": "gas15-opt1",
            "label": "Baixa pressão",
            "isCustom": false
          },
          {
            "id": "gas15-opt2",
            "label": "Média pressão com reguladores por andar",
            "isCustom": false
          },
          {
            "id": "gas15-opt3",
            "label": "A critério do projetista",
            "isCustom": false
          },
          {
            "id": "gas15-custom",
            "label": "Outra resposta (descreva)",
            "isCustom": true
          }
        ]
      }
    ]
  }
];
