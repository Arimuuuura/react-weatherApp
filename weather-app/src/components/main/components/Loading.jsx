import React, { memo } from 'react'
import styled from 'styled-components'
import spinner from '../../images/spinner.gif'

const LoadingText = styled.p`
  width: 200px;
  margin: 0 auto;
  padding: 80px 0 0;
  text-align: center;
  font-size: 24px;
`

const Spinner = styled.img`
  width: 100px;
  padding: 50px;
  margin: 0 auto;
  display: block;
`

export const Loading = memo(() => {
  return (
    <>
      <LoadingText>Loading..</LoadingText>
      <Spinner src={ spinner } alt='Loading' />
    </>
  )
})
