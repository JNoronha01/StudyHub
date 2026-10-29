import { r, type Topic } from './types'

export const quimica: Topic[] = [
{ id: 'qui-ph', subject: 'Química', area: 'Ácidos e bases', title: 'pH e pOH', level: 'Médio',
  learn: [
    { h: 'A escala de pH', p: [r`A 25 °C, pH < 7 é ácido, pH = 7 é neutro e pH > 7 é básico. Na água pura, $[H^+]=10^{-7}\,mol/L$.`] },
    { h: 'Como calcular', p: [r`$pH=-\log[H^+]$ e $pOH=-\log[OH^-]$. Valem $pH+pOH=14$ e $[H^+][OH^-]=10^{-14}$ (a 25 °C). Cada unidade de pH representa um fator 10 na concentração de $H^+$.`] },
    { h: 'Ácidos e bases fortes', p: [r`Ionizam/dissociam-se praticamente por completo. HCl 0,01 mol/L: $[H^+]=10^{-2}$, pH = 2. NaOH 0,001 mol/L: $[OH^-]=10^{-3}$, pOH = 3, pH = 11.`] },
    { h: 'Ácidos fracos', p: [r`Ionizam parcialmente, com grau de ionização $\alpha$: $[H^+]=\alpha\cdot C$. Por isso a concentração de $H^+$ é menor que a do ácido.`] }],
  examples: [
    { q: r`Qual o pH quando $[H^+]=10^{-4}\,mol/L$?`, steps: [r`$pH=-\log10^{-4}=4$ (ácido).`] },
    { q: 'Qual o pH de NaOH 0,01 mol/L?', steps: [r`$[OH^-]=10^{-2}\Rightarrow pOH=2$.`, r`$pH=14-2=12$.`] },
    { q: 'Ácido fraco 0,1 mol/L com α = 1%. Qual o pH?', steps: [r`$[H^+]=0{,}01\cdot0{,}1=10^{-3}$.`, r`$pH=3$.`] }],
  summary: [r`$pH=-\log[H^+]$; $pH+pOH=14$ (25 °C).`, 'Cada unidade de pH = 10× em [H⁺].', 'Forte: ionização total; fraco: use α.'],
  mistakes: ['Ignorar que a escala é logarítmica (pH 3 é 100× mais ácido que pH 5).', 'Esquecer de converter pOH em pH.', 'Tratar ácido fraco como se ionizasse totalmente.'],
  formulas: [
    { name: 'pH', tex: r`pH=-\log[H^+]`, note: '[H⁺] em mol/L.' },
    { name: 'pOH', tex: r`pOH=-\log[OH^-]`, note: '[OH⁻] em mol/L.' },
    { name: 'Relação', tex: r`pH+pOH=14`, note: 'Somente a 25 °C.' },
    { name: 'Ácido fraco', tex: r`[H^+]=\alpha\cdot C`, note: 'α em forma decimal (1% = 0,01).' }],
  quiz: [
    { q: r`$[H^+]=10^{-3}$ mol/L. pH:`, options: ['3', '−3', '11', '7'], answer: 0, why: r`$-\log10^{-3}=3$.` },
    { q: 'pH de uma solução de NaOH 0,01 mol/L (25 °C):', options: ['2', '12', '10', '14'], answer: 1, why: 'pOH = 2, logo pH = 14 − 2 = 12.' },
    { q: 'Quantas vezes uma solução de pH 2 é mais ácida que uma de pH 4?', options: ['2', '10', '100', '1000'], answer: 2, why: 'Diferença de 2 unidades: 10² = 100 vezes.' },
    { q: 'Ácido fraco 0,2 mol/L com α = 0,5%. pH:', options: ['2', '3', '4', '5'], answer: 1, why: r`$[H^+]=0{,}005\cdot0{,}2=10^{-3}$, pH = 3.` }] },
{ id: 'qui-mol', subject: 'Química', area: 'Estequiometria', title: 'Mol, massa molar e estequiometria', level: 'Médio',
  learn: [
    { h: 'O mol', p: [r`Mol é uma quantidade, como "dúzia": 1 mol tem $6{,}02\cdot10^{23}$ partículas (constante de Avogadro). Ele existe porque átomos são pequenos demais para contar um a um.`] },
    { h: 'Massa molar', p: [r`Massa molar $M$ é a massa de 1 mol, em g/mol: some as massas atômicas da fórmula. Água ($H_2O$): $2\cdot1+16=18$ g/mol. O número de mols é $n=\frac{m}{M}$.`] },
    { h: 'Estequiometria', p: [r`Os coeficientes da equação balanceada dão a proporção em mols. Em $CH_4+2O_2\to CO_2+2H_2O$, 1 mol de metano reage com 2 mol de oxigênio e forma 1 mol de gás carbônico.`, 'Roteiro: (1) balanceie a equação; (2) converta o dado para mol; (3) use a proporção dos coeficientes; (4) converta para a unidade pedida (g, L, moléculas).'] },
    { h: 'Volume de gases', p: ['Nas CNTP (0 °C e 1 atm), 1 mol de qualquer gás ocupa 22,4 L. Use esse valor só quando o enunciado indicar essas condições ou fornecer o volume molar.'] }],
  examples: [
    { q: 'Quantos mols há em 36 g de água?', steps: [r`$M(H_2O)=18$ g/mol.`, r`$n=\frac{36}{18}=2$ mol.`] },
    { q: r`Quantos gramas de $CO_2$ se formam na queima de 16 g de metano? (C = 12, H = 1, O = 16)`, steps: [r`$M(CH_4)=16$ g/mol, então 16 g = 1 mol.`, r`Proporção 1 : 1, logo forma 1 mol de $CO_2$.`, r`$M(CO_2)=12+32=44$ g/mol: forma 44 g.`] }],
  summary: [r`1 mol $=6{,}02\cdot10^{23}$ partículas.`, r`$n=m/M$.`, 'Coeficientes = proporção em mols.', 'CNTP: 1 mol de gás = 22,4 L.'],
  mistakes: ['Usar a proporção em massa em vez da proporção em mols.', 'Esquecer de balancear a equação antes.', 'Somar a massa atômica sem multiplicar pelo índice (H₂ tem 2 H).'],
  formulas: [
    { name: 'Número de mols', tex: r`n=\frac{m}{M}`, note: 'm em g; M em g/mol.' },
    { name: 'Número de partículas', tex: r`N=n\cdot6{,}02\cdot10^{23}`, note: 'Constante de Avogadro.' },
    { name: 'Volume molar (CNTP)', tex: r`V=n\cdot22{,}4\,L`, note: 'Só a 0 °C e 1 atm.' }],
  quiz: [
    { q: r`Massa molar do $CO_2$ (C = 12, O = 16):`, options: ['28 g/mol', '44 g/mol', '32 g/mol', '60 g/mol'], answer: 1, why: r`$12+2\cdot16=44$.` },
    { q: 'Quantos mols há em 90 g de água?', options: ['5', '9', '18', '0,2'], answer: 0, why: r`$\frac{90}{18}=5$.` },
    { q: r`Em $2H_2+O_2\to2H_2O$, 4 mol de $H_2$ produzem quantos mols de água?`, options: ['2', '4', '8', '1'], answer: 1, why: r`Proporção $H_2:H_2O=2:2$, ou seja, 1 : 1.` },
    { q: r`Queimando 32 g de $CH_4$ ($M=16$), quantos gramas de $CO_2$ ($M=44$) se formam?`, options: ['44 g', '88 g', '32 g', '22 g'], answer: 1, why: r`32 g = 2 mol de $CH_4$, que formam 2 mol de $CO_2$: $2\cdot44=88$ g.` },
    { q: 'Quantas moléculas há em 2 mol de uma substância?', options: ['6·10²³', '1,2·10²⁴', '3·10²³', '2·10²³'], answer: 1, why: r`$2\cdot6\cdot10^{23}=12\cdot10^{23}=1{,}2\cdot10^{24}$.` }] },
{ id: 'qui-solucoes', subject: 'Química', area: 'Soluções', title: 'Concentração e diluição', level: 'Médio',
  learn: [
    { h: 'Soluto, solvente e solução', p: ['Solução é uma mistura homogênea: o soluto (em menor quantidade) dissolvido no solvente (em geral a água). Soro fisiológico é sal (soluto) em água (solvente).'] },
    { h: 'Formas de concentração', p: [r`Concentração comum: $C=\frac{m_{soluto}}{V}$, em g/L. Concentração em mol/L (molaridade): $\mathcal{M}=\frac{n}{V}$. Porcentagem em massa ou volume: 0,9% m/V quer dizer 0,9 g em 100 mL.`, 'Para quantidades muito pequenas (poluentes, flúor na água), usa-se ppm: partes por milhão. 1 ppm = 1 mg por kg (ou, para água, cerca de 1 mg/L).'] },
    { h: 'Diluição', p: [r`Ao adicionar solvente, a quantidade de soluto não muda, só o volume aumenta. Por isso $C_1V_1=C_2V_2$ (ou $\mathcal{M}_1V_1=\mathcal{M}_2V_2$).`] }],
  examples: [
    { q: 'Dissolvem-se 20 g de NaCl em água até 500 mL de solução. Qual a concentração em g/L?', steps: ['500 mL = 0,5 L.', r`$C=\frac{20}{0{,}5}=40$ g/L.`] },
    { q: '200 mL de uma solução 2 mol/L recebem água até 800 mL. Qual a nova concentração?', steps: [r`$2\cdot200=\mathcal{M}_2\cdot800$.`, r`$\mathcal{M}_2=0{,}5$ mol/L.`] }],
  summary: [r`$C=m/V$ (g/L); $\mathcal{M}=n/V$ (mol/L).`, r`Diluição: $C_1V_1=C_2V_2$.`, '% m/V: gramas em 100 mL.', 'ppm: partes por milhão.'],
  mistakes: ['Não converter mL para L.', 'Usar o volume de solvente em vez do volume da solução.', 'Achar que a diluição diminui a quantidade de soluto.'],
  formulas: [
    { name: 'Concentração comum', tex: r`C=\frac{m}{V}`, note: 'g/L.' },
    { name: 'Concentração em mol/L', tex: r`\mathcal{M}=\frac{n}{V}`, note: 'mol/L.' },
    { name: 'Diluição', tex: r`C_1V_1=C_2V_2`, note: 'A massa de soluto se mantém.' }],
  quiz: [
    { q: '10 g de soluto em 250 mL de solução. Concentração:', options: ['40 g/L', '2,5 g/L', '25 g/L', '4 g/L'], answer: 0, why: r`$\frac{10}{0{,}25}=40$ g/L.` },
    { q: '0,5 mol de soluto em 2 L de solução. Concentração em mol/L:', options: ['1', '0,25', '2,5', '4'], answer: 1, why: r`$\frac{0{,}5}{2}=0{,}25$.` },
    { q: '100 mL de solução 3 mol/L são diluídos até 300 mL. Nova concentração:', options: ['9 mol/L', '1 mol/L', '0,3 mol/L', '3 mol/L'], answer: 1, why: r`$3\cdot100=\mathcal{M}_2\cdot300\Rightarrow\mathcal{M}_2=1$.` },
    { q: 'Quantos gramas de sal há em 1 L de soro fisiológico a 0,9% (m/V)?', options: ['0,9 g', '9 g', '90 g', '0,09 g'], answer: 1, why: '0,9 g em 100 mL, logo 9 g em 1000 mL.' },
    { q: 'Ao adicionar água a uma solução, a quantidade de soluto:', options: ['aumenta', 'diminui', 'permanece igual', 'dobra'], answer: 2, why: 'Só o volume muda; por isso a concentração diminui.' }] },
{ id: 'qui-organica', subject: 'Química', area: 'Química orgânica', title: 'Funções orgânicas e nomenclatura', level: 'Médio',
  learn: [
    { h: 'O carbono', p: ['O carbono faz 4 ligações e forma cadeias longas, por isso existem milhões de compostos orgânicos: combustíveis, plásticos, remédios, alimentos e o próprio DNA.'] },
    { h: 'Nomenclatura básica', p: ['Nome = prefixo (nº de carbonos) + infixo (tipo de ligação) + sufixo (função). Prefixos: met (1), et (2), prop (3), but (4), pent (5), hex (6). Infixos: an (só simples), en (dupla), in (tripla).', r`Exemplos: metano $CH_4$, propano $C_3H_8$ (gás de cozinha, junto com butano), eteno $C_2H_4$ (amadurece frutas).`] },
    { h: 'Principais funções', p: [r`Hidrocarbonetos: só C e H (petróleo, gasolina). Álcool: $-OH$ em carbono saturado, sufixo "ol" (etanol). Aldeído: $-CHO$, sufixo "al" (formol). Cetona: $C=O$ no meio da cadeia, sufixo "ona" (acetona). Ácido carboxílico: $-COOH$, "ácido ... oico" (ácido acético do vinagre).`, 'Éster: aromas de frutas e gorduras; formado por ácido + álcool. Amina: derivada da amônia, com nitrogênio (cheiro de peixe). Éter: oxigênio entre dois carbonos.'] },
    { h: 'No ENEM', p: ['Os temas costumam ser contextualizados: biocombustíveis (etanol e biodiesel), polímeros e plásticos, sabões e detergentes, e a identificação de funções em fórmulas de remédios e hormônios.'] }],
  examples: [
    { q: r`Dê o nome de $CH_3-CH_2-OH$.`, steps: ['2 carbonos: prefixo "et".', 'Só ligações simples: "an".', 'Função álcool: "ol". Nome: etanol.'] },
    { q: r`Qual a função de $CH_3-COOH$ e onde ele aparece?`, steps: [r`O grupo $-COOH$ indica ácido carboxílico.`, '2 carbonos: ácido etanoico, o ácido acético do vinagre.'] }],
  summary: ['Prefixo: nº de C; infixo: an/en/in; sufixo: função.', 'ol = álcool; al = aldeído; ona = cetona; oico = ácido.', 'Éster = ácido + álcool (aromas).'],
  mistakes: ['Confundir aldeído (C=O na ponta) com cetona (C=O no meio).', 'Contar os carbonos só da cadeia que está escrita na horizontal.', 'Achar que todo composto com OH é álcool (no anel aromático, é fenol).'],
  formulas: [],
  quiz: [
    { q: r`O grupo $-OH$ ligado a carbono saturado caracteriza:`, options: ['álcool', 'aldeído', 'cetona', 'éter'], answer: 0, why: 'É a hidroxila da função álcool.' },
    { q: 'A fórmula molecular do propano é:', options: ['C₃H₆', 'C₃H₈', 'C₃H₄', 'C₂H₆'], answer: 1, why: r`Alcano: $C_nH_{2n+2}$, com $n=3$: $C_3H_8$.` },
    { q: 'O ácido presente no vinagre é o:', options: ['etanol', 'ácido acético (etanoico)', 'acetona', 'metano'], answer: 1, why: r`Ácido etanoico, $CH_3COOH$.` },
    { q: 'O prefixo "but" indica quantos carbonos?', options: ['2', '3', '4', '5'], answer: 2, why: 'met 1, et 2, prop 3, but 4.' },
    { q: 'Os ésteres são conhecidos principalmente por:', options: ['aromas de frutas', 'serem combustíveis gasosos', 'a acidez do vinagre', 'a cor dos alimentos'], answer: 0, why: 'Muitos aromas naturais e artificiais são ésteres.' }] },
{ id: 'qui-ligacoes', subject: 'Química', area: 'Química geral', title: 'Ligações químicas e polaridade', level: 'Básico',
  learn: [
    { h: 'Regra do octeto', p: ['Os átomos tendem a ficar estáveis com 8 elétrons na última camada (2, no caso do hidrogênio), como os gases nobres. Para isso, eles ganham, perdem ou compartilham elétrons.'] },
    { h: 'Os três tipos de ligação', p: ['Iônica: metal + ametal. O metal doa elétrons e formam-se íons (NaCl, o sal de cozinha). Compostos iônicos são sólidos, têm ponto de fusão alto e conduzem eletricidade quando fundidos ou dissolvidos.', r`Covalente: ametal + ametal, por compartilhamento de elétrons ($H_2O$, $CO_2$, $O_2$). Metálica: entre metais, com um "mar de elétrons" livres, que explica o brilho e a boa condução de eletricidade e calor.`] },
    { h: 'Polaridade e solubilidade', p: ['Moléculas polares têm distribuição desigual de cargas (água); apolares têm distribuição simétrica (óleo, gasolina). "Semelhante dissolve semelhante": polar dissolve polar, apolar dissolve apolar. O sabão tem uma parte polar e outra apolar, por isso tira gordura.'] },
    { h: 'Forças intermoleculares', p: ['Ligação de hidrogênio (H ligado a F, O ou N) é a mais forte: explica o ponto de ebulição alto da água e por que o gelo flutua. Depois vêm as forças dipolo-dipolo e as de London (dipolo induzido), as mais fracas.'] }],
  examples: [
    { q: 'Que tipo de ligação há no NaCl e por quê?', steps: ['Na é metal (doa 1 elétron) e Cl é ametal (recebe 1 elétron).', 'Formam-se os íons Na⁺ e Cl⁻: ligação iônica.'] },
    { q: 'Por que o sabão remove gordura?', steps: ['A parte apolar da molécula se liga à gordura.', 'A parte polar se liga à água, que leva a gordura embora.'] }],
  summary: ['Iônica: metal + ametal (transferência).', 'Covalente: ametal + ametal (compartilhamento).', 'Metálica: elétrons livres.', 'Semelhante dissolve semelhante.', 'Ligação de hidrogênio: a força intermolecular mais forte.'],
  mistakes: ['Confundir ligação de hidrogênio (entre moléculas) com ligação covalente (dentro da molécula).', 'Achar que composto iônico sólido conduz eletricidade.', 'Dizer que o óleo não se mistura com a água por ser mais leve (o motivo é a polaridade).'],
  formulas: [],
  quiz: [
    { q: 'A ligação no NaCl é:', options: ['iônica', 'covalente', 'metálica', 'de hidrogênio'], answer: 0, why: 'Metal (Na) + ametal (Cl).' },
    { q: 'A água dissolve o sal, mas não o óleo, porque:', options: ['a água é polar e o óleo é apolar', 'o óleo é mais denso', 'a água é apolar', 'o óleo é iônico'], answer: 0, why: 'Semelhante dissolve semelhante.' },
    { q: 'Os metais conduzem bem a eletricidade por causa:', options: ['dos elétrons livres', 'dos íons fixos', 'dos prótons móveis', 'das ligações de hidrogênio'], answer: 0, why: 'O "mar de elétrons" se move facilmente.' },
    { q: 'A ligação entre dois ametais é:', options: ['iônica', 'covalente', 'metálica', 'inexistente'], answer: 1, why: 'Eles compartilham elétrons.' },
    { q: r`A água ferve a 100 °C, muito acima do $H_2S$, porque suas moléculas fazem:`, options: ['ligações de hidrogênio', 'ligações iônicas', 'ligações metálicas', 'menos interações'], answer: 0, why: 'O H ligado ao O forma ligações de hidrogênio fortes entre as moléculas.' }] },
]
