import { useApi } from './useApi'

describe('Validando request API', () => {
  it('Retorno Sucesso', async () => {
    const response = await useApi({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/revendedores',
      method: 'get'
    })

    expect(response.data[0].nome).toBe('silvano')
  })

  it('Retorno Inválido', async () => {
    const res = await useApi({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/revendedoressss',
      method: 'get'
    })

    expect(res.response.status).toBe(404)
  })
})
