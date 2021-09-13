import React from 'react'
import styled from 'styled-components';
import { useGetData } from './function/getData';
import { Controller } from './components/controls/Controller';

const Container = styled.div`
  border: 1px solid #333;
`

export const App = () => {

  const { isLoading } = useGetData();

  return (
    <Container>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <Controller />
        )
      }
    </Container>
  )
}
