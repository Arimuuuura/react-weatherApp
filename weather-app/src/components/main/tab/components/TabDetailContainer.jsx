import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgba(0, 128, 128, 0.5);
  min-height: 195px;
  margin: 0 16px;
  border-radius: 5px;
`

export const TabDetailContainer = (props) => {
  const { children } = props;
  return (
    <Container>
      { children }
    </Container>
  )
}
