import React from 'react'

import './InputCustomizado.scss'

const InputCustomizado = props => {
  const {
    type,
    label,
    name,
    inputRef,
    error,
    message
  } = props

  return(
    <div className='field'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        ref={inputRef({ required: true })}
      />
      {error[name] &&
        <p className='error'>{message}</p>
      }
    </div>
  )
}

export default InputCustomizado