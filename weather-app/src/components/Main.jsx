import React from 'react'

export const Main = (props) => {

  if (!Object.keys(props.data).length) return null

  const { main } = props.data;

  return (
    <div>
      <p>{`feels_like : ${main.feels_like}`}</p>
      <p>{`humidity : ${main.humidity}`}</p>
      <p>{`pressure : ${main.pressure}`}</p>
      <p>{`temp : ${main.temp}`}</p>
      <p>{`temp_max : ${main.temp_max}`}</p>
      <p>{`temp_min : ${main.temp_min}`}</p>
    </div>
  )
}
