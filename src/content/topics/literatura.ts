import { type Topic } from './types'

export const literatura: Topic[] = [
{ id: 'lit-colonial', subject: 'Literatura', area: 'Escolas literárias', title: 'Quinhentismo, Barroco e Arcadismo', level: 'Básico',
  learn: [
    { h: 'Quinhentismo (século XVI)', p: ['Literatura de informação e de catequese sobre o Brasil recém-colonizado. A Carta de Pero Vaz de Caminha (1500) descreve a terra e os indígenas com olhar europeu e interesse econômico e religioso. O padre José de Anchieta escreveu poemas e peças para catequizar os indígenas.'] },
    { h: 'Barroco (século XVII)', p: ['Expressa o conflito entre o espiritual e o material, a fé e o prazer, típico da Contrarreforma. Linguagem rebuscada, cheia de antíteses, paradoxos e jogos de palavras. Cultismo: jogo de palavras e imagens; conceptismo: jogo de ideias e argumentos.', 'Gregório de Matos, o "Boca do Inferno", fez poesia lírica, religiosa e satírica, criticando a sociedade baiana. Padre Antônio Vieira escreveu sermões argumentativos, como o Sermão da Sexagésima.'] },
    { h: 'Arcadismo (século XVIII)', p: ['Reação ao exagero barroco: busca da simplicidade, do equilíbrio e da razão (Iluminismo). Temas: vida no campo (bucolismo), fugere urbem ("fugir da cidade"), carpe diem ("aproveite o dia") e o pastor idealizado. Poetas assinavam com pseudônimos de pastores.', 'Tomás Antônio Gonzaga (Marília de Dirceu) e Cláudio Manuel da Costa, ambos envolvidos na Inconfidência Mineira. Basílio da Gama (O Uraguai) e Santa Rita Durão (Caramuru) fizeram épicos com temática brasileira.'] }],
  examples: [
    { q: 'Um poema cheio de antíteses entre luz e sombra, pecado e perdão, é provavelmente de qual escola?', steps: ['Antítese e conflito espiritual são marcas do Barroco.', 'Resposta: Barroco.'] }],
  summary: ['Quinhentismo: informação (Caminha) e catequese (Anchieta).', 'Barroco: conflito fé × prazer, antíteses, Gregório de Matos e Vieira.', 'Arcadismo: simplicidade, bucolismo, carpe diem, Gonzaga.'],
  mistakes: ['Confundir o bucolismo árcade com o nacionalismo romântico.', 'Achar que a Carta de Caminha é literatura de ficção.'],
  formulas: [],
  quiz: [
    { q: 'A linguagem rebuscada, com antíteses e paradoxos, e o conflito entre fé e prazer caracterizam o:', options: ['Arcadismo', 'Barroco', 'Romantismo', 'Realismo'], answer: 1, why: 'São marcas do Barroco do século XVII.' },
    { q: 'Os temas "fugere urbem" e "carpe diem" e a vida pastoril são típicos do:', options: ['Barroco', 'Arcadismo', 'Modernismo', 'Naturalismo'], answer: 1, why: 'O Arcadismo valorizava o campo e a simplicidade.' },
    { q: 'O poeta conhecido como "Boca do Inferno" por suas sátiras é:', options: ['Gregório de Matos', 'Tomás Antônio Gonzaga', 'José de Alencar', 'Olavo Bilac'], answer: 0, why: 'Ele satirizava a sociedade baiana do século XVII.' },
    { q: 'A Carta de Pero Vaz de Caminha pertence à literatura:', options: ['de catequese', 'de informação', 'árcade', 'barroca'], answer: 1, why: 'Ela informa o rei sobre a nova terra.' }] },
{ id: 'lit-romantismo', subject: 'Literatura', area: 'Escolas literárias', title: 'Romantismo', level: 'Médio',
  learn: [
    { h: 'Contexto e características', p: ['Surge após a Independência (1822), quando o Brasil busca uma identidade nacional. Valoriza a emoção, a subjetividade, o nacionalismo, a natureza exuberante, o amor idealizado e a mulher pura e inatingível. Marco inicial: Suspiros Poéticos e Saudades, de Gonçalves de Magalhães (1836).'] },
    { h: 'As três gerações da poesia', p: ['1ª geração (indianista e nacionalista): o indígena como herói nacional. Gonçalves Dias, autor de "Canção do Exílio" e "I-Juca Pirama".', '2ª geração (ultrarromântica, "mal do século"): pessimismo, tédio, amor e morte. Álvares de Azevedo e Casimiro de Abreu.', '3ª geração (condoreira): poesia social e abolicionista, com tom grandioso. Castro Alves, autor de "O Navio Negreiro", o "poeta dos escravos".'] },
    { h: 'A prosa romântica', p: ['José de Alencar quis retratar todo o Brasil: romances indianistas (Iracema, O Guarani), urbanos (Senhora, Lucíola), regionalistas (O Sertanejo) e históricos. Joaquim Manuel de Macedo escreveu A Moreninha, e Manuel Antônio de Almeida, Memórias de um Sargento de Milícias, que já antecipa traços realistas.'] }],
  examples: [
    { q: 'Um poema denuncia o sofrimento dos africanos nos navios negreiros com linguagem grandiosa. A que geração pertence?', steps: ['Tema social e abolicionista, tom grandioso.', '3ª geração (condoreira), de Castro Alves.'] }],
  summary: ['Nacionalismo, emoção, idealização.', '1ª geração: indianismo (Gonçalves Dias).', '2ª: mal do século (Álvares de Azevedo).', '3ª: condoreira e abolicionista (Castro Alves).', 'Prosa: José de Alencar.'],
  mistakes: ['Achar que o indígena romântico é retratado de forma realista (ele é idealizado como herói europeu).', 'Confundir a 2ª geração (pessimismo individual) com a 3ª (causa social).'],
  formulas: [],
  quiz: [
    { q: 'O indígena idealizado como herói nacional é marca da:', options: ['1ª geração romântica', '2ª geração romântica', '3ª geração romântica', 'poesia árcade'], answer: 0, why: 'É o indianismo de Gonçalves Dias.' },
    { q: 'O "mal do século", com pessimismo e obsessão pela morte, caracteriza:', options: ['Castro Alves', 'Álvares de Azevedo', 'Gonçalves Dias', 'Machado de Assis'], answer: 1, why: 'Ele é o principal nome da 2ª geração.' },
    { q: 'O autor de "O Navio Negreiro", poema abolicionista, é:', options: ['Castro Alves', 'Casimiro de Abreu', 'José de Alencar', 'Gregório de Matos'], answer: 0, why: 'É o "poeta dos escravos", da 3ª geração.' },
    { q: 'Iracema e O Guarani são romances indianistas de:', options: ['Machado de Assis', 'José de Alencar', 'Aluísio Azevedo', 'Graciliano Ramos'], answer: 1, why: 'Alencar quis construir um mito de origem nacional.' }] },
{ id: 'lit-realismo', subject: 'Literatura', area: 'Escolas literárias', title: 'Realismo, Naturalismo e Parnasianismo', level: 'Médio',
  learn: [
    { h: 'Realismo', p: ['Reação ao idealismo romântico (a partir de 1881). Retrata a sociedade de forma crítica e objetiva: casamentos por interesse, hipocrisia da elite, adultério. Personagens complexos e análise psicológica.', 'Machado de Assis é o grande nome: Memórias Póstumas de Brás Cubas (1881, narrado por um "defunto autor"), Dom Casmurro (a dúvida sobre a traição de Capitu) e Quincas Borba. Ironia fina, narrador que conversa com o leitor e pessimismo.'] },
    { h: 'Naturalismo', p: ['Radicaliza o Realismo com base nas ciências da época (determinismo, darwinismo social): o ser humano seria produto do meio, da raça e do momento histórico. Personagens movidos por instintos, descrição de ambientes degradados e linguagem crua.', 'Aluísio Azevedo, com O Cortiço (1890), em que o próprio cortiço funciona como personagem coletivo, e O Mulato.'] },
    { h: 'Parnasianismo', p: ['Na poesia, culto à forma: "arte pela arte", rimas ricas, métrica perfeita (preferência pelo soneto), vocabulário raro e temas da Antiguidade clássica. Olavo Bilac, Alberto de Oliveira e Raimundo Correia formaram a chamada "tríade parnasiana".'] }],
  examples: [
    { q: 'Num romance, as personagens agem por instinto e são determinadas pelo ambiente miserável onde vivem. Qual escola?', steps: ['Determinismo do meio e instintos são marcas do Naturalismo.', 'Exemplo: O Cortiço, de Aluísio Azevedo.'] }],
  summary: ['Realismo: crítica social, análise psicológica, Machado de Assis.', 'Naturalismo: determinismo, instinto, Aluísio Azevedo.', 'Parnasianismo: culto à forma, soneto, Olavo Bilac.'],
  mistakes: ['Dizer que Dom Casmurro prova a traição de Capitu (o romance deixa a dúvida, filtrada pelo narrador Bentinho).', 'Confundir o objetivismo realista com o determinismo naturalista.'],
  formulas: [],
  quiz: [
    { q: 'Memórias Póstumas de Brás Cubas, narrado por um "defunto autor", inaugura no Brasil o:', options: ['Romantismo', 'Realismo', 'Modernismo', 'Arcadismo'], answer: 1, why: 'Publicado em 1881 por Machado de Assis.' },
    { q: 'O Cortiço, de Aluísio Azevedo, é um romance:', options: ['naturalista', 'romântico', 'barroco', 'modernista'], answer: 0, why: 'Mostra o ser humano determinado pelo meio.' },
    { q: 'A preocupação com métrica perfeita, rimas ricas e "arte pela arte" caracteriza o:', options: ['Parnasianismo', 'Realismo', 'Romantismo', 'Modernismo'], answer: 0, why: 'Os parnasianos cultuavam a forma.' },
    { q: 'Em Dom Casmurro, a traição de Capitu:', options: ['é comprovada no final', 'fica em dúvida, pois tudo é contado por Bentinho', 'é negada pela própria Capitu como narradora', 'não é um tema do livro'], answer: 1, why: 'O narrador em 1ª pessoa é parcial; o leitor fica com a dúvida.' }] },
{ id: 'lit-modernismo', subject: 'Literatura', area: 'Escolas literárias', title: 'Modernismo brasileiro', level: 'Médio',
  learn: [
    { h: 'Semana de Arte Moderna (1922)', p: ['Em São Paulo, artistas romperam com o academicismo e o Parnasianismo. Propostas: liberdade formal (verso livre, sem rima obrigatória), linguagem coloquial, humor, crítica e valorização da cultura brasileira de forma não idealizada.'] },
    { h: '1ª fase (1922–1930): ruptura', p: ['Fase heroica e de destruição dos padrões. Mário de Andrade (Macunaíma, "o herói sem nenhum caráter") e Oswald de Andrade (Manifesto Antropófago: "devorar" a cultura estrangeira e transformá-la em algo brasileiro). Manuel Bandeira, com poemas do cotidiano.'] },
    { h: '2ª fase (1930–1945): consolidação', p: ['Na prosa, o romance de 30, regionalista e de denúncia social: Graciliano Ramos (Vidas Secas, sobre a seca e a miséria), Rachel de Queiroz (O Quinze), Jorge Amado e José Lins do Rego.', 'Na poesia, Carlos Drummond de Andrade (reflexão sobre o mundo e o indivíduo), Cecília Meireles (lirismo e musicalidade) e Vinicius de Moraes.'] },
    { h: '3ª fase (a partir de 1945)', p: ['Experimentação com a linguagem. Guimarães Rosa (Grande Sertão: Veredas, com neologismos e a fala sertaneja recriada), Clarice Lispector (fluxo de consciência, introspecção: A Hora da Estrela) e João Cabral de Melo Neto (Morte e Vida Severina, poesia "seca" e concreta).'] }],
  examples: [
    { q: 'Um romance narra a vida de uma família de retirantes fugindo da seca, com linguagem seca e enxuta. De que autor e fase?', steps: ['Tema regionalista e social, típico do romance de 30.', 'Vidas Secas, de Graciliano Ramos (2ª fase).'] }],
  summary: ['1922: Semana de Arte Moderna, ruptura.', '1ª fase: Mário e Oswald de Andrade, antropofagia.', '2ª fase: romance de 30 (Graciliano, Rachel de Queiroz) e Drummond.', '3ª fase: Guimarães Rosa, Clarice Lispector, João Cabral.'],
  mistakes: ['Confundir o regionalismo modernista (crítico) com o romântico (idealizado).', 'Achar que o Modernismo proíbe a rima (ela deixa de ser obrigatória).'],
  formulas: [],
  quiz: [
    { q: 'O marco inicial do Modernismo brasileiro foi:', options: ['a Semana de Arte Moderna de 1922', 'a Proclamação da República', 'a publicação de O Cortiço', 'a Inconfidência Mineira'], answer: 0, why: 'Realizada em São Paulo, em fevereiro de 1922.' },
    { q: 'O Manifesto Antropófago propunha:', options: ['copiar fielmente a arte europeia', '"devorar" a cultura estrangeira e transformá-la em algo nacional', 'voltar à poesia parnasiana', 'rejeitar toda influência estrangeira sem exceção'], answer: 1, why: 'A antropofagia de Oswald de Andrade absorve e recria.' },
    { q: 'Vidas Secas, sobre retirantes nordestinos, é de:', options: ['Jorge Amado', 'Graciliano Ramos', 'Clarice Lispector', 'Mário de Andrade'], answer: 1, why: 'É um marco do romance de 30.' },
    { q: 'A recriação da fala sertaneja com neologismos em Grande Sertão: Veredas é marca de:', options: ['Guimarães Rosa', 'José de Alencar', 'Manuel Bandeira', 'Castro Alves'], answer: 0, why: 'Ele é o grande nome da 3ª fase.' }] },
]
