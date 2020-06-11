import React from 'react'

import './InputSubmit.scss'

const InputSubmit = props => {
  const {
    loading,
    label
  } = props

  return(
    <input
      className='btn'
      type='submit'
      disabled={loading}
      value={loading ? 'Aguarde...': label}    
    />
  )
}

export default InputSubmit