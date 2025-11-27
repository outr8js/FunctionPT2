import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logoImg from '../assets/Nfts/logo.png'

const LogoWrapper = styled.div`
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.06);
  }

  a {
    display: inline-block;
  }
`

const LogoImage = styled.img`
  height: 4.5rem;   /* bigger logo */
  width: auto;
  display: block;

  @media (max-width: 48em) {
    height: 3.5rem; /* slightly smaller on mobile */
  }
`

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <LogoImage src={logoImg} alt="Function in Motion Physical Therapy" />
      </Link>
    </LogoWrapper>
  )
}

export default Logo