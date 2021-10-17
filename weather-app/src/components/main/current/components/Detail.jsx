import React, { memo } from 'react'
import styled from 'styled-components';
import { getDecimal } from '../../../../shared/util';

const Container = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px 0;
  padding: 16px 0;
`

export const Detail = memo((props) => {

  const {
    humidity,
    pressure,
    sunrise,
    sunset,
    deg,
    speed,
    gust,
    all,
    visibility
  } = props;

  // 日の出、日の入りの計算
  const getTime = (time) => {
    const hours = new Date(time * 1000).getHours();
    const minutes = new Date(time * 1000).getMinutes();
    return `${hours}:${minutes}`;
  }

  // 風向きの定義
  let windDirection;
  if (deg <= 22.5) {
    windDirection = '北風';
  } else if (deg <= 67.5) {
    windDirection = '北東風';
  } else if (deg <= 112.5) {
    windDirection = '東風';
  } else if (deg <= 157.5) {
    windDirection = '南東風';
  } else if (deg <= 202.5) {
    windDirection = '南風';
  } else if (deg <= 247.5) {
    windDirection = '南西風';
  } else if (deg <= 292.5) {
    windDirection = '西風';
  } else if (deg <= 337.5) {
    windDirection = '北西風';
  } else if (deg <= 360) {
    windDirection = '北風';
  }

  return (
    <>
      <Container>
        <p>{`湿度 ${humidity}％`}</p>
        <p>{`気圧 ${pressure}hPa`}</p>
        <p>{`日の出 ${getTime(sunrise)}`}</p>
        <p>{`日の入り ${getTime(sunset)}`}</p>
        <p>{`${windDirection} ${getDecimal(speed)}m/s`}</p>
        <p>{ gust ? `突風 ${getDecimal(gust)}m/s` : '突風情報なし' }</p>
        <p>{`雲量 ${all}％`}</p>
        <p>{`視程 ${visibility}m`}</p>
      </Container>
    </>
  )
})
