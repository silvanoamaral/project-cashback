import React, { useState, useEffect } from 'react'

import { useApi } from '../../utils/useApi'
import config from '../../../config'

import MessageAlert from '../../components/MessageAlert'
import MenuLateral from '../../components/MenuLateral'
import ListaCompra from '../../components/ListaCompra'
import CashbackAcumulado from '../../components/CashbackAcumulado'

import './ListagemCompras.scss'

const ListagemCompras = () => {
  const [listaCompra, setListaCompra] = useState(null)
  const [message, setMessage] = useState(null)

  const load = async () => {
    const response = await useApi({
      url: `${config.urlBase}/comprar`,
      method: 'get'
    })

    if (response.status === 200) {
      setListaCompra(response.data)
    } else {
      setMessage({
        text: 'Algo de errado não está certo, tente novamente.',
        error: true
      })
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className='content'>
      <MenuLateral />
      <div className='col'>
        <h2>Olá revendedor(a), veja bem vindo!</h2>

        <CashbackAcumulado />

        {message &&
          <MessageAlert {...message} />
        }

        {listaCompra &&
          <>
            <h3>Lista de compras</h3>
            <ul className="lista">
              {listaCompra.map(lista => {
                return <ListaCompra
                  {...lista}
                  key={lista.id}
                  formata={
                    lista.status === 'Aprovado' ? 'aprovado' : lista.status === 'Reprovado' ? 'reprovado' : 'status'
                  }
                />
              })
              }
            </ul>
          </>
        }
      </div>
    </div>
  )
}

export default ListagemCompras
