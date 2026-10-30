import { r, type Topic } from './types'

export const fisica: Topic[] = [
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
{ id: 'fis-energia', subject: 'Física', area: 'Energia', title: 'Trabalho, energia e potência', level: 'Médio',
  learn: [
    { h: 'Formas de energia mecânica', p: [r`Energia cinética é a energia do movimento: $E_c=\frac{mv^2}{2}$. Energia potencial gravitacional depende da altura: $E_p=mgh$. A soma das duas é a energia mecânica.`, r`Como a velocidade está ao quadrado, dobrar a velocidade quadruplica a energia cinética. Por isso batidas a 100 km/h são muito mais destrutivas que a 50 km/h.`] },
    { h: 'Conservação da energia', p: [r`Sem atrito, a energia mecânica se conserva: o que se perde de $E_p$ vira $E_c$. Um corpo que cai de uma altura $h$ chega ao chão com $v=\sqrt{2gh}$, independentemente da massa.`, 'Com atrito, parte da energia vira calor. A energia total do universo sempre se conserva: ela só muda de forma.'] },
    { h: 'Trabalho e potência', p: [r`Trabalho de uma força constante na direção do deslocamento: $\tau=F\cdot d$ (em joules). Potência é a rapidez com que a energia é transferida: $P=\frac{E}{\Delta t}$, em watts ($1\,W=1\,J/s$).`] },
    { h: 'Rendimento e usinas', p: [r`Rendimento é a fração da energia que é aproveitada: $\eta=\frac{E_{\text{útil}}}{E_{total}}$. Nenhuma máquina real tem 100%. Hidrelétricas transformam energia potencial da água em elétrica; termelétricas, energia térmica (da queima) em elétrica; eólicas, energia cinética do vento.`] }],
  examples: [
    { q: r`Uma bola cai de 5 m de altura. Com que velocidade chega ao chão ($g=10\,m/s^2$, sem atrito)?`, steps: [r`$mgh=\frac{mv^2}{2}\Rightarrow v=\sqrt{2gh}$.`, r`$v=\sqrt{2\cdot10\cdot5}=\sqrt{100}=10$ m/s.`] },
    { q: 'Um motor eleva 100 kg a 10 m de altura em 20 s. Qual sua potência?', steps: [r`$E=mgh=100\cdot10\cdot10=10\,000$ J.`, r`$P=\frac{10\,000}{20}=500$ W.`] }],
  summary: [r`$E_c=\frac{mv^2}{2}$; $E_p=mgh$.`, 'Sem atrito, a energia mecânica se conserva.', r`$\tau=Fd$; $P=E/\Delta t$.`, r`Rendimento $\eta=E_{\text{útil}}/E_{total}$, sempre menor que 1.`],
  mistakes: ['Esquecer de elevar a velocidade ao quadrado.', 'Usar massa em gramas (o SI usa kg).', 'Achar que corpos mais pesados caem mais rápido (sem ar, todos caem igual).'],
  formulas: [
    { name: 'Energia cinética', tex: r`E_c=\frac{m v^2}{2}`, note: 'm em kg, v em m/s, E em J.' },
    { name: 'Energia potencial gravitacional', tex: r`E_p=m g h`, note: 'h medido a partir de um nível de referência.' },
    { name: 'Potência', tex: r`P=\frac{E}{\Delta t}=\frac{\tau}{\Delta t}`, note: 'Em watts (J/s).' },
    { name: 'Rendimento', tex: r`\eta=\frac{E_{\text{útil}}}{E_{total}}`, note: 'Multiplique por 100 para ter em %.' }],
  quiz: [
    { q: 'Energia cinética de um corpo de 2 kg a 3 m/s:', options: ['6 J', '9 J', '18 J', '3 J'], answer: 1, why: r`$\frac{2\cdot3^2}{2}=9$ J.` },
    { q: r`Um corpo cai de 20 m sem atrito ($g=10\,m/s^2$). Velocidade ao chegar ao chão:`, options: ['10 m/s', '20 m/s', '200 m/s', '40 m/s'], answer: 1, why: r`$v=\sqrt{2\cdot10\cdot20}=\sqrt{400}=20$.` },
    { q: 'Se a velocidade de um carro dobra, sua energia cinética fica multiplicada por:', options: ['2', '4', '8', '1 (não muda)'], answer: 1, why: r`$E_c\propto v^2$: $2^2=4$.` },
    { q: 'Uma máquina recebe 1000 J e entrega 600 J de trabalho útil. Seu rendimento é:', options: ['40%', '60%', '160%', '6%'], answer: 1, why: r`$\frac{600}{1000}=0{,}6=60\%$.` },
    { q: 'Numa hidrelétrica, a principal transformação de energia é:', options: ['química em elétrica', 'potencial gravitacional em elétrica', 'térmica em elétrica', 'nuclear em elétrica'], answer: 1, why: 'A água desce, ganha velocidade e gira as turbinas: potencial → cinética → elétrica.' }] },
{ id: 'fis-eletrodinamica', subject: 'Física', area: 'Eletricidade', title: 'Circuitos, potência e conta de luz', level: 'Médio',
  learn: [
    { h: 'Corrente, tensão e resistência', p: [r`Corrente elétrica ($i$, em ampères) é o fluxo de cargas. Tensão ($U$, em volts) é o "empurrão" que faz as cargas andarem. Resistência ($R$, em ohms) é a dificuldade à passagem. Lei de Ohm: $U=R\cdot i$.`] },
    { h: 'Potência elétrica', p: [r`$P=U\cdot i=R\cdot i^2=\frac{U^2}{R}$. Num chuveiro ligado sempre na mesma tensão, $P=\frac{U^2}{R}$ mostra que menor resistência dá maior potência. Por isso a posição "inverno" usa um resistor de menor resistência.`] },
    { h: 'Consumo de energia (kWh)', p: [r`Energia consumida $=P\cdot\Delta t$. A conta de luz usa kWh: potência em kW vezes tempo em horas. Um aparelho de 1000 W ligado por 1 h consome 1 kWh.`] },
    { h: 'Associação de resistores', p: [r`Em série, as resistências se somam: $R_{eq}=R_1+R_2+\dots$, e a corrente é a mesma em todos. Em paralelo, a tensão é a mesma em todos e $\frac{1}{R_{eq}}=\frac{1}{R_1}+\frac{1}{R_2}+\dots$. Para dois resistores: $R_{eq}=\frac{R_1R_2}{R_1+R_2}$.`, 'As tomadas de uma casa estão em paralelo: cada aparelho recebe a mesma tensão e um pode ser desligado sem apagar os outros.'] }],
  examples: [
    { q: 'Um chuveiro de 5500 W funciona em 220 V. Qual a corrente?', steps: [r`$i=\frac{P}{U}=\frac{5500}{220}=25$ A.`] },
    { q: 'Esse chuveiro é usado 20 minutos por dia, durante 30 dias. Quanto consome?', steps: [r`$5{,}5\,kW\cdot\frac13\,h=\frac{5{,}5}{3}$ kWh por dia.`, r`$\frac{5{,}5}{3}\cdot30=55$ kWh no mês.`] },
    { q: 'Resistores de 6 Ω e 3 Ω em paralelo. Resistência equivalente?', steps: [r`$\frac{6\cdot3}{6+3}=\frac{18}{9}=2$ Ω.`] }],
  summary: [r`$U=Ri$.`, r`$P=Ui=Ri^2=U^2/R$.`, r`Energia: $E=P\cdot\Delta t$ (kW × h = kWh).`, 'Série: soma. Paralelo: produto sobre soma (para dois).'],
  mistakes: ['Esquecer de converter W para kW e minutos para horas no consumo.', 'Somar resistências em paralelo.', 'Achar que maior resistência sempre esquenta mais (depende de a tensão ou a corrente ser fixa).'],
  formulas: [
    { name: 'Lei de Ohm', tex: r`U=R\cdot i`, note: 'U em V, R em Ω, i em A.' },
    { name: 'Potência elétrica', tex: r`P=U\cdot i=R\cdot i^2=\frac{U^2}{R}`, note: 'Em watts.' },
    { name: 'Energia consumida', tex: r`E=P\cdot\Delta t`, note: 'kW × h = kWh (unidade da conta de luz).' },
    { name: 'Resistores em paralelo', tex: r`\frac{1}{R_{eq}}=\frac{1}{R_1}+\frac{1}{R_2}`, note: 'Em série: R_eq = R₁ + R₂.' }],
  quiz: [
    { q: 'Um resistor de 10 Ω é percorrido por 2 A. A tensão nele é:', options: ['5 V', '20 V', '12 V', '0,2 V'], answer: 1, why: r`$U=10\cdot2=20$ V.` },
    { q: 'Uma lâmpada de 60 W fica acesa 5 h por dia durante 30 dias. Consumo:', options: ['9 kWh', '900 kWh', '1,8 kWh', '300 kWh'], answer: 0, why: r`$0{,}06\cdot5\cdot30=9$ kWh.` },
    { q: 'Resistores de 6 Ω e 3 Ω em paralelo equivalem a:', options: ['9 Ω', '2 Ω', '4,5 Ω', '18 Ω'], answer: 1, why: r`$\frac{18}{9}=2$ Ω.` },
    { q: 'No chuveiro, a posição "inverno" (água mais quente) corresponde a:', options: ['maior resistência', 'menor resistência', 'menor corrente', 'menor potência'], answer: 1, why: r`Com $U$ fixo, $P=U^2/R$: menor $R$, maior potência.` },
    { q: 'Um aparelho de 1100 W ligado em 110 V é percorrido por uma corrente de:', options: ['10 A', '1 A', '100 A', '0,1 A'], answer: 0, why: r`$i=\frac{1100}{110}=10$ A.` }] },
{ id: 'fis-ondas', subject: 'Física', area: 'Ondulatória', title: 'Ondas, som e luz', level: 'Médio',
  learn: [
    { h: 'O que é uma onda', p: ['Onda é uma perturbação que transporta energia sem transportar matéria. Ondas mecânicas (som, ondas na água) precisam de um meio; ondas eletromagnéticas (luz, rádio, micro-ondas, raio X) se propagam até no vácuo.'] },
    { h: 'Equação fundamental', p: [r`$v=\lambda\cdot f$: velocidade = comprimento de onda × frequência. O período é o inverso da frequência: $T=\frac1f$. No ar, o som tem cerca de 340 m/s; a luz no vácuo, $c=3\cdot10^8$ m/s.`, 'Quando a onda muda de meio, a frequência não muda; mudam a velocidade e o comprimento de onda.'] },
    { h: 'Fenômenos ondulatórios', p: ['Reflexão: a onda volta (eco). Refração: muda de meio e de velocidade (canudo que parece quebrado no copo). Difração: contorna obstáculos (ouvir alguém atrás do muro). Interferência: ondas se somam ou se anulam (fones com cancelamento de ruído).', 'Ressonância: um corpo vibra com amplitude máxima quando recebe energia na sua frequência natural (taça que quebra com a voz). Efeito Doppler: a frequência percebida muda quando a fonte se move (sirene mais aguda ao se aproximar).'] },
    { h: 'Características do som', p: ['Altura: grave ou agudo (frequência). Intensidade: forte ou fraco (amplitude, medida em decibéis). Timbre: o que diferencia um violão de um piano tocando a mesma nota (forma da onda). Humanos ouvem de 20 Hz a 20 000 Hz.'] }],
  examples: [
    { q: 'Um som de 170 Hz se propaga no ar a 340 m/s. Qual seu comprimento de onda?', steps: [r`$\lambda=\frac{v}{f}=\frac{340}{170}=2$ m.`] },
    { q: r`Uma rádio FM transmite em 100 MHz. Qual o comprimento de onda ($c=3\cdot10^8$ m/s)?`, steps: [r`$\lambda=\frac{3\cdot10^8}{10^8}=3$ m.`] }],
  summary: [r`$v=\lambda f$; $T=1/f$.`, 'Mecânicas precisam de meio; eletromagnéticas não.', 'Na refração, a frequência se mantém.', 'Altura = frequência; intensidade = amplitude; timbre = forma da onda.'],
  mistakes: ['Dizer que a onda transporta matéria.', 'Achar que o som se propaga no vácuo.', 'Confundir som alto (intenso) com som agudo (alta frequência).', 'Esquecer de converter MHz (10⁶) e kHz (10³).'],
  formulas: [
    { name: 'Equação fundamental', tex: r`v=\lambda\cdot f`, note: 'λ em m, f em Hz.' },
    { name: 'Período', tex: r`T=\frac{1}{f}`, note: 'T em segundos.' }],
  quiz: [
    { q: 'Uma onda tem frequência 50 Hz e comprimento de onda 2 m. Sua velocidade é:', options: ['25 m/s', '100 m/s', '52 m/s', '200 m/s'], answer: 1, why: r`$v=2\cdot50=100$ m/s.` },
    { q: 'O som não se propaga no vácuo porque:', options: ['é uma onda eletromagnética', 'é uma onda mecânica', 'tem frequência baixa', 'é uma onda transversal'], answer: 1, why: 'Ondas mecânicas precisam de um meio material para vibrar.' },
    { q: 'A sirene de uma ambulância parece mais aguda quando ela se aproxima. Esse fenômeno é:', options: ['refração', 'difração', 'efeito Doppler', 'ressonância'], answer: 2, why: 'A fonte em movimento altera a frequência percebida.' },
    { q: 'Conseguimos ouvir uma pessoa que fala atrás de um muro por causa da:', options: ['reflexão', 'difração', 'polarização', 'refração'], answer: 1, why: 'A onda sonora contorna o obstáculo.' },
    { q: 'O período de uma onda de 4 Hz é:', options: ['4 s', '0,25 s', '0,4 s', '2,5 s'], answer: 1, why: r`$T=\frac14=0{,}25$ s.` }] },
{ id: 'fis-termologia', subject: 'Física', area: 'Termologia', title: 'Calor, temperatura e escalas', level: 'Básico',
  learn: [
    { h: 'Calor x temperatura', p: ['Temperatura mede o grau de agitação das partículas. Calor é energia térmica em trânsito, que sempre flui espontaneamente do corpo mais quente para o mais frio, até o equilíbrio térmico.'] },
    { h: 'Calor sensível e latente', p: [r`Calor sensível muda a temperatura: $Q=m\cdot c\cdot\Delta T$, onde $c$ é o calor específico (água: 1 cal/g·°C). Calor latente muda o estado físico sem mudar a temperatura: $Q=m\cdot L$ (fusão do gelo: 80 cal/g).`, 'A água tem calor específico alto: demora para esquentar e para esfriar. Por isso cidades litorâneas têm menor variação de temperatura que cidades no interior.'] },
    { h: 'Escalas termométricas', p: [r`Celsius (água congela a 0 e ferve a 100), Fahrenheit (32 e 212) e Kelvin (273 e 373). Conversão: $\frac{T_C}{5}=\frac{T_F-32}{9}=\frac{T_K-273}{5}$. Kelvin não tem valores negativos: 0 K é o zero absoluto.`] },
    { h: 'Propagação do calor', p: ['Condução: de partícula para partícula, típica dos sólidos (cabo da panela esquentando). Convecção: correntes de fluido quente sobem e frio descem (ar-condicionado no alto, aquecedor embaixo). Irradiação: por ondas eletromagnéticas, inclusive no vácuo (calor do Sol).'] }],
  examples: [
    { q: 'Quanto calor é preciso para aquecer 500 g de água de 20 °C a 80 °C?', steps: [r`$Q=500\cdot1\cdot(80-20)=30\,000$ cal.`] },
    { q: 'Converta 25 °C para Fahrenheit e Kelvin.', steps: [r`$\frac{25}{5}=\frac{T_F-32}{9}\Rightarrow T_F=45+32=77$ °F.`, r`$T_K=25+273=298$ K.`] }],
  summary: ['Calor flui do quente para o frio.', r`Sensível: $Q=mc\Delta T$. Latente: $Q=mL$.`, r`$\frac{T_C}{5}=\frac{T_F-32}{9}=\frac{T_K-273}{5}$.`, 'Condução, convecção e irradiação.'],
  mistakes: ['Dizer que um corpo "tem calor" (calor é energia em trânsito).', 'Achar que a temperatura sobe durante a mudança de estado.', 'Esquecer o −32 na conversão para Fahrenheit.'],
  formulas: [
    { name: 'Calor sensível', tex: r`Q=m\cdot c\cdot\Delta T`, note: 'Água: c = 1 cal/g·°C.' },
    { name: 'Calor latente', tex: r`Q=m\cdot L`, note: 'Fusão do gelo: L = 80 cal/g.' },
    { name: 'Conversão de escalas', tex: r`\frac{T_C}{5}=\frac{T_F-32}{9}=\frac{T_K-273}{5}`, note: 'Variações: Δ1 °C = Δ1 K = Δ1,8 °F.' }],
  quiz: [
    { q: 'Calor para aquecer 200 g de água de 10 °C a 60 °C:', options: ['10 000 cal', '12 000 cal', '50 cal', '1000 cal'], answer: 0, why: r`$200\cdot1\cdot50=10\,000$ cal.` },
    { q: '100 °F equivalem a aproximadamente:', options: ['37,8 °C', '68 °C', '212 °C', '55,6 °C'], answer: 0, why: r`$T_C=\frac{5(100-32)}{9}\approx37{,}8$ °C.` },
    { q: 'O ar-condicionado é instalado no alto da parede por causa da:', options: ['condução', 'convecção', 'irradiação', 'dilatação'], answer: 1, why: 'O ar frio, mais denso, desce e cria correntes de convecção.' },
    { q: 'O calor do Sol chega à Terra por:', options: ['condução', 'convecção', 'irradiação', 'evaporação'], answer: 2, why: 'Só a irradiação se propaga no vácuo.' },
    { q: 'Durante a fusão do gelo a 0 °C, a temperatura da mistura:', options: ['aumenta', 'diminui', 'permanece constante', 'oscila'], answer: 2, why: 'O calor recebido é usado para mudar de estado (calor latente).' }] },
]
