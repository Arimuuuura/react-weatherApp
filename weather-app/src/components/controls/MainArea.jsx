import React from 'react'
import { Place } from '../Place';
import { Main } from '../Main';
import { Temp } from '../Temp';
import { Detail } from '../Detail';

export const MainArea = (props) => {

  const { data } = props;
  if (Object.keys(data).length === 0) return null;

  const { name, main, weather, wind, clouds, visibility, sys } = data;
  const { temp, temp_min, temp_max, feels_like, humidity, pressure } = main;
  const [{ description, icon }] = weather;
  const { deg, gust, speed } = wind;
  const { all } = clouds;
  const { sunrise, sunset } = sys;

  return (
    <>
      <Place data={data}>{name}</Place>
      <Main description={description} temp={temp} icon={icon} />
      <Temp temp_min={temp_min} temp_max={temp_max} feels_like={feels_like} />
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
  )
}
