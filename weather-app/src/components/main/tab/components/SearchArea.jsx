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
  const { onChangeTextFirst, onChangeTextSecond, onClickGetZip, onClickClear, firstText, secondText } = useContext(WeatherDataContext);

  const Inputs = [
    {
      before: "〒",
      placeholder: "100",
      value: firstText,
      changeEvent: onChangeTextFirst,
    },
    {
      before: "-",
      placeholder: "0000",
      value: secondText,
      changeEvent: onChangeTextSecond,
    },
  ];

  const Buttons = [
    {
      event: onClickGetZip,
      label: "検索",
      color: "skyblue",
    },
    {
      event: onClickClear,
      label: "クリア",
      color: "green",
    }
  ];

  return (
    <Container>
      {
        Inputs.map(input => (
          <>
            <span>{input.before}</span>
            <Input placeholder={input.placeholder} value={input.value} onChange={input.changeEvent} />
          </>
        ))
      }
      {
        Buttons.map(button => (
          <Button color={button.color} onClick={button.event}>{button.label}</Button>
        ))
      }
    </Container>
  )
}
