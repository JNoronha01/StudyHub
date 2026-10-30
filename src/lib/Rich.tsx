import Tex from './Tex'
// Texto com fórmulas inline entre $...$ (ex.: "a equação $ax^2+bx+c=0$") e negrito entre **...**,
// que a IA do tutor costuma usar mesmo quando pedimos texto simples.
export default function Rich({ t }: { t: string }) {
  return <>{t.split(/\$([^$]+)\$/g).map((p, i) => i % 2 ? <Tex key={i} f={p} /> : <Bold key={i} t={p} />)}</>
}

function Bold({ t }: { t: string }) {
  return <>{t.split(/\*\*([^*]+)\*\*/g).map((p, i) => i % 2 ? <b key={i}>{p}</b> : <span key={i}>{p}</span>)}</>
}
