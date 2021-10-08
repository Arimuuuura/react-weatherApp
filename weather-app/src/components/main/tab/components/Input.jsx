import React from 'react'
import styled from 'styled-components';

const SInput = styled.input`
  font-size: 20px;
  box-sizing: border-box;
  padding: 10px;
  width: 120px;
  height: 40px;
  border-radius: 5px;
`

export const Input = (props) => {

  const { onChange, placeholder } = props;

  return (
    <>
      <SInput onChange={onChange} placeholder={placeholder} />
    </>
  )
}
