import React from 'react'
import styled from 'styled-components';
import { getDecimal } from '../../../../shared/util';

const Container = styled.div`
  text-align: center;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 16px auto;
`

export const Main = (props) => {

  const { description, temp, icon } = props;
  const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <Container>
      <TextContainer>
        <p>{description}</p>
        <p>{`${getDecimal(temp)}℃`}</p>
      </TextContainer>
      <img src={imgUrl} alt="アイコン" />
    </Container>
  )
}
