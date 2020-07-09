import React from 'react'
import PropTypes from 'prop-types'

import './InputSubmit.scss'

const InputSubmit = props => {
  const {
    loading,
    label
  } = props

  return (
    <input
      className='btn'
      type='submit'
      disabled={loading}
      value={loading ? 'Aguarde...' : label}
    />
  )
}

export default InputSubmit

InputSubmit.propTypes = {
  loading: PropTypes.bool,
  label: PropTypes.string
}
