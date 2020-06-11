import React from 'react'

import './InputCustomizado.scss'

const InputCustomizado = props => {
  const {
    type,
    label,
    name,
    inputRef,
    error,
    message,
    onChange,
    max
  } = props

  return(
    <div className='field'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        ref={inputRef}
        onChange={onChange}
        maxLength={max}
      />
      {error[name] &&
        <p className='error'>{message}</p>
      }
    </div>
  )
}

export default InputCustomizado