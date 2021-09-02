import React from 'react'
import styled from 'styled-components';
import { Button, FirstInput, SecondInput } from './components/ui/Input';
import { MainArea } from './components/MainArea';
import { useGetData } from './function/getData';

const Container = styled.div`
  background-color: aqua;
`

export const App = () => {

  const { isLoading, onChangeTextFirst, onChangeTextSecond, onClickGetCode, data } = useGetData();

  return (
    <Container>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <FirstInput onChange={onChangeTextFirst} />
            <SecondInput onChange={onChangeTextSecond} />
            <Button onClick={onClickGetCode}>GET</Button>
            <MainArea
              onChange={onChangeTextFirst}
              onClick={onClickGetCode}
              data={data}
            />
          </>
        )
      }
    </Container>
  )
}
