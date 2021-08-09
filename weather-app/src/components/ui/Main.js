import { useState, useEffect } from 'react';
import axios from 'axios';
import { City } from "./City";
import { Temp } from "./Temp";

const URL = 'https://api.openweathermap.org/data/2.5/weather?zip=178-0061,jp&appid=8f241f6e111e93a94a517a3c6477329e&lang=ja&units=metric'

export const Main = () => {
  const [ weather, setWeather ] = useState([])
  // const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
    const result = await axios(URL)
    console.log(result.data);

    setWeather(result.data)
    // setIsLoading(false)
    }
    fetchItems()
  }, [])
  // const imgUrl = `http://openweathermap.org/img/wn/04d@2x.png`;
  console.log(weather);
  return (
    <div>
      <City weather={ weather } />
      <Temp weather={ weather } />
    </div>
  )
}
