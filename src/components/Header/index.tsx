import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import LogoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'

export const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="Dois triangulos colocados" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
