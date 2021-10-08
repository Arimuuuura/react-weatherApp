import React from 'react'
import styled from 'styled-components';
import SunIcon from '../images/sun.png'
import StarIcon from '../images/star.png'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px auto;

  & img {
    width: 50px;
    height: 50px;
    margin: 0 16px;
  }

  & h1 {
    height:50px;
    line-height:50px;
    font-size: 24px;
  }
`

export const Header = () => {
  return (
    <header>
      <Container>
        <img src={SunIcon} alt="太陽" />
        <h1>weather forecast</h1>
        <img src={StarIcon} alt="星" />
      </Container>
    </header>
  )
}
