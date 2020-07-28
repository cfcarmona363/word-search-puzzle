import React from 'react'
import { StandardButton, AnimatedButton } from './StyledButton'

const FlatButton = ({ label, onClick, type }) => {
  return (
    <StandardButton onClick={onClick} type={type || 'classic'}>
      {label}
    </StandardButton>
  )
}

const RaisedButton = ({ label, onClick, type }) => {
  return (
    <AnimatedButton onClick={onClick} type={type || 'classic'}>
      {label}
    </AnimatedButton>
  )
}

export { FlatButton, RaisedButton }
