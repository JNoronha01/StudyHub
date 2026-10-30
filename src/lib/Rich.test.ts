import { describe, expect, it } from 'vitest'
import { richParts } from './Rich'

describe('texto com fórmulas', () => {
  it('separa fórmulas entre $...$ do texto comum', () => {
    expect(richParts('a área é $b \\cdot h$ cm²')).toEqual([
      { text: 'a área é ', tex: false }, { text: 'b \\cdot h', tex: true }, { text: ' cm²', tex: false },
    ])
  })
  it('trata "R$" seguido de número como dinheiro, não como fórmula', () => {
    const parts = richParts('A calça custa R$ 100. Com 20% de desconto, vai para R$80.')
    expect(parts).toEqual([{ text: 'A calça custa R$ 100. Com 20% de desconto, vai para R$80.', tex: false }])
  })
  it('mantém fórmulas que aparecem junto de valores em reais', () => {
    expect(richParts('De R$ 100 para R$ 96: fator $0,8 \\cdot 1,2$.').filter(p => p.tex).map(p => p.text)).toEqual(['0,8 \\cdot 1,2'])
  })
})
