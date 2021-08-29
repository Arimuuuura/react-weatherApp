import React from 'react'
import styled from 'styled-components';

const CityName = styled.h2`
  text-align: center;
  font-size: 24px;
  padding: 16px 0;
`

export const Place = (props) => {

  if (!Object.keys(props.data).length) return null

  const { data } = props;

  return (
    <>
      <CityName>{data.name}</CityName>
    </>
  )
}
