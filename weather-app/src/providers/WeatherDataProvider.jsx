import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const WeatherDataContext = createContext({});

export const WeatherDataProvider = (props) => {
  const { children } = props;
  const [currentData, setCurrentData] = useState({});
  const [weeklyData, setWeeklyData] = useState({});
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');
  const [zipCode, setZipCode] = useState('')
  const [cityCode, setCityCode] = useState('1850144')
  const [isLoading, setIsLoading] = useState(true)

  const API_KEY = process.env.REACT_APP_API_KEY;
  const CURRENT_WEATHER_URL = process.env.REACT_APP_CURRENT_WEATHER_URL;
  const WEEKLY_WEATHER_URL = process.env.REACT_APP_WEEKLY_WEATHER_URL;
  const LANGUAGE = process.env.REACT_APP_LANGUAGE;
  const UNITS = process.env.REACT_APP_UNITS;

  const query = `?${zipCode ? `zip=${zipCode},jp` : `id=${cityCode}`}&appid=${API_KEY}&lang=${LANGUAGE}&units=${UNITS}`;

  const getCurrentApiUrl = `${CURRENT_WEATHER_URL}${query}`;
  const getWeeklyApiUrl = `${WEEKLY_WEATHER_URL}${query}`;

  useEffect(() => {
    const fetchCurrentData = async () => {
      await axios.get(
        getCurrentApiUrl,
      ).then((res) => {
        setCurrentData(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    };

    const fetchWeeklyData = async () => {
      await axios.get(
        getWeeklyApiUrl,
      ).then((res) => {
        setWeeklyData(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    };

    fetchCurrentData();
    fetchWeeklyData();
    // eslint-disable-next-line
  }, [zipCode, cityCode]);

  const onChangeTextFirst = (e) => {
    setFirstText(e.target.value);
  }

  const onChangeTextSecond = (e) => {
    setSecondText(e.target.value);
  }

  const onClickGetZip = () => {
    setCityCode('');
    setZipCode(`${firstText}-${secondText}`);
  }

  const onChangeGetCity = (e) => {
    const code = e.target.value;
    setZipCode('');
    setCityCode(code);
  };

  const onClickClear = () => {
    setCityCode('1850144');
    setZipCode('');
    setFirstText('');
    setSecondText('');
  };

  return (
    <WeatherDataContext.Provider
      value={{
        isLoading,
        onChangeTextFirst,
        onChangeTextSecond,
        onClickGetZip,
        onClickClear,
        onChangeGetCity,
        currentData,
        weeklyData,
        firstText,
        secondText
      }}
    >
      { children }
    </WeatherDataContext.Provider>
  )
}
