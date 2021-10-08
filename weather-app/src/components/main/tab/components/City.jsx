import React from 'react'
import { CITYCODE } from './constants/cityData'

const Code = CITYCODE;

export const City = (props) => {

  const { onChange } = props;

  return (
    <div>
      <select onChange={onChange}>
        {
          Code.map(({name, code}, index) => (
            <option key={index} value={code}>{name}</option>
          ))
        }
      </select>
    </div>
  )
}
