import React, { useState, memo } from 'react'
import styled from 'styled-components';
import { Place } from '../Place';
import { Main } from '../Main';
import { Temp } from '../Temp';
import { Detail } from '../Detail';

const ToggleText = styled.p`
  font-size: 14px;
  margin: 16px 28px 0 0;
  text-align: end;
`

export const MainArea = memo((props) => {
  // console.log("MainArea");

  const [isDetail, setIsDetail] = useState(false);

  const { data } = props;
  if (Object.keys(data).length === 0) return null;

  const { name, main, weather, wind, clouds, visibility, sys } = data;
  const { temp, temp_min, temp_max, feels_like, humidity, pressure } = main;
  const [{ description, icon }] = weather;
  const { deg, gust, speed } = wind;
  const { all } = clouds;
  const { sunrise, sunset } = sys;

  const onClickDetail = () => {
    setIsDetail(!isDetail);
  }

  return (
    <>
      <Place data={data}>{name}</Place>
      <Main description={description} temp={temp} icon={icon} />
      <Temp temp_min={temp_min} temp_max={temp_max} feels_like={feels_like} />
      {
        isDetail ? (
          <>
            <ToggleText onClick={onClickDetail}>閉じる</ToggleText>
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
          </>
        ) : (
          <ToggleText onClick={onClickDetail}>詳しく見る</ToggleText>
        )
      }
    </>
  )
})
