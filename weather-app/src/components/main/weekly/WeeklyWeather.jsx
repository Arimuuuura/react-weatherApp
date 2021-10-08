import React, { memo } from 'react'
import styled from 'styled-components';
import { getDecimal } from '../../../shared/util';

const SUl = styled.ul`
  display: flex;
  padding: 4px 0;
  & li {
    width: calc(100% / 5);
    text-align: center;
    line-height: 40px;
  }
`

const Icon = styled.img`
  width: 40px;
  display: block;
  margin: 0 auto;
`

export const WeeklyWeather = memo((props) => {
  const { data } = props;

  if (Object.keys(data).length === 0) return null;
  const { cod, list} = data;
  // todo cod を使ってレスポンス結果の出し分け実装 cod : 200 or 404

  const weeklyData = list.map((val, index) => {
    const id = index;
    const dt = new Date(val.dt * 1000).getHours();
    const getDay = new Date(val.dt * 1000).getDay();
    const dayOfWeek = [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ][getDay] ;
    const icon = <Icon src={`http://openweathermap.org/img/wn/${val.weather[0].icon}@2x.png`} alt="アイコン" />;
    const pop = `${getDecimal(val.pop * 100)}%`;
    const temp = `${getDecimal(val.main.temp)}℃`;
    const humidity = `${getDecimal(val.main.humidity)}%`;

    return {
      id,
      dt,
      dayOfWeek,
      icon,
      pop,
      temp,
      humidity,
    }
  })

  return (
    <>
      <div>
        <SUl>
          <li></li>
          <li>天気</li>
          <li>降水</li>
          <li>気温</li>
          <li>湿度</li>
        </SUl>
      </div>
      {
        weeklyData.map((val) => (
          val.dt === 12 ? (
            <SUl>
              <li>{val.dayOfWeek}</li>
              <li>{val.icon}</li>
              <li>{val.pop}</li>
              <li>{val.temp}</li>
              <li>{val.humidity}</li>
            </SUl>
          ) : null
        ))
      }
    </>
  )
})
