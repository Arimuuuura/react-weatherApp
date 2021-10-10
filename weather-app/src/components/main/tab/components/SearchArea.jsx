import React, { useContext } from 'react'
import styled from 'styled-components';
import { WeatherDataContext } from '../../../../providers/WeatherDataProvider';
import { Button } from './button/Button';
import { Input } from './Input';

const Container = styled.div`
  background: rgba(0, 128, 128, 0.5);
  padding: 16px;
  & span {
    margin: 16px;
  }
`

export const SearchArea = () => {
  const { onChangeTextFirst, onChangeTextSecond, onClickGetZip, onClickClear } = useContext(WeatherDataContext);

  const Inputs = [
    {
      before: "〒",
      placeholder: "100",
      changeEvent: onChangeTextFirst,
    },
    {
      before: "-",
      placeholder: "0000",
      changeEvent: onChangeTextSecond,
    },
  ];

  const Buttons = [
    {

    }
  ];

  return (
    <Container>
      {
        Inputs.map(input => (
          <>
            <span>{input.before}</span>
            <Input placeholder={input.placeholder} onChange={input.changeEvent} />
          </>
        ))
      }
      <Button onClick={onClickGetZip}>検索</Button>
      <Button onClick={onClickClear}>クリア</Button>
    </Container>
  )
}
