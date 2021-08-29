import React from 'react'

export const Detail = (props) => {

  const {
    humidity,
    pressure,
    sunrise,
    sunset,
    deg,
    speed,
    gust,
    all,
    visibility
  } = props;

  return (
    <>
      <p>{`humidity : ${humidity}`}</p>
      <p>{`pressure : ${pressure}`}</p>
      <p>{`sunrise : ${sunrise}`}</p>
      <p>{`sunset : ${sunset}`}</p>
      <p>{`deg : ${deg}`}</p>
      <p>{`speed : ${speed}`}</p>
      <p>{`gust : ${gust}`}</p>
      <p>{`clouds : ${all}`}</p>
      <p>{`visibility : ${visibility}`}</p>
    </>
  )
}
