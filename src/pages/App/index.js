import React from 'react'

import Routers from '../../routes'
import Header from '../../components/Header'

import '../../assets/css/index.scss'

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Routers />
      </div>
    </>
  )
}

export default App
