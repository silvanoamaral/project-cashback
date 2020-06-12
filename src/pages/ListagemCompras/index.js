import React, { useState, useEffect } from 'react'

import { useApi } from '../../utils/useApi'
import {
  calcularCashBack,
  formatDate
} from '../../utils'

import config from '../../../config'

import MenuLateral from '../../components/MenuLateral'
import './ListagemCompras.scss'

const ListagemCompras = () => {
  const [listaCompra, setListaCompra] = useState(null)
 
  const load = async () => {
    const response = await useApi({
      url: `${config.urlBase}/comprar`,
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