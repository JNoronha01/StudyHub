import { type Topic } from './types'

export const historia: Topic[] = [
{ id: 'his-colonia', subject: 'História', area: 'Brasil', title: 'Brasil Colônia', level: 'Básico',
  learn: [
    { h: 'Primeiros tempos e capitanias', p: ['Após a chegada dos portugueses em 1500, a exploração inicial foi do pau-brasil, com mão de obra indígena por meio do escambo. Em 1534, o território foi dividido em capitanias hereditárias, entregues a donatários. Como a maioria fracassou, em 1549 criou-se o Governo-Geral, com Tomé de Sousa, sediado em Salvador.'] },
    { h: 'Economia açucareira', p: ['O açúcar, no Nordeste dos séculos XVI e XVII, seguiu o modelo plantation: latifúndio, monocultura, mão de obra escravizada e produção para exportação. O engenho era o centro da vida econômica e social, com a casa-grande e a senzala.'] },
    { h: 'Escravidão e resistência', p: ['Milhões de africanos foram trazidos à força pelo tráfico negreiro. A resistência foi constante: fugas, revoltas, preservação da cultura e formação de quilombos. Palmares, em Alagoas, foi o maior deles e resistiu por quase um século; seu líder mais conhecido, Zumbi, foi morto em 1695. O dia 20 de novembro, Dia da Consciência Negra, lembra essa data.'] },
    { h: 'Mineração e revoltas', p: ['No século XVIII, a descoberta de ouro em Minas Gerais deslocou o eixo econômico para o Sudeste, fez crescer as cidades e levou a capital para o Rio de Janeiro (1763). A Coroa cobrava o quinto (20% do ouro) e, quando os impostos atrasavam, a derrama.', 'Inspirada no Iluminismo e na independência dos EUA, a Inconfidência Mineira (1789) planejava a independência da região; Tiradentes foi executado em 1792. A Conjuração Baiana (1798), com participação popular, também pedia o fim da escravidão.'] }],
  examples: [
    { q: 'Por que a Conjuração Baiana é considerada mais popular que a Inconfidência Mineira?', steps: ['A Inconfidência reunia principalmente elite (padres, militares, intelectuais) e não propunha abolir a escravidão.', 'A Conjuração Baiana teve alfaiates, soldados e escravizados e defendia igualdade e o fim da escravidão.'] }],
  summary: ['1534: capitanias hereditárias. 1549: Governo-Geral.', 'Plantation: latifúndio, monocultura, escravidão, exportação.', 'Palmares e Zumbi: símbolos de resistência.', 'Mineração: quinto e derrama; Inconfidência Mineira (1789).'],
  mistakes: ['Achar que os escravizados aceitaram passivamente a escravidão.', 'Confundir os objetivos das conjurações mineira e baiana.'],
  formulas: [],
  quiz: [
    { q: 'O modelo de produção do açúcar colonial era baseado em:', options: ['pequenas propriedades e trabalho livre', 'latifúndio, monocultura, escravidão e exportação', 'policultura voltada ao mercado interno', 'indústria e trabalho assalariado'], answer: 1, why: 'É o sistema plantation.' },
    { q: 'O maior quilombo do Brasil colonial foi:', options: ['Palmares', 'Canudos', 'Cabanagem', 'Contestado'], answer: 0, why: 'Palmares, liderado por Zumbi.' },
    { q: 'O "quinto" era um imposto que correspondia a:', options: ['5% do açúcar', '20% do ouro extraído', '50% do café', '1/5 das terras'], answer: 1, why: 'A Coroa ficava com um quinto do ouro.' },
    { q: 'A Inconfidência Mineira (1789) foi influenciada principalmente por:', options: ['ideais iluministas e pela independência dos EUA', 'Revolução Russa', 'Contrarreforma', 'Revolução Industrial brasileira'], answer: 0, why: 'Os inconfidentes liam autores iluministas.' }] },
{ id: 'his-imperio', subject: 'História', area: 'Brasil', title: 'Independência e Império', level: 'Médio',
  learn: [
    { h: 'Da família real à Independência', p: ['Fugindo de Napoleão, a família real portuguesa chegou ao Brasil em 1808 e abriu os portos às nações amigas, encerrando o pacto colonial. Em 1815, o Brasil virou Reino Unido a Portugal. Com o retorno de D. João VI e a pressão das cortes portuguesas para recolonizar o país, D. Pedro proclamou a Independência em 1822.', 'Foi uma independência conduzida pela elite: manteve a monarquia, o latifúndio e a escravidão.'] },
    { h: 'Primeiro Reinado e Regências', p: ['A Constituição de 1824 foi outorgada (imposta) e criou o Poder Moderador, que dava ao imperador poder sobre os demais, e o voto censitário (por renda). D. Pedro I abdicou em 1831.', 'No Período Regencial (1831–1840), com o herdeiro ainda criança, eclodiram revoltas provinciais: Cabanagem (Pará), Farroupilha (Rio Grande do Sul, a mais longa), Balaiada (Maranhão), Sabinada (Bahia) e Revolta dos Malês (Salvador, de africanos muçulmanos).'] },
    { h: 'Segundo Reinado (1840–1889)', p: ['Com o Golpe da Maioridade, D. Pedro II assumiu aos 14 anos. O café, no Sudeste, virou o principal produto. A Guerra do Paraguai (1864–1870) fortaleceu o Exército, que passou a contestar a monarquia.', 'A abolição foi gradual: Lei Eusébio de Queirós (1850, fim do tráfico), Ventre Livre (1871), Sexagenários (1885) e Lei Áurea (1888). Os libertos não receberam terra, indenização ou integração, o que tem consequências até hoje. A República foi proclamada em 15 de novembro de 1889.'] }],
  examples: [
    { q: 'Por que a Lei de Terras (1850) é relacionada à abolição?', steps: ['Ela determinou que terras só seriam obtidas por compra.', 'No mesmo ano do fim do tráfico, impediu que futuros libertos e imigrantes pobres virassem proprietários, mantendo a concentração fundiária.'] }],
  summary: ['1808: abertura dos portos. 1822: Independência.', '1824: Poder Moderador e voto censitário.', 'Regências: Cabanagem, Farroupilha, Balaiada, Sabinada, Malês.', 'Abolição gradual até 1888, sem integração dos libertos.', '1889: Proclamação da República.'],
  mistakes: ['Achar que a Independência trouxe mudanças sociais profundas.', 'Esquecer que a Lei Áurea não previu nenhuma reparação.'],
  formulas: [],
  quiz: [
    { q: 'O Poder Moderador, previsto na Constituição de 1824:', options: ['limitava o poder do imperador', 'permitia ao imperador interferir nos demais poderes', 'era exercido pelo Parlamento', 'garantia o voto universal'], answer: 1, why: 'Concentrava poder nas mãos de D. Pedro I.' },
    { q: 'A lei de 1850 que proibiu o tráfico negreiro foi a:', options: ['Lei Áurea', 'Lei do Ventre Livre', 'Lei Eusébio de Queirós', 'Lei dos Sexagenários'], answer: 2, why: 'Encerrou o tráfico de africanos para o Brasil.' },
    { q: 'A Revolução Farroupilha ocorreu no:', options: ['Pará', 'Rio Grande do Sul', 'Maranhão', 'Bahia'], answer: 1, why: 'Foi a mais longa revolta regencial (1835–1845).' },
    { q: 'A abertura dos portos em 1808 foi consequência:', options: ['da vinda da família real, fugindo de Napoleão', 'da Proclamação da República', 'da Guerra do Paraguai', 'da Independência'], answer: 0, why: 'Com a corte no Brasil, o pacto colonial perdeu sentido.' }] },
{ id: 'his-vargas', subject: 'História', area: 'Brasil', title: 'República Velha e Era Vargas', level: 'Médio',
  learn: [
    { h: 'República Velha (1889–1930)', p: ['Dominada pelas oligarquias agrárias. Na política do café com leite, São Paulo e Minas Gerais alternavam a presidência. O coronelismo controlava o voto nos municípios pelo voto de cabresto (o voto era aberto) e pela troca de favores.', 'Movimentos sociais marcaram o período: Canudos (1896–1897, na Bahia, liderado por Antônio Conselheiro), Revolta da Vacina (1904, no Rio), Revolta da Chibata (1910, de marinheiros contra castigos físicos) e o tenentismo nos anos 1920.'] },
    { h: 'Revolução de 1930 e governo constitucional', p: ['A crise de 1929 derrubou o preço do café e a ruptura do café com leite levou Getúlio Vargas ao poder. O Código Eleitoral de 1932 criou o voto secreto e o voto feminino. A Constituição de 1934 trouxe direitos trabalhistas.'] },
    { h: 'Estado Novo (1937–1945)', p: ['Com o pretexto de uma ameaça comunista, Vargas deu um golpe e instaurou uma ditadura: fechou o Congresso, censurou a imprensa pelo DIP (Departamento de Imprensa e Propaganda) e perseguiu opositores.', 'Ao mesmo tempo, investiu na indústria de base (Companhia Siderúrgica Nacional) e criou a CLT (1943), em uma política trabalhista que lhe rendeu a imagem de "pai dos pobres". Esse estilo é chamado de populismo.'] },
    { h: 'A volta e o fim', p: ['Deposto em 1945, Vargas voltou eleito em 1950. Com a campanha "O petróleo é nosso", criou a Petrobras em 1953. Sob forte pressão política, suicidou-se em 1954.'] }],
  examples: [
    { q: 'Por que o voto de cabresto funcionava na República Velha?', steps: ['O voto era aberto, então o coronel sabia em quem cada um votava.', 'A dependência econômica dos trabalhadores rurais e a troca de favores garantiam o controle.'] }],
  summary: ['Café com leite: SP e MG alternando o poder.', 'Coronelismo e voto de cabresto.', '1932: voto secreto e feminino.', 'Estado Novo: ditadura, DIP, CLT, indústria de base.', '1953: Petrobras.'],
  mistakes: ['Achar que a CLT foi criada num governo democrático (foi no Estado Novo).', 'Confundir Canudos (Bahia) com Contestado (Paraná e Santa Catarina).'],
  formulas: [],
  quiz: [
    { q: 'A política do café com leite consistia:', options: ['na exportação de café para a Europa', 'na alternância entre São Paulo e Minas Gerais na presidência', 'numa aliança entre operários e camponeses', 'no tabelamento do preço do leite'], answer: 1, why: 'Paulistas (café) e mineiros (leite) se revezavam no poder.' },
    { q: 'A CLT, que reuniu as leis trabalhistas, foi criada em:', options: ['1888', '1930', '1943', '1988'], answer: 2, why: 'Em 1943, durante o Estado Novo.' },
    { q: 'O voto de cabresto está associado ao:', options: ['coronelismo', 'tenentismo', 'Estado Novo', 'regime militar'], answer: 0, why: 'Os coronéis controlavam o voto aberto.' },
    { q: 'Durante o Estado Novo, o DIP era responsável por:', options: ['organizar eleições livres', 'censura e propaganda do governo', 'construir ferrovias', 'administrar a Petrobras'], answer: 1, why: 'Departamento de Imprensa e Propaganda.' }] },
{ id: 'his-ditadura', subject: 'História', area: 'Brasil', title: 'Ditadura militar e redemocratização', level: 'Médio',
  learn: [
    { h: 'O golpe de 1964', p: ['Em meio à Guerra Fria, ao medo do comunismo e à oposição às reformas de base (como a reforma agrária) do presidente João Goulart, militares, com apoio de parte do empresariado, da imprensa e dos EUA, deram um golpe em 31 de março / 1º de abril de 1964.'] },
    { h: 'Atos institucionais e repressão', p: ['O regime governou por Atos Institucionais. O AI-2 extinguiu os partidos e criou o bipartidarismo (Arena, do governo, e MDB, a oposição consentida). O AI-5 (1968) foi o mais duro: fechou o Congresso, ampliou a censura e suspendeu o habeas corpus para crimes políticos.', 'Nos "anos de chumbo", houve prisões, tortura, mortes e desaparecimentos de opositores, investigados depois pela Comissão Nacional da Verdade.'] },
    { h: 'Milagre econômico', p: ['Entre 1968 e 1973, o PIB cresceu mais de 10% ao ano, com obras como a Transamazônica e a Ponte Rio–Niterói. Mas o crescimento concentrou renda ("fazer o bolo crescer para depois dividir") e aumentou muito a dívida externa. A crise do petróleo de 1973 encerrou o "milagre".'] },
    { h: 'Abertura e redemocratização', p: ['Geisel iniciou uma abertura "lenta, gradual e segura". Em 1979, a Lei da Anistia permitiu a volta de exilados, mas também perdoou os agentes da repressão. Em 1984, as Diretas Já levaram milhões às ruas, mas a emenda foi derrotada. Tancredo Neves foi eleito indiretamente em 1985 e a Constituição de 1988, a "Constituição Cidadã", ampliou direitos.'] }],
  examples: [
    { q: 'Por que a Lei da Anistia de 1979 é polêmica até hoje?', steps: ['Ela permitiu a volta de perseguidos políticos.', 'Mas também impediu a punição de agentes do Estado acusados de tortura e assassinato.'] }],
  summary: ['1964: golpe contra João Goulart.', 'AI-5 (1968): o ato mais repressivo.', 'Milagre econômico: crescimento com concentração de renda e dívida.', '1979: Anistia. 1984: Diretas Já. 1988: Constituição Cidadã.'],
  mistakes: ['Achar que a ditadura acabou com eleição direta (Tancredo foi eleito pelo Colégio Eleitoral).', 'Dizer que o milagre econômico distribuiu renda.'],
  formulas: [],
  quiz: [
    { q: 'O AI-5, de 1968, representou:', options: ['o início da abertura política', 'o endurecimento do regime, com fechamento do Congresso e censura', 'a convocação de eleições diretas', 'o fim do bipartidarismo'], answer: 1, why: 'Foi o ato institucional mais repressivo.' },
    { q: 'O movimento Diretas Já (1984) reivindicava:', options: ['a volta da monarquia', 'eleições diretas para presidente', 'o fechamento do Congresso', 'o fim da Petrobras'], answer: 1, why: 'Milhões foram às ruas pela emenda Dante de Oliveira.' },
    { q: 'A Constituição de 1988 ficou conhecida como:', options: ['Constituição Polaca', 'Constituição Cidadã', 'Constituição Outorgada', 'Constituição Imperial'], answer: 1, why: 'Ampliou direitos civis, políticos e sociais.' },
    { q: 'Um efeito do "milagre econômico" foi:', options: ['redução da desigualdade', 'concentração de renda e aumento da dívida externa', 'fim da inflação para sempre', 'reforma agrária ampla'], answer: 1, why: 'O crescimento não foi distribuído.' }] },
{ id: 'his-revolucoes', subject: 'História', area: 'Geral', title: 'Revolução Industrial e Revolução Francesa', level: 'Médio',
  learn: [
    { h: 'Revolução Industrial', p: ['Começou na Inglaterra, na segunda metade do século XVIII, com a máquina a vapor e a indústria têxtil. A Inglaterra tinha capital acumulado, carvão, ferro, mão de obra (camponeses expulsos pelos cercamentos) e um mercado consumidor.', 'Consequências: trabalho assalariado nas fábricas, jornadas de 14 a 16 horas, trabalho infantil, urbanização acelerada e surgimento do proletariado. Reações operárias: ludismo (quebra de máquinas), cartismo (direitos políticos) e sindicatos.'] },
    { h: 'Revolução Francesa (1789)', p: ['A França do Antigo Regime era dividida em estados: clero (1º), nobreza (2º) e o resto da população (3º estado), que pagava os impostos. Crise financeira, fome e ideias iluministas levaram à Queda da Bastilha em 14 de julho de 1789.', 'Lema: liberdade, igualdade e fraternidade. A Declaração dos Direitos do Homem e do Cidadão afirmou direitos universais. Após fases de monarquia constitucional, república radical (jacobinos, Terror) e governo moderado, Napoleão chegou ao poder em 1799.'] },
    { h: 'Por que importam', p: ['A Revolução Industrial criou o mundo capitalista moderno; a Francesa espalhou as ideias de cidadania, direitos e soberania popular. Juntas, são chamadas de "dupla revolução" e influenciaram a independência das colônias americanas.'] }],
  examples: [
    { q: 'Por que os ludistas quebravam máquinas?', steps: ['As máquinas substituíam trabalhadores e baixavam salários.', 'Os operários viam nelas a causa do desemprego e da miséria.'] }],
  summary: ['Industrial: Inglaterra, século XVIII, vapor, proletariado.', 'Reações: ludismo, cartismo, sindicatos.', 'Francesa: 1789, fim do Antigo Regime, Direitos do Homem.', 'Lema: liberdade, igualdade e fraternidade.'],
  mistakes: ['Achar que a Revolução Industrial começou na França.', 'Confundir girondinos (moderados) e jacobinos (radicais).'],
  formulas: [],
  quiz: [
    { q: 'A Revolução Industrial teve início no século XVIII:', options: ['na França', 'na Inglaterra', 'nos Estados Unidos', 'na Alemanha'], answer: 1, why: 'A Inglaterra reunia capital, carvão, ferro e mão de obra.' },
    { q: 'O ludismo foi um movimento operário que:', options: ['quebrava máquinas', 'defendia o voto feminino', 'criou o Partido Comunista', 'apoiava os patrões'], answer: 0, why: 'Os operários culpavam as máquinas pelo desemprego.' },
    { q: 'O marco inicial da Revolução Francesa foi:', options: ['a Queda da Bastilha', 'a coroação de Napoleão', 'a Guerra dos Cem Anos', 'o Congresso de Viena'], answer: 0, why: '14 de julho de 1789.' },
    { q: 'No Antigo Regime francês, quem pagava a maior parte dos impostos era:', options: ['o clero', 'a nobreza', 'o terceiro estado', 'o rei'], answer: 2, why: 'Burgueses, camponeses e trabalhadores urbanos.' }] },
{ id: 'his-seculo-xx', subject: 'História', area: 'Geral', title: 'Guerras Mundiais e Guerra Fria', level: 'Médio',
  learn: [
    { h: 'Primeira Guerra (1914–1918)', p: ['Causas: disputas imperialistas, nacionalismos, corrida armamentista e alianças militares (Tríplice Entente x Tríplice Aliança). O estopim foi o assassinato do arquiduque Francisco Ferdinando. Guerra de trincheiras, milhões de mortos. O Tratado de Versalhes impôs duras punições à Alemanha, o que alimentou o ressentimento posterior.', 'Em 1917, a Revolução Russa derrubou o czar e levou os bolcheviques ao poder, criando depois a União Soviética.'] },
    { h: 'Entreguerras e Segunda Guerra (1939–1945)', p: ['A crise de 1929 espalhou desemprego e favoreceu regimes totalitários: fascismo na Itália (Mussolini) e nazismo na Alemanha (Hitler). A guerra começou com a invasão da Polônia em 1939, opôs Aliados (Reino Unido, URSS, EUA) ao Eixo (Alemanha, Itália, Japão) e terminou após as bombas atômicas em Hiroshima e Nagasaki.', 'O Holocausto exterminou cerca de 6 milhões de judeus, além de ciganos, homossexuais, pessoas com deficiência e opositores. A ONU foi criada em 1945 e a Declaração Universal dos Direitos Humanos, em 1948.'] },
    { h: 'Guerra Fria (1947–1991)', p: ['Disputa entre EUA (capitalismo) e URSS (socialismo) sem confronto direto entre eles, mas com corrida armamentista e espacial, propaganda e guerras em outros países (Coreia, Vietnã, Afeganistão). Blocos militares: OTAN e Pacto de Varsóvia. O Muro de Berlim (1961–1989) foi seu maior símbolo.', 'Na América Latina, os EUA apoiaram ditaduras contra a "ameaça comunista", como a brasileira de 1964. O fim da URSS, em 1991, encerrou o mundo bipolar.'] }],
  examples: [
    { q: 'Como o Tratado de Versalhes contribuiu para a Segunda Guerra?', steps: ['A Alemanha perdeu territórios, foi desarmada e obrigada a pagar indenizações enormes.', 'A humilhação e a crise econômica foram exploradas pela propaganda nazista.'] }],
  summary: ['1ª Guerra: imperialismo e alianças; Versalhes puniu a Alemanha.', '1917: Revolução Russa.', '1929 → crise → nazifascismo.', '2ª Guerra: Holocausto; ONU em 1945.', 'Guerra Fria: EUA x URSS, Muro de Berlim, fim em 1991.'],
  mistakes: ['Achar que EUA e URSS lutaram diretamente na Guerra Fria.', 'Esquecer a relação entre a Guerra Fria e as ditaduras latino-americanas.'],
  formulas: [],
  quiz: [
    { q: 'O Tratado de Versalhes (1919):', options: ['beneficiou a Alemanha', 'impôs pesadas punições à Alemanha', 'criou a ONU', 'encerrou a Guerra Fria'], answer: 1, why: 'Perdas territoriais, desarmamento e indenizações.' },
    { q: 'A Guerra Fria foi a disputa entre:', options: ['Alemanha e França', 'EUA e URSS', 'Inglaterra e Japão', 'China e Índia'], answer: 1, why: 'Capitalismo x socialismo.' },
    { q: 'O símbolo da divisão do mundo na Guerra Fria, derrubado em 1989, foi:', options: ['a Muralha da China', 'o Muro de Berlim', 'o Muro de Adriano', 'a Cortina de Bambu'], answer: 1, why: 'Sua queda antecedeu o fim da URSS.' },
    { q: 'A ONU foi criada em:', options: ['1919', '1945', '1964', '1991'], answer: 1, why: 'Ao fim da Segunda Guerra.' }] },
]
