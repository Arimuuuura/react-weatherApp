import React, { memo } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: rgba(0, 128, 128, 0.5);
`

export const Footer = memo(() => {
  return (
    <footer>
      <Container>
        <p>© Yuki Arimura. 2021.</p>
      </Container>
    </footer>
  )
})
