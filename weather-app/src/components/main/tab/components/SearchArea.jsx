import React from 'react'
import styled from 'styled-components';
import { Button } from './button/Button';
import { Input } from './Input';

const Container = styled.div`
  background: rgba(0, 128, 128, 0.5);
  padding: 16px;
  & span {
    margin: 16px;
  }
`

export const SearchArea = (props) => {
  const { onClick, first, second } = props;

  const Inputs = [
    {
      before: "〒",
      placeholder: "100",
      changeEvent: first,
    },
    {
      before: "-",
      placeholder: "0000",
      changeEvent: second,
    },
  ]

  return (
    <Container>
      {
        Inputs.map(input => (
          <>
            <span>{input.before}</span>
            <Input placeholder={input.placeholder} onChange={input.changeEvent} />
          </>
        ))
      }
      <Button onClick={onClick}>検索</Button>
    </Container>
  )
}
