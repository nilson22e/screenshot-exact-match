// Canonical content transcribed from the supplied Método Metabolismo 40+ brief.
export type Recipe = { code: string; slug: string; title: string; mealType: string; servings: number; ingredients: string[]; steps: string[]; lightVersionNote: string; tip: string; searchQuery: string };
export type Exercise = { code: string; slug: string; title: string; minutes: number; repsOrTime: string; steps: string[]; safetyNote: string; searchQuery: string };
export const recipes: Recipe[] = [
  {
    "code": "B01",
    "slug": "ovos-tomate-batatadoce",
    "title": "Ovos mexidos com tomate e batata-doce",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "8 ovos",
      "2 tomates",
      "1 cebola pequena",
      "1 colher de chá de óleo",
      "4 batatas-doces pequenas cozidas"
    ],
    "steps": [
      "refoga a cebola e o tomate, junta os ovos e mexe até cozerem; serve com a batata-doce"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "ovos mexidos com tomate e batata-doce."
  },
  {
    "code": "B02",
    "slug": "mandioca-ovo-cha",
    "title": "Mandioca cozida com ovo e chá",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "4 pedaços de mandioca do tamanho da palma da mão",
      "4 ovos cozidos",
      "4 bananas pequenas",
      "chá sem açúcar"
    ],
    "steps": [
      "coze a mandioca até ficar macia; serve com o ovo, a banana e o chá"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "mandioca cozida com ovo."
  },
  {
    "code": "B03",
    "slug": "bananapao-ovo",
    "title": "Banana-pão cozida com ovo",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "2 bananas-pão",
      "4 ovos",
      "chá"
    ],
    "steps": [
      "coze as bananas-pão com casca 15 a 20 minutos, descasca e corta ao meio; serve com ovo cozido ou escalfado"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "banana-pão cozida com ovo."
  },
  {
    "code": "B04",
    "slug": "papa-fuba-banana",
    "title": "Papa de fuba de milho com banana",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "8 colheres de sopa de fuba de milho",
      "4 copos americanos de água",
      "2 bananas maduras",
      "canela (opcional)"
    ],
    "steps": [
      "dissolve a fuba em água fria, leva ao lume e mexe 5 a 8 minutos até engrossar; junta a banana em rodelas. Sem açúcar"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "papa de fuba de milho com banana."
  },
  {
    "code": "B05",
    "slug": "pao-ovo-tomate",
    "title": "Pão com ovo e tomate",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "4 pães pequenos (de preferência integrais)",
      "4 ovos",
      "2 tomates",
      "1 pepino",
      "1 colher de chá de óleo"
    ],
    "steps": [
      "faz os ovos estrelados com uma gota de óleo; monta o pão com ovo, tomate e pepino"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "pão com ovo estrelado e tomate."
  },
  {
    "code": "B06",
    "slug": "batatadoce-ginguba-cha",
    "title": "Batata-doce com ginguba e chá",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "4 batatas-doces pequenas cozidas",
      "4 colheres de sopa de ginguba pilada",
      "chá"
    ],
    "steps": [
      "esmaga a batata-doce com um garfo e polvilha a ginguba"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "batata-doce cozida com ginguba pilada."
  },
  {
    "code": "B07",
    "slug": "omelete-cebola-tomate",
    "title": "Omelete de cebola e tomate",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "8 ovos",
      "1 tomate",
      "meia cebola",
      "1 colher de chá de óleo",
      "4 fatias de pão"
    ],
    "steps": [
      "bate os ovos, junta tomate e cebola picados e cozinha em frigideira tapada 3 a 4 minutos de cada lado"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "omelete de tomate e cebola."
  },
  {
    "code": "B08",
    "slug": "papaia-ginguba-ovo",
    "title": "Papaia com ginguba e ovo cozido",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "4 fatias grandes de papaia",
      "4 punhados pequenos de ginguba",
      "4 ovos cozidos",
      "chá"
    ],
    "steps": [
      "serve a papaia com o ovo e a ginguba à parte"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "papaia com ginguba."
  },
  {
    "code": "B09",
    "slug": "aveia-banana",
    "title": "Papa de aveia com banana",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "12 colheres de sopa de aveia",
      "4 copos americanos de água ou leite",
      "2 bananas",
      "canela"
    ],
    "steps": [
      "coze a aveia na água 5 minutos, mexendo; junta a banana em rodelas"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "papa de aveia com banana."
  },
  {
    "code": "B10",
    "slug": "panqueca-banana",
    "title": "Panqueca de banana e ovo",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "2 bananas maduras esmagadas",
      "4 ovos",
      "4 colheres de sopa de aveia ou fuba",
      "1 colher de chá de óleo"
    ],
    "steps": [
      "mistura tudo e frita colheradas em frigideira antiaderente, 2 minutos de cada lado"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "panqueca de banana e ovo."
  },
  {
    "code": "B11",
    "slug": "ovo-manga-pao",
    "title": "Ovo cozido com manga e pão",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "4 ovos cozidos",
      "2 mangas pequenas",
      "4 fatias de pão",
      "chá"
    ],
    "steps": [
      "serve a manga em fatias com o ovo e o pão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "manga fatiada com ovo cozido."
  },
  {
    "code": "B12",
    "slug": "feijao-ovo-pao",
    "title": "Feijão com ovo e pão",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "4 conchas de feijão cozido (podem ser sobras)",
      "1 cebola",
      "1 tomate",
      "4 ovos cozidos",
      "4 fatias de pão"
    ],
    "steps": [
      "aquece o feijão com a cebola e o tomate refogados; serve com o ovo e o pão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "feijão cozido com ovo."
  },
  {
    "code": "B13",
    "slug": "iogurte-fruta-ginguba",
    "title": "Iogurte natural com fruta e ginguba",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "4 copos de iogurte natural sem açúcar",
      "2 bananas ou 8 rodelas de papaia",
      "4 colheres de sopa de ginguba pilada"
    ],
    "steps": [
      "monta em tigela"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "iogurte natural com fruta e amendoim."
  },
  {
    "code": "B14",
    "slug": "mandioca-abacate",
    "title": "Mandioca com abacate e ovo",
    "mealType": "pequeno-almoço",
    "servings": 4,
    "ingredients": [
      "4 pedaços de mandioca cozida",
      "1 abacate",
      "sumo de 1 limão",
      "4 ovos cozidos",
      "chá"
    ],
    "steps": [
      "esmaga o abacate com limão e uma pitada de sal; serve com a mandioca e o ovo"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "abacate esmagado com mandioca."
  },
  {
    "code": "L01",
    "slug": "funge-peixe-kizaca",
    "title": "Funge com peixe grelhado e kizaca",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 bolas pequenas de funge (farinha de bombó ou de milho)",
      "4 postas médias de carapau",
      "cachucho ou corvina",
      "4 punhados grandes de kizaca (ou folhas de batata-doce)",
      "1 tomate",
      "1 cebola",
      "2 dentes de alho",
      "sumo de 1 limão",
      "1 colher de sopa de óleo"
    ],
    "steps": [
      "tempera o peixe com alho, limão e pouco sal e grelha; refoga cebola e tomate, junta a kizaca e deixa 5 a 7 minutos; serve no prato raso com metade de kizaca, um quarto de peixe e um quarto de funge"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "funge com peixe grelhado e kizaca."
  },
  {
    "code": "L02",
    "slug": "calulu-peixe-leve",
    "title": "Calulu de peixe leve",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 postas de cachucho ou corvina",
      "1 punhado de peixe seco bem demolhado (opcional)",
      "3 punhados de gimboa",
      "4 quiabos",
      "1 tomate",
      "1 cebola",
      "1 colher de sopa de óleo de palma",
      "1 gindungo (opcional)",
      "1 concha de água",
      "4 bolas pequenas de funge"
    ],
    "steps": [
      "refoga cebola e tomate, junta a água, o óleo de palma e o peixe, depois a gimboa e o quiabo; tapa e cozinha 15 a 20 minutos em lume brando. Leve: só 1 colher de sopa de óleo de palma na panela toda e mais folhas do que funge"
    ],
    "lightVersionNote": "só 1 colher de sopa de óleo de palma na panela toda e mais folhas do que funge",
    "tip": "",
    "searchQuery": "calulu de peixe com gimboa e quiabo."
  },
  {
    "code": "L03",
    "slug": "muamba-galinha-leve",
    "title": "Muamba de galinha leve",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 coxas de frango sem pele",
      "6 quiabos",
      "1 cebola",
      "2 tomates",
      "3 dentes de alho",
      "1 colher de sopa de óleo de palma",
      "1 gindungo (opcional)",
      "2 conchas de água",
      "4 bolas pequenas de funge ou 2 batatas-doces"
    ],
    "steps": [
      "tempera o frango com alho e pouco sal, refoga cebola e tomate, junta frango, óleo de palma e água; cozinha 30 minutos e junta o quiabo nos últimos 10. Leve: frango sem pele e pouco óleo de palma"
    ],
    "lightVersionNote": "frango sem pele e pouco óleo de palma",
    "tip": "",
    "searchQuery": "muamba de galinha angolana."
  },
  {
    "code": "L04",
    "slug": "caldeirada-carapau-batatadoce",
    "title": "Caldeirada de carapau com batata-doce",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 carapaus ou postas de corvina",
      "2 batatas-doces em rodelas",
      "3 tomates",
      "2 cebolas",
      "1 pimento",
      "3 dentes de alho",
      "1 colher de sopa de óleo",
      "2 conchas de água",
      "coentros"
    ],
    "steps": [
      "faz camadas na panela (cebola, batata-doce, tomate, pimento, peixe), junta óleo, alho, sal e água; tapa e cozinha 25 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "caldeirada de peixe com batata-doce."
  },
  {
    "code": "L05",
    "slug": "mufete-leve",
    "title": "Mufete leve",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 peixes pequenos ou postas grelhados",
      "1 banana-pão cozida",
      "1 pedaço de mandioca cozida",
      "1 batata-doce cozida",
      "1 concha de feijão cozido com 1 colher de chá de óleo de palma",
      "1 cebola em rodelas com sumo de limão"
    ],
    "steps": [
      "grelha o peixe e coze as farinhas; no prato raso põe o peixe, uma só fonte de farinha por pessoa, o feijão e a cebola. Leve: escolher uma só farinha por prato"
    ],
    "lightVersionNote": "escolher uma só farinha por prato",
    "tip": "",
    "searchQuery": "mufete angolano com peixe grelhado."
  },
  {
    "code": "L06",
    "slug": "feijao-kizaca-ovo",
    "title": "Feijão com kizaca e ovo cozido",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "6 conchas de feijão cozido",
      "4 punhados de kizaca",
      "1 cebola",
      "1 tomate",
      "4 ovos cozidos",
      "1 colher de sopa de óleo"
    ],
    "steps": [
      "refoga cebola e tomate, junta feijão e kizaca e deixa 10 minutos; serve com o ovo e, se quiseres, 1 bola pequena de funge"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "feijão com folhas e ovo cozido."
  },
  {
    "code": "L07",
    "slug": "arroz-feijao-couve-ovo",
    "title": "Arroz com feijão-macunde, couve e ovo",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 conchas de arroz cozido",
      "4 conchas de feijão-macunde cozido",
      "6 punhados de couve em tiras",
      "1 cebola",
      "1 tomate",
      "1 colher de sopa de óleo",
      "4 ovos cozidos"
    ],
    "steps": [
      "refoga cebola e tomate, junta a couve 5 minutos; serve arroz e feijão em quantidade moderada, a couve a ocupar metade do prato, e o ovo"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "arroz com feijão e couve refogada."
  },
  {
    "code": "L08",
    "slug": "cabrito-abobora-estufado",
    "title": "Cabrito estufado com abóbora",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "8 pedaços pequenos de cabrito sem gordura visível",
      "4 punhados de abóbora em cubos",
      "1 cebola",
      "2 tomates",
      "3 dentes de alho",
      "1 gindungo (opcional)",
      "3 conchas de água",
      "1 colher de sopa de óleo",
      "4 batatas-doces pequenas ou 4 bolas pequenas de funge"
    ],
    "steps": [
      "refoga cebola, tomate e alho, junta o cabrito e a água, cozinha tapado 45 a 60 minutos até ficar macio e junta a abóbora nos últimos 15. Leve: tirar a gordura da superfície antes de servir"
    ],
    "lightVersionNote": "tirar a gordura da superfície antes de servir",
    "tip": "",
    "searchQuery": "cabrito estufado com abóbora."
  },
  {
    "code": "L09",
    "slug": "corvina-ensopada-abobora",
    "title": "Corvina ensopada com abóbora e quiabo",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 postas de corvina",
      "4 punhados de abóbora em cubos",
      "8 quiabos",
      "2 tomates",
      "1 cebola",
      "2 dentes de alho",
      "2 conchas de água",
      "1 colher de sopa de óleo",
      "limão"
    ],
    "steps": [
      "refoga cebola, tomate e alho, junta água e abóbora; cozinha 10 minutos, junta o peixe e o quiabo e deixa 10 a 12 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "peixe ensopado com abóbora e quiabo."
  },
  {
    "code": "L10",
    "slug": "frango-grelhado-mandioca-salada",
    "title": "Frango grelhado com mandioca e salada de tomate",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 coxas de frango sem pele",
      "4 pedaços de mandioca cozida",
      "3 tomates",
      "1 cebola",
      "sumo de 1 limão",
      "2 dentes de alho",
      "1 colher de chá de óleo"
    ],
    "steps": [
      "tempera o frango com alho, limão e pouco sal e grelha ou assa até ficar bem cozido; faz a salada de tomate e cebola com limão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "frango grelhado com mandioca e salada."
  },
  {
    "code": "L11",
    "slug": "bife-batatadoce-repolho",
    "title": "Bife de vaca magra com batata-doce e salada de repolho",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 bifes pequenos de vaca magra (do tamanho da palma da mão)",
      "4 batatas-doces assadas",
      "4 punhados de repolho e cenoura ralados",
      "sumo de 1 limão",
      "1 colher de chá de óleo",
      "alho"
    ],
    "steps": [
      "tempera o bife com alho e pouco sal e grelha 3 a 4 minutos de cada lado; tempera a salada com limão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "bife grelhado com batata-doce e salada."
  },
  {
    "code": "L12",
    "slug": "muamba-ginguba-frango",
    "title": "Muamba de ginguba leve com frango",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 coxas de frango sem pele",
      "3 colheres de sopa de ginguba moída",
      "6 quiabos",
      "1 cebola",
      "2 tomates",
      "2 conchas de água",
      "1 colher de chá de óleo",
      "4 bolas pequenas de funge ou 2 batatas-doces"
    ],
    "steps": [
      "refoga cebola e tomate, junta o frango e a água, cozinha 25 minutos, mistura a ginguba e o quiabo e cozinha mais 10 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "moamba de ginguba com frango."
  },
  {
    "code": "L13",
    "slug": "arroz-legumes-frango",
    "title": "Arroz de legumes com frango desfiado",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 conchas de arroz cozido",
      "2 peitos de frango cozidos e desfiados",
      "1 cenoura",
      "1 pimento",
      "2 punhados de ervilhas",
      "1 cebola",
      "1 colher de sopa de óleo"
    ],
    "steps": [
      "refoga cebola, cenoura e pimento, junta as ervilhas, o arroz e o frango e mexe 3 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "arroz de legumes com frango."
  },
  {
    "code": "L14",
    "slug": "sardinha-mandioca-salada",
    "title": "Sardinha grelhada com mandioca e salada de pepino",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "8 sardinhas pequenas",
      "4 pedaços de mandioca cozida",
      "1 pepino",
      "2 tomates",
      "1 cebola",
      "sumo de 1 limão",
      "1 colher de chá de óleo"
    ],
    "steps": [
      "tempera as sardinhas com limão e sal e grelha; corta pepino, tomate e cebola e tempera com limão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "sardinhas grelhadas com mandioca."
  },
  {
    "code": "L15",
    "slug": "gimboa-ginguba-peixe",
    "title": "Gimboa com ginguba e peixe",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 punhados de gimboa",
      "2 colheres de sopa de ginguba pilada",
      "4 postas pequenas de peixe",
      "1 cebola",
      "1 tomate",
      "1 colher de sopa de óleo",
      "1 concha de água"
    ],
    "steps": [
      "refoga cebola e tomate, junta a água, o peixe e a gimboa e cozinha 10 minutos; mistura a ginguba e deixa 5 minutos; serve com 1 bola pequena de funge"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "gimboa com ginguba e peixe."
  },
  {
    "code": "L16",
    "slug": "omelete-legumes-bananapao",
    "title": "Omelete de legumes com banana-pão cozida",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "8 ovos",
      "1 tomate",
      "1 cenoura ralada",
      "2 punhados de couve fina",
      "1 cebola",
      "1 colher de sopa de óleo",
      "2 bananas-pão cozidas"
    ],
    "steps": [
      "refoga os legumes, junta os ovos batidos e cozinha tapado até firmar; serve com a banana-pão e salada"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "omelete de legumes com banana-pão."
  },
  {
    "code": "L17",
    "slug": "frango-estufado-vagem",
    "title": "Frango estufado com feijão-verde e cenoura",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 coxas de frango sem pele",
      "4 punhados de feijão-verde (vagem)",
      "2 cenouras",
      "1 cebola",
      "2 tomates",
      "3 conchas de água",
      "1 colher de sopa de óleo",
      "4 batatas-doces pequenas"
    ],
    "steps": [
      "refoga cebola e tomate, junta frango e água, cozinha 20 minutos, junta cenoura e vagem e cozinha mais 15"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "frango estufado com vagem e cenoura."
  },
  {
    "code": "L18",
    "slug": "esparguete-atum-legumes",
    "title": "Esparguete com atum e legumes",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 conchas de esparguete cozido (integral se houver)",
      "2 latas pequenas de atum em água",
      "3 tomates",
      "1 cebola",
      "4 punhados de couve",
      "1 colher de sopa de óleo",
      "alho"
    ],
    "steps": [
      "refoga cebola, alho e tomate, junta a couve, depois o atum e o esparguete; mistura 2 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "esparguete com atum e legumes."
  },
  {
    "code": "L19",
    "slug": "corvina-assada-legumes",
    "title": "Corvina assada com batata-doce e pimentos",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 postas de corvina",
      "2 batatas-doces em rodelas",
      "1 pimento",
      "1 cebola",
      "2 tomates",
      "1 colher de sopa de óleo",
      "sumo de 1 limão",
      "3 dentes de alho"
    ],
    "steps": [
      "põe legumes e peixe num tabuleiro com alho, limão, óleo e sal; assa 30 a 35 minutos (ou cozinha numa panela tapada em lume brando)"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "peixe assado com batata-doce e pimentos."
  },
  {
    "code": "L20",
    "slug": "sopa-grossa-feijao-abobora",
    "title": "Sopa grossa de feijão com abóbora e couve",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 conchas de feijão cozido",
      "4 punhados de abóbora",
      "4 punhados de couve",
      "1 cebola",
      "1 tomate",
      "4 conchas de água",
      "1 colher de sopa de óleo",
      "4 fatias de pão"
    ],
    "steps": [
      "refoga cebola e tomate, junta água, abóbora e feijão, cozinha 15 minutos e junta a couve nos últimos 5; serve com o pão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "sopa de feijão com abóbora e couve."
  },
  {
    "code": "L21",
    "slug": "cozido-galinha-mandioca-couve",
    "title": "Cozido leve de galinha com mandioca e couve",
    "mealType": "almoço",
    "servings": 4,
    "ingredients": [
      "4 pedaços de galinha sem pele",
      "4 pedaços de mandioca",
      "4 folhas grandes de couve",
      "1 cenoura",
      "1 cebola",
      "5 conchas de água",
      "sal"
    ],
    "steps": [
      "coze a galinha com a cebola e a água 25 minutos, junta mandioca e cenoura e cozinha 20, a couve nos últimos 5; serve com o caldo à parte"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "cozido de galinha com mandioca e couve."
  },
  {
    "code": "D01",
    "slug": "sopa-peixe-mandioca-quiabo",
    "title": "Sopa de peixe com mandioca e quiabo",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "4 postas pequenas de carapau",
      "4 pedaços pequenos de mandioca",
      "5 quiabos",
      "1 tomate",
      "1 cebola",
      "3 conchas de água",
      "1 colher de chá de óleo",
      "limão"
    ],
    "steps": [
      "coze a mandioca com a cebola na água 15 minutos, junta tomate, quiabo e peixe e cozinha 10 minutos; acerta o sal e termina com limão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "sopa de peixe com mandioca e quiabo."
  },
  {
    "code": "D02",
    "slug": "quiabo-tomate-peixe-seco",
    "title": "Quiabo estufado com tomate e peixe seco",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "12 quiabos",
      "3 tomates",
      "1 cebola",
      "1 punhado de peixe seco bem demolhado",
      "1 colher de chá de óleo",
      "1 concha de água",
      "2 batatas-doces cozidas"
    ],
    "steps": [
      "refoga cebola e tomate, junta o peixe seco, o quiabo e a água; tapa e cozinha 12 a 15 minutos; serve com a batata-doce"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "quiabo estufado com tomate."
  },
  {
    "code": "D03",
    "slug": "sopa-abobora-ginguba",
    "title": "Sopa de abóbora com ginguba",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "6 punhados de abóbora em cubos",
      "1 batata-doce pequena",
      "1 cebola",
      "2 colheres de sopa de ginguba moída",
      "5 conchas de água",
      "sal"
    ],
    "steps": [
      "coze abóbora, batata-doce e cebola na água 20 minutos, tritura, junta a ginguba e deixa ferver mais 3 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "sopa de abóbora cremosa."
  },
  {
    "code": "D04",
    "slug": "omelete-salada",
    "title": "Omelete simples com salada de tomate e pepino",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "8 ovos",
      "1 colher de chá de óleo",
      "3 tomates",
      "1 pepino",
      "1 cebola",
      "sumo de 1 limão",
      "4 fatias de pão"
    ],
    "steps": [
      "bate os ovos e cozinha em frigideira com uma gota de óleo; serve com a salada temperada com limão e o pão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "omelete com salada de tomate e pepino."
  },
  {
    "code": "D05",
    "slug": "caldo-couve-feijao",
    "title": "Caldo de couve com feijão e batata-doce",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "6 punhados de couve em tiras",
      "3 conchas de feijão cozido",
      "1 batata-doce pequena em cubos",
      "1 cebola",
      "5 conchas de água",
      "1 colher de chá de óleo"
    ],
    "steps": [
      "cozinha a batata-doce e a cebola na água 10 minutos, junta feijão e couve e cozinha mais 10 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "caldo de couve com feijão."
  },
  {
    "code": "D06",
    "slug": "feijao-macunde-peixe",
    "title": "Feijão-macunde com tomate e peixe grelhado",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "3 conchas de feijão-macunde cozido",
      "2 tomates",
      "1 cebola",
      "4 postas pequenas de peixe",
      "1 colher de chá de óleo",
      "limão"
    ],
    "steps": [
      "refoga cebola e tomate, junta o feijão e deixa 5 minutos; serve com o peixe grelhado e limão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "feijão-frade com tomate e peixe grelhado."
  },
  {
    "code": "D07",
    "slug": "batatadoce-atum-salada",
    "title": "Batata-doce assada com atum e salada",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "4 batatas-doces médias",
      "2 latas pequenas de atum em água",
      "3 tomates",
      "1 cebola",
      "1 pepino",
      "sumo de 1 limão"
    ],
    "steps": [
      "assa ou cozinha as batatas-doces; mistura o atum com cebola e limão e serve com a salada"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "batata-doce assada com atum."
  },
  {
    "code": "D08",
    "slug": "canja-galinha",
    "title": "Canja de galinha com cenoura",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "4 pedaços de galinha sem pele",
      "4 colheres de sopa de arroz",
      "2 cenouras",
      "1 cebola",
      "5 conchas de água",
      "limão",
      "sal"
    ],
    "steps": [
      "coze a galinha com cebola e cenoura 25 minutos, junta o arroz e cozinha 15; desfia a galinha e volta com ela à panela"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "canja de galinha."
  },
  {
    "code": "D09",
    "slug": "ovos-molho-tomate",
    "title": "Ovos escalfados em molho de tomate e pimento",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "8 ovos",
      "4 tomates",
      "1 pimento",
      "1 cebola",
      "2 dentes de alho",
      "1 colher de chá de óleo",
      "4 fatias de pão"
    ],
    "steps": [
      "refoga cebola, alho, pimento e tomate até fazer molho; abre covas no molho e escalfa os ovos tapado 5 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "ovos escalfados em molho de tomate."
  },
  {
    "code": "D10",
    "slug": "tortilha-couve",
    "title": "Tortilha de couve e cebola com batata-doce",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "8 ovos",
      "6 punhados de couve fina",
      "1 cebola",
      "1 colher de sopa de óleo",
      "2 batatas-doces cozidas"
    ],
    "steps": [
      "refoga a cebola e a couve, junta os ovos batidos e cozinha tapada até firmar; serve com a batata-doce"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "tortilha de couve."
  },
  {
    "code": "D11",
    "slug": "salada-feijao-atum",
    "title": "Salada de feijão com atum, tomate e cebola",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "3 conchas de feijão cozido frio",
      "2 latas pequenas de atum em água",
      "3 tomates",
      "1 cebola",
      "1 pepino",
      "sumo de 1 limão",
      "1 colher de sopa de óleo"
    ],
    "steps": [
      "mistura tudo e deixa descansar 10 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "salada de feijão com atum."
  },
  {
    "code": "D12",
    "slug": "frango-repolho",
    "title": "Salada quente de frango com repolho e cenoura",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "2 peitos de frango cozidos e desfiados",
      "6 punhados de repolho fino",
      "2 cenouras raladas",
      "1 cebola",
      "sumo de 1 limão",
      "1 colher de sopa de óleo"
    ],
    "steps": [
      "salteia a cebola, junta repolho e cenoura 3 a 4 minutos, depois o frango e o limão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "salada de frango com repolho."
  },
  {
    "code": "D13",
    "slug": "carapau-vapor-legumes",
    "title": "Carapau cozido a vapor com legumes",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "4 carapaus limpos",
      "1 cenoura",
      "4 fatias de abóbora",
      "4 folhas de couve",
      "1 cebola",
      "limão",
      "1 concha de água"
    ],
    "steps": [
      "põe os legumes no fundo da panela com a água e o peixe por cima; tapa e cozinha 15 minutos em lume brando"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "peixe cozido com legumes."
  },
  {
    "code": "D14",
    "slug": "sopa-legumes-mandioca",
    "title": "Sopa de legumes com mandioca",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "4 pedaços de mandioca",
      "1 cenoura",
      "2 punhados de abóbora",
      "4 punhados de couve",
      "1 cebola",
      "5 conchas de água",
      "1 colher de chá de óleo"
    ],
    "steps": [
      "cozinha tudo 25 minutos, com a couve a entrar nos últimos 5"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "sopa de legumes com mandioca."
  },
  {
    "code": "D15",
    "slug": "ovos-mexidos-kizaca",
    "title": "Ovos mexidos com kizaca",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "8 ovos",
      "6 punhados de kizaca",
      "1 cebola",
      "1 tomate",
      "1 colher de chá de óleo",
      "4 fatias de pão"
    ],
    "steps": [
      "refoga cebola e tomate, junta a kizaca 5 minutos, depois os ovos e mexe até cozerem"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "ovos mexidos com folhas verdes."
  },
  {
    "code": "D16",
    "slug": "caldeirada-legumes-feijao",
    "title": "Caldeirada de legumes com feijão",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "2 batatas-doces",
      "3 tomates",
      "1 cebola",
      "1 pimento",
      "2 conchas de feijão cozido",
      "2 conchas de água",
      "1 colher de sopa de óleo"
    ],
    "steps": [
      "cozinha a batata-doce com cebola, tomate, pimento e água 15 minutos e junta o feijão por mais 5"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "caldeirada de legumes com feijão."
  },
  {
    "code": "D17",
    "slug": "arroz-couve-ovo",
    "title": "Arroz de couve com ovo",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "4 conchas de arroz cozido",
      "6 punhados de couve",
      "1 cebola",
      "2 dentes de alho",
      "4 ovos",
      "1 colher de sopa de óleo"
    ],
    "steps": [
      "refoga cebola e alho, junta a couve e depois o arroz; serve com o ovo estrelado ou cozido"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "arroz de couve com ovo."
  },
  {
    "code": "D18",
    "slug": "bolinhos-peixe-assados",
    "title": "Bolinhos de peixe assados com salada",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "4 carapaus cozidos e desfiados",
      "2 batatas-doces cozidas e esmagadas",
      "1 cebola ralada",
      "salsa",
      "1 ovo",
      "3 tomates",
      "1 pepino"
    ],
    "steps": [
      "mistura peixe, batata-doce, cebola e ovo, molda 8 bolinhos e assa 20 minutos em forno médio (ou em frigideira antiaderente com uma gota de óleo); serve com a salada"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "bolinhos de peixe assados."
  },
  {
    "code": "D19",
    "slug": "papa-fuba-ovo",
    "title": "Papa salgada de fuba de milho com ovo e tomate",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "8 colheres de sopa de fuba de milho",
      "4 copos americanos de água",
      "2 tomates",
      "1 cebola",
      "4 ovos",
      "1 colher de chá de óleo"
    ],
    "steps": [
      "faz a papa como a do pequeno-almoço, sem açúcar e com uma pitada de sal; serve com o ovo e um molho de tomate e cebola refogados"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "papa de fuba de milho com ovo."
  },
  {
    "code": "D20",
    "slug": "frango-legumes-salteados",
    "title": "Frango grelhado com legumes salteados",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "4 filés finos de peito de frango",
      "1 cenoura",
      "1 pimento",
      "1 cebola",
      "4 punhados de couve",
      "1 colher de sopa de óleo",
      "limão"
    ],
    "steps": [
      "tempera e grelha o frango; salteia os legumes 5 minutos e serve juntos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "frango grelhado com legumes salteados."
  },
  {
    "code": "D21",
    "slug": "tomatada-peixe",
    "title": "Tomatada de peixe",
    "mealType": "jantar",
    "servings": 4,
    "ingredients": [
      "4 postas de peixe",
      "4 tomates",
      "2 cebolas",
      "1 pimento",
      "2 dentes de alho",
      "1 colher de sopa de óleo",
      "1 concha de água"
    ],
    "steps": [
      "refoga cebola, alho, pimento e tomate até fazer molho, junta a água e o peixe, tapa e cozinha 12 a 15 minutos"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "peixe em molho de tomate."
  },
  {
    "code": "S01",
    "slug": "ginguba-banana",
    "title": "Ginguba e banana",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "4 punhados pequenos de ginguba torrada sem sal",
      "4 bananas pequenas"
    ],
    "steps": [
      "serve juntas; um punhado é o que cabe numa mão fechada em concha"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "ginguba torrada e banana."
  },
  {
    "code": "S02",
    "slug": "manga-fatiada",
    "title": "Manga fatiada",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "2 mangas pequenas"
    ],
    "steps": [
      "descasca e corta em fatias; uma fatia grande por pessoa"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "manga fatiada."
  },
  {
    "code": "S03",
    "slug": "ovo-tomate",
    "title": "Ovo cozido com tomate",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "4 ovos cozidos",
      "2 tomates",
      "pitada de sal"
    ],
    "steps": [
      "corta o tomate em rodelas e serve com o ovo"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "ovo cozido com tomate."
  },
  {
    "code": "S04",
    "slug": "pipocas-simples",
    "title": "Pipocas simples",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "4 colheres de sopa de milho de pipoca",
      "1 colher de chá de óleo",
      "sal"
    ],
    "steps": [
      "estala numa panela tapada, sem manteiga nem açúcar"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "pipocas simples numa taça."
  },
  {
    "code": "S05",
    "slug": "laranja-ginguba",
    "title": "Laranja com ginguba",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "4 laranjas",
      "4 punhados pequenos de ginguba"
    ],
    "steps": [
      "serve a laranja descascada com a ginguba à parte"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "laranja descascada e ginguba."
  },
  {
    "code": "S06",
    "slug": "papaia-limao",
    "title": "Papaia com limão",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "4 fatias de papaia",
      "sumo de 1 limão"
    ],
    "steps": [
      "rega a papaia com o limão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "papaia com limão."
  },
  {
    "code": "S07",
    "slug": "batatadoce-assada",
    "title": "Batata-doce assada pequena",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "4 batatas-doces pequenas",
      "canela (opcional)"
    ],
    "steps": [
      "assa 30 a 40 minutos e serve morna"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "batata-doce assada."
  },
  {
    "code": "S08",
    "slug": "mandioca-cha",
    "title": "Mandioca cozida com chá",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "4 pedaços pequenos de mandioca",
      "chá sem açúcar"
    ],
    "steps": [
      "coze a mandioca até ficar macia"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "mandioca cozida."
  },
  {
    "code": "S09",
    "slug": "iogurte-banana",
    "title": "Iogurte natural com banana",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "4 copos de iogurte natural sem açúcar",
      "2 bananas"
    ],
    "steps": [
      "corta a banana por cima do iogurte"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "iogurte natural com banana."
  },
  {
    "code": "S10",
    "slug": "abacate-limao-pao",
    "title": "Abacate com limão e pão",
    "mealType": "lanche",
    "servings": 4,
    "ingredients": [
      "1 abacate",
      "sumo de 1 limão",
      "4 fatias pequenas de pão"
    ],
    "steps": [
      "esmaga o abacate com limão e uma pitada de sal e barra no pão"
    ],
    "lightVersionNote": "",
    "tip": "",
    "searchQuery": "abacate esmagado em pão."
  }
];
export const exercises: Exercise[] = [
  {
    "code": "E01",
    "slug": "marcha-no-lugar",
    "title": "Marcha no lugar",
    "minutes": 1,
    "repsOrTime": "1 a 3 minutos",
    "steps": [
      "Em pé, braços soltos; levanta um joelho de cada vez, devagar, como se andasses. Respira normalmente"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a marchar no lugar em casa."
  },
  {
    "code": "E02",
    "slug": "agachamento-cadeira",
    "title": "Sentar e levantar da cadeira",
    "minutes": 8,
    "repsOrTime": "8 a 12 vezes",
    "steps": [
      "Senta-te na borda da cadeira com os pés à largura dos ombros; levanta-te sem usar as mãos se conseguires e senta devagar"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a sentar e levantar da cadeira."
  },
  {
    "code": "E03",
    "slug": "elevacao-joelhos",
    "title": "Elevação de joelhos em pé",
    "minutes": 30,
    "repsOrTime": "30 segundos",
    "steps": [
      "Sobe cada joelho até uma altura confortável, com os braços a acompanhar; devagar, sem saltar"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a elevar os joelhos em pé."
  },
  {
    "code": "E04",
    "slug": "flexao-parede",
    "title": "Flexão na parede",
    "minutes": 8,
    "repsOrTime": "8 a 12 vezes",
    "steps": [
      "Mãos na parede à altura dos ombros, corpo em linha; dobra os cotovelos e empurra de volta"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a fazer flexão na parede."
  },
  {
    "code": "E05",
    "slug": "ponte-gluteos",
    "title": "Ponte de glúteos",
    "minutes": 8,
    "repsOrTime": "8 a 12 vezes",
    "steps": [
      "Deitada de costas numa esteira ou capulana dobrada, joelhos dobrados e pés no chão; sobe a anca, aperta as nádegas e desce devagar"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a fazer ponte de glúteos."
  },
  {
    "code": "E06",
    "slug": "prancha-joelhos",
    "title": "Prancha com joelhos apoiados",
    "minutes": 15,
    "repsOrTime": "15 a 30 segundos",
    "steps": [
      "Apoia antebraços e joelhos, corpo em linha da cabeça aos joelhos, barriga firme; respira"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a fazer prancha com joelhos apoiados."
  },
  {
    "code": "E07",
    "slug": "passo-lateral",
    "title": "Passo lateral",
    "minutes": 1,
    "repsOrTime": "1 a 2 minutos",
    "steps": [
      "Dá um passo para o lado e junta o outro pé; repete para os dois lados com os braços a ajudar"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a dar passos laterais."
  },
  {
    "code": "E08",
    "slug": "elevacao-calcanhares",
    "title": "Elevação de calcanhares",
    "minutes": 10,
    "repsOrTime": "10 a 15 vezes",
    "steps": [
      "Mão apoiada numa cadeira, sobe nas pontas dos pés e desce devagar"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a subir nas pontas dos pés junto a uma cadeira."
  },
  {
    "code": "E09",
    "slug": "remada-garrafas",
    "title": "Remada com garrafas de água",
    "minutes": 8,
    "repsOrTime": "8 a 12 vezes",
    "steps": [
      "Duas garrafas de 1,5 L, tronco ligeiramente inclinado com as costas direitas; puxa os cotovelos para trás e desce devagar"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a fazer remada com garrafas de água."
  },
  {
    "code": "E10",
    "slug": "alongamento-respiracao",
    "title": "Alongamento e respiração",
    "minutes": 3,
    "repsOrTime": "3 a 5 minutos",
    "steps": [
      "De quatro apoios, arredonda e estica as costas 6 vezes; depois senta-te e respira fundo 5 vezes, inspirando 4 segundos e expirando 6"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a alongar as costas de quatro apoios."
  },
  {
    "code": "E11",
    "slug": "elevacao-lateral-garrafas",
    "title": "Elevação lateral com garrafas",
    "minutes": 8,
    "repsOrTime": "8 a 12 vezes",
    "steps": [
      "Em pé, uma garrafa de 1 L em cada mão; levanta os braços para os lados até à altura dos ombros e desce devagar"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a levantar garrafas de água para os lados."
  },
  {
    "code": "E12",
    "slug": "afundo-apoiado",
    "title": "Afundo com apoio na cadeira",
    "minutes": 6,
    "repsOrTime": "6 a 10 vezes por perna",
    "steps": [
      "Em pé atrás de uma cadeira com a mão no encosto; dá um passo atrás, dobra os joelhos devagar e volta"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a fazer afundo apoiada numa cadeira."
  },
  {
    "code": "E13",
    "slug": "joelho-peito-sentada",
    "title": "Joelho ao peito sentada",
    "minutes": 10,
    "repsOrTime": "10 a 15 vezes",
    "steps": [
      "Sentada na borda da cadeira com as costas direitas, sobe um joelho de cada vez em direção ao peito, alternando"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher sentada a elevar o joelho."
  },
  {
    "code": "E14",
    "slug": "danca-semba-kizomba",
    "title": "Dança ao som de semba ou kizomba",
    "minutes": 5,
    "repsOrTime": "5 a 15 minutos",
    "steps": [
      "Põe a tua música e dança com passos simples, num ritmo em que consigas falar"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a dançar em casa."
  },
  {
    "code": "E15",
    "slug": "subir-degrau",
    "title": "Subir e descer um degrau",
    "minutes": 1,
    "repsOrTime": "1 a 2 minutos",
    "steps": [
      "Num degrau baixo e firme, sobe com um pé e depois o outro e desce da mesma forma, alternando o pé que começa; usa a parede ou o corrimão se precisares"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher a subir um degrau baixo."
  },
  {
    "code": "E16",
    "slug": "quatro-apoios-braco-perna",
    "title": "Braço e perna opostos de quatro apoios",
    "minutes": 6,
    "repsOrTime": "6 a 8 vezes por lado",
    "steps": [
      "Estica um braço à frente e a perna oposta para trás, segura 2 segundos e troca"
    ],
    "safetyNote": "Para se sentires dor, tontura, falta de ar ou desconforto no peito, para e fala com um médico.",
    "searchQuery": "mulher de quatro apoios a esticar braço e perna."
  }
];
export const planDays = [
  {
    "day": 1,
    "week": 1,
    "focus": "Prato equilibrado",
    "meals": {
      "B": "B01",
      "L": "L01",
      "D": "D01",
      "S": "S01"
    },
    "workout": {
      "minutes": 10,
      "items": [
        "E01",
        "E10"
      ]
    },
    "habit": "Monta o prato: metade legumes, um quarto proteína, um quarto funge ou mandioca."
  },
  {
    "day": 2,
    "week": 1,
    "focus": "Água",
    "meals": {
      "B": "B02",
      "L": "L02",
      "D": "D02",
      "S": "S02"
    },
    "workout": {
      "minutes": 10,
      "items": [
        "walk"
      ]
    },
    "habit": "Bebe 6 copos de água ao longo do dia."
  },
  {
    "day": 3,
    "week": 1,
    "focus": "Sono",
    "meals": {
      "B": "B03",
      "L": "L03",
      "D": "D03",
      "S": "S03"
    },
    "workout": {
      "minutes": 10,
      "items": [
        "E02",
        "E08",
        "E10"
      ]
    },
    "habit": "Desliga o telemóvel 30 minutos antes de dormir."
  },
  {
    "day": 4,
    "week": 1,
    "focus": "Comer devagar",
    "meals": {
      "B": "B04",
      "L": "L04",
      "D": "D04",
      "S": "S04"
    },
    "workout": {
      "minutes": 10,
      "items": [
        "E14"
      ]
    },
    "habit": "Faz uma refeição sem pressa e sem telemóvel."
  },
  {
    "day": 5,
    "week": 1,
    "focus": "Caminhar",
    "meals": {
      "B": "B05",
      "L": "L05",
      "D": "D05",
      "S": "S05"
    },
    "workout": {
      "minutes": 10,
      "items": [
        "E01",
        "E04",
        "E10"
      ]
    },
    "habit": "Caminha 10 minutos depois do almoço."
  },
  {
    "day": 6,
    "week": 1,
    "focus": "Planear compras",
    "meals": {
      "B": "B06",
      "L": "L06",
      "D": "D06",
      "S": "S06"
    },
    "workout": {
      "minutes": 10,
      "items": [
        "E07",
        "E09",
        "E10"
      ]
    },
    "habit": "Faz a lista de compras da semana seguinte."
  },
  {
    "day": 7,
    "week": 1,
    "focus": "Família à mesa",
    "meals": {
      "B": "B07",
      "L": "L07",
      "D": "D07",
      "S": "S07"
    },
    "workout": {
      "minutes": 10,
      "items": [
        "E10",
        "walk"
      ]
    },
    "habit": "Faz uma refeição sentada à mesa com a família."
  },
  {
    "day": 8,
    "week": 2,
    "focus": "Pausa de alongamento",
    "meals": {
      "B": "B08",
      "L": "L08",
      "D": "D08",
      "S": "S08"
    },
    "workout": {
      "minutes": 15,
      "items": [
        "E01",
        "E02",
        "E04",
        "E10"
      ]
    },
    "habit": "Faz 5 minutos de alongamento a meio do dia."
  },
  {
    "day": 9,
    "week": 2,
    "focus": "Proteína em cada refeição",
    "meals": {
      "B": "B09",
      "L": "L09",
      "D": "D09",
      "S": "S09"
    },
    "workout": {
      "minutes": 15,
      "items": [
        "E03",
        "E05",
        "E16",
        "E10"
      ]
    },
    "habit": "Garante peixe, frango, ovo ou feijão em cada refeição."
  },
  {
    "day": 10,
    "week": 2,
    "focus": "Menos bebidas açucaradas",
    "meals": {
      "B": "B10",
      "L": "L10",
      "D": "D10",
      "S": "S10"
    },
    "workout": {
      "minutes": 15,
      "items": [
        "walk"
      ]
    },
    "habit": "Troca um sumo de pacote ou refrigerante por água."
  },
  {
    "day": 11,
    "week": 2,
    "focus": "Hora de dormir",
    "meals": {
      "B": "B11",
      "L": "L11",
      "D": "D11",
      "S": "S01"
    },
    "workout": {
      "minutes": 15,
      "items": [
        "E07",
        "E09",
        "E06",
        "E10"
      ]
    },
    "habit": "Deita-te e acorda sempre à mesma hora."
  },
  {
    "day": 12,
    "week": 2,
    "focus": "Mais verduras",
    "meals": {
      "B": "B12",
      "L": "L12",
      "D": "D12",
      "S": "S02"
    },
    "workout": {
      "minutes": 15,
      "items": [
        "E12",
        "E05",
        "E08",
        "E10"
      ]
    },
    "habit": "Põe kizaca, gimboa, couve ou salada em duas refeições."
  },
  {
    "day": 13,
    "week": 2,
    "focus": "Lanches preparados",
    "meals": {
      "B": "B13",
      "L": "L13",
      "D": "D13",
      "S": "S03"
    },
    "workout": {
      "minutes": 15,
      "items": [
        "E14"
      ]
    },
    "habit": "Prepara lanches simples para os próximos 3 dias."
  },
  {
    "day": 14,
    "week": 2,
    "focus": "Descanso consciente",
    "meals": {
      "B": "B14",
      "L": "L14",
      "D": "D14",
      "S": "S04"
    },
    "workout": {
      "minutes": 15,
      "items": [
        "E10",
        "walk"
      ]
    },
    "habit": "Reserva 10 minutos só para ti."
  },
  {
    "day": 15,
    "week": 3,
    "focus": "Adaptar o prato",
    "meals": {
      "B": "B01",
      "L": "L15",
      "D": "D15",
      "S": "S05"
    },
    "workout": {
      "minutes": 20,
      "items": [
        "E01",
        "E02",
        "E04",
        "E05",
        "E10"
      ]
    },
    "habit": "Escolhe um prato da tua cultura e adapta a porção."
  },
  {
    "day": 16,
    "week": 3,
    "focus": "Porções com a mão",
    "meals": {
      "B": "B02",
      "L": "L16",
      "D": "D16",
      "S": "S06"
    },
    "workout": {
      "minutes": 20,
      "items": [
        "E15",
        "E09",
        "E11",
        "E10"
      ]
    },
    "habit": "Usa a mão e a concha para medir a porção."
  },
  {
    "day": 17,
    "week": 3,
    "focus": "Caminhar com os filhos",
    "meals": {
      "B": "B03",
      "L": "L17",
      "D": "D17",
      "S": "S07"
    },
    "workout": {
      "minutes": 20,
      "items": [
        "walk"
      ]
    },
    "habit": "Faz uma caminhada de 20 minutos com os filhos ou o marido."
  },
  {
    "day": 18,
    "week": 3,
    "focus": "Menos sal e cubos",
    "meals": {
      "B": "B04",
      "L": "L18",
      "D": "D18",
      "S": "S08"
    },
    "workout": {
      "minutes": 20,
      "items": [
        "E03",
        "E12",
        "E05",
        "E08",
        "E10"
      ]
    },
    "habit": "Tempera com alho, limão e gindungo antes de usar cubos."
  },
  {
    "day": 19,
    "week": 3,
    "focus": "Rever o que funcionou",
    "meals": {
      "B": "B05",
      "L": "L19",
      "D": "D19",
      "S": "S09"
    },
    "workout": {
      "minutes": 20,
      "items": [
        "E07",
        "E13",
        "E06",
        "E16",
        "E10"
      ]
    },
    "habit": "Escreve 3 coisas que gostaste de mudar."
  },
  {
    "day": 20,
    "week": 3,
    "focus": "Plano de continuidade",
    "meals": {
      "B": "B06",
      "L": "L20",
      "D": "D20",
      "S": "S10"
    },
    "workout": {
      "minutes": 20,
      "items": [
        "E14",
        "E02",
        "E04",
        "E10"
      ]
    },
    "habit": "Escolhe 3 hábitos para manter nas próximas semanas."
  },
  {
    "day": 21,
    "week": 3,
    "focus": "Celebrar sem culpa",
    "meals": {
      "B": "B07",
      "L": "L21",
      "D": "D21",
      "S": "S01"
    },
    "workout": {
      "minutes": 20,
      "items": [
        "E10",
        "walk"
      ]
    },
    "habit": "Celebra o caminho com uma refeição em família."
  }
];
export const photoManifest = [
  {
    "id": "m-B01",
    "kind": "recipe",
    "code": "B01",
    "slug": "ovos-tomate-batatadoce",
    "altTextPt": "Ovos mexidos com tomate e batata-doce",
    "searchQueryPt": "ovos mexidos com tomate e batata-doce.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B02",
    "kind": "recipe",
    "code": "B02",
    "slug": "mandioca-ovo-cha",
    "altTextPt": "Mandioca cozida com ovo e chá",
    "searchQueryPt": "mandioca cozida com ovo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B03",
    "kind": "recipe",
    "code": "B03",
    "slug": "bananapao-ovo",
    "altTextPt": "Banana-pão cozida com ovo",
    "searchQueryPt": "banana-pão cozida com ovo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B04",
    "kind": "recipe",
    "code": "B04",
    "slug": "papa-fuba-banana",
    "altTextPt": "Papa de fuba de milho com banana",
    "searchQueryPt": "papa de fuba de milho com banana.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B05",
    "kind": "recipe",
    "code": "B05",
    "slug": "pao-ovo-tomate",
    "altTextPt": "Pão com ovo e tomate",
    "searchQueryPt": "pão com ovo estrelado e tomate.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B06",
    "kind": "recipe",
    "code": "B06",
    "slug": "batatadoce-ginguba-cha",
    "altTextPt": "Batata-doce com ginguba e chá",
    "searchQueryPt": "batata-doce cozida com ginguba pilada.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B07",
    "kind": "recipe",
    "code": "B07",
    "slug": "omelete-cebola-tomate",
    "altTextPt": "Omelete de cebola e tomate",
    "searchQueryPt": "omelete de tomate e cebola.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B08",
    "kind": "recipe",
    "code": "B08",
    "slug": "papaia-ginguba-ovo",
    "altTextPt": "Papaia com ginguba e ovo cozido",
    "searchQueryPt": "papaia com ginguba.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B09",
    "kind": "recipe",
    "code": "B09",
    "slug": "aveia-banana",
    "altTextPt": "Papa de aveia com banana",
    "searchQueryPt": "papa de aveia com banana.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B10",
    "kind": "recipe",
    "code": "B10",
    "slug": "panqueca-banana",
    "altTextPt": "Panqueca de banana e ovo",
    "searchQueryPt": "panqueca de banana e ovo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B11",
    "kind": "recipe",
    "code": "B11",
    "slug": "ovo-manga-pao",
    "altTextPt": "Ovo cozido com manga e pão",
    "searchQueryPt": "manga fatiada com ovo cozido.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B12",
    "kind": "recipe",
    "code": "B12",
    "slug": "feijao-ovo-pao",
    "altTextPt": "Feijão com ovo e pão",
    "searchQueryPt": "feijão cozido com ovo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B13",
    "kind": "recipe",
    "code": "B13",
    "slug": "iogurte-fruta-ginguba",
    "altTextPt": "Iogurte natural com fruta e ginguba",
    "searchQueryPt": "iogurte natural com fruta e amendoim.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-B14",
    "kind": "recipe",
    "code": "B14",
    "slug": "mandioca-abacate",
    "altTextPt": "Mandioca com abacate e ovo",
    "searchQueryPt": "abacate esmagado com mandioca.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L01",
    "kind": "recipe",
    "code": "L01",
    "slug": "funge-peixe-kizaca",
    "altTextPt": "Funge com peixe grelhado e kizaca",
    "searchQueryPt": "funge com peixe grelhado e kizaca.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L02",
    "kind": "recipe",
    "code": "L02",
    "slug": "calulu-peixe-leve",
    "altTextPt": "Calulu de peixe leve",
    "searchQueryPt": "calulu de peixe com gimboa e quiabo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L03",
    "kind": "recipe",
    "code": "L03",
    "slug": "muamba-galinha-leve",
    "altTextPt": "Muamba de galinha leve",
    "searchQueryPt": "muamba de galinha angolana.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L04",
    "kind": "recipe",
    "code": "L04",
    "slug": "caldeirada-carapau-batatadoce",
    "altTextPt": "Caldeirada de carapau com batata-doce",
    "searchQueryPt": "caldeirada de peixe com batata-doce.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L05",
    "kind": "recipe",
    "code": "L05",
    "slug": "mufete-leve",
    "altTextPt": "Mufete leve",
    "searchQueryPt": "mufete angolano com peixe grelhado.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L06",
    "kind": "recipe",
    "code": "L06",
    "slug": "feijao-kizaca-ovo",
    "altTextPt": "Feijão com kizaca e ovo cozido",
    "searchQueryPt": "feijão com folhas e ovo cozido.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L07",
    "kind": "recipe",
    "code": "L07",
    "slug": "arroz-feijao-couve-ovo",
    "altTextPt": "Arroz com feijão-macunde, couve e ovo",
    "searchQueryPt": "arroz com feijão e couve refogada.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L08",
    "kind": "recipe",
    "code": "L08",
    "slug": "cabrito-abobora-estufado",
    "altTextPt": "Cabrito estufado com abóbora",
    "searchQueryPt": "cabrito estufado com abóbora.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L09",
    "kind": "recipe",
    "code": "L09",
    "slug": "corvina-ensopada-abobora",
    "altTextPt": "Corvina ensopada com abóbora e quiabo",
    "searchQueryPt": "peixe ensopado com abóbora e quiabo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L10",
    "kind": "recipe",
    "code": "L10",
    "slug": "frango-grelhado-mandioca-salada",
    "altTextPt": "Frango grelhado com mandioca e salada de tomate",
    "searchQueryPt": "frango grelhado com mandioca e salada.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L11",
    "kind": "recipe",
    "code": "L11",
    "slug": "bife-batatadoce-repolho",
    "altTextPt": "Bife de vaca magra com batata-doce e salada de repolho",
    "searchQueryPt": "bife grelhado com batata-doce e salada.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L12",
    "kind": "recipe",
    "code": "L12",
    "slug": "muamba-ginguba-frango",
    "altTextPt": "Muamba de ginguba leve com frango",
    "searchQueryPt": "moamba de ginguba com frango.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L13",
    "kind": "recipe",
    "code": "L13",
    "slug": "arroz-legumes-frango",
    "altTextPt": "Arroz de legumes com frango desfiado",
    "searchQueryPt": "arroz de legumes com frango.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L14",
    "kind": "recipe",
    "code": "L14",
    "slug": "sardinha-mandioca-salada",
    "altTextPt": "Sardinha grelhada com mandioca e salada de pepino",
    "searchQueryPt": "sardinhas grelhadas com mandioca.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L15",
    "kind": "recipe",
    "code": "L15",
    "slug": "gimboa-ginguba-peixe",
    "altTextPt": "Gimboa com ginguba e peixe",
    "searchQueryPt": "gimboa com ginguba e peixe.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L16",
    "kind": "recipe",
    "code": "L16",
    "slug": "omelete-legumes-bananapao",
    "altTextPt": "Omelete de legumes com banana-pão cozida",
    "searchQueryPt": "omelete de legumes com banana-pão.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L17",
    "kind": "recipe",
    "code": "L17",
    "slug": "frango-estufado-vagem",
    "altTextPt": "Frango estufado com feijão-verde e cenoura",
    "searchQueryPt": "frango estufado com vagem e cenoura.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L18",
    "kind": "recipe",
    "code": "L18",
    "slug": "esparguete-atum-legumes",
    "altTextPt": "Esparguete com atum e legumes",
    "searchQueryPt": "esparguete com atum e legumes.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L19",
    "kind": "recipe",
    "code": "L19",
    "slug": "corvina-assada-legumes",
    "altTextPt": "Corvina assada com batata-doce e pimentos",
    "searchQueryPt": "peixe assado com batata-doce e pimentos.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L20",
    "kind": "recipe",
    "code": "L20",
    "slug": "sopa-grossa-feijao-abobora",
    "altTextPt": "Sopa grossa de feijão com abóbora e couve",
    "searchQueryPt": "sopa de feijão com abóbora e couve.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-L21",
    "kind": "recipe",
    "code": "L21",
    "slug": "cozido-galinha-mandioca-couve",
    "altTextPt": "Cozido leve de galinha com mandioca e couve",
    "searchQueryPt": "cozido de galinha com mandioca e couve.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D01",
    "kind": "recipe",
    "code": "D01",
    "slug": "sopa-peixe-mandioca-quiabo",
    "altTextPt": "Sopa de peixe com mandioca e quiabo",
    "searchQueryPt": "sopa de peixe com mandioca e quiabo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D02",
    "kind": "recipe",
    "code": "D02",
    "slug": "quiabo-tomate-peixe-seco",
    "altTextPt": "Quiabo estufado com tomate e peixe seco",
    "searchQueryPt": "quiabo estufado com tomate.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D03",
    "kind": "recipe",
    "code": "D03",
    "slug": "sopa-abobora-ginguba",
    "altTextPt": "Sopa de abóbora com ginguba",
    "searchQueryPt": "sopa de abóbora cremosa.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D04",
    "kind": "recipe",
    "code": "D04",
    "slug": "omelete-salada",
    "altTextPt": "Omelete simples com salada de tomate e pepino",
    "searchQueryPt": "omelete com salada de tomate e pepino.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D05",
    "kind": "recipe",
    "code": "D05",
    "slug": "caldo-couve-feijao",
    "altTextPt": "Caldo de couve com feijão e batata-doce",
    "searchQueryPt": "caldo de couve com feijão.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D06",
    "kind": "recipe",
    "code": "D06",
    "slug": "feijao-macunde-peixe",
    "altTextPt": "Feijão-macunde com tomate e peixe grelhado",
    "searchQueryPt": "feijão-frade com tomate e peixe grelhado.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D07",
    "kind": "recipe",
    "code": "D07",
    "slug": "batatadoce-atum-salada",
    "altTextPt": "Batata-doce assada com atum e salada",
    "searchQueryPt": "batata-doce assada com atum.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D08",
    "kind": "recipe",
    "code": "D08",
    "slug": "canja-galinha",
    "altTextPt": "Canja de galinha com cenoura",
    "searchQueryPt": "canja de galinha.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D09",
    "kind": "recipe",
    "code": "D09",
    "slug": "ovos-molho-tomate",
    "altTextPt": "Ovos escalfados em molho de tomate e pimento",
    "searchQueryPt": "ovos escalfados em molho de tomate.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D10",
    "kind": "recipe",
    "code": "D10",
    "slug": "tortilha-couve",
    "altTextPt": "Tortilha de couve e cebola com batata-doce",
    "searchQueryPt": "tortilha de couve.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D11",
    "kind": "recipe",
    "code": "D11",
    "slug": "salada-feijao-atum",
    "altTextPt": "Salada de feijão com atum, tomate e cebola",
    "searchQueryPt": "salada de feijão com atum.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D12",
    "kind": "recipe",
    "code": "D12",
    "slug": "frango-repolho",
    "altTextPt": "Salada quente de frango com repolho e cenoura",
    "searchQueryPt": "salada de frango com repolho.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D13",
    "kind": "recipe",
    "code": "D13",
    "slug": "carapau-vapor-legumes",
    "altTextPt": "Carapau cozido a vapor com legumes",
    "searchQueryPt": "peixe cozido com legumes.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D14",
    "kind": "recipe",
    "code": "D14",
    "slug": "sopa-legumes-mandioca",
    "altTextPt": "Sopa de legumes com mandioca",
    "searchQueryPt": "sopa de legumes com mandioca.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D15",
    "kind": "recipe",
    "code": "D15",
    "slug": "ovos-mexidos-kizaca",
    "altTextPt": "Ovos mexidos com kizaca",
    "searchQueryPt": "ovos mexidos com folhas verdes.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D16",
    "kind": "recipe",
    "code": "D16",
    "slug": "caldeirada-legumes-feijao",
    "altTextPt": "Caldeirada de legumes com feijão",
    "searchQueryPt": "caldeirada de legumes com feijão.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D17",
    "kind": "recipe",
    "code": "D17",
    "slug": "arroz-couve-ovo",
    "altTextPt": "Arroz de couve com ovo",
    "searchQueryPt": "arroz de couve com ovo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D18",
    "kind": "recipe",
    "code": "D18",
    "slug": "bolinhos-peixe-assados",
    "altTextPt": "Bolinhos de peixe assados com salada",
    "searchQueryPt": "bolinhos de peixe assados.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D19",
    "kind": "recipe",
    "code": "D19",
    "slug": "papa-fuba-ovo",
    "altTextPt": "Papa salgada de fuba de milho com ovo e tomate",
    "searchQueryPt": "papa de fuba de milho com ovo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D20",
    "kind": "recipe",
    "code": "D20",
    "slug": "frango-legumes-salteados",
    "altTextPt": "Frango grelhado com legumes salteados",
    "searchQueryPt": "frango grelhado com legumes salteados.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-D21",
    "kind": "recipe",
    "code": "D21",
    "slug": "tomatada-peixe",
    "altTextPt": "Tomatada de peixe",
    "searchQueryPt": "peixe em molho de tomate.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S01",
    "kind": "recipe",
    "code": "S01",
    "slug": "ginguba-banana",
    "altTextPt": "Ginguba e banana",
    "searchQueryPt": "ginguba torrada e banana.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S02",
    "kind": "recipe",
    "code": "S02",
    "slug": "manga-fatiada",
    "altTextPt": "Manga fatiada",
    "searchQueryPt": "manga fatiada.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S03",
    "kind": "recipe",
    "code": "S03",
    "slug": "ovo-tomate",
    "altTextPt": "Ovo cozido com tomate",
    "searchQueryPt": "ovo cozido com tomate.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S04",
    "kind": "recipe",
    "code": "S04",
    "slug": "pipocas-simples",
    "altTextPt": "Pipocas simples",
    "searchQueryPt": "pipocas simples numa taça.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S05",
    "kind": "recipe",
    "code": "S05",
    "slug": "laranja-ginguba",
    "altTextPt": "Laranja com ginguba",
    "searchQueryPt": "laranja descascada e ginguba.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S06",
    "kind": "recipe",
    "code": "S06",
    "slug": "papaia-limao",
    "altTextPt": "Papaia com limão",
    "searchQueryPt": "papaia com limão.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S07",
    "kind": "recipe",
    "code": "S07",
    "slug": "batatadoce-assada",
    "altTextPt": "Batata-doce assada pequena",
    "searchQueryPt": "batata-doce assada.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S08",
    "kind": "recipe",
    "code": "S08",
    "slug": "mandioca-cha",
    "altTextPt": "Mandioca cozida com chá",
    "searchQueryPt": "mandioca cozida.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S09",
    "kind": "recipe",
    "code": "S09",
    "slug": "iogurte-banana",
    "altTextPt": "Iogurte natural com banana",
    "searchQueryPt": "iogurte natural com banana.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-S10",
    "kind": "recipe",
    "code": "S10",
    "slug": "abacate-limao-pao",
    "altTextPt": "Abacate com limão e pão",
    "searchQueryPt": "abacate esmagado em pão.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E01",
    "kind": "exercise",
    "code": "E01",
    "slug": "marcha-no-lugar",
    "altTextPt": "Marcha no lugar",
    "searchQueryPt": "mulher a marchar no lugar em casa.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E02",
    "kind": "exercise",
    "code": "E02",
    "slug": "agachamento-cadeira",
    "altTextPt": "Sentar e levantar da cadeira",
    "searchQueryPt": "mulher a sentar e levantar da cadeira.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E03",
    "kind": "exercise",
    "code": "E03",
    "slug": "elevacao-joelhos",
    "altTextPt": "Elevação de joelhos em pé",
    "searchQueryPt": "mulher a elevar os joelhos em pé.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E04",
    "kind": "exercise",
    "code": "E04",
    "slug": "flexao-parede",
    "altTextPt": "Flexão na parede",
    "searchQueryPt": "mulher a fazer flexão na parede.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E05",
    "kind": "exercise",
    "code": "E05",
    "slug": "ponte-gluteos",
    "altTextPt": "Ponte de glúteos",
    "searchQueryPt": "mulher a fazer ponte de glúteos.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E06",
    "kind": "exercise",
    "code": "E06",
    "slug": "prancha-joelhos",
    "altTextPt": "Prancha com joelhos apoiados",
    "searchQueryPt": "mulher a fazer prancha com joelhos apoiados.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E07",
    "kind": "exercise",
    "code": "E07",
    "slug": "passo-lateral",
    "altTextPt": "Passo lateral",
    "searchQueryPt": "mulher a dar passos laterais.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E08",
    "kind": "exercise",
    "code": "E08",
    "slug": "elevacao-calcanhares",
    "altTextPt": "Elevação de calcanhares",
    "searchQueryPt": "mulher a subir nas pontas dos pés junto a uma cadeira.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E09",
    "kind": "exercise",
    "code": "E09",
    "slug": "remada-garrafas",
    "altTextPt": "Remada com garrafas de água",
    "searchQueryPt": "mulher a fazer remada com garrafas de água.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E10",
    "kind": "exercise",
    "code": "E10",
    "slug": "alongamento-respiracao",
    "altTextPt": "Alongamento e respiração",
    "searchQueryPt": "mulher a alongar as costas de quatro apoios.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E11",
    "kind": "exercise",
    "code": "E11",
    "slug": "elevacao-lateral-garrafas",
    "altTextPt": "Elevação lateral com garrafas",
    "searchQueryPt": "mulher a levantar garrafas de água para os lados.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E12",
    "kind": "exercise",
    "code": "E12",
    "slug": "afundo-apoiado",
    "altTextPt": "Afundo com apoio na cadeira",
    "searchQueryPt": "mulher a fazer afundo apoiada numa cadeira.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E13",
    "kind": "exercise",
    "code": "E13",
    "slug": "joelho-peito-sentada",
    "altTextPt": "Joelho ao peito sentada",
    "searchQueryPt": "mulher sentada a elevar o joelho.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E14",
    "kind": "exercise",
    "code": "E14",
    "slug": "danca-semba-kizomba",
    "altTextPt": "Dança ao som de semba ou kizomba",
    "searchQueryPt": "mulher a dançar em casa.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E15",
    "kind": "exercise",
    "code": "E15",
    "slug": "subir-degrau",
    "altTextPt": "Subir e descer um degrau",
    "searchQueryPt": "mulher a subir um degrau baixo.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  },
  {
    "id": "m-E16",
    "kind": "exercise",
    "code": "E16",
    "slug": "quatro-apoios-braco-perna",
    "altTextPt": "Braço e perna opostos de quatro apoios",
    "searchQueryPt": "mulher de quatro apoios a esticar braço e perna.",
    "imagePath": null,
    "sourcePage": null,
    "license": null,
    "author": null,
    "attributionText": null,
    "status": "missing"
  }
];
export const shoppingCatalog = [
  {
    "id": "s01",
    "category": "Peixe e carne",
    "name": "carapau, cachucho, corvina, sardinha",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": "carapau ou chicharro"
  },
  {
    "id": "s01",
    "category": "Peixe e carne",
    "name": "peixe seco",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": "omitir"
  },
  {
    "id": "s01",
    "category": "Peixe e carne",
    "name": "atum em lata em água",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s01",
    "category": "Peixe e carne",
    "name": "frango, coxas e peito",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": "ovos e feijão"
  },
  {
    "id": "s01",
    "category": "Peixe e carne",
    "name": "cabrito",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": "frango"
  },
  {
    "id": "s01",
    "category": "Peixe e carne",
    "name": "carne de vaca magra",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s02",
    "category": "Ovos e leguminosas",
    "name": "ovos",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s02",
    "category": "Ovos e leguminosas",
    "name": "feijão",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": "feijão-macunde"
  },
  {
    "id": "s02",
    "category": "Ovos e leguminosas",
    "name": "ginguba sem sal",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s03",
    "category": "Tubérculos e farinhas",
    "name": "mandioca",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s03",
    "category": "Tubérculos e farinhas",
    "name": "batata-doce",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s03",
    "category": "Tubérculos e farinhas",
    "name": "banana-pão",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s03",
    "category": "Tubérculos e farinhas",
    "name": "farinha de bombó e fuba de milho",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s03",
    "category": "Tubérculos e farinhas",
    "name": "arroz",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s03",
    "category": "Tubérculos e farinhas",
    "name": "esparguete",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s03",
    "category": "Tubérculos e farinhas",
    "name": "aveia",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s03",
    "category": "Tubérculos e farinhas",
    "name": "pão",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "kizaca e gimboa",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": "folhas de batata-doce ou de abóbora"
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "couve",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "repolho",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "quiabo",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "abóbora",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "feijão-verde",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "cenoura",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "pimento",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "tomate",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "cebola",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "alho",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "pepino",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s04",
    "category": "Verduras e legumes",
    "name": "ervilhas",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s05",
    "category": "Frutas",
    "name": "banana",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s05",
    "category": "Frutas",
    "name": "papaia",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s05",
    "category": "Frutas",
    "name": "manga",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s05",
    "category": "Frutas",
    "name": "laranja",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s05",
    "category": "Frutas",
    "name": "abacate",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s05",
    "category": "Frutas",
    "name": "limão",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": "fruta da época mais barata"
  },
  {
    "id": "s06",
    "category": "Despensa",
    "name": "óleo vegetal",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s06",
    "category": "Despensa",
    "name": "óleo de palma",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s06",
    "category": "Despensa",
    "name": "gindungo",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s06",
    "category": "Despensa",
    "name": "coentros e salsa",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s06",
    "category": "Despensa",
    "name": "canela",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s06",
    "category": "Despensa",
    "name": "milho de pipoca",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s06",
    "category": "Despensa",
    "name": "iogurte natural sem açúcar",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  },
  {
    "id": "s06",
    "category": "Despensa",
    "name": "chá simples",
    "weeklyQuantity": "",
    "priceKz": null,
    "cheapAlternative": ""
  }
];
export const partyTips = [
  "Antes de sair: come um lanche pequeno (banana com ginguba) para não chegares com muita fome.",
  "Monta o prato primeiro com verdura e proteína, depois acrescenta o funge ou o arroz numa porção do tamanho de um punho.",
  "Escolhe o que mais gostas e saboreia devagar; não precisas de provar tudo.",
  "Bebe água entre bebidas e escolhe porções pequenas de sumo ou refrigerante.",
  "Se te oferecerem repetição, podes dizer: Estava ótimo, obrigada, já estou satisfeita.",
  "Não te castigues no dia seguinte. Volta ao teu prato normal na refeição seguinte, sem saltar refeições.",
  "Leva um prato teu para o convívio (feijão com kizaca, salada, peixe grelhado).",
  "Mexe-te em família: uma caminhada curta depois da refeição, com as crianças.",
  "Em cerimónias e almoços longos (casamentos, aniversários, óbitos), serve-te uma vez com o prato montado e pausa antes de decidir sobre repetir.",
  "Dança: se houver música, dançar também conta como movimento."
];
export const disclaimer = "Aviso importante: Este conteúdo é educativo e informativo. Não substitui o acompanhamento de um médico ou nutricionista. Antes de mudares a alimentação ou começares exercício, fala com um profissional de saúde, sobretudo se tens hipertensão, diabetes, problemas cardíacos, estás grávida ou tomas medicação. Os resultados variam de pessoa para pessoa e não são garantidos.";
