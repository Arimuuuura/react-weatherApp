import React, { memo } from 'react'
import styled from 'styled-components';

const CityName = styled.h2`
  text-align: center;
  font-size: 24px;
  padding: 16px 0;
`

export const Place = memo((props) => {

  const { children } = props;

  return (
    <>
      <CityName>{children}</CityName>
    </>
  )
})
