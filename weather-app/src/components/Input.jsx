import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Place } from './Place';
import { Main } from './Main';
import { Weather } from './Weather';
import { Wind } from './Wind';

export const Input = () => {

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
            <input onChange={onChangeText} />
            <button onClick={onClickGetCode}>GET</button>
            <Place data={data} />
            <Main data={data} />
            <Weather data={data} />
            <Wind data={data} />
          </>
        )
      }
    </>
  )
}
