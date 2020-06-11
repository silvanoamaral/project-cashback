import React from 'react'

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
    <div className='group field'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        ref={inputRef({ required: true })}
      />
      {error[name] && message}
    </div>
  )
}

export default InputCustomizado