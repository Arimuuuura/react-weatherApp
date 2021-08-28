import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Place } from './ui/Place';
import { Main } from './ui/Main';
import { Weather } from './ui/Weather';
import { Wind } from './ui/Wind';
import { Clouds } from './ui/Clouds';
import { Visibility } from './ui/Visibility';
import { Sys } from './ui/Sys';
import { Input } from './ui/Input';

export const MainArea = () => {

  const [data, setData] = useState({});
  const [text, setText] = useState('');
  const [zipCode, setZipCode] = useState('170-0012')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},jp&appid=8f241f6e111e93a94a517a3c6477329e&lang=ja&units=metric`,
      );

      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [zipCode]);

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onClickGetCode = () => {
    setZipCode(text);
  }

  console.log(data);

  return (
    <>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Input onChange={onChangeText} onClick={onClickGetCode}>GET</Input>
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
    </>
  )
}
