import { type Topic } from './types'

export const ingles: Topic[] = [
{ id: 'ing-leitura', subject: 'Inglês', area: 'Leitura', title: 'Estratégias de leitura em inglês', level: 'Básico',
  learn: [
    { h: 'Como é a prova', p: ['No ENEM, a língua estrangeira tem 5 questões (inglês ou espanhol, à sua escolha). Os textos são reais: notícias, poemas, letras de música, cartuns, anúncios e posts. As perguntas e alternativas vêm em português, e o foco é interpretar, não traduzir palavra por palavra.'] },
    { h: 'Skimming e scanning', p: ['Skimming: leitura rápida para captar a ideia geral. Olhe título, imagens, primeira e última frase de cada parágrafo. Scanning: busca de uma informação específica (um nome, uma data, um número), sem ler tudo.', 'Leia a pergunta antes do texto para saber se precisa da ideia geral (skimming) ou de um detalhe (scanning).'] },
    { h: 'Pistas no próprio texto', p: ['Cognatos são palavras parecidas com o português e com o mesmo sentido: "important", "information", "family", "university". Eles dão uma base enorme de vocabulário.', 'Inferência pelo contexto: não pare em cada palavra desconhecida. As frases ao redor, as imagens e a fonte do texto ajudam a deduzir o sentido. Observe também marcas tipográficas: aspas, negrito, números e datas.'] }],
  examples: [
    { q: 'Um cartaz diz: "Save water. Every drop counts." Qual a intenção do texto?', steps: ['"Save" + "water" (água) + "every drop counts" (cada gota conta).', 'É uma campanha que incentiva a economia de água.'] }],
  summary: ['5 questões, em português, com textos reais.', 'Skimming: ideia geral. Scanning: informação específica.', 'Use cognatos e o contexto.', 'Leia a pergunta antes do texto.'],
  mistakes: ['Tentar traduzir palavra por palavra.', 'Escolher a alternativa só porque repete uma palavra do texto.', 'Cair em falsos cognatos (veja o tópico sobre eles).'],
  formulas: [],
  quiz: [
    { q: 'Ler rapidamente um texto para captar a ideia geral é a estratégia chamada:', options: ['scanning', 'skimming', 'tradução literal', 'ditado'], answer: 1, why: 'Skimming = visão geral.' },
    { q: 'Procurar no texto apenas a data de um evento é usar:', options: ['skimming', 'scanning', 'cognatos', 'inferência'], answer: 1, why: 'Scanning = busca de informação específica.' },
    { q: 'Qual destas palavras é um cognato verdadeiro?', options: ['pretend', 'information', 'push', 'library'], answer: 1, why: '"Information" = informação. As outras são falsos cognatos.' },
    { q: '"Smoking is not allowed in this area." O aviso informa que:', options: ['é permitido fumar', 'é proibido fumar neste local', 'há uma área para fumantes', 'a fumaça faz bem'], answer: 1, why: '"Not allowed" = não permitido.' }] },
{ id: 'ing-falsos-cognatos', subject: 'Inglês', area: 'Vocabulário', title: 'Falsos cognatos (false friends)', level: 'Básico',
  learn: [
    { h: 'O que são', p: ['Falsos cognatos são palavras parecidas com o português, mas com outro sentido. Bancas adoram usá-los em alternativas para pegar quem lê sem atenção.'] },
    { h: 'Os mais cobrados', p: ['actually = na verdade (não "atualmente", que é currently / nowadays); pretend = fingir (não "pretender", que é intend); push = empurrar (não "puxar", que é pull); library = biblioteca (não "livraria", que é bookstore); parents = pais (não "parentes", que é relatives).', 'college = faculdade (não "colégio"); exquisite = refinado, requintado (não "esquisito"); sensible = sensato (não "sensível", que é sensitive); fabric = tecido (não "fábrica", que é factory); lunch = almoço (não "lanche", que é snack); costume = fantasia (não "costume", que é habit); eventually = finalmente, com o tempo (não "eventualmente").'] }],
  examples: [
    { q: 'Traduza: "Actually, my parents work at the library."', steps: ['actually = na verdade; parents = pais; library = biblioteca.', '"Na verdade, meus pais trabalham na biblioteca."'] }],
  summary: ['actually = na verdade.', 'pretend = fingir.', 'push = empurrar; pull = puxar.', 'library = biblioteca; bookstore = livraria.', 'parents = pais; relatives = parentes.'],
  mistakes: ['Traduzir "actually" como "atualmente".', 'Confundir "push" com "puxar" (atenção em portas!).'],
  formulas: [],
  quiz: [
    { q: '"Actually" significa:', options: ['atualmente', 'na verdade', 'atualizar', 'ativamente'], answer: 1, why: '"Atualmente" seria "currently" ou "nowadays".' },
    { q: '"He pretended to be sick." Isso quer dizer que ele:', options: ['pretendia ficar doente', 'fingiu estar doente', 'estava muito doente', 'cuidou de um doente'], answer: 1, why: '"Pretend" = fingir.' },
    { q: 'Numa porta está escrito "PUSH". Você deve:', options: ['puxar', 'empurrar', 'bater', 'esperar'], answer: 1, why: '"Push" = empurrar; "pull" = puxar.' },
    { q: '"My parents live in São Paulo." Quem mora em São Paulo?', options: ['meus parentes', 'meus pais', 'meus amigos', 'meus vizinhos'], answer: 1, why: '"Parents" = pai e mãe.' },
    { q: '"Library" significa:', options: ['livraria', 'biblioteca', 'liberdade', 'livro'], answer: 1, why: 'Livraria é "bookstore".' }] },
{ id: 'ing-gramatica', subject: 'Inglês', area: 'Gramática', title: 'Conectivos, tempos verbais e modais', level: 'Médio',
  learn: [
    { h: 'Conectivos (linking words)', p: ['Eles mostram a relação entre as ideias e ajudam a entender a argumentação. Adição: and, also, moreover, furthermore. Oposição: but, however, although, nevertheless, despite. Causa: because, since, due to. Consequência e conclusão: so, therefore, thus. Exemplo: for instance, such as.'] },
    { h: 'Tempos verbais principais', p: ['Simple present: hábitos e fatos ("She studies every day"). Present continuous: ação acontecendo agora ("She is studying"). Simple past: ação terminada no passado, muitas vezes com -ed ("She studied yesterday"). Present perfect: passado com ligação ao presente ("She has studied a lot this year").', 'Futuro: "will" para decisões e previsões ("It will rain") e "going to" para planos ("I am going to travel").'] },
    { h: 'Verbos modais', p: ['can: poder, habilidade ou permissão. could: poderia, passado de can ou pedido educado. must: dever, obrigação forte. should: deveria, conselho. may / might: possibilidade. would: condicional ("I would go").'] }],
  examples: [
    { q: '"The plan was good. However, it failed." Qual a relação entre as frases?', steps: ['"However" = no entanto (oposição).', 'O plano era bom, mas falhou: há uma quebra de expectativa.'] }],
  summary: ['However / although / but: oposição.', 'Therefore / so: conclusão.', 'Because / since: causa.', 'must: obrigação; should: conselho; may / might: possibilidade.'],
  mistakes: ['Confundir "however" (oposição) com "therefore" (conclusão).', 'Achar que "should" expressa obrigação forte (é conselho).'],
  formulas: [],
  quiz: [
    { q: 'O conectivo "however" indica:', options: ['adição', 'oposição', 'causa', 'exemplo'], answer: 1, why: '"However" = no entanto.' },
    { q: '"You should drink more water." O verbo modal expressa:', options: ['proibição', 'conselho', 'habilidade', 'passado'], answer: 1, why: '"Should" = deveria.' },
    { q: '"It rained a lot; therefore, the game was cancelled." "Therefore" introduz:', options: ['uma oposição', 'uma consequência', 'uma condição', 'uma comparação'], answer: 1, why: '"Therefore" = portanto.' },
    { q: 'Em "She has lived here since 2010", o present perfect indica uma ação que:', options: ['terminou em 2010', 'começou no passado e continua até hoje', 'vai acontecer', 'nunca aconteceu'], answer: 1, why: 'Ela mora aqui desde 2010 e ainda mora.' }] },
]
