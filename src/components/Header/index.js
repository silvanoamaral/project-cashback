import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">Cashback</Link>
      </div>
    </header>
  )
}

export default Header
