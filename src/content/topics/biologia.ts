import { r, type Topic } from './types'

export const biologia: Topic[] = [
{ id: 'bio-citologia', subject: 'Biologia', area: 'Citologia', title: 'Célula, organelas e divisão celular', level: 'Básico',
  learn: [
    { h: 'Procariontes e eucariontes', p: ['Procariontes (bactérias) não têm núcleo organizado: o DNA fica solto no citoplasma. Eucariontes (animais, plantas, fungos, protozoários) têm núcleo delimitado por membrana e várias organelas.', 'Vírus não são células: são formados por material genético envolto por proteínas e só se reproduzem dentro de células.'] },
    { h: 'Organelas e funções', p: ['Membrana plasmática: controla o que entra e sai (permeabilidade seletiva). Núcleo: guarda o DNA e comanda a célula. Ribossomos: produzem proteínas. Retículo endoplasmático: transporte e síntese (o rugoso tem ribossomos). Complexo golgiense: empacota e secreta substâncias. Lisossomos: digestão intracelular.', 'Mitocôndria: respiração celular, produz ATP (energia). Cloroplasto: fotossíntese (só em plantas e algas). Célula vegetal tem ainda parede celular de celulose e um grande vacúolo.'] },
    { h: 'Fotossíntese e respiração', p: [r`Fotossíntese: $6CO_2+6H_2O\xrightarrow{luz}C_6H_{12}O_6+6O_2$. Respiração celular é o processo inverso: a glicose é quebrada com oxigênio, liberando energia, $CO_2$ e água.`, 'Plantas fazem os dois processos: respiram o tempo todo e fazem fotossíntese quando há luz.'] },
    { h: 'Mitose e meiose', p: ['Mitose: 1 célula forma 2 células idênticas, com o mesmo número de cromossomos. Serve para crescimento e regeneração.', 'Meiose: 1 célula forma 4 células com metade dos cromossomos (gametas). Gera variabilidade genética pelo crossing-over e pela separação aleatória dos cromossomos.'] }],
  examples: [
    { q: 'Por que um músculo tem muitas mitocôndrias?', steps: ['Músculos gastam muita energia para contrair.', 'A mitocôndria produz ATP pela respiração celular; mais mitocôndrias = mais energia disponível.'] },
    { q: 'Uma célula humana tem 46 cromossomos. Quantos terá um espermatozoide?', steps: ['Gametas são formados por meiose, que reduz o número pela metade.', '46 ÷ 2 = 23 cromossomos.'] }],
  summary: ['Procarionte: sem núcleo. Eucarionte: com núcleo.', 'Mitocôndria = energia; cloroplasto = fotossíntese; ribossomo = proteínas.', 'Vegetal: parede celular, cloroplastos e vacúolo grande.', 'Mitose: 2 células iguais. Meiose: 4 células com metade dos cromossomos.'],
  mistakes: ['Dizer que plantas não respiram.', 'Achar que vírus são células.', 'Confundir parede celular (vegetal) com membrana plasmática (todas as células).'],
  formulas: [
    { name: 'Fotossíntese', tex: r`6CO_2+6H_2O\xrightarrow{luz}C_6H_{12}O_6+6O_2`, note: 'Ocorre nos cloroplastos.' },
    { name: 'Respiração celular', tex: r`C_6H_{12}O_6+6O_2\to6CO_2+6H_2O+\text{energia}`, note: 'Ocorre principalmente nas mitocôndrias.' }],
  quiz: [
    { q: 'A organela responsável pela respiração celular é o(a):', options: ['ribossomo', 'mitocôndria', 'complexo golgiense', 'lisossomo'], answer: 1, why: 'A mitocôndria produz ATP.' },
    { q: 'As bactérias são seres:', options: ['eucariontes', 'procariontes', 'acelulares', 'sempre pluricelulares'], answer: 1, why: 'Não têm núcleo organizado.' },
    { q: 'Estrutura presente na célula vegetal e ausente na animal:', options: ['membrana plasmática', 'ribossomo', 'parede celular', 'mitocôndria'], answer: 2, why: 'A parede de celulose é exclusiva dos vegetais (entre essas opções).' },
    { q: 'A síntese de proteínas ocorre nos:', options: ['ribossomos', 'lisossomos', 'centríolos', 'vacúolos'], answer: 0, why: 'Ribossomos traduzem o RNA mensageiro em proteína.' },
    { q: 'A meiose produz:', options: ['2 células idênticas à original', '4 células com metade dos cromossomos', '4 células idênticas à original', '2 células com o dobro de cromossomos'], answer: 1, why: 'É a divisão que forma os gametas.' }] },
{ id: 'bio-genetica', subject: 'Biologia', area: 'Genética', title: 'Genética mendeliana e heranças', level: 'Médio',
  learn: [
    { h: 'Conceitos-chave', p: ['Gene é um trecho de DNA com uma informação. Alelos são versões de um gene (A e a). Genótipo é a combinação de alelos (AA, Aa, aa); fenótipo é a característica observável, resultado do genótipo e do ambiente.', 'Homozigoto tem alelos iguais (AA ou aa); heterozigoto, diferentes (Aa). O alelo dominante se manifesta mesmo em dose única; o recessivo, só em dose dupla.'] },
    { h: '1ª Lei de Mendel', p: [r`Cada característica é determinada por um par de alelos que se separam na formação dos gametas. No cruzamento $Aa\times Aa$, os filhos são 1 AA : 2 Aa : 1 aa, ou seja, 3 dominantes : 1 recessivo.`, 'Monte o quadro de Punnett: gametas de um pai na linha, do outro na coluna, e combine.'] },
    { h: 'Grupos sanguíneos', p: ['Sistema ABO: alelos Iᴬ e Iᴮ são codominantes e i é recessivo. Tipo A: IᴬIᴬ ou Iᴬi; tipo B: IᴮIᴮ ou Iᴮi; tipo AB: IᴬIᴮ; tipo O: ii. O tipo O é doador universal de hemácias e o AB, receptor universal.'] },
    { h: 'Herança ligada ao sexo', p: ['Daltonismo e hemofilia são causados por alelos recessivos no cromossomo X. Homens (XY) têm só um X, então basta um alelo para manifestar; mulheres (XX) precisam de dois. Por isso são mais comuns em homens.'] }],
  examples: [
    { q: 'Um casal heterozigoto para o albinismo (Aa × Aa) quer saber a chance de ter um filho albino.', steps: ['Albinismo é recessivo: o filho precisa ser aa.', 'Quadro de Punnett: AA, Aa, Aa, aa.', r`$P(aa)=\frac14=25\%$.`] },
    { q: 'Mãe tipo A (Iᴬi) e pai tipo B (Iᴮi). Quais tipos os filhos podem ter?', steps: ['Gametas da mãe: Iᴬ ou i. Do pai: Iᴮ ou i.', 'Combinações: IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B), ii (O).', 'Podem nascer os quatro tipos, cada um com 1/4 de chance.'] }],
  summary: ['Genótipo = alelos; fenótipo = característica (genótipo + ambiente).', 'Aa × Aa: 3 : 1 no fenótipo; 1 : 2 : 1 no genótipo.', 'Aa × aa: 1 : 1.', 'ABO: Iᴬ = Iᴮ > i.', 'Ligadas ao X: mais comuns em homens.'],
  mistakes: ['Esquecer que "ter um filho menino e albino" multiplica as probabilidades (1/2 × 1/4).', 'Achar que o dominante é sempre o mais frequente na população.', 'Confundir genótipo com fenótipo.'],
  formulas: [],
  quiz: [
    { q: 'No cruzamento Aa × aa, a probabilidade de um filho aa é:', options: ['1/4', '1/2', '3/4', '0'], answer: 1, why: 'Filhos: Aa, Aa, aa, aa.' },
    { q: 'A proporção fenotípica do cruzamento Aa × Aa (dominância completa) é:', options: ['1 : 2 : 1', '3 : 1', '1 : 1', '9 : 3 : 3 : 1'], answer: 1, why: '3 com o fenótipo dominante para 1 recessivo.' },
    { q: 'O genótipo de uma pessoa com sangue tipo O é:', options: ['IᴬIᴮ', 'Iᴬi', 'ii', 'Iᴮi'], answer: 2, why: 'O tipo O só aparece com dois alelos recessivos.' },
    { q: 'O daltonismo é mais comum em homens porque:', options: ['é dominante no cromossomo Y', 'o alelo é recessivo e está no X, e homens têm um só X', 'homens têm mais genes', 'é causado por um vírus'], answer: 1, why: 'Um único alelo recessivo no X já se manifesta no homem.' },
    { q: 'Fenótipo é:', options: ['o conjunto de genes de um indivíduo', 'as características observáveis do indivíduo', 'apenas os alelos dominantes', 'o DNA da mitocôndria'], answer: 1, why: 'Resulta da interação entre genótipo e ambiente.' }] },
{ id: 'bio-ecologia', subject: 'Biologia', area: 'Ecologia', title: 'Cadeias alimentares, ciclos e impactos', level: 'Médio',
  learn: [
    { h: 'Níveis de organização', p: ['População: indivíduos da mesma espécie numa área. Comunidade: todas as populações de um local. Ecossistema: comunidade + fatores físicos (água, solo, luz). Biosfera: todos os ecossistemas da Terra.'] },
    { h: 'Cadeias e teias alimentares', p: ['Produtores (plantas, algas) fazem fotossíntese. Consumidores primários comem produtores; secundários comem os primários, e assim por diante. Decompositores (fungos e bactérias) devolvem a matéria ao ambiente.', 'A energia flui num só sentido e diminui a cada nível: só cerca de 10% passa para o nível seguinte, o resto é gasto na respiração e perdido como calor. A matéria, ao contrário, é reciclada.'] },
    { h: 'Relações ecológicas', p: ['Mutualismo: ambos ganham e dependem um do outro (líquen = alga + fungo). Comensalismo: um ganha e o outro não perde. Parasitismo: um ganha e o outro é prejudicado. Predação: um captura o outro. Competição: disputa pelo mesmo recurso.'] },
    { h: 'Ciclos e impactos ambientais', p: ['Ciclo do carbono: fotossíntese retira CO₂ do ar; respiração, decomposição e queima de combustíveis devolvem. O excesso de CO₂ intensifica o efeito estufa. Ciclo do nitrogênio: bactérias nas raízes de leguminosas (feijão, soja) fixam o N₂ do ar.', 'Eutrofização: excesso de nutrientes (esgoto, fertilizantes) faz as algas proliferarem; quando morrem, a decomposição consome o oxigênio e os peixes morrem. Bioacumulação: substâncias como mercúrio e DDT se acumulam e atingem maior concentração no topo da cadeia.'] }],
  examples: [
    { q: 'Numa cadeia capim → gafanhoto → sapo → cobra, por que há menos cobras do que gafanhotos?', steps: ['A energia diminui a cada nível (cerca de 10% passa adiante).', 'O topo recebe pouca energia e sustenta poucos indivíduos.'] },
    { q: 'Por que peixes grandes de rios contaminados por garimpo são os mais perigosos para consumo?', steps: ['O mercúrio não é eliminado: se acumula nos tecidos.', 'Cada predador come muitas presas contaminadas, então a concentração aumenta a cada nível (bioacumulação).'] }],
  summary: ['Energia: fluxo unidirecional, diminui a cada nível.', 'Matéria: ciclos (carbono, nitrogênio, água).', 'Mutualismo, comensalismo, parasitismo, predação, competição.', 'Eutrofização: excesso de nutrientes → falta de oxigênio.', 'Bioacumulação: maior no topo da cadeia.'],
  mistakes: ['Dizer que a energia é reciclada (quem é reciclada é a matéria).', 'Achar que eutrofização é falta de nutrientes.', 'Confundir efeito estufa (fenômeno natural, intensificado pelo homem) com buraco na camada de ozônio.'],
  formulas: [],
  quiz: [
    { q: 'Ao longo de uma cadeia alimentar, a energia disponível:', options: ['aumenta a cada nível', 'diminui a cada nível', 'é igual em todos os níveis', 'é totalmente reciclada'], answer: 1, why: 'Grande parte é perdida como calor na respiração.' },
    { q: 'Num lago contaminado por mercúrio, a maior concentração será encontrada nos:', options: ['produtores', 'consumidores primários', 'consumidores do topo da cadeia', 'decompositores'], answer: 2, why: 'Bioacumulação.' },
    { q: 'O líquen (associação de alga e fungo) é um exemplo de:', options: ['parasitismo', 'mutualismo', 'competição', 'predação'], answer: 1, why: 'A alga fornece alimento e o fungo, proteção e umidade: ambos ganham.' },
    { q: 'A eutrofização de lagos é causada principalmente por:', options: ['falta de nutrientes', 'excesso de nutrientes como fosfatos e nitratos', 'aumento do oxigênio na água', 'chuva ácida'], answer: 1, why: 'Esgoto e fertilizantes fazem as algas proliferarem.' },
    { q: 'Bactérias que vivem nas raízes de leguminosas participam do ciclo do:', options: ['carbono', 'nitrogênio', 'fósforo', 'oxigênio'], answer: 1, why: 'Elas fixam o N₂ do ar e o tornam disponível para a planta.' }] },
{ id: 'bio-evolucao', subject: 'Biologia', area: 'Evolução', title: 'Evolução e seleção natural', level: 'Médio',
  learn: [
    { h: 'Lamarck', p: ['Propôs a lei do uso e desuso (órgãos usados se desenvolvem) e a herança dos caracteres adquiridos (o que o pai desenvolveu passaria aos filhos). A segunda ideia foi refutada: músculos de academia não passam para os filhos.'] },
    { h: 'Darwin e a seleção natural', p: ['Nos indivíduos de uma população há variação. Os mais adaptados ao ambiente sobrevivem e se reproduzem mais, e passam suas características adiante. Com o tempo, a população muda.', 'O ambiente não cria as características: ele seleciona as que já existem.'] },
    { h: 'Teoria sintética (neodarwinismo)', p: ['Junta Darwin com a genética: a variabilidade vem de mutações (fonte primária) e da recombinação genética na reprodução sexuada. A seleção natural atua sobre essa variação. Também atuam a deriva genética e a migração.'] },
    { h: 'Evidências e especiação', p: ['Evidências: fósseis, órgãos homólogos (mesma origem, funções diferentes: braço humano e asa de morcego), órgãos vestigiais e semelhanças no DNA. Órgãos análogos têm a mesma função e origens diferentes (asa de inseto e de ave): mostram convergência, não parentesco.', 'Especiação: populações isoladas geograficamente acumulam diferenças até não conseguirem mais se reproduzir entre si.'] }],
  examples: [
    { q: 'Como surgem bactérias resistentes a antibióticos?', steps: ['Numa população, algumas bactérias já têm, por mutação, genes de resistência.', 'O antibiótico mata as sensíveis; as resistentes sobrevivem e se multiplicam.', 'Por isso não se deve interromper o tratamento nem usar antibiótico sem receita.'] }],
  summary: ['Lamarck: uso e desuso + herança de adquiridos (refutada).', 'Darwin: variação + seleção natural.', 'Neodarwinismo: mutação e recombinação + seleção.', 'Homólogos: mesma origem. Análogos: mesma função.'],
  mistakes: ['Dizer que o ambiente "provoca" a mutação necessária (a mutação é aleatória).', 'Dizer que o indivíduo evolui (quem evolui é a população).', 'Confundir órgãos homólogos com análogos.'],
  formulas: [],
  quiz: [
    { q: 'O surgimento de bactérias resistentes a antibióticos é explicado por:', options: ['o antibiótico cria mutações de resistência', 'seleção de bactérias que já eram resistentes', 'uso e desuso', 'herança de caracteres adquiridos'], answer: 1, why: 'O antibiótico apenas seleciona variantes que já existiam.' },
    { q: '"A girafa esticou o pescoço para alcançar as folhas e passou isso aos filhos." Essa explicação é de:', options: ['Darwin', 'Lamarck', 'Mendel', 'Wallace'], answer: 1, why: 'Uso e desuso e herança dos caracteres adquiridos.' },
    { q: 'O braço humano e a asa do morcego são órgãos:', options: ['análogos', 'homólogos', 'vestigiais', 'idênticos'], answer: 1, why: 'Mesma origem embrionária, funções diferentes.' },
    { q: 'A fonte primária de variabilidade genética é a:', options: ['mutação', 'seleção natural', 'lei do uso e desuso', 'migração'], answer: 0, why: 'Novos alelos surgem por mutação.' },
    { q: 'A asa de um inseto e a asa de uma ave são órgãos:', options: ['homólogos', 'análogos', 'vestigiais', 'idênticos'], answer: 1, why: 'Mesma função, origens diferentes (convergência evolutiva).' }] },
{ id: 'bio-imunologia', subject: 'Biologia', area: 'Saúde', title: 'Sistema imune, vacinas e doenças', level: 'Básico',
  learn: [
    { h: 'Defesas do corpo', p: ['A imunidade inata é a primeira barreira: pele, mucosas, inflamação e células que englobam invasores. A adaptativa é específica: linfócitos reconhecem antígenos (moléculas do invasor) e produzem anticorpos, guardando memória para respostas futuras mais rápidas.'] },
    { h: 'Vacina x soro', p: ['Vacina contém o agente atenuado, inativado ou partes dele. O corpo produz os próprios anticorpos e células de memória: é imunização ativa, demora a agir e dura muito. Serve para prevenir.', 'Soro contém anticorpos prontos, produzidos por outro animal: é imunização passiva, age imediatamente e dura pouco. Serve para tratar emergências (picada de cobra, tétano).'] },
    { h: 'Agentes e doenças frequentes no ENEM', p: ['Vírus: gripe, covid-19, dengue, zika, chikungunya, sarampo, HIV. Antibióticos não funcionam contra vírus. Bactérias: tuberculose, tétano, leptospirose, cólera.', 'Protozoários: malária (mosquito Anopheles), doença de Chagas (inseto barbeiro), leishmaniose. Vermes: esquistossomose (caramujo e água contaminada), ascaridíase. Dengue, zika e chikungunya são transmitidas pelo Aedes aegypti: combater água parada é a principal prevenção.'] },
    { h: 'Imunidade de rebanho', p: ['Quando grande parte da população está vacinada, o agente circula pouco e protege também quem não pode se vacinar. Quedas na cobertura vacinal permitem a volta de doenças controladas, como o sarampo.'] }],
  examples: [
    { q: 'Uma pessoa picada por uma cobra deve receber soro ou vacina?', steps: ['O veneno age rápido; não há tempo para o corpo produzir anticorpos.', 'Soro antiofídico, que traz anticorpos prontos.'] }],
  summary: ['Vacina: ativa, preventiva, com memória.', 'Soro: passiva, imediata, curativa.', 'Antibiótico só age em bactérias.', 'Aedes: dengue, zika, chikungunya. Anopheles: malária. Barbeiro: Chagas.'],
  mistakes: ['Tomar antibiótico para gripe.', 'Confundir vetor (o mosquito) com agente causador (o vírus ou protozoário).', 'Achar que soro dá imunidade duradoura.'],
  formulas: [],
  quiz: [
    { q: 'A vacina provoca:', options: ['imunização passiva imediata', 'imunização ativa, com memória', 'cura de uma doença já instalada', 'a entrada de anticorpos prontos'], answer: 1, why: 'O próprio corpo produz anticorpos e células de memória.' },
    { q: 'Uma pessoa picada por cobra venenosa deve receber:', options: ['vacina', 'soro antiofídico', 'antibiótico', 'antiviral'], answer: 1, why: 'Anticorpos prontos neutralizam o veneno rapidamente.' },
    { q: 'Antibióticos não curam a gripe porque ela é causada por:', options: ['vírus', 'bactéria', 'fungo', 'herança genética'], answer: 0, why: 'Antibióticos atuam em estruturas de bactérias.' },
    { q: 'A dengue é transmitida pelo mosquito:', options: ['barbeiro', 'Aedes aegypti', 'Anopheles', 'caramujo'], answer: 1, why: 'O Aedes também transmite zika e chikungunya.' },
    { q: 'A malária é causada por um:', options: ['vírus', 'bactéria', 'protozoário', 'fungo'], answer: 2, why: 'O Plasmodium, transmitido pelo Anopheles.' }] },
]
