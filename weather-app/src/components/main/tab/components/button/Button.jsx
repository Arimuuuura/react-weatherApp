import React from 'react'
import styled from 'styled-components'

const SearchButton = styled.button`
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: white;
  height: 40px;
  padding: 0 24px;
  background-color: skyblue;
  margin: 16px;
`

export const Button = (props) => {

  const { onClick, children } = props;

  return (
    <>
      <SearchButton onClick={onClick}>{ children }</SearchButton>
    </>
  )
}
