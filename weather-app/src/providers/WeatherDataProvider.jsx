import React, { createContext, useState, useEffect, useRef } from 'react'
import { useWeatherDataRepository } from '../api/fetchWeatherData';

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
  const [error, setError] = useState();
  const [canSearch, setCanSearch] = useState(false)

  const { fetchCurrentData, fetchWeeklyData } = useWeatherDataRepository(zipCode, cityCode)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        const resCurrentData = await fetchCurrentData()
        const resWeeklyData = await fetchWeeklyData();
        setCurrentData(resCurrentData.data);
        setWeeklyData(resWeeklyData.data);
        setError(false);
      } catch (err) {
        console.log(err)
        if (err && err.message) {
          setError(err.message)
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchWeatherData()
    // eslint-disable-next-line
  }, [zipCode, cityCode]);

  // フォーカスの監視
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  useEffect(() => {
    if (firstText.match(/^[0-9]{3}$/)) {
      secondTextRef.current && secondTextRef.current.focus();
    } else {
      firstTextRef.current && firstTextRef.current.focus();
    }
  }, [isLoading, firstText])

  // 適切に郵便番号が入力されている状態でエンターキーを押した場合検索できる
  const onKeyDown = (e) => {
    if (!canSearch && e.keyCode === 13) {
      onClickSearch()
    }
  }

  // 入力された数字を半角数字に置き換える関数
  const replaceHalfWidth = (zipCode) => {
    return zipCode.replace(/[０-９]/g, (str) => {
      return String.fromCharCode(str.charCodeAt(0) - 0xFEE0);
    });
  }

  const onChangeFirstText = (e) => {
    const firstText = replaceHalfWidth(e.target.value);
    setFirstText(firstText);
  }

  const onChangeSecondText = (e) => {
    const secondText = replaceHalfWidth(e.target.value);
    setSecondText(secondText);
  }

  // 検索ボタンの活性、非活性の監視
  useEffect(() => {
    if (firstText.match(/^[0-9]{3}$/) && secondText.match(/^[0-9]{4}$/)) {
      setCanSearch(true);
    } else {
      setCanSearch(false);
    }
  }, [firstText, secondText])

  // 都道府県を変更したときのイベント
  const onChangeCity = (e) => {
    const code = e.target.value;
    setZipCode('');
    setFirstText('');
    setSecondText('');
    setCanSearch(false);
    setCityCode(code);
  };

  // 検索ボタンを押したときのイベント
  const onClickSearch = () => {
    if (!canSearch) return
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
    setCanSearch(false);
  };

  return (
    <WeatherDataContext.Provider
      value={{
        isLoading,
        firstText,
        secondText,
        firstTextRef,
        secondTextRef,
        onChangeFirstText,
        onChangeSecondText,
        canSearch,
        onClickSearch,
        onClickClear,
        onKeyDown,
        onChangeCity,
        currentData,
        weeklyData,
        error,
      }}
    >
      { children }
    </WeatherDataContext.Provider>
  )
}
