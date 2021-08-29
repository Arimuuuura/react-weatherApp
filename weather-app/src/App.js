import React from 'react'
import { GetData } from './components/GetData';
import styled from 'styled-components';

const Container = styled.div`
  background-color: aqua;
`


export const App = () => {

  return (
    <Container>
      <GetData />
    </Container>
  );
}
