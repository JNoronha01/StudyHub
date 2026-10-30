import { type Topic } from './types'

export const sociologia: Topic[] = [
{ id: 'soc-classicos', subject: 'Sociologia', area: 'Teoria sociológica', title: 'Durkheim, Weber e Marx', level: 'Médio',
  learn: [
    { h: 'Émile Durkheim', p: ['Para Durkheim, a sociologia estuda fatos sociais: maneiras de agir, pensar e sentir que são exteriores ao indivíduo, gerais na sociedade e coercitivas (se impõem a nós). Exemplos: leis, língua, moda, religião.', 'Solidariedade mecânica: sociedades simples, unidas pela semelhança. Solidariedade orgânica: sociedades complexas, unidas pela interdependência criada pela divisão do trabalho. Anomia é a ausência ou o enfraquecimento das normas.'] },
    { h: 'Max Weber', p: ['Weber estudou a ação social: a ação do indivíduo orientada pelo comportamento dos outros e carregada de sentido. Tipos: racional com relação a fins, racional com relação a valores, afetiva e tradicional.', 'Em A Ética Protestante e o Espírito do Capitalismo, mostrou que valores religiosos (disciplina, trabalho, poupança) ajudaram a formar o capitalismo. Também definiu os tipos de dominação: legal, tradicional e carismática.'] },
    { h: 'Karl Marx', p: ['Para Marx, a história é a história da luta de classes. No capitalismo, a burguesia é dona dos meios de produção e o proletariado vende sua força de trabalho. A mais-valia é o valor produzido pelo trabalhador além do que recebe de salário, e que fica com o capitalista.', 'Alienação: o trabalhador não se reconhece no que produz. Ideologia: ideias da classe dominante que fazem a desigualdade parecer natural.'] }],
  examples: [
    { q: 'Por que a língua portuguesa é um fato social para Durkheim?', steps: ['Existe antes de nós e continua depois (exterior).', 'É compartilhada por todos (geral) e somos obrigados a usá-la para nos comunicar (coercitiva).'] }],
  summary: ['Durkheim: fato social (exterior, geral, coercitivo); anomia.', 'Weber: ação social; ética protestante; tipos de dominação.', 'Marx: luta de classes, mais-valia, alienação, ideologia.'],
  mistakes: ['Confundir fato social (Durkheim) com ação social (Weber).', 'Achar que mais-valia é o lucro do comércio (é o trabalho não pago).'],
  formulas: [],
  quiz: [
    { q: 'O conceito de fato social, exterior, geral e coercitivo, é de:', options: ['Weber', 'Durkheim', 'Marx', 'Comte'], answer: 1, why: 'É a base da sociologia de Durkheim.' },
    { q: 'Para Marx, a mais-valia é:', options: ['o salário justo do trabalhador', 'o valor produzido pelo trabalhador e apropriado pelo capitalista', 'um imposto do governo', 'o preço da mercadoria'], answer: 1, why: 'É o trabalho excedente não pago.' },
    { q: 'A relação entre valores religiosos protestantes e o capitalismo foi analisada por:', options: ['Max Weber', 'Durkheim', 'Marx', 'Bourdieu'], answer: 0, why: 'A Ética Protestante e o Espírito do Capitalismo.' },
    { q: 'Anomia, para Durkheim, é:', options: ['excesso de leis', 'ausência ou enfraquecimento das normas sociais', 'luta de classes', 'um tipo de dominação'], answer: 1, why: 'Situação em que as regras deixam de orientar a ação.' }] },
{ id: 'soc-cultura', subject: 'Sociologia', area: 'Cultura', title: 'Cultura, etnocentrismo e indústria cultural', level: 'Básico',
  learn: [
    { h: 'O que é cultura', p: ['Para a antropologia, cultura é tudo o que o ser humano cria e aprende em sociedade: crenças, costumes, línguas, técnicas, arte, culinária. Não existe povo "sem cultura", nem cultura superior a outra.'] },
    { h: 'Etnocentrismo e relativismo', p: ['Etnocentrismo é julgar outras culturas a partir dos valores da própria, considerando-a o padrão "certo". Está na origem de preconceitos e serviu para justificar a colonização.', 'Relativismo cultural é compreender cada cultura a partir de seus próprios valores e contexto. Ele não significa aceitar violações de direitos humanos, mas evitar julgamentos apressados.'] },
    { h: 'Indústria cultural e cultura de massa', p: ['Adorno e Horkheimer chamaram de indústria cultural a produção de cultura em série, como mercadoria, que padroniza gostos e favorece o conformismo. Hoje, algoritmos de redes sociais e plataformas de streaming reacendem esse debate.'] },
    { h: 'Identidade e diversidade no Brasil', p: ['A cultura brasileira se formou da mistura de povos indígenas, africanos, europeus e asiáticos, mas essa mistura não foi harmoniosa: houve violência e desigualdade. O "mito da democracia racial" é a ideia, criticada pelos sociólogos, de que no Brasil não haveria racismo.'] }],
  examples: [
    { q: 'Um viajante diz que a comida de um país é "nojenta" porque usa insetos. Que atitude é essa?', steps: ['Ele julga outra cultura pelos padrões da sua.', 'É etnocentrismo.'] }],
  summary: ['Cultura: tudo o que é criado e aprendido em sociedade.', 'Etnocentrismo: julgar o outro pelos próprios valores.', 'Relativismo: compreender cada cultura em seu contexto.', 'Indústria cultural: cultura como mercadoria padronizada.'],
  mistakes: ['Usar "cultura" como sinônimo de erudição ("pessoa sem cultura").', 'Achar que relativismo cultural significa aceitar qualquer violação de direitos.'],
  formulas: [],
  quiz: [
    { q: 'Julgar outras culturas tomando a própria como padrão é:', options: ['relativismo', 'etnocentrismo', 'aculturação', 'sincretismo'], answer: 1, why: 'O próprio grupo vira o centro de referência.' },
    { q: 'Para a antropologia, cultura é:', options: ['apenas a arte erudita', 'tudo o que o ser humano cria e aprende em sociedade', 'o nível de escolaridade', 'a cultura europeia'], answer: 1, why: 'Todo grupo humano tem cultura.' },
    { q: 'O conceito de indústria cultural critica:', options: ['a produção de cultura em série, como mercadoria', 'a existência de museus', 'o folclore', 'a arte rupestre'], answer: 0, why: 'Padroniza gostos e estimula o consumo passivo.' },
    { q: 'O "mito da democracia racial" é a ideia de que:', options: ['o Brasil é o país mais racista do mundo', 'no Brasil não haveria racismo por causa da miscigenação', 'a democracia acabou com a escravidão', 'todos os povos são iguais em direitos'], answer: 1, why: 'Os sociólogos mostram que a desigualdade racial persiste.' }] },
{ id: 'soc-trabalho', subject: 'Sociologia', area: 'Trabalho', title: 'Trabalho, desigualdade e movimentos sociais', level: 'Médio',
  learn: [
    { h: 'Modelos de produção', p: ['Taylorismo: divisão do trabalho em tarefas simples, controle do tempo e dos movimentos. Fordismo: linha de montagem e produção em massa de produtos padronizados, com estoques grandes.', 'Toyotismo (acumulação flexível): produção conforme a demanda (just in time), estoques mínimos e trabalhador multifuncional. Ligado à terceirização e à flexibilização dos direitos.'] },
    { h: 'O trabalho hoje', p: ['A uberização é o trabalho por aplicativos: o trabalhador usa os próprios meios (carro, moto, celular), não tem vínculo empregatício e arca com os riscos. Informalidade, precarização e desemprego estrutural (causado pela automação) também são temas recorrentes.'] },
    { h: 'Desigualdade e cidadania', p: ['O Brasil é um dos países mais desiguais do mundo. A desigualdade tem cor, gênero e região: mulheres e pessoas negras recebem, em média, menos. Racismo estrutural é o racismo que está nas instituições e nas relações sociais, e não só em atitudes individuais.', 'Segundo T. H. Marshall, a cidadania se compõe de direitos civis (liberdades individuais), políticos (votar e ser votado) e sociais (saúde, educação, trabalho).'] },
    { h: 'Movimentos sociais', p: ['São ações coletivas organizadas para conquistar direitos ou transformar a sociedade: movimento operário, feminista, negro, LGBTQIA+, ambientalista, indígena, pela moradia e pela terra. Muitos direitos garantidos na Constituição de 1988 resultaram dessas lutas.'] }],
  examples: [
    { q: 'Qual a diferença entre fordismo e toyotismo quanto aos estoques?', steps: ['Fordismo: produção em massa e grandes estoques.', 'Toyotismo: just in time, produzir conforme a demanda, com estoques mínimos.'] }],
  summary: ['Fordismo: linha de montagem, massa, estoque.', 'Toyotismo: just in time, flexibilidade.', 'Uberização: trabalho por app, sem vínculo.', 'Cidadania: direitos civis, políticos e sociais.', 'Racismo estrutural: presente nas instituições.'],
  mistakes: ['Confundir fordismo com toyotismo.', 'Achar que racismo é só uma atitude individual.'],
  formulas: [],
  quiz: [
    { q: 'A produção conforme a demanda, com estoques mínimos (just in time), caracteriza o:', options: ['fordismo', 'toyotismo', 'taylorismo', 'feudalismo'], answer: 1, why: 'É o modelo de acumulação flexível.' },
    { q: 'A uberização do trabalho é marcada por:', options: ['carteira assinada e estabilidade', 'trabalho por aplicativos, sem vínculo empregatício', 'jornada máxima de 4 horas', 'fim da tecnologia'], answer: 1, why: 'O trabalhador arca com custos e riscos.' },
    { q: 'O direito à saúde e à educação faz parte dos direitos:', options: ['civis', 'políticos', 'sociais', 'naturais apenas'], answer: 2, why: 'Na classificação de T. H. Marshall.' },
    { q: 'Racismo estrutural refere-se ao racismo:', options: ['apenas em ofensas individuais', 'presente nas instituições e nas relações sociais', 'que acabou com a abolição', 'só existente em outros países'], answer: 1, why: 'Reproduz desigualdades mesmo sem intenção individual.' }] },
]
