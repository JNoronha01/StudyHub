import { r, type Topic } from './types'

export const matematica: Topic[] = [
{ id: 'mat-eq2', subject: 'Matemática', area: 'Álgebra', title: 'Equação do 2º grau', level: 'Médio',
  learn: [
    { h: 'O que é', p: [r`Uma equação do 2º grau tem a forma $ax^2+bx+c=0$, com $a\neq0$. Os números $a$, $b$ e $c$ são os coeficientes e as raízes são os valores de $x$ que tornam a igualdade verdadeira.`, r`Casos incompletos têm resolução direta: se $b=0$, então $x^2=-c/a$; se $c=0$, fatore $x(ax+b)=0$ e as raízes são $x=0$ e $x=-b/a$.`] },
    { h: 'Fórmula de Bhaskara', p: [r`Calcule o discriminante $\Delta=b^2-4ac$ e depois $x=\dfrac{-b\pm\sqrt{\Delta}}{2a}$.`, r`Se $\Delta>0$ há duas raízes reais distintas; se $\Delta=0$ há uma raiz real (dupla); se $\Delta<0$ não há raízes reais.`] },
    { h: 'Soma e produto', p: [r`As raízes $x_1$ e $x_2$ satisfazem $x_1+x_2=-b/a$ e $x_1\cdot x_2=c/a$. É o caminho mais rápido quando as raízes são inteiras: procure dois números com a soma e o produto pedidos.`] },
    { h: 'Gráfico', p: [r`O gráfico de $y=ax^2+bx+c$ é uma parábola. Se $a>0$ ela abre para cima e o vértice é o ponto de mínimo; se $a<0$ abre para baixo e o vértice é o ponto de máximo. As raízes são onde a parábola corta o eixo x.`] }],
  examples: [
    { q: r`Resolva $2x^2-3x-2=0$.`, steps: [r`$\Delta=(-3)^2-4\cdot2\cdot(-2)=9+16=25$`, r`$x=\dfrac{3\pm5}{4}$`, r`Raízes: $x=2$ e $x=-\dfrac12$.`] },
    { q: r`Resolva $x^2-7x+10=0$ por soma e produto.`, steps: ['Soma = 7 e produto = 10.', 'Os números 2 e 5 têm soma 7 e produto 10.', r`Raízes: $x=2$ e $x=5$.`] },
    { q: 'O comprimento de um retângulo excede a largura em 3 m e a área é 28 m². Quais as medidas?', steps: [r`Largura $x$, comprimento $x+3$: $x(x+3)=28$, logo $x^2+3x-28=0$.`, r`$\Delta=9+112=121$ e $x=\dfrac{-3\pm11}{2}$, ou seja, $x=4$ ou $x=-7$.`, 'Largura não pode ser negativa: largura 4 m e comprimento 7 m (4 · 7 = 28).'] }],
  summary: [r`Forma: $ax^2+bx+c=0$, $a\neq0$.`, r`$\Delta=b^2-4ac$ decide o número de raízes reais.`, r`Soma $=-b/a$; produto $=c/a$.`, r`Vértice: $x_v=-b/2a$ e $y_v=-\Delta/4a$.`],
  mistakes: [r`Esquecer o sinal de $-b$ (se $b=-3$, então $-b=+3$).`, r`Elevar $b$ negativo ao quadrado sem parênteses: $(-3)^2=9$, não $-9$.`, 'Dividir só o √Δ por 2a e esquecer de dividir o −b.', 'Não verificar se a raiz faz sentido no problema (medidas não são negativas).'],
  formulas: [
    { name: 'Discriminante', tex: r`\Delta=b^2-4ac`, note: 'Δ>0: duas raízes reais; Δ=0: uma; Δ<0: nenhuma real.' },
    { name: 'Bhaskara', tex: r`x=\frac{-b\pm\sqrt{\Delta}}{2a}`, note: 'a≠0; use o mesmo Δ calculado acima.' },
    { name: 'Soma e produto', tex: r`x_1+x_2=-\frac{b}{a}\qquad x_1x_2=\frac{c}{a}`, note: 'Útil para conferir resultados.' },
    { name: 'Vértice', tex: r`x_v=-\frac{b}{2a}\qquad y_v=-\frac{\Delta}{4a}`, note: 'Máximo se a<0; mínimo se a>0.' }],
  quiz: [
    { q: r`Raízes de $x^2-7x+10=0$:`, options: ['2 e 5', '−2 e −5', '1 e 10', '3 e 4'], answer: 0, why: 'Soma 7 e produto 10: 2 e 5.' },
    { q: r`Para qual valor de $k$ a equação $x^2-6x+k=0$ tem raiz dupla?`, options: ['6', '9', '−9', '36'], answer: 1, why: r`Raiz dupla: $\Delta=36-4k=0$, logo $k=9$.` },
    { q: r`Soma das raízes de $3x^2-12x+5=0$:`, options: ['4', '−4', '5/3', '12'], answer: 0, why: r`$-b/a=12/3=4$.` },
    { q: r`Vértice de $y=x^2-6x+5$:`, options: ['(3, −4)', '(−3, 4)', '(6, 5)', '(3, 4)'], answer: 0, why: r`$x_v=6/2=3$ e $y_v=9-18+5=-4$.` }] },
{ id: 'mat-porcentagem', subject: 'Matemática', area: 'Matemática financeira', title: 'Porcentagem e juros', level: 'Básico',
  learn: [
    { h: 'O que é porcentagem', p: [r`$p\%$ significa $\dfrac{p}{100}$. Para calcular $30\%$ de 250, faça $0{,}30\cdot250=75$. Porcentagem é o assunto que mais aparece no ENEM, quase sempre dentro de situações do dia a dia: descontos, impostos, gráficos e reajustes.`] },
    { h: 'Fator multiplicativo', p: [r`Aumentar $p\%$ é multiplicar por $(1+\frac{p}{100})$; descontar $p\%$ é multiplicar por $(1-\frac{p}{100})$. Um aumento de 15% é $\times1{,}15$ e um desconto de 15% é $\times0{,}85$.`, r`Variações sucessivas se multiplicam, não se somam: subir 20% e depois cair 20% dá $1{,}2\cdot0{,}8=0{,}96$, ou seja, uma perda de 4%.`] },
    { h: 'Juros simples', p: [r`Os juros incidem sempre sobre o capital inicial: $J=C\cdot i\cdot t$ e o montante é $M=C+J$. A taxa $i$ e o tempo $t$ precisam estar na mesma unidade (mês com mês, ano com ano).`] },
    { h: 'Juros compostos', p: [r`Os juros de cada período entram no cálculo do próximo ("juros sobre juros"): $M=C(1+i)^t$. É assim que funcionam poupança, financiamentos e o rotativo do cartão.`] }],
  examples: [
    { q: 'Um tênis de 80 reais tem 15% de desconto. Qual o preço final?', steps: [r`Fator de desconto: $1-0{,}15=0{,}85$.`, r`$80\cdot0{,}85=68$ reais.`] },
    { q: 'Um preço sobe 10% em janeiro e 10% em fevereiro. Qual o aumento total?', steps: [r`$1{,}1\cdot1{,}1=1{,}21$.`, 'O aumento total é de 21%, e não 20%.'] },
    { q: 'Quanto rendem 1000 reais a 2% ao mês, em juros compostos, por 3 meses?', steps: [r`$M=1000\cdot1{,}02^3=1000\cdot1{,}061208$.`, r`$M\approx1061{,}21$ reais; os juros são cerca de 61,21 reais.`] }],
  summary: [r`$p\%=\frac{p}{100}$.`, r`Aumento: $\times(1+i)$; desconto: $\times(1-i)$.`, 'Variações sucessivas: multiplique os fatores.', r`Simples: $J=Cit$. Compostos: $M=C(1+i)^t$.`, r`Variação percentual $=\frac{\text{novo}-\text{antigo}}{\text{antigo}}$.`],
  mistakes: ['Somar porcentagens sucessivas (10% + 10% não é 20%).', 'Calcular a variação dividindo pelo valor novo em vez do antigo.', 'Misturar taxa mensal com tempo em anos.', 'Esquecer que desconto de 100% zera o preço, mas aumento de 100% dobra.'],
  formulas: [
    { name: 'Fator de aumento e desconto', tex: r`V_{final}=V\cdot(1\pm i)`, note: 'i na forma decimal (15% = 0,15).' },
    { name: 'Juros simples', tex: r`J=C\cdot i\cdot t\qquad M=C(1+it)`, note: 'Juros sempre sobre o capital inicial.' },
    { name: 'Juros compostos', tex: r`M=C(1+i)^t`, note: 'Juros sobre juros.' },
    { name: 'Variação percentual', tex: r`\Delta\%=\frac{V_{novo}-V_{antigo}}{V_{antigo}}\cdot100`, note: 'Sempre divida pelo valor de referência (o antigo).' }],
  quiz: [
    { q: 'Quanto é 25% de 360?', options: ['90', '80', '72', '100'], answer: 0, why: r`$0{,}25\cdot360=90$ (ou $360\div4$).` },
    { q: 'Um produto passou de 200 para 250 reais. O aumento foi de:', options: ['20%', '25%', '50%', '30%'], answer: 1, why: r`$\frac{250-200}{200}=\frac{50}{200}=0{,}25=25\%$.` },
    { q: 'Um preço tem desconto de 20% e depois aumento de 20%. Em relação ao preço original, o novo preço é:', options: ['igual', '4% maior', '4% menor', '2% menor'], answer: 2, why: r`$0{,}8\cdot1{,}2=0{,}96$: 4% menor.` },
    { q: 'Juros simples de 500 reais a 3% ao mês durante 4 meses:', options: ['60 reais', '15 reais', '120 reais', '560 reais'], answer: 0, why: r`$J=500\cdot0{,}03\cdot4=60$.` },
    { q: 'Montante de 2000 reais a 10% ao ano, juros compostos, em 2 anos:', options: ['2400 reais', '2420 reais', '2200 reais', '2440 reais'], answer: 1, why: r`$2000\cdot1{,}1^2=2000\cdot1{,}21=2420$.` }] },
{ id: 'mat-proporcao', subject: 'Matemática', area: 'Aritmética', title: 'Razão, proporção e regra de três', level: 'Básico',
  learn: [
    { h: 'Razão e proporção', p: [r`Razão é a comparação por divisão: $\frac{a}{b}$. Proporção é a igualdade de duas razões, $\frac{a}{b}=\frac{c}{d}$, e vale a propriedade fundamental $a\cdot d=b\cdot c$ ("produto dos meios = produto dos extremos").`] },
    { h: 'Direta ou inversa?', p: ['Grandezas diretamente proporcionais crescem juntas: o dobro de quilos custa o dobro. Inversamente proporcionais se compensam: o dobro de velocidade leva metade do tempo.', 'Antes de montar a regra de três, pergunte: "se uma aumentar, a outra aumenta ou diminui?". Na inversa, inverta uma das razões antes de multiplicar em cruz.'] },
    { h: 'Regra de três composta', p: ['Com três ou mais grandezas, compare cada uma com a que você quer descobrir, separadamente, marcando se é direta ou inversa. Depois monte uma única proporção com todas.'] },
    { h: 'Escala', p: [r`Escala é a razão entre a medida no desenho e a medida real, na mesma unidade: $E=\frac{d}{D}$. Escala 1:500 000 quer dizer que 1 cm no mapa equivale a 500 000 cm (5 km) no real.`] }],
  examples: [
    { q: '3 kg de feijão custam 18 reais. Quanto custam 5 kg?', steps: ['Direta: mais quilos, mais caro.', r`$\frac{3}{5}=\frac{18}{x}\Rightarrow3x=90\Rightarrow x=30$ reais.`] },
    { q: '6 operários fazem uma obra em 10 dias. Em quantos dias 4 operários fazem a mesma obra?', steps: ['Inversa: menos operários, mais dias.', r`$6\cdot10=4\cdot x\Rightarrow x=15$ dias.`] },
    { q: 'Num mapa de escala 1:500 000, duas cidades estão a 4 cm. Qual a distância real?', steps: [r`$4\cdot500\,000=2\,000\,000$ cm.`, '2 000 000 cm = 20 000 m = 20 km.'] }],
  summary: [r`Proporção: $\frac{a}{b}=\frac{c}{d}\Leftrightarrow ad=bc$.`, 'Direta: multiplica em cruz. Inversa: multiplica em linha (ou inverte uma razão).', r`Escala: $E=\frac{d}{D}$, mesma unidade.`, 'Composta: compare cada grandeza com a incógnita, uma de cada vez.'],
  mistakes: ['Tratar como direta uma relação inversa (velocidade e tempo, operários e dias).', 'Esquecer de converter unidades na escala (cm para km).', 'Na composta, comparar as grandezas entre si em vez de com a incógnita.'],
  formulas: [
    { name: 'Propriedade fundamental', tex: r`\frac{a}{b}=\frac{c}{d}\iff a\cdot d=b\cdot c`, note: 'Vale para b e d diferentes de zero.' },
    { name: 'Escala', tex: r`E=\frac{d}{D}`, note: 'd: medida no mapa; D: medida real, na mesma unidade.' }],
  quiz: [
    { q: 'Uma receita usa 2 xícaras de farinha para 3 ovos. Com 9 ovos, quantas xícaras?', options: ['6', '4,5', '5', '9'], answer: 0, why: 'Direta: 9 ovos é o triplo de 3, então 2 · 3 = 6 xícaras.' },
    { q: 'A 60 km/h uma viagem dura 4 h. A 80 km/h, dura:', options: ['5 h', '3 h', '3,5 h', '2 h'], answer: 1, why: r`Inversa: $60\cdot4=80\cdot t\Rightarrow t=3$ h.` },
    { q: 'Num mapa 1:200 000, 3 cm correspondem a:', options: ['600 m', '60 km', '6 km', '0,6 km'], answer: 2, why: '3 · 200 000 = 600 000 cm = 6 km.' },
    { q: 'Dividindo 120 em partes diretamente proporcionais a 1, 2 e 3, a maior parte é:', options: ['40', '50', '60', '72'], answer: 2, why: r`Total de partes $1+2+3=6$; cada parte vale $20$; a maior é $3\cdot20=60$.` },
    { q: '5 máquinas produzem 200 peças em 4 h. Quantas peças 8 máquinas produzem em 6 h?', options: ['320', '480', '400', '600'], answer: 1, why: r`Ambas diretas: $200\cdot\frac{8}{5}\cdot\frac{6}{4}=200\cdot1{,}6\cdot1{,}5=480$.` }] },
{ id: 'mat-estatistica', subject: 'Matemática', area: 'Estatística', title: 'Média, mediana e moda', level: 'Básico',
  learn: [
    { h: 'Média aritmética', p: [r`Some todos os valores e divida pela quantidade: $\bar{x}=\frac{x_1+x_2+\dots+x_n}{n}$. A média é sensível a valores extremos: um único salário muito alto puxa a média para cima.`] },
    { h: 'Média ponderada', p: [r`Cada valor tem um peso: $\bar{x}=\frac{x_1p_1+x_2p_2+\dots}{p_1+p_2+\dots}$. É como se calcula a nota final quando a prova vale mais que o trabalho, e como o SISU combina as notas do ENEM.`] },
    { h: 'Mediana e moda', p: ['Mediana é o valor central depois de ordenar os dados. Com quantidade par, é a média dos dois centrais. Ela não é afetada por extremos, por isso representa melhor o "valor típico" de salários e preços de imóveis.', 'Moda é o valor que mais se repete. Pode haver mais de uma moda, ou nenhuma.'] },
    { h: 'Dispersão', p: [r`Amplitude é maior valor menos menor valor. O desvio padrão $\sigma$ mede o quanto os dados se afastam da média: quanto menor, mais regular o conjunto. No ENEM, costuma ser pedido para comparar a regularidade de candidatos ou atletas.`] }],
  examples: [
    { q: 'Notas: 6, 7, 8, 8, 10. Calcule média, mediana e moda.', steps: [r`Média: $\frac{39}{5}=7{,}8$.`, 'Mediana: o valor central de 5 dados ordenados é o 3º, ou seja, 8.', 'Moda: 8 (aparece duas vezes).'] },
    { q: 'Prova (peso 2) nota 7 e trabalho (peso 1) nota 10. Média final?', steps: [r`$\frac{7\cdot2+10\cdot1}{2+1}=\frac{24}{3}=8$.`] },
    { q: 'Mediana de 3, 9, 1, 7.', steps: ['Ordene: 1, 3, 7, 9.', r`Quantidade par: $\frac{3+7}{2}=5$.`] }],
  summary: ['Média: soma ÷ quantidade.', 'Ponderada: soma de (valor × peso) ÷ soma dos pesos.', 'Mediana: valor central dos dados ordenados.', 'Moda: valor mais frequente.', 'Desvio padrão menor = dados mais regulares.'],
  mistakes: ['Calcular a mediana sem ordenar os dados.', 'Na média ponderada, dividir pela quantidade de valores em vez da soma dos pesos.', 'Usar a média quando há valores extremos e a pergunta é sobre o valor típico.'],
  formulas: [
    { name: 'Média aritmética', tex: r`\bar{x}=\frac{\sum x_i}{n}`, note: 'n: quantidade de valores.' },
    { name: 'Média ponderada', tex: r`\bar{x}=\frac{\sum x_i p_i}{\sum p_i}`, note: 'p: pesos.' },
    { name: 'Desvio padrão', tex: r`\sigma=\sqrt{\frac{\sum (x_i-\bar{x})^2}{n}}`, note: 'Mede a dispersão em torno da média.' }],
  quiz: [
    { q: 'Média de 4, 6, 8, 10 e 12:', options: ['8', '7', '9', '10'], answer: 0, why: r`$\frac{40}{5}=8$.` },
    { q: 'Mediana de 12, 3, 7, 5, 9, 1:', options: ['5', '7', '6', '6,2'], answer: 2, why: r`Ordenados: 1, 3, 5, 7, 9, 12. Centrais 5 e 7: $\frac{5+7}{2}=6$.` },
    { q: 'Moda de 2, 3, 3, 5, 7, 7, 7, 9:', options: ['3', '5', '7', '9'], answer: 2, why: 'O 7 aparece três vezes.' },
    { q: 'A média de 5 números é 10. Acrescentando o número 16, a nova média é:', options: ['11', '13', '10,5', '12'], answer: 0, why: r`Soma antiga $=50$; nova soma $=66$; $\frac{66}{6}=11$.` },
    { q: 'Numa empresa, um diretor ganha muito mais que os demais. Qual medida representa melhor o salário típico?', options: ['Média', 'Mediana', 'Amplitude', 'Soma'], answer: 1, why: 'A mediana não é puxada por valores extremos.' }] },
{ id: 'mat-probabilidade', subject: 'Matemática', area: 'Estatística', title: 'Probabilidade e contagem', level: 'Médio',
  learn: [
    { h: 'Probabilidade clássica', p: [r`Com resultados igualmente prováveis: $P(A)=\frac{\text{casos favoráveis}}{\text{casos possíveis}}$. O resultado fica entre 0 (impossível) e 1 (certo) e pode ser dado em fração, decimal ou porcentagem.`] },
    { h: 'Complementar, "e" e "ou"', p: [r`Complementar: $P(\text{não }A)=1-P(A)$. Muitas vezes é mais fácil calcular o que você não quer e subtrair de 1.`, r`Eventos independentes acontecendo juntos ("e"): multiplique, $P(A\cap B)=P(A)\cdot P(B)$. União ("ou"): some e tire a interseção, $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.`] },
    { h: 'Princípio fundamental da contagem', p: ['Se uma escolha tem m opções e outra, independente, tem n opções, as duas juntas têm m · n possibilidades. Placas, senhas e cardápios saem daí.'] },
    { h: 'Com e sem reposição', p: ['Retirando sem devolver, o total diminui a cada retirada e as probabilidades mudam. Retirando e devolvendo, elas ficam iguais.'] }],
  examples: [
    { q: 'Num dado comum, qual a probabilidade de sair número par?', steps: ['Favoráveis: 2, 4, 6 (3 casos). Possíveis: 6.', r`$P=\frac{3}{6}=\frac12$.`] },
    { q: 'Lançando duas moedas, qual a probabilidade de duas caras?', steps: [r`Independentes: $\frac12\cdot\frac12=\frac14$.`] },
    { q: 'Uma urna tem 3 bolas azuis e 2 vermelhas. Tirando 2, sem reposição, qual a probabilidade de ambas serem azuis?', steps: [r`1ª azul: $\frac35$. 2ª azul (sobraram 2 azuis em 4): $\frac24$.`, r`$\frac35\cdot\frac24=\frac{6}{20}=\frac{3}{10}$.`] }],
  summary: [r`$P=\frac{\text{favoráveis}}{\text{possíveis}}$.`, r`Complementar: $1-P$.`, '"E" (independentes): multiplica. "Ou": soma menos a interseção.', 'Contagem: multiplique as opções de cada etapa.'],
  mistakes: ['Somar quando deveria multiplicar (eventos simultâneos).', 'Contar duas vezes a interseção na união.', 'Esquecer que, sem reposição, o total diminui.'],
  formulas: [
    { name: 'Probabilidade', tex: r`P(A)=\frac{n(A)}{n(\Omega)}`, note: 'Ω: espaço amostral.' },
    { name: 'Complementar', tex: r`P(\bar{A})=1-P(A)`, note: 'Útil para "pelo menos um".' },
    { name: 'União', tex: r`P(A\cup B)=P(A)+P(B)-P(A\cap B)`, note: 'Tira a interseção contada duas vezes.' },
    { name: 'Independentes', tex: r`P(A\cap B)=P(A)\cdot P(B)`, note: 'Um evento não altera o outro.' }],
  quiz: [
    { q: 'Num dado, qual a probabilidade de sair um número maior que 4?', options: ['1/2', '1/3', '2/3', '1/6'], answer: 1, why: r`Favoráveis 5 e 6: $\frac26=\frac13$.` },
    { q: 'Lançando dois dados, a probabilidade de a soma ser 7 é:', options: ['1/6', '1/12', '7/36', '1/36'], answer: 0, why: r`Pares (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): $\frac{6}{36}=\frac16$.` },
    { q: 'A chance de chover amanhã é 0,3. A chance de não chover é:', options: ['0,3', '0,7', '1,3', '0,03'], answer: 1, why: r`$1-0{,}3=0{,}7$.` },
    { q: 'Quantas senhas de 3 dígitos (0 a 9, podendo repetir) existem?', options: ['720', '1000', '30', '999'], answer: 1, why: r`$10\cdot10\cdot10=1000$.` },
    { q: 'Num baralho de 52 cartas, a probabilidade de tirar copas ou rei é:', options: ['17/52', '4/13', '1/4', '1/13'], answer: 1, why: r`$\frac{13}{52}+\frac{4}{52}-\frac{1}{52}=\frac{16}{52}=\frac{4}{13}$ (o rei de copas foi contado duas vezes).` }] },
{ id: 'mat-geometria-plana', subject: 'Matemática', area: 'Geometria', title: 'Áreas e Teorema de Pitágoras', level: 'Médio',
  learn: [
    { h: 'Áreas das figuras básicas', p: [r`Retângulo: $b\cdot h$. Quadrado: $\ell^2$. Paralelogramo: $b\cdot h$. Triângulo: $\frac{b\cdot h}{2}$. Trapézio: $\frac{(B+b)\cdot h}{2}$. Losango: $\frac{D\cdot d}{2}$.`, 'Figuras complicadas quase sempre se resolvem dividindo em figuras simples, ou calculando a área de fora e subtraindo o que sobra.'] },
    { h: 'Círculo', p: [r`Área $A=\pi r^2$ e comprimento da circunferência $C=2\pi r$. O ENEM costuma dar $\pi\approx3$ ou $3{,}14$: use o valor do enunciado.`] },
    { h: 'Teorema de Pitágoras', p: [r`Num triângulo retângulo, o quadrado da hipotenusa (lado oposto ao ângulo reto) é a soma dos quadrados dos catetos: $a^2=b^2+c^2$. Ternos famosos: 3-4-5, 5-12-13 e seus múltiplos (6-8-10).`] },
    { h: 'Semelhança e áreas', p: [r`Se duas figuras são semelhantes com razão $k$ entre os lados, a razão entre as áreas é $k^2$. Dobrar o lado de um quadrado multiplica a área por 4.`] }],
  examples: [
    { q: 'Um terreno em forma de trapézio tem bases 20 m e 12 m e altura 10 m. Qual a área?', steps: [r`$\frac{(20+12)\cdot10}{2}=\frac{320}{2}=160$ m².`] },
    { q: r`Uma pizza tem raio 15 cm. Qual a área (use $\pi=3$)?`, steps: [r`$3\cdot15^2=3\cdot225=675$ cm².`] },
    { q: 'Os catetos de um triângulo retângulo medem 6 e 8. Quanto mede a hipotenusa?', steps: [r`$a^2=36+64=100\Rightarrow a=10$.`] }],
  summary: [r`Triângulo $\frac{bh}{2}$; trapézio $\frac{(B+b)h}{2}$; losango $\frac{Dd}{2}$.`, r`Círculo: $A=\pi r^2$; $C=2\pi r$.`, r`Pitágoras: $a^2=b^2+c^2$.`, r`Razão de lados $k$ → razão de áreas $k^2$.`],
  mistakes: ['Usar o diâmetro no lugar do raio na área do círculo.', 'Esquecer de dividir por 2 no triângulo e no trapézio.', 'Aplicar Pitágoras em triângulo que não é retângulo.', 'Achar que dobrar o lado dobra a área.'],
  formulas: [
    { name: 'Triângulo', tex: r`A=\frac{b\cdot h}{2}`, note: 'h é perpendicular à base.' },
    { name: 'Trapézio', tex: r`A=\frac{(B+b)\cdot h}{2}`, note: 'B e b: bases paralelas.' },
    { name: 'Círculo', tex: r`A=\pi r^2\qquad C=2\pi r`, note: 'r: raio (metade do diâmetro).' },
    { name: 'Pitágoras', tex: r`a^2=b^2+c^2`, note: 'a: hipotenusa.' }],
  quiz: [
    { q: 'Área de um triângulo de base 10 cm e altura 6 cm:', options: ['60 cm²', '30 cm²', '16 cm²', '36 cm²'], answer: 1, why: r`$\frac{10\cdot6}{2}=30$.` },
    { q: r`Área de um círculo de raio 4 ($\pi=3{,}14$):`, options: ['25,12', '50,24', '12,56', '100,48'], answer: 1, why: r`$3{,}14\cdot16=50{,}24$.` },
    { q: 'Uma escada de 5 m está apoiada numa parede, com o pé a 3 m da parede. A que altura ela toca a parede?', options: ['4 m', '2 m', '√34 m', '8 m'], answer: 0, why: r`$5^2=3^2+h^2\Rightarrow h^2=16\Rightarrow h=4$.` },
    { q: 'Se o lado de um quadrado dobra, a área fica multiplicada por:', options: ['2', '4', '8', '1 (não muda)'], answer: 1, why: r`$(2\ell)^2=4\ell^2$.` },
    { q: 'Área de um losango de diagonais 10 e 6:', options: ['60', '30', '16', '15'], answer: 1, why: r`$\frac{10\cdot6}{2}=30$.` }] },
{ id: 'mat-funcao-afim', subject: 'Matemática', area: 'Funções', title: 'Função afim (1º grau)', level: 'Médio',
  learn: [
    { h: 'Forma e significado', p: [r`Função afim é $f(x)=ax+b$. O coeficiente $a$ é a taxa de variação (quanto $y$ muda quando $x$ aumenta 1) e $b$ é o valor inicial, onde a reta corta o eixo y.`, 'Exemplos reais: conta de luz (taxa fixa + preço por kWh), corrida de táxi (bandeirada + preço por km), plano de celular.'] },
    { h: 'Crescente, decrescente e raiz', p: [r`Se $a>0$, a função é crescente; se $a<0$, decrescente; se $a=0$, constante. A raiz (onde a reta corta o eixo x) é $x=-\frac{b}{a}$.`] },
    { h: 'Achando a lei pelo gráfico', p: [r`Com dois pontos $(x_1,y_1)$ e $(x_2,y_2)$: $a=\frac{y_2-y_1}{x_2-x_1}$. Depois substitua um dos pontos para achar $b$.`] }],
  examples: [
    { q: 'Um táxi cobra 5 reais de bandeirada e 2 reais por km. Quanto custa uma corrida de 10 km?', steps: [r`$f(x)=2x+5$.`, r`$f(10)=2\cdot10+5=25$ reais.`] },
    { q: 'Ache a função afim que passa por (1, 3) e (3, 7).', steps: [r`$a=\frac{7-3}{3-1}=2$.`, r`$3=2\cdot1+b\Rightarrow b=1$.`, r`$f(x)=2x+1$.`] }],
  summary: [r`$f(x)=ax+b$: $a$ é a taxa, $b$ o valor inicial.`, r`$a>0$ crescente; $a<0$ decrescente.`, r`Raiz: $x=-b/a$.`, r`$a=\frac{\Delta y}{\Delta x}$.`],
  mistakes: ['Trocar a e b: o valor fixo é b, a taxa por unidade é a.', 'Calcular a com os pontos em ordem trocada no numerador e no denominador.', 'Esquecer que o gráfico é uma reta (dois pontos bastam).'],
  formulas: [
    { name: 'Função afim', tex: r`f(x)=ax+b`, note: 'a: coeficiente angular; b: coeficiente linear.' },
    { name: 'Taxa de variação', tex: r`a=\frac{y_2-y_1}{x_2-x_1}`, note: 'Inclinação da reta.' },
    { name: 'Raiz', tex: r`x=-\frac{b}{a}`, note: 'Ponto onde f(x) = 0.' }],
  quiz: [
    { q: r`A raiz de $f(x)=3x-6$ é:`, options: ['−2', '2', '6', '3'], answer: 1, why: r`$3x-6=0\Rightarrow x=2$.` },
    { q: 'Um plano de celular cobra 40 reais fixos mais 0,50 real por minuto. Quanto custa usar 100 minutos?', options: ['90 reais', '140 reais', '50 reais', '45 reais'], answer: 0, why: r`$40+0{,}5\cdot100=90$.` },
    { q: r`A função $f(x)=-2x+4$ é:`, options: ['crescente', 'decrescente', 'constante', 'não é uma função'], answer: 1, why: r`$a=-2<0$.` },
    { q: 'A reta que passa por (0, 2) e (2, 8) é:', options: ['f(x) = 3x + 2', 'f(x) = 2x + 3', 'f(x) = 4x + 2', 'f(x) = 3x + 8'], answer: 0, why: r`$a=\frac{8-2}{2-0}=3$ e $b=2$ (valor em $x=0$).` },
    { q: 'A temperatura de um forno é 30 °C e cai 2 °C por hora. Em quantas horas chega a 18 °C?', options: ['6', '12', '9', '4'], answer: 0, why: r`$30-2t=18\Rightarrow t=6$.` }] },
]
