import React from 'react'

export const Sys = (props) => {

  if (!Object.keys(props.data).length) return null

  const { sys } = props.data;
  const { sunrise, sunset } = sys;

  return (
    <div>
      <p>{`sunrise : ${sunrise}`}</p>
      <p>{`sunset : ${sunset}`}</p>
    </div>
  )
}
