const { calculateBowlingScore } = require('./bowling')

describe('calculateBowlingScore', () => {
  it('should ensure the sum of all scores is calculated correctly when receiving numeric values', () => {
    const input = '516333267244541202107'
    const result = calculateBowlingScore(input)
    expect(result).toBe(68)
  })

  it('should ensure the sum of all scores is calculated correctly considering the "/" char in the input', () => {
    const input = '5/6333267244/412/2107'
    const result = calculateBowlingScore(input)
    expect(result).toBe(93)
  })

  it('should ensure the sum of all scores is calculated correctly considering the "X" char in the input', () => {
    const input = '165/251/X2/71XX1/7'
    const result = calculateBowlingScore(input)
    expect(result).toBe(149)
  })
})