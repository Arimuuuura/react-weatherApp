import React from 'react'

export const Weather = (props) => {

  if (!Object.keys(props.data).length) return null

  const { weather } = props.data;
  const [{ description, icon }] = weather;
  const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div>
      <p>{`description : ${description}`}</p>
      <img src={imgUrl} alt="アイコン" />
    </div>
  )
}
