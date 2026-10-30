import Tex from './Tex'

// Divide o texto em trechos comuns e fórmulas ($...$). "R$" seguido de número é dinheiro, não início de
// fórmula: a IA do tutor escreve "R$ 100" e, sem esta proteção, o texto até o próximo $ virava fórmula.
const MONEY = '' // caractere de uso privado: nunca aparece em texto real
export function richParts(t: string): { text: string; tex: boolean }[] {
  return t.replace(/R\$(?=\s?\d)/g, `R${MONEY}`).split(/\$([^$]+)\$/g)
    .map((p, i) => ({ text: p.split(MONEY).join('$'), tex: i % 2 === 1 }))
}

// Texto com fórmulas inline entre $...$ (ex.: "a equação $ax^2+bx+c=0$") e negrito entre **...**,
// que a IA do tutor costuma usar mesmo quando pedimos texto simples.
export default function Rich({ t }: { t: string }) {
  return <>{richParts(t).map((p, i) => p.tex ? <Tex key={i} f={p.text} /> : <Bold key={i} t={p.text} />)}</>
}

function Bold({ t }: { t: string }) {
  return <>{t.split(/\*\*([^*]+)\*\*/g).map((p, i) => i % 2 ? <b key={i}>{p}</b> : <span key={i}>{p}</span>)}</>
}
