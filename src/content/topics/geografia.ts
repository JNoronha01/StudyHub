import { r, type Topic } from './types'

export const geografia: Topic[] = [
{ id: 'geo-cartografia', subject: 'Geografia', area: 'Cartografia', title: 'Escala, coordenadas e fusos horários', level: 'Básico',
  learn: [
    { h: 'Escala', p: [r`Escala é a relação entre a distância no mapa e a real. Na escala numérica 1:100 000, 1 cm no mapa equivale a 100 000 cm (1 km) no terreno. Quanto maior o denominador, menor a escala e menos detalhes o mapa mostra (mapa-múndi); escala grande mostra mais detalhes (planta de um bairro).`] },
    { h: 'Coordenadas geográficas', p: ['Latitude é a distância em graus até a Linha do Equador, de 0° a 90° Norte ou Sul. Longitude é a distância até o Meridiano de Greenwich, de 0° a 180° Leste ou Oeste. Juntas, localizam qualquer ponto da Terra.'] },
    { h: 'Fusos horários', p: ['A Terra gira 360° em 24 horas, então cada fuso tem 15°. Para o leste, as horas aumentam (o Sol nasce antes); para o oeste, diminuem. Brasília está no fuso UTC−3: quando são 12h em Brasília, são 15h em Londres (UTC+0).', 'O Brasil tem quatro fusos horários, por causa de sua grande extensão leste–oeste.'] },
    { h: 'Projeções cartográficas', p: ['Toda projeção distorce algo, porque a Terra é esférica e o mapa é plano. A de Mercator (conforme) mantém as formas e os ângulos e é usada na navegação, mas aumenta as áreas perto dos polos (a Groenlândia parece do tamanho da África). A de Peters (equivalente) mantém as áreas proporcionais, mas distorce as formas, e foi usada para destacar os países do Sul.'] }],
  examples: [
    { q: 'Num mapa de escala 1:250 000, duas cidades estão a 8 cm. Qual a distância real?', steps: ['8 · 250 000 = 2 000 000 cm.', '2 000 000 cm = 20 km.'] },
    { q: 'São 10h em Brasília (UTC−3). Que horas são em Tóquio (UTC+9)?', steps: ['A diferença é de 9 − (−3) = 12 fusos.', 'Tóquio está a leste, então soma: 10h + 12h = 22h.'] }],
  summary: ['Escala grande = mais detalhes.', 'Latitude: 0° a 90° (N/S). Longitude: 0° a 180° (L/O).', '1 fuso = 15°; leste adianta, oeste atrasa.', 'Mercator: forma certa, área distorcida. Peters: área certa, forma distorcida.'],
  mistakes: ['Inverter o sentido dos fusos (leste soma, oeste subtrai).', 'Achar que escala 1:1 000 000 é "grande" (é pequena).', 'Confundir latitude com longitude.'],
  formulas: [
    { name: 'Escala', tex: r`E=\frac{d}{D}`, note: 'd: distância no mapa; D: distância real (mesma unidade).' },
    { name: 'Fusos horários', tex: r`\Delta h=\frac{\Delta\text{longitude}}{15^\circ}`, note: 'Cada 15° de longitude = 1 hora.' }],
  quiz: [
    { q: 'Numa escala 1:100 000, 5 cm no mapa correspondem a:', options: ['500 m', '5 km', '50 km', '0,5 km'], answer: 1, why: '5 · 100 000 = 500 000 cm = 5 km.' },
    { q: 'Cada fuso horário corresponde a:', options: ['10°', '15°', '24°', '30°'], answer: 1, why: '360° ÷ 24 h = 15° por hora.' },
    { q: 'Quando é meio-dia em Brasília (UTC−3), em Londres (UTC+0) são:', options: ['9h', '12h', '15h', '18h'], answer: 2, why: 'Londres está 3 fusos a leste: soma 3 horas.' },
    { q: 'Na projeção de Mercator:', options: ['as áreas são proporcionais', 'as formas são preservadas, mas as áreas perto dos polos aumentam', 'não há nenhuma distorção', 'os oceanos não aparecem'], answer: 1, why: 'É uma projeção conforme.' },
    { q: 'A latitude de um ponto indica sua distância em graus:', options: ['até o Meridiano de Greenwich', 'até a Linha do Equador', 'até o Polo Sul', 'até o nível do mar'], answer: 1, why: 'Varia de 0° a 90° Norte ou Sul.' }] },
{ id: 'geo-clima-biomas', subject: 'Geografia', area: 'Natureza', title: 'Climas e biomas do Brasil', level: 'Médio',
  learn: [
    { h: 'Fatores do clima', p: ['Latitude: quanto mais perto do Equador, mais quente. Altitude: a temperatura cai cerca de 0,6 °C a cada 100 m de subida. Maritimidade: perto do mar a amplitude térmica é menor; continentalidade: no interior ela é maior. Massas de ar e correntes marítimas também influenciam.'] },
    { h: 'Climas do Brasil', p: ['Equatorial (Amazônia): quente e chuvoso o ano todo. Tropical (Brasil Central): verão chuvoso e inverno seco. Tropical de altitude (serras do Sudeste): temperaturas mais amenas. Semiárido (sertão nordestino): chuvas escassas e irregulares. Subtropical (Sul): estações bem definidas, com geadas no inverno.'] },
    { h: 'Os biomas', p: ['Amazônia: maior floresta tropical do mundo, enorme biodiversidade, ameaçada por desmatamento, garimpo e pecuária. Cerrado: savana, "berço das águas" (nascentes de grandes bacias), muito substituído pela soja e pelo gado. Caatinga: único bioma exclusivamente brasileiro, com vegetação adaptada à seca (xerófita).', 'Mata Atlântica: o bioma mais devastado, restando pouco mais de 10% da cobertura original, onde vive a maior parte da população. Pampa: campos do Sul, usados na pecuária. Pantanal: a maior planície alagável do mundo, com cheias e secas sazonais.'] }],
  examples: [
    { q: 'Por que cidades litorâneas variam menos de temperatura que cidades no interior?', steps: ['A água tem calor específico alto: demora para esquentar e para esfriar.', 'O mar suaviza as temperaturas (maritimidade).'] }],
  summary: ['Altitude maior = mais frio.', 'Maritimidade: amplitude térmica menor.', 'Caatinga: exclusiva do Brasil.', 'Mata Atlântica: a mais devastada.', 'Cerrado: "berço das águas", ameaçado pelo agronegócio.'],
  mistakes: ['Achar que a Caatinga é um deserto (é semiárido, com vegetação própria).', 'Confundir tempo (condição momentânea) com clima (padrão de longo prazo).'],
  formulas: [],
  quiz: [
    { q: 'O único bioma exclusivamente brasileiro é a:', options: ['Amazônia', 'Caatinga', 'Mata Atlântica', 'Pampa'], answer: 1, why: 'A Caatinga só existe no Brasil.' },
    { q: 'O bioma brasileiro mais devastado é a:', options: ['Mata Atlântica', 'Amazônia', 'Caatinga', 'Pantanal'], answer: 0, why: 'Restou pouco mais de 10% da cobertura original.' },
    { q: 'Quanto maior a altitude, em geral:', options: ['maior a temperatura', 'menor a temperatura', 'mais chuva sempre', 'maior a pressão do ar'], answer: 1, why: 'O ar rarefeito retém menos calor.' },
    { q: 'O Cerrado é ameaçado principalmente:', options: ['pelo turismo', 'pela expansão da soja e da pecuária', 'pela pesca', 'pela urbanização litorânea'], answer: 1, why: 'Grande parte de sua vegetação já virou lavoura e pasto.' },
    { q: 'A maritimidade faz com que a amplitude térmica seja:', options: ['maior', 'menor', 'igual à do interior', 'nula'], answer: 1, why: 'O mar suaviza a variação de temperatura.' }] },
{ id: 'geo-urbanizacao', subject: 'Geografia', area: 'Sociedade', title: 'Urbanização e problemas urbanos', level: 'Médio',
  learn: [
    { h: 'Urbanização brasileira', p: ['O Brasil se urbanizou rápido a partir dos anos 1950, com a industrialização e o êxodo rural, provocado pela mecanização do campo e pela concentração de terras. Hoje mais de 80% da população vive em cidades.', 'Por ter sido acelerada e sem planejamento, a urbanização gerou cidades desiguais, com periferias sem infraestrutura.'] },
    { h: 'Conceitos importantes', p: ['Metrópole: cidade grande que polariza uma região. Região metropolitana: metrópole + cidades vizinhas integradas. Conurbação: quando as manchas urbanas de cidades vizinhas se juntam. Megalópole: junção de metrópoles (eixo Rio–São Paulo). Rede urbana: a hierarquia e as conexões entre as cidades.'] },
    { h: 'Problemas urbanos', p: ['Segregação socioespacial (ricos e pobres em áreas separadas), favelização, déficit habitacional, trânsito e transporte público precário, violência e falta de saneamento.', 'Problemas ambientais: enchentes agravadas pela impermeabilização do solo (asfalto e concreto impedem a infiltração), ilhas de calor (áreas centrais mais quentes) e poluição do ar. Gentrificação: a valorização de um bairro expulsa os moradores mais pobres.'] }],
  examples: [
    { q: 'Por que as enchentes são mais frequentes nas grandes cidades?', steps: ['Asfalto e concreto impermeabilizam o solo, e a água escorre em vez de infiltrar.', 'Rios canalizados, lixo nos bueiros e ocupação das várzeas agravam o problema.'] }],
  summary: ['Urbanização rápida após 1950, por industrialização e êxodo rural.', 'Conurbação: cidades que se juntam.', 'Segregação socioespacial e favelização.', 'Enchentes: impermeabilização. Ilhas de calor: concreto e pouca vegetação.'],
  mistakes: ['Confundir conurbação (junção física) com região metropolitana (definição administrativa).', 'Achar que o êxodo rural foi só "atração" da cidade, sem a expulsão do campo.'],
  formulas: [],
  quiz: [
    { q: 'Conurbação é:', options: ['o crescimento de uma única cidade para cima', 'a junção das manchas urbanas de cidades vizinhas', 'o êxodo rural', 'a criação de cidades planejadas'], answer: 1, why: 'Os limites entre as cidades deixam de ser percebidos.' },
    { q: 'As ilhas de calor urbanas são causadas principalmente:', options: ['pelo excesso de árvores', 'por asfalto, concreto e pouca vegetação', 'pela proximidade do mar', 'pela altitude'], answer: 1, why: 'Essas superfícies absorvem e irradiam calor.' },
    { q: 'As enchentes urbanas são agravadas pela:', options: ['impermeabilização do solo', 'arborização das ruas', 'coleta seletiva', 'existência de parques'], answer: 0, why: 'A água não infiltra e escoa rapidamente.' },
    { q: 'Uma causa importante do êxodo rural no Brasil foi:', options: ['a reforma agrária ampla', 'a mecanização do campo e a concentração de terras', 'o fim das indústrias', 'a queda da população urbana'], answer: 1, why: 'Trabalhadores perderam espaço e terra no campo.' },
    { q: 'A gentrificação ocorre quando:', options: ['um bairro se valoriza e expulsa os moradores mais pobres', 'uma favela é urbanizada', 'a população do campo aumenta', 'uma cidade perde habitantes'], answer: 0, why: 'O aumento de preços torna o bairro inacessível aos antigos moradores.' }] },
{ id: 'geo-ambiente', subject: 'Geografia', area: 'Natureza', title: 'Energia e questões ambientais', level: 'Médio',
  learn: [
    { h: 'Matriz energética e elétrica', p: ['Matriz energética é o conjunto de todas as fontes de energia usadas (incluindo combustíveis de transporte). Matriz elétrica é só o que gera eletricidade. A matriz elétrica brasileira é majoritariamente renovável, com predomínio das hidrelétricas e forte crescimento da eólica e da solar.'] },
    { h: 'Vantagens e impactos das fontes', p: ['Hidrelétrica: renovável e barata, mas alaga grandes áreas e desloca comunidades indígenas e ribeirinhas. Termelétricas a carvão, gás ou petróleo: emitem gases de efeito estufa. Eólica e solar: limpas, mas intermitentes (dependem do vento e do Sol). Nuclear: não emite CO₂, mas gera resíduos radioativos.', 'Biocombustíveis (etanol, biodiesel) são renováveis, mas podem competir com a produção de alimentos e estimular o desmatamento.'] },
    { h: 'Problemas ambientais globais', p: ['O efeito estufa é natural e mantém a Terra habitável; o problema é sua intensificação por emissões humanas (queima de combustíveis fósseis e desmatamento), causando o aquecimento global. O Acordo de Paris (2015) busca limitar o aumento da temperatura.', 'Chuva ácida: óxidos de enxofre e de nitrogênio, liberados por indústrias e veículos, reagem com a água da atmosfera. Desenvolvimento sustentável: atender às necessidades atuais sem comprometer as gerações futuras.'] }],
  examples: [
    { q: 'Por que, mesmo sendo renovável, uma hidrelétrica na Amazônia gera polêmica?', steps: ['O reservatório alaga florestas e pode deslocar povos indígenas e ribeirinhos.', 'A vegetação submersa se decompõe e libera metano, um gás de efeito estufa.'] }],
  summary: ['Matriz elétrica brasileira: majoritariamente renovável (hidrelétrica).', 'Eólica e solar: limpas, mas intermitentes.', 'Aquecimento global: intensificação do efeito estufa.', 'Chuva ácida: óxidos de enxofre e nitrogênio.'],
  mistakes: ['Dizer que o efeito estufa é, em si, um problema (o problema é a intensificação).', 'Confundir matriz energética com matriz elétrica.', 'Achar que fonte renovável não causa impacto ambiental.'],
  formulas: [],
  quiz: [
    { q: 'A principal fonte da matriz elétrica brasileira é a:', options: ['hidráulica', 'nuclear', 'carvão mineral', 'petróleo'], answer: 0, why: 'As hidrelétricas geram a maior parte da eletricidade.' },
    { q: 'Um impacto socioambiental típico das hidrelétricas é:', options: ['a emissão de radiação', 'o alagamento de áreas e o deslocamento de comunidades', 'a chuva ácida', 'a falta de água no oceano'], answer: 1, why: 'O reservatório inunda grandes áreas.' },
    { q: 'A chuva ácida é causada principalmente por:', options: ['óxidos de enxofre e de nitrogênio', 'oxigênio', 'vapor de água puro', 'gás hélio'], answer: 0, why: 'Eles formam ácidos ao reagir com a água.' },
    { q: 'É exemplo de fonte renovável:', options: ['carvão mineral', 'gás natural', 'energia eólica', 'petróleo'], answer: 2, why: 'O vento se renova naturalmente.' },
    { q: 'O Acordo de Paris (2015) tem como principal objetivo:', options: ['proibir o uso de energia', 'limitar o aquecimento global', 'criar uma moeda única', 'acabar com a pesca'], answer: 1, why: 'Os países se comprometeram a reduzir emissões.' }] },
{ id: 'geo-globalizacao', subject: 'Geografia', area: 'Sociedade', title: 'Globalização, economia e população', level: 'Médio',
  learn: [
    { h: 'O que é globalização', p: ['É a intensificação dos fluxos de mercadorias, capitais, pessoas e informações pelo mundo, impulsionada pelos avanços nos transportes e nas telecomunicações. O geógrafo Milton Santos chamou o espaço atual de meio técnico-científico-informacional.', 'A globalização integra, mas também aprofunda desigualdades: os fluxos se concentram nos países e regiões mais ricos.'] },
    { h: 'Empresas transnacionais e DIT', p: ['Transnacionais instalam fábricas em países periféricos em busca de mão de obra barata, incentivos fiscais, matérias-primas e mercado consumidor. Na Divisão Internacional do Trabalho, países como o Brasil exportam principalmente commodities (soja, minério de ferro, petróleo, carne), produtos primários com preço definido no mercado internacional.'] },
    { h: 'Blocos econômicos', p: ['Países se unem para facilitar o comércio. União Europeia: o bloco mais integrado, com moeda comum (euro) em boa parte dos membros e livre circulação de pessoas. Mercosul: bloco sul-americano criado em 1991, do qual o Brasil faz parte.'] },
    { h: 'População', p: ['Transição demográfica: com a urbanização e o acesso a saúde e educação, caem a mortalidade e, depois, a natalidade. O Brasil vive o envelhecimento da população, o que aumenta a pressão sobre a previdência e a saúde. O "bônus demográfico" é a fase com muitos adultos em idade de trabalhar.'] }],
  examples: [
    { q: 'Por que tantas transnacionais instalaram fábricas na Ásia nas últimas décadas?', steps: ['Mão de obra barata e numerosa, incentivos fiscais dos governos.', 'Infraestrutura portuária e acesso a grandes mercados consumidores.'] }],
  summary: ['Globalização: fluxos de mercadorias, capitais e informação.', 'Meio técnico-científico-informacional (Milton Santos).', 'Brasil: exportador de commodities.', 'UE: euro e livre circulação. Mercosul: 1991.', 'Envelhecimento: menos nascimentos e vida mais longa.'],
  mistakes: ['Achar que a globalização beneficia todos igualmente.', 'Confundir commodities com produtos industrializados de alta tecnologia.'],
  formulas: [],
  quiz: [
    { q: 'O conceito de meio técnico-científico-informacional é do geógrafo:', options: ['Milton Santos', 'Josué de Castro', 'Aziz Ab’Sáber', 'Caio Prado Jr.'], answer: 0, why: 'Ele analisou o espaço geográfico na globalização.' },
    { q: 'Commodities são:', options: ['produtos de luxo', 'produtos primários com preço definido no mercado internacional', 'serviços de tecnologia', 'moedas digitais'], answer: 1, why: 'Ex.: soja, minério, petróleo.' },
    { q: 'O envelhecimento da população brasileira é causado principalmente por:', options: ['aumento da natalidade', 'queda da natalidade e aumento da expectativa de vida', 'imigração de idosos', 'guerras'], answer: 1, why: 'É uma etapa da transição demográfica.' },
    { q: 'O bloco econômico com moeda comum adotada por muitos membros é a:', options: ['União Europeia', 'Mercosul', 'Nafta', 'Apec'], answer: 0, why: 'O euro circula em boa parte dos países da UE.' },
    { q: 'Transnacionais instalam fábricas em países periféricos principalmente em busca de:', options: ['mão de obra mais cara', 'mão de obra barata e incentivos fiscais', 'impostos mais altos', 'menos consumidores'], answer: 1, why: 'Reduzir custos de produção.' }] },
]
