import React from 'react'
import { Link } from 'react-router-dom'

const Comprar = () => {
  return(
    <ul>
      <li><Link to='/listagem-compras'>Listagem das compras</Link></li>
      <li><Link to='/cadastrar-compras'>Cadastrar compras</Link></li>
    </ul>
  )
}

export default Comprar