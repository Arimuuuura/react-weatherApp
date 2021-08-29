import React from 'react'
import { Input } from './ui/Input';
import { Place } from './ui/Place';
import { Main } from './ui/Main';
import { Temp } from './ui/Temp';
import { Detail } from './ui/Detail';

export const MainArea = (props) => {

  const { onChange, onClick, data } = props;
  const { name, main, weather, wind, clouds, visibility, sys } = data;
  const { temp, temp_min, temp_max, feels_like, humidity, pressure } = main;
  const [{ description, icon }] = weather;
  const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const { deg, gust, speed } = wind;
  const { all } = clouds;
  const { sunrise, sunset } = sys;

  return (
    <>
      <Input onChange={onChange} onClick={onClick}>GET</Input>
      <Place data={data}>{name}</Place>
      <Main description={description} temp={temp} imgUrl={imgUrl} />
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
