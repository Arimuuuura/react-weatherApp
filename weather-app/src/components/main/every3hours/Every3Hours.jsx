import React, { memo, useContext } from 'react'
import styled from 'styled-components';
import { WeatherDataContext } from '../../../providers/WeatherDataProvider';
import { getDecimal } from '../../../shared/util';

const Container = styled.div`
  display: flex;
  background-color: rgba(0, 128, 128, 0.5);
  font-size: 16px;
`

const TitleUl = styled.ul`
  text-align: center;
  & li {
    width: 56px;
    box-sizing: border-box;
  }
  & span {
    display: block;
    height: 40px;
    line-height: 40px;
  }
`

const ContainerResult = styled.div`
  overflow: scroll;
  display: flex;
`

const ResultUl = styled.ul`
  text-align: center;
  & li {
    width: calc((414px - 56px) / 5);
    box-sizing: border-box;
  }
`

const Icon = styled.img`
  width: 40px;
  display: block;
  margin: 0 auto;
`

export const Every3Hours = memo(() => {

  const { weeklyData } = useContext(WeatherDataContext);

  if (Object.keys(weeklyData).length === 0) return null;
  const { list } = weeklyData;

  const data = list.map((val, index) => {
    const id = index;
    const dt = `${new Date(val.dt * 1000).getHours()}時`;
    const temp = `${getDecimal(val.main.temp)}℃`;
    const humidity = `${getDecimal(val.main.humidity)}%`;
    const icon = <Icon src={`http://openweathermap.org/img/wn/${val.weather[0].icon}@2x.png`} alt="アイコン" />;
    const speed = `${getDecimal(val.wind.speed)}m/s`;

    return {
      id,
      dt,
      temp,
      humidity,
      icon,
      speed
    }
  })

  return (
    <Container>
      <TitleUl>
        <li>時間</li>
        <li><span>天気</span></li>
        <li>気温</li>
        <li>湿度</li>
        <li>風速</li>
      </TitleUl>
      <ContainerResult>
        {
          data.map((val, index) => (
            val.id < 8 ? (
              <ResultUl key={index}>
                <li>{val.dt}</li>
                <li>{val.icon}</li>
                <li>{val.temp}</li>
                <li>{val.humidity}</li>
                <li>{val.speed}</li>
              </ResultUl>
            ) : null
          ))
        }
      </ContainerResult>
    </Container>
  )
})
