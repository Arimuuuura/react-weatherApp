import React, { memo } from 'react'
import styled from 'styled-components'

const SButton = styled.button`
  font-family: 'Yusei Magic', sans-serif;
  cursor: pointer;
  display: inline-block;
  border: none;
  box-shadow: 2px 2px 4px gray;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: white;
  height: 40px;
  padding: 0 24px;
  &: hover {
    box-shadow: 2px 2px 4px gray;
    opacity: .8;
  }
`

export const Button = memo((props) => {

  const { onClick, children, color, disabled } = props;

  return (
    <>
      <SButton style={{backgroundColor: color, opacity: disabled && '.3'}} disabled={disabled} onClick={onClick}>{ children }</SButton>
    </>
  )
})
