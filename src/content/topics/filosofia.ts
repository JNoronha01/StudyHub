import { type Topic } from './types'

export const filosofia: Topic[] = [
{ id: 'fil-antiga', subject: 'Filosofia', area: 'Filosofia antiga', title: 'Dos pré-socráticos a Aristóteles', level: 'Básico',
  learn: [
    { h: 'Do mito ao logos', p: ['A filosofia nasce na Grécia, por volta do século VI a.C., quando pensadores passam a explicar o mundo pela razão (logos), e não apenas pelos mitos. Os pré-socráticos buscavam a arché, o princípio de todas as coisas: para Tales, a água; para Heráclito, o fogo e o eterno devir (tudo muda); para Parmênides, o ser é imutável e a mudança é ilusão.'] },
    { h: 'Sócrates', p: ['Não deixou nada escrito; conhecemos suas ideias por Platão. Seu método, a maiêutica, usava perguntas para levar o interlocutor a perceber a própria ignorância ("só sei que nada sei") e a "dar à luz" o conhecimento. Foi condenado à morte em Atenas, acusado de corromper a juventude.'] },
    { h: 'Platão', p: ['Dividiu a realidade em mundo sensível (o que percebemos, imperfeito e mutável) e mundo das ideias (essências perfeitas e eternas). No Mito da Caverna, prisioneiros veem apenas sombras e as tomam pela realidade; o filósofo é quem se liberta e contempla a verdade, e tem o dever de voltar para libertar os outros.'] },
    { h: 'Aristóteles', p: ['Discípulo de Platão, valorizou a experiência e a observação. Criou a lógica formal (silogismo), estudou a natureza e a política ("o homem é um animal político"). Na ética, a virtude é o meio-termo entre dois extremos (a coragem fica entre a covardia e a temeridade), e o fim da vida humana é a felicidade (eudaimonia).'] }],
  examples: [
    { q: 'Que crítica o Mito da Caverna faz a quem só confia nas aparências?', steps: ['Os prisioneiros acreditam que as sombras são a realidade.', 'Para Platão, os sentidos enganam e só a razão alcança a verdade.'] }],
  summary: ['Pré-socráticos: busca da arché.', 'Sócrates: maiêutica, "só sei que nada sei".', 'Platão: mundo das ideias x mundo sensível, Mito da Caverna.', 'Aristóteles: lógica, observação, virtude como meio-termo.'],
  mistakes: ['Atribuir a Sócrates obras escritas.', 'Confundir o mundo das ideias (Platão) com a valorização da experiência (Aristóteles).'],
  formulas: [],
  quiz: [
    { q: 'O método socrático de fazer perguntas para levar o outro ao conhecimento chama-se:', options: ['dialética hegeliana', 'maiêutica', 'empirismo', 'silogismo'], answer: 1, why: 'Maiêutica: a "arte de parir" ideias.' },
    { q: 'O Mito da Caverna, de Platão, ilustra:', options: ['a superioridade dos sentidos', 'a passagem da ilusão das aparências para o conhecimento verdadeiro', 'a origem dos deuses', 'a teoria da evolução'], answer: 1, why: 'Sair da caverna é sair das sombras para a verdade.' },
    { q: 'Para Aristóteles, a virtude ética é:', options: ['o extremo do prazer', 'o meio-termo entre dois vícios', 'a obediência aos deuses', 'a negação da razão'], answer: 1, why: 'Ex.: coragem entre covardia e temeridade.' },
    { q: 'Os pré-socráticos buscavam principalmente:', options: ['a arché, o princípio de todas as coisas', 'a salvação da alma', 'o contrato social', 'a luta de classes'], answer: 0, why: 'Queriam explicar a natureza pela razão.' }] },
{ id: 'fil-moderna', subject: 'Filosofia', area: 'Filosofia moderna', title: 'Racionalismo, empirismo e Kant', level: 'Médio',
  learn: [
    { h: 'O problema do conhecimento', p: ['A filosofia moderna (séculos XVII e XVIII), em meio à revolução científica, pergunta: como conhecemos? A resposta dividiu os pensadores entre racionalistas e empiristas.'] },
    { h: 'Racionalismo: Descartes', p: ['Descartes usou a dúvida metódica: duvidar de tudo o que pode ser posto em dúvida, até achar algo absolutamente certo. Se duvido, penso; se penso, existo: "penso, logo existo" (cogito). Para ele, a razão é a fonte segura do conhecimento e existem ideias inatas.'] },
    { h: 'Empirismo: Locke e Hume', p: ['Para John Locke, a mente nasce como uma "tábula rasa" (folha em branco) e todo conhecimento vem da experiência. David Hume foi além: criticou a ideia de causalidade, dizendo que só vemos fatos se sucedendo e que o hábito nos faz acreditar que um causa o outro.'] },
    { h: 'Kant', p: ['Kant fez uma síntese: o conhecimento começa com a experiência, mas a razão organiza o que percebemos com estruturas próprias (espaço, tempo, categorias). Na ética, propôs o imperativo categórico: aja de modo que sua ação possa virar uma lei universal, e trate as pessoas sempre como fim, nunca apenas como meio. O Iluminismo, para ele, é a saída do ser humano de sua menoridade: ter coragem de usar a própria razão.'] }],
  examples: [
    { q: 'Por que Descartes considerou o "penso, logo existo" uma certeza?', steps: ['Mesmo que tudo seja ilusão, ao duvidar ele está pensando.', 'Logo, a existência de quem pensa não pode ser posta em dúvida.'] }],
  summary: ['Descartes: dúvida metódica, cogito, ideias inatas.', 'Locke: tábula rasa. Hume: crítica à causalidade.', 'Kant: síntese, imperativo categórico, pessoas como fim.'],
  mistakes: ['Inverter racionalismo (razão) e empirismo (experiência).', 'Confundir o imperativo categórico com "fazer o que traz vantagem".'],
  formulas: [],
  quiz: [
    { q: 'A frase "penso, logo existo" é de:', options: ['Kant', 'Descartes', 'Locke', 'Hume'], answer: 1, why: 'É o cogito cartesiano.' },
    { q: 'A ideia de que a mente nasce como uma "tábula rasa" é defendida pelo:', options: ['racionalismo', 'empirismo', 'existencialismo', 'idealismo platônico'], answer: 1, why: 'Locke: todo conhecimento vem da experiência.' },
    { q: 'O imperativo categórico de Kant determina que devemos:', options: ['agir conforme nossos interesses', 'agir de modo que nossa ação possa valer como lei universal', 'seguir sempre a tradição', 'buscar o prazer acima de tudo'], answer: 1, why: 'É uma ética do dever e da universalidade.' },
    { q: 'Hume criticou a noção de causalidade afirmando que:', options: ['ela é uma ideia inata', 'o hábito nos faz acreditar na ligação entre eventos', 'Deus garante as causas', 'a razão prova todas as causas'], answer: 1, why: 'Só observamos sucessões de fatos.' }] },
{ id: 'fil-politica', subject: 'Filosofia', area: 'Filosofia política', title: 'Maquiavel e os contratualistas', level: 'Médio',
  learn: [
    { h: 'Maquiavel', p: ['Em O Príncipe (1513), separou a política da moral religiosa: o governante deve agir conforme a necessidade para conquistar e manter o poder. Precisa de virtù (habilidade de agir) para enfrentar a fortuna (o acaso). A frase "os fins justificam os meios" não aparece literalmente na obra, mas resume a leitura popular dela.'] },
    { h: 'Hobbes', p: ['No estado de natureza, sem leis, haveria "guerra de todos contra todos" e "o homem é o lobo do homem". Por medo da morte, as pessoas fazem um contrato e entregam seus direitos a um soberano forte, o Leviatã. Hobbes defende o absolutismo como garantia da paz.'] },
    { h: 'Locke', p: ['No estado de natureza, o ser humano já tem direitos naturais: vida, liberdade e propriedade. O governo existe para protegê-los; se não o fizer, o povo tem direito de resistir. É a base do liberalismo político e da separação entre os poderes.'] },
    { h: 'Rousseau', p: ['"O homem nasce bom; a sociedade o corrompe." A propriedade privada gerou a desigualdade. O contrato social legítimo cria a vontade geral, e a soberania pertence ao povo. Influenciou a Revolução Francesa e as ideias de democracia direta. Montesquieu, contemporâneo, propôs a separação dos três poderes (Executivo, Legislativo e Judiciário).'] }],
  examples: [
    { q: 'Compare o estado de natureza em Hobbes e em Rousseau.', steps: ['Hobbes: violento e inseguro, por isso é preciso um soberano forte.', 'Rousseau: o ser humano é naturalmente bom; quem corrompe é a sociedade.'] }],
  summary: ['Maquiavel: política separada da moral; virtù e fortuna.', 'Hobbes: guerra de todos contra todos; Leviatã; absolutismo.', 'Locke: direitos naturais; liberalismo; direito de resistência.', 'Rousseau: bom selvagem; vontade geral.', 'Montesquieu: três poderes.'],
  mistakes: ['Atribuir a Hobbes a defesa da democracia.', 'Confundir a vontade geral (bem comum) com a soma das vontades individuais.'],
  formulas: [],
  quiz: [
    { q: '"O homem é o lobo do homem" e a defesa de um soberano forte são ideias de:', options: ['Rousseau', 'Hobbes', 'Locke', 'Montesquieu'], answer: 1, why: 'O Leviatã garantiria a paz.' },
    { q: 'Para Locke, os direitos naturais são:', options: ['vida, liberdade e propriedade', 'apenas a obediência ao rei', 'a vontade geral', 'a luta de classes'], answer: 0, why: 'O governo deve protegê-los.' },
    { q: 'A ideia de que o ser humano nasce bom e a sociedade o corrompe é de:', options: ['Maquiavel', 'Rousseau', 'Hobbes', 'Aristóteles'], answer: 1, why: 'Rousseau via a propriedade privada como origem da desigualdade.' },
    { q: 'A separação entre Executivo, Legislativo e Judiciário foi proposta por:', options: ['Montesquieu', 'Maquiavel', 'Platão', 'Descartes'], answer: 0, why: 'Em O Espírito das Leis.' },
    { q: 'Em Maquiavel, "virtù" significa:', options: ['bondade cristã', 'capacidade do governante de agir diante das circunstâncias', 'sorte', 'obediência à Igreja'], answer: 1, why: 'A virtù enfrenta a fortuna (o acaso).' }] },
{ id: 'fil-contemporanea', subject: 'Filosofia', area: 'Filosofia contemporânea', title: 'Nietzsche, existencialismo e Escola de Frankfurt', level: 'Avançado',
  learn: [
    { h: 'Nietzsche', p: ['Criticou a moral cristã e a tradição platônica, que desvalorizariam a vida terrena em nome de outro mundo. Anunciou a "morte de Deus": o colapso dos valores absolutos. Propôs a transvaloração dos valores e a vontade de potência, a afirmação criativa da vida.'] },
    { h: 'Existencialismo', p: ['Para Sartre, "a existência precede a essência": não nascemos com uma natureza definida; nós nos fazemos pelas escolhas. Por isso estamos "condenados a ser livres" e somos responsáveis pelo que fazemos. Simone de Beauvoir aplicou a ideia ao gênero: "não se nasce mulher, torna-se mulher", ou seja, o papel feminino é uma construção social.'] },
    { h: 'Escola de Frankfurt', p: ['Adorno e Horkheimer criaram o conceito de indústria cultural: a cultura produzida em série, como mercadoria, padroniza gostos e torna as pessoas consumidoras passivas. A razão instrumental, voltada só para a eficiência, poderia servir à dominação.'] },
    { h: 'Hannah Arendt', p: ['Ao acompanhar o julgamento do nazista Eichmann, cunhou a ideia de banalidade do mal: grandes crimes podem ser cometidos por pessoas comuns que apenas "cumprem ordens", sem pensar criticamente. Para ela, a capacidade de pensar e julgar é uma defesa contra o mal.'] }],
  examples: [
    { q: 'Como Simone de Beauvoir usa o existencialismo para falar das mulheres?', steps: ['Se a existência precede a essência, não há uma "natureza feminina" fixa.', 'Ser mulher, como papel social, é uma construção histórica e cultural, que pode ser transformada.'] }],
  summary: ['Nietzsche: morte de Deus, transvaloração, vontade de potência.', 'Sartre: existência precede a essência; liberdade e responsabilidade.', 'Beauvoir: gênero como construção social.', 'Frankfurt: indústria cultural.', 'Arendt: banalidade do mal.'],
  mistakes: ['Ler "morte de Deus" de forma literal (é uma crise de valores).', 'Confundir a indústria cultural com qualquer produção artística.'],
  formulas: [],
  quiz: [
    { q: 'A afirmação "a existência precede a essência" é central no pensamento de:', options: ['Sartre', 'Aristóteles', 'Hobbes', 'Kant'], answer: 0, why: 'É o núcleo do existencialismo.' },
    { q: 'O conceito de indústria cultural foi formulado por:', options: ['Adorno e Horkheimer', 'Platão e Aristóteles', 'Locke e Hume', 'Marx e Engels'], answer: 0, why: 'Pensadores da Escola de Frankfurt.' },
    { q: 'A expressão "banalidade do mal" é de:', options: ['Nietzsche', 'Hannah Arendt', 'Descartes', 'Rousseau'], answer: 1, why: 'Surgiu da análise do julgamento de Eichmann.' },
    { q: 'A frase "não se nasce mulher, torna-se mulher" indica que:', options: ['o gênero é uma construção social', 'as mulheres nascem sem direitos', 'a biologia determina o papel social', 'o existencialismo rejeita a liberdade'], answer: 0, why: 'Simone de Beauvoir, O Segundo Sexo.' }] },
]
