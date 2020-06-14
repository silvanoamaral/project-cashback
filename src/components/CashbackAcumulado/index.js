import React, { useState, useEffect } from 'react'

import './CashbackAcumulado.scss'

import MessageAlert from '../MessageAlert'
import { useApi } from '../../utils/useApi'
import cashback from '../../assets/images/cashback.png'

const CashbackAcumulado = () => {
  const [message, setMessage] = useState(null)
  const [visivel, setVisivel] = useState(false)
  const [valor, setValor] = useState('00,00')

  const load = async () => {
    const response = await useApi({
      url: `/api/consolidado`,
      method: 'get'
    })

    if(response.status === 200) {
      setValor(response.data)
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

  const handleClickOpen = () => {
    setVisivel(true)
  }
  const handleClickClose = () => {
    setVisivel(false)
  }

  return(
    <div className='cashback'>
      <div>
        <img src={cashback} alt='cashback' />
        <p>
          Seu Cashback acumulado, <span onClick={handleClickOpen} className='cashback__btn'>visualizar</span>.
        </p>
      </div>
      {visivel &&
        <div className='lightbox'>
          <div>
            <button
              className='btn'
              onClick={handleClickClose}
            >X</button>
            {message ?
              <MessageAlert {...message} />
              :
              <div>
                <p>
                  <img src={cashback} alt='cashback' />
                  Seu Valor de Cashback acumulado até o momento: 
                  <strong>R$ {valor}</strong>
                </p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  )
}

export default CashbackAcumulado