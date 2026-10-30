import { type Topic } from './types'

export const enem: Topic[] = [
{ id: 'enem-redacao', subject: 'ENEM e vestibulares', area: 'Redação', title: 'Redação do ENEM: as 5 competências', level: 'Médio',
  learn: [
    { h: 'O que é pedido', p: ['Um texto dissertativo-argumentativo, em norma-padrão, sobre um tema social, científico, cultural ou político, com no máximo 30 linhas. Você deve defender um ponto de vista com argumentos e terminar com uma proposta de intervenção para o problema.', 'A nota vai de 0 a 1000: são 5 competências, cada uma valendo de 0 a 200 pontos, avaliadas por dois corretores.'] },
    { h: 'As 5 competências', p: ['C1: domínio da norma-padrão da língua escrita (ortografia, concordância, pontuação). C2: compreender a proposta e desenvolver o tema dentro do tipo dissertativo-argumentativo, usando repertório de várias áreas do conhecimento. C3: selecionar, organizar e interpretar informações para defender um ponto de vista (o projeto de texto).', 'C4: usar bem os mecanismos de coesão (conectivos, retomadas). C5: elaborar uma proposta de intervenção detalhada e que respeite os direitos humanos.'] },
    { h: 'Estrutura recomendada', p: ['Introdução (1 parágrafo): contextualize o tema, de preferência com um repertório (dado, lei, autor, fato histórico), e apresente sua tese e os dois argumentos que vai desenvolver.', 'Desenvolvimento (2 parágrafos): cada um com um argumento, explicado e sustentado por repertório legitimado e pertinente ao tema, que precisa ser realmente usado, e não só citado. Conclusão (1 parágrafo): retome a tese e apresente a proposta de intervenção completa.'] },
    { h: 'O que zera a redação', p: ['Fuga total ao tema, não obedecer ao tipo dissertativo-argumentativo, texto com até 7 linhas, cópia dos textos motivadores sem texto próprio, partes desconectadas propositalmente do tema, impropérios ou desenhos e folha em branco. Propostas que desrespeitem os direitos humanos são penalizadas na competência 5.'] }],
  examples: [
    { q: 'Monte uma tese para o tema "Desafios para combater a desinformação no Brasil".', steps: ['Identifique o problema: a desinformação.', 'Escolha duas causas que vão virar argumentos: baixa educação midiática e o modelo de negócio das plataformas, que lucra com o engajamento.', 'Tese: "A desinformação persiste no Brasil devido à baixa educação midiática da população e à lógica de engajamento das plataformas digitais."'] }],
  summary: ['Dissertativo-argumentativo, norma-padrão, até 30 linhas.', '5 competências × 200 = 1000.', 'Introdução com tese, 2 parágrafos de argumento, conclusão com proposta.', 'Repertório precisa ser legitimado, pertinente e bem usado.'],
  mistakes: ['Tangenciar o tema (falar do assunto geral e não do recorte pedido).', 'Citar repertório "de bolso" sem ligá-lo ao argumento.', 'Fazer proposta vaga, como "o governo deve fazer algo".', 'Usar linguagem informal ou gírias.'],
  formulas: [],
  quiz: [
    { q: 'A redação do ENEM deve ser um texto:', options: ['narrativo', 'dissertativo-argumentativo', 'poético', 'descritivo'], answer: 1, why: 'Fugir desse tipo textual zera a redação.' },
    { q: 'Quantos pontos vale cada competência?', options: ['100', '200', '250', '500'], answer: 1, why: '5 competências de até 200 pontos = 1000.' },
    { q: 'A competência 5 avalia:', options: ['a ortografia', 'a coesão', 'a proposta de intervenção', 'a caligrafia'], answer: 2, why: 'Proposta detalhada que respeite os direitos humanos.' },
    { q: 'O que leva a redação a receber nota zero?', options: ['usar três parágrafos de desenvolvimento', 'fuga total ao tema', 'citar um filósofo', 'escrever 25 linhas'], answer: 1, why: 'Fuga total ao tema é um dos motivos de anulação.' },
    { q: 'Um repertório sociocultural bem utilizado é aquele que:', options: ['é citado e abandonado', 'é legitimado, pertinente ao tema e usado na argumentação', 'vem sempre de filmes', 'aparece só na conclusão'], answer: 1, why: 'Ele precisa servir ao argumento.' }] },
{ id: 'enem-intervencao', subject: 'ENEM e vestibulares', area: 'Redação', title: 'Proposta de intervenção nota 200', level: 'Médio',
  learn: [
    { h: 'Os 5 elementos', p: ['Para a nota máxima na competência 5, a proposta precisa de: 1) agente (quem vai fazer), 2) ação (o que vai ser feito), 3) meio ou modo (como vai ser feito), 4) finalidade (para quê) e 5) detalhamento (mais informação sobre qualquer um dos outros elementos).', 'Um truque para lembrar: "Quem? Faz o quê? Como? Para quê? + um detalhe."'] },
    { h: 'Agentes possíveis', p: ['Seja específico: "Ministério da Educação", "Congresso Nacional", "escolas", "mídia", "ONGs", "famílias", "plataformas digitais". Evite apenas "o governo" ou "a sociedade" sem explicar.'] },
    { h: 'Conectando com o texto', p: ['A proposta deve resolver os problemas apontados nos seus argumentos. Se você discutiu a falta de educação midiática, proponha algo que a enfrente. Uma proposta solta, sem relação com o desenvolvimento, perde força.'] }],
  examples: [
    { q: 'Escreva uma proposta completa para o problema da desinformação.', steps: ['Agente: o Ministério da Educação.', 'Ação: incluir a educação midiática no currículo do ensino básico.', 'Meio: por meio de oficinas práticas de checagem de notícias, em parceria com agências de checagem.', 'Finalidade: a fim de formar cidadãos capazes de identificar notícias falsas.', 'Detalhamento: oficinas que ensinem a verificar a fonte, a data e outros veículos que deram a mesma notícia.'] }],
  summary: ['Agente + ação + meio/modo + finalidade + detalhamento.', 'Agente específico, não "o governo".', 'A proposta deve responder aos argumentos.', 'Sempre respeitando os direitos humanos.'],
  mistakes: ['Esquecer a finalidade ("a fim de...").', 'Agente genérico demais.', 'Proposta que fere direitos humanos (como "punir com violência").'],
  formulas: [],
  quiz: [
    { q: 'Quantos elementos uma proposta de intervenção completa deve ter?', options: ['3', '4', '5', '6'], answer: 2, why: 'Agente, ação, meio/modo, finalidade e detalhamento.' },
    { q: 'Em "por meio de campanhas nas redes sociais", qual elemento aparece?', options: ['agente', 'meio/modo', 'finalidade', 'ação'], answer: 1, why: 'Indica como a ação será feita.' },
    { q: 'Em "a fim de reduzir a evasão escolar", qual elemento aparece?', options: ['agente', 'meio/modo', 'finalidade', 'detalhamento'], answer: 2, why: '"A fim de" introduz a finalidade.' },
    { q: 'Qual é o melhor agente para uma proposta?', options: ['"alguém"', '"o governo", sem especificar', '"o Ministério da Saúde"', '"todo mundo"'], answer: 2, why: 'É específico e tem competência para agir.' }] },
{ id: 'enem-estrategia', subject: 'ENEM e vestibulares', area: 'Estratégia', title: 'Como funciona a prova, a TRI e o tempo', level: 'Básico',
  learn: [
    { h: 'Estrutura do ENEM', p: ['São 180 questões objetivas e uma redação, em dois domingos. 1º dia: Linguagens (45 questões, incluindo 5 de língua estrangeira), Ciências Humanas (45) e Redação, em 5h30. 2º dia: Ciências da Natureza (45) e Matemática (45), em 5h.'] },
    { h: 'O que é a TRI', p: ['A nota não é o número de acertos. A Teoria de Resposta ao Item considera a dificuldade de cada questão e a coerência das suas respostas. Quem acerta as difíceis e erra as fáceis é visto como alguém que chutou e ganha menos pontos.', 'Por isso, duas pessoas com o mesmo número de acertos podem ter notas diferentes. A estratégia é garantir as questões fáceis e médias antes de gastar tempo com as difíceis.'] },
    { h: 'Gestão de tempo', p: ['No 1º dia, você tem cerca de 3 minutos por questão, se reservar 1h a 1h30 para a redação. Faça primeiro a redação ou as questões? Teste nos simulados qual ordem funciona para você.', 'Leia a questão, marque se souber; se travar, pule e volte depois. Reserve os últimos 30 minutos para passar as respostas para o cartão.'] },
    { h: 'Chutar ou deixar em branco?', p: ['Nunca deixe em branco: não há desconto por erro. Mas chute com estratégia, eliminando as alternativas absurdas, e deixe o chute para o final, depois de tentar todas as questões.'] }],
  examples: [
    { q: 'Você travou numa questão difícil de Matemática há 6 minutos. O que fazer?', steps: ['Marque a questão no caderno e siga para a próxima.', 'Garanta as fáceis primeiro: pela TRI, elas pesam para a coerência da sua nota.', 'Volte no final, se sobrar tempo.'] }],
  summary: ['180 questões + redação, em 2 dias.', 'TRI: a coerência das respostas importa.', 'Garanta as fáceis primeiro.', 'Nunca deixe em branco.', 'Reserve tempo para o cartão-resposta.'],
  mistakes: ['Ficar preso numa questão difícil e perder várias fáceis.', 'Deixar para preencher o cartão nos últimos minutos.', 'Achar que a nota é só a soma de acertos.'],
  formulas: [],
  quiz: [
    { q: 'Quantas questões objetivas tem o ENEM?', options: ['90', '120', '180', '200'], answer: 2, why: '45 em cada uma das 4 áreas.' },
    { q: 'Pela TRI, acertar questões difíceis e errar fáceis:', options: ['aumenta muito a nota', 'é visto como incoerência e vale menos', 'não faz diferença', 'zera a prova'], answer: 1, why: 'O modelo interpreta como provável chute.' },
    { q: 'No ENEM, deixar uma questão em branco:', options: ['é melhor do que errar', 'não traz vantagem, pois não há desconto por erro', 'dá meio ponto', 'anula a prova'], answer: 1, why: 'Sempre marque uma alternativa.' },
    { q: 'A redação é feita no:', options: ['1º dia, com Linguagens e Humanas', '2º dia, com Natureza e Matemática', 'dia separado', 'qualquer dia'], answer: 0, why: 'O 1º dia tem 5h30 por causa da redação.' }] },
]
