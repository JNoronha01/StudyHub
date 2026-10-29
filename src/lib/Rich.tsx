import Tex from './Tex'
// Texto com fórmulas inline entre $...$ (ex.: "a equação $ax^2+bx+c=0$")
export default function Rich({ t }: { t: string }) {
  return <>{t.split(/\$([^$]+)\$/g).map((p, i) => i % 2 ? <Tex key={i} f={p} /> : <span key={i}>{p}</span>)}</>
}
