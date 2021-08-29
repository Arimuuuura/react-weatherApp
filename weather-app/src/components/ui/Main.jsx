import React from 'react'

export const Main = (props) => {

  const { description, temp, imgUrl } = props;

  return (
    <>
      <p>{`description : ${description}`}</p>
      <p>{`temp : ${temp}`}</p>
      <img src={imgUrl} alt="アイコン" />
    </>
  )
}
