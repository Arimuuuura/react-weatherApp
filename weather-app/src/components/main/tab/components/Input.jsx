import React, { memo } from 'react'
import styled from 'styled-components';

const SInput = styled.input`
  font-size: 20px;
  box-sizing: border-box;
  padding: 10px;
  width: 120px;
  height: 40px;
  border-radius: 5px;
`

export const Input = memo((props) => {

  const { onChange, placeholder, value, focus } = props;

  return (
    <>
      <SInput ref={focus} type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </>
  )
})
