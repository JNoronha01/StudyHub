import { type Topic } from './types'

export const portugues: Topic[] = [
{ id: 'por-interpretacao', subject: 'Português', area: 'Leitura', title: 'Interpretação de texto e gêneros', level: 'Básico',
  learn: [
    { h: 'Compreender x interpretar', p: ['Compreender é identificar o que está escrito no texto. Interpretar é tirar conclusões a partir dele (inferências). As questões do ENEM misturam as duas coisas, mas a resposta certa sempre tem apoio no texto, nunca na sua opinião.'] },
    { h: 'Método de leitura na prova', p: ['1) Leia primeiro o comando da questão para saber o que procurar. 2) Leia o texto observando título, autor, data e fonte: eles dizem muito sobre a intenção. 3) Elimine alternativas que extrapolam (dizem mais do que o texto), reduzem (dizem menos) ou contradizem o texto.', 'Palavras absolutas como "sempre", "nunca", "todos" e "apenas" costumam indicar alternativas erradas, porque generalizam além do texto.'] },
    { h: 'Gêneros textuais', p: ['Gênero é a forma social do texto: notícia, reportagem, crônica, charge, tirinha, propaganda, artigo de opinião, receita, infográfico, meme. Cada um tem finalidade, linguagem e suporte próprios.', 'Tipos textuais são as estruturas internas: narrativo (conta fatos), descritivo (caracteriza), dissertativo-argumentativo (defende uma tese), expositivo (explica) e injuntivo (orienta, dá instruções).'] },
    { h: 'Textos multimodais', p: ['Charges, tirinhas, propagandas e infográficos juntam imagem e palavra. O sentido nasce da combinação: observe expressões, cores, balões e o contexto histórico. A charge, em geral, critica um fato atual com humor e ironia.'] }],
  examples: [
    { q: 'Uma propaganda de seguro mostra um carro amassado e a frase "Imprevistos acontecem. Esteja preparado." Qual a finalidade do texto?', steps: ['Gênero: propaganda (finalidade de convencer o leitor a comprar).', 'A imagem mostra o risco; a frase oferece a solução. A finalidade é persuadir o leitor a contratar o seguro.'] }],
  summary: ['A resposta precisa de apoio no texto.', 'Leia o comando antes do texto.', 'Descarte alternativas que extrapolam, reduzem ou contradizem.', 'Gênero = forma social; tipo = estrutura interna.', 'Em textos multimodais, imagem e texto constroem o sentido juntos.'],
  mistakes: ['Responder com a própria opinião ou conhecimento prévio, sem base no texto.', 'Ignorar a fonte e a data, que revelam o contexto.', 'Confundir gênero (crônica) com tipo (narrativo).'],
  formulas: [],
  quiz: [
    { q: 'Numa questão de interpretação, a alternativa que "extrapola" o texto é aquela que:', options: ['repete uma ideia do texto com outras palavras', 'afirma mais do que o texto permite concluir', 'resume a ideia central', 'cita o autor'], answer: 1, why: 'Ela vai além do que está escrito ou sugerido.' },
    { q: 'Um texto que ensina a montar um móvel, com verbos no imperativo, é predominantemente:', options: ['narrativo', 'descritivo', 'injuntivo', 'argumentativo'], answer: 2, why: 'O tipo injuntivo orienta e dá instruções.' },
    { q: 'A principal finalidade de uma charge costuma ser:', options: ['informar de forma neutra', 'criticar um fato atual com humor', 'ensinar um procedimento', 'narrar uma história longa'], answer: 1, why: 'A charge comenta e critica acontecimentos com ironia.' },
    { q: 'Alternativas com "sempre", "nunca" e "todos" tendem a estar erradas porque:', options: ['são muito curtas', 'generalizam além do que o texto diz', 'usam linguagem informal', 'contradizem a gramática'], answer: 1, why: 'Textos raramente sustentam afirmações absolutas.' }] },
{ id: 'por-funcoes', subject: 'Português', area: 'Linguagem', title: 'Funções da linguagem', level: 'Básico',
  learn: [
    { h: 'Os elementos da comunicação', p: ['Toda comunicação tem emissor, receptor, mensagem, código, canal e referente (o assunto). Cada função da linguagem destaca um desses elementos.'] },
    { h: 'As seis funções', p: ['Referencial (ou denotativa): foco no referente, informa de forma objetiva. Notícias, textos científicos e didáticos.', 'Emotiva (ou expressiva): foco no emissor, expressa sentimentos e opiniões, com primeira pessoa e exclamações. Diários e poemas líricos.', 'Apelativa (ou conativa): foco no receptor, tenta convencê-lo, com imperativo e vocativo. Propagandas e discursos.', 'Fática: foco no canal, testa ou mantém o contato ("Alô?", "Tá me ouvindo?", "Bom dia").', 'Metalinguística: foco no código, a linguagem falando de si mesma (dicionário, um poema sobre fazer poemas, um filme sobre cinema).', 'Poética: foco na mensagem, na forma e na sonoridade (rimas, ritmo, jogos de palavras). Aparece em poemas, slogans e letras de música.'] },
    { h: 'Função predominante', p: ['Um texto pode ter várias funções; a questão pede a predominante. Pergunte: o objetivo principal é informar, expressar, convencer, manter o contato, explicar a própria linguagem ou trabalhar a forma?'] }],
  examples: [
    { q: 'Qual a função predominante em "Beba Coca... quer dizer, beba água! Hidrate-se."?', steps: ['Há imperativo ("beba", "hidrate-se") dirigido ao leitor.', 'O objetivo é convencer: função apelativa (conativa).'] },
    { q: 'Um verbete de dicionário que define a palavra "palavra" usa qual função?', steps: ['A linguagem explica o próprio código.', 'Função metalinguística.'] }],
  summary: ['Referencial: informar (referente).', 'Emotiva: expressar (emissor).', 'Apelativa: convencer (receptor).', 'Fática: contato (canal).', 'Metalinguística: o código explica o código.', 'Poética: a forma da mensagem.'],
  mistakes: ['Achar que a função poética só existe em poemas (slogans também a usam).', 'Confundir fática (contato) com apelativa (convencimento).', 'Marcar emotiva só porque há adjetivos.'],
  formulas: [],
  quiz: [
    { q: 'Em propagandas, com verbos no imperativo, predomina a função:', options: ['referencial', 'apelativa', 'fática', 'metalinguística'], answer: 1, why: 'O foco é convencer o receptor.' },
    { q: '"Alô? Está me ouvindo? A ligação está falhando." A função predominante é:', options: ['emotiva', 'poética', 'fática', 'referencial'], answer: 2, why: 'Testa o canal de comunicação.' },
    { q: 'Um poema que fala sobre o ato de escrever poemas apresenta função:', options: ['metalinguística', 'apelativa', 'fática', 'referencial'], answer: 0, why: 'A linguagem tematiza a própria linguagem.' },
    { q: 'Uma notícia objetiva, em terceira pessoa, sobre o resultado de uma eleição tem função predominante:', options: ['emotiva', 'referencial', 'poética', 'apelativa'], answer: 1, why: 'O foco é informar sobre o referente.' }] },
{ id: 'por-variacao', subject: 'Português', area: 'Linguagem', title: 'Variação linguística e preconceito', level: 'Básico',
  learn: [
    { h: 'Toda língua varia', p: ['Não existe um único português "certo" para todas as situações. A língua muda conforme a região, o grupo social, a situação de uso e a época. Essas variações são legítimas e seguem regras próprias.'] },
    { h: 'Tipos de variação', p: ['Regional (diatópica): sotaques e vocabulário de cada lugar ("mandioca", "aipim", "macaxeira"). Social (diastrática): ligada a idade, profissão, escolaridade, grupos (gírias, jargões técnicos). Situacional (diafásica): formal ou informal conforme o contexto. Histórica (diacrônica): mudanças ao longo do tempo ("vossa mercê" → "você").'] },
    { h: 'Norma-padrão e adequação', p: ['A norma-padrão é a variedade de prestígio, exigida em situações formais como a redação do ENEM, documentos e entrevistas de emprego. O conceito central não é "certo e errado", mas adequado e inadequado à situação.'] },
    { h: 'Preconceito linguístico', p: ['É julgar uma pessoa como inferior pelo jeito de falar. O ENEM cobra muito esse tema: a resposta correta costuma valorizar a diversidade linguística e rejeitar a ideia de que uma variedade é "errada" por natureza.'] }],
  examples: [
    { q: 'Uma tirinha mostra um avô dizendo "Nóis vai" e o neto corrigindo de forma grosseira. Qual a crítica provável?', steps: ['A fala do avô é uma variedade social legítima, compreensível e com regras próprias.', 'A crítica é ao preconceito linguístico do neto.'] }],
  summary: ['Variação regional, social, situacional e histórica.', 'Norma-padrão: variedade de prestígio, usada em contextos formais.', 'Adequação ao contexto > "certo e errado".', 'Preconceito linguístico é discriminação social.'],
  mistakes: ['Chamar de "erro" toda forma diferente da norma-padrão.', 'Achar que o ENEM aceita linguagem informal na redação (lá a norma-padrão é obrigatória).'],
  formulas: [],
  quiz: [
    { q: 'O uso de "aipim", "mandioca" e "macaxeira" para o mesmo alimento é exemplo de variação:', options: ['histórica', 'regional', 'situacional', 'social'], answer: 1, why: 'Cada região usa um nome.' },
    { q: 'A mudança de "vossa mercê" para "você" é um exemplo de variação:', options: ['histórica', 'regional', 'situacional', 'social'], answer: 0, why: 'A forma mudou ao longo do tempo.' },
    { q: 'Segundo a visão adotada pelo ENEM, a fala informal entre amigos:', options: ['é sempre errada', 'é adequada àquela situação', 'deveria ser proibida', 'só existe no Nordeste'], answer: 1, why: 'O critério é a adequação ao contexto.' },
    { q: 'O preconceito linguístico consiste em:', options: ['estudar gramática', 'discriminar alguém pelo modo como fala', 'usar gírias', 'falar outra língua'], answer: 1, why: 'É uma forma de discriminação social.' }] },
{ id: 'por-figuras', subject: 'Português', area: 'Semântica', title: 'Figuras de linguagem', level: 'Médio',
  learn: [
    { h: 'Figuras de palavra', p: ['Metáfora: comparação implícita ("Meu coração é um balde despejado"). Comparação: com conectivo ("forte como um touro"). Metonímia: troca de um termo por outro relacionado ("li Machado de Assis", isto é, a obra dele; "bebeu dois copos", o conteúdo). Catacrese: metáfora já incorporada à língua ("pé da mesa", "braço da cadeira").'] },
    { h: 'Figuras de pensamento', p: ['Ironia: diz o contrário do que se pensa ("Que lindo, tirou zero!"). Hipérbole: exagero ("Já te falei um milhão de vezes"). Eufemismo: suaviza ("ele partiu" por "morreu"). Antítese: ideias opostas ("amor e ódio"). Paradoxo: opostos que parecem impossíveis juntos ("dor que desatina sem doer"). Personificação (prosopopeia): características humanas a seres não humanos ("o vento sussurrava").'] },
    { h: 'Figuras de som e de construção', p: ['Aliteração: repetição de consoantes ("o rato roeu a roupa do rei de Roma"). Assonância: repetição de vogais. Onomatopeia: imitação de sons ("tic-tac", "au-au").', 'Elipse: omissão de termo fácil de deduzir ("Na sala, apenas dois alunos"). Pleonasmo: repetição para dar ênfase ("vi com meus próprios olhos"); quando sem intenção, é vício ("subir para cima").'] }],
  examples: [
    { q: 'Identifique a figura em "O Brasil chorou a derrota".', steps: ['"Brasil" está no lugar de "os brasileiros": metonímia (o lugar pelos habitantes).', '"Chorou" também poderia sugerir hipérbole, mas a substituição do lugar pelas pessoas é o principal.'] }],
  summary: ['Metáfora: comparação implícita. Comparação: com "como".', 'Metonímia: troca por relação de proximidade.', 'Ironia, hipérbole, eufemismo, antítese, paradoxo, personificação.', 'Aliteração (consoantes), assonância (vogais), onomatopeia (sons).'],
  mistakes: ['Confundir antítese (opostos lado a lado) com paradoxo (opostos que se fundem numa ideia contraditória).', 'Confundir metáfora com metonímia: na metáfora há semelhança; na metonímia, proximidade.'],
  formulas: [],
  quiz: [
    { q: '"Ele tem um coração de pedra." A figura é:', options: ['metáfora', 'metonímia', 'onomatopeia', 'eufemismo'], answer: 0, why: 'Comparação implícita entre o coração e a dureza da pedra.' },
    { q: '"Morri de rir com aquele filme." A figura é:', options: ['eufemismo', 'hipérbole', 'antítese', 'catacrese'], answer: 1, why: 'É um exagero intencional.' },
    { q: '"Ele foi desta para melhor" (no sentido de morrer) é:', options: ['ironia', 'eufemismo', 'paradoxo', 'pleonasmo'], answer: 1, why: 'Suaviza uma ideia dura.' },
    { q: '"Vou ler Clarice Lispector nas férias." A figura é:', options: ['metonímia', 'metáfora', 'hipérbole', 'aliteração'], answer: 0, why: 'O autor está no lugar da obra.' },
    { q: '"O sino da igreja chorava a morte do padre." A figura é:', options: ['onomatopeia', 'personificação', 'elipse', 'antítese'], answer: 1, why: 'O sino recebe uma ação humana (chorar).' }] },
{ id: 'por-coesao', subject: 'Português', area: 'Gramática', title: 'Coesão, conectivos e crase', level: 'Médio',
  learn: [
    { h: 'Coesão e coerência', p: ['Coesão é a ligação entre as partes do texto, feita por pronomes, sinônimos e conectivos. Coerência é a lógica do sentido. Um texto pode ter frases bem ligadas e, ainda assim, ser incoerente.', 'Coesão referencial retoma termos sem repeti-los: "Machado de Assis nasceu no Rio. O escritor..." (sinônimo); "Ele..." (pronome).'] },
    { h: 'Conectivos e relações de sentido', p: ['Adição: e, além disso, também. Oposição: mas, porém, contudo, todavia, no entanto. Concessão: embora, ainda que, mesmo que (introduz um obstáculo que não impede o fato). Causa: porque, pois, já que, visto que. Consequência: tanto que, de modo que. Conclusão: portanto, logo, assim. Condição: se, caso. Finalidade: para que, a fim de.', 'Trocar um conectivo por outro de mesmo valor é uma questão clássica: "porém" pode virar "contudo", mas não "portanto".'] },
    { h: 'Crase', p: ['Crase é a fusão da preposição "a" com o artigo "a": "Fui à escola" (fui a + a escola). Dica: troque por uma palavra masculina. Se virar "ao", tem crase: "Fui ao colégio" → "Fui à escola".', 'Não há crase antes de palavra masculina, de verbo, da maioria dos pronomes e de "a" no singular diante de palavra no plural ("a pessoas"). É obrigatória na indicação de horas ("às 8h") e em locuções femininas ("às vezes", "à noite").'] }],
  examples: [
    { q: 'Reescreva sem mudar o sentido: "Estudou muito, porém não passou."', steps: ['"Porém" indica oposição.', 'Pode ser trocado por "mas", "contudo", "todavia", "no entanto". Ou com concessão: "Embora tenha estudado muito, não passou."'] },
    { q: '"Entreguei o trabalho a professora." Há crase?', steps: ['Troque por masculino: "Entreguei o trabalho ao professor".', 'Virou "ao": há crase. "Entreguei o trabalho à professora."'] }],
  summary: ['Coesão: ligação. Coerência: sentido.', 'Oposição: mas, porém, contudo. Concessão: embora, ainda que.', 'Causa: porque, já que. Conclusão: portanto, logo.', 'Crase: troque por masculino; se virar "ao", tem crase.'],
  mistakes: ['Usar "onde" para algo que não é lugar ("a situação onde" deveria ser "a situação em que").', 'Crase antes de verbo ("começou à chover").', 'Trocar "mas" por "mais".'],
  formulas: [],
  quiz: [
    { q: 'Em "Choveu muito, portanto o jogo foi adiado", o conectivo indica:', options: ['oposição', 'conclusão', 'condição', 'concessão'], answer: 1, why: '"Portanto" introduz uma conclusão.' },
    { q: 'Qual conectivo pode substituir "porém" sem mudar o sentido?', options: ['portanto', 'contudo', 'porque', 'caso'], answer: 1, why: 'Ambos indicam oposição.' },
    { q: 'Assinale a frase com crase correta:', options: ['Ele começou à estudar.', 'Vou à praia amanhã.', 'Falei à ele.', 'Chegou à pé.'], answer: 1, why: '"Vou ao clube" → "Vou à praia". Nas outras há verbo, pronome ou palavra masculina.' },
    { q: '"Embora estivesse cansado, terminou a prova." A oração introduzida por "embora" expressa:', options: ['causa', 'concessão', 'finalidade', 'consequência'], answer: 1, why: 'Apresenta um obstáculo que não impediu o fato.' }] },
]
