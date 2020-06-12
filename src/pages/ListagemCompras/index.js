import React, { useState, useEffect } from 'react'

import { useApi } from '../../utils/useApi'

import MenuLateral from '../../components/MenuLateral'
import './ListagemCompras.scss'

const ListagemCompras = () => {
  const [listaCompra, setListaCompra] = useState(null)
 
  const load = async () => {
    const response = await useApi({
      url: 'https://5e0e83b236b80000143dbd0e.mockapi.io/api/comprar',
      method: 'get'
    })

    if(response.status === 200) {
      setListaCompra(response.data)
    } else {
      console.log('Algo de errado não está certo, tente novamente.')
    }
  }

  useEffect(() => {
    load()
  }, [])

  const formatDate = str => {
    const date = new Date(str).toLocaleDateString()
    return date
  }

  const calcularCashBack = valor => {
    const desconto = (parseFloat(valor) / 100) *5
    return desconto.toFixed(2).toString().replace('.',',')
  }

  return(
    <div className='content'>
      <MenuLateral />
      <div className='col'>
        <h2>Olá revendedor(a), veja bem vindo!</h2>
        {listaCompra &&
          <ul className="lista">
            {
              listaCompra.map(lista => {
                return <li key={lista.id}>
                  <p><strong>Código</strong>: {lista.codigo}</p>
                  <p><strong>Valor</strong>: R$ {lista.valor}</p>
                  <p><strong>Data</strong>: {formatDate(lista.date)}</p>
                  <p><strong>Cashback</strong>: 5% de volta</p>            
                  <p><strong>Receba</strong>: R$ {calcularCashBack(lista.valor)}</p>                  
                  <p><strong>Status</strong>: {lista.status}</p>
                </li>
              })
            }
          </ul>
        }
      </div>
    </div>
  )
}

export default ListagemCompras