import React from 'react'

export const Place = (props) => {

  if (!Object.keys(props.data).length) return null

  const { data } = props;

  return (
    <>
      <p>{data.name}</p>
    </>
  )
}
