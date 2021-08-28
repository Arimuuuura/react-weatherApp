import React from 'react'

export const Clouds = (props) => {

  if (!Object.keys(props.data).length) return null

  const { clouds } = props.data;
  const { all } = clouds;

  return (
    <div>
      <p>{`clouds : ${all}`}</p>
    </div>
  )
}
