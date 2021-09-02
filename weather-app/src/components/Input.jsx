import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
  font-size: 20px;
  box-sizing: border-box;
  padding: 10px;
  width: 120px;
  height: 40px;
  border-radius: 5px;
`

export const InputBox = (props) => {

  const { onChange, placeholder } = props;

  return (
    <>
      <Input onChange={onChange} placeholder={placeholder} />
    </>
  )
}
