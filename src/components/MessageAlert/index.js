import React from 'react'
import PropTypes from 'prop-types'

const MessageAlert = props => {
  const {
    error,
    text
  } = props

  return (
    <p
      className={`message ${error ? 'alert' : ''}`}
      data-testid='message'
    >{text}</p>
  )
}

export default MessageAlert

MessageAlert.propTypes = {
  error: PropTypes.bool,
  text: PropTypes.string
}
