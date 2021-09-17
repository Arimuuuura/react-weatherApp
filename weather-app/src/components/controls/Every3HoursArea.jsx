import React from 'react'
import styled from 'styled-components';
import { useGetData } from '../../function/getData';

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
  width: 64px;
  text-align: center;
`

const Icon = styled.img`
  width: 40px;
  display: block;
  margin: 0 auto;
`

export const Every3HoursArea = () => {

  const { weeklyData } = useGetData();

  if (Object.keys(weeklyData).length === 0) return null;
  const { cod, list} = weeklyData;
  // todo cod を使ってレスポンス結果の出し分け実装 cod : 200 or 404

  const kinds = list.map((val, index) => {
    const id = index;
    const dt = `${new Date(val.dt * 1000).getHours()}時`;
    const temp = `${val.main.temp}℃`;
    const humidity = `${val.main.humidity}%`;
    const icon = <Icon src={`http://openweathermap.org/img/wn/${val.weather[0].icon}@2x.png`} alt="アイコン" />;
    const speed = `${val.wind.speed}m/s`;

    return {
      id,
      dt,
      temp,
      humidity,
      icon,
      speed
    }
  })

  console.log(kinds);

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
          kinds.map((val) => (
            val.id < 8 ? (
              <ResultUl>
                <li key={val.id}>{val.dt}</li>
                <li key={val.id}>{val.icon}</li>
                <li key={val.id}>{val.temp}</li>
                <li key={val.id}>{val.humidity}</li>
                <li key={val.id}>{val.speed}</li>
              </ResultUl>
            ) : null
          ))
        }
      </ContainerResult>
    </Container>
  )
}
