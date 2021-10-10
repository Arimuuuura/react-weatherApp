import React, { useContext } from 'react'
import { WeatherDataContext } from '../../../../providers/WeatherDataProvider';
import { CITYCODE } from './constants/cityData'

const Code = CITYCODE;

export const City = () => {

  const { onChangeGetCity } = useContext(WeatherDataContext);

  return (
    <div>
      <select onChange={onChangeGetCity}>
        {
          Code.map(({name, code}, index) => (
            <option key={index} value={code}>{name}</option>
          ))
        }
      </select>
    </div>
  )
}
