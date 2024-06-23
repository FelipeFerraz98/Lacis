import React from 'react'

import { ButtonContainer, TextContent } from './styles';

const Button = ({title, onClick, active}) => {
  return (
    <ButtonContainer onClick={onClick} active={active}>
      <TextContent>{title}</TextContent>
    </ButtonContainer>
  )
}

export { Button }