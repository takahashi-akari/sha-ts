import { ShaTS } from './index'

describe('sha256ts', () => {
  it('should create a hash', () => {
    const sha256 = ShaTS.sha256('test')
    const sha384 = ShaTS.sha384('test')
    const sha512 = ShaTS.sha512('test')

    expect(sha256).toBe('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')
    expect(sha384).toBe('768412320f7b0aa5812fce428dc4706b3cae50e02a64caa16a782249bfe8efc4b7ef1ccb126255d196047dfedf17a0a9')
    expect(sha512).toBe('ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff')
  })
})