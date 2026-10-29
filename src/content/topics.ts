const r = String.raw
export type Question = { q: string; options: string[]; answer: number; why: string }
export type Topic = {
  id: string; subject: string; area: string; title: string; level: 'Básico' | 'Médio' | 'Avançado'
  learn: { h: string; p: string[] }[]          // Aprender: teoria em blocos (use $...$ para fórmulas inline)
  summary: string[]; mistakes: string[]         // Resumo
  formulas: { name: string; tex: string; note: string }[]
  examples: { q: string; steps: string[] }[]   // exemplos resolvidos (aparecem em Aprender)
  quiz: Question[]                              // Exercícios
}
export const allSubjects = ['Matemática', 'Física', 'Química', 'Biologia', 'Português', 'Literatura', 'História', 'Geografia', 'Inglês', 'Filosofia', 'Sociologia', 'ENEM e vestibulares']
export const topics: Topic[] = [
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
{ id: 'fis-newton', subject: 'Física', area: 'Dinâmica', title: 'Leis de Newton', level: 'Médio',
  learn: [
    { h: '1ª lei: inércia', p: ['Se a força resultante sobre um corpo é nula, ele permanece em repouso ou em movimento retilíneo uniforme. Inércia é a tendência de manter o estado de movimento, e a massa mede essa tendência.'] },
    { h: r`2ª lei: $F_R=m\cdot a$`, p: [r`A força resultante é a soma vetorial de todas as forças e produz aceleração na mesma direção e sentido. A unidade é o newton: $1\,N=1\,kg\cdot m/s^2$.`, r`Peso é a força da gravidade: $P=m\cdot g$ (use $g=10\,m/s^2$ salvo indicação). Massa (kg) é propriedade do corpo; peso (N) depende do local.`] },
    { h: '3ª lei: ação e reação', p: ['Toda força vem em par: mesmo módulo, mesma direção e sentidos opostos, aplicadas em corpos diferentes. Por atuarem em corpos diferentes, elas não se anulam.'] },
    { h: 'Como resolver', p: [r`1) Desenhe o corpo isolado com todas as forças (peso, normal, tração, atrito, força aplicada). 2) Escolha o sentido positivo na direção do movimento. 3) Escreva $F_R=m\cdot a$ nessa direção. 4) Resolva e confira unidades.`, r`Atrito: $f_{at}\le\mu N$; em movimento, $f_{at}=\mu N$.`] }],
  examples: [
    { q: 'Um bloco de 5 kg é puxado por 20 N horizontais e o atrito vale 5 N. Qual a aceleração?', steps: [r`$F_R=20-5=15\,N$`, r`$a=F_R/m=15/5=3\,m/s^2$.`] },
    { q: 'Pessoa de 60 kg em elevador que sobe com aceleração de 2 m/s². Qual a força normal do piso? (g = 10 m/s²)', steps: [r`$P=60\cdot10=600\,N$ (para baixo) e $N$ para cima.`, r`$N-P=m\,a\Rightarrow N=600+60\cdot2=720\,N$.`] },
    { q: 'Blocos A (2 kg) e B (3 kg) encostados, sem atrito, empurrados por F = 20 N sobre A. Aceleração e força de A sobre B?', steps: [r`Conjunto: $a=20/(2+3)=4\,m/s^2$.`, r`Só B recebe a força de A: $F_{AB}=m_B\,a=3\cdot4=12\,N$.`] }],
  summary: [r`$F_R=0\Rightarrow$ repouso ou MRU (inércia).`, r`$F_R=m\,a$; $P=m\,g$; unidade N.`, 'Ação e reação: corpos diferentes, nunca se anulam.', 'Massa em kg; peso em N.'],
  mistakes: ['Dizer que ação e reação se anulam.', 'Confundir massa com peso.', 'Esquecer o atrito ou a normal no diagrama.', 'Somar forças sem considerar o sentido (é soma vetorial).'],
  formulas: [
    { name: 'Segunda lei', tex: r`F_R=m\cdot a`, note: 'F em N, m em kg, a em m/s².' },
    { name: 'Peso', tex: r`P=m\cdot g`, note: 'g ≈ 10 m/s² (ou 9,8).' },
    { name: 'Atrito', tex: r`f_{at}=\mu\,N`, note: 'μ: coeficiente de atrito; N: normal.' }],
  quiz: [
    { q: 'Um corpo de 5 kg sofre força resultante de 10 N. Aceleração:', options: ['50 m/s²', '2 m/s²', '5 m/s²', '0,5 m/s²'], answer: 1, why: r`$a=F/m=10/5=2$.` },
    { q: 'Ao frear bruscamente, os passageiros são projetados para frente. Isso ilustra:', options: ['1ª lei (inércia)', '2ª lei', '3ª lei', 'Lei da gravitação'], answer: 0, why: 'Os corpos tendem a manter a velocidade que tinham.' },
    { q: 'Peso de uma pessoa de 70 kg (g = 10 m/s²):', options: ['70 N', '7 N', '700 N', '7000 N'], answer: 2, why: r`$P=70\cdot10=700\,N$.` },
    { q: 'Por que ação e reação não se anulam?', options: ['Têm módulos diferentes', 'Atuam em corpos diferentes', 'Têm a mesma direção e sentido', 'Só existem em repouso'], answer: 1, why: 'Cada força age em um corpo distinto; só se somam forças sobre o mesmo corpo.' }] },
{ id: 'fis-cinematica', subject: 'Física', area: 'Cinemática', title: 'MRU e MRUV', level: 'Básico',
  learn: [
    { h: 'MRU: velocidade constante', p: [r`Na trajetória retilínea com velocidade constante, $v=\Delta s/\Delta t$ e a posição segue $s=s_0+v\,t$. Para converter, km/h ÷ 3,6 = m/s.`] },
    { h: 'MRUV: aceleração constante', p: [r`A velocidade varia de modo uniforme: $v=v_0+a\,t$. A posição é $s=s_0+v_0t+\tfrac12at^2$. Quando não se conhece o tempo, use Torricelli: $v^2=v_0^2+2a\,\Delta s$.`] },
    { h: 'Gráficos', p: [r`No MRU, $s\times t$ é uma reta. No MRUV, $v\times t$ é uma reta cuja inclinação é $a$ e cuja área sob a reta é $\Delta s$; $s\times t$ é uma parábola.`] },
    { h: 'Queda livre', p: [r`Sem resistência do ar, é MRUV com $a=g\approx10\,m/s^2$. Partindo do repouso, $v=g\,t$ e $h=\tfrac12g\,t^2$.`] }],
  examples: [
    { q: 'Um carro a 72 km/h mantém essa velocidade por 30 min. Que distância percorre?', steps: [r`$30\,min=0{,}5\,h$.`, r`$\Delta s=72\cdot0{,}5=36\,km$.`] },
    { q: 'Um carro parte do repouso com a = 3 m/s². Velocidade e distância após 5 s?', steps: [r`$v=0+3\cdot5=15\,m/s$.`, r`$\Delta s=\tfrac12\cdot3\cdot5^2=37{,}5\,m$.`] },
    { q: 'Um carro a 20 m/s freia uniformemente e para em 40 m. Qual a aceleração e o tempo de frenagem?', steps: [r`$0=20^2+2a\cdot40\Rightarrow a=-5\,m/s^2$.`, r`$0=20-5t\Rightarrow t=4\,s$.`] }],
  summary: [r`MRU: $s=s_0+vt$.`, r`MRUV: $v=v_0+at$; $s=s_0+v_0t+\tfrac12at^2$; $v^2=v_0^2+2a\Delta s$.`, 'km/h ÷ 3,6 = m/s.', r`Queda livre: $a=g$.`],
  mistakes: ['Misturar km/h com m/s na mesma conta.', 'Esquecer que desaceleração tem sinal negativo.', r`Usar $s=vt$ quando a velocidade não é constante.`],
  formulas: [
    { name: 'MRU', tex: r`s=s_0+v\,t`, note: 'v constante.' },
    { name: 'Velocidade no MRUV', tex: r`v=v_0+a\,t`, note: 'a constante.' },
    { name: 'Posição no MRUV', tex: r`s=s_0+v_0t+\frac{a\,t^2}{2}`, note: 'Para t conhecido.' },
    { name: 'Torricelli', tex: r`v^2=v_0^2+2a\,\Delta s`, note: 'Quando o tempo não aparece.' }],
  quiz: [
    { q: '90 km/h correspondem a quantos m/s?', options: ['25', '30', '15', '324'], answer: 0, why: '90 ÷ 3,6 = 25.' },
    { q: 'Do repouso, a = 2 m/s² durante 6 s. Velocidade final:', options: ['6 m/s', '8 m/s', '12 m/s', '36 m/s'], answer: 2, why: r`$v=2\cdot6=12$.` },
    { q: 'Pedra solta do repouso cai por 3 s (g = 10 m/s²). Altura:', options: ['30 m', '45 m', '90 m', '15 m'], answer: 1, why: r`$h=\tfrac12\cdot10\cdot9=45$.` },
    { q: r`$v_0=10$ m/s, $a=2$ m/s² e $\Delta s=24$ m. Velocidade final:`, options: ['12 m/s', '14 m/s', '16 m/s', '196 m/s'], answer: 1, why: r`$v^2=100+2\cdot2\cdot24=196$, logo $v=14$.` }] },
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
    { q: 'Ácido fraco 0,2 mol/L com α = 0,5%. pH:', options: ['2', '3', '4', '5'], answer: 1, why: r`$[H^+]=0{,}005\cdot0{,}2=10^{-3}$, pH = 3.` }] }
]
