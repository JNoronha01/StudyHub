// Módulo de Redação: aulas, repertórios, temas oficiais, conectivos e redação-modelo comentada.
export type Lesson = { id: string; title: string; minutes: number; intro: string; sections: { h: string; p: string[] }[]; tips: string[] }

export const lessons: Lesson[] = [
{ id: 'proposta', title: '1. Entendendo a proposta', minutes: 6,
  intro: 'Metade das notas baixas nasce antes da primeira linha: o candidato não entende o recorte do tema.',
  sections: [
    { h: 'Tema x assunto', p: ['O assunto é amplo ("internet"); o tema é um recorte específico ("Manipulação do comportamento do usuário pelo controle de dados na internet", ENEM 2018). Escrever sobre o assunto em geral é tangenciar o tema e derruba as competências 2, 3 e 5.', 'Sublinhe as palavras-chave do tema. Todas precisam aparecer, com as mesmas palavras ou sinônimos, ao longo do texto, principalmente na introdução e na conclusão.'] },
    { h: 'Os textos motivadores', p: ['Eles servem para inspirar, não para copiar. Copiar trechos não conta como texto seu, e uma redação feita só de cópia é anulada. Use-os para identificar o problema, as causas e os atores sociais envolvidos.'] },
    { h: 'Perguntas para fazer antes de escrever', p: ['Qual é exatamente o problema? Por que ele existe (causas)? Quem é afetado e como (consequências)? Quem pode resolver (agentes)? Com essas quatro respostas você já tem a tese, os dois argumentos e a proposta.'] }],
  tips: ['Gaste de 10 a 15 minutos planejando. Quem planeja escreve mais rápido e com menos rasuras.', 'Escreva o tema completo no topo do rascunho e confira se cada parágrafo conversa com ele.'] },
{ id: 'introducao', title: '2. Introdução nota 1000', minutes: 7,
  intro: 'A introdução apresenta o tema, a sua tese e os caminhos que o texto vai seguir.',
  sections: [
    { h: 'Estrutura em três movimentos', p: ['1) Contextualização: comece com um repertório legitimado (uma lei, um pensador, um fato histórico, uma obra) que se ligue ao tema. 2) Apresentação do problema: mostre que a realidade brasileira contradiz ou se relaciona com esse repertório. 3) Tese com os dois argumentos: deixe claro o seu ponto de vista e as duas causas que serão desenvolvidas.'] },
    { h: 'Modelo para treinar', p: ['"[Repertório] defende/afirma que [ideia]. No entanto, no Brasil atual, [problema do tema] demonstra que essa ideia ainda não se concretiza. Isso ocorre, sobretudo, devido a [argumento 1] e a [argumento 2]."', 'Use o modelo como treino de estrutura, mas fuja de frases decoradas que não dizem nada sobre o tema: os corretores reconhecem e não pontuam bem.'] }],
  tips: ['Introdução com 4 a 6 linhas é suficiente.', 'A tese é a frase mais importante do texto: releia-a antes de escrever cada parágrafo.'] },
{ id: 'desenvolvimento', title: '3. Desenvolvimento que convence', minutes: 9,
  intro: 'Cada parágrafo de desenvolvimento defende um dos argumentos anunciados na introdução.',
  sections: [
    { h: 'A estrutura TEC do parágrafo', p: ['T de tópico frasal: a primeira frase anuncia o argumento ("Em primeiro lugar, a baixa educação midiática favorece..."). E de explicação e embasamento: explique o porquê, com repertório, dado, exemplo ou relação de causa e consequência. C de conclusão: feche o parágrafo ligando o argumento de volta ao tema.'] },
    { h: 'Repertório produtivo', p: ['Repertório bom é legitimado (de fonte confiável), pertinente (tem a ver com o tema) e produtivo (você o usa para explicar o argumento). Citar Bauman e passar para outra ideia não ajuda; explicar como a "modernidade líquida" ajuda a entender o problema, sim.'] },
    { h: 'Aprofundamento', p: ['A competência 3 premia quem vai além do óbvio. Pergunte "por quê?" duas vezes. Ex.: "As pessoas compartilham notícias falsas." Por quê? "Porque confirmam suas crenças." Por quê isso importa? "Porque os algoritmos priorizam o que gera engajamento, criando bolhas." Agora o argumento tem profundidade.'] }],
  tips: ['Dois parágrafos de desenvolvimento, com 7 a 9 linhas cada, é o formato mais seguro.', 'Evite argumentos de senso comum sem explicação, como "isso é um absurdo".'] },
{ id: 'conclusao', title: '4. Conclusão e proposta de intervenção', minutes: 8,
  intro: 'A conclusão retoma a tese e propõe uma solução detalhada. É a competência 5.',
  sections: [
    { h: 'Os 5 elementos da proposta', p: ['Agente (quem faz), ação (o que faz), meio ou modo (como faz), finalidade (para quê) e detalhamento (uma informação a mais sobre qualquer elemento). Sem os cinco, a nota da competência 5 não chega a 200.'] },
    { h: 'Modelo comentado', p: ['"Portanto, cabe ao Ministério da Educação [agente] incluir a educação midiática no currículo escolar [ação], por meio de oficinas práticas de checagem de fatos [meio], realizadas em parceria com agências de verificação [detalhamento], a fim de formar cidadãos capazes de identificar a desinformação [finalidade]."'] },
    { h: 'Duas propostas?', p: ['Uma proposta completa já pode garantir a nota máxima na competência 5. Uma segunda proposta, ligada ao outro argumento, é bem-vinda se houver tempo e linhas, mas não substitui o detalhamento da primeira.'] }],
  tips: ['Respeite os direitos humanos: nada de propostas violentas, discriminatórias ou que ataquem liberdades.', 'Prefira agentes específicos: "Ministério da Saúde", "escolas", "mídia", "ONGs".'] },
{ id: 'coesao', title: '5. Coesão e conectivos', minutes: 6,
  intro: 'A competência 4 avalia como as ideias se ligam: entre frases e entre parágrafos.',
  sections: [
    { h: 'O que o corretor procura', p: ['Conectivos variados e adequados entre os parágrafos e dentro deles, além de retomadas sem repetição (pronomes, sinônimos, expressões como "tal problema", "esse cenário").', 'Repetir "além disso" em todos os parágrafos ou usar um conectivo com o sentido errado (como "portanto" para introduzir uma oposição) tira pontos.'] },
    { h: 'Retomada de termos', p: ['Em vez de repetir "desinformação" cinco vezes, alterne: "esse fenômeno", "a propagação de notícias falsas", "tal cenário", "o problema". Isso é coesão referencial.'] }],
  tips: ['Comece cada parágrafo com um conectivo diferente.', 'Veja a lista de conectivos por posição na aba "Conectivos".'] },
{ id: 'norma', title: '6. Norma-padrão sem sustos', minutes: 7,
  intro: 'A competência 1 tolera poucos desvios. Estes são os mais comuns nas redações.',
  sections: [
    { h: 'Os erros que mais tiram pontos', p: ['Vírgula entre sujeito e verbo ("A população brasileira, enfrenta" está errado). Crase antes de verbo ou de palavra masculina. Concordância com sujeito posposto ("Faltam políticas", e não "Falta políticas"). "Mais" (intensidade) x "mas" (oposição). "Onde" para algo que não é lugar.', 'Também contam: ortografia, acentuação, separação silábica na quebra de linha e marcas de oralidade ("a gente", "tipo", "né").'] },
    { h: 'Registro formal', p: ['Evite primeira pessoa do singular ("eu acho") e expressões coloquiais. Prefira construções impessoais: "percebe-se", "é fundamental", "nota-se".'] }],
  tips: ['Na revisão final, leia o texto procurando só vírgulas e concordância.', 'Frases curtas erram menos. Períodos de três linhas ou mais são uma armadilha.'] },
{ id: 'zero', title: '7. O que zera e o que derruba a nota', minutes: 5,
  intro: 'Conheça as armadilhas para nunca cair nelas.',
  sections: [
    { h: 'Nota zero', p: ['Fuga total ao tema; não obedecer ao tipo dissertativo-argumentativo (escrever poema ou narração); texto com até 7 linhas; cópia dos textos motivadores sem texto próprio; trechos deliberadamente desconectados do tema; impropérios, desenhos ou identificação; folha em branco.'] },
    { h: 'O que derruba sem zerar', p: ['Tangenciamento do tema (falar só do assunto amplo), repertório de bolso sem uso, argumentos superficiais, repetição de conectivos, proposta incompleta ou que desrespeita os direitos humanos.'] }],
  tips: ['Escreva no mínimo 20 linhas: textos curtos dificilmente desenvolvem bem os argumentos.', 'Não assine nem escreva seu nome em nenhum lugar da folha de redação.'] },
{ id: 'treino', title: '8. Rotina de treino até a prova', minutes: 4,
  intro: 'Redação é habilidade: melhora com prática e correção.',
  sections: [
    { h: 'Plano semanal', p: ['Semana típica: 1 redação completa com tempo marcado (1h a 1h20), 2 sessões de 20 minutos treinando só introduções ou só propostas, e leitura de 2 notícias ou artigos de opinião para montar repertório.'] },
    { h: 'Reescrever é o segredo', p: ['Depois de receber a correção, reescreva o parágrafo mais fraco. É a reescrita que fixa o aprendizado, não apenas ler a nota.'] }],
  tips: ['Use a aba "Treinar" para escrever com contador de linhas e checar os 5 elementos da proposta.', 'Monte seu próprio caderno de repertórios por eixo temático.'] },
]

export type Repertorio = { name: string; kind: string; idea: string; use: string; eixos: string[] }
export const repertorios: Repertorio[] = [
  { name: 'Constituição Federal de 1988, art. 6º', kind: 'Lei', idea: 'Lista os direitos sociais: educação, saúde, alimentação, trabalho, moradia, lazer, segurança, entre outros.', use: 'Abertura clássica: mostrar que um direito garantido no papel não chega a todos na prática.', eixos: ['Cidadania', 'Educação', 'Saúde'] },
  { name: 'Constituição Federal, art. 205', kind: 'Lei', idea: 'A educação é direito de todos e dever do Estado e da família.', use: 'Temas de evasão escolar, inclusão, acesso à educação.', eixos: ['Educação'] },
  { name: 'Constituição Federal, art. 225', kind: 'Lei', idea: 'Todos têm direito ao meio ambiente ecologicamente equilibrado, inclusive as futuras gerações.', use: 'Temas ambientais, desmatamento, sustentabilidade.', eixos: ['Meio ambiente'] },
  { name: 'Paulo Freire', kind: 'Pensador', idea: 'Defendia uma educação libertadora e crítica, que forma sujeitos capazes de transformar a realidade.', use: 'Educação, desinformação, cidadania, formação crítica.', eixos: ['Educação', 'Tecnologia'] },
  { name: 'Zygmunt Bauman — modernidade líquida', kind: 'Pensador', idea: 'Relações, valores e instituições se tornaram frágeis e passageiros na sociedade contemporânea.', use: 'Redes sociais, consumo, relações afetivas, saúde mental.', eixos: ['Tecnologia', 'Saúde'] },
  { name: 'Byung-Chul Han — Sociedade do Cansaço', kind: 'Pensador', idea: 'A cobrança por desempenho constante leva ao esgotamento e a doenças como depressão e burnout.', use: 'Saúde mental, trabalho, redes sociais.', eixos: ['Saúde', 'Trabalho'] },
  { name: 'Émile Durkheim — anomia', kind: 'Pensador', idea: 'Quando as normas sociais se enfraquecem, cresce a desorientação e o desrespeito às regras.', use: 'Violência, desrespeito a leis, crise de valores.', eixos: ['Cidadania'] },
  { name: 'Hannah Arendt — banalidade do mal', kind: 'Pensadora', idea: 'Pessoas comuns podem praticar ou tolerar injustiças quando deixam de refletir criticamente.', use: 'Discurso de ódio, violência normalizada, intolerância.', eixos: ['Cidadania', 'Tecnologia'] },
  { name: 'Simone de Beauvoir', kind: 'Pensadora', idea: 'Os papéis atribuídos às mulheres são construções sociais, não destinos naturais.', use: 'Violência contra a mulher, trabalho de cuidado, desigualdade de gênero.', eixos: ['Mulher', 'Cidadania'] },
  { name: 'Lei Maria da Penha (Lei 11.340/2006)', kind: 'Lei', idea: 'Cria mecanismos para coibir a violência doméstica e familiar contra a mulher.', use: 'Mostrar que há lei, mas a violência persiste por fatores culturais e falta de estrutura.', eixos: ['Mulher'] },
  { name: 'Marco Civil da Internet (Lei 12.965/2014) e LGPD (Lei 13.709/2018)', kind: 'Lei', idea: 'Regulam direitos e deveres no uso da internet e a proteção de dados pessoais.', use: 'Privacidade, dados, desinformação, crimes virtuais.', eixos: ['Tecnologia'] },
  { name: 'Estatuto da Pessoa Idosa (Lei 10.741/2003)', kind: 'Lei', idea: 'Garante direitos às pessoas com 60 anos ou mais.', use: 'Envelhecimento, abandono, etarismo, previdência.', eixos: ['Cidadania', 'Saúde'] },
  { name: 'Ailton Krenak — Ideias para Adiar o Fim do Mundo', kind: 'Pensador', idea: 'Critica a ideia de humanidade separada da natureza e valoriza os saberes dos povos originários.', use: 'Meio ambiente, povos tradicionais, consumo.', eixos: ['Meio ambiente', 'Cultura'] },
  { name: 'Sérgio Buarque de Holanda — o homem cordial', kind: 'Pensador', idea: 'Os brasileiros tenderiam a misturar relações pessoais e públicas, favorecendo o personalismo.', use: 'Corrupção, patrimonialismo, desrespeito a regras públicas.', eixos: ['Cidadania'] },
  { name: 'Djamila Ribeiro — Pequeno Manual Antirracista', kind: 'Pensadora', idea: 'O combate ao racismo exige atitude ativa, e não apenas a ausência de ofensas.', use: 'Racismo, herança africana, desigualdade racial.', eixos: ['Cidadania', 'Cultura'] },
  { name: 'Adorno e Horkheimer — indústria cultural', kind: 'Pensadores', idea: 'A cultura produzida como mercadoria padroniza gostos e estimula o consumo passivo.', use: 'Acesso à cultura, cinema, mídia, consumo.', eixos: ['Cultura', 'Tecnologia'] },
  { name: 'Revolta da Vacina (1904)', kind: 'Fato histórico', idea: 'A vacinação obrigatória sem informação gerou revolta popular no Rio de Janeiro.', use: 'Desinformação em saúde, campanhas de vacinação, comunicação pública.', eixos: ['Saúde', 'Tecnologia'] },
  { name: 'Lei Áurea (1888)', kind: 'Fato histórico', idea: 'Aboliu a escravidão sem políticas de integração dos libertos.', use: 'Raízes históricas da desigualdade racial e social.', eixos: ['Cidadania', 'Cultura'] },
  { name: 'Black Mirror (série)', kind: 'Obra', idea: 'Episódios exploram os efeitos sombrios da tecnologia na vida social.', use: 'Redes sociais, vigilância, dados, dependência tecnológica.', eixos: ['Tecnologia'] },
  { name: 'Vidas Secas, de Graciliano Ramos', kind: 'Obra', idea: 'Retrata a miséria e a desumanização de uma família de retirantes.', use: 'Desigualdade regional, fome, invisibilidade social.', eixos: ['Cidadania'] },
]
export const eixos = ['Todos', 'Educação', 'Tecnologia', 'Saúde', 'Cidadania', 'Mulher', 'Meio ambiente', 'Cultura', 'Trabalho']

export const temas = [
  { year: 2024, tema: 'Desafios para a valorização da herança africana no Brasil' },
  { year: 2023, tema: 'Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil' },
  { year: 2022, tema: 'Desafios para a valorização de comunidades e povos tradicionais no Brasil' },
  { year: 2021, tema: 'Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil' },
  { year: 2020, tema: 'O estigma associado às doenças mentais na sociedade brasileira' },
  { year: 2019, tema: 'Democratização do acesso ao cinema no Brasil' },
  { year: 2018, tema: 'Manipulação do comportamento do usuário pelo controle de dados na internet' },
  { year: 2017, tema: 'Desafios para a formação educacional de surdos no Brasil' },
  { year: 2016, tema: 'Caminhos para combater a intolerância religiosa no Brasil' },
  { year: 2015, tema: 'A persistência da violência contra a mulher na sociedade brasileira' },
  { year: 2014, tema: 'Publicidade infantil em questão no Brasil' },
]

export const conectivos = [
  { pos: 'Início da introdução', list: ['De acordo com', 'Segundo', 'Na obra', 'Historicamente,', 'Desde'] },
  { pos: 'Contraste com a realidade', list: ['No entanto,', 'Contudo,', 'Todavia,', 'Entretanto,', 'Apesar disso,'] },
  { pos: '1º parágrafo de desenvolvimento', list: ['Em primeiro lugar,', 'Primordialmente,', 'De início,', 'A princípio,'] },
  { pos: '2º parágrafo de desenvolvimento', list: ['Além disso,', 'Ademais,', 'Outrossim,', 'Somado a isso,', 'Paralelamente,'] },
  { pos: 'Explicar e exemplificar', list: ['Isso ocorre porque', 'Visto que', 'Uma vez que', 'Nesse sentido,', 'Por exemplo,'] },
  { pos: 'Consequência', list: ['Dessa forma,', 'Por conseguinte,', 'Consequentemente,', 'Desse modo,'] },
  { pos: 'Conclusão', list: ['Portanto,', 'Logo,', 'Diante do exposto,', 'Assim,', 'Em suma,'] },
  { pos: 'Proposta (meio e finalidade)', list: ['por meio de', 'mediante', 'a fim de', 'com o intuito de', 'para que'] },
]

export const modelo = {
  tema: 'Desafios para combater a desinformação no Brasil (tema de treino, não oficial)',
  paragraphs: [
    { label: 'Introdução', text: 'Segundo o educador Paulo Freire, a educação deve formar sujeitos críticos, capazes de ler o mundo e transformá-lo. No entanto, no Brasil contemporâneo, a rápida propagação de notícias falsas revela que muitos cidadãos ainda não dispõem dessa leitura crítica. Esse cenário persiste, sobretudo, devido à baixa educação midiática da população e à lógica de engajamento das plataformas digitais.', comment: 'Repertório legitimado (Paulo Freire) ligado ao tema, contraste com a realidade ("No entanto") e tese com os dois argumentos anunciados.' },
    { label: 'Desenvolvimento 1', text: 'Em primeiro lugar, a ausência de educação midiática nas escolas dificulta a identificação de conteúdos enganosos. Isso ocorre porque grande parte dos estudantes aprende a usar as redes sociais de forma intuitiva, sem orientação sobre como verificar fontes, datas e intenções de uma publicação. Dessa forma, cria-se um público vulnerável, que compartilha informações falsas por desconhecer métodos simples de checagem, o que alimenta o ciclo da desinformação.', comment: 'Tópico frasal claro, explicação da causa ("Isso ocorre porque") e consequência que volta ao tema. Estrutura TEC completa.' },
    { label: 'Desenvolvimento 2', text: 'Além disso, o modelo de negócio das plataformas digitais favorece a circulação de conteúdos sensacionalistas. Como seus algoritmos priorizam publicações que geram mais reações, notícias alarmantes e falsas tendem a alcançar mais pessoas do que informações verificadas. Nesse sentido, o conceito de modernidade líquida, de Zygmunt Bauman, ajuda a compreender o problema: em uma sociedade de consumo rápido, a velocidade do compartilhamento se sobrepõe ao compromisso com a verdade.', comment: 'Segundo argumento com conectivo diferente, repertório produtivo (Bauman é explicado e aplicado, não apenas citado).' },
    { label: 'Conclusão', text: 'Portanto, para combater a desinformação, é fundamental que o Ministério da Educação inclua a educação midiática no currículo do ensino básico, por meio de oficinas práticas de checagem de fatos realizadas em parceria com agências de verificação, a fim de formar cidadãos capazes de identificar conteúdos enganosos. Paralelamente, cabe ao Congresso Nacional exigir transparência dos algoritmos das plataformas. Assim, o ideal de Paulo Freire poderá, enfim, se concretizar.', comment: 'Proposta com os 5 elementos (agente, ação, meio, detalhamento e finalidade), segunda proposta ligada ao 2º argumento e retomada do repertório inicial (fecho circular).' },
  ],
}
