import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetData = () => {
  const [currentData, setCurrentData] = useState({});
  const [weeklyData, setWeeklyData] = useState({});
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');
  const [zipCode, setZipCode] = useState('')
  const [cityCode, setCityCode] = useState('1850144')
  const [isLoading, setIsLoading] = useState(true)
  const [isZip, setIsZip] = useState(false)
  const [isCity, setIsCity] = useState(true)

  const API_KEY = process.env.REACT_APP_API_KEY;
  const CURRENT_WEATHER_URL = process.env.REACT_APP_CURRENT_WEATHER_URL;
  const WEEKLY_WEATHER_URL = process.env.REACT_APP_WEEKLY_WEATHER_URL;
  const LANGUAGE = process.env.REACT_APP_LANGUAGE;
  const UNITS = process.env.REACT_APP_UNITS;
  let getCurrentApi;
  let getWeeklyApi;
  if (isZip) {
    getCurrentApi = `${CURRENT_WEATHER_URL}?zip=${zipCode},jp&appid=${API_KEY}&lang=${LANGUAGE}&units=${UNITS}`;
    getWeeklyApi = `${WEEKLY_WEATHER_URL}?zip=${zipCode},jp&appid=${API_KEY}&lang=${LANGUAGE}&units=${UNITS}`;
  } else if (isCity) {
    getCurrentApi = `${CURRENT_WEATHER_URL}?id=${cityCode}&appid=${API_KEY}&lang=${LANGUAGE}&units=${UNITS}`;
    getWeeklyApi = `${WEEKLY_WEATHER_URL}?id=${cityCode}&appid=${API_KEY}&lang=${LANGUAGE}&units=${UNITS}`;
  }

  useEffect(() => {
    const fetchCurrentData = async () => {
      await axios.get(
        getCurrentApi,
      ).then((res) => {
        setCurrentData(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    };

    const fetchWeeklyData = async () => {
      await axios.get(
        getWeeklyApi,
      ).then((res) => {
        setWeeklyData(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    };

    fetchCurrentData();
    fetchWeeklyData();
  }, [zipCode, cityCode]);

  const onChangeTextFirst = (e) => {
    setFirstText(e.target.value);
  }

  const onChangeTextSecond = (e) => {
    setSecondText(e.target.value);
  }

  const onClickGetZip = () => {
    setZipCode(`${firstText}-${secondText}`);
    setCityCode('');
    setIsCity(false);
    setIsZip(true);
  }

  const onClickGetCity = () => {
    setCityCode('1850144');
    setIsZip(false);
    setIsCity(true);
  }

  return { isLoading, onChangeTextFirst, onChangeTextSecond, onClickGetZip, onClickGetCity, currentData, weeklyData }
}
