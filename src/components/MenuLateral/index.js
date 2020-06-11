import React from 'react'
import { NavLink } from 'react-router-dom'

import './MenuLateral.scss'

const MenuLateral = () => {
  return(
    <div className='menuLateral'>      
      <ul>
        <li><NavLink to='/listagem-compras'>Listagem das compras</NavLink></li>
        <li><NavLink to='/cadastrar-compras'>Cadastrar compras</NavLink></li>
      </ul>
    </div>
  )
}

export default MenuLateral