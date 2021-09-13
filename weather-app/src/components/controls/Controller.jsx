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

  const { onChangeTextFirst, onChangeTextSecond, onClickGetZip, onClickGetCity, currentData, weeklyData } = useGetData();

  console.log(weeklyData);

  return (
    <>
      <Container>
        <span>〒</span>
        <InputBox placeholder="100" onChange={onChangeTextFirst} />
        <span>-</span>
        <InputBox placeholder="0000" onChange={onChangeTextSecond} />
        <Button onClick={onClickGetZip}>検索</Button>
        <Button onClick={onClickGetCity}>都市</Button>
      </Container>
      <MainArea data={currentData} />
    </>
  )
}
