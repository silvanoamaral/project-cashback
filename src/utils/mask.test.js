import { maskPreco, maskCpf } from './mask'

describe('Validando mascara', () => {
  
  const preco = maskPreco('123.00') //123,00
  const preco2 = maskPreco('1123.00') //123,00
  const cpf = maskCpf('01234567890') //012.345.678-90

  it('mask cpf', () => {
    expect(cpf).toBe('012.345.678-90')
  })
  it('mask preço - 123,00', () => {
    expect(preco).toBe('123,00')
  })
  it('mask preço - 1123,00', () => {
    expect(preco2).toBe('1.123,00')
  })
})