import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetData = () => {
  const [data, setData] = useState({});
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');
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

  const onChangeTextFirst = (e) => {
    setFirstText(e.target.value);
  }

  const onChangeTextSecond = (e) => {
    setSecondText(e.target.value);
  }

  const onClickGetCode = () => {
    setZipCode(`${firstText}-${secondText}`);
  }

  return { isLoading, onChangeTextFirst, onChangeTextSecond, onClickGetCode, data }
}
