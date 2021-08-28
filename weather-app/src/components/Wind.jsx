import React from 'react'

export const Wind = (props) => {

  if (!Object.keys(props.data).length) return null

  const { wind } = props.data;
  const { deg, gust, speed } = wind;

  return (
    <div>
      <p>{`deg : ${deg}`}</p>
      <p>{`gust : ${gust}`}</p>
      <p>{`speed : ${speed}`}</p>
    </div>
  )
}
