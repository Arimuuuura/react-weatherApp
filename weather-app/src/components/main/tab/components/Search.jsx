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

export const Search = () => {
  const {
    firstText,
    secondText,
    firstTextRef,
    secondTextRef,
    onChangeFirstText,
    onChangeSecondText,
    isSearch,
    onClickSearch,
    onClickClear,
  } = useContext(WeatherDataContext);

  const Inputs = [
    {
      before: "〒",
      placeholder: "100",
      value: firstText,
      changeEvent: onChangeFirstText,
      ref: firstTextRef,
    },
    {
      before: "-",
      placeholder: "0000",
      value: secondText,
      changeEvent: onChangeSecondText,
      ref: secondTextRef,
    },
  ];

  const Buttons = [
    {
      event: onClickSearch,
      label: "検索",
      color: "#007bff",
      disabled: isSearch,
    },
    {
      event: onClickClear,
      label: "クリア",
      color: "green",
      disabled: false,
    }
  ];

  return (
    <>
      <InputContainer>
        {
          Inputs.map((input, index) => (
            <React.Fragment key={`input-${index}`}>
              <span>{input.before}</span>
              <Input
                focus={input.ref}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.changeEvent}
              />
            </React.Fragment>
          ))
        }
      </InputContainer>
      <ButtonContainer>
        {
          Buttons.map((button, index) => (
            <Button key={`button-${index}`} disabled={button.disabled} color={button.color} onClick={button.event}>{button.label}</Button>
          ))
        }
      </ButtonContainer>
    </>
  )
}
