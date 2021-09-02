import React from 'react'
import { useGetData } from '../../function/getData';
import styled from 'styled-components';
import { InputBox } from '../Input';
import { Button } from '../Button';
import { MainArea } from './MainArea';

const Container = styled.div`
  background: rgba(0, 128, 128, 0.5);
  padding: 16px;
  & span {
    margin: 16px;
  }
`

export const Controller = () => {

  console.log('controll');
  const { onChangeTextFirst, onChangeTextSecond, onClickGetCode, data } = useGetData();

  return (
    <>
      <Container>
        <span>〒</span>
        <InputBox placeholder="100" onChange={onChangeTextFirst} />
        <span>-</span>
        <InputBox placeholder="0000" onChange={onChangeTextSecond} />
        <Button onClick={onClickGetCode}>検索</Button>
      </Container>
      <MainArea data={data} />
    </>
  )
}
