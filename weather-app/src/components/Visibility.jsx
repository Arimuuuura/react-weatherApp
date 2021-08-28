import React from 'react'

export const Visibility = (props) => {

  if (!Object.keys(props.data).length) return null

  const { visibility } = props.data;

  return (
    <div>
      <p>{`visibility : ${visibility}`}</p>
    </div>
  )
}
