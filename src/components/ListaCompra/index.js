import React from 'react'
import PropTypes from 'prop-types'

import {
  calcularCashBack,
  formatDate
} from '../../utils'

const ListaCompra = props => {
  const {
    codigo,
    valor,
    date,
    status,
    formata
  } = props

  return(
    <li>
      <p><strong>Código da comprar</strong>: {codigo}</p>
      <p><strong>Valor da compra</strong>: R$ {valor}</p>
      <p><strong>Data da compra</strong>: {formatDate(date)}</p>
      <p><strong>Cashback</strong>: 5%</p>
      <p><strong>Receba de volta</strong>: R$ {calcularCashBack(valor)}</p>
      <p className={formata}><strong>Status da compra</strong>: {status}</p>
    </li>
  )
}

export default ListaCompra

ListaCompra.propTypes = {
  codigo: PropTypes.string,
  valor: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string,
  formata: PropTypes.string,
}