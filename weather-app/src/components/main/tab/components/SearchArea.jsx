import React, { useContext } from 'react'
import styled from 'styled-components';
import { WeatherDataContext } from '../../../../providers/WeatherDataProvider';
import { Button } from './button/Button';
import { Input } from './Input';

const InputContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  margin-top: 16px;
  line-height: 40px;
`

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  display: flex;
  justify-content: space-evenly;
`

export const SearchArea = () => {
  const { onChangeFirstText, onChangeSecondText, onClickGetZip, onClickClear, firstText, secondText } = useContext(WeatherDataContext);

  const Inputs = [
    {
      before: "〒",
      placeholder: "100",
      value: firstText,
      changeEvent: onChangeFirstText,
      autoFocus: true,
    },
    {
      before: "-",
      placeholder: "0000",
      value: secondText,
      changeEvent: onChangeSecondText,
      autoFocus: null,
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
    <>
      <InputContainer>
        {
          Inputs.map((input, index) => (
            <>
              <span>{input.before}</span>
              <Input
                key={`input-${index}`}
                autoFocus={input.autoFocus}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.changeEvent}
              />
            </>
          ))
        }
      </InputContainer>
      <ButtonContainer>
        {
          Buttons.map((button, index) => (
            <Button key={`button-${index}`} color={button.color} onClick={button.event}>{button.label}</Button>
          ))
        }
      </ButtonContainer>
    </>
  )
}
