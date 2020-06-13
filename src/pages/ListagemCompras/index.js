import React, { useState, useEffect } from 'react'

import { useApi } from '../../utils/useApi'
import config from '../../../config'

import MenuLateral from '../../components/MenuLateral'
import ListaCompra from '../../components/ListaCompra'

import './ListagemCompras.scss'

const ListagemCompras = () => {
  const [listaCompra, setListaCompra] = useState(null)
  const [message, setMessage] = useState(null)
 
  const load = async () => {
    const response = await useApi({
      url: `${config.urlBase}/comprar`,
      method: 'get'
    })

    if(response.status === 200) {
      setListaCompra(response.data)
    } else {
      setMessage('Algo de errado não está certo, tente novamente.')
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

        {message &&
          <p className='message'>{message}</p>
        }

        {listaCompra &&
          <ul className="lista">
            {
              listaCompra.map(lista => {
                return <ListaCompra
                  data={lista}
                  key={lista.id}
                  class={
                    lista.status === 'Aprovado' ? 'aprovado' :
                    lista.status === 'Reprovado' ? 'reprovado' : 'status'
                  }
                />
              })
            }
          </ul>
        }
      </div>
    </div>
  )
}

export default ListagemCompras