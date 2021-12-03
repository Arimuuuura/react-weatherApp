import React, { memo, useContext } from 'react'
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

const InputLabel = styled.span`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  display: flex;
  justify-content: space-evenly;
`

export const Search = memo(() => {
  const {
    firstText,
    secondText,
    firstTextRef,
    secondTextRef,
    onChangeFirstText,
    onChangeSecondText,
    canSearch,
    onClickSearch,
    onClickClear,
    onKeyDown,
  } = useContext(WeatherDataContext);

  return (
    <>
      <InputContainer>
        <>
          <InputLabel>〒</InputLabel>
          <Input
            focus={firstTextRef}
            placeholder='100'
            value={firstText}
            onChange={onChangeFirstText}
            maxLength={3}
          />
          <InputLabel>-</InputLabel>
          <Input
            focus={secondTextRef}
            placeholder='0000'
            value={secondText}
            onChange={onChangeSecondText}
            onKeyDown={onKeyDown}
            maxLength={4}
          />
        </>
      </InputContainer>
      <ButtonContainer>
        <Button disabled={!canSearch} color='#007bff' onClick={onClickSearch}>検索</Button>
        <Button color='green' onClick={onClickClear}>クリア</Button>
      </ButtonContainer>
    </>
  )
})
