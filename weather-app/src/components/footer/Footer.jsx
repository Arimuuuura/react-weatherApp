import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: rgba(0, 128, 128, 0.5);
`

export const Footer = () => {
  return (
    <footer>
      <Container>
        <p>© Yuki Arimura. 2021.</p>
      </Container>
    </footer>
  )
}
