import React, { memo } from 'react'
import styled from 'styled-components';
import { getDecimal } from '../../../../shared/util';

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  p.temp_min {
    color: blue;
  }
  p.temp_max {
    color: red;
  }
  p.feels_like {
    color: green;
  }
`

export const Temp = memo((props) => {

  const { temp_min, temp_max, feels_like } = props;

  return (
    <Container>
      <p className="temp_min">{`最低 ${getDecimal(temp_min)}℃`}</p>
      <p className="temp_max">{`最高 ${getDecimal(temp_max)}℃`}</p>
      <p className="feels_like">{`体感 ${getDecimal(feels_like)}℃`}</p>
    </Container>
  )
})
