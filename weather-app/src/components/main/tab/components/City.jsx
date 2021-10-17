import React, { useContext } from 'react'
import styled from 'styled-components';
import { WeatherDataContext } from '../../../../providers/WeatherDataProvider';
import { CITYCODE } from './constants/cityData'

const Code = CITYCODE;

const Container = styled.div`
  text-align: center;
`

const H2 = styled.h2`
  font-family: 'Yusei Magic', sans-serif;
  font-size: 18px;
`

const SelectBox = styled.select`
  width: 200px;
  height: 40px;
  margin-top: 24px;
  font-family: 'Yusei Magic', sans-serif;
  font-size: 16px;
`

export const City = () => {

  const { onChangeCity } = useContext(WeatherDataContext);

  return (
    <Container>
      <H2>都道府県を選択してください</H2>
      <SelectBox onChange={onChangeCity}>
        {
          Code.map(({name, code}, index) => (
            <option key={index} value={code}>{name}</option>
          ))
        }
      </SelectBox>
    </Container>
  )
}
