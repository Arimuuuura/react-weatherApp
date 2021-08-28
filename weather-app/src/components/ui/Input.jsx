import React from 'react'

export const Input = (props) => {

  const { onChange, onClick, children } = props;

  return (
    <>
      <input onChange={onChange} />
      <button onClick={onClick}>{ children }</button>
    </>
  )
}
