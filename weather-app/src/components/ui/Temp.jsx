import React from 'react'

export const Temp = (props) => {

  const { temp_min, temp_max, feels_like } = props;

  return (
    <>
      <p>{`temp_min : ${temp_min}`}</p>
      <p>{`temp_max : ${temp_max}`}</p>
      <p>{`feels_like : ${feels_like}`}</p>
    </>
  )
}
