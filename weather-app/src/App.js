import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { MainArea } from './components/MainArea';

const Container = styled.div`
  background-color: aqua;
`

export const App = () => {

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
    <Container>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <MainArea  onChange={onChangeText} onClick={onClickGetCode} data={data} />
          </>
        )
      }
    </Container>
  )
}
