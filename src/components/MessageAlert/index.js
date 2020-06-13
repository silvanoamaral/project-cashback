import React from 'react'

const MessageAlert = props => {
  const {
    error,
    text
  } = props

  return(
    <p className={`message ${error ? 'alert' : ''}`}>{text}</p>
  )
}

export default MessageAlert