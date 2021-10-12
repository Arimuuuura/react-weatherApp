import React from 'react'
import styled from 'styled-components'

const SButton = styled.button`
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
    opacity: .7;
  }
`

export const Button = (props) => {

  const { onClick, children, color } = props;

  return (
    <>
      <SButton style={{backgroundColor: color}} onClick={onClick}>{ children }</SButton>
    </>
  )
}
