import React, { useState, memo, useContext } from 'react'
import styled from 'styled-components';
import { Place } from './components/Place';
import { Main } from './components/Main';
import { Temp } from './components/Temp';
import { Detail } from './components/Detail';
import { WeatherDataContext } from '../../../providers/WeatherDataProvider';

const ToggleText = styled.p`
  font-size: 14px;
  margin-right: 0;
  padding: 16px 28px;
  text-align: end;
  color: skyBlue;
  user-select: none;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`

export const Current = memo(() => {
  const [isDetail, setIsDetail] = useState(false);

  const { currentData } = useContext(WeatherDataContext);
  if (Object.keys(currentData).length === 0) return null;

  const { name, main, weather, wind, clouds, visibility, sys } = currentData;
  const { temp, temp_min, temp_max, feels_like, humidity, pressure } = main;
  const [{ description, icon }] = weather;
  const { deg, gust, speed } = wind;
  const { all } = clouds;
  const { sunrise, sunset } = sys;

  const onClickDetail = () => {
    // todo ゆっくりアニメーションできない
    setIsDetail(!isDetail);
  }

  return (
    <>
      <Place data={currentData}>{name}</Place>
      <Main description={description} temp={temp} icon={icon} />
      <Temp temp_min={temp_min} temp_max={temp_max} feels_like={feels_like} />
      <ToggleText onClick={onClickDetail}>{isDetail ? "閉じる" : "詳しく見る"}</ToggleText>
      {
        isDetail && (
          <Detail
            humidity={humidity}
            pressure={pressure}
            sunrise={sunrise}
            sunset={sunset}
            deg={deg}
            speed={speed}
            gust={gust}
            all={all}
            visibility={visibility}
          />
        )
      }
    </>
  )
})
