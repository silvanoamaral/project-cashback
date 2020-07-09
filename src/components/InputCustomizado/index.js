import React from 'react'
import PropTypes from 'prop-types'

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

  return (
    <div className='field'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        data-testid={name}
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

InputCustomizado.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  inputRef: PropTypes.func,
  error: PropTypes.object,
  message: PropTypes.string,
  onChange: PropTypes.func,
  max: PropTypes.number
}
