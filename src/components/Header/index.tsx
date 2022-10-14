import React from 'react'
import { HeaderContainer } from './styles'

export const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <span>logo</span>
      <nav>
        <a href="#">timer</a>
        <a href="#">history</a>
      </nav>
    </HeaderContainer>
  )
}
