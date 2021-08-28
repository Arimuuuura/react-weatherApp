import React from 'react'
import { Place } from './ui/Place';
import { Main } from './ui/Main';
import { Weather } from './ui/Weather';
import { Wind } from './ui/Wind';
import { Clouds } from './ui/Clouds';
import { Visibility } from './ui/Visibility';
import { Sys } from './ui/Sys';
import { Input } from './ui/Input';

export const MainArea = (props) => {

  const { onChange, onClick, data } = props;

  return (
    <>
      <Input onChange={onChange} onClick={onClick}>GET</Input>
      <Place data={data} />
      <Main data={data} />
      <Weather data={data} />
      <Wind data={data} />
      <Clouds data={data} />
      <Visibility data={data} />
      <Sys data={data} />
    </>
  )
}
