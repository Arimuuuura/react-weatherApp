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
  const [error, setError] = useState(false)
  const [isSearch, setIsSearch] = useState(true)

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
        setError(false);
      }).catch((err) => {
        console.log(err);
        setError(true);
      });
    };

    const fetchWeeklyData = async () => {
      await axios.get(
        getWeeklyApiUrl,
      ).then((res) => {
        setWeeklyData(res.data);
        setIsLoading(false);
        setError(false);
      }).catch((err) => {
        console.log(err);
        setError(true);
      });
    };

    fetchCurrentData();
    fetchWeeklyData();
    // eslint-disable-next-line
  }, [zipCode, cityCode]);

  // 入力された数字を半角数字に置き換える関数
  const isHankaku = (zipCode) => {
    return zipCode.replace(/[０-９]/g, (str) => {
      return String.fromCharCode(str.charCodeAt(0) - 0xFEE0);
    });
  }

  const onChangeFirstText = (e) => {
    const firstText = isHankaku(e.target.value);
    setFirstText(firstText);
    if (firstText.match(/^[0-9]{3}$/)) {
      // フォーカスを変える
    }
  }

  const onChangeSecondText = (e) => {
    const secondText = isHankaku(e.target.value);
    setSecondText(secondText);
    if (firstText.match(/^[0-9]{3}$/) && secondText.match(/^[0-9]{4}$/)) {
      setIsSearch(false);
    }
  }

  // 都道府県を変更したときのイベント
  const onChangeCity = (e) => {
    const code = e.target.value;
    setZipCode('');
    setFirstText('');
    setSecondText('');
    setIsSearch(true);
    setCityCode(code);
  };

  // 検索ボタンを押したときのイベント
  const onClickSearch = () => {
    setCityCode('');
    setZipCode(`${firstText}-${secondText}`);
  }

  // クリアボタンを押したときのイベント
  const onClickClear = () => {
    setCityCode('1850144');
    setZipCode('');
    setFirstText('');
    setSecondText('');
    setError(false);
    setIsSearch(true);
  };

  return (
    <WeatherDataContext.Provider
      value={{
        isLoading,
        onChangeFirstText,
        onChangeSecondText,
        onClickSearch,
        onClickClear,
        onChangeCity,
        currentData,
        weeklyData,
        firstText,
        secondText,
        error,
        isSearch,
      }}
    >
      { children }
    </WeatherDataContext.Provider>
  )
}
